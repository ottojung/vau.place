# Sheep-Counting Problems for Computer Science

Suppose you ask me:

> What are you thinking about?

I answer:

> Birds.

Can I prove that I really was thinking about birds?

Usually I cannot do much better than tell you that I was.

Now suppose instead that I say I was thinking about math, and I hand you a page with arithmetic problems where I filled in the answer. You still did not see what happened in my head, but now I have something I can show you.

I think there is an interesting family of problems hiding in this difference: when can a person prove, or at least give useful evidence for, what they were thinking about?

I will call these **sheep-counting problems**.

## Arithmetic

Suppose I give you fresh exercises such as

```text
137 × 284 = ?
519 - 287 = ?
...
```

and ask you to solve them mentally.

You return a page of answers. If enough of them are correct, this is good evidence that you spent some time thinking about the exercises.

This is the easy case. The input is explicit. The answers are easy to inspect. New exercises can be chosen whenever needed. And checking an answer can be much cheaper than finding it mentally.

## Counting sheep

Now consider the instruction:

> Count sheep in your head for ten minutes.

At the end the person says:

> I reached 843.

The situation looks superficially similar to arithmetic: there is an instruction, there is some thinking, and there is an answer at the end.

But `843` does not tell us very much. It can be invented at the end. A person can count for one minute and then stop. Many different ten-minute histories lead to the same report.

Other observations may carry more information. Perhaps the person yawns or even falls asleep. These are imperfect clues, but at least they may depend on what happened during the interval.

So two very simple mental tasks can behave quite differently. Arithmetic naturally leaves answers that are closely related to the calculations. Sheep counting leaves a much weaker trail.

## The babysitter

A parent leaves a babysitter with a sleeping child for three hours.

On an uneventful evening, a good babysitter may do almost nothing. The important part of the job is to remain attentive enough to notice if the child wakes, cries, becomes ill, or otherwise needs help.

Suppose the parent returns three hours later and finds the child still sleeping peacefully.

This is compatible with a diligent babysitter. It is also compatible with a babysitter who fell asleep five minutes after the parent left.

If the child wakes several times and the babysitter responds each time, the situation is different. The evening itself has supplied several occasions on which attention could become visible.

I think this is a useful example because it is not naturally a puzzle with an answer. The thing we want from the babysitter is attention over time, including during stretches in which nothing happens.

## Chess at a party

A jealous girlfriend leaves her boyfriend at a party and tells him to play chess while she is away.

Suppose he plays twenty one-minute games.

When she returns, she can inspect the games and his performance across them. There are many moves, many fresh positions, and many decisions spread across the interval.

Chess has a feature that arithmetic and sheep counting do not: new input keeps arriving. Every opponent move changes the position. The player repeatedly has to react to something that was not known at the start.

Twenty short games also spread the evidence through time. They say something different from a worksheet that might have been completed early and then left alone.

The girlfriend's actual reason for choosing chess will matter later. For now, the useful feature is simply that a sustained line of thought can leave a long sequence of externally checkable consequences.

## Puzzles without a supplied challenge

The examples so far all begin with a recognizable assignment. Somebody says: solve these exercises, count sheep, watch the child, play chess.

But the verifier does not necessarily have to initiate the process.

A person can decide on their own to think about something in a way that will later be provable. The trick is to use public information already present around them, do some computation on it, and later show the result.

This is a slightly unusual kind of proof. Somebody can ask me what I was thinking about only after the thinking has already happened, and I may still be able to produce evidence without their having prepared a challenge for me in advance.

A party gives convenient toy examples because a room full of people already contains a lot of public structure.

### The obvious computer-science solution

Start with a deliberately crude construction.

Choose a public rule that converts every guest's name into an integer. Add all of those integers together to obtain a number

\[
N.
\]

Now factor \(N\).

Later the prover can present the factors, and the verifier can multiply them and check that their product is \(N\).

From an ordinary complexity-theory point of view this has an attractive shape. Factorization is difficult, while checking a proposed factorization is straightforward.

But as a human problem this is fairly bad. Large-integer arithmetic is itself cumbersome to do mentally. Even checking the product of large factors may be expensive for a person. And asymptotic hardness on a Turing-machine-like model tells us little about whether the particular instance is difficult for an unaided human.

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

The prover points to five people. The verifier checks the two orders.

The witness is short. Existence is guaranteed. The prover may know everybody's name in advance while the current ordering is still fresh. And no verifier had to invent the instance.

The remaining question is how difficult the search actually is for a human. The theorem guarantees a witness, not a particular amount of effort to find one.

### A graph among the guests

Graphs give another family.

Let the guests be vertices, and let some quickly checkable symmetric relation determine the edges.

A tempting problem is:

> Find the largest clique.

