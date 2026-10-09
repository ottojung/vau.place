# Prologue — Design Blueprint

**Status:** Design only. No prose implementation in this issue.
**Source manuscript:** `website-root/serve/post/supernatural/supernatural.md`
**Primary constraints:** `AGENTS.md`, `docs/intent-records/story.md`, `docs/intent-records/editing.md`, the Prologue `<NOTE>` and `<MUST HAVES>` blocks, and `docs/meaning-graph.md` nodes `$n36795`–`$n92807`.

---

## 1. Emotional goal

The reader should finish the prologue with **unease, curiosity, and a specific apprehension**: the sense that the narrator is afraid of something he will not name, and that his fear is contagious. The reader must not yet believe in the supernatural — the prologue must keep every ordinary explanation intellectually available — but must feel that the narrator privately leans further than his skeptical vocabulary admits, and that this leaning was earned by something that hurt him.

The prologue is the threshold of the dossier. Its job is to make the reader want to open the dossier with the narrator, and to feel the cost of doing so.

---

## 2. Why this narrator keeps the dossier

The prologue must establish a **personal, non-intellectual stake** in the dossier. The current draft ("I began to keep a dossier") is a bare statement; the design must supply the motivation beneath it.

### 2.1 The narrator's professional identity

He is a reliability/systems investigator by training and temperament: reproducibility, test plans, postmortems, the "clean relief of a failing unit test that fails again in the same way." His faith is in specification — the idea that if you write the procedure correctly, the world will obey. The dossier exists because that faith has been damaged.

### 2.2 The wound that started it

The prologue should imply — without narrating in full — a **specific incident** in which a system he specified or trusted failed in a way that left no prints, and in which someone was hurt or nearly hurt. This is the "faint but concrete anticipation of danger" the Prologue `<NOTE>` requires. The incident is the reason the dossier is not a hobby but a hedge: he keeps it because he no longer trusts that writing the procedure correctly is enough.

The wound should be **felt, not explained**. The narrator does not say "this is why I was afraid." He shows the behavioral residue: the way he now writes things down, the way he hesitates, the way he tapes things in.

### 2.3 The dossier as a letter to his older self

The coda `<MUST HAVES>` requires the moral: *"write in a hand you will recognize when you are older."* The prologue should plant this. The dossier is not merely a case collection; it is a message to the narrator's future self, written so that when the world leans on his specification again, he will recognize the weight. This gives the dossier an intimate, almost superstitious purpose that the narrator would not admit is superstitious.

### 2.4 The dossier as procedural faith, not taxonomy

The existing line — *"Not a taxonomy—God preserve me from one more axis—but a sheaf of field notes"* — is correct and must be preserved. The dossier is an act of **procedural faith**: if he writes it down carefully enough, in a hand he will recognize, with space left in the margins, then perhaps the next failure will leave a print. The dossier is his hedge against the clean error.

---

## 3. Skeptical starting posture

The mature narrator who speaks the prologue is the same narrator who will, across the seven cases, trace "a cumulative psychological transformation from sober skepticism to reluctant private belief" (top-level `<NOTE>`). The prologue is the **starting point** of that arc: the skeptical baseline.

### 3.1 What the skeptical surface looks like

- He speaks in operational detail: valves, logs, racks, specifications, procedures.
- He qualifies. He distinguishes what he saw from what he was told.
- He does not declare the supernatural. He does not even declare belief.
- He uses the vocabulary of engineering, not of horror.

### 3.2 What betrays the private leaning

The prologue must show the skeptical surface **fraying at the edges** (top-level `<NOTE>`: "investigator fraying at the edges"). The betrayal is behavioral, not verbal:

- He keeps the dossier at all — a superstitious gesture disguised as procedure.
- He writes in a hand he will recognize — an act of faith in his future self's perception.
- He tapes things in — the Mark II moth logic: give the failure a name, tape it beside the record, perhaps you can banish it.
- He leaves space in the margins — a hedge against what he does not yet know how to name.
- He hesitates before some procedural acts — the 04:56 gesture from Case II, compressed into the prologue.

### 3.3 The "People ask if I believe in such things" beat

This `<MUST HAVE>` is the pivot of the prologue's skeptical posture. The design:

- The question is reported, not asked. The narrator tells us people ask; he does not tell us his answer directly.
- His answer, if given, is procedural and evasive: he talks about what he keeps, how he keeps it, what he qualifies — never about what he believes.
- The reader should feel that the answer is a **withholding**, not a denial. The narrator is not saying "I don't believe." He is saying "I keep the dossier," and letting the reader infer the rest.

