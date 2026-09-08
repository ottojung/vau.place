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

Now suppose I ask:

> Count sheep in your head for ten minutes.

Nothing needs to be said or written down afterward. The task can begin and end entirely in your head.

Yet, if after a few minutes you start yawning and fall asleep, that is some evidence that the sheep were there.

## The babysitter

A parent leaves a babysitter with a sleeping child for three hours.

On an uneventful evening, a good babysitter may do almost nothing. The important part of the job is to remain attentive enough to notice if the child wakes, cries, becomes ill, or otherwise needs help.

Suppose the parent returns three hours later and finds the child still sleeping peacefully.

This is compatible with a diligent babysitter. It is also compatible with a babysitter who fell asleep five minutes after the parent left.

If the child wakes several times and the babysitter responds each time, the situation is different. The evening itself has supplied several occasions on which attention could become visible.

What I have in mind here is a task where the valuable part is attention over time, including during stretches in which nothing happens.

## Chess party

A jealous girlfriend leaves her boyfriend at a party and tells him to play chess while she is away.

Suppose he plays twenty one-minute games.

When she returns, she can inspect the games and his performance across them. There are many moves, many fresh positions, and many decisions spread across the interval.

Chess has a feature that arithmetic and sheep counting do not: new input keeps arriving. Every opponent move changes the position. The player repeatedly has to react to something that was not known at the start.

Twenty short games also spread the evidence through time. They say something different from a worksheet that might have been completed early and then left alone.

The girlfriend's actual reason for choosing chess will matter later.

## Puzzles without a challenge

The examples so far all begin with a recognizable assignment. Somebody says: solve these exercises, count sheep, watch the child, play chess.

I am especially interested in another case: nobody has to prepare the challenge first.

Can a person decide on their own to think about something in a way that will later be provable?
The trick is to use public information already present, compute something about it, and later show the result.

Imagine a party: it's a convenient setting because a room full of people already contains a lot of public structure.

### A computer-scientist solution

I know an easy, smart way to make this work.

Choose a public rule that converts every guest's name into an integer. Add all of those integers together to obtain a number

\[
N.
\]

Now factor \(N\).

Later the prover can present the factors, and the verifier can multiply them and check that their product is \(N\).

In practice, this might look like:

> What are you thinking about?
>
> I'm factorizing. Alice, Bob and Charlie's names add up to a number whose factorization is `6712633 × 8463 × 7162`.

From the complexity-theory point of view this is perfect: factorization is difficult, while checking a proposed factorization is straightforward.

But large-integer arithmetic is cumbersome to do mentally, and even checking the product of large factors may be expensive for a person. The machine model is not quite the model I want for these examples.

### A monotone subsequence of friends

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

This feels easier than factoring, but I don't know whether the search is difficult enough for a human. The theorem says that a witness exists; it says nothing about how long a person will take to notice one.

### Five people with nobody between them

There is also a more spatial version.

Suppose the guests are standing around the room. Ask for five of them whose convex hull contains no other guest. In less geometric language: find five people who surround a patch of the room with nobody else standing inside it.

With ten people in general position, such an empty convex pentagon is guaranteed to exist.

The proof is again just the five people. A verifier can look at where they are standing and check that nobody else lies inside the pentagon they determine.

This one feels quite different from the monotone-subsequence puzzle when I imagine actually solving it. It uses the same room, but it asks the eye to search the arrangement directly rather than translating everybody into ranks first. I do not know which version makes the better human challenge.

What interests me in both cases is that the prover can initiate the process. They can choose to think about a publicly checkable problem, use the environment as its concrete instance, and later present a witness.

There is an obvious danger too: if the prover may choose among many possible problems after inspecting the environment, perhaps they can simply choose one whose answer is already obvious.

## What kind of theory is this?

At this point I am not sure what kind of theory I want.

Arithmetic looks a little like an ordinary proof system. Sheep counting barely has an output. Babysitting is about a state maintained over time. Chess leaves an interactive history. The party puzzles are search problems whose concrete instance comes from the room.

I do not want to force all of these into one definition too quickly. For now I mostly want language for asking what information reached the person while they were thinking, what remained visible afterward, how much work was required, and what the verifier has to know about the person for the evidence to mean anything.

The rest of this post is my current attempt at that language.

## Evidence, freshness, and cost

A correct arithmetic worksheet can be strong evidence of arithmetic. Sheep counting may leave no designed output at all. A quiet babysitting shift may leave almost nothing behind.

The mathematical puzzles give something stronger in one sense and weaker in another. Five people either form the required subsequence or they do not. Five people either surround an empty region or they do not. A witness can settle the mathematical fact completely while saying very little about how difficult it was to find.

Freshness matters once cost matters. If I know tomorrow's arithmetic exercises today, I can solve them today. Chess avoids this because every opponent move brings new input. In the party puzzles, the prover may know all the people and the strategy in advance, while the current arrangement still creates something to do now.

