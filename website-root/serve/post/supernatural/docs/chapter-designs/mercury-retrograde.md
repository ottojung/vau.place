# Chapter Design — Case V: Mercury in Retrograde

**Status:** design only, human review required. This document is a blueprint; it does not change chapter prose.
**Branch:** `design/234-mercury-retrograde` (non-main, from `master`).
**Board issue:** #234 — "[Supernatural] Case V: Mercury in Retrograde — design and goals".
**Target manuscript:** `website-root/serve/post/supernatural/supernatural.md`, §V (heading at line 340, local `<NOTE>` at lines 342–350).
**Target deliverable of the eventual prose pass:** a new §V that satisfies the live Intent Records, the local `<NOTE>` block, and the acceptance tests below, without changing authorial goals.

---

## 1. Mandate and non-goals

This document specifies **what Case V should do and how a future revision can verify it**. It is explicitly not an edit to `supernatural.md`.

In scope:

- a **genuinely distinctive, high-stakes software failure** — a settlement cycle that is applied to the ledger **in reverse** — precisely correlated with the astronomical windows in which Mercury is in retrograde;
- a **documented operational timeline** with enough specificity that the causal inference is a temptation rather than a decree;
- **negative evidence** that falsifies the ordinary timing explanations and leaves the correlation standing;
- **personal operational consequences** — harms to named people and the investigator's own drifting behavior — that make the astrological reading emotionally hard to dismiss;
- scene beats, narrator stance, source reliability, human stakes, the dread mechanism, chronology, the adjacent-case links, stylistic constraints, alternatives, and measurable acceptance tests.

Out of scope / non-goals:

- rewriting chapter prose;
- changing the seven-case structure, narrator stance, escalation, or any live Intent Record;
- resolving the intended ambiguity (the ordinary and the numinous must both remain live);
- **describing a solution** to the failure (`$n38799`);
- asserting that Mercury caused the failure (`$n85239`);
- reusing the Heisenbug's **observation** mechanism (`$n34176`);
- a tidy solved-bug ending;
- editing `supernatural.md`, `docs/meaning-graph.md`, or any Intent Record;
- any intent change: every proposal in §17 is flagged as a **human decision**, not assumed.

The manuscript's local directive block (§V `<NOTE>`, `supernatural.md` lines 342–350) and the live Intent Records are the governing constraints. Where this design proposes something that would require an intent change, it is flagged in §17 or §18.

---

## 2. Live constraints this case must satisfy

### 2.1 Local `<NOTE>` constraints (`supernatural.md` lines 342–350)

Verbatim directives:

- "Tell a made up story of how a bug coincided with Mercury being in retrograde."
- "The bug must be unique and interesting."
- "Do not talk about solutions."
- "The implication should be that the bug was a real thing, actually caused by Mercury being in retrograde."
- "We'll retain skeptics by documenting the operational timeline with enough specificity that the causal inference feels like a temptation, not a writer's decree."
- "Let the operational timeline and escalating consequences make the astrological correlation emotionally tempting without describing Mercury as a confirmed cause."
- "Give this case a distinctive source of unease rather than merely repeating the Heisenbug's suspicion that the failure knows it is observed."

The last three are the 2026/10/09 editorial additions (matching `$id-5364595046057851` and the issue brief): the timeline must carry the temptation, and the case's unease must not be the Heisenbug's observation-sensitivity.

### 2.2 Relevant Intent Records

| ID | Title | Bearing on Case V |
| --- | --- | --- |
| `$id-7062117495708504` | Mercury case makes causality a temptation | Primary case premise: a distinctive software failure whose operational timeline coincides disturbingly well with Mercury in retrograde; specificity enough that causal inference is tempting; the narrator never merely asserts astrology; the coincidence feels costly to dismiss. |
| `$id-5364595046057851` | The reader must feel the danger and dread | Requires believable human stakes and escalating behavioral/emotional consequences while preserving technical credibility, disciplined investigative habits, skeptical ambiguity, and restraint; no arbitrary monsters, no overwrought metaphor, no didactic "science failed" ending. |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | Case V is a late-mid case: the narrator's method is at its most rigorous while what he entertains is at its least ordinary. |
| `$id-7350745426882596` | Escalation is epistemic as well as supernatural | Show the narrator spending maximum effort preserving skeptical form — tables, base rates, falsification — while the conclusion he refuses to state is the one an earlier self would have laughed at. |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | The narrator presents operational detail, alternative explanations, qualifications; the astrological reading is invited, never declared. |
| `$id-9264982270043622` | Narrator privately leans supernatural | His leaning is carried by behavior (a calendar, a delayed change, a private note), never announced; reluctance is the register. |
| `$id-0964292624358295` | Horror and humor emerge from serious procedure | Horror must arise from meticulous documentation; no announced jokes, no generic horror decoration, no comic detour that discharges the dread. |
| `$id-6418273059462718` | Do not announce the manuscript's epistemic strategy | No narrator-as-author statements advertising that the astrological explanation is optional/unnecessary or being deliberately kept alive. |
| `$id-9688210860921309` | Human intent outranks autonomous taste | Alternatives in §17 are proposals; they do not silently change intent. |
| `$id-7494998113772687` | Seven-case dossier structure | Case V stays a principal case; no added principal cases, no structural changes. |
| `$id-0105305593640677` | Heisenbug behaves as if observation matters | The explicit contrast case: Case V's failure must **not** recede under observation. |

