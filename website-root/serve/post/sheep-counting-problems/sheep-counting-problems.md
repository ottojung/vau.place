# Sheep-Counting Problems for Computer Science

Suppose I tell you:

> Ten minutes ago, I was thinking about birds.

Can I prove it?

Probably not.

I can tell you what kind of birds I had in mind. I can produce a suspicious amount of ornithological detail. I can insist that I remember the thought very clearly. But all of those things are compatible with my having started to think about birds only after you asked me the question.

Now suppose I tell you something slightly different:

> Ten minutes ago, I was counting sheep.

Perhaps you saw me yawn. Perhaps I eventually fell asleep. That is not proof that I counted sheep, but at least the hidden mental activity now has some plausible connection to an observable consequence.

Or suppose you handed me a sheet containing fifty arithmetic exercises ten minutes ago, and I now hand it back with forty-nine correct answers. In that case the situation is much easier. The answers are evidence that some relevant computation happened.

These examples all ask versions of the same strange question:

**What can externally observable evidence tell us about computation that happened inside a human mind?**

I will call questions of this kind **sheep-counting problems**.

The name is intentionally unserious. Counting sheep is a stereotypical private mental process: someone can lie still, produce almost no external trace, and later claim to have counted hundreds of imaginary animals. But sheep-counting problems quickly lead to recognizably computer-scientific questions: witnesses, verification, adversarial strategies, randomness, preprocessing, complexity, resource contention, and even something resembling proof of work.

The interesting cases are not limited to actual sheep, and they are not limited to tasks assigned by somebody else. A person might prove that they were solving a problem nobody asked them to solve. They might use random structure supplied by the room around them. They might try to prove that they *were not* thinking about something by proving that their mind was occupied by an incompatible task.

The point of this note is to sketch a model broad enough to talk about all of these cases.

## The boring case: assigned arithmetic

Start with an easy example.

I give you the exercise

```text
137 × 284 = ?
```

You give me the correct answer.

This is already a sheep-counting problem. I wanted evidence that you performed some mental computation related to multiplication, and your answer is evidence of that computation.

It is not perfect evidence. Perhaps you already knew the answer. Perhaps you used a shortcut I did not anticipate. Perhaps you had secretly computed every three-digit multiplication table in advance. But if I choose a sufficiently fresh arithmetic problem from a sufficiently large space, these possibilities become less interesting.

The basic shape is familiar from computer science:

```text
input x  --->  expensive-ish computation  --->  witness w

                 verifier checks R(x, w)
```

The important feature is the asymmetry. Producing a correct answer may take appreciable mental work; checking it may take much less work, especially if the verifier is allowed a calculator or already knows the answer.

This case is boring because the verifier controls almost everything. The verifier chooses the problem and gives the prover a precise input.

The more interesting cases begin when that stops being true.

## The output problem

Consider literal sheep counting.

I tell you to lie down, close your eyes, and count imaginary sheep for ten minutes. Ten minutes later you announce:

> I reached 843.

What exactly does the number 843 prove?

Very little. You could have chosen it at the end. You could have counted for thirty seconds, got bored, and extrapolated. You could have thought about birds for nine minutes and fifty-nine seconds.

The claimed mental process has an output, but the output is only weakly coupled to the process.

This is the first important lesson:

> **Having an output is not enough. The output must be difficult to produce without performing the hidden activity we want to certify.**

Falling asleep is a different kind of output. If counting sheep actually increases the probability of falling asleep, then sleep is statistical evidence in favor of the claim. Yawning might be weaker evidence of the same kind.

But this is not a mathematical certificate. People fall asleep for many reasons. Some people count sheep without falling asleep. The two relevant output distributions overlap substantially.

A useful sheep-counting problem therefore comes with a question about **output separation**. If \(A\) is the claimed cognitive activity and \(T\) is the observable transcript, how different are the distributions

\[
P(T\mid A)
\quad\text{and}\quad
P(T\mid \neg A)?
\]

If they are identical, verification is impossible from the transcript alone. If they overlap heavily, evidence is weak. If valid transcripts are difficult or impossible to obtain without doing \(A\), we have something much closer to a proof.

This formulation is deliberately agnostic about what happens inside the head. It talks only about the relation between hidden execution and observable consequences.

## The sleeping guard

Now imagine a night guard.

