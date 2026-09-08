# Sheep-Counting Problems for Computer Science

Suppose I tell you:

> Ten minutes ago, I was thinking about birds.

Can you verify that this is true?

Now consider a different situation. You give me a page of fresh arithmetic exercises. Ten minutes later I return it with the answers filled in, and most of them are correct.

This does not reveal everything that happened in my head. Perhaps I used an unexpected shortcut. Perhaps one of the answers happened to be familiar. But, with a sufficiently fresh collection of exercises, the completed page is at least fairly direct evidence that I spent some of the interval doing arithmetic.

The two situations differ in an interesting way. In both cases the thing we would like to know is partly private: it concerns computation inside somebody's head. In the first case there may be almost no external evidence. In the second, the computation naturally produces something that can be checked.

I do not know whether there is a useful theory hiding here. The examples below are still exploratory, and several of the proposed definitions are probably not the right ones. But the questions have a familiar computer-science shape: there is hidden computation, input, output, a verifier, possible preprocessing, adversarial strategies, and a cost difference between finding an answer and checking it.

I will call questions in this area **sheep-counting problems**.

The name comes from the literal exercise of counting sheep in one's head. It is a deliberately silly representative of a serious difficulty: a mental process may be real, lengthy, and important to the person performing it while leaving very little evidence outside the mind.

The aim of this post is not to claim a finished framework. It is to collect a few examples that seem to belong together, and to see how far familiar tools from theoretical computer science can organize them.

## The easiest case: give somebody a problem

The arithmetic example is almost too easy, but it is useful because it gives us one end of the spectrum.

Suppose I choose fresh exercises

```text
137 × 284 = ?
519 - 287 = ?
...
```

and ask you to solve them mentally. You give me the answers.

There is a clear input, a clear output, and a clear relation between them. If the answers are correct, I have evidence that some computation relevant to the exercises happened.

Even here, the word *proof* should be used carefully. A correct answer does not identify the exact algorithm used in your head. It does not prove that you followed the method I expected. And if the input was predictable enough, you might have prepared the answer earlier.

Still, this is the easy case because I control the challenge. I can choose an input that is fresh, I can make the answer objectively checkable, and I can choose many independent exercises if I want more confidence.

In schematic form:

```text
fresh input x  --->  private computation  --->  answer w

                         verifier checks R(x, w)
```

The interesting cases begin when one of these arrows becomes weak, or when nobody supplied a clean input in the first place.

## Literal sheep counting

Suppose I ask you to lie down and count sheep for ten minutes.

At the end you say:

> I reached 843.

The number is an output, but it is a poor one. You could have invented 843 at the end. You could have counted for one minute and then stopped. The same final number is compatible with many different internal histories.

Perhaps there are other observations. You yawned. You became visibly sleepy. You fell asleep.

If counting sheep actually changes the probability of those outcomes, then they are evidence of some sort. But they are not certificates in the mathematical sense. Somebody can become sleepy without counting sheep, and somebody can count sheep without becoming sleepy.

So the problem is not simply whether a mental process has an output. The more useful question is how strongly the observable output is **bound** to the claimed computation.

At one extreme, the statement

> I was thinking about birds ten minutes ago

may leave no useful distinguishing trace at all.

At another extreme, a long list of correct responses to fresh exercises may be difficult to produce without repeatedly doing something closely related to the claimed work.

Literal sheep counting sits uncomfortably in between. It specifies a real task, but the obvious final output is only weakly coupled to its execution.

## The babysitter

A different difficulty appears with a babysitter.

A babysitter is left with a sleeping child for three hours. The parent returns. The child is still asleep and everything is fine.

Was the babysitter attentive during the whole interval?

The successful outcome may tell us very little. A diligent babysitter and a sleeping babysitter can both produce the same quiet evening.

Suppose instead the parent returns to find that the child had been crying for a long time and needed help. It is tempting to treat this as evidence that the babysitter was not paying attention.

But that inference contains an assumption which is easy to overlook. An attentive babysitter could notice the problem and deliberately refuse to help.

So

