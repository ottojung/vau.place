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

This is the easy case. The input is explicit. The answers are easy to inspect. I can choose new exercises whenever needed. And checking an answer can be much cheaper than finding it mentally.

## Counting sheep

Now suppose I ask:

> Count sheep in your head for ten minutes.

Nothing needs to be said or written down afterward. The task can begin and end entirely in your head.

Yet, if after a few minutes you start yawning and fall asleep, that is some evidence that the sheep were there.

## The sleeping guard

A guard watches a building through the night.

On a quiet night, a good guard may do almost nothing. The important part of the job is to remain alert enough to notice an intruder, an alarm, a door opening, or anything else that should be reported.

Suppose the shift ends and nothing happened.

This is compatible with an alert guard. It is also compatible with a guard who fell asleep five minutes after starting.

If something does happen and the guard notices it and signals, the situation is different. The night itself has supplied an occasion on which vigilance can become visible.

What I have in mind here is a task where the valuable part is attention over time, including during stretches in which nothing happens.

## Chess party

A jealous girlfriend leaves her boyfriend at a party and tells him to play chess while she is away.

Suppose he plays twenty one-minute games.

When she returns, she can inspect the games and his performance across them. There are many moves, many fresh positions, and many decisions spread across the interval.

Chess has a feature that arithmetic and sheep counting do not: new input keeps arriving. Every opponent move changes the position. The player repeatedly has to react to something they did not know at the start.

Twenty short games also spread the evidence through time. They say something different from a worksheet that might have been completed early and then left alone.

The girlfriend's actual reason for choosing chess will matter later.

## Puzzles without a challenge

The examples so far all begin with a recognizable assignment. Somebody says: solve these exercises, count sheep, watch the building, play chess.

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

From computer science point of view, this is perfect: factorization is difficult, while checking a proposed factorization is straightforward.

But large-integer arithmetic is cumbersome to do mentally, and even checking the product of large factors may be expensive for a person. The machine model is not quite the model I want for these examples.

### A monotone subsequence of friends

Suppose there are ten people with a given total order. It might be the order in which they are standing, but the geometry is not important. We only need one total order everybody agrees on.

There is also a second total order, for example alphabetical order of their names.

Reading the alphabetical ranks in the given order gives a permutation of ten numbers.

The problem is:

> Find four people, preserving the given order, whose names are alphabetically increasing or alphabetically decreasing.

The Erdős-Szekeres monotone subsequence theorem guarantees that such a set exists. More generally, every sequence of

\[
(r-1)(s-1)+1
\]

distinct values contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\). With \(r=s=4\),

\[
(4-1)^2+1=10.
\]

The prover points to four people. The verifier checks the two orders.

I like this example because several useful things happen at once. The witness is short, the theorem guarantees that one exists, and the current ordering can create fresh work even if the prover already knows everybody's name.

This feels easier than factoring, but I don't know whether the search is difficult enough for a human. The theorem says that a witness exists; it says nothing about how long a person will take to notice one.

### Six objects, including the empty spot

There is also a more spatial version.

Suppose the guests are standing around the room. Ask for five of them whose convex hull contains no other guest. In less geometric language: find five people who surround a patch of the room with nobody else standing inside it.

With ten people in general position, such an empty convex pentagon is guaranteed to exist.

The proof is again just the five people. A verifier can look at where they are standing and check that nobody else lies inside the pentagon they determine.

This one feels quite different from the monotone-subsequence puzzle when I imagine actually solving it. It uses the same room, but it asks the eye to search the arrangement directly rather than translating everybody into ranks first. I do not know which version makes the better human challenge.

What interests me in both cases is that the prover can initiate the process. They can choose to think about a publicly checkable problem, use the environment as its concrete instance, and later present a witness.

There is a danger too: after inspecting the room, the prover can choose among many possible problems and look for one whose answer is already easy. But searching over possible problems is itself work. The extra choice is another prover strategy, and its preparation, memory, and search costs still have to be paid.

## What kind of theory is this?

I want to generalize this and be able to talk about problems like these more abstractly.

Sheep counting is the first warning against making the theory too narrow. If I insist on a clean certificate, there is almost nothing to work with. But yawning or falling asleep can still make the story that somebody was counting sheep more plausible.