### 2.3 Meaning-graph nodes that encode current intent

The Case V directive block carries seven graph nodes (currently non-diegetic draft instructions / editorial direction):

- `$n24252` — "Tell a made up story of how a bug coincided with Mercury being in retrograde."
- `$n75210` — "The bug must be unique and interesting."
- `$n38799` — "Do not talk about solutions."
- `$n75736` — "The implication should be that the bug was a real thing, actually caused by Mercury being in retrograde."
- `$n54501` — "We'll retain skeptics by documenting the operational timeline with enough specificity that the causal inference feels like a temptation, not a writer's decree."
- `$n85239` — "Let the operational timeline and escalating consequences make the astrological correlation emotionally tempting without describing Mercury as a confirmed cause."
- `$n34176` — "Give this case a distinctive source of unease rather than merely repeating the Heisenbug's suspicion that the failure knows it is observed."

Neighbouring nodes: `$n52828` (Case IV's closing NOTE) precedes the block; `$n76985` (Case VI's opening NOTE) follows it. A future prose pass must update the seven Case V nodes in the same change; this design pass changes no manuscript sentence, so no graph node changes are required here.

### 2.4 Top-level `<NOTE>` directives that bear on this case

- "It is grave, meticulous, humor only implicit, investigator fraying at the edges." — Case V is the collection's most disciplined surface; the fraying must be visible only in behavior.
- "The chief artistic goal is to make readers feel genuine dread, anxiety, uneasiness, fear, and the possibility of harmful consequences." — the issue brief adds: timeline, negative evidence, and personal consequences must carry the temptation.
- "Distinguish firsthand incidents, historical reconstructions, secondhand testimony, and folklore…" — Case V's core evidence is the **machine record** (the journal) and the **private record** (the operator's log); the astronomical record is external and verifiable; none of them is a witness to a cause.

---

## 3. The distinctive failure: a settlement cycle applied in reverse

Case V's bug must be *unique and interesting* (`$n75210`) and must not repeat Case II's observation mechanism (`$n34176`). The recommended failure is a **retrograde settlement**: a payments clearing engine applies a whole settlement cycle to member accounts in the exact reverse of its intended order.

### 3.1 The system (recommended substrate)

A small payments cooperative — the **Clearing House** — nets and settles recurring obligations (payroll, rent, standing orders, supplier invoices) for member firms. Each night it runs one or more **settlement cycles**. A cycle is a bounded list of instructions; instructions may be **chained** (a debit to account A funds a later credit to account B, which funds a later debit from B, and so on). The engine applies each instruction to member balances, guarded by an **overdraft check**: an instruction that would drive a balance negative is **parked** and re-queued for the next pass or the next cycle. Every application, park, and reversal is written to an append-only **journal**.

### 3.2 The anomaly, stated precisely

On the nights in question, the engine applied a cycle **in reverse**: the last instruction was applied first, the first last. Because the instructions were chained, reversing them drove intermediate balances negative, the overdraft guard parked the affected instructions, the parked instructions were re-queued, and the re-queued batch was again applied in reverse. The cycle **oscillated** — apply forward-now-backward, unwind, re-apply — until the settlement window closed.

Design requirements on the anomaly:

- the reversal is **exact and total within a cycle** — a perfect mirror, not random reordering and not data loss; the journal contains both the forward order and its reverse;
- the harm is **operational and human**: some obligations settle twice, others not at all, and the difference is invisible until the morning;
- the mechanism must be statable in ordinary, correct technical language: ordered application, transaction rollback/roll-forward, retry, replay from a journal, LIFO vs FIFO, overdraft guards, idempotency;
- **the reversal must not depend on being observed.** Instrumentation, tracing, and added logging must leave it unchanged — the logs *are* the evidence. This is the deliberate inversion of Case II: there, watching made the failure vanish; here, the record is complete and unambiguous and watching changes nothing.

### 3.3 Why this failure is distinctive within the collection

| Case | Failure shape | Epistemic shape |
| --- | --- | --- |
| I. Schaerbeek | one bit inverted (single-event upset) | **explained** by a conventional mechanism; the report says "very probably" |
| II. Heisenbug | observation-sensitive hang | cause **unfound that night**; evidence of its absence |
| III. Maxwell's Demon | an effectively impossible coincidence | **improbable but possible**; a dream gives it retrospective force |
| IV. Leprechaun | an off-by-one with no author | ordinary story **uncompletable** |
| **V. Mercury** | **a cycle applied in reverse** | ordinary candidate **falsified by negative evidence**; the surviving correlate is astronomical |

Case V's signature is that the mundane candidate is not merely missing or unclosed: it is **contradicted by the operational record** (§8). No earlier case has this shape.

---

## 4. Evidence and fiction boundary

Case V is a **made-up story** (`$n24252`). Unlike Cases I–II, it has no documented real incident behind it. The astronomical dates, however, are **real and verifiable** and should be used accurately.

