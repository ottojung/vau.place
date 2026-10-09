# Coda — Design Blueprint

**Status:** design only, human review required. This document is a blueprint; it does not change the manuscript prose, the meaning graph, or any Intent Record.
**Branch:** `design/240-coda` (non-main).
**Board issue:** #240 — "[Supernatural] Coda — design and goals".
**Target manuscript:** `website-root/serve/post/supernatural/supernatural.md`, §Coda (currently lines 382–393: a `<NOTE>`, a `<PLACEHOLDER/>`, and one `<MUST HAVES>` block).
**Target deliverable of the eventual prose pass:** a finished coda that satisfies the live Intent Records, the local coda `<NOTE>`, the closing `<MUST HAVES>` moral, and the acceptance tests below, without changing authorial goals.

---

## 1. Mandate and non-goals

This document specifies **what the coda should do and how a future prose pass can verify it**. It is explicitly not an edit to `supernatural.md`, to `docs/meaning-graph.md`, or to any file under `docs/intent-records/`.

In scope:

- the coda's **emotional and philosophical landing**;
- the narrator's final state (disciplined rational inquiry plus **privately superstitious behavior**);
- **case callbacks** to all seven principal cases and the prologue;
- the **dossier / moth / check** motif system and its payoff;
- a **concrete final image**;
- an explicit list of **what must remain unknown**;
- integration of the **required closing thematic `<MUST HAVE>`** without stating a moral;
- scene beats, voice rules, reader-unease mechanics, chronology/frame;
- transitions in from §VII and out of the book;
- measurable acceptance tests;
- **alternate endings** for the human author.

Out of scope / non-goals:

- rewriting coda prose;
- changing the prologue + seven-case + coda structure, the narrator stance, the escalation, or any live Intent Record;
- resolving the intended ambiguity (the ordinary and the numinous must both remain live);
- asserting that any case was supernatural;
- adding a new principal case, a new revelation, or a new character;
- editing the meaning graph in this pass.

The coda `<NOTE>` (`supernatural.md` 384–387), the coda `<MUST HAVES>` block (391–393), the top-level `<NOTE>` (1–25), the preamble `<MUST HAVES>` (27–32), the prologue `<MUST HAVES>` (55–58), and the live Intent Records are the governing constraints. Where this design proposes something that would require an intent change, it is flagged in §19 as a **human decision**, not assumed.

---

## 2. Live constraints the coda must satisfy

### 2.1 Local coda `<NOTE>` (`supernatural.md` 384–387)

Verbatim directives:

- "The coda should make the reader recognize a changed way of perceiving ordinary systems, not simply restate a moral about uncertainty or limits of science."
- "Leave readers with an embodied residue of fear and vulnerability as well as the narrator's continuing commitment to careful evidence."

### 2.2 Local coda `<MUST HAVES>` (`supernatural.md` 391–393)

The block requires "Something with the same moral as":

> "We live by the text; we survive by the small, retold stories that help us decide which part of the text applies when the world grows strange. If you keep a dossier of your own, write in a hand you will recognize when you are older. Tape in what must be taped. Leave space in the margins for the things we still do not know how to name."

Per the top-level `<NOTE>` (line 5), quoted must-haves are exact phrases unless they are thematic; this block is introduced by "Something with the same moral as," so the **moral** is the requirement and the quoted text is the exemplar. The design treats the quoted wording as the target moral and requires that it be **enacted or spoken in the narrator's own grave register**, not pasted as a thesis. (See §10.)

### 2.3 Preamble and prologue must-haves the coda must not contradict

These belong to the preamble/prologue (`supernatural.md` 27–32, 55–58), not the coda, but the coda is their long-range payoff and must stay consistent with them:

- `$n65643` — "I had written prose that described procedures in the future tense, as if promising the very sun, and when the sun obeyed I pretended it was because we had the grammar correct."
- `$n61044` — "FIELD NOTE #X The closer your model fits the world, the more the world will take issue."
- `$n65527` — "... like myself—skeptics who have seen just enough to be superstitious."
- `$n77735` — "... there are systems whose failure modes include poetry."
- `$n95933` — "People ask if I believe in such things."
- `$n92807` — "Read them so that when the world leans on your specification, you recognize the weight."

**Rule:** the coda may **echo** these in sense and image, but must not duplicate them verbatim unless a human decides the exact phrase belongs at the end. In particular `$n65527` ("skeptics who have seen just enough to be superstitious") is the coda's thesis stated in the narrator's own voice; if the preamble does not carry it, the coda is the natural home (a human decision; see §19 Q1).

### 2.4 Relevant Intent Records

