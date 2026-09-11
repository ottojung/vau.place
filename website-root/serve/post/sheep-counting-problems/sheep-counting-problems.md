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

<!--
STRUCTURE INVARIANT FOR FUTURE EDITS:
examples -> evidence -> model components -> full person-model -> constructions -> theorems -> reflection -> paradoxes.
Do not place a theorem or proof above "The full person-model". Sections before it may motivate or define components, but the final model must exist before results are claimed from it.
-->

## What kind of theory is this?

These examples barely look related: arithmetic answers, yawning, a guard's reaction, chess games, a geometric witness. The reason to group them is one common question: can something visible distinguish one hidden cognitive history from another?

Sheep counting rules out a certificate-only theory. A yawn is not a proof object, but it can still make one hidden history more plausible than another.

There seem to be two parts to the problem. One is statistical: how different are the visible traces under the two histories? The other is structural: what makes some traces impossible, expensive, or unlikely under one of them?

## Evidence and distance

For the moment, suppose the behaviour model is already fixed. Later I will say what that model contains and where these distributions come from.

Let \(Q\) be a claim about a hidden cognitive history and let \(T\) be the visible trace. The two sides induce trace distributions

\[
P_Q,
\qquad
P_{\neg Q}.
\]

A visible event \(E\) favors \(Q\) when

\[
\Pr(E\mid Q)>\Pr(E\mid\neg Q).
\]

The likelihood ratio

\[
L(E)=
\frac{\Pr(E\mid Q)}{\Pr(E\mid\neg Q)}
\]

measures the strength of that particular observation.

A useful global measure is total-variation distance:

\[
d_{\mathrm{TV}}(P_Q,P_{\neg Q})
=
\sup_E
\left|
P_Q(E)-P_{\neg Q}(E)
\right|.
\]

It is the largest probability gap obtainable from any event in the trace. A particular event gives a lower bound on that distance. This is the sense in which arithmetic and sleepy sheep can differ in strength while still being the same kind of evidence: their visible traces are distributed differently depending on what happened in the person's head.

The distance does not explain why the distributions differ. For that, the model needs some account of behaviour and cognitive capacity.

## Incentives and strategies

An intruder crosses the yard and the guard does not raise the alarm. Silence may be evidence of inattention, but an attentive guard can deliberately stay silent. Poor chess has the same problem: an attentive player can intentionally play badly. Someone who knows that yawning will be interpreted as evidence can yawn on purpose.

Evidence that survives every deliberate strategy under consideration is **strategy-independent**. Evidence that works only because some strategies are implausible under the person's incentives is **incentive-dependent**.

The distinction changes which trace distributions should be compared. A strategy-independent analysis has to admit a much larger false-case strategy class. An incentive-dependent analysis may rule out behaviours that are possible but implausible given what the person wants.

Signal detection theory has a narrower version of this distinction in its separation of sensitivity from response criterion. Here the strategy can depend on arbitrary goals, including cooperating with thieves.

## Negative answers

The positive claim

> I was solving arithmetic exercises in my head.

can leave completed exercises. Its complement

> I was **not** solving arithmetic exercises in my head.

has a different problem. Somebody who did solve the exercises can often behave afterward exactly like somebody who did not.

If the two histories can generate the same visible behaviour, direct evidence for the negative claim can disappear. An escape needs some trace that becomes unavailable when the unwanted activity happened.

One way to arrange that is to demonstrate another activity that competed for something the unwanted activity would have needed.

## Proving something incompatible instead

Suppose the claim is that activity \(B\) did not happen. Evidence for another activity \(A\) can count against \(B\) when the two could not have occurred together:

\[
\text{evidence for }A
\quad+\quad
A\text{ incompatible with }B
\quad\Longrightarrow\quad
\text{evidence against }B.
\]

This is the role chess was playing for the girlfriend. Chess was not the final fact she cared about. She wanted a positively checkable activity that would leave too little cognitive capacity for some competing activity.

A yes-or-no compatibility relation says that two activities do not fit together, but not why. To construct such incompatibilities rather than merely assume them, I need a quantitative model.

## Cognitive flow networks

Take a time interval \(I\) and a directed resource network

\[
N=(G,c),
\qquad
G=(V,E),
\]

where each channel \(e\in E\) has a time-dependent capacity \(c_e(t)\).

