# Sheep-Counting Problems for Computer Science

Suppose I tell you:

> Ten minutes ago, I was thinking about birds.

Can you verify that this is true?

Now consider a different situation. You give me a page of fresh arithmetic exercises. Ten minutes later I return it with the answers filled in, and most of them are correct.

The completed page does not reveal every detail of what happened in my head. I may have used a shortcut. I may have recognized one of the answers. But if the exercises were sufficiently fresh, the answers are fairly direct evidence that some computation related to them happened during the interval.

These two examples sit at opposite ends of something I find interesting. In both cases the claim concerns a private mental process. In the first case there may be almost nothing outside the mind that distinguishes the claim from its negation. In the second, the process naturally produces an object that can be checked.

I do not know whether this observation leads to a useful theory. The examples in this post are exploratory, and the formal model later on is only a proposal. Still, the questions have a recognizable computer-science shape: hidden computation, inputs, outputs, witnesses, verification, preprocessing, adversarial strategies, and resource bounds.

I will call questions of this kind **sheep-counting problems**.

The name comes from literal sheep counting: a stereotypically private mental computation that may take a long time while leaving very little evidence outside the mind. The name is intentionally unserious. The hope is only that it gives a memorable label to a family of questions that might otherwise be awkward to talk about.

## Examples before definitions

It is easier to see what may belong in this family before trying to define it.

### Arithmetic exercises

The arithmetic example is the easy one.

Suppose I choose fresh exercises such as

```text
137 × 284 = ?
519 - 287 = ?
...
```

and ask you to solve them mentally. You later give me the answers.

There is a clear input and a clear checkable relation between input and output. If the answers are correct, I have evidence that some relevant computation happened.

Even here, *proof* is too strong unless we state assumptions. A correct answer does not identify the algorithm used in your head. A predictable exercise might have been solved earlier. A prover with access to an external calculator would invalidate the intended interpretation completely.

But the basic shape is unusually favorable:

```text
fresh input x  --->  private computation  --->  output w

                         check R(x, w)
```

The verifier controls the challenge, can make it fresh, and can cheaply check the result. This is almost the least mysterious sheep-counting problem one could ask for.

### Literal sheep counting

Now suppose I ask you to lie down and count sheep for ten minutes.

At the end you say:

> I reached 843.

That number is an output, but not a very informative one. You could have invented 843 at the end. You could have counted for thirty seconds and stopped. Many very different internal histories are compatible with the same final number.

Perhaps there are other observations. You yawned. You became sleepy. You fell asleep.

If counting sheep genuinely changes the probability of those outcomes, then they are evidence in a statistical sense. But they are not close to mathematical certificates. People become sleepy without counting sheep; people can count sheep without becoming sleepy.

This suggests one dimension that arithmetic hides: **output binding**. How difficult is it to produce the observed output without performing something close to the claimed internal computation?

The birds claim may have almost no useful output binding. The arithmetic worksheet can have strong output binding. Literal sheep counting has an output, but the obvious output barely constrains the execution.

### The babysitter

A different problem appears with a babysitter.

A babysitter is left with a sleeping child for three hours. The parent returns. The child is still asleep and everything is fine.

Was the babysitter attentive during the whole interval?

A diligent babysitter and a sleeping babysitter can easily produce the same quiet evening. The desired hidden activity may leave no natural trace when nothing happens.

Suppose instead the parent returns and learns that the child had been crying for a long time and needed help. That feels like evidence that the babysitter was not paying attention.

But there is an assumption hidden in that inference. An attentive babysitter could notice the problem and deliberately refuse to help.

So

```text
child was neglected  =>  babysitter was inattentive
```

is not valid against an arbitrary strategy. It works only if we assume that an attentive babysitter also wants to babysit well.

This gives us another distinction that seems important.

Evidence is **strategy-independent** when its guarantee survives even if the prover deliberately chooses the most misleading allowed behavior.

Evidence is **incentive-dependent** when the inference relies on assumptions about what the prover is trying to achieve.

There is nothing inherently bad about incentive-dependent evidence. Most evidence about people is like that. But it should not be confused with a proof whose soundness quantifies over adversarial strategies.

### Chess at a party

Consider a more artificial example.

A jealous girlfriend leaves her boyfriend at a party. She wants evidence that, while she is away, he is not devoting substantial attention to somebody else.