```text
child was neglected  =>  babysitter was inattentive
```

is not true against an arbitrary strategy. It is evidence only if we assume that an attentive babysitter is also trying to babysit well.

This distinction seems important enough to keep.

### Strategy-independent evidence

Call evidence **strategy-independent** when the relevant guarantee continues to hold even if the prover deliberately chooses the most misleading available behavior.

The arithmetic example can approach this form. If an answer is fresh and genuinely difficult to obtain without doing the relevant calculation, wanting to deceive the verifier does not by itself create a shortcut.

### Incentive-dependent evidence

Other evidence works only under assumptions about what the person is trying to achieve.

The neglected child may be good evidence of inattention when the babysitter is cooperative and wants the child to be safe. It is not a strategy-independent certificate of inattention.

This is not a criticism of such evidence. Most evidence about human behavior depends on incentives. It is simply a different object from a proof whose soundness quantifies over adversarial prover strategies.

That distinction will matter again when we ask whether one can prove that a thought *did not* happen.

## A strange chess game

Consider a more artificial example.

A jealous girlfriend leaves her boyfriend at a party. She would like some evidence that, while she is away, he is not devoting serious attention to somebody else.

She tells him to play chess continuously.

When she returns, she looks at the game. Imagine that she knows his normal chess performance well enough to compare the observed play with his baseline: move quality, blunder rate, score, or whatever statistic is appropriate. In the cartoon version of the story, she asks whether his performance remains inside an acceptable statistical range.

Bad chess does not prove that he was distracted. He could deliberately play badly.

Good chess is more interesting. If a long sequence of competent responses to fresh opponent moves is genuinely difficult to produce without substantial chess computation, then the game transcript can be positive evidence that he was engaged with chess.

But that is still not what the girlfriend ultimately cares about. Her desired conclusion is negative:

> he was not substantially occupied with the competing activity.

The chess game can support that conclusion only with an additional assumption:

> the certified chess computation and the competing activity cannot both fit into the available cognitive resources during the relevant interval.

This is a different route to negative evidence. We do not infer absence from failure. We positively certify one activity and use an **exclusion assumption** to rule out another.

In schematic form:

\[
\text{evidence for }A
\quad + \quad
A\text{ cannot coexist with }B
\quad \Longrightarrow \quad
\text{evidence against }B.
\]

Whether serious chess really excludes the particular thing the girlfriend worries about is an empirical question, and probably depends on the exact notion of "serious attention" being claimed. The point of the example is only the logical shape.

It suggests that a model of sheep-counting problems may need not only computation and verification, but also a model of **cognitive resource competition**.

## A table before a theory

At this point it is tempting to divide sheep-counting problems into a few named classes. I tried doing that and found the divisions fairly unstable. The examples seem to vary along several partly independent dimensions instead.

Here is a provisional table.

| Example | Who chooses the task? | Where does the concrete input come from? | Input during the interval | Observable output | Main difficulty |
| --- | --- | --- | --- | --- | --- |
| thinking about birds | nobody necessarily | internal/world | none required | usually none | no distinguishing trace |
| arithmetic exercises | verifier | verifier | one-shot | answers | mostly easy to verify |
| literal sheep counting | verifier or prover | almost none | none after start | final count, sleepiness | output weakly binds to execution |
| babysitting | context | environment | event-driven, possibly none | reactions/outcomes | quiet success may leave no trace; failure evidence may depend on incentives |
| chess | either party | opponent and position | streaming | move transcript/performance | needs a model relating performance to cognitive work |
| monotone guest subsequence | prover or verifier | ambient group | one-shot ambient | small witness | human search cost is uncertain |
| Ramsey guest graph | prover or verifier | ambient relation graph | one-shot ambient | small witness | same |

The columns are probably not final either. But they already expose several different questions which were easy to confuse:

- Who chose the *kind* of task?
- Who controlled the concrete instance?
- Was the input fresh or predictable?
- Did new input keep arriving during the claimed computation?
- What output did the computation leave?
- How difficult is that output to fake without the claimed work?
- Does the inference survive adversarial prover behavior?
- How expensive is producing the output compared with checking it?
- What other cognitive activity would the computation exclude?