An implementation of an activity assigns load to these channels over time, subject to whatever routing, precedence, release-time, memory, and response constraints define that activity. The same activity can have several implementations that use different parts of the network.

The network is not meant as literal neural wiring. It is a resource model. Channels can stand for whatever bottlenecks turn out to matter: verbal processing, visual attention, working memory, response selection, or something more specific. Wickens' Multiple Resource Theory gives empirical reason to expect interference to depend on which resources tasks share; the network is one mathematical way to express that.

Time is part of the model rather than another scalar resource. In discrete time, the same network can be expanded into layers, one copy for each time step. Processing edges live in or between layers. **Holdover edges** from one layer to the next can carry state forward and therefore model storage. Fresh inputs, release times, deadlines, and retained information become constraints on which temporal paths are available. This is standard dynamic-flow machinery; time-expanded networks go back to Ford and Fulkerson.

The model may also contain genuinely joint implementations. Two activities need not always consume the sum of their separate costs: one cognitive operation might contribute to both. Whenever I add resource lower bounds later, I will therefore state the extra separability assumption that makes addition valid.

If all quantitative information is forgotten and we remember only which sets of activities have some joint feasible implementation, those feasible sets are downward closed: if several activities can coexist, any subset can coexist. Mathematically, that family is an abstract simplicial complex. I only need this as a concise meaning of **compatibility**. The flow network contains the information about how much capacity is available, where, and when.

## Two ways to misjudge a person

The guard gives one kind of mistake. A verifier may believe that an attentive guard always signals an intrusion. If that belief is wrong, the behavioural model is wrong even if the capacity model is perfect.

I have seen another kind. I know somebody who regularly gives a mathematics lecture while writing a manuscript at the same time. Before seeing that, I would have put speaking through a mathematical argument and composing technical prose behind the same bottleneck. For him, that resource model is simply wrong.

The first mistake is about strategy or behaviour. The second is about capacity. A useful person-model has to contain both.

More knowledge can even weaken old evidence. Learning that somebody can yawn on command changes the possible trace distributions for sheep counting. Learning that somebody can route two activities through different cognitive channels can destroy a bottleneck argument that previously looked convincing.

## The full person-model

A sheep-counting protocol runs over a time interval \(I\). It has an external input history \(X\), a hidden cognitive history \(H\), a target predicate

\[
Q(X,H),
\]

and a visible trace \(T\).

A **person-model** \(M\) supplies four things.

First, it contains a dynamic resource network \(N_M\) with capacities over time.

Second, it contains the valid implementations of activities and combinations of activities. These implementation families say what loads, temporal orderings, storage paths, and responses count as actually carrying out the activity. Joint implementations are allowed, so resource sharing between activities can be represented rather than silently double-counted.

Third, it contains a strategy class \(\Sigma_M\). A strategy says how the person chooses actions and implementations as the external history is revealed. In particular, it cannot react to a fresh challenge before that challenge arrives.

Fourth, it contains an observation law: given the external history, hidden history, and chosen strategy, it specifies a probability distribution over the visible trace. This is where ordinary human variability, mistakes, noisy responses, and accidental side effects such as yawning live.

The verifier rarely knows \(M\) exactly. Background knowledge \(K\) can instead induce a distribution

\[
\pi(M\mid K)
\]

over plausible person-models. For a Bayesian analysis, mixing the model-specific trace laws over \(\pi\) gives distributions such as \(P_Q\) and \(P_{\neg Q}\). A more adversarial analysis can take worst cases over the models and strategies it wants to defend against.

This finally explains the temporary distributions used earlier. They are outputs of the full person-model together with the protocol, the verifier's knowledge, and the chosen standard for strategy.

A **sheep-counting problem** is the problem of arranging the external input, intervention, and visible trace so that the relevant hidden histories become usefully separated under a defensible person-model.

Mental effort itself is not the principle. Bounded processing, storage, and temporal availability are mechanisms that can create separation.

## Constructing good sheep-counting problems

The full model can express the three resource constructions that appeared earlier.

### Proof of work

The factorization, empty-pentagon, and monotone-subsequence puzzles are attempts at human **proof of work**. A fresh input arrives at some time \(t_0\), and an acceptable response is due by \(t_1\). Any computation that genuinely depends on the fresh input has to fit through processing channels between those times.

Blum and Vempala split the relevant costs into

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

