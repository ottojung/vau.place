# Sheep-Counting Problems for Computer Science

Suppose you ask me:

> What are you thinking about?

I answer:

> Birds.

Can I prove that I really was thinking about birds?

Usually I cannot do much better than tell you that I was.

Now suppose instead that I say I was thinking about math, and I hand you a page with arithmetic problems where I filled in the answers. You still did not see what happened in my head, but now I have something I can show you.

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

The thing we want from the babysitter is attention over time, including during stretches in which nothing happens.

## Chess at a party

A jealous girlfriend leaves her boyfriend at a party and tells him to play chess while she is away.

Suppose he plays twenty one-minute games.

When she returns, she can inspect the games and his performance across them. There are many moves, many fresh positions, and many decisions spread across the interval.

Chess has a feature that arithmetic and sheep counting do not: new input keeps arriving. Every opponent move changes the position. The player repeatedly has to react to something that was not known at the start.

Twenty short games also spread the evidence through time. They say something different from a worksheet that might have been completed early and then left alone.

The girlfriend's actual reason for choosing chess will matter later.

## Puzzles without a supplied challenge

The examples so far all begin with a recognizable assignment. Somebody says: solve these exercises, count sheep, watch the child, play chess.

But the verifier does not necessarily have to initiate the process.

A person can decide on their own to think about something in a way that will later be provable. The trick is to use public information already present around them, do some computation on it, and later show the result.

Somebody can ask me what I was thinking about only after the thinking has already happened, and I may still be able to produce evidence without their having prepared a challenge for me in advance.

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

But as a human problem this is fairly bad. Large-integer arithmetic is cumbersome to do mentally, and even checking the product of large factors may be expensive for a person. The usual machine model is not the one we need here.

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

The theorem does not tell us how difficult the search is for a human. That part would have to be measured.

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

There is an obvious danger too: if the prover may choose among many possible problems after inspecting the environment, perhaps they can simply choose one whose answer is already obvious.

## Input

The examples get their input in very different ways.

Arithmetic gives the verifier strong control: choose a fresh instance and hand it over at a known time.

In chess, the opponents supply a stream of fresh positions.

In babysitting, the environment supplies events unpredictably and may supply none at all.

In sheep counting, almost no external input arrives after the instruction.

In the party puzzles, the surrounding group supplies the concrete instance while the prover may choose the kind of problem.

It helps to distinguish who chooses the problem from who determines the instance. A verifier may choose both. A prover may choose the problem while the environment supplies the instance. An opponent may produce the instance gradually.

For the self-initiated puzzles, the verifier can arrive late. The hard part is making sure that freedom to choose and prepare does not make the eventual proof trivial.

## Evidence and cost

A correct arithmetic worksheet can be strong evidence of arithmetic. The number `843` is weak evidence of ten minutes of sheep counting. A quiet babysitting shift may leave almost nothing behind.

A mathematical witness can be different again. Five people really do either form the required subsequence or not. But a perfectly valid witness says nothing by itself about how difficult it was to find.

Cost matters only for some sheep-counting problems. If I merely want to show that I was thinking about arithmetic, a few easy exercises may be enough. If I want the task to occupy substantial cognition, or to act like proof of work, then the amount of processing matters too.

Blum and Vempala's model of human computation suggests separating preparation from online processing. I will use three quantities:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** is anything that can happen before the fresh part of the instance becomes available: memorizing names, practicing strategies, learning the guest list, building mental lookup structures.

**PROC** is what remains after the fresh input arrives.

**VER** is the cost of checking the evidence.

For a proof-of-work-like construction we would like substantial \(\operatorname{PROC}\) and small \(\operatorname{VER}\), even after generous \(\operatorname{PREP}\).

The relevant processing cost is the cheapest successful strategy. If somebody finds a shortcut, the task is easier.

This is the main open question for the monotone-subsequence puzzle. Erdős-Szekeres gives existence and cheap verification, but not a lower bound on human search.

## Incentives

Return to the babysitter.

Suppose the child cries for twenty minutes and the babysitter does nothing. Normally this would be evidence that the babysitter was not paying attention.

But an attentive babysitter can deliberately ignore the child.

So the inference depends on what the babysitter is trying to do. It distinguishes ordinary attentive babysitting from ordinary inattention; it does not distinguish inattention from attentive sabotage.

Chess has the same problem. Poor performance does not prove distraction, because an attentive player can intentionally play badly.

I think it is useful to keep two standards apart. **Strategy-independent evidence** should survive a prover deliberately trying to mislead us. **Incentive-dependent evidence** assumes something about what the prover wants and how that affects their behavior.

## Negative answers

Arithmetic gives a clean way to see another asymmetry.

Suppose the claim is:

> I was solving arithmetic exercises in my head.

We know how a positive answer might be supported: show the fresh exercises and their correct answers.

Now take the complement:

> I was **not** solving arithmetic exercises in my head.

What would the corresponding certificate look like?

There is no obvious analogue of the completed worksheet. Doing no arithmetic does not naturally produce an object that only a non-arithmetic thinker can produce.