This is where I find Blum and Vempala's vocabulary useful. I will borrow three quantities:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** is work that can happen before the fresh part of the instance is available. **PROC** is what remains afterward. **VER** is the cost of checking the evidence.

If the point is merely to show that I was thinking about arithmetic, a few easy exercises may be enough. If the point is proof of work, then I want substantial \(\operatorname{PROC}\) and small \(\operatorname{VER}\), even after generous \(\operatorname{PREP}\).

The relevant cost should be the cheapest successful strategy. If somebody finds a shortcut, the puzzle got easier whether or not it was the strategy I had in mind.

For the monotone-subsequence puzzle, this is still an empirical question. Erdős-Szekeres guarantees a witness and cheap verification; it does not tell me whether a practiced person will find one in five seconds or five minutes.

## Incentives

Return to the babysitter.

Suppose the child cries for twenty minutes and the babysitter does nothing. Normally I would take this as evidence that the babysitter was not paying attention.

But an attentive babysitter can deliberately ignore the child.

Chess has the same problem. Poor performance does not establish distraction: an attentive player can intentionally play badly.

There seem to be at least two different standards here. Some evidence is meant to survive a prover who is actively trying to fool the verifier. I will call that **strategy-independent**. Other evidence works only given assumptions about what the prover wants. I will call that **incentive-dependent**.

The second case makes verification strangely personal. To interpret the behavior, the verifier needs some idea of the prover's actual intentions. It may even matter that they knew those intentions before the test rather than inventing a motivation after seeing the result.

A close friend may know whether somebody normally tries hard at chess, whether they sandbag, whether they would ignore a crying child out of spite, or what kinds of excuses they are likely to manufacture. Maybe some sheep-counting proofs work better between people who know each other well.

I am not sure whether that is a defect. It may simply be part of what changes when the object being verified is a human mind rather than a computation in a fixed machine model.

## Negative answers

Arithmetic gives another asymmetry.

Suppose the claim is:

> I was solving arithmetic exercises in my head.

A positive answer can leave the completed exercises behind.

Now take the complement:

> I was **not** solving arithmetic exercises in my head.

What is the corresponding object?

I do not see one. Somebody who did solve the exercises can usually behave afterward exactly like somebody who did not. They can stay silent, throw the answers away, or imitate whatever ordinary behavior the non-solver could produce.

Let \(\mathcal T(A)\) be the set of visible traces available after activity \(A\), allowing arbitrary later strategy. If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then no strategy-independent trace can directly certify \(\neg A\).

## Proving something incompatible instead

There is another route to a negative conclusion.

Suppose I want evidence that activity \(B\) did not happen. Instead of looking for a trace of non-\(B\), I can try to prove that activity \(A\) did happen during the same interval, where \(A\) and \(B\) cannot coexist.

Then

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is closer to what the girlfriend wanted from chess. Chess was not the final fact she cared about. She wanted a positively checkable activity that would exclude some competing activity.

It also avoids one version of the incentive problem. Instead of saying that bad chess proves distraction, she can ask for good enough chess and use that as positive evidence for something incompatible with distraction.

But now almost everything depends on the word **incompatible**.

## Cognitive resources

A first model would give the mind a single time-varying capacity \(C(t)\). Activities consume some of it and cannot coexist when their combined demand is too large.

That already seems too simple. Two activities may collide because both need one particular resource while leaving other resources unused. Another pair may coexist because they use different resources.

A more flexible picture is a time-varying network

\[
G_t=(V,E,c_t),
\]

where edges are cognitive channels and \(c_t(e)\) is their capacity at time \(t\).

For an activity \(A\), let \(\mathcal F_A\) be the resource-use patterns that count as implementations of \(A\). Several activities can coexist when we can choose one implementation for each without exceeding any capacity.

This picture can express shared bottlenecks, separate resources, alternative strategies, and changing capacity. It gives me a way to say what the chess argument would require: every sufficiently successful way of playing the relevant chess games would have to collide with every relevant way of doing the activity the girlfriend wants to exclude.

That sounds useful. It is not yet a proof of anything about a real person.

## Whose network?

The network has not solved the problem. It has moved it.

I know somebody who would frequently give a mathematics lecture while writing a manuscript at the same time. If I had tried to draw a generic human flow network from my own intuitions, I would probably have put those two activities behind one bottleneck and been wrong about him.

Different people may have very different capacities, routes, and strategies. Practice may change them. Tiredness may change them. One person may have an implementation of a task that never occurred to the verifier.

So the girlfriend does not merely need a theory saying that chess and flirting compete for some resource. She needs enough reason to believe that they compete for **this boyfriend**.

Can one learn another person's flow network? Perhaps partly. You could observe which pairs of tasks interfere, run dual-task experiments, watch what changes with practice, and update the model. Long familiarity may do the same thing informally. A close friend might know that a combination which overwhelms almost everyone else is routine for one particular person.

And should you learn it? A verification method that improves as one person maps another person's attention, habits, intentions, and bottlenecks is not obviously benign. I do not have an answer to that part.

