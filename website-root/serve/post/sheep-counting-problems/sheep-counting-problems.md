# Sheep-Counting Problems for Computer Science

Suppose you ask me:

> What are you thinking about?

I answer:

> Birds.

Can you verify that answer?

Now consider a different situation. You give me a page of fresh arithmetic exercises. Ten minutes later I return it with the answers filled in, and most of them are correct.

The two situations look quite different, but the thing we care about is similar. In both cases the interesting event happened inside my head. The arithmetic answers are useful only because they tell you something about that event.

That is the point I want to keep in view throughout this post. The subject is not, in general, hidden state that happens to be difficult to observe. The tasks themselves are mental tasks: solving, attending, tracking, remembering, searching. Any visible output is secondary. It matters because it may give evidence about the work we actually care about.

I will use **sheep-counting problems** as a shorthand for problems of this kind.

The easiest examples are almost trivial. The more interesting ones appear when the mental work has no natural output, when nobody supplied a clean challenge in advance, or when we want one mental activity to rule out another.

## Arithmetic

Start with the friendly case.

Suppose I give you fresh exercises such as

```text
137 × 284 = ?
519 - 287 = ?
...
```

and ask you to solve them mentally.

The job I am asking you to do is internal: perform the calculations. The written answers are not the job. They are evidence that the job was done.

This distinction is easy to miss because arithmetic happens to have such convenient outputs. There is a clear input, there is a clear relation between input and answer, and there is a cheap way to check the answer afterward.

If the exercises are fresh enough, and if external tools are excluded, a page of correct answers is fairly strong evidence that the solver did a substantial amount of arithmetic.

It still does not identify the exact computation. A solver may use a shortcut I did not anticipate. One exercise may happen to have a memorized answer. A better algorithm is still an algorithm. For the present purpose, that is usually fine: what matters is that some sufficiently costly relevant mental computation was needed to produce the answers.

Arithmetic therefore gives us a particularly convenient shape:

```text
fresh input  --->  internal work  --->  checkable answer
```

Many sheep-counting problems become difficult because one of those conveniences disappears.

## The babysitter

A parent leaves a babysitter with a sleeping child for three hours.

What is the babysitter being paid to do?

Not, primarily, to produce an observable stream of actions. On a good evening the babysitter may do almost nothing. The important job is to remain attentive enough to notice if something happens, and to be ready to act if it does.

Suppose the parent returns after three quiet hours. The child is still asleep.

That is compatible with an excellent babysitter. It is also compatible with a babysitter who fell asleep immediately after the parent left.

The internal activity is the thing being purchased, but successful execution may have no natural output.

If the child wakes up, starts crying, or needs help, the situation changes. The babysitter is given an event to notice and respond to. A quiet evening gives almost no samples of the desired vigilance; an eventful evening gives more.

This example is useful because it removes a distraction created by arithmetic. There need not be a product at the end. Sometimes the mental activity itself is the whole job.

## Counting sheep

Now consider the literal instruction:

> Count sheep in your head for ten minutes.

At the end the person says:

> I reached 843.

Again the desired activity is internal. The final number is only a trace that the activity might leave.

And it is a poor trace. A person can invent 843 at the end. They can count for one minute and stop. Very different internal histories can lead to the same report.

There may be other consequences. Perhaps the person yawns, becomes sleepy, or falls asleep. If counting sheep genuinely changes the probability of those events, they carry some evidence. But none of them is tightly tied to the exact requested process.

The contrast with arithmetic is not that one task is mental and the other is not. Both are mental. The difference is that arithmetic happens to produce outputs that are much more informative about the internal work.

## Chess at a party

Consider a more artificial example.

A jealous girlfriend leaves her boyfriend at a party. She would like him not to spend the next hour seriously attending to somebody else. Before leaving, she tells him to play chess continuously.

When she returns, she looks at the game.

Suppose, for the sake of the story, that his ordinary chess performance is well characterized. A sufficiently long game provides many moves, many responses to fresh positions, and perhaps enough data to compare his play with a normal baseline.