| Layer | Status | Where it lives |
| --- | --- | --- |
| The Clearing House, its members, the settlement cycles, the operator, the victim | **fictional reconstruction** | Chapter |
| The reverse settlement: the mirror journal, the oscillation, the parks and re-applications | **in-story documented** (within the story's world) | Chapter, reported as the incident's established record |
| The recovery/replay order candidate C1 and its harness test | **in-story plausible, unconfirmed** | Chapter, as what was considered and not confirmed |
| The restart log showing non-reversals outside retrograde | **in-story documented** (negative evidence) | Chapter, the case's spine |
| Mercury retrograde station dates (2025–2026 and earlier) | **documented astronomical fact** | Chapter overlay and endnote; verify against an ephemeris |
| Mercury retrograde as the *cause* of the reversal | **supernatural implication — never asserted** | Withheld; exists only in the correlation and the reader's assembly |
| The operator's private log correlating reversals with personal misfortunes | **secondhand private document; motivated, unreliable** | Chapter, explicitly marked as his, not the narrator's |
| The circulating story that the Clearing House was "cursed" | **folklore / rumor** | Chapter, reported as what people say, not endorsed |

**Design rule:** keep the astronomical record exact and the fictional record clearly fictional. The narrator may compute a correlation against real ephemeris dates; he must not present astrology as a mechanism. The endnote may cite the ephemeris; it must not present a solution (`$n38799`).

---

## 5. Case function in the collection arc

- **Case IV** ends with an unfiled legend, a moved threshold, and the narrator's private habit — he reads loop bounds twice. Case V opens with that habit matured into the collection's **strictest operational discipline**: every incident timestamped, every candidate falsified, every base rate stated.
- **The escalation is epistemic.** Case V is the case where the narrator's *most rigorous* method produces the *least admissible* conclusion. He does not become sloppy; he becomes exact, and the exactness points at a planet. This is `$id-7350745426882596` made structural: the form is flawless, the premise is one an earlier self would have filed under nonsense.
- **Case V is the causal hinge for Case VI.** By establishing that the narrator has begun to treat an astronomical correlate as *relevant*, Case V seeds the drift that Case VI makes absurd: there, the conspicuous **absence** of an American software failure is handled as evidence. Case V plants the causal standard; Case VI harvests it.
- **Handoff residue to Case VI:** a narrator whose standards of relevant causality have quietly moved, and who knows it, and who cannot put the correlation down. The bridge is behavioral (§14.2), not strategic.

---

## 6. Chronology

The case has three clocks: the **incident clocks** (the nights the cycles reversed), the **astronomical clock** (the retrograde windows, real and verifiable), and the **investigation clock** (the narrator compiling the dossier later). The design must keep all three visible and never let the astronomical overlay masquerade as causation.

### 6.1 Canonical incident timeline (anchor incident; preserve; monotonic)

| Time (local) | Event | Function |
| --- | --- | --- |
| ~18:00 | Cycle built; instructions ingested; chains identified | Baseline: ordinary operation |
| ~20:00 | Settlement begins; engine applies instructions | Normal |
| ~20:0x | The first reversal: a chain is applied newest-first; an intermediate balance goes negative | Anomaly onset |
| ~20:0x | Overdraft guard parks the affected instructions; they are re-queued | Escalation |
| ~20:1x–23:xx | The cycle oscillates: apply, unwind, re-apply, each pass mirrored; journal records both orders | The mirror |
| ~23:xx | Settlement window closes; the engine stops; the day's obligations are left part-settled, part-double-settled | The harm is fixed |
| Next morning | Staff find bounced payroll/rent; the journal shows the mirror; nobody can explain the order | Discovery |
| Following days | The team tests the recovery/replay candidate C1; it is plausible but does not reproduce the production timing | Falsification begins |
| Investigation | The narrator obtains the multi-year reversal log and the ephemeris; overlays them | The correlation |
| Investigation | He reads the operator's private log; computes the base rate; refuses to conclude | The temptation |
| Dossier present | He writes the case up; he does not name a cause; he keeps the next retrograde date in his calendar | Residue |

### 6.2 The astronomical overlay (real dates; verify before use)

Mercury is in **apparent retrograde** when, as seen from Earth, its motion along the ecliptic reverses; this is an effect of relative orbital position, not an actual reversal. It happens roughly three times a year and lasts about three weeks (about 19% of the year). Real station dates (UTC), from published ephemerides — sources differ by up to a day and the prose pass must pick and cite one:

| Stations retrograde | Stations direct | Days |
| --- | --- | --- |
| 2025-03-15 | 2025-04-07 | 23 |
| 2025-07-18 | 2025-08-11 | 24 |
| 2025-11-09 | 2025-11-29 | 20 |
| 2026-02-26 | 2026-03-20 | 23 |
| 2026-06-29 | 2026-07-23 | 24 |
| 2026-10-24 | 2026-11-13 | 20 |

**Design rule:** the prose pass may use these or earlier windows, but the incidents must be placed inside real retrograde windows and the clean negative-evidence nights must be placed outside them. Do not invent retrograde dates; use an ephemeris.

### 6.3 Believability rules

- The engine's journal is a machine record: it may show order, timestamps, and amounts, but it does not know *why*. It must never narrate a cause.
- The operator's private log is a human record: it may contain fear, pattern-making, and personal events, and the narrator must mark it as the operator's, motivated and fallible.
- The narrator was not the on-call engineer for the anchor incident (recommended); his knowledge is reconstructed from the journal and the operator's account. This preserves source distance and lets the operator carry the emotional cost.
- The astronomical data is external and authoritative; the narrator treats it as data and explicitly separates "Mercury was in retrograde" (checkable) from "Mercury caused this" (not established).

---

## 7. Source reliability

The case's power comes from putting a flawless machine record next to a compromised human record and a real ephemeris, and letting the reader weigh them.

| Source | What it establishes | Reliability | Limit |
| --- | --- | --- | --- |
| The engine journal | The exact order of applications, the parks, the reversals, the oscillation | **High** (append-only, machine, immutable) | Shows *what* happened, never *why*; cannot see outside itself |
| The restart/recovery log | That mid-cycle restarts occurred on many nights, including outside retrograde, without reversal | **High** | The negative evidence that falsifies the timing explanation |
| The multi-year reversal log | That every reversal falls inside a retrograde window | **High for dates; derived for correlation** | Correlation is computed, not recorded |
| The astronomical ephemeris | The real station dates | **Authoritative, external, verifiable** | Establishes a window, never a cause |
| The operator's private log | His correlation of reversals with personal misfortunes | **Low–moderate** (motivated, retrospective, uncorroborated) | Pattern-making by a frightened person; the narrator says so by how he presents it |
| The victim's account | The human harm (a bounced payment, a missed rent) | **Moderate** (firsthand for the harm, not the cause) | Cannot speak to the mechanism |
| The rumor ("the Clearing House is cursed") | How the story lives | **Low** (folklore) | Useful for social texture; useless for the phenomenon |
| The narrator's reconstruction | The synthesis | **Bounded by the above** | He must state his own base-rate caution and his own drift |

**Design rule:** the supernatural claim is never a source. It is a *correlation* the narrator computes and a *belief* he refuses to state. Every sentence that edges toward Mercury-as-cause must be attributable to the operator's log, the rumor, or a hypothesis the narrator explicitly declines to endorse (`$id-0861352612251497`, `$id-6418273059462718`).

---

## 8. The ordinary candidate and its falsification (the case's spine)

The NOTE demands enough specificity that the causal inference is a temptation (`$n54501`) and that Mercury is never named a confirmed cause (`$n85239`). The strongest way to do this is to give the reader a *real* mundane candidate, let it explain the mechanism, and then **falsify it with negative evidence**.

### 8.1 Candidate C1 — recovery/replay order (recommended)

The engine can recover mid-cycle from a checkpoint by replaying the cycle's in-flight operations. The in-flight list is built by **pushing** operations onto a structure that is then iterated **without being reversed** on the recovery path (a LIFO/FIFO confusion). If recovery replays a chained cycle in LIFO order, the cycle is applied in reverse — exactly the observed mirror. This is a real, subtle, order-dependence class of bug (non-idempotent, order-dependent replay), statable in correct technical language.

### 8.2 The negative evidence that falsifies it as the cause

The team (and the narrator) show that the required trigger — a mid-cycle restart with a chained cycle in flight — occurred on **many nights outside retrograde**, and the replay applied forward every time. Conversely, the reversals occurred only inside retrograde windows. Therefore C1 may be *a* way to reverse a cycle, but it is **not what produced these reversals**: the record contains the trigger without the effect, outside retrograde, again and again. The ordinary story is not unproven; it is **contradicted**.

### 8.3 Other ordinary candidates (all fail)

| Candidate | What it requires | Why it fails in-story |
| --- | --- | --- |
| O1 — load / high volume | that busy nights reorder | The highest-volume night of the year, outside retrograde, was clean; a low-volume retrograde night reversed |
| O2 — a deployment or maintenance window | a change that perturbs ordering | Deploys happened weekly and do not align with retrograde windows |
| O3 — a calendar/seasonal effect | a fixed annual pattern | Retrograde dates drift against the calendar; no fixed alignment |
| O4 — operator error or fatigue | a human who mis-ordered the batch | Different operators, different years, same pattern |
| O5 — an external provider/network incident | a third party whose fault window matches | No provider incident overlaps the reversal nights |
| O6 — a clock or time-source step | a backwards clock | The engine's clock log is monotonic across every reversal; no step occurred |

**Design rule:** present at least four candidates and falsify each with a specific, checkable reason. The falsifications are the case's evidence, not decoration. **Do not present a fix** (`$n38799`); C1 is identified as possible and left unconfirmed.

---

## 9. Scene beats

Beat numbers are design units, not paragraph counts. The order is a recommendation; the acceptance tests (§16) check properties, not sequence.

1. **The frame: the strictest records.** The dossier compiler introduces the case at his most disciplined — the one with the cleanest paper. Establish the Clearing House, the settlement cycle, and the narrator's distance (he was not the on-call; he inherits the journal and the operator's account). *Anxiety target: the surface is impeccable, which will make the conclusion worse.*
2. **The reversal first.** The anchor night: a cycle applied in perfect reverse; the mirror journal; the parks and re-applications; the oscillation. Procedure before marvel. *Anxiety target: the system of record executed the past backward.*
3. **The harm before the wonder.** The morning discovery: bounced payroll, a missed rent, one named person; the cooperative's exposure. Stated before any mention of a planet. *Anxiety target: this has a human body count, and it is specific.*
4. **Candidate C1, stated correctly.** The recovery/replay order; the LIFO/FIFO confusion; the harness attempt. Ordinary, precise, boring — until it is tested. *Anxiety target: there is a real mechanism, and it is not enough.*
5. **The falsification.** The restart log: the trigger occurred outside retrograde without the effect. C1 cannot be the cause of these incidents. *Anxiety target: the ordinary story is contradicted, not merely missing.*
6. **The pattern.** The narrator gathers every reversal across the years and overlays the station dates. Every reversal inside a window; every window's reversals; the clean nights outside. *Anxiety target: the correlation is exact and costly to dismiss.*
7. **The ephemeris.** The narrator handles the astronomy as data: apparent motion, geocentric, ~19% of days, real station dates. He states the base rate and the selection risk; he refuses to conclude. *Anxiety target: even his caution points at the planet.*
8. **The operator's private log.** A frightened man's ledger of reversals and personal misfortunes, clustered in retrograde; his avoidance of deployments; his departure. The narrator marks it as the operator's, motivated and uncorroborated — and keeps reading it. *Anxiety target: the correlation has moved from the machine to a life.*
9. **The other candidates, falsified.** O1–O6 in the narrator's exact, qualifying register; each with its specific disproof. *Anxiety target: there is nothing left to blame but the planet.*
10. **The narrator's own drift.** He catches himself checking the next retrograde date before scheduling a change; he delays it; he does not say why. Behavioral, unexplained. *Anxiety target: the investigator is becoming the operator.*
11. **The unresolved close.** No cause is named; C1 is neither confirmed nor exonerated; the next retrograde window is known and coming. The settlement engine is still running. *Anxiety target: it will happen again, and everyone knows when.*
12. **The residue.** A private field note (wording reserved; see §17, Option F) and the handoff to Case VI: a causal standard that has moved. *Anxiety target: the case changes how the narrator weighs the world.*