| ID | Title | Bearing on the coda |
| --- | --- | --- |
| `$id-7494998113772687` | Seven-case dossier structure | The coda is the third structural component (prologue + exactly seven cases + coda); it must not become an eighth case or a new revelation. |
| `$id-9264982270043622` | Narrator privately leans supernatural | The coda is the strongest expression of this: private, reluctant, not performed, not fully admitted even to himself. |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | The narrator's public register stays skeptical; the supernatural is hinted, invited, never declared. |
| `$id-5364595046057851` | The reader must feel the danger and dread | The ending must leave felt fear and vulnerability, not a didactic claim; no arbitrary monsters or overwrought metaphor. |
| `$id-0964292624358295` | Horror and humor emerge from serious procedure | The coda's unease must arise from procedure and concrete objects, not generic horror decoration. |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | The coda is the terminus of the escalation; the narrator's method is intact while his tolerance for the unordinary is maximal. |
| `$id-7350745426882596` | Escalation is epistemic as well as supernatural | The coda shows him spending effort preserving skeptical form while privately acting on a premise he would once have rejected. |
| `$id-6418273059462718` | Do not announce the manuscript's epistemic strategy | No narrator-as-author line advertising that the supernatural is optional/unnecessary/being kept alive. |
| `$id-9688210860921309` | Human intent outranks autonomous taste | §18 alternatives are proposals; they do not silently change intent. |
| `$id-9763436880715349` | Do not optimize toward generic prose | Preserve the dossier's oddness, restraint, and productive discomfort; do not sand the coda into a smooth essay. |
| `$id-2642614869480108` | Revisions preserve semantic and inferential work | A prose pass must check callbacks and inferences against the meaning graph, not just polish. |

### 2.5 Meaning-graph nodes that encode current intent

Coda nodes:

- `$n10969` — "The coda should make the reader recognize a changed way of perceiving ordinary systems, not simply restate a moral about uncertainty or limits of science."
- `$n50030` — "Leave readers with an embodied residue of fear and vulnerability as well as the narrator's continuing commitment to careful evidence."
- `$n99708`, `$n98283`, `$n70264`, `$n96851` — the four sentences of the closing `<MUST HAVES>` moral.

Motif nodes the coda must pay off:

- Dossier frame: `$n36938` ("I began to keep a dossier."), `$n89766` (the sheaf of field notes), `$n54255` ("Years later, when I began the dossier…").
- The check: `$n95615` ("somewhere a check is missing…"), `$n88506` (the ledger of blame), `$n22932` (the 4,096 in the margin), `$n91363` ("sky lower than the bird"), `$n78293` (the cathedral of checks), `$n88883` ("what we write on paper is not what the air will carry").
- The moth: `$n33563` ("Proofs I Do Not Argue With"), `$n50947` (moth taped to the log), `$n70307` (9 September 1947), `$n67775` (engineering superstition made literal), `$n10935` ("tape it beside the record"), `$n10406` ("The moth looks unconvinced.").
- Field notes and the qualification: `$n86401` / `$n91668` (Field Note #1, "the clean error… no prints"), `$n63199` ("I did not write a field note that afternoon."), `$n94242` ("the word that haunts this dossier: likely"), `$n37749` ("*very probably*").
- Case II residue: `$n96467` ("*timing*" in the margin), `$n52518` (the blank seventh row), `$n70953` ("The thing hates to be watched.").

A future prose pass must update the coda nodes in the same change and add nodes for any new coda sentences; this design pass changes no manuscript sentence, so **no graph node changes are required here.**

---

## 3. The coda's job in the collection arc

- The **prologue** establishes why this narrator keeps a dossier and plants the motifs (handwriting, tape, margins, the text, the air, watching).
- **Cases I–VII** escalate from a sane, fully domesticable anomaly (I) through observation-sensitivity (II), a documented impossibility plus an unprovable legend (III), operational folklore (IV), causal temptation (V), a deliberate test of the narrator's drifting causality (VI), and an honest mundane baseline (VII).
- The **coda** is not an eighth case and not a verdict. It is the moment the reader sees the **dossier as a lived practice**: the same method that solved Case I still runs, while the superstition that grew across the cases now sits in the margins of that method.

The landing has two simultaneous obligations, and the coda fails if either collapses into the other:

1. **Philosophical:** the reader recognizes that the narrator now perceives *ordinary systems differently* — as things that can "take issue" with a specification. This must be shown, not asserted.
2. **Emotional:** the reader is left with **embodied vulnerability and unease**, not with a conclusion. The book withholds.

The coda is the book's last chance to prove `$id-5364595046057851` at the collection scale: the fear must be *felt* at the end, not summarized.

---

## 4. The narrator's final state: disciplined inquiry + private superstition

This is the coda's central design problem. The top-level `<NOTE>` requires: "Preserve the narrator's procedural rationality even as his actions become subtly superstitious; do not resolve the book into a lecture that scientific reasoning has failed."

### 4.1 What does not change (the rational surface stays intact)

- He still makes **checks**: confirms, compares, qualifies, records the difference.
- He still distinguishes evidence from inference and marks the difference between **"likely"** and **"known"** (`$n94242`, `$n37749`).
- He still accepts a **mundane** explanation when the evidence supports one — Case VII is the control sample, and the coda must let the reader see him accept one *at the end* (`$id-9421142343424984`).
- He still refuses to **assert** the supernatural (`$id-0861352612251497`).
- He does not say that science failed, that reason is useless, or that the world is unknowable. Any such sentence is a defect.

### 4.2 What has changed (the private superstition, shown behaviorally)

The superstition must be **behavior and form**, never creed. Recommended observable behaviors (choose two to four; never explain them):

- **The double check.** He checks an ordinary system twice, and the second check is not for the record.
- **The name.** He avoids saying aloud the name of one system (or one case), or he says it only in writing — the moth logic, "give the failure a name, and perhaps you can banish it" (`$n67775`).
- **The calendar/almanac.** He keeps a calendar or almanac beside the logs that his method does not require (a Case V residue).
- **The ritual check before sleep / before the night shift.** A small, unremarked act performed in an order that matters to him.
- **The margin.** He leaves a blank margin deliberately, or he writes the date and stops.
- **The future tense.** He notices that he now writes procedures in the future tense the way one makes a promise, and is careful not to break it (`$n65643`).
- **The taped specimen.** He keeps taping things in: the moth photograph, a clipping, a page.

**Rule:** the narrator must not name his own behavior as "superstition." The reader names it. If the prose labels it, the effect is lost (`$id-6418273059462718`).

### 4.3 The coexistence, stated as a design invariant

> The coda must be able to show, in the same scene, the narrator **making a rigorous check** and **leaving a margin blank on purpose**. Neither cancels the other. That single juxtaposition is the book's landing.

This is the concrete form of "skeptics who have seen just enough to be superstitious" (`$n65527`).

---

## 5. Case callbacks

The coda should return to **all seven cases** and the prologue, but as **concrete tokens** — objects, words, or images the dossier physically holds — not as plot summaries. A callback that merely reminds the reader what happened is a defect; a callback that puts the object back in the narrator's hand is the point.

| # | Case | Callback token (recommended) | How it returns in the coda |
| --- | --- | --- | --- |
| — | Prologue | the dossier, the hand he will recognize, the tape, the margin | The coda is the dossier being finished; the physical acts recur. |
| I | Schaerbeek Bit | the Mark II moth photograph; "very probably"; 4,096 / 2¹²; the cathedral of checks | The moth photograph is the coda's central talisman; the word "likely" is used once, carefully; the check motif is enacted. |
| II | Heisenbug | "*timing*" in the margin; the blank seventh row; "The thing hates to be watched." | The blank row becomes the coda's blank margin/line; the room's response in the final image echoes the watched/unwatched reversal. |
| III | Maxwell's Demon | the dream; the duplicate key; the phrase "the server room is cursed" | One restrained note that he now greets or avoids a room, or keeps a key/fingerprint record; the demon is left unconfirmed. |
| IV | Leprechaun | the moved loop bound; the small green figure; "off by one" | He checks a bound twice; a folk remedy or phrase is kept without being believed. |
| V | Mercury in Retrograde | the operational timeline; the almanac/calendar | The calendar kept beside the logs; a date he now notices without asserting cause. |
| VI | Crocodile in Vienna | the crocodile; the conspicuous non-effect across the Atlantic | A clipping or note; the narrator's causal field has widened, but the absurdity stays implicit. |
| VII | Natural, Boring Crash | heat/power failure; the mundane explanation | The coda's proof that he can still accept a boring cause — the palate cleanser that keeps the ending honest. |

**Rules for callbacks:**

- Prefer **one physical token per case**, ideally held in the dossier.
- Do **not** re-explain the case; the reader was there.
- Do **not** force a callback for a case that has no object yet; instead, mark it as a **prose-pass dependency**: the case designs must leave the coda at least one taped/referenced token. (See §19 Q5.)
- Case VII's mundane acceptance must be visible in the coda, not only recalled, or the ending tips into pure dread and loses the "disciplined inquiry intact" requirement.

---

## 6. The motif system: dossier, moth, check

These three motifs are the coda's structural spine. They should **converge in one action** near the end.

### 6.1 Dossier (the frame)

- The coda is narrated by the mature, dossier-keeping narrator — the same voice as the prologue.
- The dossier is **physically present**: a sheaf, a folder, a bound stack, pages with taped inserts and margins.
- It is a **letter to his older self** ("write in a hand you will recognize when you are older"), and, by the preamble's "Read them…", also a letter to the reader.
- Field notes are numbered; the coda may add the **last field note** (unnumbered, or numbered but left incomplete). See §7 and §18.

### 6.2 Moth (the method's emblem)

- The Mark II moth (`$n50947`, `$n70307`, `$n10406`) is the emblem of the dossier's core gesture: **name the failure, tape it beside the record, and it may still look unconvinced.**
- The folder is *"Proofs I Do Not Argue With"* (`$n33563`).
- The coda should return to the **photograph** — ideally physically (taped in, looked at, held) — and preserve or echo **"The moth looks unconvinced."** The moth is the one witness the narrator trusts and the one that never agrees with him.
- "Tape in what must be taped" is the moth's instruction.

### 6.3 Check (the method itself)

- The "cathedral of checks" (`$n78293`), the missing check (`$n95615`), the ledger of blame (`$n88506`), the 4,096 in the margin (`$n22932`), and the violated invariant (`$n91363`) are the check motif's history.
- The check is what the narrator **still does**. The coda must show him performing one.
- The coda's twist on the motif: a check is **made**, and a check is **left blank** — the margin, the empty row — as an act of method, not failure.
- "We live by the text; we survive by the small, retold stories that help us decide which part of the text applies when the world grows strange" is the check motif's moral form: choosing which specification applies when the world leans (`$n88883`).

### 6.4 Convergence

The three motifs meet when the narrator:

1. **makes a check** (check) of an ordinary system;
2. **tapes the result / the moth photograph** into the dossier (moth, dossier);
3. **leaves the adjacent margin or last row blank** (dossier, check, what must remain unknown).

That sequence is the coda's engine and its final image. Everything else serves it.

---

## 7. The concrete final image

The coda `<NOTE>` requires "an embodied residue of fear and vulnerability." The task requires "a concrete final image." The image must be:

- **filmable** — one physical moment, not a montage or a reflection;
- **deniable** — every element explicable by ordinary means;
- **motif-bearing** — check + moth + dossier in one frame;
- **unresolved** — no confirmation, no verdict, no moral.

### 7.1 Recommended final image (F1)

The narrator is at the end of the dossier, at night, in a room of ordinary running systems. He performs one last check and writes the entry **in his own hand**. He tapes in the moth photograph. He reaches the last line — a check to be marked, or a name to be written — and **stops, pen above the blank**.

In that pause, the ordinary room answers with its smallest possible event: **a fan changes pitch, or a relay clicks, or a status light blinks out and back** — timed, deniably, to the instant he does not write. He does not look up. He does not explain it. He sets the pen down. He closes the dossier.

Final frame: **the closed dossier on the desk — the tape, the pen, the blank margin — and the room still running; the moth in the photograph still unconvinced.**

Why this works:

- It enacts all three motifs (check made, moth taped, margin blank).
- The vulnerability is physical: the hand, the pause, the unmarked line.
- The unease is deniable: the room made a sound; rooms make sounds.
- The narrator's method is intact: he checked, he wrote, he recorded — he simply did not complete the one line, and left the space.
- It withholds: no cause, no confirmation, no conclusion.

### 7.2 The "you" turn and the moral

The `<MUST HAVE>` moral is addressed to "you." The design recommends delivering it as the narrator's **closing instruction to his older self and, by the dossier's framing, to the reader** — brief, concrete, and grounded in the acts just performed:

- "We live by the text" — the specification he still trusts.
- "we survive by the small, retold stories" — the dossier's field notes and legends.
- "which part of the text applies when the world grows strange" — the check he still makes.
- "write in a hand you will recognize when you are older" — the hand in the final image.
- "Tape in what must be taped" — the moth photograph.
- "Leave space in the margins for the things we still do not know how to name" — the blank line.

**Rule:** the moral must be **earned by the physical action immediately preceding it** and kept short. It must not become a paragraph of reflection about uncertainty, science, or the limits of knowledge (`$n10969`). If the narrator explains *why* he leaves the margin blank, the coda has failed.

### 7.3 Candidate final images considered (summary; full alternates in §18)

- **F1 (recommended):** blank line + deniable room event + closed dossier + unconvinced moth.
- **F2:** the narrator writes his own name (the title `<PLACEHOLDER/>`) and leaves it blank/crossed — the unnamed thing is himself.
- **F3:** he tapes in a **blank specimen page** for a case he cannot yet name — the dossier ends unfinished, not closed.
- **F4:** the mundane resolution (a scheduled fan cycle) is visible to the reader while the narrator still notes the timing — maximal skepticism, unease from his noticing.
- **F5:** object-only ending: the moth photograph and the dossier, no narrator on the page (risk: loses the "continuing commitment to careful evidence").

---

## 8. What must remain unknown

The coda must **not** resolve any of the following. This list is a guardrail for the prose pass.

1. **Whether any case was actually supernatural.** No case is confirmed; no new evidence arrives.
2. **Whether the room responded in the final image.** The small event stays deniable; the narrator does not interpret it.
3. **Whether the narrator's superstition is warranted or is pattern-making / trauma.** Never adjudicated.
4. **The narrator's actual belief.** He never states it; "People ask if I believe in such things" (`$n95933`) is answered only by behavior.
5. **The wound that started the dossier** (prologue §2.2 of that design) — its full nature is never narrated.
6. **The reality of Case III's demon, Case IV's leprechaun, and Case V's astrological cause.** All remain legends/coincidences.
7. **The in-story cause of Case II's night.** The endnote may carry the technical resolution; the coda must not collapse the ambiguity by invoking it.
8. **What happened to the people in the unresolved cases afterward.** No epilogue roll-call.
9. **The moth's expression.** "Unconvinced" is never decoded into meaning.
10. **Whether the dossier helped anyone** or changed any outcome.
11. **The narrator's name** — the title's `<PLACEHOLDER/>` may remain unwritten, which would make the unnamed thing the narrator himself (a strong tie to "things we still do not know how to name"; human decision, §19 Q2).

---

## 9. Beats

Beat numbers are design units, not paragraph counts. The coda should be **short** — a threshold and a landing, not a case.

1. **Return to the frame.** The mature narrator; the room; ordinary systems running. Re-establish the voice of the prologue. No case summary.
2. **The dossier, physically.** The sheaf/folder on the desk; pages, tape, margins. The reader sees the object the whole book has been.
3. **The tokens.** Case callbacks as objects: the moth photograph, the timing margin note, the almanac/clipping, a checked bound, a key record, a heat log. One token per case, no recap.
4. **The method still stands.** He makes a check of an ordinary system; he qualifies; he distinguishes "likely" from "known." Show, don't announce, that the inquiry is intact.
5. **Case VII's sanity.** He accepts one mundane explanation plainly. This is the control sample that keeps the ending honest.
6. **The private superstition.** Two to four ritual behaviors (§4.2), performed, unexplained. The double check; the avoided name; the calendar; the future-tense care.
7. **The convergence.** He makes the final entry and tapes in the moth photograph.
8. **The blank.** He reaches the last line/row and stops; the margin is left empty; the pen hovers.
9. **The ordinary room answers.** The smallest deniable event at the moment he does not write (§7.1).
10. **The withholding.** He does not look up, does not explain, closes the dossier.
11. **The instruction.** The closing `<MUST HAVE>` moral, brief and concrete, addressed to the older self/reader, earned by beats 7–10.
12. **The held image.** Restate/hold the final frame: closed dossier, tape, pen, blank margin, room running, moth unconvinced.
13. **Last line.** A return to the opening image or phrase (frame closure) that leaves vulnerability embodied — not a moral, not a verdict. (Candidate: a variation of "The moth looks unconvinced," or a line about the room continuing to run.)

---

## 10. Integrating the required closing thematic `<MUST HAVE>`

The requirement is the **moral**, exemplified by the quoted text (`supernatural.md` 391–393; graph `$n99708`, `$n98283`, `$n70264`, `$n96851`).

### 10.1 What "the same moral" means here

- **"We live by the text"** — the narrator's faith in specification/procedure, established in the prologue and tested in Case I ("what we write on paper is not what the air will carry," `$n88883`).
- **"we survive by the small, retold stories that help us decide which part of the text applies when the world grows strange"** — the dossier itself, and the legend/secondhand cases (IV, VI) as the "retold stories"; the check as the act of deciding which text applies.
- **"write in a hand you will recognize when you are older"** — the dossier-as-letter-to-older-self; the physical handwriting in the final image.
- **"Tape in what must be taped"** — the moth photograph; the dossier's method.
- **"Leave space in the margins for the things we still do not know how to name"** — the blank line/margin in the final image.

### 10.2 How to land it without preaching

- **Enact first, state second.** The reader should already have seen the hand, the tape, and the blank before the instruction names them.
- **Keep it brief.** One short passage; no elaboration.
- **Keep it concrete.** Hand, tape, margin — not "uncertainty," "the limits of knowledge," or "the unknown."
- **Keep it in-voice.** The narrator's plain, grave, procedural register; no uplift, no consolation.
- **Do not explain the strategy.** No sentence about ordinary vs. supernatural explanations (`$id-6418273059462718`).
- **Optional second person.** The "you" may be the narrator's older self and/or the reader. If used, it must be one turn only and grounded in the preceding action (see §18 Option Y).

### 10.3 What would violate the requirement

- A paragraph that summarizes the book's lesson.
- A claim that science is insufficient or that reason failed.
- A claim that the supernatural is real, or that it is not.
- A sentimental or consoling ending.
- Repeating all seven cases as a recap to set up the moral.

---

## 11. Voice rules

1. **Person and tense.** First-person past for the body of the coda, as in the prologue. Present tense may intrude **once** at the end — the future-tense/grammar motif (`$n65643`) and the immediacy of the final image justify it, but it must not become a device.
2. **Register.** Precise, restrained, procedural; short declaratives for beats; longer layered sentences only for accumulation. Grave, meticulous, humor only implicit.
3. **Diction.** Technical and physical vocabulary, load-bearing: pages, tape, margins, hand, check, log, rack, fan, relay, light. No Lovecraftian vocabulary; the uncanny arises from the narrator's altered perception, not from gothic adjectives.
4. **Second person.** Permitted only in the closing instruction (one turn), addressed to the older self/reader.
5. **Field-note register.** Field notes and private notes in italics (`*timing*`, *"The thing hates to be watched"*); the coda's last note may be numbered or left unnumbered (see §18).
6. **Aphorism.** Allowed only when earned by a concrete object in the same beat; never as standalone wisdom.
7. **No announcement of strategy.** No narrator-as-author line about ambiguity, evidence, or the balancing of interpretations (`$id-6418273059462718`).
8. **No comic discharge.** Dry, grim humor is permitted; no joke may discharge the dread the coda establishes.
9. **Restraint.** Preserve oddness and productive discomfort (`$id-9763436880715349`). Do not smooth the coda into a generic literary ending.
10. **No new voice.** The coda is the same narrator as the prologue; no tonal leap, no new persona.

---

## 12. Reader unease mechanics (the lingering residue)

The coda must leave **vulnerability and unease**, not closure. Mechanisms to preserve:

| Mechanism | How it works | Guardrail |
| --- | --- | --- |
| **The deniable response** | The room answers at the exact moment of non-writing; ordinary cause always available. | Never confirm; never explain; keep it the smallest possible event. |
| **The unfinished act** | A check left blank, a line unwritten, a margin left open. | The incompleteness must read as deliberate method, not authorial negligence. |
| **The trusted object that won't agree** | The moth "looks unconvinced." | Do not decode the moth; do not make it speak. |
| **The private superstition in the margin** | Ritual behavior beside rigorous method. | Never label it; never justify it. |
| **The withheld verdict** | No case resolved; no belief stated. | No last-minute confirmation or debunking. |
| **The address to the reader** | "If you keep a dossier of your own…" makes the method contagious. | Brief; no sermon; the reader is trusted, not instructed. |

**Anxiety curve (coda scale):**

- Beats 1–4: **calm, competent** — the known world, the method intact. Low anxiety; this baseline is required so the ending's small event lands.
- Beats 5–6: **recognition** — the reader notices the ritual behavior before the narrator names it. Rising unease.
- Beats 7–8: **tension** — the convergence and the pause. Peak anticipation.
- Beat 9: **the small event** — the moment of fear, deniable.
- Beats 10–13: **residue** — the withheld verdict, the held image, the last line. Unease that persists after the book closes.

---

## 13. Chronology and frame

- **Narrator:** the mature, dossier-keeping narrator (prologue voice), looking back after all seven cases.
- **Time/place:** a room of ordinary running systems at night; the desk where the dossier is kept. The coda should not introduce a new location or a new case.
- **The frame closes:** the prologue opened by showing why the dossier exists; the coda shows the dossier being finished (or deliberately left unfinished).
- **No new chronology:** the coda does not date the cases or reveal their order beyond what the dossier already establishes.
- **Continuity:** the coda must not contradict any case's established facts, knowledge boundaries, or the endnotes' documented resolutions. Case VII's mundane explanation must remain a mundane explanation.

---

## 14. Transitions

### 14.1 Transition in (from Case VII, the natural boring crash)

- Case VII is the **honest control sample**: a mundane crash with a sufficient ordinary explanation, proving the narrator can still accept a boring cause (`$id-9421142343424984`; coda-adjacent graph nodes around `$n10969`).
- The coda should **open on that sanity** — a system running, an ordinary explanation accepted — and then show the superstition living beside it. The contrast is the point: he is not a man who has abandoned reason; he is a man who reasons carefully and still tapes a moth into the log.
- **Proposed bridge (restrained):** the coda begins with an ordinary check on an ordinary system, the kind Case VII taught him to trust, and the reader watches the method run — and then watches the margin.

### 14.2 Transition out (the end of the book)

- The coda is the **last thing in the manuscript before the Endnotes & Sources**. It must hand off to silence, not to a new promise.
- The final line should close the frame opened by the prologue and leave the reader holding the dossier's residue. No cliffhanger, no hook, no "to be continued."
- The Endnotes that follow are documentary apparatus; the coda must not depend on the reader reaching them to complete the emotional landing, though the endnotes' documented resolutions must not be contradicted.

---

## 15. Preserved peaks (must-not-break list)

1. **"The moth looks unconvinced."** (`$n10406`) — the moth's refusal to agree; the coda may echo or hold it, but must not decode it.
2. **The cathedral of checks** (`$n78293`) — the method's emblem; the coda's check should feel like a descendant of it.
3. **Field Note #1, "the clean error… no prints"** (`$n86401`, `$n91668`) — the dossier's first note; the coda's last note should rhyme with it.
4. **"*very probably*" / "likely"** (`$n37749`, `$n94242`) — the qualification that haunts the dossier; the coda's evidence language must preserve it.
5. **"The thing hates to be watched."** (`$n70953`) — Case II's residue; the final image's deniable response echoes it without restating it.
6. **The blank seventh row** (`$n52518`) — the coda's blank margin/line is its descendant.
7. **The closing `<MUST HAVE>` moral** (`$n99708`–`$n96851`) — integrated, not pasted; the moral preserved.
8. **Case VII's mundane acceptance** (`$n10969` area) — the coda must keep it visible.

---

## 16. Measurable acceptance tests

A future prose pass is acceptable for review when all of the following hold. "Verify" is against the finished coda in `supernatural.md` and the meaning graph.

| # | Criterion | How to verify | Evidence |
| --- | --- | --- | --- |
| A1 | Not a moral lecture | read all coda sentences | no sentence states a thesis about uncertainty, science, or the limits of knowledge; the `<MUST HAVE>` moral is enacted/embedded, not explained |
| A2 | Rational inquiry intact | locate method beats | at least one check, one qualification, and one evidence/inference distinction are present |
| A3 | Case VII sanity visible | read coda | one mundane explanation is accepted plainly, at the end |
| A4 | Private superstition shown, not stated | tag behaviors | ≥ 2 ritual behaviors present and unexplained; narrator never labels himself superstitious |
| A5 | No supernatural assertion | read all diegetic sentences | no sentence confirms the supernatural; no new evidence resolves a case |
| A6 | Case callbacks complete | map tokens | all seven cases plus the prologue have ≥ 1 concrete token; no case is re-summarized |
| A7 | Dossier motif | locate object | the dossier is physically present and used (hand, pages, tape, margin) |
| A8 | Moth motif | locate return | the moth photograph (or its logic) returns; "unconvinced" is preserved or echoed, not decoded |
| A9 | Check motif | locate return | a check is made; a check/line/margin is left blank on purpose |
| A10 | Concrete final image | read ending | one filmable image combining check + tape + blank; deniable; no montage |
| A11 | What must remain unknown | read §8 list against text | none of the §8 items is resolved |
| A12 | Required moral integrated | read closing movement | "We live by the text… margins" moral present in sense, brief, concrete, in-voice |
| A13 | Lingering unease | read last 3 beats | ending withholds closure; no consolation; no verdict |
| A14 | Voice consistent | read register | precise, restrained, procedural; no Lovecraftian vocabulary; no epistemic-strategy announcement |
| A15 | Transition in | read coda opening | follows Case VII's mundane baseline; method runs before the margin |
| A16 | Structure unchanged | diff headings | prologue + seven principal cases + coda unchanged; no new case or revelation |
| A17 | Design-only pass | `git diff` | this branch changes no `supernatural.md` sentence, no meaning-graph node, no Intent Record |
| A18 | Graph consistency | meaning graph | if a later prose pass changes prose, coda nodes updated with exact `text` and total coverage |
| A19 | Length guardrail (optional, author to confirm) | word count | coda within roughly **600–1,100 words** (a threshold and a landing, not a case) |

---

## 17. Evidence and fiction boundary

- The coda introduces **no new factual claims**. It reuses the cases' established categories: documented event, documented/plausible technical explanation, fictional reconstruction, narrator inference, supernatural implication.
- The coda's small final event is **narrator inference / ambiguity**, not a documented event.
- The Endnotes' documented resolutions (e.g., the Case II ProxySQL cause, the Case I report) remain uncontradicted and must not be collapsed into the coda's ambiguity.
- The coda must keep "documented facts, fictional reconstruction, hypotheses, and impossible suggestions distinguishable without explaining away the intended ambiguity" (top-level `<NOTE>`, `$n70250`).

---

## 18. Alternate endings for human review

These are **proposals**, not intent changes. Each states what it would gain and what it risks.

### Option F — Final image

- **F1 (recommended):** blank line + deniable room event + closed dossier + unconvinced moth (§7.1). *Gain:* enacts all motifs; deniable; unresolved. *Risk:* the room event could read as confirmation if overplayed; keep it minimal.
- **F2:** the narrator writes his own name (the title's `<PLACEHOLDER/>`) and leaves it blank or crossed out. *Gain:* ties the unnamed name to the narrator; strong "things we still do not know how to name." *Risk:* risks solipsism and a confessional tone.
- **F3:** he tapes in a blank specimen page for a case he cannot yet name; the dossier ends unfinished. *Gain:* openness; the method continues. *Risk:* may read as a hook for a sequel.
- **F4:** the mundane cause of the small event is visible to the reader (a scheduled fan cycle) while the narrator still notes the timing. *Gain:* maximal skepticism; unease from his noticing. *Risk:* may deflate the final image if the mundane cause is too prominent.
- **F5:** object-only ending — the moth photograph and the dossier, no narrator on the page. *Gain:* restraint; the object speaks. *Risk:* loses the "continuing commitment to careful evidence" and the hand motif.
- **Recommendation:** F1, with F4's discipline (keep the ordinary cause available) and F3's blank-specimen gesture available as a secondary beat.

### Option C — The closing check

- **C1 (recommended):** a check is **made and left blank** — the method and the withholding in one act.
- **C2:** the check is made and **completed**; the blank is only in the margin. *Gain:* method fully intact. *Risk:* less unease; the withholding weakens.
- **C3:** no check in the coda at all; the coda is reflection only. *Rejected:* violates "continuing commitment to careful evidence" and the check motif.
- **Recommendation:** C1.

### Option M — The final field note

- **M1 (recommended):** the coda adds a **last field note** that rhymes with Field Note #1, numbered (e.g., the next number) or deliberately left **unnumbered** to mark that the count does not close.
- **M2:** no new field note; the coda ends on the physical image only. *Gain:* restraint. *Risk:* the dossier's field-note register (a core motif) goes unused at the close.
- **Recommendation:** M1, unnumbered, kept to one or two lines.

### Option Y — The "you" address

- **Y1 (recommended):** one brief second-person turn in the closing instruction, addressed to the older self and, by the dossier's framing, the reader.
- **Y2:** keep the whole coda in first person; the moral is enacted entirely through action. *Gain:* no preachiness risk. *Risk:* the `<MUST HAVE>`'s "you" and "your" are harder to honor.
- **Recommendation:** Y1, one turn only.

### Option R — Whether the coda resolves anything

- **R1 (recommended):** resolve nothing; withhold the verdict.
- **R2:** resolve one case mundanely (Case VII-style) as the control sample, while the rest stay open. *Gain:* proves the method still works at the end. *Risk:* must not become a debunking of the collection.
- **Recommendation:** R1, with Case VII's *recalled* mundane acceptance (not a new resolution) visible in the opening beats.

### Option N — The narrator's name

- **N1 (recommended):** leave the title's `<PLACEHOLDER/>` unwritten; the name is one of the things left unnamed.
- **N2:** supply a name in the coda. *Gain:* closure of identity. *Risk:* removes a deliberate blank and weakens the "things we still do not know how to name" tie.
- **Recommendation:** N1.

---

## 19. Open questions and conflicts to surface

1. **The `$n65527` must-have's home.** "…like myself—skeptics who have seen just enough to be superstitious" is recorded as a **preamble** must-have. The coda is its natural payoff. Confirm whether the preamble carries it (coda only echoes) or the coda states it (preamble only sets it up). This is a human decision.
2. **The narrator's name.** Confirm N1 (leave the `<PLACEHOLDER/>` unwritten) or N2.
3. **The final image.** Confirm F1 or an alternate from §18.
4. **The deniable room event.** Confirm that the final image may include a small, explicable room response timed to the non-writing — and that it must never be confirmed. If the author judges this too close to a supernatural confirmation, F4's stricter form (ordinary cause visible) applies.
5. **Case-callback tokens.** Cases III–VII are currently `<NOTE>`-only stubs. The coda design assumes each case design will leave at least one taped/referenced token. Confirm this expectation with the authors of those designs, or the prose pass will have to invent tokens (risking continuity with cases not yet written).
6. **The coda's field note.** Confirm M1 (a last, unnumbered field note) versus M2 (physical image only).
7. **Length and the `<PLACEHOLDER/>`.** The coda `<PLACEHOLDER/>` (line 389) must be filled by the prose pass; confirm the 600–1,100-word guardrail.
8. **No conflict found** between the coda `<NOTE>` and the live Intent Records: the NOTE's "not simply restate a moral" and the `<MUST HAVE>`'s "same moral" are reconciled by **enacting** the moral through the final image and the closing instruction rather than stating it as a thesis. If a later prose pass finds these in genuine tension, surface the conflict rather than choosing silently.
9. **No conflict found** between "preserve procedural rationality" and "privately superstitious": they coexist by design (§4.3). The coda must show both in the same scene.

---

## 20. Summary for the reviewer

The coda is the dossier's landing, not its verdict. The narrator still runs the method — he makes a check, qualifies the evidence, accepts a boring explanation when one is sufficient — and beside that method he has become privately superstitious in behavior: a double check, an avoided name, a calendar he does not need, a margin left blank. The three motif systems (dossier, moth, check) converge in one physical action: he makes the final entry, tapes in the Mark II moth photograph, reaches the last line, and stops. In the pause, the ordinary room makes its smallest deniable sound. He does not explain it; he closes the dossier; the moth is still unconvinced. The required closing `<MUST HAVE>` moral — "We live by the text… leave space in the margins…" — is delivered briefly and concretely as his instruction to his older self and the reader, earned by the action immediately before it. Nothing is resolved; the superstition is never labeled; the belief is never stated; the vulnerability is embodied in the hand, the tape, the blank, and the room that may or may not have answered. All alternatives in §18 are proposals for human decision, not changes to authorial goals.
