# Prologue — Design Blueprint

**Issue:** #223 (design only — no manuscript prose is written or rewritten here)
**Status:** Design document for human review. Implementation is a separate issue (#224).
**Source manuscript:** `website-root/serve/post/supernatural/supernatural.md` (master, commit `120d5e9`)
**Governing constraints:** `AGENTS.md`; `docs/intent-records/story.md`; `docs/intent-records/editing.md`; the Prologue `<NOTE>` and `<MUST HAVES>` blocks; meaning-graph nodes `$n36795`–`$n92807` and `$n23032`.

---

## 0. State of existing work (read first)

Three live artifacts bear on this issue. This blueprint is an independent design; it does not edit any of them.

1. **Master draft.** The prologue on `master` is a five-sentence spine with three `<PLACEHOLDER/>` slots and two unintegrated `<MUST HAVES>` quotes. It has no transition into the Schaerbeek case.
2. **`origin/supernatural-prologue-design`** (commit `9a7f62f`, filed under the author's name). A prior blueprint for this same issue. Where this document agrees with it, the agreement is corroborating; where it diverges, the divergence is deliberate and argued below. Reviewers should treat the two blueprints as alternative designs, not as one lineage.
3. **`origin/supernatural-prologue-impl-224`** (commit `598eb33`) and **`origin/integration/242-dossier-audit`**. A reference implementation of the prologue already exists on these unmerged branches (the "valve incident" prologue, endnote 6). This blueprint is written so that it can be checked against that implementation: §10 acceptance criteria are phrased to be verifiable against any candidate prose, including the reference one. Nothing in this document modifies those branches.

---

## 1. Emotional goal

The reader should finish the prologue feeling **the fear of a careful man**, and should want to open the dossier with him despite — because of — that fear.

Concretely, the prologue must deliver:

- **Dread, not belief.** The reader must not be asked to accept anything supernatural. Every ordinary explanation stays intellectually available (top-level `<NOTE>`). What the reader accepts is narrower and worse: *this man is afraid, and his fear has procedures.*
- **Apprehension of harm.** The danger hinted at must carry credible human stakes — someone was nearly hurt — so the collection's later escalation inherits a real cost rather than a mood (`$id-5364595046057851`).
- **Curiosity with a hook.** The dossier's existence, its rules, and its first page should make the reader need to know what is inside it.
- **A specific unease.** Not generic spookiness: the unease of a specification that did not hold, a log that stayed silent, and a telephone that never quite stopped ringing.

The prologue is a threshold, not a case. It should be short — the current five-sentence spine plus the incident and the beats in §5, roughly 15–20 sentences of prose at implementation.

---

## 2. Why this narrator keeps the dossier

The draft states the fact ("I began to keep a dossier") but not the reason. The Prologue `<NOTE>` requires the reason be personal: why *this* investigator needs a dossier, and why preserving *uncertainty* matters to him. The design supplies three layered motives; all three must be felt, none announced.

### 2.1 The wound: a specification that did not hold

The narrator's professional faith is specification — write the procedure correctly and the world obeys ("I was trained for reproducibility…", `$n77772`). The dossier exists because that faith was damaged by a firsthand incident (§4): a valve he specified opened with no command in the log, into a pipe a fitter was reaching into. The report called it a near miss. He was reading the exact procedure page when it opened.

The wound is personal in the strictest sense: **the world leaned on his specification and the specification did not hold.** This is the literal setup for the MUST HAVE *"Read them so that when the world leans on your specification, you recognize the weight."* The dossier is his answer to that leaning.

### 2.2 The dossier as hedge, not taxonomy

The existing line — *"Not a taxonomy—God preserve me from one more axis—but a sheaf of field notes"* — is correct and must survive implementation unchanged in force. The dossier is procedural faith continued by other means: if the procedure alone will not hold the world, perhaps the *record* will. Write it down, tape it in, leave the margins open — and perhaps the next failure will leave a print. This is superstition wearing procedure's clothes, and the narrator knows it, which is why he would never call it superstition.

### 2.3 The dossier as a letter to his older self

The coda `<MUST HAVES>` moral requires: *"write in a hand you will recognize when you are older."* The prologue must make the dossier's first page a message to the narrator's future self — written so that when the world leans again, he will recognize the weight. This gives the dossier an intimate, almost devotional purpose and makes the act of keeping it a daily ritual of self-address. It also explains why preserving uncertainty matters to him personally: **a closed case is a lesson; an open case is a warning.** He keeps the cases open because closing them — explaining them away — is precisely the move that failed him once already.

### 2.4 What the motivation must not become

It must not become biography (the Schaerbeek `<NOTE>` warns the café scenes reveal habits of thought "without supplying biography" — the same discipline applies here), and it must not become a thesis about the limits of science (top-level `<NOTE>`: "do not resolve the book into a lecture that scientific reasoning has failed"). The motivation is carried by one incident and by behavior, not by reflection.

---

## 3. Skeptical starting posture

The prologue narrator is the endpoint of the collection's arc ("a cumulative psychological transformation from sober skepticism to reluctant private belief", top-level `<NOTE>`) looking back at its start. The design problem: he must be **credible as a skeptic** while already **fraying** (`$id-0861352612251497`, `$id-9264982270043622`).

### 3.1 The surface

- Operational diction: valves, logs, procedures, postmortems, specifications.
- Qualifications everywhere: what he saw vs. what he was told vs. what he reconstructed.
- Evidentiary categories: the dossier's contents are sorted by provenance — firsthand, retold, reconstructed (placeholder 3, §7 of the draft). This taxonomy *is* his skepticism made visible.
- No supernatural declaration. He never says he believes; he never says he disbelieves.

### 3.2 The fraying (behavioral, never verbal)

Each tell is a small procedural act with a superstitious shadow:

| Beat | Procedural surface | Superstitious shadow |
|---|---|---|
| Keeping the dossier at all | field notes | a charm against the next clean error |
| Writing in a hand he will recognize | legibility | faith in his future self's perception |
| Taping pages in beside the record | documentation | the Mark II moth logic: name it, tape it, banish it |
| Leaving the margins empty | room for annotations | a hedge against what he cannot yet name |
| Reading a log twice when once would do | diligence | the suspicion that the second look is the one that counts |
| His hand stopping above the key | a pause | the 04:56 gesture from Case II, compressed: he briefly acts as if the failure can notice him |

The last two beats are the observation-sensitivity seed planted for Case II. They must be reported as feelings he dismisses, never as claims ($id-0861352612251497$: the supernatural is "hinted, invited, or treated as a possibility whose weight keeps increasing rather than declared").

### 3.3 The "People ask if I believe in such things" beat

This MUST HAVE is the pivot of the skeptical posture. Design:

- The question is **reported, not asked** — the narrator tells us people ask; we never hear the questioner.
- His answer, if it can be called one, is procedural: he describes what he keeps and how he keeps it (the hand, the tape, the margins). He answers the question he was asked with the question he can survive.
- The reader must feel the answer as **withholding, not denial**. He is not saying "I don't believe." He is saying "I keep the dossier," and letting the reader infer the rest.
- The MUST HAVE *"… like myself—skeptics who have seen just enough to be superstitious"* belongs in this neighborhood: spoken as membership in a class he can name only in the third person, if at all. It is the closest he comes to confession, and it must cost him something to say.

---

## 4. The hint of danger — concrete, without proving the supernatural

The Prologue `<NOTE>`: "a faint but concrete anticipation of danger without prematurely telling readers that every unexplained failure is supernatural." This is the prologue's most delicate requirement and the design's center of gravity.

### 4.1 Design principles

1. **Physical and specific, not atmospheric.** A valve, a log, a page, a sound. No omens, no portents, no decorative dread.
2. **Ordinary explanation fully available.** A competent reader must be able to construct the conventional account: spurious actuation is a documented fault class in industrial control (a stuck solenoid, a scan-cycle glitch, an unlogged manual override). Endnote 6 of the integration branch already anchors this class.
3. **One detail resists.** Not enough to prove anything; enough to make the ordinary account feel *insufficient*. The resisting detail here is double: the valve opened **at the moment he was reading the exact procedure page that specified it**, and the sensory report — **the air had gone flat** — is not the kind of thing a valve does to a room.
4. **Carried by aftermath, not by declaration.** He never says "this was supernatural." He shows us the residue: the telephone he has not entirely stopped hearing, the dossier he began, the hand that stops above the key.
5. **Human stakes.** The fitter's hands were in the pipe. The report's phrase "near miss" does quiet, serious work: the danger was real, specific, and one spanner-length from harm.

### 4.2 The incident, specified by beats

Implementation may compress, reorder within beats, or adjust diction, but the incident must contain these functional beats:

1. **The specification.** He specified the valve; the line was closed for maintenance. (Establishes his personal stake: the world leaned on *his* page.)
2. **The opening.** It opened with no command in the log. (The clean error: no prints.)
3. **The fitter.** The pipe he opened into was the stretch a fitter had his hands in. (Human stakes; "near miss" in the report.)
4. **The page.** He was at his desk reading back the procedure for that valve — the exact page — when it opened. (The resisting detail: observation-sensitivity seed; the world leaning at the moment of reading.)
5. **The air.** He looked up because the air had gone flat. (The sensory uncanny: a physical report that the ordinary explanation cannot absorb; also plants the collection's paper-vs-air motif, `$n88883`.)
6. **The telephone.** It rang a moment later; he has not entirely stopped hearing it. (The residue: trauma as auditory afterimage; the dread's lasting fingerprint.)

### 4.3 What the hint must not do

- Not declare or imply the supernatural is the only explanation (Prologue `<NOTE>`).
- Not stage a full supernatural event — no demon, no ghost, no impossible physics on stage.
- Not resolve or explain the incident within the prologue. The log stays silent. The case stays open. That is the point.
- Not become a comic detour (top-level `<NOTE>`: no comic detours that discharge the dread).
- Not arrive before the dossier's motivation is established — the incident is the *cause* of the dossier, so it must precede "I began to keep a dossier" in the reading order (it fills placeholder 1).

### 4.4 Alternative incidents considered

| Candidate | Verdict |
|---|---|
| **Uncommanded valve opening (adopted)** | Chosen. Firsthand; real fault class; the specification tie makes the wound personal; the fitter supplies human stakes; the reading-the-page detail seeds observation-sensitivity; the air and the telephone give two sensory residues. |
| Log recording an impossible event order | Rejected as primary. Strong uncanny detail, but it makes the *record* the haunted object, which duplicates Case II's observation engine too closely and weakens the physical stakes. |
| Test that passes only when unwatched | Rejected as primary. This *is* Case II's premise; using it in the prologue would spend the collection's best card on the threshold. Retained only as the compressed behavioral beats (reading the log twice, the hand above the key). |
| Cryptographic coincidence (cf. Case III) | Rejected. Wrong evidentiary register for the opening; belongs to the escalation, not the wound. |

---

## 5. Physical and behavioral beats — the move sheet

The dread is carried entirely by concrete physical and behavioral detail (top-level `<NOTE>`: "fear through behavior, concrete surroundings, small changes in confidence, and withheld certainty rather than dramatic declarations"). The prologue's required moves, in reading order:

1. **The training sentence** (exists, `$n72344`–`$n77772`). "I was not trained for hauntings…" — the skeptical surface established in two beats. Preserve.
2. **The air sentence** (exists, `$n88883`). "…what we write on paper is not what the air will carry." The collection's central physical insight; the air is the medium the world leans through. Preserve.
3. **The incident** (placeholder 1; §4.2, beats 1–6). The wound, told compressed and firsthand.
4. **The dossier sentence** (exists, `$n36938`). "I began to keep a dossier." Placed *after* the incident so the causation reads: incident → dossier.
5. **The anti-taxonomy sentence** (exists, `$n89766`). "Not a taxonomy…" — preserve; fill the provenance-list placeholder with one concrete, physical source (the draft's "labs and basements, control rooms and attics" needs one grounded addition, not another abstraction).
6. **The provenance sentence** (exists, `$n47266`, ends mid-sentence at "steadier hands who were there before me"). Fill placeholder 3 by completing the evidentiary categories: some firsthand, some retold until their authors wore off, some reconstructed from records that disagreed. This sentence *is* the collection's evidentiary contract with the reader (top-level `<NOTE>`: distinguish firsthand, reconstruction, secondhand, folklore).
7. **The future-tense habit.** A behavioral beat: he still writes specifications in the future tense — *the valve shall open only on command* — as if the grammar were itself a promise. This plants the preamble MUST HAVE *"I had written prose that described procedures in the future tense, as if promising the very sun…"* so it reads as the same man's remembered habit, not an inserted quotation. (The preamble quote itself stays in the preamble; graph order `$n65643`–`$n77735` is unchanged.)
8. **The belief question** (MUST HAVE, `$n95933`). Reported question; procedural non-answer (§3.3). The skeptics MUST HAVE lives here or in the same breath.
9. **The keeping rules.** The hand he writes in (so he will recognize it when he is older); the pages he tape in beside the record, giving each failure a name; the margins he leaves empty for what he does not yet know how to name. Three coda motifs planted as three physical acts.
10. **The two fraying beats.** Reading a log twice when once would do; the hand that stops above the key when the moment comes to attach the instrument — and his having learned not to ask it why. Observation-sensitivity seeded; Case II's 04:56 gesture compressed to a sentence.
11. **The first page** (MUST HAVE, `$n92807`). *"Read them so that when the world leans on your specification, you recognize the weight."* Set down as the dossier's first-page inscription, addressed to whoever he will be when he reads it back. Per graph order, this node immediately precedes `$n23032` (**Schaerbeek, Belgium.**) — it is the prologue's last beat and the threshold itself. The weight must be given one physical report (the paper going load-bearing in a good postmortem) so the MUST HAVE is a sensation, not a metaphor.
12. **The handoff.** One framing sentence from the mature narrator: the first thing he put in the dossier was not the first incident; it was the first one he could tell straight. This sentence is the visible frame break into the younger narrator's Schaerbeek account (§7).

---

## 6. Motifs and coda payoff

The prologue is where the collection's motifs are planted; the coda pays them. The coda `<MUST HAVES>` moral:

> "We live by the text; we survive by the small, retold stories that help us decide which part of the text applies when the world grows strange. If you keep a dossier of your own, write in a hand you will recognize when you are older. Tape in what must be taped. Leave space in the margins for the things we still do not know how to name."

| Motif | Prologue planting (§5 move) | Coda payoff |
|---|---|---|
| The text / specification | Moves 1, 3, 7 — training, the valve he specified, the future-tense habit | "We live by the text" |
| The world leaning / weight | Moves 3, 11 — the specification that did not hold; the load-bearing paper | "when the world grows strange" |
| Retold stories | Move 6 — cases "retold until their authors had worn off" | "the small, retold stories" |
| Handwriting | Move 9 — the hand he will recognize | "write in a hand you will recognize when you are older" |
| Tape / naming | Move 9 — taping pages in, giving each failure a name | "Tape in what must be taped" |
| Margins | Move 9 — margins left empty | "Leave space in the margins for the things we still do not know how to name" |
| Recognition | Moves 9, 11 — recognizing his hand; recognizing the weight | "you recognize" |
| Paper vs. air | Moves 2, 3 — "what we write on paper is not what the air will carry"; the air going flat | The text vs. the world that leans on it |
| Watching | Moves 10 — the log read twice; the hand above the key | The world that "grows strange" when observed |

Two further plantings:

- **The Mark II moth.** The moth anecdote lives at the end of Case I. The prologue must not preempt it, but move 9's taping beat plants the logic that makes the moth resonate: give the failure a name, tape it beside the record, perhaps you can banish it. Seed in the prologue, flower in Case I.
- **The preamble MUST HAVES.** *"FIELD NOTE #X The closer your model fits the world, the more the world will take issue"* belongs to the preamble's specification theme; the prologue's valve incident is its concrete instance. *"… there are systems whose failure modes include poetry"* may resonate against the incident's silent log — the system's failure was not poetry, which is worse — but must remain implicit humor, never explained (top-level `<NOTE>`: humor only implicit).

---

## 7. Transition to the sane Schaerbeek opening

The prologue is narrated by the mature dossier-keeper; Schaerbeek is narrated by his younger self, "who has not yet become the investigator who keeps this dossier, and does not believe in supernatural explanations" (Schaerbeek `<NOTE>`).

**The frame break must be visible and deliberate.** The handoff sentence (move 12) does three jobs at once: it marks the shift in time and voice; it tells us the dossier's first entry was chosen for tellability, not chronology (which retroactively justifies the whole collection's order); and it hands the reader to the younger narrator mid-sentence of his own life.

What the transition must preserve:

- The younger narrator's skepticism, intact. No fraying leaks backward into the café.
- The escaped-neutron newspaper item as an unspoken clue for the reader alone (Schaerbeek `<NOTE>`); the prologue must not mention it.
- The worldview mismatch between the younger narrator and the technician, shown only through what each treats as evidence (Schaerbeek `<NOTE>`).

What the transition must plant:

- **Dramatic irony.** The reader has just watched the man this younger narrator will become. Every ordinary moment in the café is shadowed by the dossier we know is coming.
- **The first field note.** Schaerbeek ends with "Field Note #1. Horror, in our trade, is the clean error—the one that leaves no prints." The handoff should make the reader feel this note is the first entry in the dossier we were just shown — the collection's frame clicking shut behind us.

---

## 8. Evidence and fiction boundary

The prologue must keep "documented facts, fictional reconstruction, hypotheses, and impossible suggestions distinguishable without explaining away the intended ambiguity" (top-level `<NOTE>`).

- **The valve incident is a fictional composite**, in the manner of Case II (Endnote 5) and the integration branch's Endnote 6: it draws on the real, documented class of spurious actuation faults in industrial control systems, claims no specific incident, and must be endnoted as a composite when the manuscript is completed.
- **The prologue establishes the collection's four evidentiary categories** (move 6): firsthand (the valve), historical reconstruction (Schaerbeek), secondhand testimony and folklore (later cases). The categories are the narrator's skepticism made structural.
- **The supernatural is never presented as documented fact**, and the ambiguity is never explained away by the narrator declaring the supernatural unproven ($id-6418273059462718$: do not announce the manuscript's epistemic strategy). The log stays silent; the case stays open; the reader does the rest.
- **Real-world claims** (the fault class, the near-miss framing) must be verified from reliable sources at implementation, per `AGENTS.md`'s sourcing discipline.

---

## 9. Alternative approaches considered

1. **Purely procedural prologue** — the narrator explains the dossier's organization and method. *Rejected:* no dread, no wound; violates the chief artistic goal (`$id-5364595046057851`) and the Prologue `<NOTE>`'s demand for personal stakes.
2. **Full supernatural opening** — a demon or impossible physical violation on stage. *Rejected:* prematurely proves the supernatural; breaks the escalation contract (Schaerbeek must remain the sane opening case, `$id-3795396000378572`) and the Prologue `<NOTE>`.
3. **Epistolary frame** — the prologue as a letter to the older self. *Partially adopted:* the dossier-as-letter is retained as a motive (§2.3), but a full letter frame is rejected — it sentimentalizes and distances the reader from the physical beats. The letter is a motif, not a frame.
4. **Reflection in the study** — the narrator sits with the dossier and ruminates on why he keeps it. *Rejected:* static; dread needs an incident, not a meditation on one. The incident is told compressed-firsthand (move 3), not in reflection.
5. **Single procedurally-told incident** — the recommended direction (§4.2): one firsthand incident, accurate procedural detail, fear carried by aftermath and behavior. Adopted as the spine; the keeping-rules and fraying beats (moves 8–10) are woven around it so the prologue is a portrait of a ritual, not a report.

---

## 10. Acceptance criteria

The prologue implementation (issue #224) is accepted when:

1. **Dossier motivation.** The prologue establishes why *this* narrator keeps the dossier, through a personal wound that is felt rather than explained, and shows why preserving uncertainty matters to him. (Prologue `<NOTE>`, `$n36795`)
2. **Skeptical surface.** Vocabulary and posture are a skeptic's: operational detail, qualifications, evidentiary categories, no supernatural declaration. (`$id-0861352612251497`)
3. **Private leaning, behavioral only.** The supernatural leaning is visible exclusively through behavior — the dossier, the handwriting, the tape, the margins, the double look, the stopped hand — never through declaration. (`$id-9264982270043622`)
4. **Hint of danger.** One concrete, physical, firsthand incident (§4.2 beats 1–6) anticipates danger, admits a full ordinary explanation, resists it in exactly one or two details, and is never resolved or explained away. (Prologue `<NOTE>`, `$n10022`)
5. **Human stakes.** The incident carries believable harm or near-harm to a person, so the dread has a cost. (`$id-5364595046057851`)
6. **Behavioral dread.** Fear is carried by the room, the hands, the weight, the air, the watching — concrete surroundings and small changes in confidence — never by dramatic declaration. (Top-level `<NOTE>`)
7. **Motif planting.** All nine motifs of §6 are planted; the coda's handwriting/tape/margins lines will read as payoffs, not novelties. (Coda `<MUST HAVES>`)
8. **Must-haves integrated.** Both Prologue `<MUST HAVES>` — *"People ask if I believe in such things."* and *"Read them so that when the world leans on your specification, you recognize the weight."* — are integrated as reported speech and first-page inscription respectively, not as narrator declarations; the preamble `<MUST HAVES>` keep their graph order (`$n65643`–`$n77735`).
9. **Placeholders filled.** All three `<PLACEHOLDER/>` slots are filled with concrete, physical, non-abstract material; the subtitle placeholder is filled with a dossier-frame relation, not a biography.
10. **Transition.** A visible frame break (move 12) hands off to Schaerbeek; the younger narrator's skepticism is intact; the neutron item and the worldview mismatch are untouched by the prologue. (Schaerbeek `<NOTE>`)
11. **No epistemic announcement.** The prose never explains the author's balancing strategy between ordinary and supernatural interpretations. (`$id-6418273059462718`)
12. **No mechanical Lovecraft, no comic discharge.** Existential pressure without Lovecraftian vocabulary; no jokes that release the dread. (Top-level `<NOTE>`)
13. **Evidence boundary.** The incident is drafted as a labeled fictional composite with a real fault class behind it; the four evidentiary categories are established. (Top-level `<NOTE>`, §8)
14. **Spine preserved.** The existing sentences — "I was not trained for hauntings…", "I began to keep a dossier.", "Not a taxonomy—God preserve me from one more axis…", "A few I saw myself…" — survive in force, lightly revised at most. (Meaning-graph continuity, `$n72344`–`$n47266`)
15. **Design only.** This issue changes no manuscript prose; `supernatural.md` is untouched on this branch. (Issue constraint)

---

## 11. Constraint map

| Source | Constraint | Design response |
|---|---|---|
| Prologue `<NOTE>` (`$n36795`) | Why this narrator needs a dossier; uncertainty matters personally | §2 |
| Prologue `<NOTE>` (`$n10022`) | Faint but concrete danger; no premature supernatural proof | §4 |
| Prologue `<MUST HAVES>` (`$n95933`) | "People ask if I believe in such things." | §3.3, move 8 |
| Prologue `<MUST HAVES>` (`$n92807`) | "Read them so that… you recognize the weight." | §5 move 11 (last beat, per graph order) |
| Top-level `<NOTE>` | Genuine dread, anxiety, harmful consequences | §1, §4.1 |
| Top-level `<NOTE>` | Ordinary explanations remain available | §4.1, §4.2 |
| Top-level `<NOTE>` | Fear through behavior, withheld certainty | §5 |
| Top-level `<NOTE>` | Procedural rationality; subtle superstition | §3.2 |
| Top-level `<NOTE>` | Cumulative transformation, skepticism → reluctant belief | §3 (baseline) |
| Top-level `<NOTE>` | Distinguish firsthand / reconstruction / secondhand / folklore | §5 move 6, §8 |
| Top-level `<NOTE>` | No comic detours; humor only implicit | §4.3, §6 |
| Top-level `<NOTE>` | Precise physical observation over decorative metaphor | §4.1, §5 |
| Top-level `<NOTE>` | Cosmic-horror pressure without mechanical Lovecraft | §9.12 |
| Top-level `<NOTE>` | Fact / reconstruction / hypothesis / suggestion distinguishable | §8 |
| Coda `<MUST HAVES>` | Handwriting, tape, margins, retold stories | §6 |
| `$id-9264982270043622` | Narrator privately leans supernatural; reluctant | §3.2, §3.3 |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | §3.1 |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | §3 (baseline posture) |
| `$id-3795396000378572` | Schaerbeek is the sane opening case | §7 |
| `$id-5364595046057851` | Reader must feel danger and dread | §1, §4.1 |
| `$id-6418273059462718` | Do not announce epistemic strategy | §8, §10.11 |
| `$id-2642614869480108` | Preserve semantic and inferential work | §10.14 |
| Schaerbeek `<NOTE>` | Younger narrator; implicit worldview mismatch; neutron clue | §7 |
| Graph `$n72344`–`$n47266` | Prologue spine sentences | §5 moves 1–6, §10.14 |
| Graph `$n23032` | Schaerbeek opening follows `$n92807` | §5 move 11, §7 |

---

## 12. Handoff notes for the implementation issue (#224)

- Length: a threshold, not a case — roughly 15–20 sentences of prose excluding directives.
- The incident (§4.2) is the only new narrative material; everything else is beats around the existing spine.
- The reference implementation on `origin/supernatural-prologue-impl-224` satisfies many of these criteria already; the implementing agent should diff against it, keep what satisfies §10, and repair what does not — rather than starting fresh.
- The meaning graph must be updated in the same change as any manuscript edit, per `AGENTS.md`: every new sentence gets a node; the `text` fields of edited sentences are updated in place.
- Endnote 6 (valve composite) already exists on the integration branch; the completed manuscript should carry an equivalent anchor.