---

## 10. Human stakes and personal operational consequences

`$id-5364595046057851` and the issue brief require believable stakes and personal consequences that make the astrological reading emotionally tempting.

### 10.1 The direct harm (one cycle, specific victims)

Recommended: the anchor reversal left a small member firm's **payroll** part-settled and part-double-settled. Requirements:

- one named victim, lightly sketched (a worker whose rent payment bounced; a manager who had to explain it) — no biography;
- the harm is discovered before the planet is mentioned (beat 3 before beat 6);
- the harm is **irreversible in the ordinary sense**: the money moved the wrong way, some of it twice, and the correction itself is another settlement that can itself reverse;
- the cooperative's exposure is stated concretely (a member firm leaves; a regulator asks; the on-call is blamed).

### 10.2 The operator's cost (the personal correlation)

The operator who first handled a reversal kept a private log. In it, the settlement reversals and his own misfortunes — a contract that failed, a trip that went wrong, a relationship that ended — cluster in retrograde windows. He began to refuse deployments during retrograde. He was let go, or left, and the log passed to the narrator. Design requirements:

- the log is **the operator's**, not the narrator's; the narrator marks its motive and its unreliability;
- the personal events are ordinary and specific enough to be sad rather than gothic;
- the narrator must not confirm the correlation; he must show that he keeps reading anyway.

