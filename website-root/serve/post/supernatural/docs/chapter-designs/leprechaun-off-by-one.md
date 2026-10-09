# Chapter Design — Case IV: The Leprechaun of Off-by-One

**Status:** design only, human review required. This document is a blueprint; it does not change chapter prose.
**Branch:** `design/232-leprechaun-off-by-one` (non-main, from `master`).
**Board issue:** #232.
**Target manuscript:** `website-root/serve/post/supernatural/supernatural.md`, §IV (heading at line 328, local `<NOTE>` at lines 330–336).
**Target deliverable of the eventual prose pass:** a revised §IV that satisfies the live Intent Records, the local `<NOTE>` block, and the acceptance tests below, without changing authorial goals.

---

## 1. Mandate and non-goals

This document specifies **what Case IV should do and how a future revision can verify it**. It is explicitly not an edit to `supernatural.md`.

In scope:

- a secondhand server-room legend, in which a purported small folkloric visitor (a small man in green clothes with a red beard) allegedly appears in a server room at night, and an off-by-one error appears as though the loop bounds of a `for`-loop had physically been moved by one;
- plot beats (design units, not paragraphs);
- the narrator's stance: how the dossier's compiler presents a legend he never witnessed and cannot verify;
- evidence reliability: the witness roster, the evidence layers, and the hard limits of each;
- the reader's emotional trajectory, with unease stronger than humor;
- human stakes: tangible harmful consequences of the one extra iteration, and the behavioral costs to the people involved;
- a credible technical anomaly: a technically ordinary off-by-one whose ordinary domestication fails for non-technical reasons;
- distinct style for this case within the collection, and the chapter transitions in (from Case III) and out (to Case V);
- measurable acceptance tests for the future prose pass;
- alternatives for the human author.

Out of scope / non-goals:

- rewriting chapter prose;
- changing the seven-case structure, narrator stance, escalation, or any live Intent Record;
- resolving the intended ambiguity (the ordinary and the numinous must both remain live);
- having the investigator directly verify the sighting;
- editing `supernatural.md`, `docs/meaning-graph.md`, or any Intent Record;
- any intent change: every proposal in §17 is flagged as a **human decision**, not assumed.

The manuscript's local directive block (§IV `<NOTE>`, `supernatural.md` lines 330–336) and the live Intent Records are the governing constraints. Where this design proposes something that would require an intent change, it is flagged in §17 or §18.

---

## 2. Live constraints this case must satisfy

### 2.1 Local `<NOTE>` constraints (`supernatural.md` lines 330–336)

- Tell a made-up story of how an actual Leprechaun from Irish folklore broke into the server room at night and "moved the loop bounds" (loop as in "a for-loop") by one.
- This should be a story told to us as a legend.
- In that legend, somebody allegedly saw an actual small man in green clothes with a red beard in the server room.
- Keep the folkloric sighting at the distance of reported operational legend rather than presenting it as something the investigator directly verifies.
- The case can be more extravagant than the early cases, but serious documentation, witnesses' reactions, and real consequences should give readers a reason to feel unsettled rather than merely amused.

### 2.2 Relevant Intent Records

| ID | Title | Bearing on Case IV |
| --- | --- | --- |
| `$id-9342987960007338` | Leprechaun case treats folklore as operational legend | Primary case premise: a figure from Irish folklore allegedly seen in the server room; an off-by-one appears as though loop bounds were physically moved; materially more difficult to domesticate into ordinary engineering language than earlier cases, while retaining the dossier's serious evidentiary manner. |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | Case IV is mid-escalation: the phenomenon is openly extravagant (folklore on stage), and the ordinary story fails for *evidentiary* reasons, not because it was never available. |
| `$id-7350745426882596` | Escalation is epistemic as well as supernatural | Show the narrator spending effort preserving skeptical form (documenting witnesses, evidence limits) while entertaining a premise an earlier version of himself would have filed under human error without a second thought. |
| `$id-5364595046057851` | The reader must feel the danger and dread | Requires believable human stakes and escalating behavioral/emotional consequences while preserving technical credibility, the narrator's disciplined habits, skeptical ambiguity, and restraint. |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | The narrator presents the legend with operational detail, named uncertainties, qualifications; the supernatural reading is invited, never declared. |
| `$id-9264982270043622` | Narrator privately leans supernatural | His leaning is shown behaviorally (what he keeps, what he checks twice), never announced; reluctance is the register. |
| `$id-0964292624358295` | Horror and humor emerge from serious procedure | Horror must arise from meticulous documentation of an extravagant claim; no announced jokes, no generic horror decoration, no comic detours that discharge the dread. |
| `$id-6418273059462718` | Do not announce the manuscript's epistemic strategy | No narrator-as-author statements advertising that a metaphysical explanation is optional/unnecessary or that the legend is being kept alive deliberately. |
| `$id-9688210860921309` | Human intent outranks autonomous taste | Alternatives in §17 are proposals; they do not silently change intent. |
| `$id-7494998113772687` | Seven-case dossier structure | Case IV stays a principal case; no added principal cases, no structural changes. |