The rest of the post tries to put tentative mathematics around some of these columns.

## What exactly is being verified?

Let an interval of time be \(I\). During that interval a person has some hidden cognitive history \(H\). The outside world supplies some input process \(X\), possibly empty. The verifier sees only an observable transcript \(T\): spoken answers, choices, response times, chess moves, gestures, or other external consequences.

We care about some predicate

\[
C(H)
\]

such as

- "the prover solved these arithmetic exercises";
- "the prover maintained a running computation";
- "the prover found this combinatorial witness";
- "the prover devoted enough cognitive resources to activity \(A\)".

A verifier computes something like

\[
V(X,T) \in \{\text{accept},\text{reject}\}.
\]

This notation hides almost all of the difficult parts. In particular, what does it mean for two hidden histories to count as "the same computation"? What mental shortcuts are allowed? What if the prover can solve a task by an algorithm the verifier never imagined?

I do not have a satisfactory answer. A useful theory would probably have to define claims operationally enough that they survive alternative implementations.

Still, two familiar proof-system ideas seem useful.

### Completeness

If the prover really performs an allowed execution satisfying \(C\), there should be a way to produce an accepting transcript with high probability.

### Soundness

If the prover does not perform an execution satisfying \(C\), even the best deceptive strategy should have only a small probability of producing an accepting transcript.

This is the strong, strategy-independent notion. Many ordinary behavioral tests will not satisfy it, and that is fine. They can instead be analyzed relative to an incentive model.

The important point is to say which game we are playing.

## Why negative claims are awkward

Return to the claim

> I was not thinking about birds.

Suppose that thinking about birds merely adds some private information or experience. Afterward, a person who did think about birds can choose to behave exactly like a person who did not.

Let \(\mathcal T(A)\) be the set of observable transcripts a prover can generate after hidden activity \(A\), allowing arbitrary later strategy. If

\[
\mathcal T(\neg A) \subseteq \mathcal T(A),
\]

then no transcript can certify \(\neg A\) in a strategy-independent way. Every transcript available to the non-\(A\) prover is also available to the \(A\) prover.

This is nearly tautological, but I think it captures a genuine obstacle. Private knowledge and private thought are often **behaviorally monotone**: having done more inside one's head does not remove the ability to imitate somebody who did less.

It would be easy to overstate this observation. Human cognition can certainly change behavior involuntarily, and some mental states remove capabilities rather than adding them. The claim is only conditional: whenever the transcript sets are nested in this way, direct strategy-independent negative certificates are impossible.

The chess example suggests one way around the obstruction. Instead of directly certifying \(\neg B\), certify an incompatible \(A\).

To say that rigorously, however, we need some model of what it means for two computations not to fit in the same mind at the same time.

## A tentative resource model

The simplest idea is a bounded attention budget. During each moment the mind has capacity \(C(t)\), activity \(A\) consumes some amount, activity \(B\) consumes another amount, and the two are incompatible when their sum exceeds capacity.

That seems too crude.

Two tasks can interfere because they require the same specific channel even when neither uses anything close to all available cognition. Two verbal tasks may collide while a visual task remains possible. Conversely, two individually demanding tasks may coexist better than their total "size" suggests if they rely on different resources.

A somewhat more general abstraction is a time-varying capacitated flow network

\[
G_t=(V,E,c_t).
\]

I do not mean this as a neurological claim. The vertices need not correspond to identifiable brain areas, and the edges need not correspond to literal neural pathways. It is only a resource abstraction.

The intended interpretation is:

- edges are cognitive channels or bottlenecks;
- each edge \(e\) has capacity \(c_t(e)\), which may vary with time;
- a cognitive computation requires flow through some particular parts of the network;
- the same task may have several implementations, corresponding to different feasible routings.

For an activity \(A\), let \(\mathcal F_A\) be the set of flows that count as feasible implementations of \(A\).

Two activities \(A\) and \(B\) can coexist during an interval only if there exist