### 10.3 The narrator's cost (his own operational consequences)

The narrator's involvement has consequences for his own practice:

- he checks the next retrograde date before scheduling a change, and delays the change;
- he keeps a private calendar he would not show anyone;
- he notices that he has begun to treat a planetary position as a scheduling input, and that noticing does not stop him;
- this is the residue (beat 12) and the bridge to Case VI.

### 10.4 Escalation rule

Consequences escalate from **money** (the victims) to **a person** (the operator) to **the narrator** (his practice), each shown behaviorally. No consequence is announced, poetic, or explained; the dread accrues from specificity and restraint.

---

## 11. Narrator stance and source reliability

| Element | Narrator's public stance | Narrator's private state | Reader's position |
| --- | --- | --- | --- |
| The reverse settlement | documented; reported as the incident's established record | accepted without reservation | ordinary, undeniable |
| Candidate C1 | "a real way to reverse a cycle; not what happened here" | the falsification sits badly | ordinary story contradicted |
| The restart log / negative evidence | stated as a finding | the finding is the thing that frightens him | the correlation survives |
| The astronomical overlay | "a correlation; I state the base rate" | he cannot put it down | invited to weigh it |
| The operator's private log | "his, not mine; I cannot verify it" | he keeps reading it | unease: the pattern has a life |
| His own drift | not stated; shown by the calendar and the delay | he knows he is drifting | the investigator changes in view |

