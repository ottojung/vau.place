# Sheep-Counting Problems for Computer Science

If you ask me:

> What are you thinking about?

and I answer:

> Birds.

I cannot do much better than tell you that I was.

But I could say that I was thinking about math and hand you a page of arithmetic problems where I filled in the answers. You still would not have seen what happened in my head, but I would have something to show you.

I think there is an interesting family of problems here: when can a person prove, or at least give useful evidence for, what they were thinking about?

I call these **sheep-counting problems**.

## Arithmetic

I imagine being given a sheet like this:

```text
137 × 284 = ______
519 - 287 = ______
84 × 63 = ______
...
```

A few minutes later, I can return it like this:

```text
137 × 284 = 38,908
519 - 287 = 232
84 × 63 = 5,292
...
```

Given that the sheet was fresh, I returned it promptly, and I had no outside help, there should not be much doubt that I was thinking about math for a while.

This gives a useful baseline: the exercises can be chosen fresh, the amount of work can be increased by adding more of them, and the answers are easy to verify. Later examples lose one or more of these conveniences.

## Counting sheep

You could ask me:

> Count sheep in your head for ten minutes.

The task can begin and end entirely in my head. Nothing needs to be said or written down afterward.

Yet if I start yawning and fall asleep, that is some evidence that the sheep were there.

## The sleeping guard

A guard watches a building through the night. On a quiet night, a good guard may do almost nothing. The job still requires staying alert enough to notice an intruder, an alarm, a door opening, or anything else that should be reported.

The shift ends and nothing happened. That fits an alert guard, but it also fits a guard who fell asleep five minutes after starting. An event changes the situation: if something happens and the guard notices it and signals, vigilance has had an occasion to become visible.

The problem is the quiet interval. Attention can matter for hours without producing any trace at all.

## Chess party

A jealous girlfriend leaves her boyfriend at a party and tells him to play chess while she is away. He plays twenty one-minute games.

When she returns, the games leave a record of many decisions spread across the interval. Every opponent move supplies a fresh position, so the player repeatedly has to react to something that was not known at the start.

The useful feature here is that the evidence is distributed through time because the input is distributed through time. That is different from a worksheet that might have been completed early and then left alone.

The girlfriend's actual reason for choosing chess will matter later.

## Puzzles without a challenge

So far, somebody else has supplied the task: exercises, sheep counting, guarding, chess. There is also the case where the prover begins on their own and still wants to leave something checkable afterward.

A party seems like a good place to look because the room already contains public information: people, names, positions, and whatever other structure happens to be there.

### A computer-scientist solution

The first construction that came to my mind is very computer-scientist-shaped. A public rule turns every guest's name into an integer, and adding those integers gives a number

\[
N.
\]

The prover can factor \(N\) and later present the factors. A verifier only has to multiply them and check that their product is \(N\).

In practice, this might sound like:

> What are you thinking about?
>
> I'm factorizing. Alice, Bob and Charlie's names add up to a number whose factorization is `3215031751 × 118670087467 × 307768373641`.

From computer science point of view, this is perfect: factorization is difficult, while checking a proposed factorization is straightforward.

But large-integer arithmetic is cumbersome to do mentally, and even checking the product of large factors may be expensive for a person. The construction has the right asymmetry and the wrong human scale.

### Six objects, including the empty spot

A spatial version is much easier to state. With ten people standing so that no three are exactly in a line, there are always five whose convex hull contains no other guest. In less geometric language, five people surround a patch of the room with nobody else standing inside it.

Harborth's empty-pentagon theorem guarantees that such a set of five exists. The witness is only the five people; their positions show whether anyone else lies inside the pentagon.

This is much closer to the kind of mental task I want. The input is already in front of the prover, the answer is small, and verification is visual. What I do not know is how difficult the search is for a person who knows the trick.

### A monotone subsequence of friends