\[
f_A\in\mathcal F_A,
\qquad
f_B\in\mathcal F_B
\]

whose combined use stays within every relevant capacity:

\[
f_A(e,t)+f_B(e,t)\leq c_t(e)
\]

for all relevant \(e\) and \(t\).

This one picture captures several qualitatively different situations:

- **global exhaustion:** both tasks share a broad bottleneck and together exceed it;
- **local contention:** both require one particular edge while much of the network remains unused;
- **selective compatibility:** demanding tasks can coexist because they can be routed through mostly disjoint resources;
- **changing capacity:** fatigue, stress, practice, or environment alter \(c_t\);
- **alternative algorithms:** the prover may route a task in a way the verifier did not expect.

The last point matters especially for proof-like claims. It is not enough to show that *my favorite way* of playing chess conflicts with another activity. If some plausible implementation of chess avoids the bottleneck, the exclusion argument fails.

### Exclusion

For an interval \(I\), call \(A\) and \(B\) resource-incompatible if no pair of feasible executions from \(\mathcal F_A\) and \(\mathcal F_B\) fits inside the capacities over \(I\).

Then, conditional on this model,

\[
\text{sound positive evidence for }A
\quad\Longrightarrow\quad
\text{sound negative evidence for }B.
\]

This is the formal skeleton behind the jealous-girlfriend example.

Again, the difficult part is empirical. We would need reasons to believe that the network abstraction and the relevant capacity bounds actually describe the human in question. A proof inside the model is only as useful as those assumptions.

### Why a flow network is probably still incomplete

Cognition is stateful. A person can spend effort now to store an intermediate result and use it later. Practice can change which route is cheap. Information can be cached. A task can alter the future capacities or feasible algorithms of another task.

A more serious model would therefore need storage or state transitions at vertices, and perhaps costs for changing state as well as moving information.

I do not know whether flow is ultimately the right abstraction. Its present value is narrower: it makes the distinction between generic "mental effort" and contention for specific cognitive resources explicit.

## Where does the input come from?

The arithmetic exercise has another special property: the verifier controls the input.

That is not necessary for a sheep-counting problem.

Separate two choices:

1. **Who chooses the task or relation?**
2. **Who supplies the concrete instance?**

These can be completely different parties.

A verifier may choose both:

> Solve this multiplication problem.

But a prover might instead announce:

> I was solving this combinatorial problem on the people in the room. Here is the witness.

The verifier did not assign the task and did not generate the room.

Possible instance sources include:

- the verifier;
- the prover;
- another participant;
- a random generator;
- an opponent;
- the surrounding physical or social environment;
- some mixture of these.

The source matters because proof-of-work-like reasoning needs some protection against easy instance selection and preprocessing.

### Freshness is not exactly randomness

A party arrangement may not come from a clean random distribution. Still, it may contain information the prover could not reliably know or control beforehand.

Conversely, a perfectly random instance is not useful if the prover learns it hours before the claimed work and precomputes the answer.

So the useful notion is closer to **fresh, prover-independent uncertainty at the time online work must happen**.

An information-theoretic quantity such as conditional min-entropy might eventually be relevant, but I am not confident that it is the right measure. What matters operationally is whether advance preparation substantially reduces the cheapest online strategy.

### Static and streaming input

The timing of input also matters.

Arithmetic and the party puzzles are mostly one-shot:

\[
x \longrightarrow \text{computation} \longrightarrow w.
\]

Chess is different. The opponent repeatedly supplies fresh moves:

\[
x_1\to w_1\to x_2\to w_2\to x_3\to w_3\to\cdots
\]

A long transcript can therefore bind the claimed computation to many unpredictable moments across an interval.

Literal sheep counting is close to the opposite extreme. After the initial instruction, essentially no fresh external input is required.

This may partly explain why its final number is such weak evidence of continuous execution.

## Complexity: what does the prover have to do?

So far I have mostly discussed whether an output says anything about hidden cognition. For proof-of-work-like examples there is another requirement: producing the evidence should itself require substantially more work than checking it.