Worse, somebody who did solve arithmetic exercises can usually behave afterward exactly like somebody who did not. They can stay silent, throw the answers away, or imitate whatever ordinary behavior the non-solver could produce.

Let \(\mathcal T(A)\) be the set of visible traces available after activity \(A\), allowing arbitrary later strategy. If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then no strategy-independent trace can directly certify \(\neg A\).

This is a simple observation, but I think it captures much of the difficulty with negative answers.

## Proving something incompatible instead

There is another route.

Suppose I want to establish that activity \(B\) did not happen. Instead of looking for a symptom of non-\(B\), I can try to prove that another activity \(A\) did happen throughout the same interval, where \(A\) and \(B\) could not have happened together.

Then

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is what the girlfriend was trying to do with chess. Chess was not the final fact she cared about. She wanted a positively checkable activity that would occupy whatever cognitive resources were needed for the competing activity she wanted to exclude.

The same move avoids the incentive problem. Instead of treating poor behavior as evidence of absent attention, we prove some other positive activity and infer absence from incompatibility.

Both problems lead to the same question:

> Which mental activities can coexist?

## Cognitive resources

The simplest model would give the mind a single time-varying capacity \(C(t)\). Each activity consumes some amount of it, and activities cannot coexist when their combined demand exceeds what is available.

I think that is too coarse.

Two activities can interfere because both need one particular resource while leaving other resources unused. Conversely, two demanding activities may coexist if they rely on different resources.

A more flexible picture has capacity-limited channels whose capacities may change over time. An activity uses some of those channels, and the same activity may admit several implementations with different resource profiles.

One can picture the channels as edges of a time-varying network

\[
G_t=(V,E,c_t),
\]

where \(c_t(e)\) is the capacity of channel \(e\) at time \(t\).

For an activity \(A\), let \(\mathcal F_A\) be the allowed resource-use patterns that count as implementations of \(A\).

A set of activities \(S\) can coexist if we can choose one implementation for every \(A\in S\) while keeping the combined use of every resource within capacity.

This lets two activities collide on one bottleneck while leaving other resources unused, and it lets a task avoid a bottleneck by using a different implementation.

For the chess argument, every sufficiently successful implementation of the certified chess activity has to conflict with every relevant implementation of the activity we want to exclude.

## Forgetting the network

The network may still contain much more detail than we need.

Fix an interval and keep only this information:

> Which sets of activities can happen together?

Let \(\mathcal C\) be the family of jointly possible sets.

If a set is possible, every subset is possible too, so \(\mathcal C\) is downward closed.

Pairwise conflicts are not always enough. Three activities might each use \(0.4\) units of one resource of capacity \(1\). Every pair can coexist, but all three cannot.

So we may need the minimal incompatible sets rather than just a graph of pairwise conflicts.

Two very different resource networks are equivalent for these questions if they induce the same family \(\mathcal C\).

Time, memory, and interactive input may eventually require more structure. For simple exclusion questions, perhaps they do not.

## A minimal description

A basic sheep-counting problem can be written with very little machinery.

Fix a time interval \(I\). Let \(X\) be the external input history and \(H\) the hidden cognitive history. Let

\[
Q(X,H)
\]

be the claim we care about: thinking about a subject, carrying out a calculation, maintaining vigilance, following a game, searching for a witness, or something else.

The verifier sees some external trace \(T\), but not \(H\), and applies a test

\[
V(X,T)\in\{\text{accept},\text{reject}\}.
\]

If histories satisfying \(Q\) can produce accepting evidence, we have completeness. If histories not satisfying \(Q\) cannot produce it except with small probability, even when trying to mislead the verifier, we have soundness.

The rest depends on the problem: what histories count, what aids are allowed, whether cost matters, and whether the prover's incentives are part of the model.

## Some questions I would try next

The monotone-subsequence task can be tested directly. For

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

one could reshuffle the same participants between rounds and measure solve time, errors, and learning. The interesting question is how much online processing survives once the solver knows everybody and has practiced the task.

I would also look for other guaranteed ambient witnesses. Erdős-Szekeres and Ramsey theory are only two sources; pigeonhole arguments, partial orders, matching theorems, parity principles, local extrema, and other small total-search results may give better human tasks.

The self-initiated setting raises another problem: if the prover can choose what to think about after seeing the environment, how much freedom can they have before the problem becomes trivial?

And for exclusion arguments, it may be possible to study compatibility directly. We may not need to identify the cognitive bottleneck if experiments can establish that certain activity families reliably can or cannot coexist.

## Closing

The original question was simple:

> What are you thinking about?

Usually an answer is enough. But one can also ask whether the person could prove the answer.

Arithmetic gives an easy positive example. Sheep counting gives a closely related task with much weaker evidence. Babysitting moves from a puzzle to sustained attention. Chess gives repeated fresh interaction. And the party puzzles suggest that a person can sometimes arrange a provable line of thought without anybody having prepared a challenge for them.

From there, questions about verification, preparation, online input, incentives, negative answers, and cognitive resources appear naturally.

I think the most interesting next step is to understand how little structure is actually needed to ask those questions cleanly.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Ramsey theory and the classical party problem; in particular, \(R(4,4)=18\).