This satisfies `$id-9264982270043622` (narrator privately leans supernatural, reluctant to admit the extent even to himself) and `$id-0861352612251497` (skeptical surface for skeptical readers).

---

## 4. The hint of danger — concrete, without proving the supernatural

The Prologue `<NOTE>` requires "a faint but concrete anticipation of danger without prematurely telling readers that every unexplained failure is supernatural." This is the prologue's most delicate requirement.

### 4.1 Design principles

- The danger must be **physical and specific**, not atmospheric. A valve, a log, a reading, a sound, a mark.
- The danger must be **describable in ordinary terms**. A reader must be able to construct a conventional explanation.
- The danger must **resist** that conventional explanation in one small, concrete detail — not enough to prove the supernatural, enough to make the ordinary explanation feel insufficient.
- The danger must be carried by the **narrator's reaction**, not by his declaration. He does not say "this was supernatural." He shows us what he did afterward.

### 4.2 Candidate incident (for implementation to refine)

The prologue's hint of danger should be a **single, brief, firsthand incident** — the wound that started the dossier. It should be:

- **Firsthand** (the narrator saw it), distinguishing it from the secondhand and reconstructed cases that follow.
- **Technically credible**: a real class of systems failure, described with accurate procedural detail.
- **Uncanny in one detail**: something that the ordinary explanation cannot fully absorb.

Candidate directions (implementation may choose or combine):

1. **The valve that opened with no command.** A system he specified opened a physical valve at a time when no command was logged. The ordinary explanation is a software fault or a missed command. The uncanny detail: the valve opened at the exact moment he was reading the specification that described it, as if the system had been waiting for him to look.
2. **The log that recorded an impossible sequence.** A post-incident log showed events in an order that the system's own clock said was impossible. The ordinary explanation is a clock synchronization fault. The uncanny detail: the impossible sequence described a procedure he had written but not yet run.
3. **The test that passed only when unwatched.** A failing test passed every time he ran it himself and failed every time it ran in the automated suite. The ordinary explanation is a timing or environment fault. The uncanny detail: he began to feel that the failure was **timing itself to his attention** — and then felt foolish for feeling it, and ran it again anyway.

**Recommended direction:** a composite of (1) and (3), leaning on the observation-sensitivity motif that Case II will develop fully. The prologue plants the seed; Case II grows it. This creates a setup/payoff relation across the collection without repeating Case II's full argument.

### 4.3 What the hint must NOT do

- It must not declare or imply that the supernatural is the only explanation.
- It must not be a full supernatural event (no demon, no ghost, no impossible physics on stage).
- It must not be resolved or explained away within the prologue.
- It must not be a comic detour (top-level `<NOTE>`: "avoid comic detours that discharge the dread just established").

---

## 5. Physical and behavioral beats that make the reader uneasy

The prologue's dread must be carried by **concrete physical and behavioral detail**, not by declaration (top-level `<NOTE>`: "convey fear through behavior, concrete surroundings, small changes in confidence, and withheld certainty rather than dramatic declarations").

### 5.1 The room

The prologue should be anchored in a **specific physical space** where the narrator keeps or works on the dossier. Not a generic study — a room with procedural character: the sound of the systems he tends, the light, the arrangement of papers, the tape, the margins. The room should feel like a place where someone is trying very hard to be rational.

### 5.2 The hands

The narrator's hands are the primary vehicle of his fraying:

- **Writing in a hand he will recognize.** The physical act of writing slowly, deliberately, so that his older self will know it was him. This is the coda's handwriting motif planted.
- **Taping something in.** A physical artifact — a page, a photograph, a printout — taped into the dossier. The Mark II moth logic: give the failure a name, tape it beside the record. This is the coda's tape motif planted.
- **Leaving space in the margins.** The physical act of not writing in the margin, of leaving blank space for what he does not yet know how to name. This is the coda's margins motif planted.
- **A hesitation.** A moment where his hand stops — over a keyboard, over a page — before completing a procedural act. The 04:56 gesture compressed into the prologue. The reader should feel the hesitation as fear, not as thoughtfulness.

### 5.3 The weight

The `<MUST HAVE>` — *"Read them so that when the world leans on your specification, you recognize the weight"* — should be planted as a **physical sensation**. The narrator describes the feeling of the world leaning on a specification: a pressure, a weight, a sense that the paper is load-bearing. This is not a metaphor he announces; it is a sensation he reports, the way an engineer reports vibration in a rack.