This is where a connection to Manuel Blum and Santosh Vempala's work on the complexity of human computation is useful. Their model emphasizes concrete human costs and separates preparation from online processing rather than relying only on asymptotic complexity.

For the present discussion, three costs seem useful:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

- **PREP**: work done before the fresh instance is available;
- **PROC**: online cognitive work after the relevant input arrives;
- **VER**: work needed to check the certificate or transcript.

A promising construction would have substantial \(\operatorname{PROC}\), small \(\operatorname{VER}\), and would not allow arbitrarily large realistic \(\operatorname{PREP}\) to collapse the online cost.

But even this needs an adversarial correction.

The quantity we care about is not the cost of the algorithm the puzzle designer had in mind. It is closer to

> the cost of the cheapest successful strategy available to the prover.

If a human discovers a shortcut, the shortcut is the real complexity of the task for that human. If a task can be precomputed from stable properties, then the fresh online cost may be close to zero even if a naive solver would work hard.

This is one reason the following ambient puzzles are interesting: they try to get fresh structure from the environment itself.

## Ambient puzzle I: a monotone subsequence of guests

Assume there are seventeen people with a given total order. It could simply be the order in which they are standing, but the geometry is not important; all that matters is that everybody agrees on one total order.

There is also a second total order that is already available, for example alphabetical order of the guests' names.

Read the alphabetical ranks in the given order. This produces a permutation of seventeen numbers.

The challenge is:

> Find five guests, preserving the given order, whose names are alphabetically increasing or alphabetically decreasing.

The Erdős-Szekeres monotone subsequence theorem guarantees that such a set always exists. More generally, every sequence of

\[
(r-1)(s-1)+1
\]

distinct values contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\).

Taking \(r=s=5\) gives

\[
(5-1)^2+1=17.
\]

This construction has several attractive properties.

The prover may already know everybody's name. They may have memorized the entire alphabetical order before the party. That preparation still does not determine the fresh permutation induced by the current given order.

The witness is short: five people.

Verification is simple: check that their positions respect the given order and that their names are monotone alphabetically.

And the problem is total: every valid instance has a witness.

What is *not* established is the thing that matters most for proof of work: actual human difficulty. The theorem guarantees existence, not search cost. A typical arrangement may contain many witnesses. People may learn excellent heuristics after one or two attempts. A clever solver may find the task almost immediately.

So I would not call this a human proof-of-work construction yet. It is better viewed as a candidate whose cognitive complexity needs to be measured.

## Ambient puzzle II: a graph among the guests

Graphs produce another family of examples.

Let the guests be vertices. Choose some quickly checkable symmetric relation between pairs of guests, and draw an edge when the relation holds.

The first temptation is:

> Find the largest clique.

This is interesting computationally but not especially attractive as a certificate problem. A proposed set of five guests is easy to verify as a clique: check its ten pairwise edges. But verifying that no clique of size six exists can be difficult. The word *largest* destroys much of the verification asymmetry we wanted.

A better target is a clique of a specified size, but then existence may fail.

Ramsey theory gives a way around this. Since

\[
R(4,4)=18,
\]

every graph on eighteen vertices contains either a clique of size four or an independent set of size four.

So with eighteen guests the task can be:

> Find four guests who are all pairwise related, or four guests no two of whom are related.

Again, existence is guaranteed and the witness is very small.

As with the monotone-subsequence puzzle, the open question is not the theorem. It is whether the resulting search problem is reliably costly for unaided humans under realistic preprocessing.

That empirical uncertainty is central rather than incidental. If humans immediately see the answer, the construction fails as proof of work no matter how pleasing the combinatorics is.

## The role of preprocessing

The ambient examples highlight something that assigned arithmetic can hide.

Suppose the prover knows all stable facts about the participants in advance. They know the names, friendships, ages, whatever relation will define the graph, and every strategy they have learned from previous rounds.

What fresh work remains after the new arrangement or instance is revealed?

This is where the PREP/PROC separation becomes particularly useful.

A good ambient construction should tolerate very large preparation while preserving meaningful online processing:

\[
\text{large PREP} \not\Rightarrow \text{tiny PROC}.
\]

