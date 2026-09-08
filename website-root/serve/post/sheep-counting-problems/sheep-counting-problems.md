# Sheep-Counting Problems for Computer Science

Suppose you ask me:

> What are you thinking about?

I answer:

> Birds.

Can you verify that answer?

Now consider a different situation. You give me a page of fresh arithmetic exercises. Ten minutes later I return it with the answers filled in, and most of them are correct.

In the second case, it is much easier to believe that something specific happened in my head. The answers do not show the calculation itself, but they are tied to it closely enough that checking the page tells you something about the preceding mental work.

There seems to be a family of questions here. Sometimes a mental task leaves a useful trace. Sometimes it leaves almost none. Sometimes the task is chosen for us, and sometimes it can be manufactured from whatever happens to be around. Sometimes the output is easy to check but hard to produce. Sometimes the only thing we care about is that a person kept paying attention during an interval in which nothing happened.

I will call these **sheep-counting problems**.

The examples are more useful than a definition, so I will start with them.

## Arithmetic

Suppose I give you fresh exercises such as

```text
137 × 284 = ?
519 - 287 = ?
...
```

and ask you to solve them mentally.

You return a page of answers. If enough of them are correct, this is fairly convincing evidence that you spent some time doing arithmetic.

This is the easy case. The input is explicit. The expected relationship between input and answer is clear. The verifier can choose new exercises whenever needed. And checking an answer can be much cheaper than finding it mentally.

There are still obvious caveats. A solver may know an answer already. A clever shortcut may make an exercise easier than expected. A calculator would defeat the intended task entirely. These are not special problems with arithmetic; they are part of specifying what kind of work the exercise is supposed to demonstrate.

But the basic arrangement is favorable:

```text
fresh problem  --->  mental work  --->  checkable answer
```

The next examples each remove one of these conveniences.

## The babysitter

A parent leaves a babysitter with a sleeping child for three hours.

On an uneventful evening, a good babysitter may do almost nothing. The important part of the job is to remain attentive enough to notice if the child wakes, cries, becomes ill, or otherwise needs help.

Suppose the parent returns three hours later and finds the child still sleeping peacefully.

This is perfectly compatible with a diligent babysitter. It is also compatible with a babysitter who fell asleep five minutes after the parent left.

The difficulty is not that the job was unsuccessful. The difficulty is that successful performance may produce almost no visible result.

An eventful evening is different. If the child wakes several times and the babysitter responds appropriately each time, the parent has more evidence that the babysitter was paying attention. The environment happened to supply tests of the desired vigilance.

The babysitter is therefore a useful contrast with arithmetic. Arithmetic naturally produces many checkable outputs. Vigilance may be valuable precisely during periods in which there is nothing to respond to.

## Counting sheep

Consider the literal instruction:

> Count sheep in your head for ten minutes.

At the end the person says:

> I reached 843.

The requested activity is perfectly clear. The problem is that the obvious result is not very informative.

A person can invent 843 at the end. They can count for one minute and then stop. They can count irregularly. Many different ten-minute histories lead to the same report.

There may be other observations. Perhaps the person yawns, becomes sleepy, or falls asleep. If counting sheep really changes the probability of those outcomes, then they provide some evidence. But they are only loosely connected to the particular process we asked for.

So an assigned mental task can be easy to state and still be difficult to check. The existence of an output is not enough; the output has to constrain what could plausibly have happened before it.

## Chess at a party

Consider a more artificial example.

A jealous girlfriend leaves her boyfriend at a party and tells him to play chess continuously while she is away.

When she returns, there is a whole game to inspect. Suppose, for the sake of the example, that his usual chess performance is well characterized. A long game contains many decisions, many responses to positions that could not have been known in advance, and perhaps enough data to compare his play with an ordinary baseline.

Chess has a feature that arithmetic and sheep counting do not: fresh input keeps arriving. Every opponent move changes the state of the problem. The player must repeatedly react to information that did not exist when the game began.

The game also has a temporal footprint. A ten-minute arithmetic worksheet can sometimes be solved in the first two minutes and then left alone. A competent hour-long chess game contains evidence spread throughout the hour.

