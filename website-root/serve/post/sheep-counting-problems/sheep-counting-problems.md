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
> I'm factorizing. Alice, Bob and Charlie's names add up to a number whose factorization is `3215031751 × 118670087467 × 307768373641`.

The appeal is obvious. Factorization is difficult, while checking a proposed factorization is straightforward.

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

Sheep counting is the first warning against making the theory too narrow. If I insist on a clean certificate, there is almost nothing to work with. But yawning or falling asleep can still make the story that somebody was counting sheep more plausible.

So the first useful move is to stop asking only whether something has been proved, and ask how much the visible evidence changes the odds.

## Evidence and probability

Let \(Q\) be a claim about the person's hidden cognitive history, and let \(E\) be something visible afterward. Let \(K\) stand for what the verifier already knows.

The simplest reason to call \(E\) evidence for \(Q\) is

\[
\Pr(E\mid Q,K)
>
\Pr(E\mid \neg Q,K).
\]

Equivalently, the likelihood ratio

\[
L(E)=
\frac{\Pr(E\mid Q,K)}{\Pr(E\mid \neg Q,K)}
\]

is greater than one.

This puts the arithmetic worksheet and the sleepy sheep counter in the same picture. A long list of correct answers might have a very large likelihood ratio. Yawning and falling asleep after being asked to count sheep might have only a modest one. Both can still move the verifier in the same direction.

Nothing here requires the person to have deliberately produced a certificate. The evidence can be an answer, a game record, a reaction to an event, or an accidental side effect.

If the verifier starts with

\[
\rho=\Pr(Q\mid K),
\]

then Bayes' rule turns the likelihood ratio into posterior belief.

Once there is even this tentative notion of evidence, an obvious question is what happens under negation. A theory with claims \(Q\) naturally also has claims \(\neg Q\).

## Negative answers

Arithmetic gives a simple test.

Suppose the claim is:

> I was solving arithmetic exercises in my head.

A positive answer can leave the completed exercises behind.

Now take the complement:

> I was **not** solving arithmetic exercises in my head.

What is the corresponding object?

I do not see one. Somebody who did solve the exercises can usually behave afterward exactly like somebody who did not. They can stay silent, throw the answers away, or imitate whatever ordinary behavior the non-solver could produce.

Let \(\mathcal T(A)\) be the set of visible traces available after activity \(A\), allowing arbitrary later behavior. If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then no visible trace can directly certify \(\neg A\) against a person who is free to choose what to do afterward.

That qualification matters. Should evidence about a hidden activity have to survive whatever the person decides to do? The babysitter and chess examples make this hard to ignore.

## Incentives and strategies

Suppose the child cries for twenty minutes and the babysitter does nothing. Normally I would take this as evidence that the babysitter was not paying attention.

But an attentive babysitter can deliberately ignore the child.

Poor chess has the same problem. It does not establish distraction: an attentive player can intentionally play badly. Someone who knows that yawning will be interpreted as evidence can yawn.

If the core question is what happened in the person's head, it is attractive to ask for evidence that does not depend on the person's incentives afterward. I will call that **strategy-independent** evidence. Other evidence works only given assumptions about what the prover wants; I will call that **incentive-dependent**.

Let \(\Sigma_K\) be the strategies that the verifier considers possible. For an accepting event \(E\), write

\[
s(E,K)=
\sup_{\sigma\in\Sigma_K}
\Pr(E\mid \neg Q,\sigma,K).
\]

If \(\Sigma_K\) contains every strategy the prover could deliberately use, this is the strategy-independent standard. If it is restricted by assumptions about what the prover wants, it is incentive-dependent.

The second case makes verification personal. A close friend may know whether somebody normally tries hard at chess, whether they sandbag, whether they would ignore a crying child out of spite, or whether a suspicious yawn means anything at all. It may even matter that the verifier knew these intentions before the test rather than inventing a motivation after seeing the result.

Fakeability need not be all or nothing. Give a strategy a vector of resource costs \(R(\sigma)\): time, attention, memory, preparation, physical effort, coordination with other people, or whatever matters in the problem. Then for a resource budget \(b\) we can ask for

\[
s_b(E,K)=
\sup_{\substack{\sigma\in\Sigma_K\\R(\sigma)\preceq b}}
\Pr(E\mid \neg Q,\sigma,K).
\]

Now “hard to fake” has a probabilistic meaning without deciding in advance what kind of difficulty matters.

## Proving something incompatible instead

The negative-answer problem is not necessarily the end of the story.

Suppose I want evidence that activity \(B\) did not happen. Instead of looking for a trace of non-\(B\), I can try to establish that activity \(A\) did happen during the same interval, where \(A\) and \(B\) cannot coexist.

Then

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is closer to what the girlfriend wanted from chess. Chess was not the final fact she cared about. She wanted a positively checkable activity that would exclude some competing activity.

It also avoids one version of the incentive problem. Instead of treating bad chess as evidence that his attention was elsewhere, she can try to establish that he really was playing chess well enough, then ask whether that activity could have coexisted with the one she wanted to rule out.

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

Let

\[
\pi(G\mid K)
\]

be a distribution over resource networks that still look plausible for that person.

For activities \(A\) and \(B\), write \(I_G(A,B)\) for the statement that they cannot coexist in network \(G\). Let \(E\) be the evidence that \(A\) happened, and define