**PREP** happens before the fresh part of the input arrives. **PROC** remains afterward. **VER** is the cost of checking the evidence.

In the flow model, PREP can help only through state that was prepared beforehand, retained through storage edges, and matched to the fresh input later. PROC is the fresh-dependent load that still has to cross processing channels before the deadline. A task is useful as proof of work when good performance certifies a substantial lower bound on that post-challenge load while verification remains cheap.

This is an assumption about the task model, not something network notation proves for free. The hard empirical or complexity-theoretic part is obtaining a believable lower bound on how much processing good performance requires.

### Proof of space

The same time-expanded network can express **proof of space** without adding a new resource formalism.

A holdover edge

\[
(v,t)\longrightarrow(v,t+1)
\]

represents state surviving from one time layer to the next. Its capacity represents how much state can be retained through that part of the model.

Suppose fresh, unpredictable material is shown at time \(t_0\), disappears, and must be recalled at \(t_1\). If the material cannot be reconstructed from some later source, a valid implementation has to carry enough information about it across the temporal cuts between \(t_0\) and \(t_1\). Successful recall can therefore certify load on storage edges just as successful computation can certify load on processing edges.

A competing memory activity can then be ruled out by the same kind of capacity argument used for work, provided the two storage demands are separable on a shared bottleneck. The difficult empirical question is again the lower bound: how much retained state does a given recall performance actually certify for this person?

### Proof of time

**Proof of time** uses the temporal coordinate differently. It does not need a large amount of computation or storage. Instead, a claimed state has to be available at many possible times.

A guard who must respond immediately to a probe has to have a response-capable implementation at the layer where that probe arrives. The external input history can contain probe times chosen randomly and hidden until they occur. Because the strategy is causal, the guard cannot move readiness backward in time after seeing the probe.

If a non-vigilant strategy is response-capable during only a fraction \(f\) of the interval, a uniformly random probe hits a response-capable time with probability at most \(f\). Independent hidden probes sample several time layers. The resulting trace distribution therefore reveals temporal coverage rather than accumulated work.

So all three constructions fit the same model, but in different ways:

- proof of work uses **processing throughput after release and before a deadline**;
- proof of space uses **state carried through holdover edges across time**;
- proof of time uses **availability across time layers, sampled by unpredictable inputs**.

A long sequential computation gives another possible meaning of proof of time, close to verifiable delay functions in cryptography. In this model I would still classify that mainly as proof of work: its difficulty comes from sequential processing. The random-probe construction is different because its strength comes from coverage of the time axis.

## Observation and intervention

Arithmetic exercises, scalable chess, memory challenges, and guard probes all create evidence by changing the situation.

A protocol is **observational** when it uses evidence that would have arisen anyway and **interventional** when the verifier introduces exercises, probes, restrictions, or other events that make the hidden state easier to distinguish.

Intervention is not a defect. The constructions above deliberately create fresh demands on parts of the person's model. The complication is that an intervention can also change the property being investigated. Evidence about what happened under the modified situation does not automatically answer a counterfactual question about what would have happened without it.

<!-- THEOREM BOUNDARY: the full person-model is established above. Keep theorem/proof statements below this point. -->

## Theorems

### A scalable challenge can prove a negative

The flow model gives a direct way to manufacture negative evidence.

Fix a person-model \(M\), an interval \(I\), and a bottleneck region

\[
D\subseteq E_M\times I.
\]

Its total capacity is

\[
C_M(D)
=
\int_I
\sum_{e:(e,t)\in D}
c^M_e(t)\,dt.
\]

For any implementation \(f\), define its load on the same region by

\[
\ell_D(f)
=
\int_I
\sum_{e:(e,t)\in D}
f_e(t)\,dt.
\]

In discrete time, these integrals are sums.

Let \(B\) be the activity we want to rule out. Its unavoidable individual load on \(D\) is

\[
b_M(B;D)
=
\inf_{g\in\mathcal F_M(B)}
\ell_D(g).
\]

Now take a scalable chess-like challenge \(A_\lambda\), where \(\lambda\) controls difficulty. A **pass** means performance at least \(\tau\). Among individually valid passing implementations, define

\[
w_M(\lambda,\tau;D)
=
\inf_{f\in\mathcal F_M(A_\lambda,\tau)}
\ell_D(f).
\]