The point of the chess is not that the girlfriend has a special interest in chess. The task is being used to occupy some mental machinery. If strong play is hard to produce without actually following the game, then the game transcript gives evidence that this machinery was being used for chess.

That is already a different use of a sheep-counting task. The positive fact we try to establish is about chess, but the eventual reason for establishing it may be to exclude some competing mental activity.

I will return to that inference later. For now it is enough to notice that chess differs from arithmetic in another way: the input keeps arriving. Every opponent move changes the problem. A long game couples the hidden computation to a stream of fresh external events.

## Puzzles without a verifier-supplied challenge

So far every example has come with a job already named: solve these exercises, watch the child, count sheep, play chess.

There is another possibility that I find particularly interesting.

Suppose nobody prepared a challenge for me. Later, somebody asks me to give evidence that I have just done some nontrivial mental work.

Can I manufacture such evidence from the situation I am already in?

The verifier need not have been present at the beginning. They need not have chosen a random input. They need not even have decided what problem I should solve. If the environment contains enough fresh structure, I may be able to choose a suitable problem, solve it, and present a short witness.

This freedom is useful and dangerous at the same time. It removes the need for the verifier to initiate the computation, but it also gives the prover opportunities to choose an unusually easy problem or an unusually easy instance. Any construction of this kind has to survive that freedom.

A party gives nice toy examples because the people present provide a complicated public state without any special equipment.

### A monotone subsequence of guests

Assume there are seventeen people with a given total order. It might be the order in which they are standing, but the geometry is not important. We only need one total order that everybody agrees on.

There is also a second total order, for example alphabetical order of their names.

Read the alphabetical ranks in the given order. This produces a permutation of seventeen numbers.

The problem is:

> Find five people, preserving the given order, whose names are alphabetically increasing or alphabetically decreasing.

The Erdős-Szekeres monotone subsequence theorem guarantees that such a set exists. More generally, every sequence of

\[
(r-1)(s-1)+1
\]

distinct values contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\). With \(r=s=5\),

\[
(5-1)^2+1=17.
\]

The prover can point to five people. The verifier checks two orders.

Several useful properties happen to line up here. The answer is short. Existence is guaranteed. The prover may know everybody's name in advance, yet a fresh ordering can still create fresh work. And the verifier did not have to generate the instance.

What the theorem does *not* tell us is whether a human actually has to work hard to find a witness. A typical ordering may contain many valid subsequences. A person may learn a good heuristic. The interesting complexity question is empirical until we have a convincing human-computation model.

### A graph among the guests

Graphs give another family.

Let the guests be vertices, and let some quickly checkable symmetric relation determine the edges.

A first idea is to ask for the largest clique. Finding one may be difficult, and checking that a proposed set is a clique is easy.

But checking that it is the *largest* clique is a different matter. A five-person clique is a short positive witness. The claim that no six-person clique exists need not have an equally short certificate.

A fixed target size is easier to verify, but then a clique of that size may not exist.

Ramsey theory gives one way around the existence problem. Since

\[
R(4,4)=18,
\]

every graph on eighteen vertices contains either a clique of size four or an independent set of size four.

So with eighteen guests we can ask:

> Find four guests who are all pairwise related, or four guests no two of whom are related.

Again the environment supplies the instance, a witness is guaranteed, and checking the witness is small.

These examples are closer to ordinary mathematical certificates than the babysitter or sheep-counting examples. But the unusual part is not merely that they are puzzles. It is that the prover can get a challenge from public ambient structure instead of waiting for the verifier to hand one over.

## The task and the trace

The examples become easier to compare if we separate two things.

First there is the **cognitive task**: the internal activity we actually care about.

Then there is the **trace**: whatever becomes externally observable and can be used as evidence about the task.

For arithmetic, the task is calculating and the trace is a collection of answers.

For babysitting, the task is vigilance. On a quiet evening the trace may be almost empty.