She tells him to play chess continuously.

When she returns, she looks at the game. Imagine that she knows his ordinary chess performance well enough to compare this game against a baseline: move quality, blunder rate, score, or some other statistic. In the cartoon version, she checks whether his performance falls inside an acceptable statistical range.

Bad chess does not prove distraction. He can deliberately play badly.

Good chess is more interesting. If a long sequence of competent responses to fresh opponent moves is difficult to produce without substantial chess computation, then the transcript is positive evidence that the chess computation happened.

But chess itself is not what the girlfriend cares about. She wants a negative conclusion:

> the competing mental activity did not substantially occur.

For that conclusion she needs another assumption: the certified chess computation and the competing activity cannot both fit into the relevant cognitive resources during the interval.

The logical form is

\[
\text{evidence for }A
\quad + \quad
A\text{ excludes }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This seems more promising than trying to infer inattention from poor performance. The negative conclusion is obtained from a *positive* certificate for an incompatible task.

Whether chess really excludes the activity in question is, of course, an empirical question. The point of the story is only the form of the argument.

### A puzzle supplied by the room

The examples above all begin with some fairly explicit job: solve these exercises, count sheep, babysit, play chess.

There is another possibility. The prover may decide on a problem themselves and use the surrounding environment as the instance.

Suppose there are seventeen people with a given total order. It could be the order in which they are standing, but the geometry is not important; all that matters is that everybody agrees on the order.

There is also a second total order, for example alphabetical order of the guests' names.

Reading the alphabetical ranks in the given order gives a permutation of seventeen numbers. The prover tries to find five people, preserving the given order, whose names are alphabetically increasing or alphabetically decreasing.

The Erdős-Szekeres monotone subsequence theorem guarantees that such a set always exists. More generally, every sequence of

\[
(r-1)(s-1)+1
\]

distinct values contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\). With \(r=s=5\),

\[
(5-1)^2+1=17.
\]

So the room itself supplies a guaranteed puzzle instance.

This has several attractive properties.

The prover may know everybody's name in advance. They may even have memorized the entire alphabetical order. That preparation does not determine the fresh permutation induced by the current given order.

The witness is short: five people.

Verification is simple: check their order and check that their names are monotone alphabetically.

And the task is total: every valid instance has a witness.

What is missing is a result about *human difficulty*. Erdős-Szekeres proves that a witness exists, not that a person must work hard to find one. There may be many witnesses. Humans may learn very good heuristics. A particular arrangement may make a solution visually obvious.

So this is not yet a human proof-of-work construction. It is a candidate with an attractive verification structure whose actual cognitive cost needs to be measured.

### Cliques among the guests

Graphs give a second ambient family.

Let guests be vertices and let some quickly checkable symmetric relation define the edges.

The first tempting task is:

> Find the largest clique.

A proposed clique is easy to check, but the word *largest* causes trouble. Checking that five people form a clique requires only the ten pairwise checks. Checking that no clique of size six exists may be much harder. The output no longer has the verification asymmetry we wanted.

A specified-size clique is easier to verify, but it may not exist.

Ramsey theory gives one way around that. Since

\[
R(4,4)=18,
\]

every graph on eighteen vertices contains either a clique of size four or an independent set of size four.

So with eighteen guests one can ask:

> Find four guests who are all pairwise related, or four guests no two of whom are related.

Again the witness is small and existence is guaranteed. Again the unanswered question is human search cost.

These ambient puzzles are the examples that originally made the broader sheep-counting question interesting to me. They show that the verifier does not necessarily have to generate the concrete challenge. A fresh, partially uncontrolled environment may already contain one.

## What varies between these examples?

The examples do not seem to divide naturally into two or three clean species. They vary along several partly independent dimensions.

| Example | Who chooses the task? | Concrete input source | Input over time | Observable output | Main difficulty |
| --- | --- | --- | --- | --- | --- |
| thinking about birds | nobody necessarily | internal/world | none required | usually none | no distinguishing trace |
| arithmetic exercises | verifier | verifier | one-shot | answers | comparatively easy case |
| literal sheep counting | verifier or prover | almost none | none after start | final count, sleepiness | weak output binding |
| babysitting | context | environment | event-driven, possibly none | reactions/outcomes | quiet success may leave no trace; failure evidence may depend on incentives |
| chess | either party | opponent and position | streaming | move transcript/performance | needs a model connecting performance to cognitive work |
| monotone guest subsequence | prover or verifier | ambient group | one-shot ambient | short witness | human search cost uncertain |
| Ramsey guest graph | prover or verifier | ambient relation graph | one-shot ambient | short witness | human search cost uncertain |