The infima handle alternative routes through the network. One more assumption is needed before the two lower bounds can be added. Say that the two activities are **separable on \(D\)** if every joint implementation that both passes the challenge and performs \(B\) has load on \(D\) at least

\[
w_M(\lambda,\tau;D)+b_M(B;D).
\]

This excludes the case where a single piece of cognitive work simultaneously satisfies both demands and would otherwise be double-counted.

**Saturation theorem.** If the challenge is feasible by itself, the two activities are separable on \(D\), and

\[
w_M(\lambda,\tau;D)
+
b_M(B;D)
>
C_M(D),
\]

then passing the challenge and performing \(B\) during the interval are incompatible.

**Proof.** Every feasible implementation has total load on \(D\) at most \(C_M(D)\). By separability, every joint implementation of a pass and \(B\) would have load at least \(w_M+b_M\), which is larger than that capacity. Therefore no such joint implementation exists. \(\square\)

Scalability now has a precise use. Suppose \(b_M(B;D)>0\), separability continues to hold as difficulty changes, and the challenge family can be tuned so that its certified load approaches \(C_M(D)\) from below while the challenge remains feasible alone. Then some difficulty satisfies

\[
C_M(D)-b_M(B;D)
<
w_M(\lambda,\tau;D)
\le
C_M(D),
\]

so passing at that difficulty proves \(B\) did not occur in this model.

This is what the girlfriend needs from a scalable chess-like game. The game does not have to be intrinsically related to flirting. It has to be tunable until good performance nearly saturates a bottleneck that flirting would also necessarily use, without allowing the two activities to share the counted load.

### Uncertain person-models turn proof into distance

The girlfriend does not know the person-model exactly. Let

\[
M\sim\pi(\cdot\mid B,K)
\]

represent her uncertainty conditional on the hypothesis that \(B\) occurred. If she treats the model as a stable trait independent of \(B\), this is simply her ordinary posterior over models.

For a chosen \(\lambda\) and \(\tau\), let \(G_{\lambda,\tau}\) be the models for which all assumptions of the saturation theorem hold for some relevant bottleneck. Write

\[
\varepsilon_{\lambda,\tau}
=
\Pr(M\notin G_{\lambda,\tau}\mid B,K).
\]

In the ideal capacity model, a pass is impossible together with \(B\) on every model in \(G_{\lambda,\tau}\). Giving every remaining model the maximum possible false-pass probability yields

\[
\Pr(\text{pass}\mid B,K)
\le
\varepsilon_{\lambda,\tau}.
\]

Suppose calibration also gives

\[
\Pr(\text{pass}\mid\neg B,K)
\ge
\alpha_{\lambda,\tau}.
\]

Let \(P_B\) and \(P_{\neg B}\) be the full visible-trace distributions under the two histories. Since **pass** is one event in that trace,

\[
\boxed{
 d_{\mathrm{TV}}(P_B,P_{\neg B})
\ge
\alpha_{\lambda,\tau}
-
\varepsilon_{\lambda,\tau}
}
\]

whenever the right-hand side is positive.

This is the connection between the resource proof and statistical evidence. The capacity model makes passing impossible on much of the model space; that impossibility forces the two trace laws apart.

The same event gives a likelihood-ratio bound. If \(\varepsilon_{\lambda,\tau}>0\), then a pass favors non-\(B\) over \(B\) by at least

\[
\frac{\Pr(\text{pass}\mid\neg B,K)}
     {\Pr(\text{pass}\mid B,K)}
\ge
\frac{\alpha_{\lambda,\tau}}
     {\varepsilon_{\lambda,\tau}}.
\]

If the prior probability of \(B\) was \(p\), Bayes' rule gives

\[
\boxed{
\Pr(B\mid\text{pass},K)
\le
\frac{p\,\varepsilon_{\lambda,\tau}}
     {p\,\varepsilon_{\lambda,\tau}
      +(1-p)\alpha_{\lambda,\tau}}
}.
\]

A noisy model changes only the false-pass bound. If on the models where the bottleneck argument applies a pass can still occur together with \(B\) with probability at most \(\eta\), then

\[
\beta
=
(1-\varepsilon_{\lambda,\tau})\eta
+
\varepsilon_{\lambda,\tau}
\]

bounds \(\Pr(\text{pass}\mid B,K)\), so