### 2.3 Meaning-graph nodes that encode current intent

The Case IV directive block carries five graph nodes (all currently non-diegetic draft instructions / editorial direction):

- `$n35689` — "Tell a made up story of how actual Leprechaun from Irish folklore broke into the server room at night and 'moved the loop bounds' … by one."
- `$n82531` — "This should be a story told to us by as a legend."
- `$n68532` — "In that legend, somebody allegedly, saw an actual small man in green clothes with a red beard in the server room."
- `$n20750` — "Keep the folkloric sighting at the distance of reported operational legend rather than presenting it as something the investigator directly verifies."
- `$n52828` — "The case can be more extravagant than the early cases, but serious documentation, witnesses' reactions, and real consequences should give readers a reason to feel unsettled rather than merely amused."

A future prose pass must update these nodes in the same change; this design pass changes no manuscript sentence, so no graph node changes are required here.

### 2.4 Top-level `<NOTE>` directives that bear on this case

- "Distinguish firsthand incidents, historical reconstructions, secondhand testimony, and folklore, allowing progressively extravagant cases to have different evidentiary weight." — Case IV is the collection's **folklore** layer: the first case whose phenomenon is never firsthand to anyone the narrator can reach. This is the case's structural innovation (see §5).
- "It is grave, meticulous, humor only implicit, investigator fraying at the edges." and "The chief artistic goal is to make readers feel genuine dread, anxiety, uneasiness, fear, and the possibility of harmful consequences." — the issue brief adds: **documentation stays serious; unease is stronger than humor.**

---

## 3. The legend's technical substrate: what "moved the loop bounds" can credibly mean

Case IV is a made-up story with **no real incident behind it** (unlike Cases I–II). There is no historical ground truth to preserve. What must still be credible is the **technical mechanism inside the legend**: the reader must be able to reconstruct exactly what "the loop bounds were moved by one" means, and the ordinary domestication of it must fail for reasons internal to the story, not because the mechanism is magical.

### 3.1 The anomaly, stated precisely

The legend's system contains a `for`-loop of the form `for (i = 0; i < count; i++)` over `count` items. On the night in question, the system behaved as though the upper bound were `count + 1` — exactly one extra iteration. The harm is entirely contained in that one extra iteration: one item processed that should not have been.

Design requirements on the mechanism:

- the difference must be **exactly one iteration** (an off-by-one, not a rewrite, not an unbounded loop);
- the "moved" framing must come from the witness/legend, not from the narrator's analysis (the narrator reports that the bound *appeared moved*; he does not assert it was moved by non-human agency);
- the mechanism must be stated in ordinary, correct technical language: inclusive versus exclusive upper bounds, fencepost errors, one-past-the-end indexing, an iterator whose range is inclusive.

### 3.2 Why the ordinary story fails inside the legend (the domestication gap)

Earlier cases domesticated cleanly or semi-cleanly: Case I had a documented ordinary mechanism (single-event upset, endnotes 2–4); Case II's real cause was later found and fixed (endnote 5). Case IV's ordinary story must fail **on evidence, not on physics**:

| Ordinary candidate | What it requires | Why it fails in-story |
| --- | --- | --- |
| O1 — a committed erroneous change | an author who wrote `i <= count` | The commit exists in no history; the engineer who would have written it denies it, and the denial is credible (the surrounding diff is theirs; the bound line is not). |
| O2 — a generated or stale-template rebuild | a build path that reintroduces an old bound | Possible but unverifiable: the build artifacts from that night were rotated out; the template has since changed. An open door, not an answer. |
| O3 — a merge or hotfix artifact | a plausible operational moment for one | The change window contains no merge, no hotfix, no deploy at the relevant hour. |
| O4 — the witness misread; the bound never changed | the extra iteration came from elsewhere (a sibling loop, an inclusive range, a fencepost in a batch-size computation) | The logs show the loop itself ran `count + 1` iterations. The bound line in the artifact is the thing that differs; O4 cannot absorb that. |

**Design rule:** the prose may present O1–O4 as the candidates the investigation considered; it must not confirm one. The reader finishes the case unable to complete the mundane story — and unable to believe the supernatural one. That gap is the case's horror, and it is what `$id-9342987960007338` means by "materially more difficult to domesticate into ordinary engineering language."