Another guaranteed puzzle replaces geometry with two orders. Ten people have one public total order, perhaps the order in which they are standing. Their names give another, alphabetical order. Reading the alphabetical ranks in the first order gives a permutation of ten numbers.

Among those ten people there are always four, preserving the first order, whose names are alphabetically increasing or alphabetically decreasing. The Erdős-Szekeres monotone subsequence theorem gives the general guarantee: every sequence of

\[
(r-1)(s-1)+1
\]

distinct values contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\). With \(r=s=4\),

\[
(4-1)^2+1=10.
\]

The witness is just four friends. Checking the two orders is easy, while the current ordering can create fresh work even when the prover already knows everybody's name.

This construction adds an extra translation step: the room first has to become two orders. I do not know which search is actually harder once somebody has practiced both. That is an empirical complexity question.

Both party puzzles let the prover start without waiting for a challenge. The environment supplies the instance, and a short public witness survives after the mental search is over.

That freedom creates a possible attack. After seeing the room, the prover can search among several possible problems for one whose answer is already easy. But searching over problems is itself work; preparation, memory, recognition, and search still consume human resources.

## What kind of theory is this?

These examples barely look related: arithmetic answers, yawning, a guard's reaction, chess games, a geometric witness. The reason to group them is one common question: can something visible distinguish one hidden cognitive history from another?

Sheep counting already rules out a certificate-only theory. A yawn is not a proof object, but it can still change what should be believed about the hidden history.

A more useful object here is the collection of visible behaviours associated with each side of the claim.

## Evidence and probability

For one fixed model of behaviour, let \(Q\) be a claim about the hidden cognitive history and let \(E\) be a visible event. Then \(E\) favors \(Q\) when

\[
\Pr(E\mid Q) > \Pr(E\mid\neg Q).
\]

The likelihood ratio

\[
L(E)=\frac{\Pr(E\mid Q)}{\Pr(E\mid\neg Q)}
\]

measures the strength of that evidence. Arithmetic and sleepy sheep can differ enormously in strength while still being the same kind of relation between a hidden history and something visible.

But one pair of distributions is not enough once behaviour can vary. Different assumptions about honest variation, deliberate strategy, incentives, preparation, and ability give different possible distributions of the visible trace.

## Attainable traces

For the formal model, take a finite trace space \(T\). A trace can be an answer sheet, a yawn, a sequence of guard responses, a chess record, or whatever part of the world the verifier will observe.

The true-side family

\[
P_+\subseteq\Delta(T)
\]

contains the trace distributions for true-case behaviours that the protocol is meant to accept. The false-side family

\[
P_-\subseteq\Delta(T)
\]

contains the trace distributions that the alternative history is allowed to use.

The two sides need not be symmetric. In the arithmetic example, \(P_+\) might describe the intended solver together with ordinary human variation, while \(P_-\) contains every cheating strategy the analysis wants to defend against. A stronger completeness requirement enlarges \(P_+\); a stronger soundness requirement enlarges \(P_-\).

Because verifier acceptance is linear in the trace distribution, replacing either family by its closed convex hull does not change any worst-case acceptance probability. I will therefore treat \(P_+\) and \(P_-\) as compact and convex.

A randomized verifier is a function

\[
v:T\to[0,1],
\]

where \(v(t)\) is the probability of accepting trace \(t\). Its worst true-case acceptance and worst false-case acceptance are

\[
c(v)=\min_{p\in P_+}\mathbb E_p[v],
\qquad
s(v)=\max_{q\in P_-}\mathbb E_q[v].
\]

The best separation available from the trace is

\[
\delta(P_+,P_-)
=
\max_v\bigl(c(v)-s(v)\bigr).
\]

This quantity has a simpler form than the definition suggests.

### Separation is total variation

For distributions \(p,q\) on \(T\), write

\[
\operatorname{TV}(p,q)
=
\frac12\sum_{t\in T}|p(t)-q(t)|.
\]

Then