For now, that is the interesting part of the example. Later we will return to why the girlfriend wanted the chess game in the first place.

## Puzzles without a supplied challenge

The previous examples all begin with a recognizable assignment. Somebody says: solve these exercises, watch the child, count sheep, play chess.

There is another situation.

Suppose nobody prepared a challenge for me. At some point I am asked to show that I have just done some nontrivial mental work. Can I produce a convincing proof anyway?

One possibility is to use the state of the environment as the input.

This changes the shape of the problem. The verifier does not have to generate a fresh exercise or choose a secret random value. The prover can choose a problem whose instance is already present in public view, solve it, and present a small witness.

A party gives convenient toy examples because a room full of people contains a lot of structured information without requiring paper, computers, or a trusted random generator.

### A monotone subsequence of guests

Assume there are seventeen people with a given total order. It might be the order in which they are standing, but the geometry is not important. We only need one total order everybody agrees on.

There is also a second total order, for example alphabetical order of their names.

Reading the alphabetical ranks in the given order gives a permutation of seventeen numbers.

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

The prover points to five people. The verifier checks two orders.

Several things line up nicely. The witness is short. Existence is guaranteed. The prover may know everybody's name in advance, while the current ordering can still be fresh. And no verifier had to invent the concrete instance.

What the theorem does not tell us is whether finding the witness is actually difficult for a human. A typical ordering may contain many valid subsequences. People may learn good heuristics quickly. The construction has a nice mathematical shape, but its human cost is still an empirical question.

### A graph among the guests

Graphs give another family.

Let the guests be vertices, and let some quickly checkable symmetric relation determine the edges.

A tempting problem is:

> Find the largest clique.

A proposed clique is easy to check. But checking that it is the *largest* clique is another matter. The certificate has stopped being obviously cheaper than the search.

A fixed target size is easier to verify, but then a clique of that size may not exist.

Ramsey theory gives one way around that problem. Since

\[
R(4,4)=18,
\]

every graph on eighteen vertices contains either a clique of size four or an independent set of size four.

So with eighteen guests we can ask:

> Find four guests who are all pairwise related, or four guests no two of whom are related.

Again, the room supplies the instance, a witness is guaranteed, and the witness is small.

The unusual feature of these puzzles is not just that they have certificates. It is that the prover can initiate the whole construction. A proof can be produced from public ambient structure without the verifier first handing over a challenge.

That freedom is attractive, but it creates a new danger: if the prover is also free to choose among many possible problems, they may simply select whichever one happens to be easiest. We will return to this when discussing inputs and preparation.

## What varies between the examples?

The examples do not seem to form a clean taxonomy. It is more useful to treat them as points in a design space.

| Example | Task | Concrete input | Input over time | Typical visible result |
| --- | --- | --- | --- | --- |
| thinking about birds | particular thought content | none required | none | usually only testimony |
| arithmetic | calculation | verifier-supplied exercises | one-shot | answers |
| babysitting | vigilance | events involving the child | sparse / event-driven | responses when events occur |
| counting sheep | repeated internal counting | almost none | none after start | final count, perhaps sleepiness |
| chess | game analysis | opponent and position | continuous / streaming | moves and performance |
| monotone guest puzzle | combinatorial search | ambient public order | one-shot | five-person witness |
| Ramsey guest puzzle | combinatorial search | ambient public graph | one-shot | four-person witness |

Several questions recur:

- Where does the input come from?
- How much of it is fresh?
- Who chooses the task?
- Does input arrive once or throughout the interval?
- What visible result does the task tend to leave?
- How hard is that result to produce without doing the relevant work?
- How hard is the result to check?
- How much preparation can happen before the fresh part of the task begins?
- What other mental activities can happen at the same time?
- What assumptions are we making about the prover's incentives?

These questions are related, but they are not the same question. Keeping them separate makes the examples easier to reason about.

## How much does the result tell us?

For a task to be useful as evidence, its visible result must depend strongly enough on the preceding mental work.

The answer `843` does not tell us much about ten minutes of sheep counting.

A quiet babysitting shift may contain almost no visible data at all.

A page of fresh arithmetic answers can be much more informative.