A proposed clique is easy to check. But checking that it is the *largest* clique is another matter.

A fixed target size is easier to verify, but then a clique of that size may not exist.

Ramsey theory gives one way around this. Since

\[
R(4,4)=18,
\]

every graph on eighteen vertices contains either a clique of size four or an independent set of size four.

So with eighteen guests we can ask:

> Find four guests who are all pairwise related, or four guests no two of whom are related.

Again, the room supplies the instance, a witness is guaranteed, and the witness is small.

To me, the interesting feature of these puzzles is that the prover can initiate them. They can choose to think about a publicly checkable problem, use the environment as its concrete instance, and later present a witness.

That freedom creates its own problem: if the prover may choose among many possible problems after inspecting the environment, perhaps they can simply choose one whose answer is already obvious.

## Comparing the examples

The examples vary along several dimensions.

| Example | What is happening mentally? | Concrete input | Input over time | Typical visible result |
| --- | --- | --- | --- | --- |
| thinking about birds | particular thought content | none required | none | testimony |
| arithmetic | calculation | verifier-supplied exercises | one-shot | answers |
| counting sheep | repeated internal counting | almost none | none after start | final count, perhaps sleepiness |
| babysitting | vigilance | events involving the child | sparse / event-driven | responses to events |
| chess | game analysis | opponents and positions | streaming | games and performance |
| factoring guests' names | arithmetic search | ambient guest list | one-shot | factors |
| monotone guest puzzle | combinatorial search | ambient public order | one-shot | five-person witness |
| Ramsey guest puzzle | combinatorial search | ambient public graph | one-shot | four-person witness |

Several questions recur:

- Where does the input come from?
- Who chooses what to think about?
- How much of the input is fresh?
- Does new input arrive once or throughout the interval?
- What does the activity leave behind that another person can inspect?
- How strongly is that result tied to the claimed activity?
- When cost matters, how costly is producing the result compared with checking it?
- What preparation can happen beforehand?
- What other mental activities can happen at the same time?
- What assumptions are being made about the person's incentives?

I think these questions are more useful kept separate than forced immediately into a single classification.

## How much does the result tell us?

The answer `843` tells us little about ten minutes of sheep counting.

A quiet babysitting shift may contain almost no visible data.

A page of fresh arithmetic answers can be much more informative.

A valid monotone subsequence establishes exactly the mathematical fact that those five people form such a subsequence. But that does not by itself tell us how difficult the witness was to find.

There are therefore at least two questions:

1. How strongly does the visible result support the claim about the preceding thought or activity?
2. If we care about cost, how costly was it to produce that result?

For probabilistic cases, one can compare the distributions of observations produced when the activity happens and when it does not. For proof-like cases, one can instead ask whether an accepting result can be produced by some strategy that avoids the activity we intended to test.

## Where does the input come from?

Arithmetic gives the verifier strong control: choose a fresh instance and hand it over at a known time.

The other examples distribute that control differently.

In chess, opponents supply a stream of fresh positions.

In babysitting, the environment supplies events unpredictably and may supply none at all.

In sheep counting, almost no external input arrives after the instruction.

In the party puzzles, the surrounding group supplies the instance while the prover may choose the kind of problem.

It helps to separate two questions:

1. Who chooses the **problem family**?
2. Who determines the **concrete instance**?

Those can be different parties.

A verifier may choose both. A prover may choose the problem family while the environment supplies the instance. An opponent may produce the instance gradually.

The self-initiated case is especially interesting because the verifier can arrive late. The proof does not require a verifier-generated challenge at the beginning. What matters is whether the prover's freedom to select the problem and prepare for it makes the eventual proof trivial.

## Cost

Cost is important for some sheep-counting problems, but it is not part of every claim.

If the question is simply whether somebody was thinking about arithmetic, a few easy exercises may be enough. If we want the exercise to occupy a substantial part of the person's cognition, or to behave like proof of work, then the amount of processing becomes important too.

For those cases, Blum and Vempala's model of human computation suggests a useful distinction between preparation and online processing.

Write

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** is activity that can happen before the fresh part of the instance becomes available: memorizing names, practicing strategies, learning the guest list, building mental lookup structures.

**PROC** is what still has to happen after the fresh input arrives.

**VER** is the cost of checking the resulting evidence.

For a proof-of-work-like construction we would like substantial \(\operatorname{PROC}\) and small \(\operatorname{VER}\), even after generous \(\operatorname{PREP}\).

The relevant processing cost is the cheapest successful allowed strategy. A shortcut is not cheating merely because the designer did not expect it; it changes the real difficulty of the task.

This is why the monotone-subsequence puzzle still needs experiments. Erdős-Szekeres gives existence and cheap verification. It gives no lower bound on the cheapest human strategy for finding the witness.

## Incentives