The guard is supposed to remain awake and attentive for an entire shift. Nothing happens. In the morning the building is intact.

Did the guard actually keep watch?

The final state of the building tells us almost nothing. A perfectly attentive guard and a sleeping guard can produce the same uneventful night.

This is a particularly clean sheep-counting problem because successful work may produce no natural output at all. The guard's job is to be ready for an event that may never occur.

If an incident does occur and the guard misses it, we may be tempted to treat that as a certificate that the guard was inattentive.

But this introduces a subtle problem.

An attentive guard can deliberately ignore the incident.

So the inference

```text
missed incident  =>  was not paying attention
```

is not strategy-independent. It relies on an assumption about the guard's incentives: that an attentive guard *wants* to respond correctly.

This distinction matters enough to deserve explicit terminology.

### Strategy-independent certificates

A certificate is **strategy-independent** if its evidentiary guarantee holds even when the prover deliberately chooses the most misleading allowed strategy.

A correct arithmetic answer can have this character: if producing the answer without doing the relevant work is genuinely hard, then wanting to deceive the verifier does not help very much.

### Incentive-dependent behavioral evidence

Evidence is **incentive-dependent** if the inference assumes that the prover is trying to behave in some expected way.

A missed incident is evidence that a normal, cooperative guard was inattentive. It is not strong evidence against a guard who is actively trying to simulate inattentiveness.

The same problem appears in many proposed tests of attention. Bad performance does not prove distraction if an attentive person can intentionally perform badly.

This is not merely a philosophical nuisance. It changes what kind of theorem we can hope to prove.

## The babysitter

The babysitter is a friendlier version of the same problem.

A babysitter is left with a sleeping child. The parent comes home three hours later. The child is still asleep and everything is fine.

Was the babysitter attentive the whole time?

Again, success may leave almost no trace. The child might simply have had a peaceful evening.

Suppose instead the parent returns to find the child crying and in trouble. That feels like evidence that the babysitter was not paying attention.

But the same strategic issue appears. An attentive but malicious babysitter can choose not to help. The observable failure is evidence about the babysitter only relative to assumptions about what an attentive babysitter is trying to accomplish.

The guard and babysitter therefore teach two separate lessons:

1. some valuable cognitive activities have no naturally rich output when everything goes well;
2. behavioral failure is often not a strategy-independent certificate of absent cognition.

The second point becomes important when we try to construct proofs of *negative* mental claims.

## Can you prove that you were *not* thinking about something?

Suppose a person wants to prove:

> During the last ten minutes, I was not thinking about birds.

At first this looks hopeless. Someone who did think about birds can simply behave afterward like someone who did not.

This suggests a simple monotonicity principle.

Let \(\mathcal T(A)\) be the set of external transcripts that a person can produce after performing cognitive activity \(A\), allowing arbitrary later strategy.

If performing \(A\) only gives the person more internal information or capability, then it is natural to expect

\[
\mathcal T(\neg A) \subseteq \mathcal T(A).
\]

The person who thought about birds can imitate the later behavior of a person who did not think about birds.

If this inclusion holds, then no transcript can be a strategy-independent certificate of \(\neg A\): every transcript available to the non-bird-thinker is also available to the bird-thinker.

This is a tiny impossibility result, but it is useful. It explains why "prove you did not know", "prove you did not notice", and "prove you were not thinking about X" are fundamentally difficult when the hidden activity merely adds capability.

Cryptography runs into a related paradox when it asks for proofs of ignorance: a knowledgeable party can generally pretend not to know. Meaningful cryptographic constructions require extra structure in the way instances are generated or in the protocol itself.

But mental negative proofs are not always hopeless. There is another route.

## The jealous girlfriend and the chess game

Imagine a jealous girlfriend leaving her boyfriend at a party.

She does not merely want evidence that he was awake. She wants evidence that he was not devoting serious attention to somebody else while she was away.

So she gives him an unusual instruction: play chess continuously.

When she returns, she examines the game. Suppose she knows his ordinary performance distribution well enough that she can ask whether the moves are statistically consistent with his normal serious play. In the most literal version of the story, she checks whether his score, move quality, or blunder rate falls inside an acceptable p-value relative to his baseline.

Poor chess would not prove distraction. He could intentionally play badly.