For sheep counting, the task is the repeated internal counting process. The final number and sleepiness are possible traces.

For chess, the task is following and evaluating the game. The move transcript and performance statistics are traces.

For the party puzzles, the task is a search through an ambient combinatorial instance. The selected people are a compact trace of success.

This separation matters because otherwise it is easy to let the verification problem replace the original problem. The purpose of the babysitter is not to emit evidence. The purpose of the arithmetic student is not to fill boxes with digits. Those outputs are useful because they tell us something about the internal work.

A sheep-counting construction is therefore not merely a relation between an input and an output. It begins with a claim about an execution.

## Inputs and initiation

The examples also differ in how the mental work gets its input.

Arithmetic is the easiest arrangement: the verifier chooses a concrete instance and hands it to the prover.

Chess is interactive. The initial position may be known, but fresh input keeps arriving through the opponent's moves.

Babysitting is event-driven. The relevant input may be empty for hours and then suddenly become important.

Literal sheep counting needs almost no external input after the instruction.

The party puzzles are different again. The verifier does not have to initiate the computation at all. The prover uses an ambient public state as an instance.

It helps to separate two choices that are often bundled together:

1. who chooses the **kind of problem**;
2. who supplies the **concrete instance**.

A verifier can choose both. A prover can choose the problem while the environment supplies the instance. An opponent can supply a stream of instance updates. A prover can also choose both, which is usually dangerous because an easy instance can be selected on purpose.

For proof-of-work-like uses, the relevant property is not randomness by itself. What matters is that enough of the input is fresh and outside the prover's control that preparation cannot remove the online work.

The ambient puzzle case adds another question: how much freedom can the prover have in choosing the problem without turning the whole exercise into a search for whichever problem happens to have an obvious answer?

That seems like one of the central design questions for self-initiated sheep-counting proofs.

## Output binding

Once a task is fixed, we can ask how informative its trace is.

Call this, informally, **output binding**: how difficult is it to produce an acceptable trace without performing something sufficiently close to the claimed internal work?

The notion has to be relative to a model. If calculators are allowed, arithmetic answers say very little about mental arithmetic. If chess engines are allowed, a beautiful chess game says very little about the player's own analysis.

Even with the external rules fixed, the task may have unexpected mental shortcuts. Those shortcuts count. The relevant cost is not the cost of the algorithm the designer expected; it is the cost of the cheapest strategy that actually works.

This gives a rough spectrum.

The answer "843" is weakly bound to ten minutes of sheep counting.

A quiet babysitting shift may produce no trace at all.

A long sequence of correct answers to fresh arithmetic exercises can be much more strongly bound to relevant calculation.

A valid monotone subsequence is perfectly bound to the mathematical statement "these five people form such a subsequence", although how strongly it is bound to *substantial human effort* is a separate question.

That last distinction is important. A certificate can perfectly establish a mathematical fact and still fail as evidence of work because the fact was too easy to find.

## Cost

For the proof-of-work-like examples we care about two costs that need not be similar:

- the cost of producing an acceptable trace;
- the cost of checking it.

Blum and Vempala's model of human computation is useful here because it separates preparation from online processing and emphasizes concrete costs rather than only asymptotic complexity.

I will use three informal quantities:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** is work done before the fresh part of the instance is known: learning the participants, memorizing names, practicing an algorithm, building mental tables.

**PROC** is the online work that remains after the relevant fresh input arrives.

**VER** is the work needed to check the trace.

For a useful proof-of-work-like construction we would like \(\operatorname{PROC}\) to remain substantial even after generous preparation, while \(\operatorname{VER}\) stays small.

But these quantities should be defined adversarially. The relevant \(\operatorname{PROC}\) is the cost of the cheapest allowed successful strategy, not the strategy the puzzle designer had in mind.

This is why the monotone subsequence example still needs experiments. The theorem tells us that an answer exists and that verification is cheap. It does not lower-bound the cheapest human strategy for finding one.