So the first useful move is to stop asking only whether something has been proved, and ask how much the visible evidence changes the odds.

## Evidence and probability

Let \(Q\) be a claim about the person's hidden cognitive history, and let \(E\) be something visible afterward. Let \(K\) stand for what the verifier already knows.

The simplest reason to call \(E\) evidence for \(Q\) is

\[
\Pr(E\mid Q,K)
\mathrel{\gt}
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

But this picture quietly treats the evidence as something that simply happens. Once the person knows what will count as evidence, they may try to produce it, suppress it, or otherwise change the distribution themselves. So before going further, I need to say which prover strategies I am considering.

## Incentives and strategies

Suppose an intruder crosses the yard and the guard does not raise the alarm. Normally I would take this as evidence that the guard was not paying attention.

But an attentive guard can deliberately stay silent. Perhaps the guard is in it with the thieves.

Signal detection theory makes a related distinction between sensitivity and response criterion: noticing a signal and deciding to report it are different things. I need a broader version because the decision can depend on arbitrary goals and strategies, including cooperating with the thieves.

Poor chess has the same problem. It does not establish distraction: an attentive player can intentionally play badly. Someone who knows that yawning will be interpreted as evidence can yawn.

If the core question is what happened in the person's head, it is attractive to ask for evidence that does not depend on the person's incentives afterward. I will call that **strategy-independent** evidence. Other evidence works only given assumptions about what the prover wants; I will call that **incentive-dependent**.

For now, let \(\Sigma\) stand for the strategies I am treating as possible. For an accepting event \(E\), write

\[
s(E)=
\sup_{\sigma\in\Sigma}
\Pr(E\mid \neg Q,\sigma).
\]

If \(\Sigma\) contains every strategy the prover could deliberately use, this is the strategy-independent standard. If it excludes strategies because we believe the prover would not choose them, it is incentive-dependent.

Fakeability need not be all or nothing. Give a strategy a vector of resource costs \(R(\sigma)\): time, attention, memory, preparation, physical effort, coordination with other people, or whatever matters in the problem. Then for a resource budget \(b\) we can ask for

\[
s_b(E)=
\sup_{\substack{\sigma\in\Sigma\\R(\sigma)\preceq b}}
\Pr(E\mid \neg Q,\sigma).
\]

As the budget grows, \(s_b(E)\) can only grow because the prover gets more strategies. This is not what makes \(E\) evidence: the likelihood ratio does that. The fakeability profile tells me how useful the evidence remains when somebody deliberately tries to imitate it. A yawn can be genuine evidence and still be very easy to fake.

Once strategies are part of the picture, an obvious next question is what happens to complements. If I can look for evidence of \(Q\), can I do the same for \(\neg Q\)?

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

So direct negative evidence can fail for a structural reason. But that does not mean a negative claim is hopeless. Instead of trying to produce a trace of non-\(A\), perhaps we can prove that some other activity happened which \(A\) could not have coexisted with.

## Proving something incompatible instead

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

The strategy distinction still matters: she needs evidence that he really was playing chess under whatever strategy model she is using. What the construction changes is the negative claim itself. Instead of looking for a direct trace of non-flirting, it turns the problem into positive evidence for chess plus a claim that the two activities cannot coexist.

That leaves one word doing a lot of work: **incompatible**.

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

Psychology already has a closely related idea. Wickens' Multiple Resource Theory explains dual-task interference partly by whether two tasks demand the same or different cognitive resources. I do not need its particular resource dimensions here; it gives one empirical way of thinking about the channels and bottlenecks in \(G_t\).

But even a good resource model can fail if it is a model of the wrong person. That is exactly parallel to the incentive problem above.

## Two ways to misjudge a person

Suppose I believe the guard would always signal an intrusion. If that belief is wrong, I will misread silence even if I have perfectly understood what the guard is capable of noticing.

There is a parallel mistake on the capacity side. I know somebody who would frequently give a mathematics lecture while writing a manuscript at the same time. If I had drawn a generic human flow network from my own intuitions, I would probably have put those two activities behind one bottleneck and been wrong about him.

In the first case I misjudged what strategy the person would choose. In the second I misjudged what combinations of activity the person could perform. Both failures come from using the wrong model of the person.

This matters for the chess example twice. The girlfriend needs some idea of what strategies her boyfriend would actually choose, and she needs some idea of which activities can coexist for him. Knowing one without the other is not enough.

A close friend may have useful information about both. They may know whether somebody sandbags at chess or would manufacture an excuse, but also that a supposedly overwhelming combination of tasks is routine for this particular person.

## Uncertain models of the person

Instead of pretending that either part is known exactly, let \(M\) denote a model of the prover. It includes at least a strategy model \(\Sigma_M\), describing which actions are plausible under the person's incentives, and a resource model \(G_M\), describing which activities they can perform together.

The verifier's background knowledge \(K\) induces a distribution

\[
\pi(M\mid K)
\]

over models that still look plausible for this person.

This lets me treat both problems with the same move. If I learn that a guard is cooperating with thieves, I update the incentive part of the model. If I repeatedly watch somebody write a manuscript while giving a lecture, I update the resource part.

For example, suppose \(E\) is evidence that activity \(A\) happened, and write \(I_M(A,B)\) for the statement that \(A\) and \(B\) cannot coexist for a person described by \(M\). Define

\[
p=\Pr(A\mid E,K),
\qquad
q=\Pr(I_M(A,B)\mid E,K).
\]

Then

\[
\Pr(\neg B\mid E,K)
\;\ge\;
\Pr(A\wedge I_M(A,B)\mid E,K)
\;\ge\;
\max(0,p+q-1).
\]

In this model, the chess argument can fail because the record does not establish \(A\), because the verifier misjudged the boyfriend's capacity, or because the verifier misjudged which strategies his incentives make plausible. I can treat all three as uncertainty about \(M\).

Population knowledge can supply a prior over models. Long familiarity, observation, and deliberate dual-task experiments can update it. Two verifiers can therefore see the same evidence and rationally reach different conclusions because they know different things about the person who produced it.

## Forgetting the network

The resource part of \(M\) may still contain more detail than we need.

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

A sheep-counting protocol consists of an intended or natural true-case behavior \(\sigma^+\), a family of prover models \(M\), and a verifier

\[
V(X,T,K)\in\{0,1\}.
\]

Each model \(M\) determines a set of false-case strategies \(\Sigma_M\) and whatever resource constraints are relevant. The verifier's knowledge \(K\) determines how plausible the different models are.

I will call this a \((c,s)\)-**sheep-counting protocol** when

\[
\Pr[V=1\mid Q,\sigma^+,K]\ge c
\]

and

\[
\Pr[V=1\mid \neg Q,K]\le s,
\]

with

\[
c\mathrel{\gt}s,
\]

where the false-case probability averages over the verifier's uncertainty about \(M\) and lets the prover use the strategies each model admits. For a strategy-independent proof, every model admits every strategy the prover could deliberately use; incentive-dependent proofs restrict this according to the verifier's model of the prover.

The inequality \(c\gt s\) is intentionally weak. It only says that acceptance favors the claimed history. The size of the gap, the posterior it produces, and the fakeability profile tell us whether the evidence is actually useful.

The probabilities can include randomness in the environment and verifier, natural variation in human behavior, and uncertainty in \(K\) about the particular person's abilities, intentions, or resource network.

If we care about limited fakeability rather than unlimited fakeability, give strategies a resource vector \(R(\sigma)\) and record the **fakeability profile** \(s(b)\), restricting the false-case strategies to those with

\[
R(\sigma)\preceq b.
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

I understand the definition above as telling me what I am willing to call a sheep-counting problem, not how to find a good one.

I can imagine several ways to create a large separation between the true and false cases: natural side effects, unpredictable interaction with the environment, activities that exclude one another, or traces that are difficult to manufacture without the claimed history.

### Proof of work

The construction I find easiest to reason about comes from computational complexity. I will call this family **proofs of work**. The factorization, monotone-subsequence, and empty-pentagon puzzles above are all attempts at human proof of work: use fresh public input to force some online mental computation, then leave a witness that is cheaper to check.

Human computation has bounded channels. If producing an accepting trace after fresh input requires enough mental computation, then a person who has not carried out the relevant cognitive activity may simply not have enough time or capacity to manufacture the same trace. This is one way to keep the false-case probability small.

Fresh input helps because it limits what can be moved into preparation. Chess gets freshness from opponent moves. The party puzzles can get it from the current arrangement of the people.

This is where Blum and Vempala's vocabulary is useful:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** is computation that can happen before the fresh part of the input arrives. **PROC** is what remains afterward. **VER** is the cost of checking the evidence.

PREP is not free for a person. Precomputing many answers, retaining them, recognizing which situation has occurred, and finding the right stored answer all consume resources. Those costs belong in \(R(\sigma)\) just like online computation does.

A good computational construction has a lot of unavoidable \(\operatorname{PROC}\) and little \(\operatorname{VER}\), even after useful \(\operatorname{PREP}\). That asymmetry creates the probability gap.

The factorization puzzle above is the most literal attempt to get this shape from ordinary complexity theory. It is bad because the human costs are bad too. The monotone-subsequence puzzle feels more plausible, but I don't know whether a practiced person will find the witness in five seconds or five minutes. That is an empirical complexity question.

In the resource notation above, computational effort is one possible coordinate of \(R(\sigma)\). A computational construction works when realistic bounds on that coordinate keep the false-case probability low while verification stays cheap.

### Proof of space

Work is not the only resource I can try to make visible. Guarding is hard to verify on a quiet night because alertness may leave no trace, so one trick is to give the guard something unpredictable to remember.

Show the guard a collection of fresh pictures, then later ask which pictures they saw.

If the guard recalls them, that is evidence that the pictures occupied memory. I would call this a human **proof of space**. The resource is memory rather than computation.

That still says little about whether the guard stayed alert during the rest of the shift. For that part of guarding, memory is the wrong resource.

### Proof of time

To test vigilance over the whole shift, the verifier can sample the shift itself.

Suppose the supervisor secretly chooses \(n\) random moments during the shift. At each chosen moment, a harmless test signal appears and the guard must signal immediately. The response can be trivial. The point is that the guard has to be alert **then**.

If a guard is alert for only a fraction \(f\) of the shift and the test times are independent and uniformly distributed, the chance that every test lands during an alert period is

\[
f^n.
\]

A guard who sleeps through half of the shift has probability

\[
2^{-n}
\]

of passing all \(n\) tests because every test happened to miss the sleeping periods.

I think this is a genuine human **proof of time**. The verifier is not forcing much computation and is not asking the guard to store much information. Instead, the verifier samples the interval. Passing many unpredictable spot checks is evidence that the claimed cognitive state covered much of the time.

Mackworth's 1948 clock experiment has a closely related setup: people watched for rare visual events over a long interval, and detection declined as the watch continued. That does not change the proof idea, but it warns against treating a real guard's vigilance as constant over time.

This also gives me a cleaner distinction from proof of work. A proof of work tries to force enough computation. A proof of time can make each individual response almost free and still become strong because the prover must remain available across the interval.

The same idea need not be limited to guards. If the claim is that somebody maintained attention, monitored something, or kept a mental task active over time, unpredictable cheap probes can sample that persistence.

There is another possible notion of proof of time: force a long sequential computation whose later steps depend on earlier ones. That is close to verifiable delay functions in cryptography. For humans, though, I currently understand that mostly as a special kind of proof of work. The random-time construction seems more distinct because its difficulty comes from occupying time rather than performing many operations.

## Observation and intervention

The guard tests make explicit something that has been present since arithmetic: the verifier can change the situation in order to create evidence.

I will call a protocol **observational** when it only uses evidence that would have arisen anyway, and **interventional** when the verifier introduces exercises, probes, restrictions, or other events to make the hidden state visible.

Intervention is not a defect. Arithmetic works because I can give the prover fresh exercises. The random-time guard test works because the supervisor creates occasions on which vigilance has to become visible.

But an intervention can also change the property we care about. Evidence collected under a modified situation does not automatically answer a counterfactual question about what would have happened without the modification. I will return to that problem in the paradoxes.

## Does the theory explain anything?

Having several constructions makes a more basic question hard to avoid: has any of this actually explained something, or have I only built a language flexible enough to redescribe the examples I started with?

The arithmetic worksheet and the sleepy sheep counter now fit the same formal object. Quiet and eventful guard shifts differ because the environment changes which hidden histories can produce the visible trace. Positive and negative claims behave differently because one activity may leave traces that its complement cannot. Chess suggests a route from positive evidence for one activity to negative evidence for an incompatible one. Incentives and capacities, which initially looked like unrelated complications, both became uncertainty about the prover model. The observational/interventional distinction also gives one way to describe protocols that actively manufacture opportunities for evidence.

Those are promising unifications, but they are not automatically explanations. The quantities that matter most — the probabilities, the strategy sets, the resource model, and even the predicate \(Q\) — are largely supplied to the framework. If they can be chosen freely enough, almost any social story can be represented inside it.

On the other hand, a theory need not predict all of human cognition to have content. If the definitions force consequences that were not separately assumed, or rule out protocols that looked possible before formalization, that would be evidence that something real has been captured.

I do not think the question is settled yet. I take the next two sections as evidence in opposite directions.

## Theorems

One way I can test the framework is to ask whether the definitions force anything I did not put in by hand.

### Covering the challenge space moves work into PREP

The party puzzles raise a sharper question. If the verifier does not supply a fresh challenge, how much unpredictability must the environment supply instead?

Let a public environmental state \(Y\) become known during the interval, and let the prover answer with a trace \(T\). Let \(Q\) mean that the required computation happened after \(Y\) became known. Take the response-only case: the prover can prepare candidate traces beforehand and release one later.

For each environmental state \(y\), define

\[
A_y=\{t:V(y,t,K)=1\}.
\]

For a precomputed set of traces \(S\), let

\[
B(S)=\{y:S\cap A_y\ne\varnothing\}
\]

be the environmental states that the table covers.

**Claim.** Suppose the prover can prepare and retain \(S\), recognize the observed state \(y\), and select an accepting trace from \(S\) whenever \(y\in B(S)\), all within resource budget \(b\). Then

\[
s(b)\ge\Pr[Y\in B(S)].
\]

**Proof.** The false prover prepares \(S\) before the interval. When \(Y=y\) appears, they select some

\[
t_y\in S\cap A_y
\]

whenever one exists. The target online computation never happens, so \(Q\) is false, but the verifier accepts whenever \(Y\in B(S)\). The false-case success probability is therefore at least \(\Pr[Y\in B(S)]\). \(\square\)

If \(S\) covers every environmental state, then \(s(b)=1\). Define the **cover number**

\[
C=\min\{|S|:B(S)\text{ contains every possible }y\}.
\]

The cover number is a combinatorial measure, not a claim that a human can exploit the cover cheaply. A table of a thousand answers may be useless if producing, remembering, recognizing, or searching it costs too much. The resource budget decides whether the precomputation attack is actually available.

If the environment has at most \(N\) relevant states, then choosing one accepting answer for each state gives

\[
C\le N.
\]

Writing the conditional Hartley entropy as

\[
H_0(Y\mid\operatorname{PREP})=
\log_2|\operatorname{supp}(Y\mid\operatorname{PREP})|,
\]

if

\[
H_0(Y\mid\operatorname{PREP})\le h,
\]

then

\[
C\le 2^h.
\]

The cover number matters more than raw entropy because one answer may work for many environmental states.

The same point applies to self-selected puzzles. Letting the prover choose the puzzle after seeing the room can increase \(B(S)\) or shrink the cover needed for a successful attack. But searching through candidate puzzles and recognizing an easy one are part of the strategy cost. A thousand available puzzle families are not a thousand free chances.

This theorem is about response-only proofs of online computation. Falling asleep after counting sheep is different because sleepiness is caused by the activity rather than selected from a precomputed table.

### Evidence composes multiplicatively

Repeated observations can strengthen evidence, but for people the repetitions can also change one another.

Let \(E_1,\ldots,E_n\) be observations from successive rounds, and write \(E_{<i}\) for everything observed before round \(i\).

**Claim.** Their joint likelihood ratio is

\[
L(E_1,\ldots,E_n)
=
\prod_{i=1}^n
\frac{\Pr(E_i\mid E_{<i},Q,K)}
     {\Pr(E_i\mid E_{<i},\neg Q,K)}.
\]

**Proof.** Apply the probability chain rule separately to the numerator and denominator of

\[
\frac{\Pr(E_1,\ldots,E_n\mid Q,K)}
     {\Pr(E_1,\ldots,E_n\mid\neg Q,K)}.
\]

The two products divide term by term, giving the expression above. \(\square\)

So if every round contributes a conditional likelihood ratio of at least \(\lambda\gt1\), then

\[
L(E_1,\ldots,E_n)\ge\lambda^n.
\]

Independent repetition is the easy special case. The more interesting human case is when earlier rounds change later ones. A guard may become tired. A puzzle solver may learn the trick. A prover may infer what the verifier is testing. Then the later factors change, and repetition need not amplify at the same rate.

The random-time guard construction is one clean example: under its simple model, each hidden check independently lands in an alert period with probability \(f\), giving the \(f^n\) term above. The monotone-subsequence puzzle points in the opposite direction: practice may make the false-case strategy better from one round to the next.

### More knowledge need not strengthen evidence

**Claim.** The same observation can become weaker evidence after the verifier learns more about the prover.

**Proof.** Let \(Q\) be the claim that somebody counted sheep for ten minutes, and let \(E\) be a yawn. Suppose

\[
\Pr(E\mid Q,K_0)=0.8,
\qquad
\Pr(E\mid \neg Q,K_0)=0.1.
\]

Then

\[
L(E\mid K_0)=8.
\]

Now the verifier learns that this person can yawn on command. Suppose under the new knowledge \(K_1\),

\[
\Pr(E\mid Q,K_1)=0.8,
\qquad
\Pr(E\mid \neg Q,K_1)=0.5.
\]

Then

\[
L(E\mid K_1)=1.6.
\]

The verifier knows more under \(K_1\), but the likelihood ratio is smaller. Therefore more background knowledge does not always strengthen the same evidence. \(\square\)

The same construction works on the capacity side. Learning that a particular person can combine chess with some supposedly competing activity can weaken old evidence against that activity.

## Paradoxes

I take those theorems as positive evidence that the framework has some internal content. I also want a counterweight: cases where the formal conclusion is sound inside the model but misses the real social question.

### Proving that he did not flirt is not proving that he would not flirt

Let \(F\) be the claim that the boyfriend flirted during the interval, let \(A\) be the claim that he played the required chess, and let \(E\) be the chess record.

Suppose the record perfectly establishes the chess activity,

\[
\Pr(A\mid E,K)=1,
\]

and the verifier is certain that the required chess and flirting cannot coexist for this boyfriend:

\[
\Pr(I_M(A,F)\mid E,K)=1.
\]

Then the incompatibility bound from above gives

\[
\Pr(\neg F\mid E,K)
\ge
\Pr(A\wedge I_M(A,F)\mid E,K)
=1.
\]

Therefore

\[
\Pr(\neg F\mid E,K)=1.
\]

Inside the sheep-counting theory, this is a perfect result: the chess record proves that he did not flirt during the interval.

But the chess instruction is also an intervention: it removes some of the opportunity to flirt. The girlfriend may care about a different predicate. Let \(R\) mean:

> He would refrain from flirting if he had the opportunity.

If both \(R\) and \(\neg R\) boyfriends comply with the chess instruction in the same way, and the chess itself removes the opportunity to flirt, then

\[
\Pr(E\mid R,K)
=
\Pr(E\mid\neg R,K).
\]

Its likelihood ratio for \(R\) is therefore

\[
L_R(E)=1.
\]

By Bayes' rule, seeing \(E\) does not change the verifier's prior odds on \(R\) at all.

So the same intervention can produce perfect evidence for the historical predicate “he did not flirt” and no evidence for the dispositional predicate “he would not flirt if free to do so.”

### A stronger guard test can make the guarding worse

Let \(Q\) mean that the guard remains vigilant. Suppose a supervisor deliberately creates \(n\) test events that require a signal, and let \(E_n\) mean that the guard responds correctly to all \(n\).

Let

\[
\Pr(\text{correct response}\mid Q)=a,
\qquad
\Pr(\text{correct response}\mid\neg Q)=b,
\]

with

\[
1\ge a>b>0,
\]

and take the responses to be conditionally independent. Then

\[
\Pr(E_n\mid Q)=a^n,
\qquad
\Pr(E_n\mid\neg Q)=b^n,
\]

so the likelihood ratio is

\[
L(E_n)=
\left(\frac{a}{b}\right)^n.
\]

Because \(a/b\gt1\), this grows strictly with \(n\). More test events give stronger evidence for vigilance.

But the tests are interventions too. Suppose each fake alarm or staged intrusion imposes some cost \(d>0\) on the actual guarding — perhaps by occupying the guard's attention, creating alarm fatigue, or distracting from a real event. The total imposed cost is

\[
nd,
\]

which also grows with \(n\).

So increasing \(n\) makes the sheep-counting evidence better while making the guard's actual job worse. The formal ranking and the social ranking move in opposite directions.

These paradoxes are not an argument against intervention. They show why an interventional protocol has to be interpreted as evidence about what happened under that intervention. Moving from there to a counterfactual disposition or to the quality of the underlying task takes another argument.

## What I would try next

The monotone-subsequence task is concrete enough to start measuring the computational construction. For

\[
(k,n)=(4,10),\quad(5,17),\quad(6,26),
\]

one could reshuffle the same participants between rounds and measure solve time, errors, and learning. I would especially want to know how the conditional likelihood ratio changes as the solver practices.

I would also look for other guaranteed ambient witnesses. Erdős-Szekeres and the empty-pentagon theorem give two rather different examples already. There may be much better ones.

The cover-number question now has two empirical parts as well as a combinatorial one: how small a table covers much of the environmental distribution, and how expensive is that table for a person to prepare, retain, recognize, and search? The same measurements could tell us whether choosing among many puzzle families is actually cheaper than solving a fixed puzzle.

But the broader experiments need not be computational. How much does sheep counting actually change the chance of yawning? Which events make a guard's vigilance visible? How much unpredictable information can a person retain well enough to pass a later audit? Which traces are easy to manufacture once the prover knows what the verifier will inspect?

The random-time guard construction is easy to test too. Mackworth's results suggest that the alert fraction will not stay constant through a long watch, so I would want to measure how the pass probability changes with the timing of the probes rather than only their number.

For the person-model side, I would want measurements across people as well as within one person. How stable are incompatibilities? How much can be learned from a few dual-task observations? How quickly does practice change them? How stable are incentives across situations? How informative is population data about one particular prover?

## Closing

The original question was simple:

> What are you thinking about?

Arithmetic gives one easy answer to the evidence version of that question. Counting sheep gives a much weaker one. The sleeping guard makes the hidden property vigilance over time. Chess gives an interactive trace. The party puzzles suggest that a person may even be able to arrange a provable line of thought without anybody issuing the challenge first.

What seems common to them is not work. It is separation: something visible is distributed differently depending on what happened in the person's head.

Computational hardness is one good way to create a large separation because human computation is bounded. It is not the only one, and the sleepy sheep counter was evidence of that from the beginning.

That seems like enough to keep counting sheep for a while.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Wilson P. Tanner Jr. and John A. Swets, [*A Decision-Making Theory of Visual Detection*](https://doi.org/10.1037/h0058700), *Psychological Review* 61(6), 401–409, 1954.
- N. H. Mackworth, [*The Breakdown of Vigilance during Prolonged Visual Search*](https://doi.org/10.1080/17470214808416738), *Quarterly Journal of Experimental Psychology* 1(1), 6–21, 1948.
- Christopher D. Wickens, [*Multiple Resources and Mental Workload*](https://doi.org/10.1518/001872008X288394), *Human Factors* 50(3), 449–455, 2008.
- Giuseppe Ateniese, Ilario Bonacina, Antonio Faonio, and Nicola Galesi, [*Proofs of Space: When Space Is of the Essence*](https://eprint.iacr.org/2013/805).
- Dan Boneh, Joseph Bonneau, Benedikt Bünz, and Ben Fisch, [*Verifiable Delay Functions*](https://eprint.iacr.org/2018/601).
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Heiko Harborth, [*Konvexe Fünfecke in ebenen Punktmengen*](https://doi.org/10.5169/seals-32945), *Elemente der Mathematik* 33(5), 116–118, 1978.