**Narrator belief rule:** he never announces belief, and he never announces the strategy of his withholding (`$id-6418273059462718`). His private leaning is carried entirely by behavior: what he checks, what he delays, what he refuses to file. This preserves `$id-9264982270043622` and `$id-0861352612251497`.

---

## 12. The dread mechanism

The case's fear must come from procedure and consequence, never from declaration (`$id-0964292624358295`, `$id-5364595046057851`). The mechanisms:

1. **The system of record ran backward.** Not data loss, not corruption — the ledger applied the past in reverse. The ground truth itself is the uncanny object.
2. **The evidence is abundant, not absent.** This is the deliberate inversion of Case II (`$n34176`): there, watching made the failure vanish; here, the record is complete and unambiguous, and it still cannot be explained. The horror is not "it hides"; it is "it is fully documented and impossible."
3. **The only surviving correlate is a planet.** The narrator's method eliminates every ordinary timing explanation and leaves an astronomical cycle. A category his method cannot use and cannot dismiss.
4. **The pattern reached a life.** The operator's private log moves the correlation from the machine to a person's misfortunes. Pattern-making is the skeptical reading; the narrator cannot fully take it and cannot put it down.
5. **The narrator is drifting.** He catches himself treating retrograde as a scheduling input. He knows it is superstition and does it anyway. This is the collection's "fraying at the edges," shown, not announced.
6. **No solution, no end.** The next retrograde window is known; the engine is still running; the case cannot close (`$n38799`).

**Rule:** no comic detour may discharge the dread after beat 4. Humor before that must be grim and procedural. No sentence may name Mercury as a cause; the reader must assemble that themselves.

---

## 13. Style, voice, and distinctiveness within the collection

### 13.1 The procedural-ephemeris register (this case's distinct style)

Cases I–II are reconstructions; Case III is a made-up tale of a private dream; Case IV is a compiled legend. Case V's distinct register is the **procedural ephemeris**: the dossier compiler overlaying a machine record with an astronomical one, in the flattest possible voice.

Voice markers (to preserve):

- the narrator's most exact register: tables, timestamps, base rates, explicit falsifications;
- astronomical data presented as **data**, never as mysticism: "Mercury was in apparent retrograde" is checkable; "Mercury caused this" is never written;
- hedges as craft: "the correlation is exact; the inference is not mine to make";
- the operator's log quoted sparingly, always attributed, never endorsed;
- no Lovecraftian vocabulary; the uncanny comes from the narrator's altered perception of an ordinary ledger.

### 13.2 Physical palette (selective, double-duty)

- **The Clearing House at night:** the hum of the settlement engine, a wall of member balances, the specific screen where the mirror appears; the building empty, the window dark.
- **The morning:** lights on, phones ringing, the human harm on a screen — the documented layer's physicality.
- **The narrator's desk:** the journal printout, the ephemeris table, the operator's paper log, a marked calendar — the investigation's physicality.
- Distribution: at least one sensory beat per major phase; none that announces theme.

### 13.3 Prose budget

Recommended eventual §V length: **~1,400–2,000 words** (current §V is the NOTE only, ~110 words; Case I ≈ 1,300; Case II ≈ 1,000; Case IV design suggests ~1,200–1,800). The timeline, the falsifications, and the correlation need room without decorative expansion.

---

## 14. Chapter transitions

### 14.1 Transition in (from Case IV, The Leprechaun of Off-by-One)

- Case IV ends with an unfiled legend, a moved threshold, and the narrator's private habit (reading loop bounds twice).
- **Proposed bridge (diegetic, behavioral):** the narrator opens Case V by doing the thing Case IV taught him — checking the record twice, reading the diff of anything that touches a limit. The discipline that Case IV left behind is exactly what Case V demands; the bridge is the habit, not a statement about method. No strategy is announced.

### 14.2 Transition out (to Case VI, The Crocodile in Vienna)

- Case V ends with a causal standard quietly moved: the narrator has begun to treat an astronomical correlate as *relevant*.
- Case VI is built on the **absence** of a transatlantic software effect — a non-event handled as evidence.
- **Proposed bridge:** Case V's residue is the causal drift; Case VI is where it becomes absurd. The narrator leaves Case V unable to say why the planet matters and unable to say it does not; Case VI shows him applying that same drift to geography. The bridge is behavioral and must not announce the epistemic strategy (`$id-6418273059462718`).

---

## 15. Preserved peaks (must-not-break list)

1. **The mirror journal:** the cycle's forward and reverse application both present, exact and total. Not random reordering, not data loss.
2. **The negative evidence:** the restart log showing the trigger outside retrograde without the effect. The case's spine.
3. **The falsifications:** at least four ordinary candidates, each with a specific disproof.
4. **No solution:** C1 identified as possible, never confirmed; no fix narrated (`$n38799`).
5. **No asserted cause:** Mercury is never named as a cause (`$n85239`).
6. **The observation inversion:** instrumentation does not suppress the failure (`$n34176`).
7. **The human harm and the operator's log:** specific, attributed, non-gothic.
8. **The narrator's silence about his stance:** no announced belief, no announced strategy.
9. **Structure:** Case V remains one of seven principal cases; nothing is added or removed.

---

## 16. Measurable acceptance tests