It is also why "largest clique" is a useful near-miss. Even if finding a maximum clique is expensive, verifying maximality may destroy the asymmetry.

## Incentives are a separate issue

There is another question that should not be mixed into the examples too early: what is the prover trying to achieve?

Return to the babysitter.

Suppose the child cries for twenty minutes and the babysitter does nothing. Under ordinary assumptions that is evidence that the babysitter was inattentive.

But an attentive babysitter can deliberately ignore a crying child.

So the observation does not, by itself, distinguish inattention from attentive malice. The inference used an incentive assumption: an attentive babysitter was also expected to want to respond properly.

The same issue appears in chess. Poor play is not a certificate of distraction. An attentive player can intentionally blunder.

This suggests two different standards.

**Strategy-independent evidence** should remain valid even if the prover deliberately chooses the most misleading allowed behavior.

**Incentive-dependent evidence** is interpreted relative to a model of what the prover wants and how that affects behavior.

Both are useful. They answer different questions.

The distinction becomes especially important for negative claims. Without fixing the prover model, it is easy to manufacture apparent "evidence of absence" that disappears as soon as the prover is allowed to imitate failure on purpose.

## Negative claims

Suppose the claim is:

> I was not thinking about birds.

There is a simple obstacle.

A person who did think about birds can usually behave afterward exactly like a person who did not. The extra internal event does not remove the ability to imitate the other case.

Let \(\mathcal T(A)\) be the set of observable traces that can be produced after activity \(A\), allowing arbitrary later strategy.

If

\[
\mathcal T(\neg A)\subseteq \mathcal T(A),
\]

then no strategy-independent trace can directly certify \(\neg A\). Every trace available to the non-\(A\) case is also available to the \(A\) case.

This observation is almost tautological. It is still useful because it tells us what kind of negative proof cannot work.

The chess story points to a different route.

Instead of trying to certify \(\neg B\) directly:

1. positively certify an activity \(A\);
2. argue that \(A\) and \(B\) could not both have occurred during the relevant interval;
3. conclude \(\neg B\).

The hard part has moved from "recognize absence" to "justify incompatibility".

That is a resource question.

## Cognitive resources

A first model would give the mind a single capacity \(C(t)\). Every activity consumes some amount of it, and two activities exclude each other when their combined demand exceeds capacity.

This is probably too crude.

Two tasks can interfere because they both need one particular resource even while much of the rest of cognition is idle. Conversely, two demanding tasks may coexist if they rely on substantially different resources.

A slightly richer model has a collection of capacity-limited channels. Their capacities may vary over time. An implementation of a cognitive task places load on some of those channels.

One can picture those channels as edges of a time-varying network,

\[
G_t=(V,E,c_t),
\]

although the graph is only a resource abstraction. The vertices need not be brain regions and the edges need not be neural pathways.

A task may have several implementations. For an activity \(A\), let \(\mathcal F_A\) be the allowed resource-use patterns that count as implementations of \(A\).

For a set of simultaneous activities \(S\), we ask whether there is a choice

\[
f_A\in\mathcal F_A
\qquad\text{for each }A\in S
\]

such that their total load never exceeds any capacity during the interval.

This captures several cases at once:

- two tasks may compete for a broad shared bottleneck;
- they may collide only on one specialized channel;
- alternative algorithms may route a task around a bottleneck;
- capacities may change with fatigue or practice;
- a task may occupy different resources at different moments.

For the chess argument, what matters is not that one particular way of playing chess uses a resource needed by \(B\). We need something stronger: every sufficiently successful allowed implementation of the certified chess task must conflict with every allowed implementation of \(B\).

That is a demanding assumption, and it should be visible whenever such an exclusion argument is made.

### Forgetting the network

For many sheep-counting questions, the internal layout of the resource network is more detail than we can use.

Suppose we fix an interval and a collection of high-level activities. From the whole resource model, keep only the answer to one question:

> Which sets of activities can occur together?