### 5.4 The air

The existing line — *"what we write on paper is not what the air will carry"* — is the prologue's central physical insight. The design should make the **air** a recurring physical presence: the air in the server room, the air in the café, the air that carries what the paper does not. The air is the medium through which the world leans.

### 5.5 The watching

The prologue should plant the **observation-sensitivity** motif in a single, small behavioral beat: the narrator checks something twice, or looks away and back, or feels — without saying — that the system knows when he is watching. This is the seed of Case II's full argument. It must be a feeling he reports and then dismisses, not a claim he makes.

---

## 6. Motifs and coda payoff

The prologue must plant the motifs that the coda will pay off. The coda `<MUST HAVES>` moral is:

> "We live by the text; we survive by the small, retold stories that help us decide which part of the text applies when the world grows strange. If you keep a dossier of your own, write in a hand you will recognize when you are older. Tape in what must be taped. Leave space in the margins for the things we still do not know how to name."

### 6.1 Motif map

| Motif | Prologue planting | Coda payoff |
|---|---|---|
| **The text / specification** | The narrator's faith in specification; the world that leans on it | "We live by the text" |
| **Retold stories** | The dossier as a sheaf of field notes, some firsthand, some from "steadier hands" | "we survive by the small, retold stories" |
| **Handwriting** | Writing in a hand he will recognize | "write in a hand you will recognize when you are older" |
| **Tape** | Taping an artifact into the dossier; the Mark II moth logic | "Tape in what must be taped" |
| **Margins** | Leaving space in the margins for what he cannot name | "Leave space in the margins for the things we still do not know how to name" |
| **Weight / leaning** | The world leaning on the specification; the physical sensation of weight | "when the world grows strange" |
| **Recognition** | Recognizing the weight; recognizing his own hand | "you recognize" / "you will recognize" |
| **Paper vs. air** | "What we write on paper is not what the air will carry" | The text vs. the world that leans on it |
| **Watching** | The small behavioral beat of observation-sensitivity | The world that "grows strange" when observed |

### 6.2 The Mark II moth

The Mark II moth anecdote currently appears at the end of Case I. The prologue should **not** preempt it, but it should plant the logic that makes the moth resonate: the idea that giving a failure a name and taping it beside the record is a way of banishing it. The prologue's taping beat is the seed; the moth is the flower.

### 6.3 The future tense

The preamble `<MUST HAVE>` — *"I had written prose that described procedures in the future tense, as if promising the very sun, and when the sun obeyed I pretended it was because we had the grammar correct"* — belongs to the preamble, not the prologue. But the prologue should plant the **future tense** as a habit of the narrator's thought: he writes specifications in the future tense, as if promising the sun. This makes the preamble's must-have feel earned rather than inserted.

---

## 7. Transition to the sane Schaerbeek opening

The prologue is narrated by the **mature narrator** — the one who keeps the dossier. The Schaerbeek case is narrated by the **younger narrator** — the one who has not yet become the investigator who keeps the dossier (Schaerbeek `<NOTE>`: "He has not yet become the investigator who keeps this dossier, and he does not believe in supernatural explanations").

### 7.1 The frame break

The transition must be a **deliberate, visible frame break**. The mature narrator hands off to the younger narrator's firsthand account. The design:

- The prologue ends with the mature narrator **introducing the first case** — not as a case, but as the beginning of the dossier. Something like: the first thing he put in the dossier was not the first incident, but it was the first one he could tell straight.
- The transition should mark the shift in **voice and time**: from the mature, dossier-keeping narrator to the younger, skeptical narrator in the café.
- The transition should be **structurally visible**: a heading, a date, a typographic break — not a gradual fade.

### 7.2 What the transition must preserve

- The younger narrator's skepticism must be **intact**. The prologue's fraying must not leak into the Schaerbeek account.
- The escaped-neutron newspaper item must be planted as an **unspoken clue for the reader alone** (Schaerbeek `<NOTE>`).
- The worldview mismatch between the younger narrator and the technician must remain **implicit** (Schaerbeek `<NOTE>`).

### 7.3 What the transition must plant

- The **dossier-keeping** as a future act: the younger narrator does not yet keep a dossier, but the reader knows he will. This creates dramatic irony.
- The **first field note**: the Schaerbeek account ends with "Field Note #1. Horror, in our trade, is the clean error—the one that leaves no prints." The transition should make the reader feel that this field note is the first entry in the dossier the mature narrator has shown us.

---

## 8. Evidence and fiction boundary