A future prose pass is acceptable for review when all of the following hold. "Verify" is against the revised `supernatural.md` §V and the endnotes.

| # | Criterion | How to verify | Evidence |
| --- | --- | --- | --- |
| A1 | Failure is a reverse settlement, exact and total | read the anomaly description | a cycle applied in reverse; journal contains forward and reverse orders; not data loss, not random reorder |
| A2 | Harm is specific, documented, human-faced | read beats 2–3 | one named consequence; discovered before any planet mention |
| A3 | Distinct from the Heisenbug | search for observation/instrumentation | no sentence says the failure recedes under watching; the record is complete and unchanged by observation |
| A4 | No solution | read the whole case | no fix, patch, or resolution is narrated; C1 is possible and unconfirmed |
| A5 | No asserted cause | read all diegetic sentences | no sentence in the narrator's voice says Mercury caused the reversal; astrological lines are attributed or explicitly declined |
| A6 | Ordinary candidates present and falsified | count candidates and disproofs | ≥ 4 candidates (C1 + O1–O6 subset), each with a specific, checkable disproof |
| A7 | Negative evidence present | locate the restart log | trigger occurred outside retrograde without the effect; stated as a finding |
| A8 | Correlation exact and dated | locate the overlay | every reversal inside a real retrograde window; ≥ 1 clean high-volume night outside; dates match an ephemeris |
| A9 | Astronomical data real and sourced | check station dates | dates match a cited ephemeris; "apparent retrograde" described correctly; base rate stated |
| A10 | Base-rate / selection caution present | read the ephemeris beat | narrator states the ~19% base rate and the risk of selection; does not overclaim |
| A11 | Source reliability marked | read the operator's log beat | the log is attributed to the operator and marked motivated/uncorroborated; the narrator does not endorse it |
| A12 | Personal consequences escalate | apply §10.4 | money → person → narrator, each shown behaviorally |
| A13 | Narrator's stance behavioral | read the drift and residue beats | a calendar, a delayed change, a private note; no "I believe" and no strategy announcement |
| A14 | Dread from procedure | read beats 4–12 | no generic horror decoration; no comic detour after beat 4; fear arises from the record and the correlation |
| A15 | Transitions connect | read case boundaries | in: Case IV's double-check habit; out: causal drift → Case VI's non-event |
| A16 | Structure unchanged | diff headings | seven principal cases unchanged; no new principal case |
| A17 | Design-only pass | git diff | this branch changes no `supernatural.md` sentence |
| A18 | Graph consistency | meaning graph | if prose changes, the seven Case V nodes are updated with exact `text` and total coverage |

Optional quantitative guardrails (author to confirm): §V within **~1,400–2,000 words**; at least **four** falsified ordinary candidates; **zero** astrological lines in the narrator's own voice that assert causation; at least **four** distinct sensory details.

---

## 17. Alternatives for human review

These are **proposals**, not intent changes. Each states what it would gain and what it risks.

### Option D — Domain of the harm

- **D1 (recommended):** a payments clearing cooperative settling payroll, rent, and supplier invoices. Gains: high stakes, human faces, chained obligations that make reversal harmful. Risks: over-specifying the business can date the story.
- **D2:** an interbank RTGS / settlement system. Gains: maximum stakes. Risks: abstract; fewer human faces.
- **D3:** a subscription-billing or direct-debit processor. Gains: relatable recurring harm. Risks: lower stakes than payroll.
- **D4:** a smart-contract escrow. Gains: "contracts" resonance with Mercury. Risks: invites blockchain tangents and a "solved" flavor.
- **Decision needed:** domain and how explicit the victim is.

### Option M — Mechanism of the reversal

- **M1 (recommended):** recovery/replay LIFO/FIFO order confusion; necessary-looking, falsified by the restart log. Gains: real, subtle, order-dependence class; supports the "contradicted" epistemic shape. Risks: needs a clean statement in the prose.
- **M2:** a coarse-timestamp unstable sort reordering chained instructions. Gains: classic, recognizable. Risks: closer to Case IV's off-by-one territory; feels more mechanical.
- **M3:** a backwards clock/time-source step. Gains: thematic (time). Risks: easy to "solve" by checking the clock log; harder to keep unresolved.
- **M4:** no stated mechanism at all — the mirror is simply documented. Gains: maximum ambiguity. Risks: loses the "ordinary candidate" that makes the temptation strong.
- **Recommendation:** M1, with M4's restraint about *confirming* it.

### Option C — Correlation scope

- **C1 (recommended):** a multi-year recurrence: every reversal inside a retrograde window across several years, with clean negative-evidence nights outside. Gains: precision; the base-rate computation; real dread. Risks: the narrator must have access to years of records.
- **C2:** a single extended incident whose start and end bracket a retrograde station. Gains: tight; easier to stage. Risks: less "precise correlation"; weaker base rate.
- **Recommendation:** C1, with C2 available for a shorter chapter.

### Option P — Narrator proximity

- **P1 (recommended):** the narrator was not the on-call; he reconstructs from the journal and the operator's account, then investigates the pattern himself. Gains: source distance; the operator carries the emotional cost; the narrator's own drift can still occur during the investigation.
- **P2:** the narrator was the on-call. Gains: immediacy. Risks: dilutes the operator's log and repeats Case II's firsthand frame.
- **Recommendation:** P1.