This table is not intended as a taxonomy. It is more a list of coordinates that appear to matter:

- who chooses the task;
- who controls the instance;
- how fresh and prover-independent the input is;
- whether input arrives once or continuously;
- what observable output is produced;
- how strongly the output is bound to the claimed execution;
- whether the evidence survives arbitrary prover strategy;
- how expensive producing the output is;
- how expensive checking it is;
- which other cognitive activity the execution may exclude.

A useful formalism, if one exists, should probably keep most of these dimensions separate rather than force them into named classes too early.

## A tentative formal model

The next few sections are the least settled part of this post. I am not proposing a model of human cognition in any strong sense. The aim is only to make the questions precise enough that we can see where assumptions enter.

### Hidden execution and observable transcript

Fix an interval \(I\). During it, a person has some hidden cognitive history \(H\). The outside world supplies an input process \(X\), which may be empty. The verifier observes only a transcript \(T\): spoken answers, moves, choices, response times, gestures, or other externally visible consequences.

We care about some claim

\[
C(H)
\]

about the hidden execution.

Examples include:

- the prover solved these arithmetic exercises;
- the prover maintained some running computation;
- the prover found a particular combinatorial witness;
- the prover devoted at least some amount of resource to activity \(A\).

A verifier applies a procedure

\[
V(X,T)\in\{\text{accept},\text{reject}\}.
\]

This notation already hides a serious problem: what exactly counts as having "performed" the computation? If the prover finds an unexpected shortcut, has the intended task still been done? If two different mental algorithms produce the same witness, are they equivalent for the claim we care about?

I do not know the right general answer. For puzzle-like tasks, the safest notion may be extensional: the prover has to produce a witness satisfying some relation \(R(x,w)\), and we care about the minimum cost of *any* allowed strategy that can do so. For richer claims such as sustained attention, the execution itself matters and an extensional relation may not be enough.

### Completeness and soundness

Borrowing language from proof systems, we can at least distinguish two desired properties.

**Completeness.** If an allowed execution satisfying \(C\) occurs, there is a way to produce an accepting transcript with high probability.

**Strategy-independent soundness.** If no execution satisfying \(C\) occurs, even the best deceptive prover strategy should have only a small probability of producing an accepting transcript.

This is intentionally stronger than ordinary behavioral evidence. The babysitter example shows why. A neglected child may be evidence of inattention under cooperative incentives, but it is not sound against an attentive babysitter deliberately trying to imitate negligence.

If we do want to reason about ordinary incentives, that can be modeled as a different game. The important thing is not to silently switch between the two notions.

### Output binding

For a claim \(C\), let us informally compare the observable transcripts available when \(C\) is true and when it is false.

If both cases induce essentially the same observable possibilities, verification cannot work.

In a probabilistic setting, one could instead compare distributions

\[
P(T\mid C)
\qquad\text{and}\qquad
P(T\mid\neg C).
\]

If they are nearly identical, the transcript carries little evidence. If they are well separated, statistical verification becomes possible. For a strong proof-like construction we would want more: accepting transcripts should be hard to produce under \(\neg C\), even after optimizing over prover strategies.

This is the sense in which the arithmetic answers are tightly bound to the task while the final sheep count is not.

## Why negative claims are awkward

Consider again

> I was not thinking about birds.

Suppose thinking about birds merely adds private information or experience and does not remove any later behavioral capability.

Let \(\mathcal T(A)\) be the set of observable transcripts a prover can generate after activity \(A\), allowing arbitrary strategy. If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then there cannot be a strategy-independent transcript certifying \(\neg A\). Every transcript available to the non-\(A\) prover is also available to the \(A\) prover.

This is almost tautological, but I think it captures a useful obstruction. Private knowledge and private thought are often **behaviorally monotone**: having done more internally does not stop a person from later imitating someone who did less.

The observation should not be pushed too far. Some mental states do remove capabilities, and cognition can create involuntary external effects. The claim is only conditional on the inclusion above.

