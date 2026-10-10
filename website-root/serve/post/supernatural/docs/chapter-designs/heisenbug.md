# Chapter Design — Case II: The Heisenbug

**Status:** design only, human review required. This document is a blueprint; it does not change chapter prose.
**Branch:** `design/227-heisenbug` (non-main).
**Board issue:** #227.
**Target manuscript:** `website-root/serve/post/supernatural/supernatural.md`, §II.
**Target deliverable of the eventual prose pass:** a revised §II that satisfies the live Intent Records, the local `<NOTE>` block, and the acceptance tests below, without changing authorial goals.

---

## 1. Mandate and non-goals

This document specifies **what Case II should do and how a future revision can verify it**. It is explicitly not an edit to `supernatural.md`.

In scope:

- scene beats;
- the escalating watched/unwatched reversal ladder;
- reader anxiety curve;
- character stakes (the exhausted operator's fear of unresolved failures);
- evidence strength and narrator belief;
- chronology and plausible timing explanations;
- humor and voice;
- transition in from Case I and out to Case III;
- measurable acceptance tests;
- alternatives for the human author.

Out of scope / non-goals:

- rewriting chapter prose;
- changing the seven-case structure, narrator stance, escalation, or any live Intent Record;
- resolving the intended ambiguity (the ordinary and the numinous must both remain live);
- inventing a supernatural cause for the historical incident;
- deleting the documented technical resolution.

The manuscript's local directive block (§II `<NOTE>`, `supernatural.md` lines 233–240) and the live Intent Records are the governing constraints. Where this design proposes something that would require an intent change, it is flagged in §13 as a **human decision**, not assumed.

---

## 2. Live constraints this case must satisfy

### 2.1 Local `<NOTE>` constraints (`supernatural.md` 233–240)

- Keep the repeated watched-versus-unwatched reversals and the unsuccessful experiment table as the narrative engine rather than adding an arbitrary supernatural event.
- Add a few selective physical details of the room and the sleepless people so the investigation is felt as an experience rather than read only as a debugging report.
- Make the practical consequences of a failed transaction and an unknowable failure plausible and specific, so readers understand what the operators fear losing if the incident continues.
- Protect the line about disliking successful tests and the hesitation at 04:56; the moment when the narrator stops before attaching the tracer is his clearest conversion of suspicion into superstition.
- Do not claim that timing-sensitive concurrency has no ordinary explanation, and remember that the real ProxySQL source incident eventually had a technical cause.
- Let the terror consist in the narrator briefly acting as though the bug can notice him, despite knowing better, and avoid explicitly interpreting that gesture for the reader.

### 2.2 Relevant Intent Records

| ID | Title | Bearing on Case II |
| --- | --- | --- |
| `$id-0105305593640677` | Heisenbug behaves as if observation matters | Primary case premise: instrumentation makes the failure recede; narrator becomes willing to describe it as not wanting to be watched; must create genuine doubt, anxiety, and fear, not a decorated debugging log. |
| `$id-5364595046057851` | The reader must feel the danger and dread | Requires believable human stakes and escalating behavioral/emotional consequences while preserving technical credibility and skeptical ambiguity. |
| `$id-0964292624358295` | Horror and humor emerge from serious procedure | Horror/uncanniness/humor must arise from meticulous procedure; no announced jokes or generic horror decoration. |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | Narrator presents operational detail, alternatives, qualifications; supernatural conclusion hinted, not declared. |
| `$id-9264982270043622` | Narrator privately leans supernatural | Belief is private, reluctant, not performed for comic effect. |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | Case II is an early-mid case: ordinary explanations still fully available, but the narrator's comfort with them begins to fray. |
| `$id-7350745426882596` | Escalation is epistemic as well as supernatural | Show the narrator spending effort preserving skeptical form while entertaining an unordinary premise. |
| `$id-6418273059462718` | Do not announce the manuscript's epistemic strategy | No narrator-as-author statements advertising that a metaphysical explanation is optional/unnecessary. |
| `$id-9688210860921309` | Human intent outranks autonomous taste | Alternatives in §13 are proposals; they do not silently change intent. |
| `$id-7494998113772687` | Seven-case dossier structure | Case II stays a principal case; no added principal cases. |

### 2.3 Meaning-graph nodes that encode current intent

- `$n34300` dateline "**Somewhere between midnight and the first ferry.**" — quiet temporal atmosphere before the technical problem.
- `$n54431`–`$n80786` — the six NOTE directive nodes.
- `$n62385` — `COMMIT` "would sometimes not come back"; opens the escalation.
- `$n88294` — "By then I had begun to dislike successful tests."
- `$n50153`, `$n65005`, `$n98822`, `$n41808`, `$n25055` — the 04:56 hesitation sequence.
- `$n70953` — "The thing hates to be watched."
- `$n53247`–`$n83447` — endnote 5, the documented ProxySQL technical resolution.

A future prose pass must update these nodes in the same change; this design pass changes no manuscript sentence, so no graph node changes are required here.

---

## 3. Source incident: documented ground truth (evidence layer)

Case II is a **fictional composite** built on a real 2019 incident (endnote 5). The design must keep the historical record intact and distinguishable from the fiction.

Documented facts (Carson Ip, ProxySQL issue #1939, PR #1952):

1. A gevent/Python application using `mysqlclient` (libmysqlclient) connected to **ProxySQL v1.4.13** over a **UNIX-domain socket**, with ProxySQL started using the **`--idle-threads`** option, and ProxySQL forwarding to an Amazon RDS MySQL backend.
2. The application read a large result set (~1000+ rows) and then issued an **empty `COMMIT`** that sometimes **hung indefinitely** waiting on the socket FD.
3. Reproduction took minutes to hours and was environment-dependent (busy production server).
4. Monitoring/tracing suppressed the bug: `strace` (no hang), `socat` on the UNIX socket (no hang), added print statements (no hang). A slower pure-Python client (PyMySQL) did not reproduce; a fast C/`libmysqlclient` client did.
5. The cause was **flow-control/throttling interacting with the idle-thread scheduler**: the fast UNIX socket drove the session into `throttle_max_bytes_per_second_to_client`, setting `session->pause_until`; the poll thread then treated the paused, still-outbound session as idle and moved it to the **epoll idle-maintenance thread**, which only polls for `EPOLLIN`. The session was actually waiting to **send** (would need `EPOLLOUT`), so it never woke.
6. The fix was **not to move throttled sessions to the idle/epoll thread** (ProxySQL PR #1952); a companion change addressed disabling/defaulting throttling (PR #1953).
7. Why it was a heisenbug: any monitoring or tracing **slows the I/O enough to avoid throttling**, so the trigger conditions no longer arise.

**The historical failure had an ordinary technical cause.** The design must never imply otherwise. The horror is the narrator's **experience of not being able to find it that night**, not an absence of cause.

---

## 4. Evidence/fiction boundary

| Layer | Status | Where it lives |
| --- | --- | --- |
| `strace`/`socat`/print suppression, UNIX socket, empty `COMMIT` after a large result set, slow vs fast client, `--idle-threads` | **documented** | Chapter events, endnote 5 |
| Throttle → `pause_until` → moved to epoll → stuck on `EPOLLIN` | **documented technical resolution** | Endnote 5 (outside the in-story night) |
| "small company", the night crew, the specific room, the ferry town, the business stakes | **fictional composite / reconstruction** | Chapter |
| "timing", "race condition", "the thing hates to be watched" | **narrator inference / private superstition** | Chapter |
| "does not want to be watched" as a real property of the system | **supernatural implication — never asserted** | Withheld; reader inference only |

The chapter's diegetic night **ends unresolved**. The documented cause is revealed **only in the endnote** (or an optional retrospective line; see §13). This is the intended split: the reader can learn the mundane truth while the narrator's remembered fear stays intact. Do not collapse the two.

---

## 5. Case function in the collection arc

- Case I (Schaerbeek) ends with a **specimen that was observed and taped** — the Mark II moth, "unconvinced" (`$n10406`). It is the sane case: a real anomaly with a conventional explanation.
- Case II is the **first case whose central object refuses to be a specimen**. It escalates from "we can explain this" to "we can only describe the conditions under which it declines to appear." The narrator's method is intact; what he is willing to entertain begins to move.
- Case III (Maxwell's Demon) escalates further into dream/prophecy. Case II must therefore hand off a **specific residue**: a private written note that reads as superstition, and an unresolved fear, which Case III can then outbid.

Case II is the hinge from "ordinary explanation, fully available" to "ordinary explanation, available but no longer soothing."

---

## 6. Chronology of the night

The night is bounded by the dateline: **between midnight and the first ferry**. The first ferry is a hard external clock (dawn / the day shift / the mainland waking). The investigation must end at that boundary even though the failure will not.

### 6.1 Canonical timeline (preserve; monotonic)

| Time | Event | Function |
| --- | --- | --- |
| before 00:41 | Called in; ordinary failure context established | Baseline |
| 00:41 | Reproducing loop exists; "usually inside an hour" (11 min once, 53 next) | Establishes unstable periodicity |
| ~00:41+ | `strace` attached → no hang; detached → hang 17 min later | Reversal 1 |
| shortly after | Repeat → untraced run fails; "nobody made a joke" | Reversal 2 / dread onset |
| — | `strace` mechanics explained (`$n48779`–`$n17662`); "timing" margin note | Ordinary explanation kept live |
| — | Prints added → no hang; removed → returns | Reversal 3 |
| — | Slow Python client no repro; fast compiled client repros | Reversal 4 (speed = hidden variable) |
| — | "By then I had begun to dislike successful tests." | Emotional turn |
| — | `socat` in path → hang disappears; removed → returns | Reversal 5 |
| — | Ordinary mechanisms listed; "every change had acquired a second meaning" | Superstition named diegetically |
| 03:20 | Experiment table copied | **Peak: the table** |
| — | Seventh row left blank for the run that would finally fail while we collected evidence | Setup for 04:56 |
| 03:47 | Row still blank | Waiting |
| 04:12 | Row still blank; narrator stops checking time as often | Fatigue / dread |
| 04:30 | "Somebody called it a race condition. I agreed." | Ordinary explanation reasserted and hollowed |
| 04:56 | Untraced compiled client hangs; narrator's hands on keyboard; stops | **Peak: the hesitation** |
| 04:56+ | Several seconds; colleague asks; "Nothing," and attaches `strace` | Superstition made physical |
| 04:56+ | `strace` shows process already asleep; "where the body lay, not how it had fallen" | Deflation / helplessness |
| 05:18 | Production traffic thins; reproduction slows; stop | Unresolved ending |
| morning | Private note: *The thing hates to be watched.* | Chilling coda |

### 6.2 Plausible timing explanations (must remain available)

Every suppression has a mundane mechanism the prose may name or let stand:

- **`strace`**: not a window; it stops and resumes the process around syscalls, changing scheduling (`$n48779`–`$n17662`).
- **Prints**: shift timing and buffering around the commit.
- **`socat`**: inserts a hop that changes I/O rate and FD scheduling.
- **Slow pure-Python client**: consumes the result set slowly enough to avoid the throttle that triggers the fault.
- **Fast compiled client + UNIX socket**: fastest path → most likely to hit `throttle_max_bytes_per_second_to_client` → `pause_until` → misclassified idle → epoll.
- **Named candidates in-chapter**: scheduling, syscall boundaries, queue occupancy, buffering, the proxy's own state machine (`$n79223`).

**Design recommendation (see §13, Option T):** let the narrator's margin notes include a **flow-control / throttle** candidate alongside "timing". This is the real cause; naming it as one live hypothesis among several keeps the reader's reread rewarding and satisfies the "remember the real cause" constraint without resolving the night. It must not be singled out or confirmed in-chapter.

---

## 7. The watched/unwatched reversal ladder (narrative engine)

The engine is a clean, escalating ladder. Each rung must have **three beats**: (a) an instrument/watch is introduced, (b) the failure recedes or vanishes, (c) removing the instrument restores the failure. The **cost** of each rung rises even though the information gained stays near zero.

| Rung | Watch introduced | Failure under watch | Watch removed | Restored | What it costs the narrator |
| --- | --- | --- | --- | --- | --- |
| 1 | `strace` | no hang for 90 min | detach | hangs 17 min later | The first "repentant" behavior; the joke is still available |
| 2 | repeat `strace` | untraced run fails | — | — | The joke dies; the crew stops laughing |
| 3 | print statements | hang disappears | remove prints | returns after enough traffic | He begins to address the failure as if soothing it |
| 4 | (implicit) fast vs slow client | slow client no repro | fast compiled client | hangs | Speed becomes the invisible variable; "another way to make it vanish without understanding it" |
| 5 | `socat` in the socket path | hang disappears | remove `socat` | returns | Every change now has "a second meaning" |

**Escalation rule:** rung *n+1* must cost more confidence than rung *n*, not merely repeat it. The ladder moves from *instrumentation* (rungs 1–3, 5) to *substrate* (rung 4, client speed) — the narrator starts suspecting the conditions of observation themselves rather than the observer's tool.

**Design rule for a future revision:** preserve the order above. Do not add an arbitrary sixth instrument unless it raises the cost and advances the epistemic drift; do not delete rungs (the repetition is the horror).

---

## 8. Scene beats

Beat numbers are design units, not paragraph counts.

1. **Dateline and baseline.** "Somewhere between midnight and the first ferry." Establish ordinary work and ordinary failures (`$n58421`, `$n73064`). The reader should feel a competent person in a known world.
2. **The failure.** `COMMIT` sometimes does not come back; a greenlet waits on the FD "as if the other side had forgotten it" (`$n62385`, `$n67124`, `$n25882`, `$n78957`). Introduce the empty transaction and the large preceding result set.
3. **Suspects rotate.** Networking → client library → "the shape of the failure had become more interesting than any one suspect" (`$n42832`–`$n91655`). Establish that replacement of parts has already happened.
4. **Rung 1–2 (`strace`).** Attach → no hang → detach → hang; repeat; the joke dies. Keep the mechanics paragraph (`$n48779`–`$n17662`) so timing stays ordinary.
5. **Rung 3 (prints).** "as if soothing a friend"; the failure vanishes; removal restores it.
6. **Rung 4 (speed).** Slow client vs fast compiled client; suspicion moves to speed/buffering/proxy path. This is where the hidden true variable (I/O rate → throttle) first becomes visible to the reader in retrospect.
7. **Rung 5 (`socat`).** The last clean suppression; removal restores.
8. **The turn.** "By then I had begun to dislike successful tests." Standalone beat; no follow-up explanation.
9. **The ordinary mechanisms, hollowed.** List scheduling, syscall boundaries, queue occupancy, buffering, the proxy state machine; then "every change had acquired a second meaning." Superstition enters as a *procedure* ("snares", "printf incantations", "timeouts shaved to angel-hair", "a tracer that has broken better men than me").
10. **The table (peak).** 03:20. Six populated rows matching the ladder. "I had intended the table to calm me. Instead, it made the pattern look cleaner than it had felt."
11. **The blank seventh row (setup).** Reserved for the run that would fail *while* evidence was being collected. 03:47 blank; 04:12 blank; "I stopped checking the time as often."
12. **The named non-answer.** 04:30: "somebody called it a race condition. I agreed." Then the hollowing: it names a family, not the two events; "we could only point to the conditions under which it declined to happen."
13. **The hesitation (peak).** 04:56: untraced compiled client hangs; hands on keyboard to attach the tracer; stops; several seconds; a colleague asks what he is waiting for; "Nothing," and attaches `strace`. **Do not explain the gesture.**
14. **The deflation.** `strace` shows a process already asleep in the expected wait: "where the body lay, not how it had fallen."
15. **The unresolved stop.** 05:18: traffic thins, reproduction slows, the crew stops. "A night shift can end without an investigation ending." "Nothing was fixed."
16. **The residue.** "We had only learned which forms of attention the failure appeared to tolerate." Morning note: *The thing hates to be watched.*
17. **Optional retrospective beat (human decision, §13).** The older dossier narrator may add one restrained sentence acknowledging that the real cause was later found and fixed — without erasing the fear of the night. If included, it must not explain the 04:56 gesture.

---

## 9. Character stakes and the exhausted operator

The `<NOTE>` requires **specific, plausible stakes**. The current manuscript establishes the technical situation but leaves the business consequence abstract. The design recommends making the cost concrete in the first third, before the table, and letting it echo afterward.

### 9.1 What is at stake (recommended shape)

The application writes a customer-visible fact (recommended: an **order/fulfilment or billing ledger**; see §13 Option S). An unacknowledged `COMMIT` means:

- the write may or may not have landed; the application cannot tell **committed-but-unacknowledged** from **not-committed**;
- retrying risks **double execution** (double charge / duplicate order / duplicate ledger line);
- *not* retrying risks a silently missing record and an angry customer or a failed audit;
- the small company has no spare night; one more night like this erodes customer trust and the on-call engineer's standing.

### 9.2 The exhausted operator's fear (the through-line)

- **What unresolved failures may cost:** not just downtime, but an **unknowable state** — a decision he must make without evidence, where both branches can be wrong.
- **The ferry as deadline:** the night ends whether or not the investigation does; he must hand off a report that says "not fixed."
- **Fear of recurrence:** the failure will return when he is not watching, possibly when the day shift or customers are present.
- **Fear of self:** he notices that he has begun to treat a software failure as a predator — hesitating at the keyboard — and that noticing does not stop the behavior.

### 9.3 Behavioral escalation (show, don't announce)

- Early: jokes and naming ("snares", "incantations").
- Middle: he stops joking; he keeps a table; he addresses the process "as if soothing a friend."
- Late: he stops checking the clock; he hesitates before touching the keyboard; he writes an animistic note in the morning.
- The crew mirrors him: "nobody made a joke when the untraced run failed"; at 04:56 someone has to ask what he is waiting for.

**Constraint:** the fear must arise from procedure and consequence, never from declared emotion. No "I was afraid" declarations that explain the effect.

---

## 10. Narrator belief and evidence strength

| Element | Narrator's public stance | Narrator's private state | Reader's position |
| --- | --- | --- | --- |
| `strace`/`socat`/prints suppression | "instrumentation changes timing" | plausible, but the pattern is unsettling | ordinary cause available |
| Empty `COMMIT` hang | "a race condition" (agreed at 04:30) | the name doesn't fit the evidence | ordinary cause still available |
| The blank seventh row | a methodological tool | a hope that keeps failing | rising dread |
| 04:56 hesitation | "Nothing" | he acted as if the bug could notice him | terror without explanation |
| Morning note | a field note | superstition he half-believes | the case's numinous seed |

**Evidence strength:** the chapter's evidence is **strong on conditions, null on cause**. The narrator can prove *when* it declines to happen and *that* watching suppresses it; he cannot produce the causal artifact. This is the correct epistemic shape: the reader is invited toward "it doesn't want to be watched" without any diegetic assertion.

**Narrator belief rule:** by the end of Case II the narrator has not announced belief. The note is the closest he comes, and it is written privately, in the morning, to himself. This preserves `$id-9264982270043622` and `$id-0861352612251497`.

---

## 11. Reader anxiety curve

| Phase | Beats | Anxiety | Mechanism |
| --- | --- | --- | --- |
| Baseline | 1–3 | Low | competent engineer, known world, ordinary failures |
| Onset | 4–5 | Curiosity + unease | first suppressions; joke still available |
| Accumulation | 6–8 | Dread | reversals repeat; joke dies; "dislike successful tests" |
| Vertigo | 9–10 | Intellectual vertigo | the table looks "cleaner than it had felt" |
| Waiting | 11 | Anticipatory dread | blank seventh row; time checks |
| Hollowing | 12 | Helplessness | "race condition" named and drained |
| Peak | 13 | Terror | 04:56 hesitation, unexplained |
| Deflation | 14 | Dread without release | strace shows only where the body lay |
| Unresolved | 15–16 | Residual fear | nothing fixed; private animistic note |

**Rule:** no comic detour may discharge dread after it is established (beat 8 onward). Humor before that is permitted; humor after it must be grim and procedural.

---

## 12. Humor and voice

### 12.1 Voice

- First-person past, precise, restrained; short declaratives for beats; longer layered sentences for mechanism and the table.
- Technical diction exact and load-bearing: `COMMIT`, greenlet, file descriptor, Unix-domain socket, `strace`, `socat`, print statements, compiled client.
- Italics for private thought and field-note register (`*timing*`, *The thing hates to be watched*).
- No Lovecraftian vocabulary; the uncanny comes from the narrator's altered perception of ordinary procedure (`$id-0964292624358295`, `$n83347`).

### 12.2 Humor (implicit only)

Preserve / allow these existing comic shapes:

- "tell me what you are thinking when you do this" — addressing the process as a friend;
- "printf incantations, timeouts shaved to angel-hair, a tracer that has broken better men than me";
- the table "intended to calm me";
- "somebody called it a race condition. I agreed." (deadpan agreement with a non-answer).

**Rules:** never explain the joke; never place a comic beat immediately after a dread beat; the humor must come from the procedure and the narrator's voice, not from commentary.

---

## 13. Physical and sensory palette ("make the night felt")

The `<NOTE>` asks for selective physical detail of the room and the sleepless people. Use a small, recurring palette rather than decoration. Every detail should be doing double duty (clock, fatigue, isolation, the machine's presence).

Suggested palette (author to choose; see alternatives):

- **The room:** racks' heat and fan cycling; a cold-draught from a door; sodium quay-light through the window; a whiteboard or notebook column of times; a kettle/coffee machine; the vending machine's hum; condensation on glass.
- **The clock:** the first ferry horn as the hard boundary; gulls before dawn; the tide; the building's heating clicking off around 03:00.
- **The people:** a colleague asleep under a coat; someone on the phone to the mainland; the specific person who asks at 04:56 what he is waiting for; cups going cold; the smell of hot dust.
- **The narrator's body:** cold hands; the repeated Enter; the moment his hands rest on the keyboard and stop (04:56); the taste of stale coffee.
- **The silence:** after 05:18 the traffic thins and the room's noise becomes audible; the dread of a quiet machine.

**Distribution:** at least one sensory beat per major phase; at least one after 05:18; none that announces theme.

---

## 14. Transitions

### 14.1 Transition in (from Case I)

- Case I ends on the **Mark II moth** — the observed, taped specimen — "The moth looks unconvinced" (`$n10406`).
- Case II's dateline ("Somewhere between midnight and the first ferry") resets time and place but should carry the **observation motif**: a bug you can tape versus one that will not sit still.
- **Proposed bridge (diegetic, restrained):** the older narrator's framing may contrast the taped specimen with the specimen that refuses capture — without naming the epistemic strategy. Keep it concrete (the logbook, the tape, the specimen) rather than abstract.

### 14.2 Transition out (to Case III, Maxwell's Demon)

- Case II ends with an unresolved failure and a private animistic note.
- Case III escalates to a **dream warning** (demon says the server room is cursed) plus an extreme improbability.
- **Proposed bridge:** the Case II residue — a suspicion that cannot be proven and is written down anyway — becomes the emotional precondition for taking a dream seriously. The handoff is a state of mind, not a causal claim.

---

## 15. Preserved peaks (must-not-break list)

1. **The experiment table** (`$n97231`–`$n52518`): six rows matching the ladder; the "intended to calm me" reflection; the blank seventh row.
2. **"By then I had begun to dislike successful tests."** (`$n88294`): standalone; unqualified; no follow-up.
3. **The 04:56 hesitation** (`$n50153`–`$n25055`): hands on keyboard → stop → several seconds → colleague asks → "Nothing" → attach `strace`.
4. **The mechanics of `strace`** (`$n48779`–`$n17662`): keeps the ordinary explanation alive.
5. **The morning note** (`$n70953`): the animistic residue.
6. **The documented resolution** (endnote 5): unchanged and uncontradicted.

---

## 16. Measurable acceptance tests

A future prose pass is acceptable for review when all of the following hold. "Verify" is against the revised `supernatural.md` §II and endnote 5.

| # | Criterion | How to verify | Evidence |
| --- | --- | --- | --- |
| A1 | Timeline monotonic; all anchors present | grep times; check order | 00:41, 03:20, 03:47, 04:12, 04:30, 04:56, 05:18 all present and ordered |
| A2 | Reversal ladder intact and ordered | map each rung | 5 rungs (strace, prints, speed, socat, + repeat) each with suppression and restoration |
| A3 | Experiment table present | locate table | 6 populated rows matching ladder; 7th row referenced as blank |
| A4 | "dislike successful tests" preserved | exact beat | sentence present, standalone, unexplained |
| A5 | 04:56 hesitation preserved | locate sequence | 4 sub-beats present; gesture not explained |
| A6 | Concrete stake stated before the table | read beats 1–10 | at least one specific consequence of an unacknowledged COMMIT |
| A7 | Ordinary mechanisms named | search | scheduling / syscall boundaries / queue occupancy / buffering / proxy state machine appear |
| A8 | No supernatural assertion | read all diegetic sentences | no sentence claims the bug literally minds being watched; note is private inference |
| A9 | Documented cause represented and uncontradicted | read endnote 5 | throttle → pause_until → epoll → EPOLLIN; PR #1952; no "no ordinary cause" claim |
| A10 | Physical/sensory beats distributed | tag paragraphs | ≥ 8 distinct details; ≥ 1 after 05:18 |
| A11 | Humor implicit, not discharged | read beat 8 onward | no explanatory punchline after dread established |
| A12 | Anxiety escalates | apply §11 rubric | each rung costs more than the previous; peak at 04:56 |
| A13 | Transitions connect | read case boundary | in: moth/observation motif; out: residue → dream precondition |
| A14 | Structure unchanged | diff headings | seven principal cases unchanged; no new principal case |
| A15 | Design-only pass | git diff | this branch changes no `supernatural.md` sentence |
| A16 | Graph consistency | meaning graph | if prose changes, affected nodes updated with exact `text` and total coverage |

Optional quantitative guardrails (author to confirm): keep §II within roughly **1,300–1,900 words** (current §II is ≈ 950 words; the added stakes and physical detail justify growth without bloating).

---

## 17. Alternatives for human review

These are **proposals**, not intent changes. Each states what it would gain and what it risks.

### Option S — Stakes domain

- **S1 (recommended):** order/fulfilment ledger. An unacknowledged commit can double-charge or lose an order. Concrete, legible, customer-visible.
- **S2:** billing/settlement batch. Higher audit stakes; slightly more abstract.
- **S3:** telemetry/metrics pipeline. Lower stakes, but more "ordinary questions" flavor.
- **Risk of all:** over-specifying the business can date the story or invite factual nitpicks; keep the domain lightly sketched.
- **Decision needed:** which domain, and how explicit the consequence should be.

### Option T — Seed the real cause

- **T1 (recommended):** include "flow-control / throttling" among the narrator's margin candidates, never confirmed in-chapter. Rewards rereading; satisfies "remember the real cause."
- **T2:** keep only "timing"/"race condition" in-chapter; leave the true cause strictly to the endnote. Preserves maximal ambiguity; less rewarding on reread.
- **Risk of T1:** a sharp reader may solve the case early and lose dread. Mitigate by keeping it one candidate among several and never privileged.

### Option R — Retrospective acknowledgment

- **R1 (recommended):** one restrained older-narrator sentence noting the real cause was later found and fixed, without explaining the 04:56 gesture.
- **R2:** no in-chapter acknowledgment; the endnote carries all resolution.
- **Risk of R1:** could reduce dread if it reads as debunking. Must be brief and must not touch the gesture.

### Option F — Narration frame

- **F1 (recommended):** firsthand ("I was called because…"), as currently written.
- **F2:** a reconstruction from the operator's account, consistent with Case I's reconstructed frame.
- **Risk:** F2 adds distance that may dilute the 04:56 terror. F1 is stronger for this case.

### Option P — Physical setting specificity

- **P1:** a fictional harbour town with a first ferry; unnamed.
- **P2:** a real coastal city (adds verifiability; risks sourcing burden).
- **Recommendation:** P1; the dateline already implies it, and it keeps the case a composite.

### Option C — Crew size/identity

- **C1:** the narrator plus two or three unnamed colleagues, one of whom asks at 04:56.
- **C2:** a named colleague whose reactions recur.
- **Recommendation:** C1; keeps focus on the narrator and avoids new named characters the rest of the dossier must track.

### Option E — Ending note wording

- **E1 (recommended):** preserve `*The thing hates to be watched*` verbatim.
- **E2:** a variant with the same meaning.
- **Recommendation:** E1; the line is a documented narrative peak and a MUST-preserve beat.

---

## 18. Open questions and conflicts to surface

1. **Resolution distribution.** Endnote 5 already states the real cause; §II never does. Confirm the intended split (in-story unresolved / endnote resolved) and whether Option R1 is wanted.
2. **Setting.** The dateline implies a coastal/ferry town not otherwise established. Confirm P1 before any prose adds place detail.
3. **Stakes domain.** Unspecified; requires a human choice (Option S).
4. **Night crew.** Number and identity unspecified; affects the 04:56 beat and dialogue.
5. **Optional retrospective line.** Whether the older narrator may reference the later fix without collapsing the ambiguity is a human intent decision.
6. **No conflict found** between the local `<NOTE>` and the live Intent Records: the NOTE's "remember the real cause" and `$id-0105305593640677`'s "leave open the ordinary explanations" are compatible and jointly require the split described in §4.

---

## 19. Summary for the reviewer

Case II's engine is a clean, escalating ladder of watched/unwatched reversals in which watching always suppresses the failure and removal always restores it, while the information gained stays near zero and the cost rises. The horror is the exhausted operator beginning, briefly and against his own judgment, to act as though the failure can notice him — at 04:56, before he attaches the tracer. The table, the "dislike successful tests" line, and the morning note are preserved as peaks. The documented ProxySQL cause (throttled session moved to the epoll idle thread; PR #1952) is kept intact in the endnote and never contradicted in the chapter. All alternatives are proposals for human decision, not changes to authorial goals.

---

## 20. Independent review pass (this branch)

A second pass verified the blueprint against the current repository state rather than trusting the first draft's citations.

- **Meaning-graph references.** Every `$nNNNNN` cited in this document resolves to an existing node in `docs/meaning-graph.md`, and the quoted/summarized content matches. Verified ranges: dateline `$n34300`; §II NOTE block `$n54431`–`$n80786` (six directive nodes: `$n54431`, `$n30100`, `$n56205`, `$n40626`, `$n53676`, `$n80786`); `COMMIT` opening `$n62385`; "dislike successful tests" `$n88294`; the 04:56 sequence `$n50153`, `$n65005`, `$n98822`, `$n41808`, `$n25055`; morning note `$n70953`; endnote 5 `$n53247`–`$n83447`; Case I moth bridge `$n10406`.
- **Intent-record references.** Every `$id-...` cited resolves to a live record in `docs/intent-records/`. One citation was malformed in the first draft (`$id-83347`, which is not a valid 16-digit intent ID); it has been corrected to the meaning-graph node `$n83347` ("increasingly uncanny diction should arise from the narrator's altered perception"), which is the source the sentence actually means.
- **Source incident.** The endnote-5 technical account in §3 was re-checked against the primary sources (Carson Ip write-up, ProxySQL issue #1939, PR #1952, companion PR #1953): ProxySQL 1.4.13, `--idle-threads`, UNIX-domain socket, ~1000-row result set then empty `COMMIT`, `strace`/`socat`/prints suppressing the fault, slow PyMySQL non-reproduction vs. fast `libmysqlclient`, throttling via `throttle_max_bytes_per_second_to_client` → `pause_until` → session misclassified idle → epoll thread polling only `EPOLLIN`. All stated facts are accurate.
- **Scope.** No `supernatural.md` sentence, no meaning-graph node, and no Intent Record is changed by this branch. This remains design only.

Remaining for the human author: the six open decisions in §18 (resolution distribution, setting, stakes domain, night-crew identity, retrospective line, and confirmation that the `<NOTE>`/intent split in §4 is intended).