### Option W — Operator disposition

- **W1 (recommended):** he kept the private log, began avoiding retrograde deployments, and left the company; the log passes to the narrator. Gains: the personal correlation; a human cost. Risks: slightly gothic if overplayed; keep the events ordinary.
- **W2:** he is still there, quiet, and will not discuss it. Gains: contemporary; a possible interview. Risks: an interview could domesticate the case if he confirms a mechanism.
- **Recommendation:** W1 or W2; not both. He must not confirm the supernatural reading.

### Option F — The field note

- **F1 (recommended):** a private dossier field note whose theme is the falsified model — the closer the model fits, the more the world seems to take issue. This is the natural home for the global MUST-HAVE "FIELD NOTE #X The closer your model fits the world, the more the world will take issue." Wording reserved for the prose pass. Gains: matches the dossier form; the note as residue. Risks: field-note numbering must be confirmed against the overall plan.
- **F2:** no field note; the calendar and the delayed change are the residue. Gains: quieter. Risks: breaks the Field Note pattern (Case I has #1) without human approval.
- **Decision needed:** field-note numbering and whether the global MUST-HAVE is assigned here.

### Option R — The "fix that fails" variant (human decision; conflicts with `$n38799`)

- **R1:** the team confirms C1, ships a fix, and the reversals recur in the next retrograde — the strongest falsification and the clearest non-tidy ending. **But it narrates a solution and its failure, which the NOTE forbids (`$n38799`).** Flagged, not recommended without explicit human approval.
- **R2 (default):** no fix; C1 remains possible and unconfirmed; the negative evidence alone does the falsifying. Complies with the NOTE.
- **Decision needed:** whether the author wishes to relax "Do not talk about solutions" for the failed-fix beat.

### Option E — Ending

- **E1 (recommended):** unresolved; the next retrograde window is known and coming; the engine is still running. Gains: dread with no release. Risks: none identified; matches the NOTE.
- **E2:** the system is retired and the reversals stop — but the narrator cannot say why, and the correlation remains. Gains: closure with residue. Risks: edges toward a tidy ending; the stopping is another unexplained correlation.
- **Recommendation:** E1.

---

## 18. Open questions and conflicts to surface

1. **Domain of harm** — unspecified in the NOTE; requires a human choice (Option D).
2. **Mechanism** — M1 is recommended but unconfirmed by design; the prose must not present a fix (`$n38799`).
3. **Correlation scope** — multi-year recurrence (C1) versus a single incident (C2); affects the base-rate beat.
4. **Field-note numbering and global MUST-HAVEs** — whether Case V carries a field note and whether the "closer your model fits" MUST-HAVE is assigned here (Option F).
5. **The "fix that fails" beat** — R1 would strengthen the falsification but conflicts with "Do not talk about solutions" (`$n38799`); this is a human intent decision, not an agent choice.
6. **Endnote policy for a made-up case** — Cases I–II anchor to documented incidents; Case V is made up. The astronomical dates are real and may be cited; a "solution" must not be. No recommendation; the collection's endnote pattern is a human decision.
7. **Astronomical sources** — published station dates differ by up to a day; the prose pass must pick one ephemeris and cite it.
8. **No conflict found** between the local `<NOTE>` and the live Intent Records: the NOTE's "document the timeline… temptation, not a decree" and `$id-7062117495708504`'s "never relying on the narrator merely asserting astrology" are compatible and jointly require the falsification structure in §8. The one tension — "the implication should be that the bug was actually caused by Mercury" (`$n75736`) versus "without describing Mercury as a confirmed cause" (`$n85239`) — is resolved by the dossier's established method: the implication is carried by the correlation and the reader's inference, never by narrator assertion. If the human author reads `$n75736` as requiring a stronger, diegetic endorsement, that is an intent change to surface, not to assume.

---

## 19. Summary for the reviewer

Case V is the collection's most disciplined surface built around its least admissible conclusion. A payments clearing engine applies a whole settlement cycle to member accounts **in reverse**, exactly and totally, so the system of record runs the past backward and the day's obligations settle partly twice and partly not at all. A real, subtle candidate — a LIFO/FIFO order confusion on the recovery/replay path — explains *how* a cycle can reverse, and is then **falsified by the operational record**: the trigger occurred on many nights outside retrograde without a reversal, and the reversals occurred only inside retrograde windows. Load, deployments, the calendar, operator fatigue, provider incidents, and clock steps are each eliminated with a specific disproof. What survives is an exact, dated correlation with the astronomical windows in which Mercury is in apparent retrograde — real ephemeris dates, stated as data, with the base rate and the selection risk made explicit, and Mercury never named as a cause. The harm is human and specific (a failed payroll, a missed rent, a named victim); the operator's private log moves the pattern from the machine into a life; and the narrator's own drift — a calendar, a delayed change, a private note — moves it into his practice. The case ends unresolved, with the next window known and coming, and hands Case VI a causal standard that has quietly moved. It is deliberately not the Heisenbug: the failure does not hide from observation, it is fully documented and impossible.