But *good* chess is different. If producing a long sequence of strong responses to fresh opponent moves genuinely requires substantial chess cognition, then the transcript may positively certify that the chess computation happened.

Why would that prove anything negative?

Because the girlfriend's real claim is not

> he was thinking about chess.

It is

> he was not using the same scarce cognitive machinery for the competing activity I care about.

This gives a general construction:

\[
\text{positive certificate for }A
\quad + \quad
A\text{ excludes }B
\quad \Longrightarrow \quad
\text{negative certificate for }B.
\]

This is the mental equivalent of proving that somebody could not have been in one place because they were demonstrably occupied somewhere incompatible.

The interesting question is therefore not only whether cognition has bounded capacity. We need a model of **which cognitive processes compete for which resources**.

That leads to a network.

## A flow-network model of cognition

A single scalar "attention budget" is too crude.

Some tasks interfere heavily even though neither seems globally demanding. Silently reciting one sentence can interfere with silently reciting another. Two visual tasks can collide while an unrelated verbal task remains possible. Conversely, some apparently demanding tasks may coexist because they use substantially different machinery.

A more general abstraction is a time-varying capacitated network

\[
G_t = (V,E,c_t).
\]

The intended interpretation is deliberately abstract:

- vertices represent cognitive states, processors, stores, or interfaces;
- edges represent channels through which information or control must flow;
- each edge \(e\) has a capacity \(c_t(e)\) that may change over time;
- an activity is implemented by one of a set of feasible flows through this network.

We should resist the temptation to label the edges too quickly with psychological words such as "working memory" or "visual attention". The model is useful even if the real network is unknown. A theorem can be conditional on a small number of resource assumptions.

### Different computations require different routes

A computation is not merely a demand for five generic units of cognition.

One task may require a particular bottleneck edge. Another may have several alternative algorithms and therefore several possible routes. A third may be able to shift work from one channel to another after practice.

So for a cognitive activity \(A\), let \(\mathcal F_A\) denote the set of flow patterns that count as feasible executions of \(A\).

Two activities \(A\) and \(B\) are simultaneously feasible during an interval only if there exist flows

\[
f_A \in \mathcal F_A,
\qquad
f_B \in \mathcal F_B
\]

such that their combined use of every edge stays within capacity:

\[
f_A(e,t)+f_B(e,t) \le c_t(e)
\]

for all relevant \(e,t\).

This captures several kinds of interference with one mechanism:

- **global exhaustion:** both tasks together exceed a broad bottleneck;
- **local contention:** both need one particular edge even while much of the network remains idle;
- **compatibility:** the tasks can coexist because they can be routed through mostly disjoint resources;
- **changing capacity:** fatigue, practice, stress, sensory conditions, and time alter the available flow;
- **algorithm choice:** a clever prover may execute the same task using a route the verifier did not anticipate.

The last point is particularly important. A sheep-counting construction should quantify over *all* plausible implementations of the task, not merely the mental algorithm imagined by its designer.

### Exclusion

We can now define the relation needed by the chess story.

Say that activities \(A\) and \(B\) are **resource-incompatible** over interval \(I\) if no pair of feasible executions can fit simultaneously into the network capacities over \(I\).

Then a strong positive certificate that \(A\) occurred during \(I\) becomes a strategy-independent negative certificate that \(B\) occurred during the same interval, conditional on the network model.

This is important because it avoids the bad inference from *failure*.

We do not say:

```text
he played badly, therefore he was distracted
```

We say:

```text
this transcript is hard to produce without doing A;
all feasible executions of A exhaust a bottleneck required by B;
therefore B could not also have occurred.
```

No cooperative incentive is needed for the logical form of that argument.

The hard empirical question has simply moved into the assumptions: does serious chess really exclude the competing activity we care about, and to what degree?

### State and storage

An ordinary flow network is still incomplete because cognition is stateful.

A person can spend effort now to learn something and thereby make future work cheaper. Intermediate results can be stored. Practice can change later routing. A mental computation can create state at one vertex and consume it minutes later.

A more realistic model would therefore be a **dynamic flow network with storage and state transitions**.

For the moment, the simpler network is still useful. It gives us a language for resource competition without requiring a detailed theory of the brain.

## What does it mean to prove a cognitive computation?

We can now state a more explicit model.

A sheep-counting instance contains:

- a prover \(P\);
- a verifier \(V\);
- a time interval \(I\);
- an external input stream \(X\), possibly empty;
- a cognitive claim \(C\) about what happened inside \(P\) during \(I\);
- an externally observable transcript \(T\).

The transcript can include spoken answers, actions, response times, a chess game, choices of people in a room, or anything else available to the verifier.

The verifier applies some procedure

\[
V(X,T) \in \{\text{accept},\text{reject}\}.
\]

For a strong proof-like construction we want two properties.

### Completeness

A prover who actually performs an allowed execution satisfying \(C\) should be able to produce an accepting transcript with high probability.

### Strategy-independent soundness

A prover who does **not** perform an execution satisfying \(C\) should have only a small probability of producing an accepting transcript, even after choosing the best available deceptive strategy.

The second condition is what rules out the naive guard argument. An attentive guard who deliberately ignores an incident demonstrates that "failure to respond" is not sound evidence for inattention.

This model leaves open what counts as "performing the computation". That is where the cognitive network and task semantics enter.

For a puzzle, the semantics might be straightforward: the prover must obtain a witness satisfying a relation \(R(X,w)\). For a temporal task such as continuous tracking, the semantics may constrain the whole execution over \(I\), not merely the final output.

## Where does the input come from?

Ordinary exercises hide an important privilege: the verifier gets to choose the input.

Sheep-counting problems become more interesting when we separate several choices that are often conflated.

### Who chooses the task?

The verifier may say:

> Solve this multiplication problem.

But the prover may instead say, after the fact:

> I spent the last five minutes solving a certain combinatorial problem, and here is my witness.

The verifier need not have commissioned the task at all.

### Who supplies the instance?

Even when the task is fixed, its concrete input might come from:

- the verifier;
- a random generator;
- another participant;
- the surrounding physical or social environment;
- the prover;
- some mixture of these.

This matters because a prover who substantially controls the instance may choose one for which they already know an answer.

### Freshness and independence

For proof-of-work-like applications, we care about whether the instance was fresh enough that preprocessing did not eliminate the online work.

This is not exactly the same as randomness. A room full of people may not be sampled from any clean distribution, but their current arrangement may still be difficult for the prover to predict or control in advance.

A useful construction therefore asks how much entropy, unpredictability, or prover-independence the instance source contributes.

This gives us a broad spectrum:

| Example | Task chosen by | Instance supplied by | Fresh during execution? | Natural output |
| --- | --- | --- | --- | --- |
| arithmetic exercise | verifier | verifier | usually one-shot | answer |
| sheep counting | either | almost none | no | final count / sleep |
| babysitting | verifier/context | environment | maybe none | usually little |
| chess | either | opponent + rules | repeatedly | move transcript |
| party subsequence | prover or verifier | ambient arrangement | one-shot ambient | short witness |

Chess is especially interesting because it has **streaming fresh input**. The opponent keeps making moves. A long competent transcript therefore binds the claimed cognition to many unpredictable events across time.

Literal sheep counting sits near the opposite extreme: after the initial instruction, essentially no fresh external information needs to be processed.

## Complexity: hard to produce, easy to verify

The proof-of-work flavor appears when the prover's cognitive cost is much larger than the verifier's cost.

For human computation, ordinary asymptotic complexity is often the wrong scale. Inputs are small, and a difference between fifteen and eighty mental operations may matter more than a polynomial-versus-exponential distinction.

Manuel Blum and Santosh Vempala make this point explicitly in *The Complexity of Human Computation*. Their model emphasizes concrete step counts and distinguishes preparation from online processing.

For sheep-counting problems it is useful to track at least three costs:

\[
\operatorname{PREP},\qquad
\operatorname{PROC},\qquad
\operatorname{VER}.
\]

- **PREP** is work done before the fresh instance is known: memorizing names, learning a strategy, practicing chess patterns, precomputing tables.
- **PROC** is the online cognitive work required after the relevant input arrives.
- **VER** is the cost of checking the resulting certificate or transcript.

A good proof-of-work-like sheep-counting construction wants substantial online \(\operatorname{PROC}\), low \(\operatorname{VER}\), and resistance to arbitrarily large plausible \(\operatorname{PREP}\).

One can imagine a crude asymmetry score

\[
\frac{\operatorname{PROC}}{\operatorname{VER}},
\]