Let

\[
\mathcal C
\]

be the family of jointly feasible sets of activities.

If a set of activities is feasible, then removing one of them cannot make the remaining set infeasible. So \(\mathcal C\) is downward closed.

At this level, two activities are incompatible when \(\{A,B\}\notin\mathcal C\).

Pairwise incompatibility is not always enough to describe the system. Imagine three activities that each consume \(0.4\) units of the same resource of capacity \(1\). Every pair can coexist, but all three cannot.

So the information we need may be a family of **minimal incompatible sets**, not merely a graph of incompatible pairs.

This is a much smaller object than the original flow network. Two very different cognitive architectures are indistinguishable for our purposes if they induce the same family \(\mathcal C\).

Time, causality, memory, and streaming input may force us to enrich this object later. But for the narrow question "what can this certified activity exclude?", the compatibility structure may be all we need.

## A minimal evidence model

The resource model is only needed for some questions. The more basic sheep-counting setup can be stated without it.

Fix an interval \(I\).

There is an external input history \(X\).

There is a hidden execution history \(H\).

There is a cognitive claim

\[
Q(X,H)
\]

which says that the internal task of interest was performed.

There is an externally visible trace \(T\).

A verifier sees \(X\) and \(T\), but not \(H\), and applies a test

\[
V(X,T)\in\{\text{accept},\text{reject}\}.
\]

The order here matters conceptually. We start with \(Q\), the internal property we care about. We do not start with an output relation and then decide to interpret it psychologically.

For arithmetic, \(Q\) might say that enough relevant calculation occurred to solve the fresh exercises.

For babysitting, \(Q\) might say that the required vigilance was maintained.

For the monotone puzzle, \(Q\) might say that the prover found a valid witness from the current ambient instance.

The trace is only what the verifier gets to inspect.

Two familiar proof-system properties can then be adapted.

**Completeness:** executions satisfying \(Q\) should be able to produce accepting traces.

**Soundness:** executions not satisfying \(Q\) should not be able to produce accepting traces except with small probability, even under the allowed deceptive strategies.

This does not solve the hard part. We still have to decide what hidden executions count as satisfying \(Q\), what strategies and external aids are allowed, and what resource cost those executions have.

But it keeps the central object in the right place: the claim is about the internal activity, and verification is a secondary interface to it.

## A table of the examples

The examples are probably better treated as points in a design space than as separate species.

| Example | Internal task | Initiation / input source | Input over time | Typical trace | Main problem |
| --- | --- | --- | --- | --- | --- |
| "I am thinking about birds" | particular thought content | none required | none | usually none | little or no distinguishing trace |
| arithmetic exercises | calculation | verifier | one-shot | answers | easy case if input is fresh |
| babysitting | vigilance | context / environment | event-driven | reactions when events occur | quiet success may leave almost nothing |
| counting sheep | repeated internal counting | instruction or self-chosen | almost none | final count, sleepiness | trace weakly constrains execution |
| chess | sustained game analysis | opponent / game | streaming | moves, performance | linking performance to resource use |
| monotone guest puzzle | ambient search | prover + public environment | one-shot ambient | five-person witness | human search cost |
| Ramsey guest puzzle | ambient search | prover + public environment | one-shot ambient | four-person witness | human search cost |

Other coordinates matter too: preparation, prover control of the instance, access to external tools, verification cost, incentives, and resource incompatibility.

I do not think all of these should be collapsed into one score.

## What would make an ambient puzzle good?

The party puzzles suggest a more specific design problem.

We would like a task that can be instantiated from an uncontrolled or only partly controlled environment and that has several properties at once.

**A witness should exist.** Otherwise the prover may simply be unlucky.

**The witness should be short.** Verification should not reproduce the search.

**The instance should contain fresh information.** Stable knowledge about the participants should not determine the answer in advance.

**The prover should not be able to cherry-pick an easy instance too freely.** Allowing the prover to choose the task is useful only if that freedom does not collapse the cost.