\[
\boxed{
\delta(P_+,P_-)
=
\min_{p\in P_+,\;q\in P_-}
\operatorname{TV}(p,q)
}.
\]

To see this, observe that

\[
c(v)-s(v)
=
\min_{p\in P_+,\;q\in P_-}
\sum_{t\in T}v(t)(p(t)-q(t)).
\]

The domains are convex and compact and the expression is bilinear, so the finite-dimensional minimax theorem lets the maximum over \(v\) and the minimum over \((p,q)\) exchange places. For fixed \(p,q\), maximizing over \(0\le v(t)\le1\) gives exactly \(\operatorname{TV}(p,q)\).

So the strongest robust sheep-counting test is determined by the distance between two sets of possible observable behaviours.

In particular,

\[
P_+\cap P_-\ne\varnothing
\quad\Longrightarrow\quad
\delta(P_+,P_-)=0.
\]

If the same distribution of visible traces appears on both sides, no verifier using only those traces can have a positive worst-case gap. Conversely, disjoint compact attainable sets have positive separation.

### Throwing information away cannot help

A later observer may see only a processed version of the trace. Any randomized post-processing is a stochastic map

\[
K:T\to T'.
\]

It sends the attainable sets to \(KP_+\) and \(KP_-\). Total variation contracts under stochastic maps, so

\[
\delta(KP_+,KP_-)
\le
\delta(P_+,P_-).
\]

No processing of the trace can manufacture robust evidence that was not already present.

This also gives a natural preorder on observation systems: one system is at least as informative as another when the second can be obtained from the first by post-processing. The identity map gives reflexivity, and composition of stochastic maps gives transitivity. Two systems are equivalent when each can simulate the other this way.

## Incentives, strategies, and resources

The attainable sets absorb most of the strategy notation. A strategy-independent analysis makes \(P_-\) broad enough to include every deliberate false-case behaviour under consideration. An incentive-dependent analysis can use a smaller false-side family. Enlarging \(P_-\) can only decrease \(\delta\).

Resources give a useful filtration. If \(P_-^{(b)}\) contains the false-case distributions attainable with resource budget at most \(b\), then

\[
b_1\preceq b_2
\quad\Longrightarrow\quad
P_-^{(b_1)}\subseteq P_-^{(b_2)}.
\]

The corresponding robustness curve

\[
\delta(b)
=
\delta(P_+,P_-^{(b)})
\]

is therefore non-increasing. More time, memory, preparation, attention, or coordination can make false histories harder to distinguish from true ones. There is no reason for the curve to be continuous: a newly affordable strategy can create a jump.

Uncertainty about the person can be handled at this level too. A conservative analysis can take the union of the behaviour families allowed by every person-model still considered possible and then convexify it. A Bayesian analysis can instead average over models. Those are different questions; the geometry makes the choice visible rather than hiding it inside one probability symbol.

Signal detection theory has a narrower version of the same issue in its separation of sensitivity from response criterion. Here the strategy can depend on arbitrary goals, including cooperating with thieves.

## Negative answers

The positive claim

> I was solving arithmetic exercises in my head.

can leave a trace. Its complement

> I was **not** solving arithmetic exercises in my head.

has a different problem. Somebody who did solve the exercises can often behave afterward exactly like somebody who did not.

When the target claim is \(\neg A\), a strategy-independent impossibility appears whenever

\[
P_{\neg A}\subseteq P_A.
\]

The true-side family is then contained in the false-side family, so the separation is zero.

More generally, even one common distribution is enough:

\[
P_{\neg A}\cap P_A\ne\varnothing
\quad\Longrightarrow\quad
\delta(P_{\neg A},P_A)=0.
\]

The deterministic version is the old trace-inclusion intuition: if every visible trace available after non-\(A\) can also be produced after \(A\), then a strategic person who did \(A\) can imitate the non-\(A\) case.