Now return to the babysitter.

Suppose the child cries for twenty minutes and the babysitter does nothing. Normally this would be evidence that the babysitter was not paying attention.

But an attentive babysitter can deliberately ignore the child.

The observation therefore depends on an assumption about what the babysitter is trying to do. It distinguishes ordinary attentive babysitting from ordinary inattention; it does not distinguish inattention from attentive sabotage.

Chess has the same issue. Poor performance does not prove distraction, because an attentive player can intentionally play badly.

This suggests keeping two standards apart.

**Strategy-independent evidence** remains valid even when the prover deliberately chooses the most misleading allowed behavior.

**Incentive-dependent evidence** is interpreted relative to assumptions about what the prover wants and how those incentives affect behavior.

The distinction becomes especially important when we ask for negative answers.

## Negative answers

Arithmetic gives a particularly clean way to see the asymmetry.

Suppose the claim is:

> I was solving arithmetic exercises in my head.

We already have an obvious kind of positive evidence: show the fresh exercises and their correct answers.

Now take the complement:

> I was **not** solving arithmetic exercises in my head.

What would the corresponding certificate look like?

There is no obvious analogue of the completed worksheet. Doing no arithmetic does not naturally produce an object that only a non-arithmetic thinker can produce.

Worse, a person who *did* solve arithmetic exercises can usually behave afterward exactly like somebody who did not. They can stay silent, throw the answers away, or produce whatever ordinary behavior the non-solver could have produced.

Let \(\mathcal T(A)\) be the set of visible traces available after activity \(A\), allowing arbitrary later strategy. If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then no strategy-independent trace can directly certify \(\neg A\). Every trace available to the non-\(A\) case is also available to the \(A\) case.

I think this is the right reason to be suspicious of a simple positive/negative symmetry here. Once a mental activity has happened, it often adds possibilities without taking away the ability to imitate somebody who did less.

## Proving something incompatible instead

There is another route to a negative conclusion.

Suppose I want to establish that activity \(B\) did not happen. Instead of looking for a special symptom of non-\(B\), I can try to prove that another activity \(A\) *did* happen throughout the relevant interval, where \(A\) and \(B\) could not have happened together.

Then

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is what the girlfriend was really trying to do with chess. Chess was not the final fact she cared about. She wanted a positively checkable activity that would occupy whatever cognitive resources were needed for the competing activity she wanted to exclude.

The same move also helps with the incentive problem.

The bad inference was:

```text
poor behavior  =>  lack of attention
```

because an attentive person can deliberately behave poorly.

A resource argument does not have to infer an internal absence from somebody's chosen failure. Instead it can certify a different positive activity and use incompatibility to infer the absence. The conclusion then comes from the resource assumption rather than from assuming that the person wanted to behave normally.

So two problems that looked rather different — certifying complements and avoiding incentive-dependent negative evidence — lead to the same question:

> Which mental activities can coexist?

## Cognitive resources

The simplest model would give the mind a single time-varying capacity \(C(t)\). Each activity consumes some amount of it, and activities cannot coexist when their combined demand exceeds what is available.

I think that is too coarse for many cases.

Two activities can interfere because both need one particular resource while leaving other resources unused. Conversely, two demanding activities may coexist if they rely on different resources.

A more flexible abstraction is a collection of capacity-limited channels whose capacities may change over time. An activity places load on some of those channels, and the same activity may admit several implementations with different resource profiles.

One can picture the channels as edges of a time-varying network

\[
G_t=(V,E,c_t),
\]

where \(c_t(e)\) is the capacity of channel \(e\) at time \(t\).

For an activity \(A\), let \(\mathcal F_A\) be the set of allowed resource-use patterns that count as implementations of \(A\).

A set of activities \(S\) can coexist if we can choose one implementation for every \(A\in S\) while keeping the combined use of every resource within capacity throughout the relevant interval.

This allows several kinds of interference:

- two activities may share a broad bottleneck;
- two may collide only on one specialized channel;
- an alternative strategy may route around a bottleneck;
- capacity may change over time;
- resource use may change as the activity proceeds.

For the chess example, the negative argument needs a strong condition: every sufficiently successful way of carrying out the certified chess activity must conflict with every relevant way of carrying out the competing activity.

## Forgetting the network

The full network may contain much more detail than these questions need.

Fix an interval and a collection of high-level activities. From the resource model, retain only the answer to:

> Which sets of activities can occur together?

Let \(\mathcal C\) be the family of jointly feasible sets.

If a set is feasible, every subset of it is feasible too. Therefore \(\mathcal C\) is downward closed.

At this level, two activities are incompatible when

\[
\{A,B\}\notin\mathcal C.
\]

Pairwise conflicts need not be enough. If three activities each use \(0.4\) units of a shared resource of capacity \(1\), every pair can coexist while all three together cannot.