The prologue must keep "documented facts, fictional reconstruction, hypotheses, and impossible suggestions distinguishable without explaining away the intended ambiguity" (top-level `<NOTE>`).

### 8.1 The prologue's incident

The prologue's hint-of-danger incident should be a **fictional composite** in the manner of Case II (which is "a fictional composite" per Endnote 5). It should be:

- **Technically credible**: grounded in a real class of systems failure, with accurate procedural detail.
- **Labeled as composite** in the endnotes, with a pointer to the real substrate if one exists.
- **Not presented as documentary fact**: the narrator's qualifications and the dossier's evidentiary categories should make clear that this is a field note, not a verified report.

### 8.2 The dossier's evidentiary categories

The prologue should establish the **four evidentiary categories** that the collection will use (top-level `<NOTE>`: "Distinguish firsthand incidents, historical reconstructions, secondhand testimony, and folklore"):

- The prologue's incident is **firsthand**.
- The Schaerbeek account is a **historical reconstruction** (the younger narrator's firsthand account, framed by the mature narrator's reconstruction).
- Later cases will introduce **secondhand testimony** and **folklore**.

### 8.3 What the prologue must NOT do

- It must not present the supernatural as documented fact.
- It must not present the fictional composite as a real incident.
- It must not explain away the ambiguity by having the narrator declare that the supernatural is unproven (editing intent `$id-6418273059462718`: "Do not announce the manuscript's epistemic strategy").

---

## 9. Alternative approaches considered

### 9.1 Purely procedural prologue

The narrator explains the dossier's organization, categories, and method.

**Rejected.** Too dry. No dread. Violates the chief artistic goal (`$id-5364595046057851`).

### 9.2 Dramatic supernatural opening

The prologue opens with a full supernatural event — a demon, an impossible physical violation.

**Rejected.** Prematurely proves the supernatural. Violates the Prologue `<NOTE>` and `$id-3795396000378572` (Schaerbeek is the sane opening case; the collection escalates from sane to extravagant).

### 9.3 Letter to the older self

The prologue is framed as a letter from the narrator to his older self.

**Partially adopted.** The dossier-as-letter concept is retained (§2.3), but a full epistolary frame is rejected: it risks sentimentality and distances the reader from the physical beats. The letter concept is a **motif**, not a **frame**.

### 9.4 Single unexplained incident, procedurally told

The prologue is a single firsthand incident, told in procedural detail, with the narrator's behavioral reaction carrying the fear.

**Adopted.** This is the recommended direction (§4.2). It is closest to the manuscript's intent, preserves the skeptical surface, and plants the observation-sensitivity motif without proving it.

### 9.5 Frame narrative in the study

The narrator sits in his study with the dossier before him and tells us why he keeps it.

**Partially adopted.** The room and the physical beats (§5.1) are retained, but a static frame is rejected: the prologue needs the **incident** to create dread, not just the narrator's reflection on the incident. The incident is told in compressed firsthand, not in reflection.

---

## 10. Acceptance criteria

The prologue implementation is accepted when:

1. **Dossier motivation.** The prologue establishes why this particular narrator keeps the dossier, with a personal stake that is felt rather than explained. (Prologue `<NOTE>`)
2. **Skeptical surface.** The narrator's vocabulary and posture are those of a skeptic: operational detail, qualifications, alternative explanations. (Prologue `<NOTE>`, `$id-0861352612251497`)
3. **Private leaning.** The narrator's private supernatural leaning is visible only through behavior — the dossier, the handwriting, the tape, the margins, the hesitation — never through declaration. (`$id-9264982270043622`)
4. **Hint of danger.** The prologue contains a concrete, physical, firsthand incident that anticipates danger without requiring a supernatural explanation and without prematurely proving the supernatural. (Prologue `<NOTE>`)
5. **Behavioral dread.** The fear is carried by physical and behavioral beats — the room, the hands, the weight, the air, the watching — not by dramatic declaration. (Top-level `<NOTE>`, `$id-5364595046057851`)
6. **Motif planting.** The prologue plants the motifs that the coda pays off: the text, retold stories, handwriting, tape, margins, weight, recognition, paper vs. air, watching. (Coda `<MUST HAVES>`)
7. **Must-haves integrated.** The two Prologue `<MUST HAVES>` — "People ask if I believe in such things." and "Read them so that when the world leans on your specification, you recognize the weight." — are integrated naturally, not inserted as declarations.
8. **Transition.** The prologue transitions cleanly to the Schaerbeek opening with a visible frame break that marks the shift from the mature to the younger narrator, preserves the younger narrator's skepticism, and plants the escaped-neutron clue. (Schaerbeek `<NOTE>`)
9. **No epistemic announcement.** The prologue does not explain the author's balancing strategy between ordinary and supernatural interpretations. (`$id-6418273059462718`)
10. **No mechanical Lovecraft.** The prologue borrows existential pressure without mechanically imitating Lovecraftian vocabulary or announcing a metaphysical strategy. (Top-level `<NOTE>`)
11. **No comic discharge.** The prologue contains no comic detours that discharge the dread. (Top-level `<NOTE>`)
12. **Evidence boundary.** The prologue's incident is distinguishable as a fictional composite, and the dossier's evidentiary categories are established. (Top-level `<NOTE>`, `$id-2642614869480108`)
13. **No prose rewrite.** This issue produces the design document only. The manuscript `supernatural.md` is not modified. (Issue constraint)