but the ratio alone is not enough. A task can have a wonderful ratio and still be useless if its input is controlled by the prover, if its output is easy to fake, or if the desired cognitive process has an alternative cheap implementation.

The important object is therefore not merely complexity, but **complexity under a specified input and strategy model**.

## Ambient puzzles

Now we reach the examples that originally motivated this line of thought.

Suppose nobody gives the prover a carefully generated challenge. The prover simply looks around the room and extracts a fresh computational instance from the people who happen to be there.

This is appealing because the environment can supply randomness or unpredictability without paper, computers, or a trusted random beacon.

The prover may even choose the *kind* of puzzle after seeing the room, as long as the resulting certificate can be checked and the choice does not trivialize the work.

### A monotone subsequence among the guests

Suppose seventeen people stand in an obvious total order: perhaps a line, or any arrangement for which everybody agrees who comes first, second, and so on.

Now rank those same people by some second total order that was already available, such as alphabetical order of their names.

Reading the alphabetical ranks along the physical order gives a permutation of seventeen numbers.

The challenge is:

> Find five people, in their physical order, whose names are either alphabetically increasing or alphabetically decreasing.

A theorem of Erdős and Szekeres guarantees that a solution always exists. More generally, any sequence of

\[
(k-1)^2+1
\]

distinct values contains an increasing subsequence of length \(k\) or a decreasing subsequence of length \(k\).

For \(k=5\), this gives

\[
(5-1)^2+1 = 17.
\]

So every arrangement of seventeen distinct names contains the required witness.

This is an unusually nice sheep-counting construction.

The ambient world supplies the fresh permutation. The prover may already know every person's name and may have done unlimited preprocessing on the guest list, but that does not determine tonight's arrangement. The answer is short: point to five people. Verification is cheap: check their positions and alphabetical order.

The problem is also **total**: every valid instance has a solution. Nobody gets unlucky and discovers that the room contains no witness.

What we do *not* yet know is the actual human complexity. The theorem proves existence, not difficulty. A random arrangement may contain many witnesses, and humans may discover them using shortcuts we have not modeled. The natural next step is empirical: measure solve times, error rates, strategy learning, and the effect of repeated reshuffling.

### Why "find the biggest clique" is a trap

Another tempting party puzzle is to define a graph on the guests and ask the prover to find the largest clique.

For example, vertices might be guests and edges might represent some quickly checkable symmetric relation.

Finding a large clique is computationally interesting. But "largest" creates a problem for proof-of-work asymmetry.

A claimed set of five people is easy to verify as a clique: check the ten pairwise edges.

It is much harder to verify that **no clique of size six exists**.

So maximum clique is a useful near-miss. It reminds us that the witness must certify the thing we actually asked for.

A better challenge is:

> Find a clique of a specified size.

But then existence is not guaranteed on an arbitrary graph.

Ramsey theory repairs that problem in a particularly appropriate way. The classical "party problem" says that every graph on eighteen vertices contains either a clique of four vertices or an independent set of four vertices, because

\[
R(4,4)=18.
\]

So with eighteen guests and any quickly verifiable symmetric yes/no relation between pairs, the challenge can be:

> Find four guests all pairwise related, or four guests no two of whom are related.

The witness is again tiny and cheap to verify, while the ambient graph supplies the instance.

This is exactly the kind of combinatorial principle that seems promising for sheep-counting proof-of-work: guaranteed existence, fresh ambient input, expensive-ish human search, compact certificate.

## One-sided evidence and the computability analogy

There is a tempting analogy with recursively enumerable and co-recursively enumerable sets.

Some mental claims seem to have easy positive witnesses but no corresponding negative witnesses. Others seem to produce evidence mainly when something goes wrong. This resembles the way one side of a decision problem may have finite certificates while the other does not.

The analogy is suggestive, but it becomes dangerous if we ignore strategy.

A missed incident does not strategy-independently certify inattention, because an attentive guard can intentionally miss it. Bad chess does not certify distraction, because an attentive player can intentionally blunder.

So before defining any "co-r.e. sheep-counting" class, we need to specify what counts as a certificate against arbitrary prover strategies.

Under that stronger notion, a useful monotonicity theorem appears.

### Capability-monotonicity proposition

Suppose performing activity \(A\) never removes any externally realizable behavior available to a prover who did not perform \(A\). Formally,