So the useful object may be the collection of minimal incompatible sets rather than only a graph of pairwise conflicts.

Two very different cognitive resource networks are indistinguishable for these questions if they induce the same family \(\mathcal C\).

Time, memory, causality, and interactive input may require more structure. But for simple exclusion questions, the compatibility family may already be enough.

## A minimal formal description

Fix a time interval \(I\).

Let \(X\) be the external input history during that interval.

Let \(H\) be the hidden cognitive history.

Let

\[
Q(X,H)
\]

be the property of that history that we care about: thinking about a subject, carrying out a calculation, maintaining vigilance, following a game, searching for a witness, or something else.

Let \(T\) be the externally visible trace.

A verifier sees \(X\) and \(T\), but not \(H\), and applies a test

\[
V(X,T)\in\{\text{accept},\text{reject}\}.
\]

Two familiar proof-system notions can then be adapted.

**Completeness.** If an allowed history satisfying \(Q\) occurs, accepting evidence should be obtainable.

**Soundness.** If no allowed history satisfying \(Q\) occurs, a deceptive strategy should have only a small chance of producing accepting evidence.

The particular problem determines what histories count, what external aids are allowed, how costs are measured, and whether incentives are part of the model.

## Ambient puzzles as a design problem

The party examples suggest a narrower problem worth studying on its own.

We want a person to be able to choose a verifiable thought or search from an uncontrolled or partly controlled environment, without relying on a verifier to generate the concrete instance first.

Several properties seem useful.

**A witness should reliably exist.** Otherwise the prover can simply be unlucky.

**The witness should be short.** Verification should not reproduce the search.

**The instance should contain fresh information.** Stable knowledge about the environment should not determine the answer in advance.

**The prover should not have too much freedom to cherry-pick an easy problem.**

**Preparation should not eliminate the online processing.**

**If substantial thinking is part of the goal, actual human search should be nontrivial.**

The monotone-subsequence construction gets several of these properties almost for free. The main missing piece is human complexity.

A simple experiment would compare

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

where \(n=(k-1)^2+1\), reshuffling the same participants between rounds and measuring solve time, errors, strategy changes, and learning.

The most interesting measurement may be what survives repetition. Once the solver knows every participant and has practiced several rounds, how much online processing remains when only the fresh order changes?

## What the models leave out

The compatibility model intentionally forgets most of cognition.

Thinking is stateful. What happens now can create memory that changes what is possible later.

Activities have temporal structure. Two activities may both fit within a ten-minute interval while being impossible at the same instant.

Some activities can be paused and resumed; others lose state when interrupted.

Inputs may depend on earlier outputs, as in chess.

Resource capacities may vary unpredictably.

And the identity of a high-level activity is already an abstraction: the same task may be carried out internally in very different ways.

These details matter for quantitative predictions. They may be unnecessary for simpler qualitative questions such as whether one certified activity can exclude another.

## Questions to try next

### Measure ambient human search

The monotone-subsequence task can be tested directly. Repeated reshuffling would show whether the fresh order continues to require online processing after substantial preparation.

### Find other guaranteed ambient witnesses

Erdős-Szekeres and Ramsey theory are only two sources. Pigeonhole arguments, partial orders, matching theorems, parity principles, local extrema, and other small total-search results may produce better tasks.

The useful examples need short witnesses and nontrivial human search when nontrivial search is part of the goal.

### Understand self-initiated challenge selection

If a prover can choose what problem to think about after seeing the environment, how much choice is too much?

One possibility is to restrict the allowed family of problems. Another is to count the search over problem families as part of the activity being certified.

### Measure compatibility directly

For exclusion arguments, it may be unnecessary to identify the underlying cognitive bottleneck.

Experiments may be able to establish that certain activity families are reliably compatible or incompatible, including higher-order conflicts that appear only when three or more activities are combined.

### Add time when necessary

A static compatibility family may be enough for some exclusion claims. Chess, vigilance, and other sustained activities probably require a temporal version.

It would be useful to know exactly which questions force that extra structure.

## Closing

The original question was simple:

> What are you thinking about?

Usually an answer is enough. But one can also ask whether the person could prove the answer.

Arithmetic gives an easy positive example. Sheep counting gives a closely related task with much weaker evidence. Babysitting moves from a puzzle to sustained attention. Chess gives repeated fresh interaction. And the party puzzles suggest that a person can sometimes arrange a provable line of thought without anybody having prepared a challenge for them.

From there, several computer-science questions appear naturally: witnesses, verification, preparation, online input, adversarial strategies, complements, and resource competition.

I think the most interesting next step is to understand how little structure is actually needed to ask those questions cleanly.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Ramsey theory and the classical party problem; in particular, \(R(4,4)=18\).
