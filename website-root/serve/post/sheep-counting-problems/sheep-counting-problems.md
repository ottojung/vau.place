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

That seems enough to try a mathematical theory. I do not know how far it goes. Sheep counting already rules out one tempting simplification: the visible thing need not be a certificate. A yawn can still make one history more plausible than another.

So I will start with evidence rather than certificates.

## Evidence and probability

Here \(Q\) is a claim about the person's hidden cognitive history, \(E\) is something visible afterward, and \(K\) is what the verifier already knows. For now, the probabilities are taken under the verifier's current model of how the person behaves. One simple formalization of **evidence** is

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

Under this definition, arithmetic and sleepy sheep differ in strength rather than kind. A long list of correct answers can have a very large likelihood ratio; yawning after sheep counting may have only a modest one. Neither observation has to be a deliberately produced certificate. Evidence can be an answer, a game record, a reaction to an event, or an accidental side effect.

If the verifier starts with

\[
\rho=\Pr(Q\mid K),
\]

Bayes' rule turns the likelihood ratio into posterior belief.

This is only a descriptive notion of evidence. It says that \(E\) favors \(Q\) under the verifier's current behavioral model; it does not yet say that \(E\) is hard for a person who knows the test to fake. That is where strategy enters.

## Incentives and strategies

An intruder crosses the yard and the guard does not raise the alarm. I would normally take the silence as evidence that the guard was not paying attention. But an attentive guard can deliberately stay silent; perhaps the guard is in it with the thieves.

Poor chess has the same problem. An attentive player can intentionally play badly. Someone who knows that yawning will be interpreted as evidence can yawn on purpose.

Two standards seem useful here. Evidence that survives every deliberate strategy available to the prover is **strategy-independent**. Evidence that works only because some strategies are implausible under the prover's incentives is **incentive-dependent**. Signal detection theory has a narrower version of this distinction in its separation of sensitivity from response criterion, but here the reporting strategy can depend on arbitrary goals, including cooperating with thieves.

For the moment, fix one model of the prover and let \(\Sigma\) be the strategies admitted by that model. The false-case success of an accepting event \(E\) is

\[
s(E)=
\sup_{\sigma\in\Sigma}
\Pr(E\mid \neg Q,\sigma,K).
\]

For a strategy-independent standard, \(\Sigma\) contains every deliberate strategy the prover could use. For an incentive-dependent one, \(\Sigma\) can be restricted according to what the prover is believed to be willing to do.

Fakeability can also be graded. A strategy can carry a resource vector \(R(\sigma)\): time, attention, memory, preparation, physical effort, coordination with other people, or whatever matters in the problem. Under resource budget \(b\),

\[
s_b(E)=
\sup_{\substack{\sigma\in\Sigma\\R(\sigma)\preceq b}}
\Pr(E\mid \neg Q,\sigma,K).
\]

Larger budgets admit more strategies, so \(s_b(E)\) can only grow. This does not decide whether \(E\) is evidence; the likelihood ratio already does that. The fakeability profile says how useful the evidence remains when somebody deliberately tries to imitate it. A yawn can be genuine evidence and still be very easy to fake.

Complements expose another asymmetry. Evidence for \(Q\) does not automatically turn into evidence for \(\neg Q\).

## Negative answers

The positive claim is

> I was solving arithmetic exercises in my head.

Completed exercises can remain afterward. Its complement is

> I was **not** solving arithmetic exercises in my head.

What corresponding object could remain? I do not see one. Somebody who did solve the exercises can usually behave afterward exactly like somebody who did not: stay silent, throw the answers away, or imitate whatever ordinary behavior the non-solver could produce.

\(\mathcal T(A)\) denotes the set of visible traces available after activity \(A\), allowing arbitrary later behavior. If

\[
\mathcal T(\neg A)\subseteq\mathcal T(A),
\]

then every trace available after non-\(A\) is also available after \(A\). No visible trace can directly certify \(\neg A\) against a person who is free to choose what to do afterward.