\[
\mathcal T(\neg A) \subseteq \mathcal T(A).
\]

Then there is no strategy-independent transcript that certifies \(\neg A\).

The proof is immediate. Any transcript available to a non-\(A\) prover is also available to an \(A\) prover, so the verifier cannot soundly distinguish the two from that transcript.

This captures the intuition that **knowledge and thought are often behaviorally monotone**. Knowing more usually lets you imitate somebody who knows less.

### Escaping monotonicity by exclusion

The chess construction shows the escape hatch.

Do not try to certify \(\neg B\) directly.

Instead:

1. positively certify activity \(A\);
2. establish, from the cognitive resource model, that \(A\) and \(B\) cannot coexist during the relevant interval;
3. infer \(\neg B\).

Negative evidence then comes from a positive witness to an incompatible computation.

This may be the right general form of strategy-independent negative sheep-counting proofs.

## A useful table of examples

The examples are easier to organize as coordinates than as mutually exclusive species.

| Example | Precise assigned task? | Input control | Fresh input | Output binding | Strategy-independent? | Main difficulty |
| --- | --- | --- | --- | --- | --- | --- |
| fresh arithmetic | yes | verifier | one-shot | strong | potentially | mostly boring |
| literal sheep counting | yes-ish | almost none | none | weak | weak | output barely constrains execution |
| quiet guard shift | yes | environment | possibly none | weak | no, for failure evidence | success may leave no trace |
| babysitting | yes | environment | event-driven | weak/variable | often incentive-dependent | same |
| serious chess | maybe | opponent | streaming | potentially strong | positive side can be | human-performance model |
| monotone guest subsequence | no need | ambient world | one-shot | strong | yes, if witness sound | human search cost |
| Ramsey guest graph | no need | ambient world | one-shot | strong | yes, if relation is checkable | human search cost |

This table suggests that sheep-counting problems do not fall naturally into two or three semantic categories. They occupy a multidimensional design space.

At minimum, one should ask:

- who chooses the task;
- who controls the instance;
- how fresh and prover-independent the input is;
- whether input arrives once or continuously;
- what observable output is produced;
- how tightly that output is bound to the claimed execution;
- whether the evidence survives arbitrary prover strategy;
- how much cognitive work is required to produce it;
- how much work is required to verify it;
- which cognitive resources the execution occupies and therefore excludes from other tasks.

## What we can formalize without understanding the brain

At first this subject seems to demand a complete model of human cognition.

I do not think it does.

We can separate two kinds of statement.

### Model-independent impossibility results

If two hidden cognitive histories admit exactly the same set of observable transcripts, no verifier can distinguish them.

If performing \(A\) leaves all behaviors of \(\neg A\) available, then no strategy-independent negative certificate of \(A\) exists.

These are statements about observability and strategy, not neuroscience.

### Model-dependent positive constructions

To prove that a chess transcript certifies substantial chess cognition, or that chess excludes another cognitive task, we need assumptions about human capabilities.

But those assumptions can be narrow and operational:

- a certain class of chess positions cannot be answered at baseline quality without processing the opponent's moves;
- a certain task requires at least so much capacity on a particular bottleneck;
- two task families cannot be simultaneously routed through the available network;
- a human can keep only so much state without external memory.

We can then prove conditional theorems of the form:

> If the human cognitive network satisfies assumptions X, Y, and Z, then transcript T is a sound certificate of activity A, and therefore a sound negative certificate of incompatible activity B.

This is much closer to how theoretical computer science normally proceeds. We do not model every transistor in a computer before talking about algorithms. We choose an abstraction that exposes the resource relevant to the theorem.

The challenge is to find an abstraction of human computation that is weak enough to be believable and strong enough to prove interesting things.

## What should count as a good sheep-counting construction?

A particularly attractive construction would combine several properties.

**Freshness.** The useful part of the input should not be known far in advance.

**Prover independence.** The prover should not be able to choose an especially easy instance after seeing all possibilities.

**Totality or high solvability.** A valid witness should reliably exist.

**Strong output binding.** Producing an accepting transcript without doing the relevant cognitive work should be difficult under the chosen strategy model.

**Asymmetric cost.** Producing the witness should require substantially more work than checking it.

**Resistance to preprocessing.** Learning the participants, rules, or long-lived structure in advance should not eliminate the fresh online cost.