The chess example suggests a route around it. Do not try to certify \(\neg B\) directly. Certify a positive activity \(A\) whose execution is incompatible with \(B\).

To make that more than a slogan we need some model of cognitive resources.

## A flow-network model of cognitive resources

The simplest resource model would give the mind a scalar capacity \(C(t)\). Every task consumes some amount, and two tasks are incompatible when their combined demand exceeds capacity.

That seems too coarse.

Two tasks can interfere because they require the same particular channel even when neither comes close to using all cognition. Two verbal tasks might collide while a visual task remains possible. Conversely, two demanding tasks might coexist better than expected if they use different resources.

A more general toy abstraction is a time-varying capacitated network

\[
G_t=(V,E,c_t).
\]

This is not meant as a neurological diagram. The vertices need not be brain areas and the edges need not be literal neural pathways. It is only a way to talk about bounded, selective resources.

The intended picture is:

- an edge represents some cognitive channel or bottleneck;
- \(c_t(e)\) is the amount of that resource available at time \(t\);
- a computation requires flow through particular edges;
- the same task may admit several implementations and therefore several routings.

For an activity \(A\), let \(\mathcal F_A\) be the set of feasible flows implementing it.

Activities \(A\) and \(B\) can coexist only if there are

\[
f_A\in\mathcal F_A,
\qquad
f_B\in\mathcal F_B
\]

such that

\[
f_A(e,t)+f_B(e,t)\leq c_t(e)
\]

for every relevant edge and time.

This can represent several different kinds of interference without reducing everything to one number:

- **global exhaustion:** the tasks share a broad bottleneck;
- **local contention:** both require one specific edge while much of the network remains free;
- **selective compatibility:** demanding computations can coexist because their routes are mostly disjoint;
- **changing capacity:** fatigue, stress, practice, or environment change \(c_t\);
- **alternative algorithms:** a clever prover may route a task differently from the way the verifier expected.

That last point is essential. It is not enough to show that one imagined way of playing chess conflicts with another activity. For a strong exclusion claim, every allowed implementation that can produce the accepted chess transcript has to consume resources incompatible with the competing task.

### Negative evidence by exclusion

For an interval \(I\), call activities \(A\) and \(B\) **resource-incompatible** if no pair of feasible executions fits within the network capacities over \(I\).

Then, inside this model,

\[
\text{sound positive evidence for }A
\quad + \quad
A\perp B
\quad\Longrightarrow\quad
\text{sound negative evidence for }B.
\]

This is the formal skeleton behind the chess story.

The logical implication is easy. The difficult part is establishing the premises for real humans. We would need empirical reasons to believe both that the transcript really certifies \(A\) and that every relevant implementation of \(A\) excludes \(B\).

So the network model does not solve the psychology. At best it isolates exactly which psychological assumptions a conditional proof would need.

### State and storage

Ordinary flow is still an incomplete model of computation because cognition is stateful.

A person can spend effort now to store an intermediate result and use it later. Practice changes future routing. Information can be cached. One task can alter the future cost of another.

A more serious version would need storage or state transitions at vertices, and perhaps costs for changing state as well as moving information.

I do not know whether the flow picture survives that extension or whether a different abstraction is cleaner. For now its value is mainly conceptual: it distinguishes generic "mental effort" from competition for particular cognitive resources.

## What should "cost of computation" mean here?

For an ordinary algorithm we can count steps, memory accesses, or some other machine operation. For a human mind there is no agreed primitive operation.

Blum and Vempala's work on the complexity of human computation is helpful here because it deliberately studies concrete human costs and separates preparation from processing. I will borrow their PREP/PROC distinction and add verification cost.

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

- **PREP** is work performed before the fresh instance is known: learning a strategy, memorizing names, rehearsing patterns, building long-term representations.
- **PROC** is the online cost after the relevant fresh input arrives.
- **VER** is the cost of checking the output or transcript.

For a puzzle relation \(R(x,w)\), the important online cost is not the cost of the algorithm the designer expects. It is something like

\[
\operatorname{PROC}(x)
=
\inf_{S:\,R(x,S(x))}
\operatorname{cost}(S,x),
\]

where the infimum ranges over all allowed successful prover strategies \(S\).

This formula is more aspiration than definition because \(\operatorname{cost}\) itself still needs a human resource model. In the flow picture, one candidate might combine elapsed time, total flow, bottleneck occupancy, or some other functional of the execution. I do not know which quantity is the right one.