That condition is still informal because human preprocessing can be strange. Somebody may memorize a lookup structure or invent a representation that dramatically changes the online task.

The safest definition would quantify over all allowed preparation strategies and ask for the minimum online cost that remains. In practice we may have to estimate this experimentally rather than prove it.

## Positive and negative evidence again

The examples now suggest a fairly clean asymmetry.

Positive puzzle certificates are relatively natural. A prover outputs a witness satisfying some relation \(R(x,w)\), and the verifier checks it.

Direct negative mental claims are much harder when hidden cognition is behaviorally monotone. If thinking about birds does not remove any later behavioral options, then a bird-thinker can imitate a non-bird-thinker.

The resource-exclusion idea offers a conditional workaround:

1. construct a task \(A\) with strong positive output binding;
2. certify that \(A\) occurred throughout the relevant interval;
3. assume a cognitive resource model under which every feasible execution of \(A\) excludes \(B\);
4. infer that \(B\) did not occur.

This is probably the most speculative part of the framework. The logical implication is straightforward once the model is given; establishing the human resource model is not.

It may nevertheless be a useful way to separate two problems that are otherwise conflated:

- designing an externally verifiable computation;
- showing that the computation occupies a particular cognitive resource strongly enough to exclude something else.

The jealous-girlfriend chess story is deliberately ridiculous, but it makes the separation vivid.

## What I would currently call a good sheep-counting construction

I do not think there is a single scalar score for these problems. A candidate can be strong on one dimension and useless on another.

Still, several properties repeatedly look desirable.

**Output binding.** Accepting evidence should be difficult to produce without doing something close to the claimed computation.

**Freshness.** The useful part of the input should arrive late enough that the answer cannot simply be prepared in advance.

**Prover independence.** The prover should not be able to select an especially easy instance after seeing all possibilities.

**Cheap verification.** Checking the output should cost much less than finding it.

**Totality or high solvability.** If the task is meant to work on demand, a suitable witness should reliably exist.

**Preprocessing resistance.** Stable knowledge and prior practice should not eliminate most of the online work.

**Strategy-independent soundness, when desired.** If we use the word *proof* in the strong sense, the guarantee should quantify over deceptive prover strategies rather than cooperative behavior.

**Explicit resource assumptions for exclusion.** If a positive proof of \(A\) is used as negative evidence for \(B\), the incompatibility should be a stated assumption of the model rather than a vague appeal to "attention".

These properties do not define a finished complexity class. They are more like a checklist for deciding whether an example is worth studying.

## What can be formalized without a theory of the brain?

A natural objection is that all of this seems to require a detailed model of human cognition.

Some parts do. I do not see how one could prove that serious chess consumes a particular cognitive bottleneck without making empirical assumptions about humans.

But some useful statements require much less.

If two hidden histories admit exactly the same possible observable transcripts, no verifier can distinguish them from those transcripts alone.

If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then there is no strategy-independent transcript that directly certifies \(\neg A\).

If a candidate puzzle has a witness relation \(R(x,w)\) whose verification cost is high, then it fails our desired asymmetry regardless of neuroscience.

If the prover controls the instance and can always choose one with a precomputed witness, the freshness problem is likewise computational rather than psychological.

The positive results are where a human model becomes unavoidable. But perhaps the model can remain narrow and operational. Instead of trying to explain cognition in general, a theorem might assume only things like:

- this family of tasks requires at least a certain amount of capacity on a bottleneck;
- this input stream cannot be answered at the required quality without processing fresh information;
- this much state cannot be maintained without external memory;
- these two task families cannot simultaneously fit through the available network.

Then conclusions would be explicitly conditional on those assumptions.

That seems more realistic than pretending we already possess a general machine model of the human mind.

## Some obvious failure modes

The framework is easy to make sound more impressive than it is, so it is worth listing ways the whole project could turn out to be uninteresting.

The ambient puzzles may be too easy for humans. The elegant existence theorems may have little relation to cognitive search difficulty.

Human strategies may vary too much for stable proof-of-work costs. One person may need a minute where another sees the witness instantly.

