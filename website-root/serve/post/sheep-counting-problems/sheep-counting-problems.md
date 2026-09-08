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

There may be other evidence. If the person starts yawning and eventually falls asleep, I would be inclined to count that in favor of their story.

So two very simple mental tasks can behave quite differently. Arithmetic naturally leaves answers that are closely related to the calculations. Sheep counting leaves a much weaker trail.

## The babysitter

A parent leaves a babysitter with a sleeping child for three hours.

On an uneventful evening, a good babysitter may do almost nothing. The important part of the job is to remain attentive enough to notice if the child wakes, cries, becomes ill, or otherwise needs help.

Suppose the parent returns three hours later and finds the child still sleeping peacefully.

This is compatible with a diligent babysitter. It is also compatible with a babysitter who fell asleep five minutes after the parent left.

If the child wakes several times and the babysitter responds each time, the situation is different. The evening itself has supplied several occasions on which attention could become visible.

What I have in mind here is a task where the valuable part is attention over time, including during stretches in which nothing happens.

## Chess at a party

A jealous girlfriend leaves her boyfriend at a party and tells him to play chess while she is away.

Suppose he plays twenty one-minute games.

When she returns, she can inspect the games and his performance across them. There are many moves, many fresh positions, and many decisions spread across the interval.

Chess has a feature that arithmetic and sheep counting do not: new input keeps arriving. Every opponent move changes the position. The player repeatedly has to react to something that was not known at the start.

Twenty short games also spread the evidence through time. They say something different from a worksheet that might have been completed early and then left alone.

The girlfriend's actual reason for choosing chess will matter later.

## Puzzles without a supplied challenge

The examples so far all begin with a recognizable assignment. Somebody says: solve these exercises, count sheep, watch the child, play chess.

I am especially interested in another case: nobody has to prepare the challenge first.

A person can decide on their own to think about something in a way that will later be provable. One way to do this is to use public information already present around them, compute something about it, and later show the result.

Somebody can ask me what I was thinking about only after the thinking has already happened, and I may still have something to show them.

A party is a convenient toy setting because a room full of people already contains a lot of public structure.

### The obvious computer-science solution

A first attempt might be very literal.

Choose a public rule that converts every guest's name into an integer. Add all of those integers together to obtain a number

\[
N.
\]

Now factor \(N\).

Later the prover can present the factors, and the verifier can multiply them and check that their product is \(N\).

From an ordinary complexity-theory point of view this has an attractive shape. Factorization is difficult, while checking a proposed factorization is straightforward.

As a human problem it is less attractive. Large-integer arithmetic is cumbersome to do mentally, and even checking the product of large factors may be expensive for a person. This makes me think that the machine model is not quite the model I want for these examples.

### A monotone subsequence of guests

Suppose there are seventeen people with a given total order. It might be the order in which they are standing, but the geometry is not important. We only need one total order everybody agrees on.

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

I like this example because several useful things happen at once. The witness is short, existence is guaranteed, and the current ordering can create fresh work even if the prover already knows everybody's name.

What I do not know is whether the search is actually difficult for a human. The theorem says that a witness exists; it says nothing about how long a person will take to notice one.

### Five people with nobody between them

There is also a more spatial version.

Suppose the guests are standing around the room. Ask for five of them whose convex hull contains no other guest. In less geometric language: find five people who surround a patch of the room with nobody else standing inside it.

With ten people in general position, such an empty convex pentagon is guaranteed to exist.

The proof is again just the five people. A verifier can look at where they are standing and check that nobody else lies inside the pentagon they determine.

This one feels quite different from the monotone-subsequence puzzle when I imagine actually solving it. It uses the same room, but it asks the eye to search the arrangement directly rather than translating everybody into ranks first. I do not know which version makes the better human challenge.

What interests me in both cases is that the prover can initiate the process. They can choose to think about a publicly checkable problem, use the environment as its concrete instance, and later present a witness.

There is an obvious danger too: if the prover may choose among many possible problems after inspecting the environment, perhaps they can simply choose one whose answer is already obvious.

## Input

The examples get their input in very different ways.

Arithmetic gives the verifier strong control: choose a fresh instance and hand it over at a known time.

In chess, the opponents supply a stream of fresh positions.

In babysitting, the environment supplies events unpredictably and may supply none at all.

In sheep counting, almost no external input arrives after the instruction.

In the party puzzles, the surrounding group supplies the concrete instance while the prover may choose the kind of problem.