\[
p=\Pr(A\mid E,K),
\qquad
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

## A definition

At this point I am willing to call something a sheep-counting problem.

Fix a time interval \(I\), a prover, and a verifier with background knowledge \(K\). Let \(X\) be the external input history, \(H\) the hidden cognitive history, and \(T\) the visible trace. Let

\[
Q(X,H)
\]

be the claim about the cognitive history that we want evidence for.

A sheep-counting protocol consists of an intended or natural true-case behavior \(\sigma^+\), a set \(\Sigma_K\) of false-case strategies the verifier considers possible, and a verifier

\[
V(X,T,K)\in\{0,1\}.
\]

It is a \((c,s)\)-**sheep-counting protocol** when

\[
\Pr[V=1\mid Q,\sigma^+,K]\ge c
\]

and

\[
\sup_{\sigma\in\Sigma_K}
\Pr[V=1\mid \neg Q,\sigma,K]
\le s,
\]

with

\[
c>s.
\]

The probabilities can include randomness in the environment and verifier, natural variation in human behavior, and uncertainty in \(K\) about the particular person's abilities, intentions, or resource network.

If we care about limited fakeability rather than unlimited fakeability, give strategies a resource vector \(R(\sigma)\) and record the **fakeability profile**

\[
s(b)=
\sup_{\substack{
\sigma\in\Sigma_K,\\
R(\sigma)\preceq b
}}
\Pr[V=1\mid \neg Q,\sigma,K].
\]

The verifier can have a resource cost as well. Different problems may choose different resource coordinates; the definition does not privilege one of them.

If

\[
\rho=\Pr(Q\mid K),
\]

then acceptance gives the posterior bound

\[
\Pr(Q\mid V=1,K)
\ge
\frac{c\rho}{c\rho+s(1-\rho)}.
\]

So two verifiers can use the same visible trace and the same test and still rationally end with different confidence because they began with different knowledge of the prover.

I will take a **sheep-counting problem** to be the problem of constructing such a protocol for a chosen cognitive predicate \(Q\): finding observations and a verifier for which the true and false histories are usefully separated, under an explicit model of what the verifier knows and what strategies are possible.

Arithmetic gives a strong-looking instance. Falling asleep while counting sheep gives a weak one. Neither is excluded by the definition because one happened to involve more mental effort.

## Constructing good sheep-counting problems

The definition tells us what counts as a sheep-counting problem. It does not tell us how to get a good one.

There may be many ways to create a large separation between the true and false cases: natural side effects, unpredictable interaction with the environment, activities that exclude one another, or traces that are difficult to manufacture without the claimed history.

One particularly convenient construction comes from computational complexity.

Humans are believed to have bounded computational channels. If producing an accepting trace after fresh input requires enough mental computation, then a person who has not carried out the relevant cognitive activity may simply not have enough time or capacity to manufacture the same trace. This is one way to keep the false-case probability small.

Fresh input helps because it limits what can be moved into preparation. Chess gets freshness from opponent moves. The party puzzles can get it from the current arrangement of the people.

This is where Blum and Vempala's vocabulary is useful:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** is computation that can happen before the fresh part of the input arrives. **PROC** is what remains afterward. **VER** is the cost of checking the evidence.

For constructions based on bounded human computation, I would like a lot of unavoidable \(\operatorname{PROC}\) and little \(\operatorname{VER}\), even after generous \(\operatorname{PREP}\). That asymmetry is a way of engineering a good probability gap, not the definition of the problem.

The factorization puzzle above is the most literal attempt to get this shape from ordinary complexity theory. It is bad because the human costs are bad too. The monotone-subsequence puzzle feels more plausible, but I do not know whether a practiced person will find the witness in five seconds or five minutes. That is an empirical complexity question.

In the resource notation above, computational effort is one possible coordinate of \(R(\sigma)\). A computational construction is successful when realistic bounds on that coordinate keep \(s_b\) low while verification stays cheap.

## What I would try next

The monotone-subsequence task is concrete enough to start measuring the computational construction. For

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

one could reshuffle the same participants between rounds and measure solve time, errors, and learning. I would especially want to know how much online processing survives once the solver knows everybody and has practiced the task.

I would also look for other guaranteed ambient witnesses. Erdős-Szekeres and the empty-pentagon theorem give two rather different examples already. There may be much better ones.

But the broader experiments need not be computational. How much does sheep counting actually change the chance of yawning? Which events make babysitter attention visible? Which traces are easy to manufacture once the prover knows what the verifier will inspect?

The self-initiated setting leaves an awkward freedom: the prover sees the environment and then chooses what problem to solve. How much choice can they have before they are effectively choosing an answer they already know?

For the resource side, I would want measurements across people as well as within one person. How stable are incompatibilities? How much can be learned from a few dual-task observations? How quickly does practice change them? How informative is population data about one particular prover?

And then there is the verifier. If useful evidence depends on knowing somebody's habits, abilities, or intentions, when is that ordinary human familiarity, and when has the verifier learned too much?

## Closing

The original question was simple:

> What are you thinking about?

Arithmetic gives one easy answer to the evidence version of that question. Counting sheep gives a much weaker one. Babysitting makes the hidden property attention over time. Chess gives an interactive trace. The party puzzles suggest that a person may even be able to arrange a provable line of thought without anybody issuing the challenge first.

What seems common to them is not work. It is separation: something visible is distributed differently depending on what happened in the person's head.

Computational hardness is one good way to create a large separation because human computation is bounded. It is not the only one, and the sleepy sheep counter was evidence of that from the beginning.

That seems like enough to keep counting sheep for a while.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Heiko Harborth, [*Konvexe Fünfecke in ebenen Punktmengen*](https://doi.org/10.5169/seals-32945), *Elemente der Mathematik* 33(5), 116–118, 1978.