\[
d_{\mathrm{TV}}(P_B,P_{\neg B})
\ge
\alpha_{\lambda,\tau}-\beta.
\]

The hardest challenge need not be the best one. Raising \(\lambda\) can make saturation hold on more plausible models, decreasing the false-pass bound, while also lowering ordinary solo performance. The useful difficulty maximizes the resulting separation or likelihood ratio, not raw load.

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

The ordinary cover number is

\[
\kappa
=
\min\{k:\alpha(k)=1\}.
\]

The function \(F\) is monotone and submodular. Adding one more prepared response can only help, but the set of new states it covers can only shrink as the table grows.

Human cost is separate. A table with excellent \(\alpha(k)\) may still be unusable if producing, retaining, recognizing, or searching \(k\) responses is too expensive. Those operations are represented by implementations in the full person-model rather than assumed free.

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

This resembles classical time-memory tradeoffs in cryptanalysis, such as Hellman's: expensive precomputation and stored tables can buy cheaper online search. The cover profile here is a different object, built from which prepared human responses cover which environmental states.

A thousand available puzzle families are not a thousand free chances. Searching among them and recognizing an easy one still has a human cost even when the combinatorial coverage is large.

### Random probes certify temporal coverage

The proof-of-time construction also becomes a statement inside the full model.

Fix an allowed false-case strategy. Let \(R\subseteq I\) be the set of times at which that strategy can produce the required immediate response, and suppose

\[
\frac{|R|}{|I|}\le f.
\]

If the verifier chooses \(n\) probe times independently and uniformly from \(I\), keeps each probe hidden until it occurs, and accepts only if every probe receives the required immediate response, then

\[
\Pr(\text{pass all }n\text{ probes})
\le
f^n.
\]

The proof is simply that each independent probe lands in \(R\) with probability at most \(f\). The causal strategy condition matters: future probe times are not available to the person in advance.

Thus proof of time is expressible in the same model, but its mechanism is different from saturation. It samples the support of a state over the time axis rather than forcing a large integrated load through one bottleneck.

### Repetition can survive an adaptive prover

The previous argument assumes a fixed response-capable set. A more general repetition result allows the person to adapt after every round.

In round \(i\), let \(A_i\) be the event that the verifier accepts that round, and let \(H_{<i}\) contain the complete history visible before it: previous challenges, responses, outcomes, and anything else the strategy can use.

If, after every accepted history \(h_{<i}\), every allowed false-case continuation satisfies

\[
\Pr(A_i\mid H_{<i}=h_{<i},\neg Q,K)\le s_i,
\]

then every adaptive false strategy satisfies

\[
\Pr(A_1\cap\cdots\cap A_n\mid\neg Q,K)
\le
\prod_{i=1}^n s_i.
\]

The proof is conditional multiplication. Given that the previous rounds were accepted, the probability of accepting round \(i\) is an average over the possible visible histories, and every term is at most \(s_i\).

Independence is unnecessary. Fatigue, practice, and learning the verifier's strategy matter because they change the later conditional bounds. The random-time guard result is the clean special case with every \(s_i=f\).

## Does the theory explain anything?

The framework now has a clearer division of labour. Trace distributions say how much evidence is visible. The person-model explains where those distributions come from. Dynamic capacity can make some joint histories infeasible; storage edges can force information to persist; random probes can sample temporal coverage.

The saturation theorem is the strongest reason I currently have for taking the theory seriously. It does not merely label two activities incompatible after the fact. Under explicit assumptions it tells a verifier how a scalable challenge can create a negative proof, and under uncertainty it turns that proof into a quantitative lower bound on statistical distance.

Proof of work, proof of space, and proof of time are all expressible, but they are not the same mechanism. Work is throughput, space is retained state, and time is temporal availability. The common output is separation between visible trace distributions.

The empirical burden remains large. The network structure, capacities, activity implementations, strategy classes, observation laws, and performance calibration all have to come from assumptions or measurements about real people. If those objects are freely invented, the mathematics can explain anything. The interesting question is whether useful lower bounds and stable structures can actually be learned.

## Paradoxes

The formal picture can still produce sound conclusions that miss the broader social question.

### Proving that he did not flirt is not proving that he would not flirt

Let \(B\) be flirting during the interval. Suppose the girlfriend chooses a scalable chess challenge for which the saturation theorem applies on much of her posterior over the boyfriend's person-model. Passing can then give strong evidence for the historical claim