Preprocessing may defeat most natural party constructions. Knowing the participants well may permit representations that make the fresh instance trivial.

The network model may be too flexible. If every observed incompatibility is explained by inventing another hidden edge, the model predicts nothing.

Strong strategy-independent verification may simply be rare outside tightly specified puzzle tasks. Many practically useful claims about attention may remain fundamentally incentive-dependent.

And there may be no application that needs any of this. The party setting is amusing, but amusement is not an application.

I think these are reasons to be cautious, not reasons to stop. The framework becomes interesting only if it eventually produces either non-obvious constructions, useful impossibility results, or measurements that reveal stable regularities in human computation.

## Questions that seem worth trying next

### Measure the monotone-subsequence task

The simplest experiment is to actually run it.

Try, for example,

\[
(k,n)=(4,10),\ (5,17),\ (6,26),
\]

where \(n=(k-1)^2+1\).

Measure solve time, error rate, strategies, learning across repeated rounds, and performance after reshuffling the same participants.

The main question is whether large preparation from earlier rounds substantially collapses later online work.

### Find more ambient total-search principles

Erdős-Szekeres and Ramsey theory are attractive because they turn uncontrolled ambient structure into a guaranteed small witness.

Other candidates might come from pigeonhole arguments, partial orders, parity, matchings, local optima, or other small combinatorial existence theorems.

The useful ones would need not only guaranteed existence but also cheap human verification and nontrivial human search.

### Make input independence precise

What property of an ambient instance prevents preprocessing?

Randomness alone is not enough. What seems relevant is uncertainty conditioned on everything the prover could have prepared, together with a lower bound on the cheapest online strategy.

There may be an information-theoretic formulation, but I do not yet see the right one.

### Test resource exclusion experimentally

Can we find pairs of mental tasks with robust, directional interference?

Not merely "doing both is harder", but something strong enough that successful execution of one gives meaningful evidence against substantial simultaneous execution of the other.

If such pairs exist, the flow-network picture becomes more than notation.

### Separate proof from behavioral inference

A mature account should probably specify the prover model explicitly:

- arbitrary strategic prover;
- cooperative prover;
- utility-maximizing prover under a stated game;
- empirically typical human behavior.

The babysitter example changes character depending on which of these is assumed.

### Add state to the resource model

The flow picture should eventually account for memory, intermediate state, rehearsal, learning, and the possibility that effort now changes the cost of work later.

I suspect any serious model will need this, although it may also make the model too complicated to be useful.

## Why computer science?

The motivating question sounds psychological:

> Can you verify what somebody was thinking about?

But even the toy examples quickly produce familiar computer-science structure.

There is hidden computation. There is an input source. There is a transcript. There is a verifier. There are adversarial strategies. There may be preprocessing. There are resource constraints. There is a cost of producing evidence and a cost of checking it.

What makes the setting unusual is that the computer is a human mind, its internal execution is private, and our machine model is poor.

That does not automatically make sheep-counting problems a useful field of study. At the moment I am not even sure that the examples belong under one formalism. But the comparison between the birds claim and the arithmetic worksheet suggests that there is at least a spectrum worth understanding: some private computations leave almost no verifiable trace, while others naturally produce compact evidence of substantial work.

The party puzzles push the same question in a stranger direction. Instead of having a verifier generate a challenge, can the prover use fresh structure already present in the environment? Can an existence theorem guarantee a witness? Can finding it be reliably harder for a human than checking it? And can prior knowledge of the environment fail to remove the online work?

Those questions are concrete enough to test.

For now, that is all I want "sheep-counting problems" to mean: a tentative collection of questions about when hidden human computation can leave externally checkable evidence, what such evidence costs to produce, and what assumptions are needed before we should believe it.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204). The PREP/PROC language and the emphasis on concrete human costs are particularly relevant here.
- Paul Erdős and George Szekeres, the monotone subsequence theorem: every sequence of \((r-1)(s-1)+1\) distinct values contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\).
- Ramsey theory and the classical party problem; in particular, \(R(4,4)=18\).