The obstruction also says what an escape has to look like. Some observable behaviour must become unavailable when \(A\) happened. One way to arrange that is to prove another activity that could not have happened alongside \(A\).

## Proving something incompatible instead

For a claim that activity \(B\) did not happen, evidence that activity \(A\) did happen can count against \(B\) when the two cannot coexist:

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is the role chess was playing for the girlfriend. Chess was not the final fact she cared about. She wanted a positively checkable activity that would exclude some competing activity.

The probabilistic problem and the incompatibility problem are different. The chess record has to separate histories in which chess happened from histories in which it did not. Separately, the model of the person has to say that chess and the competing activity cannot coexist.

The second part has its own combinatorics.

## Compatibility complexes

Let \(\mathcal A\) be a finite set of individually possible activities and let

\[
\mathcal C\subseteq 2^{\mathcal A}
\]

contain exactly the sets of activities that can happen together. If a collection of activities is possible, every subcollection is possible too. Thus

\[
S\in\mathcal C,\;R\subseteq S
\quad\Longrightarrow\quad
R\in\mathcal C.
\]

Mathematically, \(\mathcal C\) is an abstract simplicial complex.

The minimal sets not in \(\mathcal C\) are the **minimal incompatibilities**. They need not be pairs. If three activities each consume \(0.4\) units of one resource of capacity \(1\), every pair is compatible while the triple is not. Pairwise incompatibility completely determines \(\mathcal C\) exactly when every minimal incompatibility has size two; in simplicial language, this is the flag case.

A capacity model, a network of shared bottlenecks, or another empirical theory of cognitive interference can generate such a complex. The complex itself remembers only the compatibility structure. Wickens' Multiple Resource Theory supports the weaker empirical premise that interference depends on which resources tasks share; it does not require any particular combinatorial model.

### Links: what remains possible

If \(S\in\mathcal C\) is already happening, the activities still available alongside it form the link

\[
\operatorname{lk}_{\mathcal C}(S)
=
\{R\subseteq\mathcal A\setminus S:
S\cup R\in\mathcal C\}.
\]

This gives a simple algebra for consuming cognitive capacity. If \(R\) is compatible with \(S\), then

\[
\operatorname{lk}_{\operatorname{lk}_{\mathcal C}(S)}(R)
=
\operatorname{lk}_{\mathcal C}(S\cup R).
\]

Conditioning first on \(S\) and then on \(R\) leaves the same residual compatibility structure as conditioning on \(S\cup R\) at once.

For the chess argument, the relevant question is whether flirting belongs to the link of the required chess activity. If it does, chess cannot prove non-flirting by incompatibility alone.

### Independent subsystems and factorization

If \(\mathcal C_1\) and \(\mathcal C_2\) live on disjoint activity sets, their join is

\[
\mathcal C_1*\mathcal C_2
=
\{S_1\cup S_2:
S_1\in\mathcal C_1,
S_2\in\mathcal C_2\}.
\]

The join describes two subsystems whose incompatibilities do not cross. It is associative and commutative up to the obvious relabelling.

There is also a canonical factorization. Build a hypergraph whose vertices are activities and whose hyperedges are the minimal incompatibilities of \(\mathcal C\). Let its connected components have vertex sets

\[
A_1,\ldots,A_k.
\]

Then

\[
\boxed{
\mathcal C
=
\mathcal C|_{A_1}
*
\cdots
*
\mathcal C|_{A_k}
}.
\]

Indeed, a set belongs to \(\mathcal C\) exactly when it contains no minimal incompatibility. Every minimal incompatibility lies inside one connected component, so this condition holds exactly when the intersection with each \(A_i\) is compatible in the restricted complex.

The components therefore give a maximal decomposition into compatibility subsystems that do not constrain one another. At this level of the model, that is a precise sense in which the person's cognitive resources factor.

## Two ways to misjudge a person

The guard gives one kind of mistake. A verifier might believe that an attentive guard always signals an intrusion. If that belief is wrong, the wrong trace distributions went into \(P_+\) and \(P_-\).