### 3.3 The supernatural candidate (never asserted)

The legend's own explanation: the bound was moved, physically, in the night, by the small man in green clothes with the red beard. This exists only as (a) what the witness claims to have seen nearby, and (b) the story the team tells. No sentence in the narrator's voice may assert it; the narrator records that he does not file it under human error, which is the closest the dossier comes to endorsing anything.

---

## 4. Evidence and fiction boundary

| Layer | Status | Where it lives |
| --- | --- | --- |
| The harm: logs showing exactly one extra iteration and its concrete consequence | **in-story documented** (within the legend's world) | Chapter, reported by the narrator as established fact of the incident |
| The bound line differing between the deployed artifact and every commit | **in-story documented, attribution-less** | Chapter, investigation finding |
| O1–O4 as candidate explanations | **in-story plausible, unconfirmed** | Chapter, as what was considered and rejected-or-unproven |
| The server room, the night, the roster, the team | **fictional reconstruction** (the legend as compiled) | Chapter |
| The sighting: small man, green clothes, red beard | **secondhand testimony at legend distance** — one witness, uncorroborated, filtered through retelling | Chapter, explicitly marked ("the story goes", "I was told") |
| "Moved the loop bounds" as a physical act by a non-human agent | **supernatural implication — never asserted** | Withheld; exists only in the legend and the reader's assembly |

The case's evidentiary weight is the lowest in the collection so far — deliberately. The top-level `<NOTE>` asks that progressively extravagant cases carry different evidentiary weight; Case IV is the first case where the narrator includes material whose central phenomenon no reachable witness confirms, and the reader must watch him do it and know he is doing it.

---

## 5. Case function in the collection arc

- **Case I (Schaerbeek)** is the sane opening: a real, documented anomaly with a conventional explanation. **Case II (Heisenbug)** is firsthand; the ordinary cause exists but is unfindable that night. **Case III (Maxwell's Demon)** is a made-up tale around a real improbability and a private dream.
- **Case IV is the collection's first pure legend**: made up, secondhand, folklore-framed, with the lowest reachable evidentiary weight. The escalation is therefore *not* primarily in the phenomenon — a leprechaun is extravagant, but the narrator's world has already hosted a demon. The escalation is in **the narrator's filing behavior**: he keeps a legend in a dossier of field notes, and his justification is thinner than his method. `$id-7350745426882596` makes this the case's measurable spine: skeptical form intact, premise entertained that an earlier version of him would have dismissed.
- **Progression to more extravagant cases:** Case IV must raise the extravagance budget (folklore told straight, harm treated seriously) without exhausting it — Cases V (astrological causality) and VI (a crocodile, treated with misplaced causal seriousness) go further. Case IV's residue must therefore be a *procedure*, not a conclusion: a changed habit in the narrator and in the legend's team, which later cases can inherit and outbid.
- **Handoff residue to Case V:** Case IV ends with an unfiled legend and a narrator whose domestication threshold has moved. Case V answers with the strictest operational discipline in the collection. The bridge is behavioral (§14.2), not strategic.

---

## 6. Chronology

The legend has two clocks: the incident night (legend time, known only through retelling) and the investigation/retelling (which the narrator compiles later). The dossier compiler's chronology must keep both visible and never let summary be mistaken for firsthand.

### 6.1 Canonical timeline (for the prose pass to preserve; monotonic within each clock)

| When | Event | Evidentiary status |
| --- | --- | --- |
| Incident night, late | The loop runs one extra iteration; the harm occurs | In-story documented (morning logs) |
| Incident night, around the same hours | The operator allegedly sees the small man in green clothes with a red beard in the server room | Single-witness legend, uncorroborated |
| Next morning | The on-call engineer finds the harm; the logs show `count + 1` iterations | In-story documented |
| Following days | The investigation: the artifact's bound line differs from every commit; O1–O4 considered; the commit search comes up empty or inconclusive | In-story documented finding |
| During the investigation | The camera question is settled: there is no camera in the room (§17, Option C) | In-story documented |
| After the investigation | The witness leaves the company (or stays but will not discuss it — §17, Option W); the story begins to circulate | Frame fact for the narrator |
| Retelling period | The legend stabilizes: told at onboarding, in the incident channel, at conferences; each telling keeps the figure, loses a detail | Frame fact; narrator compiles |
| Dossier present | The narrator writes the case up; he does not file it under human error | Narrator inference (behavioral) |

### 6.2 Believability rules

- The witness's account may contain only what a night operator could perceive: the room, the machine, the figure, the time, the fear. He may not narrate the investigation's internal findings except as they were later told to him — those enter as retelling, with markers.
- The compression of a multi-day investigation into reported summary is acceptable if the markers stay visible ("the investigation found…", "I was told that…"), as in Case I's "Later, the machine was tested…" pattern.
- The narrator never claims to have been in the room; any sensory detail of the room is explicitly the legend's, not his.

---

## 7. Witnesses and evidence limits

### 7.1 Witness roster

| Witness | What they saw | Relation to narrator | Reliability design |
| --- | --- | --- | --- |
| W1 — the night operator | The figure; the room at night; (later) the harm as reported to him | Secondhand; one remove further through at least one reteller | Single witness; night shift; uncorroborated; his account is now a story he is tired of or unreachable for. The word "leprechaun" is his or the story's — the design keeps it as the word he reached for, which is itself evidence of how a tired man files an unfileable perception. |
| W2 — the on-call engineer | The morning harm; the logs | Secondhand to the narrator | Firsthand for the harm; the case's most reliable layer. Never saw the figure. |
| W3 — the investigation lead | The attribution search; the camera question | Secondhand to the narrator | Firsthand for the limits: no commit, no camera, no author. Their findings are the spine of the ordinary story's failure. |
| W4 — the rumour-bearers | The legend as it circulates | The narrator hears several independent tellings | Useful for the legend's ecology (how the story changes), useless for the phenomenon — and the narrator says so by showing, not by declaring. |

### 7.2 Hard evidence limits (the case's floor)

1. **No corroboration of the sighting.** No second witness, no image, no physical trace. The figure exists in one account, retold.
2. **No commit.** The bound line that differs has no author in the history. O1–O4 all remain possible; none closes.
3. **No camera.** The server room has no camera (§17, Option C — a room of machines, not people; a privacy choice the company made years earlier). The legend cannot be checked against footage, in either direction.
4. **The narrator's distance.** He was not there; he never sees the room; he cannot reach W1 (or reaches a tired, closing door). Every supernatural-adjacent claim is at least two removes from him; every ordinary fact is one remove or documented.

**Design rule:** these limits are the case's structure, not its gaps. A prose pass that "solves" any of them (finds the commit, finds the footage, reaches the witness who confirms) has broken the case.

---

## 8. The credible technical anomaly (recommended shape)

Recommended composite (implementation may refine; §17 lists the choices):

- **The system:** a periodic batch job over a bounded collection — the design's recommended harm domain is a **reaper/purge job** (§17, Option H1): every night it walks `count` partitions/rows/records and deletes what is old. The extra iteration deleted one thing that was not old — one live record, one live object, one customer's data — irreversibly. The off-by-one is physically harmless in the machine and humanly harmful in the world; the harm is exactly one iteration's worth, which is what makes the legend's phrasing ("it moved the bounds by one") feel earned rather than decorative.
- **The anomaly:** the deployed artifact's bound line differs from source and from every commit; the logs show `count + 1` iterations; the extra iteration maps 1:1 to the harm. Technically ordinary (fencepost errors, inclusive/exclusive bounds, generated code, tired humans editing limits) and evidentially unattachable.
- **Why this domestication failure is the point:** in Case I the ordinary story *completed* (a mechanism, a report, "very probably"); in Case II the ordinary story *existed and was later found*; in Case IV the ordinary story is *available and uncompletable* — the reader can build O1–O4 and cannot finish any of them, while the supernatural story cannot be believed. The discomfort is the gap itself.

---

## 9. Scene beats (plot beats)

Beat numbers are design units, not paragraph counts. The order is a recommendation; the acceptance tests (§16) check properties, not sequence.

1. **The frame: a legend, not a reconstruction.** The narrator introduces the case at compile distance — this one was never his, nobody's firsthand that he could reach. Establishes the collection's evidentiary-kind distinction concretely (top-level `<NOTE>`): firsthand, reconstruction, secondhand, folklore — and places this file in the last column. *Anxiety target: the narrator's bar is visible, and it is about to move.*
2. **The harm first.** Before any ghost: the morning discovery, in W2's firsthand layer. One extra iteration; one real record gone; a customer, a team, a morning. The consequences are stated before the phenomenon (procedure: evidence before marvel). *Anxiety target: this legend has a body count of one, and it is specific.*
3. **The diff.** The investigation's finding: the bound line differs; the commit search comes back empty; O1–O4 listed in the narrator's exact, qualifying register; none confirmed. *Anxiety target: the ordinary story will not close.*
4. **The sighting, at two removes.** The legend's core as told: a small man in green clothes with a red beard, in the server room, at night, near the rack. The narrator marks the distance on every sentence ("the story goes", "I was told", "no one I asked had seen it themselves"). The word *leprechaun* is attributed to the witness or the story, not adopted by the narrator. *Anxiety target: the extravagance is documented, not debunked.*
5. **The witnesses.** W1–W4 in sequence, each with their limit: the tired/uncachable operator, the morning engineer, the lead with the empty commit search, the rumour-bearers whose tellings drift. *Anxiety target: the story's reliability degrades exactly where the supernatural claim lives, and nowhere else.*
6. **The legend's ecology.** How the story lives: told at onboarding, in the incident channel, at the Christmas party; each telling keeps the figure and sheds a detail; the humor in the telling is recorded as a fact about the tellers. *Anxiety target: the story is more alive than the evidence, and everyone knows it.*
7. **The human cost, behavioral.** The harmed party (one specific consequence, one face); W1's cost (he told what he saw and became the guy who saw the leprechaun — believed by no one who matters, or believed by everyone and taken seriously by none); the team's new ritual (§17, Option R — counting iterations aloud, bounds checked in pairs: superstition disguised as procedure, which the narrator recognizes because he has his own version). *Anxiety target: belief and ritual are spreading on both sides of the evidence gap.*
8. **The narrator's verdict.** He does not file it under human error. He does not file it under anything. Optionally, a dossier field note (§17, Option F) whose theme is the change no one authored — wording reserved for the prose pass. *Anxiety target: the omission is the tell; the reader watches the bar move.*
9. **The residue.** What the case leaves in the narrator: a small private habit (he reads loop bounds twice now; he checks the diff of anything that touches a limit). Not announced — shown in one concrete action. This is the handoff to Case V (§14.2). *Anxiety target: the legend has changed the investigator, and the change is permanent.*

---

## 10. Human stakes and harmful consequences

The `<NOTE>` and `$id-5364595046057851` require tangible, escalating human consequences — "unsettled rather than merely amused."

### 10.1 The direct harm (one extra iteration, one victim)

Recommended (§17, Option H1): the reaper's extra iteration deleted one live record — a customer whose data simply stopped existing, discovered that morning, unrecoverable from the job's own path. Requirements:

- the victim is specific but lightly sketched (one name, one consequence — no biography);
- the harm is irreversible by the system's own logic (that is what an off-by-one *does*: it does one thing too many, and the extra thing is not undoable);
- the harm is discovered before the ghost is mentioned (beat 2 before beat 4).

### 10.2 The witness's cost

W1 told what he saw and the story took him: he is now the guy who saw the leprechaun. His account has become a story people tell at onboarding. Design options (§17, Option W): left the company and is unreachable; or still there, tired, closing the conversation. Either way his credibility is a casualty — not because he is lying, but because the story is better than his evidence and everyone can feel the difference.

### 10.3 The team's cost

The ritual: counting iterations aloud, bounds checked in pairs, a new procedure nobody wrote down as a superstition because it is written down as procedure. The narrator recognizes it because he has begun his own version (beat 9). This is the collection's superstition-disguised-as-procedure motif (Case I's cathedral of checks, Case II's private note) arriving in a team rather than a person — and arriving around a *legend*, which is the escalation.

### 10.4 The narrator's cost

His filing taxonomy breaks: he keeps a legend in a dossier of field notes, and he knows the bar has moved. His cost is epistemic and permanent — the residue of beat 9 — and it must be shown as behavior (the double-check, the withheld field-note category), never declared.

### 10.5 Escalation rule

Consequences escalate from data (the record) to person (W1) to team (the ritual) to narrator (the habit), each layer shown behaviorally. No consequence is announced; none is poetic; the dread accrues from the specificity.

---

## 11. Narrator stance and evidence reliability

| Element | Narrator's public stance | Narrator's private state | Reader's position |
| --- | --- | --- | --- |
| The harm (one extra iteration, one record gone) | documented; reported as the incident's established fact | accepted without reservation | ordinary, undeniable |
| The attribution-less bound line | "no commit explains it" — stated as a finding | the finding sits badly; O1–O4 all remain live | ordinary story available but uncompletable |
| The sighting (small man, green clothes, red beard) | recorded as legend, with the distance marked on every sentence | he neither endorses nor debunks; he keeps it | invited to weigh it |
| The legend's ecology | reported as fact about the tellers | he notices the story outlives its evidence and does not say so explicitly | discomfort: the story is more alive than the truth |
| His verdict | not filed under human error; no category given | his threshold has moved; the residue is a private habit | the bar moves in full view |

**Narrator belief rule:** he never announces belief, and he never announces the strategy of his withholding (`$id-6418273059462718`). His private leaning is carried entirely by behavior: what he keeps, what he checks twice, what he declines to file. This preserves `$id-9264982270043622` and `$id-0861352612251497` at maximum distance from the material.

---

## 12. Reader emotional trajectory

| Phase | Beats | Emotion | Mechanism |
| --- | --- | --- | --- |
| Frame | 1 | Curiosity, slight comic anticipation | a leprechaun in the server room; the narrator's visible competence |
| Harm | 2 | Concern, specificity | one record gone; a named consequence before any marvel |
| The gap | 3 | Unease | the ordinary story listed and unclosable |
| The sighting | 4 | Unease stronger than humor | the extravagance documented without distance collapsed; the red beard exact, the witness tired |
| The witnesses | 5 | Dread, social | reliability degrades exactly where the claim lives |
| The ecology | 6 | Discomfort | the story is told with a smile; the smile is data |
| The cost | 7 | Dread, spreading | witness, team, ritual — belief and procedure both moving |
| The verdict | 8 | Residual fear | the omission as tell; the bar moves |
| The residue | 9 | Lasting unease | the narrator's private habit; the case changes the investigator |

**Humor discipline (issue brief: unease stronger than humor):** humor is permitted only inside the legend's ecology (beat 6) — the tellers' smiles, the onboarding story, the absurdity the characters themselves cannot help. The narrator's own register carries no jokes, explains none, and discharges nothing. After beat 2 no comic beat may undercut the harm; after beat 4 none may undercut the dread. The design's rule: the case may *contain* amusement; it may not *be* amusing.

---

## 13. Style, voice, and distinctiveness within the collection

### 13.1 The legend register (this case's distinct style)

Cases I–II are reconstructions (firsthand or compressed testimony); Case III is a made-up tale built on a real improbability and a private dream. Case IV's distinct register is the **compiled legend**: the dossier compiler at one remove, documenting a story as an object.

Voice markers (to preserve):

- reported-speech verbs doing epistemic work: *the story goes*, *I was told*, *nobody remembers who told it first*, *no one I asked had seen it themselves*;
- hedging as craft, not weakness: every supernatural-adjacent claim carries its distance marker;
- the compiler's habits visible: he checks the sources, he notes the camera gap, he records his own limits — the skepticism is in the documentation, not in a verdict;
- exact technical diction for the mechanism (bound, inclusive, one extra iteration) so the ordinary story stays buildable by the reader.

### 13.2 Physical palette (selective, double-duty)

- **The legend's room:** the cold aisle, the hum, the specific rack, the chair or floor where the figure was seen — details that do duty for the sighting's credibility (or its absence).
- **The morning room:** lights on, coffee, the harm on a screen — the documented layer's physicality.
- **The narrator's compiling room:** the dossier's paper reality (a folder, a margin, the field-note page) — the frame's physicality, matching the prologue's established dossier habits.
- Distribution: at least one sensory beat per major phase; none that announces theme.

### 13.3 Prose budget

Recommended eventual §IV length: **~1,200–1,800 words** (current §IV is the NOTE only, ~90 words; Case I ≈ 1,300; Case II ≈ 1,000). The legend needs room for witnesses and documentation without decorative expansion.

---

## 14. Chapter transitions

### 14.1 Transition in (from Case III, Maxwell's Demon)

- Case III is a made-up tale of a private supernatural experience (a demon in a dream) anchored to a real improbability. Case IV is a made-up tale of a public one (a legend the whole team tells).
- **Proposed bridge (diegetic, behavioral):** the narrator's dossier logic — one dream is a story; a legend is a pattern. He notes that he has heard the Case IV story from several people independently, in versions that agree on the figure and disagree on everything else. The handoff is a shift in the *kind* of made-up story the dossier must absorb: from private experience to collective lore. No strategy is announced; the bridge is the compiler's habits applied to a new input.

### 14.2 Transition out (to Case V, Mercury in Retrograde)

- Case IV ends with an unfiled legend, a moved threshold, and the narrator's private residue (he reads loop bounds twice).
- Case V answers with the strictest operational discipline in the collection: a unique bug, an exact timeline, a correlation documented to the point of temptation.
- **Proposed bridge:** the residue is the discipline. The narrator's new habit — checking limits, reading diffs twice — is exactly what Case V's stricter documentation demands, so the pendulum swings back toward procedure while the threshold stays moved. The bridge must be behavioral (the habit; the team's ritual the narrator half-recognizes as his own), never a statement about method.

---

## 15. Preserved peaks (must-not-break list)

1. **The figure's exact attributes:** small man, green clothes, red beard (`$n68532`). Never softened to "a figure in green" or expanded beyond the NOTE.
2. **The mechanism:** a `for`-loop; the bounds moved; the difference is exactly one iteration (`$n35689`, `$n9342987960007338`). Not a rewrite, not an unbounded loop, not a metaphor.
3. **The legend distance:** secondhand; the narrator never verifies; the sighting stays at reported-legend distance (`$n20750`, `$n82531`).
4. **Serious documentation despite extravagance:** witnesses, evidence limits, real consequences (`$n52828`).
5. **The tangible harm:** real, specific, irreversible, human-faced.
6. **The narrator's silence about his stance:** no announced belief, no announced strategy.
7. **Structure:** Case IV remains one of seven principal cases; nothing is added or removed.

---

## 16. Measurable acceptance tests

A future prose pass is acceptable for review when all of the following hold. "Verify" is against the revised `supernatural.md` §IV and the endnotes.

| # | Criterion | How to verify | Evidence |
| --- | --- | --- | --- |
| A1 | Legend distance maintained | grep reported-speech markers | every supernatural-adjacent sentence carries a distance marker ("the story goes", "I was told", "no one I asked had seen it themselves"); no first-person sighting |
| A2 | Figure attributes exact | locate description | small man + green clothes + red beard all present; none contradicted |
| A3 | Mechanism is a for-loop off-by-one, exactly one iteration | read the anomaly description | `for`-loop named; bound moved; difference stated as one extra iteration; harm maps 1:1 to the extra iteration |
| A4 | Harm is specific, documented, human-faced | read beats 1–3 | one named consequence; discovered before the figure is mentioned; no poetic description of the loss |
| A5 | Ordinary candidates all live and unconfirmed | search O1–O4 | at least three candidates presented; none confirmed; the commit search reported as empty/incongruent |
| A6 | No supernatural assertion | read all diegetic sentences | no sentence in the narrator's voice claims the figure moved the bounds; the "moved" framing is attributed to the witness/legend |
| A7 | Witness roster and limits present | tag paragraphs | W1–W4 distinguishable; each with their limit; camera gap stated with its ordinary reason |
| A8 | Uncorroborated | count witnesses to the sighting | exactly one; no image, no trace |
| A9 | Humor discipline | read from beat 2 onward | no comic detour undercuts the harm; no comic beat undercuts the dread after beat 4; no joke explained |
| A10 | Narrator's stance behavioral | read the verdict and residue beats | verdict shown as omission/habit; no "I believe" and no strategy announcement |
| A11 | Escalation visible | compare with §II/§III | domestication harder than Case II (ordinary story uncompletable vs merely unfound); extravagance higher than Case III (folklore on stage vs dream); less extravagant than Cases V–VI budget |
| A12 | Residue is procedural | read the final beat | a concrete habit (bounds read twice / diff checked); not a conclusion |
| A13 | Transitions connect | read case boundaries | in: several independent tellings vs Case III's private dream; out: the habit as the discipline Case V demands |
| A14 | Structure unchanged | diff headings | seven principal cases unchanged; no new principal case |
| A15 | Design-only pass | git diff | this branch changes no `supernatural.md` sentence |
| A16 | Graph consistency | meaning graph | if prose changes, the five Case IV nodes are updated with exact `text` and total coverage |

Optional quantitative guardrails (author to confirm): §IV within **~1,200–1,800 words**; at least **three** ordinary candidates; at most **one** humor beat inside the narrator's register (zero preferred); at least **four** distinct sensory details across the three rooms.

---

## 17. Alternatives for human review

These are **proposals**, not intent changes. Each states what it would gain and what it risks.

### Option H — Harm domain

- **H1 (recommended):** a reaper/purge job; the extra iteration deletes one live record — irreversible, customer-facing, physically harmless in the machine. Gains: the strongest domestication gap (no author, no undo); echoes Case I's "clean error" at one remove. Risks: needs one lightly sketched victim; over-specifying the business can date the story.
- **H2:** a rolling restart; the extra iteration takes one host out of rotation — capacity drops, near-outage. Gains: operational, no customer data. Risks: reversible-feeling; weaker horror.
- **H3:** a billing/charge loop; the extra iteration charges one customer twice. Gains: money harm, audit weight. Risks: the "double charge" shape is a known comic trope — highest risk of amusement, which the case cannot afford.
- **Decision needed:** which domain, and how explicit the victim should be.

### Option A — Attribution shape of the anomaly

- **A1 (recommended):** no commit at all; the author denies it credibly; O2 (stale generated build) left as an open door. Gaps none; the mundane story is uncompletable.
- **A2:** the commit exists but is misattributed (bot account, shared credentials). Gains: a concrete failure (an account hygiene story). Risks: domesticates too far — the case becomes about process failure, not evidence.
- **A3:** the bound never changed; the extra iteration came from elsewhere and the witness misread. Gains: maximum twist. Risks: collapses the legend's core mechanism (violates `$n35689`); rejected as primary.

### Option C — The camera

- **C1 (recommended):** no camera in the room; ordinary reason (a room of machines, not people; an old privacy policy). Gains: diegetically justified, no convenience. Risks: none identified.
- **C2:** a camera exists but was "under maintenance" that week. **Rejected** — too convenient; reads as plotting.
- **C3:** a camera exists and saw nothing. **Rejected as primary** — implies the figure was real-but-unrecorded, collapsing the distance the NOTE requires.

### Option W — Witness disposition

- **W-a (recommended):** left the company; unreachable. Gains: clean distance. Risks: slightly gothic.
- **W-b:** still employed; tired of the story; closes the conversation. Gains: human, contemporary. Risks: the interview could domesticate if he confirms anything.
- **Recommendation:** W-a or W-b; not both. The witness must not confirm, deny interestingly, or be reached by the narrator.

### Option R — The team's residue

- **R1 (recommended):** a procedural ritual — iterations counted aloud, bounds checked in pairs, written down as procedure. Gains: superstition disguised as procedure; the narrator recognizes himself in it. Risks: none identified; matches collection motifs.
- **R2:** nobody talks about it; the fear is silent. Gains: quieter. Risks: loses the spreading-belief escalation (§10.3).
- **R3:** a literal charm left near the rack. **Rejected** — too literal; breaks the serious-documentation register.

### Option F — The field note

- **F1 (recommended):** a dossier field note (Field Note #2 by the collection's numbering), theme: the change no one authored / the story that outlives its evidence. Wording reserved for the prose pass. Gains: matches the dossier form; the note as the case's residue. Risks: numbering must be confirmed against the overall dossier plan (§18).
- **F2:** no field note — Case IV is the first case that gets no note; the absence is the point. Gains: bold. Risks: breaks the established Field Note pattern (Case I has #1) without human approval.

### Option E — Legend detail drift

- **E1 (recommended):** each retelling keeps the figure (small man, green clothes, red beard) and sheds a peripheral detail (the rack, the hour, the shade of green). Gains: realistic rumor ecology. Risks: none; the core attributes are fixed by the NOTE.
- **E2:** the drift reaches the core attributes in some tellings. **Rejected** — weakens `$n68532`.

---

## 18. Open questions and conflicts to surface

1. **Harm domain** — unspecified in the NOTE; requires a human choice (Option H).
2. **Witness disposition** — affects the verification beats (Option W).
3. **Field note numbering** — whether Case IV carries Field Note #2 must be confirmed against the dossier's overall numbering plan; F2 (no note) is the alternative.
4. **Endnote policy for a made-up case** — Cases I–II anchor to documented incidents (endnotes 1–5); Case IV is explicitly made up. Options: no endnote for §IV (the case is labeled legend inside the dossier, consistent with the NOTE); or a folklore/general reference endnote (e.g., on leprechaun folklore or on the off-by-one error class) for texture. No recommendation — the NOTE's "made up" framing suggests silence, but the collection's endnote pattern is a human decision.
5. **Global MUST HAVES** — "There are systems whose failure modes include poetry" and the other top-level quoted phrases are unassigned to any case in this design; Case IV makes no claim on them. The prose pass should confirm where they belong.
6. **No conflict found** between the local `<NOTE>` and the live Intent Records: the NOTE's "more extravagant … unsettled rather than merely amused" and `$id-9342987960007338`'s "more difficult to domesticate … serious evidentiary manner" are compatible and jointly require the design in §3 and §8.

---

## 19. Summary for the reviewer

Case IV is the collection's first pure legend: a made-up, secondhand, folklore-framed story that the dossier's compiler includes at the lowest evidentiary weight the collection has yet used — and knows he is using. The legend's core is exact: a small man in green clothes with a red beard, seen once, uncorroborated; and an off-by-one in a `for`-loop's bounds, appearing as though the bound had been physically moved by one, whose single extra iteration destroys one real record. The horror is the domestication gap: the ordinary story (a tired engineer's edit, a stale build, a misread diff) is available and uncompletable, while the supernatural story cannot be believed — and the narrator, his skeptical form intact, declines to file the case under human error. The harm is specific and human-faced; the costs spread from the record to the witness to the team's new ritual to the narrator's own permanent habit. Humor is confined to the tellers; the documentation stays serious; the unease is stronger than the humor. The case hands Case III's private dream to a public legend, and hands Case V a residue of procedure — the narrator checking limits twice — as the collection swings back toward stricter discipline with the threshold already moved.