I find it useful to separate two questions: who chooses the problem, and who determines the instance. They need not be the same person. The verifier can choose both; the prover can choose the problem while the environment supplies the instance; an opponent can produce the instance gradually.

The self-initiated case is the one I find least settled. Letting the prover choose the problem is exactly what makes it interesting, but too much freedom may also make the proof cheap.

## Evidence and cost

A correct arithmetic worksheet can be strong evidence of arithmetic. Falling asleep after counting sheep gives us something rather different. A quiet babysitting shift may leave almost nothing behind.

The mathematical puzzles add another distinction. Five people either form the required subsequence or they do not. Five people either surround an empty region or they do not. The witness can be completely convincing about the mathematical fact and still tell us little about how difficult the fact was to find.

So cost seems like a separate question, and one that matters only in some versions of the problem. If I merely want to show that I was thinking about arithmetic, a few easy exercises may be enough. If I want the task to occupy substantial cognition, or to act like proof of work, then the amount of processing starts to matter.

Blum and Vempala's model of human computation gives vocabulary that seems useful here. I will borrow three quantities:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

I will use **PREP** for things that can happen before the fresh part of the instance is available: memorizing names, practicing strategies, learning the guest list, building mental lookup structures.

**PROC** is what remains after the fresh input arrives.

**VER** is the cost of checking the evidence.

For a proof-of-work-like puzzle, the shape I am looking for is substantial \(\operatorname{PROC}\) and small \(\operatorname{VER}\), even after a lot of \(\operatorname{PREP}\).

The processing cost should probably be the cheapest successful strategy rather than the strategy I expected. If somebody finds a shortcut, then as far as this purpose is concerned the puzzle became easier.

This is the part of the monotone-subsequence puzzle that I would most want to test. Erdős-Szekeres gives existence and cheap verification, but it does not give a lower bound on human search.

## Incentives

Return to the babysitter.

Suppose the child cries for twenty minutes and the babysitter does nothing. Normally I would take this as evidence that the babysitter was not paying attention.

But an attentive babysitter can deliberately ignore the child.

So that inference is not really about attention alone. It also assumes something about what the babysitter was trying to do.

Chess has the same problem. Poor performance does not establish distraction: an attentive player can intentionally play badly.

For now I find it useful to keep two standards apart. I will call evidence **strategy-independent** when it is meant to survive a prover deliberately trying to mislead us. I will call it **incentive-dependent** when the inference uses assumptions about what the prover wants.

I do not mean these as a complete taxonomy. They are just two cases that behave differently in the examples above.

## Negative answers

Arithmetic gives a clean way to see another asymmetry.

Suppose the claim is:

> I was solving arithmetic exercises in my head.

We know what a positive answer might look like: show the fresh exercises and their correct answers.

Now take the complement:

> I was **not** solving arithmetic exercises in my head.

What would the corresponding certificate look like?

I do not see an obvious analogue of the completed worksheet. Doing no arithmetic does not naturally produce an object that only a non-arithmetic thinker can produce.

More importantly, somebody who did solve arithmetic exercises can usually behave afterward exactly like somebody who did not. They can stay silent, throw the answers away, or imitate whatever ordinary behavior the non-solver could produce.

One way to write this is to let \(\mathcal T(A)\) be the set of visible traces available after activity \(A\), allowing arbitrary later strategy. If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then there cannot be a strategy-independent trace that directly certifies \(\neg A\).

This is a small observation, but it seems to explain why the positive and negative versions of the arithmetic example feel so different.

## Proving something incompatible instead

There is another way to get a negative conclusion.

Suppose I want evidence that activity \(B\) did not happen. Rather than searching for a special trace of non-\(B\), I can try to prove that another activity \(A\) did happen during the same interval, where \(A\) and \(B\) could not have happened together.

Then the argument is simply

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is what the girlfriend was trying to get from chess. Chess was not the final fact she cared about. She wanted a positively checkable activity that would occupy whatever cognition was needed for the activity she wanted to exclude.

The same move also seems to avoid the earlier incentive problem. Instead of interpreting bad behavior as evidence of absent attention, we positively certify something else and get the negative conclusion from incompatibility.

At least for these examples, both questions lead me to the same place:

> Which mental activities can coexist?

## Cognitive resources

I do not know what the right model of coexistence is. The first one I tried was a single time-varying capacity \(C(t)\): each activity consumes some of it, and activities stop fitting together when their combined demand exceeds the available capacity.