## Uncertain networks

It seems wrong to hide this uncertainty inside a sentence such as “assume \(A\) and \(B\) are incompatible.” The verifier should be uncertain about the network.

Let \(K\) be what the verifier already knows about the prover, and let

\[
\pi(G\mid K)
\]

be a distribution over resource networks that still look plausible for that person.

For activities \(A\) and \(B\), write \(I_G(A,B)\) for the statement that they cannot coexist in network \(G\). Let \(E\) be the evidence that \(A\) happened.

Define

\[
p=\Pr(A\mid E,K)
\]

and

\[
q=\Pr(I_G(A,B)\mid E,K).
\]

Then

\[
\Pr(\neg B\mid E,K)
\;\ge\;
\Pr(A\wedge I_G(A,B)\mid E,K)
\;\ge\;
\max(0,p+q-1).
\]

So there are at least two ways the argument can fail. The chess record may not convince us that \(A\) really happened, or our model of the person may be wrong about incompatibility.

If both \(p\) and \(q\) are \(0.99\), the lower bound is \(0.98\). If those two uncertainties were independent, it would instead be \(0.99^2=0.9801\).

Population knowledge can supply a prior. Perhaps 99% of people have only one effective instance of some mental-load channel needed by both activities. That is useful when the prover is a stranger. But repeated observation of the lecturer who writes a manuscript at the same time should push the posterior for that particular person away from the population prior.

Intentions can be treated similarly. In incentive-dependent cases, \(K\) contains beliefs about what the prover is trying to do, and the meaning of the same visible behavior changes with those beliefs.

Two verifiers can therefore see the same evidence and rationally reach different conclusions because they know different things about the person who produced it.

## Forgetting the network

For some questions, the full network may contain more detail than we need.

Suppose we remember only which sets of activities can happen together. Let \(\mathcal C\) be that family.

If a set of activities is possible, every subset is possible too, so \(\mathcal C\) is downward closed.

Pairwise conflicts are not always enough. If three activities each use \(0.4\) units of one resource of capacity \(1\), every pair can coexist but all three cannot.

So the smaller object may be the family of compatible sets, or equivalently its minimal incompatible sets. If the verifier is uncertain, they can have a distribution over those objects rather than over detailed flow networks.

This loses information about time, routing, memory, and interaction. Whether that matters depends on the question we are trying to ask.

## A small formal picture

At this point I can at least write down the shape of the problem.

Fix an interval \(I\). Let \(X\) be the external input history, \(H\) the hidden cognitive history, and \(T\) the visible trace. Let

\[
Q(X,H)
\]

be the claim we care about: solving arithmetic, maintaining vigilance, following a game, searching for a witness, or something else.

The verifier does not see \(H\). It sees \(X\) and \(T\), and it may have background knowledge \(K\) about the particular prover.

For a very proof-like case, the verifier may simply apply

\[
V(X,T)\in\{\text{accept},\text{reject}\}.
\]

For the messier cases, the more natural object may be

\[
\Pr(Q\mid X,T,K).
\]

The old notions of completeness and soundness still fit the proof-like end of the spectrum. But the examples above make me reluctant to assume that every useful sheep-counting problem will reduce to a universal verifier with no prior knowledge of the prover.

This is not meant as a finished formalism. It is just enough notation to expose where the uncertainty lives.

## What I would try next

The monotone-subsequence task is concrete enough to test. For

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

one could reshuffle the same participants between rounds and measure solve time, errors, and learning. I would especially want to know how much online processing survives once the solver knows everybody and has practiced the task.

I would also look for other guaranteed ambient witnesses. Erdős-Szekeres and the empty-pentagon theorem give two rather different examples already. There may be much better ones.

The self-initiated setting leaves an awkward freedom: the prover sees the environment and then chooses what problem to solve. How much choice can they have before they are effectively choosing an answer they already know?

For the resource side, I would want measurements across people as well as within one person. How stable are incompatibilities? How much can be learned from a few dual-task observations? How quickly does practice change them? How informative is population data about one particular prover?

And then there is the verifier. If useful evidence depends on knowing somebody's habits, abilities, or intentions, when is that ordinary human familiarity, and when has the verifier learned too much?

## Closing

The original question was simple:

> What are you thinking about?

Arithmetic gives one easy answer to the proof version of that question. Counting sheep gives almost nothing to show. Babysitting makes the hidden property attention over time. Chess gives an interactive trace. The party puzzles suggest that a person may even be able to arrange a provable line of thought without anybody issuing the challenge first.

I do not know yet whether these examples belong to one useful formal class. But they keep producing the same kinds of questions: what can leak out of a hidden mental process, what must arrive fresh, what work cannot be prepared away, what depends on incentives, and how much the verifier has to know about the particular person.

That seems like enough to keep counting sheep for a while.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Heiko Harborth, [*Konvexe Fünfecke in ebenen Punktmengen*](https://doi.org/10.5169/seals-32945), *Elemente der Mathematik* 33(5), 116–118, 1978.