**Small apparatus.** For the party examples, the nicest versions require no computer, paper, secret verifier state, or special equipment.

**Clear resource semantics.** If the certificate is used to infer that some competing cognition did not occur, the exclusion should follow from explicit resource assumptions rather than vague appeals to "attention".

The monotone-subsequence party puzzle does surprisingly well on most of these dimensions. The main unresolved question is whether its human search cost is reliably substantial.

## Open problems

The framework is still incomplete, but it already suggests concrete questions.

### Find more ambient total-search puzzles

The Erdős-Szekeres and Ramsey examples use combinatorial theorems to guarantee that the environment contains a witness.

What other small total-search principles can be instantiated by ordinary people and ordinary surroundings, with no tools and very cheap verification?

The best examples may come from pigeonhole principles, parity arguments, partial orders, local optima, matching theorems, or other existence results.

### Characterize preprocessing resistance

If the prover knows all participants and their stable properties in advance, when does a fresh arrangement still force substantial online work?

Can this be expressed information-theoretically, or does it require a human-computation model?

### Measure actual human complexity

The party puzzles should be tested.

For the monotone subsequence problem, compare variants such as

\[
(k,n)=(4,10),(5,17),(6,26).
\]

Measure solve time, failures, strategies, learning across rounds, and performance after reshuffling the same participants.

This would tell us whether the mathematical search problem is also a useful human proof-of-work problem.

### Formalize cognitive exclusion

Given a time-varying network and task families \(\mathcal F_A,\mathcal F_B\), when does a certificate for \(A\) imply that \(B\) was impossible?

Can useful exclusion results be proved from a small number of bottleneck assumptions rather than a detailed cognitive architecture?

### Add storage and learning

A dynamic model needs state. Humans cache intermediate results, rehearse strategies, and change algorithms with practice.

The network should eventually support storage at vertices, preprocessing, and transformations that change later feasible flows.

### Separate proof from behavioral inference

Many psychologically plausible observations are only evidence under an incentive model.

That is still useful, but it should not be confused with strategy-independent proof.

A mature theory should say explicitly when it is analyzing:

- arbitrary strategic provers;
- cooperative provers;
- utility-maximizing provers under a specified game;
- empirically typical human behavior.

These are different questions.

## Why this might be a computer-science problem

At first glance, "prove what you were thinking" sounds like psychology or philosophy.

But the structure is recognizably computational.

There is a hidden execution. There is an input source. There is a transcript. There is a verifier. There may be preprocessing. There are adversarial strategies. There are resource constraints. There is a relation between the cost of finding a witness and the cost of checking it.

The human mind is unusual mainly because the computation is private and the machine model is poorly specified.

That makes the problem harder, but also more interesting.

In ordinary proof of work, we design a computation whose cost follows from a machine model we understand reasonably well.

In sheep-counting problems, the challenge is almost reversed: **what kinds of externally verifiable computation can we design when the computer is a human mind and we are allowed to assume as little as possible about its implementation?**

The answer may sometimes be disappointingly simple: give the person arithmetic exercises.

Sometimes there may be no answer at all: "I was thinking about birds ten minutes ago" may leave no discriminating trace.

And sometimes a room full of people may accidentally contain a theorem-generated challenge whose solution is guaranteed to exist, costly to discover, and trivial to check.

That last possibility is the one I find hardest to stop thinking about.

## References and related directions

- Manuel Blum and Santosh Vempala, [*The Complexity of Human Computation: A Concrete Model with an Application to Passwords*](https://arxiv.org/abs/1707.01204). This develops a concrete complexity model for computations performed in the human head and motivates counting small-instance human costs rather than relying only on asymptotic complexity.
- Paul Erdős and George Szekeres, the monotone subsequence theorem: every sequence of \((r-1)(s-1)+1\) distinct numbers contains an increasing subsequence of length \(r\) or a decreasing subsequence of length \(s\).
- Ramsey theory and the classical party problem. In particular, \(R(4,4)=18\): every graph on eighteen vertices contains a four-vertex clique or a four-vertex independent set.
- Apoorvaa Deshpande and Yael Kalai, [*Proofs of Ignorance and Applications to 2-Message Witness Hiding*](https://eprint.iacr.org/2018/896). The setting is very different, but the paper is relevant to the general paradox that a knowledgeable prover can normally pretend to be ignorant.