That seems too coarse. Two activities can interfere because both need one particular resource while leaving other resources unused. Conversely, two demanding activities may coexist if they rely on different resources.

The picture I currently find more useful has several capacity-limited channels, with capacities that may change over time. An activity uses some of those channels, and the same activity may admit several implementations with different resource profiles.

One way to draw that picture is as a time-varying network

\[
G_t=(V,E,c_t),
\]

where \(c_t(e)\) is the capacity of channel \(e\) at time \(t\).

For an activity \(A\), let \(\mathcal F_A\) be the resource-use patterns that we are willing to count as implementations of \(A\).

A set of activities \(S\) can coexist when we can choose one implementation for every \(A\in S\) without exceeding the capacities.

I like this picture because it allows two activities to collide on one bottleneck while leaving the rest of the system unused. It also allows an alternative strategy to route around a bottleneck.

For the chess argument, however, this makes the assumption we need quite strong. It is not enough that my favorite way of playing chess conflicts with the competing activity. Every sufficiently successful implementation consistent with the chess evidence has to leave too little capacity for the activity I am trying to exclude.

## Forgetting the network

Once I write the model this way, I notice that many of the questions above never inspect the network itself.

For an exclusion argument, I may only care about this:

> Which sets of activities can happen together?

Let \(\mathcal C\) be the family of jointly possible sets.

If a set is possible, every subset is possible too, so \(\mathcal C\) is downward closed.

Pairwise conflicts are not always enough. Three activities might each use \(0.4\) units of one resource of capacity \(1\). Every pair can coexist, but all three cannot.

So perhaps the useful object is the collection of minimal incompatible sets rather than the underlying network.

This forgets a lot. Two very different resource networks become indistinguishable if they induce the same family \(\mathcal C\). For some of the questions here, that may be exactly what I want. Time, memory, and interactive input may force some of the discarded structure back in later.

## A minimal description

If I strip away the resource model again, I end up with a small description of a sheep-counting problem.

Fix a time interval \(I\). Let \(X\) be the external input history and \(H\) the hidden cognitive history. Let

\[
Q(X,H)
\]

be the claim we care about: thinking about a subject, carrying out a calculation, maintaining vigilance, following a game, searching for a witness, or something else.

The verifier sees some external trace \(T\), but not \(H\), and applies a test

\[
V(X,T)\in\{\text{accept},\text{reject}\}.
\]

For the cases that are meant to behave like proofs, the usual words **completeness** and **soundness** seem appropriate. We can ask whether a history satisfying \(Q\) can produce accepting evidence, and whether a history not satisfying \(Q\) can fake it.

That still leaves most of the interesting choices outside the notation: what histories count as the activity, what aids are allowed, whether cost matters, and whether incentives belong in the model.

I am not sure that this is the final formalism. It is just the smallest one I have found so far that lets me state the questions from the examples without turning them immediately into ordinary input-output computation.

## Some questions I would try next

The monotone-subsequence task is concrete enough to test. For

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

one could reshuffle the same participants between rounds and measure solve time, errors, and learning. I would especially want to know how much online processing survives once the solver knows everybody and has practiced the task.

I would also look for other guaranteed ambient witnesses. Erdős-Szekeres and the empty-pentagon theorem give two rather different examples already. There may be better ones coming from other small existence theorems.

The self-initiated setting still bothers me in a useful way: if the prover can choose what to think about after seeing the environment, how much freedom can they have before the problem becomes trivial?

And for exclusion arguments, perhaps compatibility can be studied directly. If experiments tell us that certain families of activities reliably can or cannot coexist, maybe we do not need to know which cognitive bottleneck caused the interference.

## Closing

The original question was simple:

> What are you thinking about?

Usually an answer is enough. But one can also ask whether the person could prove the answer.

Arithmetic gives an easy positive example. Sheep counting gives a closely related task with much weaker evidence. Babysitting moves from a puzzle to sustained attention. Chess gives repeated fresh interaction. The party puzzles suggest that a person can sometimes arrange a provable line of thought without anybody having prepared a challenge for them.

At this point I mostly have examples, a few distinctions that seem to survive them, and a tentative resource picture. That already brings in questions about verification, preparation, online input, incentives, negative answers, and cognitive competition.

I think the next useful step is not to make the framework larger, but to see how much of it survives contact with actual human tasks.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Heiko Harborth, [*Konvexe Fünfecke in ebenen Punktmengen*](https://doi.org/10.5169/seals-32945), *Elemente der Mathematik* 33(5), 116–118, 1978.