This is an obstruction to strategy-independent certification, not to every kind of evidence for a negative claim. Under an ordinary behavioral model, people who did not do \(A\) may still leave different traces. The point is that a strategic person who did \(A\) can imitate any trace in \(\mathcal T(\neg A)\).

There is still an indirect route to a negative claim. Evidence for another activity during the same interval can count against \(A\) if the two activities cannot coexist.

## Proving something incompatible instead

One workaround is to replace direct evidence for non-\(B\) with positive evidence for some activity \(A\) that cannot coexist with \(B\):

\[
\text{evidence for }A
\quad + \quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is the role chess was playing for the girlfriend. Chess was not the final fact she cared about. She wanted a positively checkable activity that would exclude some competing activity.

The strategy problem has not disappeared. The chess record still has to be evidence that he really played under her model of his possible strategies. What changes is the negative claim: instead of looking for a trace of non-flirting, she can look for evidence of chess plus a reason the two activities could not coexist.

That leaves one word doing a lot of work: **incompatible**.

## Cognitive resources

Making that word useful requires some model of what a person can do at the same time. A first approximation gives the mind a single time-varying capacity \(C(t)\): activities consume portions of one mental resource and cannot coexist when their combined demand is too large.

That is too simple for the chess example. Activities can share some bottlenecks but not others, and the same activity may have more than one implementation. One way to represent that is a time-varying network

\[
G_t=(U,\mathcal E,c_t),
\]

where the edges \(e\in\mathcal E\) are cognitive channels with capacities \(c_t(e)\). For an activity \(A\), \(\mathcal F_A\) is the family of resource-use patterns that count as implementations of \(A\). For example, the same task might have a verbal implementation and a visual one; two activities are compatible if some choice of implementations keeps every shared bottleneck within capacity.

I do not mean this as a claim about the brain's literal wiring. The network is a bookkeeping device for shared bottlenecks and alternative implementations. Wickens' Multiple Resource Theory supports the more modest empirical premise that interference depends on which cognitive resources tasks share; it does not imply this particular graph model.

For the chess argument to work, every sufficiently successful way of playing the relevant chess games has to collide with every relevant way of doing the activity the girlfriend wants to exclude.

Even a plausible resource model can describe the wrong person.

## Two ways to misjudge a person

The guard gives one kind of mistake. A verifier might believe that an attentive guard always signals an intrusion. If that belief is wrong, silence will be misread even if the guard's perceptual abilities are perfectly understood.

I have seen the other kind happen. I know somebody who regularly gives a mathematics lecture while writing a manuscript at the same time. Before seeing that, I would have put speaking through a mathematical argument and composing technical prose behind the same bottleneck. For him, that model is simply wrong.

Despite the different causes, both failures amount to a wrong model of the person. One misjudges what strategy the person will choose; the other misjudges what combinations of activity the person can perform.

Chess needs both pieces. The girlfriend needs some idea of what strategies her boyfriend would actually choose and some idea of which activities can coexist for him. A close friend may know both: whether somebody sandbags at chess or manufactures excuses, but also which supposedly overwhelming combinations of tasks are routine for this particular person.

## Uncertain models of the person

Both uncertainties fit into one prover model \(M\). It contains a strategy set \(\Sigma_M\), describing which strategies are admitted in the analysis, and a resource model \(G_M\), describing which activities the person can perform together. For a strategy-independent analysis, \(\Sigma_M\) can include every deliberate strategy available to that person; an incentive-dependent analysis can narrow it according to what their incentives make plausible. The verifier's background knowledge \(K\) induces a distribution

\[
\pi(M\mid K)
\]

over models that still look plausible for this person.

Evidence that a guard is cooperating with thieves changes the incentive part. Repeatedly watching somebody write a manuscript while giving a lecture changes the resource part. More knowledge can even weaken old evidence: learning that somebody can yawn on command makes the same yawn less informative about sheep counting, while learning that somebody can combine two supposedly incompatible activities weakens the exclusion argument.

If \(E\) is evidence that activity \(A\) happened, and \(I_M(A,B)\) is the statement that \(A\) and \(B\) cannot coexist for a person described by \(M\), the relevant probabilities are

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

The chess argument can fail because the record does not establish \(A\), because the verifier misjudged the boyfriend's capacity, or because the verifier misjudged which strategies his incentives make plausible. All three failures can live inside uncertainty about \(M\).

Population knowledge can supply a prior over models. Long familiarity, observation, and deliberate dual-task experiments can update it. Two verifiers can therefore see the same evidence and rationally reach different conclusions because they know different things about the person who produced it.

There is one important order of operations here. The verifier is uncertain which model \(M\) describes the person, but the person acts according to their own actual abilities and incentives. A strategic false case should therefore average over the verifier's uncertainty about \(M\), while allowing the best strategy available within each possible \(M\).

## Forgetting the network

The network itself is optional machinery. If a question only depends on which sets of activities can happen together, it is enough to keep the compatibility relation induced by the network. Call the family of compatible activity sets \(\mathcal C\).

If a set of activities is possible, every subset is possible too, so \(\mathcal C\) is downward closed. Pairwise conflicts are not always enough: if three activities each use \(0.4\) units of one resource of capacity \(1\), every pair can coexist but all three cannot.

The compatible sets, or equivalently their minimal incompatible sets, can therefore replace the detailed network when routing and timing do not matter. Under uncertainty, the verifier can have a distribution over those coarser objects instead.

## A minimal definition

The pieces above support a minimal definition. A sheep-counting protocol has a time interval \(I\), a prover, a verifier with background knowledge \(K\), an external input history \(X\), a hidden cognitive history \(H\), a visible trace \(T\), and a model space \(\mathcal M\). The target claim is

\[
Q(X,H).
\]

The verifier is

\[
V(X,T,K)\in\{0,1\},
\]

and each \(M\in\mathcal M\) determines a strategy set \(\Sigma_M\) and relevant resource costs. The verifier's knowledge induces \(\pi(M\mid K)\).

Under the intended true-case behavior \(\sigma^+\), completeness at least \(c\) means

\[
\Pr[V=1\mid Q,\sigma^+,K]\ge c.
\]

For the false case, the strategy-aware acceptance probability is

\[
\mathbb E_{M\sim\pi(\cdot\mid K)}
\left[
\sup_{\sigma\in\Sigma_M}
\Pr(V=1\mid \neg Q,M,\sigma,K)
\right].
\]

A \((c,s)\)-**sheep-counting protocol** has this quantity at most \(s\), with

\[
c\mathrel{\gt}s.
\]

The order matters. The verifier averages over uncertainty about what kind of person they face; within each possible model, the false prover gets the best strategy that model permits. A strategy-independent protocol lets \(\Sigma_M\) contain every deliberate strategy available to that person. An incentive-dependent protocol restricts \(\Sigma_M\) according to the verifier's model of what the person would actually be willing to do.

The inequality \(c\gt s\) is intentionally weak. It says only that acceptance favors the claimed history. The size of the gap, the posterior it produces, and the fakeability profile say whether the evidence is useful. Randomness in the environment and verifier, natural variation in human behavior, and uncertainty about the person's abilities or intentions can all enter these probabilities.

For a resource budget \(b\), the model-aware **fakeability profile** is

\[
s_K(b)=
\mathbb E_{M\sim\pi(\cdot\mid K)}
\left[
\sup_{\substack{\sigma\in\Sigma_M\\R_M(\sigma)\preceq b}}
\Pr(V=1\mid \neg Q,M,\sigma,K)
\right].
\]

The resource coordinates depend on the problem.

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

Two verifiers can therefore use the same trace and the same test and still end with different confidence because they began with different knowledge of the prover.

A **sheep-counting problem** is the problem of constructing such a protocol for a chosen cognitive predicate \(Q\): finding observations and a verifier for which true and false histories are usefully separated under an explicit model of what the verifier knows and what strategies are possible.

Arithmetic gives a strong-looking instance. Falling asleep while counting sheep gives a weak one. Mental effort itself is not part of the definition.

## Constructing good sheep-counting problems

The definition is deliberately permissive: weak evidence still counts as evidence. That leaves a second question: what makes some sheep-counting protocols much more useful than others?

Several constructions can create a useful separation between true and false histories. Natural side effects can do it; so can unpredictable interaction with the environment, incompatible activities, or traces that are difficult to manufacture without the claimed history.

The names **proof of work**, **proof of space**, and **proof of time** are analogies to computer-security terminology. Here they name the resource that creates the separation; these human protocols are not meant as literal instances of the corresponding cryptographic definitions.

### Proof of work

The factorization, empty-pentagon, and monotone-subsequence puzzles are attempts at human **proof of work** in this sense. Fresh public input forces some online mental computation, and a cheaper witness remains afterward.

Human computation has bounded channels. If an accepting trace after fresh input requires enough mental computation, a person who did not carry out the relevant activity may not have enough time or capacity to manufacture the same trace. Fresh input matters because it limits how much work can move into preparation: chess gets freshness from opponent moves, while the party puzzles get it from the current arrangement of the people.

Blum and Vempala split the relevant costs into

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** happens before the fresh part of the input arrives. **PROC** remains afterward. **VER** is the cost of checking the evidence.

PREP is not free for a person. Precomputing many answers, retaining them, recognizing which situation occurred, and finding the right stored answer all consume resources. Those costs belong in \(R(\sigma)\) just like online computation does.

The useful asymmetry is a lot of unavoidable \(\operatorname{PROC}\) and little \(\operatorname{VER}\), even after useful \(\operatorname{PREP}\). The factorization puzzle gets this shape most literally, but at a terrible human scale. The empty pentagon and monotone subsequence use smaller mental operations; what remains unknown is whether their search cost stays substantial after practice.

Computational effort is one coordinate of \(R(\sigma)\). A computational construction works when realistic bounds on that coordinate keep false-case success low while verification stays cheap.

### Proof of space

Work is not the only resource that can leave evidence. Guarding is hard to verify on a quiet night because alertness may leave no trace. A supervisor could instead show the guard a collection of fresh pictures and later ask which pictures they saw.

Successful recall is evidence that the pictures occupied memory. In the analogy above, this is a human **proof of space**: the resource is memory rather than computation.

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

In the same analogy, this is a human **proof of time**. It requires little computation and little storage. Its strength comes from sampling the interval: many unpredictable spot checks are evidence that the claimed cognitive state covered much of the time.

Mackworth's 1948 clock experiment found that detection declined during prolonged watches, so a real guard's alert fraction will not stay constant through the shift.

Proof of work and proof of time get their difficulty from different places. Proof of work forces enough computation. This proof of time can make each individual response almost free while requiring availability across the interval. The same construction could apply to sustained attention, monitoring, or another mental task that has to remain active over time.

A long sequential computation gives another possible meaning of proof of time, close to verifiable delay functions in cryptography. For humans, I currently understand that more as a special kind of proof of work: the difficulty comes from sequential computation. The random-time construction seems different because its difficulty comes from occupying time.

## Observation and intervention

Arithmetic exercises and guard probes suggest another distinction: sometimes the verifier changes the situation in order to create evidence.

A protocol is **observational** when it uses evidence that would have arisen anyway and **interventional** when the verifier introduces exercises, probes, restrictions, or other events that make the hidden state visible. Intervention is not a defect in this vocabulary. Fresh arithmetic exercises create useful evidence; random guard probes create moments at which vigilance becomes visible.

The complication is that an intervention can also change the property being investigated. Evidence collected under a modified situation does not automatically answer a counterfactual question about what would have happened without the modification.

## Does the theory explain anything?

The framework now puts several examples in one language. Whether it explains anything beyond that is less clear.

Two unifications are what make me take it seriously. Arithmetic answers and sleepy sheep become different strengths of the same probabilistic relation between hidden history and visible trace. Incentive mistakes and capacity mistakes become uncertainty about the same model of the person.

That still may be only description. The probabilities, strategy sets, resource model, and even the predicate \(Q\) are largely supplied to the framework. If they can be chosen freely enough, almost any social story can fit inside it.

What would make me more confident is if the definitions forced consequences or ruled out protocols that looked possible beforehand. I do not think that question is settled yet.

## Theorems

### Covering the challenge space moves work into PREP

The party puzzles suggest one place where the formalism does force something. Without a fresh challenge from the verifier, how much unpredictability has to come from the environment?

For this result, fix a prover model and write \(s(b)\) for its resource-bounded false-case success. A public environmental state \(Y\) becomes known during the interval, and the prover answers with a trace \(T\). The claim \(Q\) is that the required computation happened after \(Y\) became known. In the response-only case, candidate traces can be prepared beforehand and released later.

For each environmental state \(y\),

\[
A_y=\{t:V(y,t,K)=1\}
\]

is the set of traces accepted for that state. For a precomputed set \(S\),

\[
B(S)=\{y:S\cap A_y\ne\varnothing\}
\]

is the set of environmental states covered by the table.

**Claim.** If the prover can prepare and retain \(S\), recognize the observed state \(y\), and select an accepting trace from \(S\) whenever \(y\in B(S)\), all within resource budget \(b\), then

\[
s(b)\ge\Pr[Y\in B(S)].
\]

**Proof.** The false prover prepares \(S\) before the interval. When \(Y=y\) appears, an element

\[
t_y\in S\cap A_y
\]

is available whenever \(y\in B(S)\). The target online computation never happens, so \(Q\) is false, but the verifier accepts on every covered state. The false-case success probability is therefore at least \(\Pr[Y\in B(S)]\). \(\square\)

If \(S\) covers every environmental state, then \(s(b)=1\). The corresponding **cover number** is

\[
C=\min\{|S|:B(S)\text{ contains every possible }y\}.
\]

The cover number is combinatorial. It does not say that a human can exploit the cover cheaply. A table of a thousand answers may be useless if producing, remembering, recognizing, or searching it costs too much. The resource budget decides whether the precomputation attack is actually available.

A large environmental state space by itself buys nothing if one answer can cover many states.

Self-selected puzzles have the same issue. Choosing the puzzle after seeing the room can increase \(B(S)\) or shrink the needed cover, but searching through candidate puzzles and recognizing an easy one are part of the strategy cost. A thousand available puzzle families are not a thousand free chances.

The theorem applies to response-only proofs of online computation. Falling asleep after counting sheep is different because the visible side effect is caused by the activity rather than selected from a precomputed table.

### Evidence composes multiplicatively

Repeated observations can strengthen evidence, although for people the repetitions can also change one another.

For successive observations \(E_1,\ldots,E_n\), with \(E_{<i}\) denoting everything observed before round \(i\), the joint likelihood ratio is

\[
L(E_1,\ldots,E_n)
=
\prod_{i=1}^n
\frac{\Pr(E_i\mid E_{<i},Q,K)}
     {\Pr(E_i\mid E_{<i},\neg Q,K)}.
\]

**Proof.** The probability chain rule factors the numerator and denominator of

\[
\frac{\Pr(E_1,\ldots,E_n\mid Q,K)}
     {\Pr(E_1,\ldots,E_n\mid\neg Q,K)}.
\]

Dividing the two products term by term gives the expression above. \(\square\)

If every round contributes a conditional likelihood ratio of at least \(\lambda\gt1\), then

\[
L(E_1,\ldots,E_n)\ge\lambda^n.
\]

Independent repetition is the easy special case. For humans, earlier rounds can change later ones. A guard becomes tired. A puzzle solver learns the trick. A prover may infer what the verifier is testing. The later factors then change, so repetition need not amplify at the same rate.

The random-time guard construction gives a clean case: each hidden check independently lands in an alert period with probability \(f\), producing the \(f^n\) term above. The party puzzles can move in the opposite direction as practice improves the false-case strategy from one round to the next.

## Paradoxes

The formal picture can also produce sound conclusions that miss the broader social question.

### Proving that he did not flirt is not proving that he would not flirt

\(F\) is the claim that the boyfriend flirted during the interval, \(A\) the claim that he played the required chess, and \(E\) the chess record.

If the record perfectly establishes the chess activity,

\[
\Pr(A\mid E,K)=1,
\]

and the verifier is certain that the required chess and flirting cannot coexist for this boyfriend,

\[
\Pr(I_M(A,F)\mid E,K)=1,
\]

then

\[
\Pr(\neg F\mid E,K)
\ge
\Pr(A\wedge I_M(A,F)\mid E,K)
=1,
\]

so

\[
\Pr(\neg F\mid E,K)=1.
\]

Inside this model, the chess record perfectly establishes the historical claim that he did not flirt during the interval.

But the chess instruction is also an intervention: it removes some of the opportunity to flirt. The girlfriend may care about a different predicate. \(R\) means

> He would refrain from flirting if he had the opportunity.

If both \(R\) and \(\neg R\) boyfriends comply with the chess instruction in the same way, and chess removes the opportunity to flirt, then

\[
\Pr(E\mid R,K)
=
\Pr(E\mid\neg R,K),
\]

so

\[
L_R(E)=1.
\]

The same intervention can therefore give perfect evidence for “he did not flirt” and no evidence for “he would not flirt if free to do so.”

### A stronger guard test can make the guarding worse

\(Q\) means that the guard remains vigilant. A supervisor creates \(n\) test events that require a signal, and \(E_n\) means that the guard responds correctly to all \(n\).

The per-event response probabilities are

\[
\Pr(\text{correct response}\mid Q)=a,
\qquad
\Pr(\text{correct response}\mid\neg Q)=b,
\]

with \(a>b\). If responses are conditionally independent, then

\[
\Pr(E_n\mid Q)=a^n,
\qquad
\Pr(E_n\mid\neg Q)=b^n,
\]

so

\[
L(E_n)=
\left(\frac{a}{b}\right)^n.
\]

Because \(a/b\gt1\), more test events give stronger evidence for vigilance.

But every fake alarm or staged intrusion can also impose a cost \(d\) on the actual guarding by occupying the guard's attention, creating alarm fatigue, or distracting from a real event. After \(n\) tests the imposed cost is \(nd\).

More testing therefore improves the sheep-counting evidence while making the guard's actual job worse. The formal ranking and the social ranking move in opposite directions.

Neither paradox is an argument against intervention. They only show that moving from evidence about what happened under an intervention to a broader counterfactual claim requires another argument.

## What I would try next

The party puzzles are concrete enough to measure. I would start with the empty-pentagon and monotone-subsequence tasks at nearby sizes, reshuffling the same participants between rounds to measure solve time, errors, and learning. The same experiments can test the precomputation question: how expensive is it for a person to prepare, retain, recognize, and search enough answers or puzzle families to cover much of the environment?

The random-time guard construction gives a different experiment. Varying both the number and timing of hidden probes would show how well they distinguish sustained vigilance. Mackworth's results already suggest that vigilance changes through a long watch, so timing should matter rather than only the number of probes.

The person-model side is harder but more important for the incompatibility argument. I would measure the same dual-task combinations across people and after practice. That would show how stable the supposed bottlenecks are, how much population data says about one particular prover, and how quickly a sheep-counting protocol can become obsolete as the person changes.

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
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Heiko Harborth, [*Konvexe Fünfecke in ebenen Punktmengen*](https://doi.org/10.5169/seals-32945), *Elemente der Mathematik* 33(5), 116–118, 1978.