A valid monotone subsequence perfectly establishes the mathematical statement that those five people form such a subsequence, but that is not yet the same as establishing that finding them required substantial effort.

This last distinction is important. Verification can be mathematically perfect while proof of *work* is poor. If the witness happened to be obvious, the certificate is still correct, but very little work was demonstrated.

For probabilistic examples, it may be useful to think in terms of distributions. If a task was performed, what observable outcomes tend to follow? If it was not performed, what outcomes tend to follow instead? The farther apart those distributions are, the more evidence the observation can carry.

For stronger proof-like claims, we want something more adversarial: even somebody actively trying to fake the result should have difficulty doing so without performing enough of the relevant work.

## Where does the input come from?

Arithmetic gives the verifier unusually strong control. The verifier can choose a fresh instance and hand it over at a known time.

Other examples distribute that control differently.

In chess, the opponent supplies a stream of fresh positions.

In babysitting, the environment supplies events unpredictably, and sometimes supplies none at all.

In sheep counting, almost no new external information is required after the instruction.

In the party puzzles, the surrounding group supplies the concrete instance while the prover may choose the kind of problem.

It helps to separate two questions:

1. Who chooses the **problem family**?
2. Who determines the **concrete instance**?

Those can be different parties.

A verifier may choose both. A prover may choose the problem family while the environment supplies the instance. An opponent may produce the instance gradually. Or the prover may control both, which is dangerous because the prover can choose an easy case.

For proof-of-work-like uses, randomness is not quite the right requirement. The useful property is that enough of the relevant input remains fresh and outside the prover's control that preparation cannot eliminate the online work.

The ambient case raises an additional problem. If the prover is allowed to inspect the room and then choose from thousands of possible predicates, one of them may have an immediate witness. A self-initiated proof therefore needs some restriction on challenge selection, or some accounting for the cost of searching over challenges.

## Cost

The proof-of-work-like examples care about an asymmetry:

\[
\text{cost to produce evidence} \gg \text{cost to check evidence}.
\]

For humans, concrete small-instance costs may matter more than asymptotic complexity. Blum and Vempala's model of human computation is useful here because it separates preparation from online processing.

I will use three quantities:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** is work done before the fresh part of the instance becomes available: memorizing names, practicing a strategy, learning the guest list, building mental lookup structures.

**PROC** is the work that remains after the fresh input arrives.

**VER** is the cost of checking the resulting evidence.

A promising construction keeps \(\operatorname{PROC}\) substantial even after generous preparation, while keeping \(\operatorname{VER}\) small.

The relevant cost is always the cost of the cheapest successful allowed strategy. If the prover discovers a shortcut, the shortcut becomes the real complexity of the task. If a stable feature can be precomputed, the online cost may collapse even when the naive method is difficult.

This is why the monotone-subsequence puzzle still needs experiments. Erdős-Szekeres gives existence and cheap verification. It gives no lower bound on the cheapest human search strategy.

## Incentives

So far, the examples have mostly been described as if observed behavior directly reflected the person's mental state. That is sometimes too generous.

Return to the babysitter.

Suppose the child cries for twenty minutes and the babysitter does nothing. Under ordinary assumptions, this is evidence that the babysitter was not paying attention.

But an attentive babysitter can deliberately ignore the child.

The observation therefore depends on an assumption about what the babysitter is trying to achieve. It distinguishes ordinary attentive babysitting from ordinary inattention; it does not distinguish inattention from attentive sabotage.

Chess has the same issue in the opposite direction. Poor play does not prove distraction, because an attentive player can intentionally blunder.

This suggests keeping two standards apart.

**Strategy-independent evidence** remains valid even when the prover deliberately chooses the most misleading allowed behavior.

**Incentive-dependent evidence** is interpreted relative to assumptions about what the prover wants and how those incentives affect behavior.

Neither is automatically more useful. A real babysitting arrangement obviously comes with incentives and social expectations. But a cryptographic-style proof should not silently depend on them.

This distinction matters especially when we try to prove that some mental activity did *not* occur.

## Negative claims

Suppose the claim is:

> I was not thinking about birds.

There is an immediate problem. A person who did think about birds can usually behave afterward exactly like a person who did not.