The conceptual point is simpler: **a shortcut is the real algorithm**. If a person can produce the witness cheaply by a strategy we did not anticipate, then the problem is cheap for that person.

For proof-of-work-like use, we would want substantial online \(\operatorname{PROC}\) and much smaller \(\operatorname{VER}\).

The ratio

\[
\frac{\operatorname{PROC}}{\operatorname{VER}}
\]

may be suggestive, but it is not enough by itself. A task with a beautiful ratio is still useless if the prover can choose a pre-solved instance or if the output has weak binding to the claimed computation.

## Where the input comes from

The arithmetic example enjoys a privilege that the ambient puzzles do not: the verifier controls the input.

It helps to separate two choices:

1. who chooses the **task or relation**;
2. who supplies the **concrete instance**.

A verifier may choose both. But in the guest puzzles the prover can name the task while the current room supplies the instance.

Other sources are possible: an opponent, a random generator, another participant, or a changing environment.

### Freshness and prover independence

Randomness is not quite the right notion.

A deterministic arrangement can still be useful if the prover could not know or control it in advance. A perfectly random instance can be useless if it is revealed early enough to precompute the witness.

What seems relevant is **fresh, prover-independent uncertainty at the moment the online computation must happen**.

Perhaps this can eventually be described information-theoretically. Conditional min-entropy is one possible language, but I do not yet know whether it captures the property we care about. Operationally, the test is simpler: how much can advance preparation reduce the cheapest online strategy?

A desirable ambient construction would tolerate large PREP without collapsing PROC:

\[
\text{large PREP}\not\Rightarrow\text{tiny PROC}.
\]

### Static and streaming input

The timing of the input is another independent coordinate.

The arithmetic and guest puzzles are mainly one-shot:

\[
x\longrightarrow\text{computation}\longrightarrow w.
\]

Chess receives a stream of fresh opponent moves:

\[
x_1\to w_1\to x_2\to w_2\to x_3\to w_3\to\cdots
\]

A competent long transcript is therefore coupled to many unpredictable moments over time.

Literal sheep counting receives almost no fresh external information after the initial instruction.

This does not by itself make streaming tasks better, but it gives them a useful property: they can bind evidence to an interval rather than merely to one final state.

## What would make a sheep-counting construction interesting?

I do not think these problems have a single meaningful score. A construction can be strong on one axis and fail completely on another.

Still, several properties recur.

**Output binding.** Producing accepted evidence without doing something close to the claimed computation should be difficult.

**Freshness.** The useful input should arrive late enough that the answer cannot simply be prepared beforehand.

**Prover independence.** The prover should not be able to select an especially easy instance after seeing all possibilities.

**Cheap verification.** Checking the evidence should cost substantially less than producing it.

**Totality or reliable solvability.** If the construction is supposed to work on demand, a witness should reliably exist.

**Preprocessing resistance.** Stable knowledge and previous practice should not remove most of the online cost.

**Strategy-independent soundness, when that is the goal.** If we use *proof* in the strong sense, the guarantee should survive deceptive strategies.

**Explicit exclusion assumptions.** If positive evidence for \(A\) is used as negative evidence for \(B\), the incompatibility should be part of the model rather than an informal appeal to "attention".

This is only a checklist, not a definition of a complexity class.

## How much can be formalized without understanding cognition?

Some of the framework is independent of any detailed brain model.

If two hidden histories allow exactly the same observable transcripts, the verifier cannot distinguish them from those transcripts alone.

If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then direct strategy-independent negative certification of \(A\) is impossible.

If verifying a proposed witness is itself expensive, the construction fails the desired producer/verifier asymmetry regardless of psychology.

If the prover controls the instance and can always choose one with a precomputed witness, the input problem is also computational rather than neurological.

Positive lower bounds on human work are where a cognitive model becomes unavoidable.

Perhaps those assumptions can remain narrow and operational rather than becoming a general theory of mind. A conditional result might assume only that

- a task family requires at least some capacity on a particular bottleneck;
- a stream cannot be answered at the required quality without processing the fresh inputs;
- a certain amount of state cannot be retained without external memory;
- two task families cannot fit simultaneously into the available network.

Then the conclusion would be explicitly conditional on those assumptions.