\[
\neg B.
\]

But the chess instruction is also an intervention: it removes some of the opportunity to flirt. The girlfriend may care about a different predicate. Let \(R\) mean

> He would refrain from flirting if he had the opportunity.

If both \(R\) and \(\neg R\) produce the same chess-trace distribution under the intervention, then

\[
d_{\mathrm{TV}}(P_R,P_{\neg R})=0.
\]

The same challenge can therefore give strong evidence about what happened during the constrained interval and no evidence at all about what would happen without the constraint.

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

where \(a>b\). More test events make the two response-vector distributions increasingly distinguishable.

But every fake alarm or staged intrusion can also impose a cost on the actual guarding by occupying attention, creating alarm fatigue, or distracting from a real event.

More testing can therefore improve the sheep-counting evidence while making the guard's actual job worse. The statistical ranking and the social ranking move in opposite directions.

Neither paradox is an argument against intervention. They only show that evidence for one predicate under one experiment does not automatically answer a different question.

## What I would try next

The scalable-challenge theorem suggests a direct experiment. A chess-like task could be given at several difficulty levels while a second task competes for a suspected shared bottleneck. Solo performance would estimate how often the challenge is passed without the competing activity. Dual-task performance would test the separability and saturation assumptions rather than merely assuming them.

The proof-of-space side suggests a similar experiment with fresh material that has to be retained across a delay while a competing memory task varies. The question would be whether later recall supplies a stable lower bound on load through some storage bottleneck.

The random-time guard construction tests the temporal side. Varying the number and timing of hidden probes would show how well they distinguish sustained availability. Mackworth's results already suggest that vigilance changes through a long watch, so timing should matter rather than only the number of probes.

The party puzzles give a different experiment. Repeating the empty-pentagon and monotone-subsequence tasks at nearby sizes could estimate how their post-challenge processing demand changes with problem size, practice, and preparation. The precomputation profile \(\alpha(k)\) could be measured separately by letting participants prepare increasing numbers of answers or puzzle families.

The original question was simple:

> What are you thinking about?

A hidden cognitive history can leak into the visible world through answers, side effects, reactions to fresh events, short witnesses, or responses spread across time. Computational hardness is one way to make such evidence difficult to imitate, but it is not the principle underneath all of them.

What is common to all of them is not work. It is separation: something visible is distributed differently depending on what happened in the person's head.

## References

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204).
- Wilson P. Tanner Jr. and John A. Swets, [*A Decision-Making Theory of Visual Detection*](https://doi.org/10.1037/h0058700), *Psychological Review* 61(6), 401–409, 1954.
- L. R. Ford Jr. and D. R. Fulkerson, [*Constructing Maximal Dynamic Flows from Static Flows*](https://doi.org/10.1287/opre.6.3.419), *Operations Research* 6(3), 419–433, 1958.
- N. H. Mackworth, [*The Breakdown of Vigilance during Prolonged Visual Search*](https://doi.org/10.1080/17470214808416738), *Quarterly Journal of Experimental Psychology* 1(1), 6–21, 1948.
- Christopher D. Wickens, [*Multiple Resources and Mental Workload*](https://doi.org/10.1518/001872008X288394), *Human Factors* 50(3), 449–455, 2008.
- Giuseppe Ateniese, Ilario Bonacina, Antonio Faonio, and Nicola Galesi, [*Proofs of Space: When Space Is of the Essence*](https://eprint.iacr.org/2013/805).
- Dan Boneh, Joseph Bonneau, Benedikt Bünz, and Ben Fisch, [*Verifiable Delay Functions*](https://eprint.iacr.org/2018/601).
- Martin E. Hellman, [*A Cryptanalytic Time-Memory Trade-Off*](https://doi.org/10.1109/TIT.1980.1056220), *IEEE Transactions on Information Theory* 26(4), 401–406, 1980.
- [49 CFR § 238.237, *Automated monitoring*](https://www.law.cornell.edu/cfr/text/49/238.237), requiring alerter or deadman controls on covered passenger locomotives.
- Paul Erdős and George Szekeres, the monotone subsequence theorem.
- Heiko Harborth, [*Konvexe Fünfecke in ebenen Punktmengen*](https://doi.org/10.5169/seals-32945), *Elemente der Mathematik* 33(5), 116–118, 1978.