Let \(\mathcal T(A)\) be the set of visible traces that can be produced after activity \(A\), allowing arbitrary later strategy.

If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then no strategy-independent trace can directly certify \(\neg A\). Every trace available to the non-\(A\) case is also available to the \(A\) case.

The observation is simple, but it rules out a large family of naive negative proofs. Doing more mental work often gives a person more internal state without removing any ability to imitate somebody who did less.

The chess story suggests another route.

The girlfriend does not need a direct symptom of *not* thinking about somebody else. She can instead try to establish that the boyfriend spent the interval performing another mental activity which is incompatible with the one she wants to exclude.

The argument has the form

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

Now the difficult question is not how to recognize absence. It is how to justify the incompatibility.

## Cognitive resources

A first approximation would give the mind a single time-varying capacity \(C(t)\). Each task consumes some amount of that capacity, and two tasks cannot coexist when their combined demand exceeds what is available.

That is probably too coarse.

Two tasks can interfere because both need one particular resource while leaving other resources unused. Conversely, two demanding tasks may coexist if they rely on largely different machinery.

A more flexible abstraction is a collection of capacity-limited channels whose capacities may change over time. A cognitive task places load on some of those channels, and the same task may admit several implementations with different resource profiles.

One can picture the channels as edges of a time-varying network

\[
G_t=(V,E,c_t),
\]

where \(c_t(e)\) is the capacity of channel \(e\) at time \(t\).

For an activity \(A\), let \(\mathcal F_A\) be the set of allowed resource-use patterns that count as implementations of \(A\).

A set of activities \(S\) can coexist if we can choose one implementation for every \(A\in S\) while keeping the combined use of every resource within capacity throughout the relevant interval.

This allows several kinds of interference:

- two tasks may share a broad bottleneck;
- two tasks may collide only on one specialized channel;
- an alternative algorithm may route around a bottleneck;
- capacity may change with fatigue or practice;
- the resource use of a task may change over time.

For a negative proof, the required claim is strong. It is not enough that one familiar way of doing \(A\) conflicts with one familiar way of doing \(B\). Every allowed implementation consistent with the certificate for \(A\) must conflict with every relevant implementation of \(B\).

## Forgetting the network

The full network may contain much more detail than the questions require.

Fix an interval and a collection of high-level activities. From the resource model, retain only the answer to:

> Which sets of activities can occur together?

Let \(\mathcal C\) be the family of jointly feasible sets.

If a set is feasible, every subset of it is feasible too. Therefore \(\mathcal C\) is downward closed.

At this level, two activities are incompatible when

\[
\{A,B\}\notin\mathcal C.
\]

Pairwise conflicts need not be enough. If three tasks each use \(0.4\) units of a shared resource of capacity \(1\), every pair can coexist while all three together cannot.

So the useful object may be the collection of **minimal incompatible sets** rather than a graph of pairwise conflicts.

This quotient forgets where the bottlenecks are, how tasks are routed, and many other details. Two very different resource networks are equivalent for these questions if they induce the same family \(\mathcal C\).

Time, memory, causality, and interactive input may force us to enrich this structure later. But for the narrow question of what a certified activity can exclude, the compatibility family may already contain everything we use.

## A minimal formal description

The general verification problem can be written with less machinery.

Fix a time interval \(I\).

Let \(X\) be the external input history during that interval.

Let \(H\) be the hidden cognitive history.

Let

\[
Q(X,H)
\]

be the property of that history that we care about.

Let \(T\) be the externally visible trace.

A verifier sees \(X\) and \(T\), but not \(H\), and applies a test

\[
V(X,T)\in\{\text{accept},\text{reject}\}.
\]

For arithmetic, \(Q\) might require enough relevant calculation to solve the fresh exercises.

For babysitting, \(Q\) might require sustained vigilance.

For an ambient puzzle, \(Q\) might require finding a valid witness from the current public instance.

Two familiar proof-system notions then apply.

**Completeness.** If an allowed execution satisfying \(Q\) occurs, it should be possible to produce accepting evidence.