---

## 11. Live constraints summary

| Source | Constraint | Design response |
|---|---|---|
| Prologue `<NOTE>` | Why this narrator needs a dossier; why preserving uncertainty matters personally | §2 |
| Prologue `<NOTE>` | Faint but concrete anticipation of danger; no premature supernatural proof | §4 |
| Prologue `<MUST HAVES>` | "People ask if I believe in such things." | §3.3 |
| Prologue `<MUST HAVES>` | "Read them so that the world leans on your specification, you recognize the weight." | §5.3 |
| Top-level `<NOTE>` | Genuine dread, anxiety, uneasiness, fear, harmful consequences | §1, §5 |
| Top-level `<NOTE>` | Ordinary explanations remain available; vulnerability makes stranger interpretation hard to dismiss | §4 |
| Top-level `<NOTE>` | Fear through behavior, concrete surroundings, withheld certainty | §5 |
| Top-level `<NOTE>` | Preserve procedural rationality; subtle superstition | §3 |
| Top-level `<NOTE>` | Cumulative transformation from skepticism to reluctant belief | §3 |
| Top-level `<NOTE>` | Distinguish firsthand, reconstruction, secondhand, folklore | §8.2 |
| Top-level `<NOTE>` | No comic detours that discharge dread | §4.3 |
| Top-level `<NOTE>` | Precise physical/technical observation over decorative metaphor | §5 |
| Top-level `<NOTE>` | Cosmic horror pressure without mechanical Lovecraftian vocabulary | §10.9 |
| Top-level `<NOTE>` | Keep fact, reconstruction, hypothesis, suggestion distinguishable | §8 |
| Coda `<MUST HAVES>` | Handwriting, tape, margins, retold stories | §6 |
| `$id-9264982270043622` | Narrator privately leans supernatural; reluctant to admit | §3.2 |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | §3.1 |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | §3 (baseline) |
| `$id-3795396000378572` | Schaerbeek is the sane opening case | §7 |
| `$id-5364595046057851` | Reader must feel danger and dread | §1, §5 |
| `$id-6418273059462718` | Do not announce epistemic strategy | §8.3, §10.9 |
| `$id-2642614869480108` | Revisions preserve semantic and inferential work | §8, §10.12 |
| Schaerbeek `<NOTE>` | Younger narrator; no supernatural belief; implicit worldview mismatch | §7 |
| Schaerbeek `<NOTE>` | Escaped-neutron item as unspoken clue | §7.3 |
| Meaning graph `$n36795`–`$n92807` | Prologue nodes: dossier frame, skeptical surface, private leaning | §2, §3 |

---

## 12. Implementation notes for the separate prose issue

- The prologue should be **short**: a threshold, not a case. The current draft is ~5 sentences; the implementation should not exceed ~15–20 sentences of prose (excluding directives).
- The existing lines — "I was not trained for hauntings…", "I began to keep a dossier…", "Not a taxonomy—God preserve me from one more axis…", "A few I saw myself; others I learned from steadier hands…" — are the **spine** and should be preserved or lightly revised, not replaced.
- The `<PLACEHOLDER/>` after "control rooms and attics" should be filled with a concrete, physical detail of where cases were gathered — not a list of abstractions.
- The `<PLACEHOLDER/>` after "steadier hands who were there before me" should be filled with the **wound** (§2.2) — the incident that made him start keeping the dossier.
- The two `<MUST HAVES>` should be integrated as **spoken or reported speech**, not as narrator declarations.
- The transition to Schaerbeek should be a **single framing sentence** from the mature narrator, followed by the `---` and `## Case Files` structure that already exists.