I have seen another kind. I know somebody who regularly gives a mathematics lecture while writing a manuscript at the same time. Before seeing that, I would have put speaking through a mathematical argument and composing technical prose behind the same bottleneck. For him, the compatibility complex I would have guessed is simply wrong.

The two failures look different, but both change the mathematical objects supplied to the theory. One changes which visible behaviours are allowed on each side. The other changes which hidden activities can coexist.

More knowledge can even weaken old evidence. Learning that somebody can yawn on command enlarges the false-case family for sheep counting. Learning that somebody can combine two activities previously thought incompatible adds a face to the compatibility complex. Either change can destroy a separation that looked convincing before.

## A minimal definition

At this point the formal core is small. A sheep-counting instance has a finite trace space \(T\) and two compact convex sets

\[
P_+,P_-\subseteq\Delta(T)
\]

representing the true-case behaviours to be accepted and the false-case behaviours to be resisted. Its robust strength is

\[
\delta(P_+,P_-)
=
\min_{p\in P_+,\;q\in P_-}
\operatorname{TV}(p,q).
\]

When simultaneous activities matter, the instance also has a compatibility complex \(\mathcal C\). Resource bounds can refine the false side into a nested family \(P_-^{(b)}\), giving the robustness curve \(\delta(b)\).

A sheep-counting problem is the problem of arranging the environment, interaction, and observable trace so that the relevant behaviour families are well separated under a defensible model of the person.

Mental effort itself is not part of the definition.

## Constructing good sheep-counting problems

The formal definition says what separation is. It does not say how to create it.

Several constructions can push the behaviour families apart: natural side effects, fresh interaction with the environment, incompatible activities, or traces that are difficult to manufacture without the claimed history.

The names **proof of work**, **proof of space**, and **proof of time** are analogies to computer-security terminology. Here they name the resource that creates the separation; these human protocols are not meant as literal instances of the corresponding cryptographic definitions.

### Proof of work

The factorization, empty-pentagon, and monotone-subsequence puzzles are attempts at human **proof of work** in this sense. Fresh public input is meant to keep easy false-case behaviours out of \(P_-\) by forcing some online mental computation before an acceptable trace can be produced.

Blum and Vempala split the relevant costs into

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** happens before the fresh part of the input arrives. **PROC** remains afterward. **VER** is the cost of checking the evidence.

PREP is not free for a person. Precomputing many answers, retaining them, recognizing which situation occurred, and finding the right stored answer all consume resources. In the attainable-set picture, increasing any of those budgets enlarges \(P_-^{(b)}\) and can only reduce \(\delta(b)\).

The useful asymmetry is a lot of unavoidable \(\operatorname{PROC}\) and little \(\operatorname{VER}\), even after useful \(\operatorname{PREP}\). The factorization puzzle gets this shape most literally, but at a terrible human scale. The empty pentagon and monotone subsequence use smaller mental operations; what remains unknown is whether their separation survives practice and preparation.

### Proof of space

Work is not the only resource that can create separation. Guarding is hard to verify on a quiet night because alertness may leave no trace. A supervisor could instead show the guard a collection of fresh pictures and later ask which pictures they saw.

Successful recall changes the distribution of the later trace because the pictures had to occupy memory. In this analogy, that is a human **proof of space**: memory rather than computation creates the separation.

That says little about whether the guard stayed alert during the rest of the shift. For whole-shift vigilance, memory is the wrong resource.

### Proof of time

A different construction samples the shift itself. Secretly chosen moments produce harmless test signals, and the guard has to signal immediately. Each response can be trivial; the point is that the guard has to be alert **then**.

If the guard is alert for a fraction \(f\) of the shift and \(n\) test times are independent and uniformly distributed, the chance that every test lands during an alert period is

\[
f^n.
\]

A guard who sleeps through half the shift has probability