**Preparation should not eliminate the online work.**

**Actual human search should be nontrivial.** This is the property the combinatorial theorems do not give us for free.

The Erdős-Szekeres example is attractive mainly because it gets the existence and certificate parts right. Whether it gets the human-work part right remains an experiment.

A useful first test would compare

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

reshuffle the same participants repeatedly, and measure solve time, errors, and learning.

The preprocessing question is especially interesting: after somebody has learned the guest list and practiced several rounds, how much online work remains when only the fresh total order changes?

## What the model does not yet capture

The simple compatibility model deliberately throws information away.

Cognition is stateful. Work done now can create memory that makes later work cheap.

Activities have temporal shape. Two tasks may both be feasible during the same ten-minute interval but not at the same instant.

Some tasks can be paused and resumed. Others lose their state when interrupted.

The external input may itself depend on the prover's previous actions, as in chess.

The resource capacities may be stochastic rather than fixed.

And the identity of an "activity" is already an abstraction: the same external task may be implemented by very different internal algorithms.

Those details matter if we want quantitative predictions. They matter less for some qualitative questions, especially simple incompatibility arguments.

This suggests using the weakest model that can answer the particular sheep-counting question rather than committing to a detailed model of cognition from the start.

## Questions I would try next

The examples leave several fairly concrete problems.

### Measure the ambient puzzles

The monotone-subsequence task is ready for a small human experiment.

The main measurements are not just raw solve time but how solve time changes with repetition, preprocessing, and reshuffling.

### Look for other guaranteed ambient witnesses

Erdős-Szekeres and Ramsey theory are only two sources.

Other existence principles may produce better human tasks: pigeonhole arguments, partial orders, matchings, parity, local extrema, or other small total-search principles.

The useful ones need a short witness and nontrivial human search, not merely an elegant theorem.

### Study self-initiated challenge selection

How much freedom can the prover have in selecting the problem?

If the prover can choose among a thousand predicates after seeing the room, one of them may have an obvious witness. Some notion of allowed challenge family, freshness, or selection cost is probably needed.

### Separate empirical evidence from adversarial proof

The babysitter example is useful under ordinary behavioral assumptions even though it fails against an arbitrary malicious strategy.

It would be useful to say explicitly, for each construction, which prover model is intended rather than treating all human evidence as if it had cryptographic soundness.

### Study compatibility rather than anatomy

For negative proofs, the full cognitive network may be unnecessary.

If experiments can establish a stable compatibility or incompatibility relation between families of tasks, that may already be enough for exclusion arguments without identifying the underlying cognitive channel.

The three-task example above also suggests looking for higher-order conflicts rather than only pairwise interference.

### Add time only when needed

A static family of compatible tasks may be enough for some claims.

Chess, vigilance, and other sustained activities probably require a temporal version in which configurations or resource requirements evolve during the interval.

It would be useful to understand exactly which sheep-counting questions force that additional structure.

## Closing

A question such as

> What are you thinking about?

normally asks for testimony. There is usually no reason to demand more.

But some situations do demand more. A student is asked to spend time solving exercises. A babysitter is paid to remain attentive during a quiet evening. A person may want to show that their mind was occupied by one task rather than another. Or a prover may try to extract a fresh mathematical challenge from the people standing around them and present a witness without anybody having issued the challenge first.

In each case the central object is mental activity. The visible answer, game, reaction, or combinatorial witness matters only insofar as it says something about that activity.

That puts several familiar computer-science ideas nearby: verification, witnesses, adversarial strategies, preprocessing, online computation, resource competition, and the difference between search cost and checking cost.

The useful formalism may turn out to be much smaller than a model of the human mind. For some questions we need only an input, a hidden execution, and a trace. For exclusion questions we may need only to know which combinations of activities can coexist. A detailed cognitive architecture is relevant only when the question can actually distinguish it.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Ramsey theory and the classical party problem; in particular, \(R(4,4)=18\).