**Soundness.** If no execution satisfying \(Q\) occurs, an allowed deceptive strategy should have only a small chance of producing accepting evidence.

This formal description deliberately leaves several things unspecified: what counts as the same task, what external aids are allowed, which strategies are admissible, and how mental cost is measured. Those choices belong to the particular sheep-counting problem rather than to the notation itself.

## Ambient puzzles as a design problem

The party examples suggest a narrower problem worth studying on its own.

We want a prover to be able to obtain a challenge from an uncontrolled or partly controlled environment and then present a short witness, without relying on a verifier to generate the concrete instance.

Several properties would be useful.

**A witness should reliably exist.** Otherwise the prover can simply be unlucky.

**The witness should be short.** Verification should not reproduce the search.

**The instance should contain fresh information.** Stable knowledge about the environment should not determine the answer in advance.

**The prover should not have too much freedom to cherry-pick an easy problem.**

**Preparation should not eliminate the online work.**

**Actual human search should be nontrivial.** This is the condition that combinatorial existence theorems do not provide.

The monotone-subsequence construction gets several of these properties almost for free. The main missing piece is human complexity.

A simple experiment would compare

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

where \(n=(k-1)^2+1\), reshuffling the same participants between rounds and measuring solve time, errors, strategy changes, and learning.

The most interesting measurement may be what survives repetition. Once the solver knows every participant and has practiced several rounds, how much work remains when only the fresh order changes?

## What the models leave out

The compatibility model intentionally forgets most of cognition.

Mental work is stateful. Effort now can create memory that makes later work cheap.

Tasks have temporal structure. Two activities may both fit within a ten-minute interval while being impossible at the same instant.

Some tasks can be paused and resumed; others lose state when interrupted.

Inputs may depend on earlier outputs, as in chess.

Resource capacities may vary unpredictably.

And the identity of a high-level activity is already an abstraction: the same external task may be implemented by very different internal algorithms.

These details matter if we want quantitative predictions. They may be unnecessary for simpler qualitative questions such as whether one certified activity can exclude another.

The useful approach may therefore be to add structure only when a particular question requires it.

## Questions to try next

The examples suggest several concrete directions.

### Measure ambient human search

The monotone-subsequence task can be tested directly. Repeated reshuffling would show whether the fresh order continues to impose online work after substantial preparation.

### Find other guaranteed ambient witnesses

Erdős-Szekeres and Ramsey theory are only two sources. Pigeonhole arguments, partial orders, matching theorems, parity principles, local extrema, and other small total-search results may produce better tasks.

The useful examples need short witnesses and nontrivial human search, not merely elegant existence proofs.

### Understand self-initiated challenge selection

If a prover can choose the problem after seeing the environment, how much choice is too much?

One possibility is to restrict the allowed family of problems. Another is to count the search over problem families as part of the prover's work. The right formulation is not obvious.

### Measure compatibility directly

For exclusion arguments, it may be unnecessary to identify the underlying cognitive bottleneck.

Experiments may be able to establish that certain task families are reliably compatible or incompatible, including higher-order conflicts that appear only when three or more tasks are combined.

### Add time when necessary

A static compatibility family may be enough for some exclusion claims. Chess, vigilance, and other sustained activities probably require a temporal version.

It would be useful to know exactly which questions force that extra structure.

## Closing

The question

> What are you thinking about?

usually asks for testimony, and testimony is usually enough.

But there are situations in which the mental activity itself matters. A student is expected to spend time solving exercises. A babysitter is paid to remain attentive through a quiet evening. A person may try to occupy their mind with one task strongly enough to rule out another. Or a prover may use whatever happens to be around as a fresh mathematical instance and produce a witness without anybody having issued a challenge first.

Those situations bring familiar computer-science ideas into an unusual setting: witnesses, verification, preprocessing, online input, adversarial strategies, resource competition, and the gap between the cost of producing an answer and checking it.

The most useful formal object may depend on the question. Some examples need only an input, a hidden execution, and a visible trace. Exclusion questions may need only a compatibility relation between task families. Quantitative claims may require a richer resource model.

That seems like enough structure to start asking sharper questions.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Ramsey theory and the classical party problem; in particular, \(R(4,4)=18\).