\[
2^{-n}
\]

of passing all \(n\) tests because every test happened to miss the sleeping periods.

In the same analogy, this is a human **proof of time**. It requires little computation and little storage. Its strength comes from sampling the interval: many unpredictable spot checks move the false-case trace distribution away from the vigilant one.

A deployed cousin already exists in railways. Locomotive alerter and deadman controls require the operator to respond or maintain contact, and can trigger braking when that response is missing. Their purpose is safety rather than proof, and their timing need not be secret, but the same basic idea is present: continued availability is tested through responses spread over time.

Mackworth's 1948 clock experiment found that detection declined during prolonged watches, so a real guard's alert fraction will not stay constant through the shift.

Proof of work and proof of time get their difficulty from different places. Proof of work forces enough computation. This proof of time can make each individual response almost free while requiring availability across the interval.

A long sequential computation gives another possible meaning of proof of time, close to verifiable delay functions in cryptography. For humans, I currently understand that more as a special kind of proof of work: the difficulty comes from sequential computation. The random-time construction seems different because its difficulty comes from occupying time.

## Observation and intervention

Arithmetic exercises and guard probes suggest another distinction: sometimes the verifier changes the situation in order to create evidence.

A protocol is **observational** when it uses evidence that would have arisen anyway and **interventional** when the verifier introduces exercises, probes, restrictions, or other events that change the attainable trace sets.

Intervention is not a defect. Fresh arithmetic exercises can increase separation; random guard probes create moments at which vigilance becomes visible. The complication is that an intervention can also change the property being investigated. Separation under the modified situation does not automatically answer a counterfactual question about what would have happened without it.

## Does the theory explain anything?

Once the behaviour families are fixed, the framework does force some consequences. The best robust verifier is determined by their total-variation distance, and post-processing can only weaken that separation. Once the compatibility complex is fixed, links describe residual capacity and the minimal incompatibilities give a canonical join factorization.

The precomputation and repetition results below add two more constraints on possible protocols.

That still does not make the empirical part automatic. The behaviour families and compatibility complex have to come from assumptions or measurements about real people. If those objects can be chosen arbitrarily, the mathematics can describe almost any story. The interesting question is whether useful classes of people and tasks produce stable structure in them.

## Theorems

### Precomputation has a coverage profile

The party puzzles give a finite combinatorial version of the PREP problem. Let \(Y\) range over a finite set of public environmental states, and assume each state has at least one acceptable trace. For each state \(y\), let

\[
A_y\subseteq T
\]

be the traces accepted for that state.

A prepared trace \(t\) covers the states

\[
B_t=\{y:t\in A_y\}.
\]

For a table \(S\subseteq T\), its covered probability mass is

\[
F(S)
=
\Pr\!\left[Y\in\bigcup_{t\in S}B_t\right].
\]

If the prover can prepare, remember, recognize, and look up the table \(S\), then a false prover can succeed on at least the states counted by \(F(S)\). The best coverage available from \(k\) prepared traces is

\[
\alpha(k)
=
\max_{|S|\le k}F(S).
\]

This records the whole combinatorial precomputation tradeoff. The ordinary cover number is

\[
\kappa
=
\min\{k:\alpha(k)=1\}.
\]

The function \(F\) is monotone and submodular. Adding one more prepared response can only help, but the set of new states it covers can only shrink as the table grows. Thus the marginal value of preparation has diminishing returns at the purely combinatorial level.

Human cost is separate. A table with excellent \(\alpha(k)\) may still be unusable if producing, retaining, recognizing, or searching \(k\) responses is too expensive.

If the challenge distribution itself can be designed, the same incidence structure has a useful dual. The fractional cover number is

\[
\tau^*
=
\min_{x_t\ge0}
\left\{
\sum_t x_t:
\sum_{t:\,y\in B_t}x_t\ge1
\text{ for every }y
\right\}.
\]

Linear-programming duality gives