That seems preferable to pretending that the network diagram is already a machine model of human cognition.

## Reasons this may not amount to much

There are several obvious ways the idea could fail to become useful.

The ambient puzzles may simply be too easy for humans. Elegant existence theorems do not imply difficult human search.

Human costs may vary too much. One person may need a minute for a witness another person sees immediately.

Preprocessing may defeat most natural ambient tasks. Familiarity with the participants may allow a representation that makes fresh instances cheap.

The resource network may be too flexible. If every observed incompatibility can be explained by inventing another hidden edge, the model predicts nothing.

Strategy-independent verification may be rare outside tightly specified puzzle tasks. Many practically interesting claims about attention may remain incentive-dependent.

And there may simply be no application that needs these constructions. A party puzzle is not automatically a useful protocol.

These are not qualifications I expect to disappear. A useful development of the idea would have to survive them by producing either a non-obvious construction, a meaningful impossibility result, or empirical measurements that are stable enough to support a model.

## Questions worth trying next

### Measure the monotone-subsequence puzzle

The easiest next step is empirical.

Try

\[
(k,n)=(4,10),\ (5,17),\ (6,26),
\]

with \(n=(k-1)^2+1\).

Measure solve time, error rate, strategies, learning across rounds, and performance after reshuffling the same participants.

The interesting question is not only the first-round difficulty, but how much previous rounds reduce later online work.

### Find more ambient total-search principles

Erdős-Szekeres and Ramsey theory are attractive because an uncontrolled environment is guaranteed to contain a compact witness.

Other possibilities might come from pigeonhole principles, partial orders, parity arguments, matching theorems, local optima, or other small combinatorial existence results.

The useful examples would need all three properties: reliable existence, cheap human verification, and nontrivial human search.

### Make input independence precise

What property of an ambient instance prevents preprocessing from eliminating online work?

Randomness alone is not enough. We need a notion tied to what the prover could know and prepare before the relevant moment.

There may be an information-theoretic formulation, but I do not yet see it.

### Look for robust cognitive exclusion

Can we find task pairs with strong, directional interference?

Not merely "multitasking makes both somewhat harder", but an effect strong enough that successful execution of one task is meaningful evidence against substantial simultaneous execution of the other.

If no such pairs exist, the negative-certification part of the framework becomes much less interesting.

### Improve the resource model only when experiments demand it

The flow network already needs state, storage, and learning to describe cognition even approximately. It would be easy to keep adding machinery until the model explains anything.

A better approach may be to start with specific experiments and add only the minimum structure needed to state their observed constraints.

### Keep incentive models explicit

The babysitter example changes completely depending on whether the person is cooperative, adversarial, or optimizing some stated utility.

A mature account should probably always say which prover model is being used rather than treating "human behavior" as one thing.

## Why this still looks like computer science

The starting question sounds psychological:

> Can you verify what somebody was thinking about?

But the toy examples quickly expose familiar computational structure. There is a hidden execution, an input source, an observable transcript, a verifier, possible preprocessing, adversarial strategies, and some notion of resource cost.

What makes the setting unusual is that the computer is a human mind, its execution is private, and our machine model is poor.

That may make the subject too messy to support much theory. I am not yet sure that all of these examples belong under one formalism. But the birds claim and the arithmetic worksheet at least show that there is a meaningful spectrum: some private computations leave almost no checkable trace, while others naturally produce compact evidence tied to substantial work.

The ambient puzzles add a more specifically computer-scientific question. Instead of asking the verifier to generate a challenge, can fresh structure already present in the environment supply one? Can a combinatorial theorem guarantee that a witness exists? Can finding that witness be reliably more expensive for a human than checking it? Can this remain true even after the prover has prepared everything they reasonably can in advance?

Those questions are concrete enough to test, and at the moment that seems like a sufficient reason to keep looking at them.

For now, **sheep-counting problems** is only a tentative name for this cluster of questions: when hidden human computation can leave externally checkable evidence, what that evidence actually establishes, what it costs to produce, and which assumptions are doing the work.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204). Their PREP/PROC distinction and emphasis on concrete human costs are particularly relevant here.
- Paul Erdős and George Szekeres, the monotone subsequence theorem: every sequence of \((r-1)(s-1)+1\) distinct values contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\).
- Ramsey theory and the classical party problem; in particular, \(R(4,4)=18\).