\[
\tau^*
=
\max_{z_y\ge0}
\left\{
\sum_y z_y:
\sum_{y\in B_t}z_y\le1
\text{ for every }t
\right\}.
\]

Normalize an optimal dual solution by

\[
\mu(y)=\frac{z_y}{\tau^*}.
\]

Under this challenge distribution, every single precomputed trace succeeds with probability at most \(1/\tau^*\), and any table of \(k\) traces succeeds with probability at most

\[
\min\!\left(1,\frac{k}{\tau^*}\right)
\]

by the union bound.

So the same combinatorics describes both sides: which responses a prover should precompute, and how a verifier should distribute fresh challenges to make small tables ineffective.

This resembles classical time-memory tradeoffs in cryptanalysis, such as Hellman's: expensive precomputation and stored tables can buy cheaper online work. The cover profile here is a different object, built from which prepared human responses cover which environmental states.

A thousand available puzzle families are not a thousand free chances. Searching among them and recognizing an easy one still has a human cost even when the combinatorial coverage is large.

### Repetition can survive an adaptive prover

Repeated tests are useful only while earlier rounds do not make later ones easy to fake. The relevant bound therefore has to hold after everything the prover has already seen.

In round \(i\), let \(A_i\) be the event that the verifier accepts that round, and let \(H_{<i}\) contain the complete history visible before it: previous challenges, responses, outcomes, and anything else the prover can use.

If, after every accepted history \(h_{<i}\), every allowed false-case continuation satisfies

\[
\Pr(A_i\mid H_{<i}=h_{<i},\neg Q)\le s_i,
\]

then every adaptive false strategy satisfies

\[
\Pr(A_1\cap\cdots\cap A_n\mid\neg Q)
\le
\prod_{i=1}^n s_i.
\]

The proof is just conditional multiplication. Given that the previous rounds were accepted, the probability of accepting round \(i\) is an average over the possible visible histories, and every term is at most \(s_i\).

The same statement holds for completeness in the other direction: conditional true-case acceptance probabilities at least \(c_i\) give total acceptance at least \(\prod_i c_i\).

Independence is unnecessary, and adaptation is already included. Fatigue, practice, and learning the verifier's strategy matter because they change the later conditional bounds. If practice makes round \(i\) easier to fake, then \(s_i\) rises and amplification weakens.

The random-time guard construction is a clean special case. If, whatever previous probes revealed, a non-vigilant guard is alert at the next hidden probe with probability at most \(f\), then the chance of passing all \(n\) probes is at most \(f^n\).

## Paradoxes

The formal picture can also produce sound conclusions that miss the broader social question.

### Proving that he did not flirt is not proving that he would not flirt

Let \(A\) be the activity of playing the required chess and \(F\) the activity of flirting. Under a compatibility complex with

\[
\{A,F\}\notin\mathcal C,
\]

perfect evidence that \(A\) happened is also perfect evidence that \(F\) did not happen during the interval.

But the chess instruction is an intervention: it removes some of the opportunity to flirt. The girlfriend may care about a different predicate. Let \(R\) mean

> He would refrain from flirting if he had the opportunity.

If both \(R\) and \(\neg R\) can produce the same distribution of chess traces under the intervention, then their behaviour families for this experiment intersect, so

\[
\delta(P_R,P_{\neg R})=0.
\]

The same intervention can therefore perfectly separate “he flirted” from “he did not flirt” during the interval while giving no robust separation at all for the dispositional question.

### A stronger guard test can make the guarding worse

Let \(Q\) mean that the guard remains vigilant. A supervisor creates \(n\) test events and records the full response vector

\[
X^{(n)}=(X_1,\ldots,X_n).
\]

Suppose the responses are conditionally independent, with

\[
X_i\mid Q\sim\operatorname{Bernoulli}(a),
\qquad
X_i\mid\neg Q\sim\operatorname{Bernoulli}(b),
\]

where \(a>b\). The two trace distributions are

\[
P_Q^{(n)}=\operatorname{Bernoulli}(a)^{\otimes n},
\qquad
P_{\neg Q}^{(n)}=\operatorname{Bernoulli}(b)^{\otimes n}.
\]

Dropping the last response is a post-processing map from the \((n+1)\)-test experiment to the \(n\)-test experiment. Therefore

\[
\delta\!\left(P_Q^{(n+1)},P_{\neg Q}^{(n+1)}\right)
\ge
\delta\!\left(P_Q^{(n)},P_{\neg Q}^{(n)}\right).
\]

More tests cannot make these two trace laws less distinguishable; for fixed \(a\ne b\), their separation tends to one as \(n\) grows.

But every fake alarm or staged intrusion can also impose a cost \(d\) on the actual guarding by occupying the guard's attention, creating alarm fatigue, or distracting from a real event. After \(n\) tests the imposed cost is \(nd\).

More testing can therefore improve the sheep-counting experiment while making the guard's actual job worse. The statistical ranking and the social ranking move in opposite directions.

Neither paradox is an argument against intervention. They only show that separation for one predicate under one experiment does not automatically answer a different question.

## What I would try next

The party puzzles are concrete enough to estimate a robustness curve. Repeating the empty-pentagon and monotone-subsequence tasks at nearby sizes could show how quickly practice and preparation enlarge the false-case family and reduce \(\delta(b)\).

The compatibility complex suggests a different experiment. Dual-task and triple-task tests could look for minimal incompatibilities, ask whether higher-order incompatibilities really appear, and see whether the join factors remain stable across people and after practice. The lecturer who can write while speaking is exactly the sort of observation that changes this structure.

The precomputation profile \(\alpha(k)\) is also measurable. For a fixed party-puzzle family, one could ask how many prepared answers or puzzle families are needed before most naturally occurring rooms are covered, and then compare the combinatorial gain with the human cost of storing and searching them.

The original question was simple:

> What are you thinking about?

A hidden cognitive history can leak into the visible world through answers, side effects, reactions to fresh events, short witnesses, or responses spread across time. Computational hardness is one way to make such evidence difficult to imitate, but it is not the principle underneath all of them.

What is common to all of them is not work. It is separation: something visible is distributed differently depending on what happened in the person's head.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Wilson P. Tanner Jr. and John A. Swets, [*A Decision-Making Theory of Visual Detection*](https://doi.org/10.1037/h0058700), *Psychological Review* 61(6), 401–409, 1954.
- N. H. Mackworth, [*The Breakdown of Vigilance during Prolonged Visual Search*](https://doi.org/10.1080/17470214808416738), *Quarterly Journal of Experimental Psychology* 1(1), 6–21, 1948.
- Christopher D. Wickens, [*Multiple Resources and Mental Workload*](https://doi.org/10.1518/001872008X288394), *Human Factors* 50(3), 449–455, 2008.
- Giuseppe Ateniese, Ilario Bonacina, Antonio Faonio, and Nicola Galesi, [*Proofs of Space: When Space Is of the Essence*](https://eprint.iacr.org/2013/805).
- Dan Boneh, Joseph Bonneau, Benedikt Bünz, and Ben Fisch, [*Verifiable Delay Functions*](https://eprint.iacr.org/2018/601).
- Martin E. Hellman, [*A Cryptanalytic Time-Memory Trade-Off*](https://doi.org/10.1109/TIT.1980.1056220), *IEEE Transactions on Information Theory* 26(4), 401–406, 1980.
- [49 CFR § 238.237, *Automated monitoring*](https://www.law.cornell.edu/cfr/text/49/238.237), requiring alerter or deadman controls on covered passenger locomotives.
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Heiko Harborth, [*Konvexe Fünfecke in ebenen Punktmengen*](https://doi.org/10.5169/seals-32945), *Elemente der Mathematik* 33(5), 116–118, 1978.
