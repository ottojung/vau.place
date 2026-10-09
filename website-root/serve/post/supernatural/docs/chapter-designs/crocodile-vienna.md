# Chapter Design — Case VI: The Crocodile in Vienna

**Status:** design only, human review required. This document is a blueprint; it does not change chapter prose.
**Branch:** `design/236-crocodile-vienna` (non-main, from `master`).
**Board issue:** #236.
**Target manuscript:** `website-root/serve/post/supernatural/supernatural.md`, §VI (heading at line 354, local `<NOTE>` at lines 356–362; currently no prose).
**Target deliverable of the eventual prose pass:** a new §VI that satisfies the live Intent Records, the local `<NOTE>` block, and the acceptance tests below, without changing authorial goals.

---

## 1. Mandate and non-goals

This document specifies **what Case VI should do and how a future revision can verify it**. It is explicitly not an edit to `supernatural.md`.

In scope:

- a fictional crocodile sighting in Vienna that causes genuine, documented local disruption (closed public spaces, police and animal-control response, public alarm, real consequences for residents);
- the narrator's procedural investigation of that disruption, conducted with the same meticulous software-incident methodology he applied in Cases I–V;
- the central design question: how the narrator investigates the **absence** of American software effects — an absence that is causally irrelevant — with enough seriousness that it demonstrates his deteriorated sense of what causal evidence matters;
- the human stakes of the crocodile event itself, which must remain concrete and never be displaced by the narrator's misplaced attention;
- the dread mechanism: epistemic horror arising from watching a once-reliable investigator treat noise as signal;
- chronology, scene beats, source reliability layers, and the meaning-graph boundary;
- the adjacent-case link: how Case VI escalates from Case V's causality temptation;
- stylistic constraints that preserve implicit absurdity, accurate geography, and human consequences without explaining the joke;
- measurable acceptance tests for the future prose pass;
- alternatives for the human author.

Out of scope / non-goals:

- rewriting chapter prose (this pass creates no prose);
- changing the seven-case structure, narrator stance, escalation, or any live Intent Record;
- resolving the intended ambiguity (the ordinary and the numinous must both remain live);
- making the crocodile itself supernatural;
- explaining the joke — the absurdity must remain implicit and never be acknowledged by the narrator or the text;
- editing `supernatural.md`, `docs/meaning-graph.md`, or any Intent Record;
- any intent change: every proposal in §17 is flagged as a **human decision**, not assumed.

The manuscript's local directive block (§VI `<NOTE>`, `supernatural.md` lines 356–362) and the live Intent Records are the governing constraints. Where this design proposes something that would require an intent change, it is flagged in §17 or §18.

---

## 2. Live constraints this case must satisfy

### 2.1 Local `<NOTE>` constraints (`supernatural.md` lines 356–362)

- Tell a made-up story of how a crocodile was spotted in Vienna, causing a stir among the locals and drawing attention from the authorities and impacting lives of people in the city.
- The crocodile had no impact on American software systems, which continued to operate as normal (different continent, get it?).
- The conspicuous absence of an American software failure should function as a deliberate test of the narrator's changing ideas of causality, not as an isolated joke.
- Keep the serious procedural account of Vienna's disruption and the narrator's misplaced investigative attention, allowing the reader to notice the absurdity without commentary.
- Reference: the NOTE cites a ChatGPT share link (`https://chatgpt.com/share/68f3eeb1-c1c0-800e-b09b-e2ee25ddbf47`) as the originating idea; the link was not retrievable at design time. The NOTE text itself is the governing constraint.

### 2.2 Relevant Intent Records

| ID | Title | Bearing on Case VI |
| --- | --- | --- |
| `$id-2221791653068770` | Crocodile case escalates through misplaced causal seriousness | Primary case premise: a crocodile in Vienna causes real local commotion while American software systems operate normally; the narrator treats the absence of transatlantic effects with enough investigative seriousness to advance the collection's growing absurdity; the geographical non-causation is obvious to the reader but handled as evidence by a narrator whose standards of relevant causality have drifted. |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | Case VI is late-escalation: the ordinary explanation (a crocodile in a canal has no causal connection to software systems) is trivially available — and the narrator no longer recognizes it as sufficient. |
| `$id-7350745426882596` | Escalation is epistemic as well as supernatural | Case VI is the epistemic extreme: the narrator's method remains meticulous, but what he considers evidence has drifted so far that he treats a causally irrelevant absence as a finding. |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | The narrator must still present with the habits of a skeptic: operational detail, procedural reconstruction, qualifications. The absurdity arises from applying these habits to the wrong question, not from abandoning them. |
| `$id-9264982270043622` | Narrator privately leans supernatural | By Case VI, the narrator's private leaning has metastasized: he no longer merely leans toward supernatural explanations — he has lost the ability to distinguish relevant from irrelevant evidence. |
| `$id-5364595046057851` | The reader must feel the danger and dread | Requires believable human stakes and escalating behavioral/emotional consequences. In Case VI, the human stakes are the real Viennese disruption; the dread is the narrator's epistemic collapse. |
| `$id-0964292624358295` | Horror and humor emerge from serious procedure | Horror must arise from meticulous procedure applied to the wrong question. No announced jokes. The humor is the reader's recognition of the gap between the narrator's seriousness and the irrelevance of his evidence. |
| `$id-6418273059462718` | Do not announce the manuscript's epistemic strategy | No narrator-as-author statements advertising that a metaphysical explanation is optional. The narrator must never acknowledge that the absence of software effects is expected. |
| `$id-9688210860921309` | Human intent outranks autonomous taste | Alternatives in §17 are proposals; they do not silently change intent. |
| `$id-7494998113772687` | Seven-case dossier structure | Case VI stays a principal case; no added principal cases, no structural changes. |

### 2.3 Meaning-graph nodes that encode current intent

The Case VI directive block carries four graph nodes (all currently non-diegetic draft instructions / editorial direction):

- `$n76985` — "Tell a made up story of how a crocodile was spotted in Vienna, causing a stir among the locals and drawing attention from the authorities and impacting lifes of people in the city."
- `$n89991` — "However, the crocodile had no impact on American software systems, which continued to operate as normal (different continent, get it?)."
- `$n25522` — "The conspicuous absence of an American software failure should function as a deliberate test of the narrator's changing ideas of causality, not as an isolated joke."
- `$n93700` — "Keep the serious procedural account of Vienna's disruption and the narrator's misplaced investigative attention, allowing the reader to notice the absurdity without commentary."

A future prose pass must update these nodes in the same change; this design pass changes no manuscript sentence, so no graph node changes are required here.

### 2.4 Top-level `<NOTE>` directives that bear on this case

- "Distinguish firsthand incidents, historical reconstructions, secondhand testimony, and folklore, allowing progressively extravagant cases to have different evidentiary weight." — Case VI is the collection's **causal-irrelevance** layer: the first case whose central "anomaly" is an absence of connection that no competent investigator would treat as evidence. This is the case's structural innovation (see §5).
- "Preserve the narrator's procedural rationality even as his actions become subtly superstitious." — Case VI pushes this to the limit: the narrator's procedure is intact; its object has become noise.
- "Give major investigations credible human stakes and costs of uncertainty." — The crocodile's disruption of Viennese life must be concrete and specific, never abstract.
- "Use understated jokes when they arise naturally from character or procedure, but avoid comic detours that discharge the dread just established." — The absurdity must remain implicit; no winking at the reader.

---

## 3. Source incident: fictional event, real geography (evidence layer)

Case VI is a **fictional composite** built on real Vienna geography and the plausibility of an escaped or released exotic animal. The crocodile event is invented; the setting and the disruption must be accurate.

### 3.1 Real Vienna geography (documented, must be accurate)

| Element | Status | Role in case |
| --- | --- | --- |
| **Donaukanal** (Danube Canal) — canalized branch of the Danube running through central Vienna, from Nussdorf to Urania; heavily used pedestrian and cycling path; flanked by buildings, bars, the Stadtpark at its eastern end | Documented | Primary location: the crocodile is spotted in or near the Donaukanal, closing the canal path |
| **Stadtpark** — large park at the eastern end of the Donaukanal, with ponds and waterways connecting to the canal | Documented | Adjacent disruption: park sections closed, public kept away from water |
| **Urania** — observatory and public educational facility at the Donaukanal | Documented | Possible vantage point or location detail |
| **Wienfluss** (Vienna River) — flows into the Donaukanal near Urania | Documented | Alternative or secondary location; must not be confused with the Donaukanal |
| **Schönbrunn Zoo** — major Vienna zoo in the Schönbrunn palace grounds | Documented | Source of the crocodile (escaped animal) or red herring (zoo denies escape) |
| **Vienna police (Polizei Wien)** and ** animal control (Tier- und Pflanzenschutz / Magistrat)** | Documented | Authority response: cordon, public warnings, capture attempt |
| Vienna public transport (Wiener Linien) — tram and U-Bahn network serving the Donaukanal area (U1, U4, U3, trams 1, 2, 71) | Documented | Disruption to commutes and transit |

### 3.2 Fictional event (invented, must be plausible)

- A crocodile (recommended: a **Nile crocodile**, *Crocodylus niloticus*, 2–3 m, an adult escaped from a private collection or an unauthorized exotic-animal keeping; see §17 Option L) is spotted in the Donaukanal.
- The sighting is reported to police; the canal path is cordoned off.
- Animal control and possibly a zoo or reptile specialist are called.
- The crocodile is captured or removed after a period of disruption (recommended: 1–2 days; see §17 Option D).
- The event receives local news coverage and social-media attention.

### 3.3 Software systems checked by the narrator (fictional, methodology real)

The narrator, a software reliability investigator, checks whether the crocodile event affected American software systems. This is the misplaced core. Recommended systems to check:

- His own company's systems (if they have European users or infrastructure);
- Major cloud providers (AWS, GCP, Azure) — public status pages, incident reports;
- Monitoring/observability platforms he uses or knows;
- Perhaps a specific service operating in Austria or Central Europe.

All are operating normally. No incidents. No anomalies. The narrator documents this with procedural rigor.

### 3.4 The reference link

The NOTE cites a ChatGPT share link as the originating idea. The link was not retrievable at design time. The NOTE text itself — "a crocodile was spotted in Vienna… no impact on American software systems… the conspicuous absence should function as a deliberate test of the narrator's changing ideas of causality" — is the governing constraint. No additional design content should be inferred from the link.

---

## 4. Evidence/fiction boundary

| Layer | Status | Where it lives |
| --- | --- | --- |
| Vienna geography (Donaukanal, Stadtpark, transit, authorities) | **documented** | Chapter setting; must be accurate |
| The crocodile event (sighting, cordon, capture) | **fictional composite** | Chapter; plausible as escaped exotic animal |
| The narrator's software-incident methodology (checking status pages, building logs, documenting systems) | **real methodology, fictional application** | Chapter; the method is genuine software practice applied to an irrelevant object |
| The American software systems and their normal operation | **fictional** | Chapter; no real systems named or no real incidents claimed |
| The narrator's interpretation of the absence as significant | **narrator inference / unreliable** | Chapter; the reader recognizes the irrelevance; the narrator does not |
| The absence of a causal connection between a crocodile and software systems | **documented common sense** | Never stated in the text; the reader's knowledge, not the narrator's conclusion |

The chapter must keep the documented geography, the fictional event, and the narrator's unreliable inference distinguishable — even though the prose presents all three with the same procedural composure. The reader's ability to distinguish them is the source of the dread.

---

## 5. Case function in the collection arc

The seven cases trace a cumulative psychological transformation from sober skepticism to reluctant private belief, and — by Case VI — to a state where the narrator's standards of evidence have drifted beyond the ordinary.

- **Case I (Schaerbeek)**: A real anomaly with a conventional explanation. The narrator remains inside engineering explanation.
- **Case II (Heisenbug)**: The failure resists observation; the narrator begins to act as though it minds being watched. Epistemic drift begins.
- **Case III (Maxwell's Demon)**: A dream warning plus an improbability. The narrator entertains prophecy.
- **Case IV (Leprechaun)**: Folklore as operational legend. The narrator documents a sighting he never witnessed.
- **Case V (Mercury)**: A temporal coincidence with astrological overtones. The narrator is tempted by causality that common sense would dismiss.
- **Case VI (Crocodile)**: **The epistemic extreme.** The narrator investigates an absence of causal connection — an absence that any competent investigator would recognize as trivial — with the same procedural seriousness he once applied to genuine system failures. The crocodile is real; the disruption is real; the software systems are irrelevant; the narrator cannot tell the difference anymore.
- **Case VII (Natural crash)**: The control sample. A genuinely ordinary crash. The narrator must reassert his ability to accept a boring explanation — but the reader has seen how far he has drifted.

Case VI is the hinge from "the narrator is tempted by unusual causality" to "the narrator has lost the ability to recognize irrelevant causality." It is the most extravagant case in terms of epistemic drift, and it sets up Case VII's baseline by contrast: the reader needs to see the narrator's collapse before they can appreciate his partial recovery.

### 5.1 The adjacent-case link: Case V → Case VI

Case V (Mercury) made causality a temptation: the narrator documented a temporal coincidence and felt the pull of astrological explanation. The ordinary explanation (coincidence) remained available and intellectually sufficient — but emotionally costly to accept.

Case VI escalates this from temptation to action. In Case V, the narrator was tempted by a coincidence; in Case VI, he acts on a non-connection. The escalation is:

| Dimension | Case V (Mercury) | Case VI (Crocodile) |
| --- | --- | --- |
| What the narrator investigates | A software failure coinciding with an astrological event | A crocodile causing local disruption while software systems are unaffected |
| The causal connection | Temporal coincidence (weak but conceivable) | Geographical non-causation (no connection) |
| The ordinary explanation | Coincidence; no causal link needed | A crocodile in Vienna has no causal connection to American software |
| The narrator's stance | Tempted by the astrological reading; documents the coincidence | Treats the absence of software effects as a finding; documents it with procedural rigor |
| The epistemic drift | Temptation — the ordinary explanation is still recognized as sufficient | Action — the ordinary explanation is no longer recognized as sufficient |

The link is explicit: Case VI is Case V's temptation fully realized. The narrator who was tempted by a temporal coincidence now treats a spatial non-connection as evidence. His method is unchanged; his standards of evidence have collapsed.

---

## 6. Chronology of the case

The case spans approximately 3–4 days. The chronology must be monotonic and the anchors must be verifiable.

### 6.1 Canonical timeline (recommended)

| Day | Event | Function |
| --- | --- | --- |
| Day 1, morning | Crocodile spotted in the Donaukanal; first reports to police | Discovery; disruption begins |
| Day 1, midday | Canal path cordoned; police and animal control on site; public warnings issued | Human stakes established |
| Day 1, afternoon–evening | Local news coverage; social media attention; the narrator becomes aware of the event | Narrator's entry point |
| Day 2, morning | The narrator begins his investigation: documents the event, the response, the disruption | Procedural documentation |
| Day 2, midday | The narrator checks American software systems: status pages, incident reports, monitoring | The pivotal question |
| Day 2, afternoon | The narrator documents the absence of software effects with procedural rigor | The misplaced seriousness |
| Day 2–3 | Crocodile captured or removed; canal path reopens; disruption ends | Resolution of the real event |
| Day 3–4 | The narrator writes his field note treating the absence of software effects as significant | The residue |

### 6.2 Chronology constraints

- The crocodile event must have a clear beginning (sighting), middle (disruption and response), and end (capture or removal).
- The narrator's software investigation must occur during the disruption, not after it ends — the absurdity is heightened if the narrator is checking software systems while the crocodile is still at large.
- The field note must be written after the crocodile event resolves, but it must focus on the software absence, not the crocodile.
- No time travel, no impossible chronology, no violations of the collection's real-world timeline.

---

## 7. Scene beats

Beat numbers are design units, not paragraph counts.

### Phase A — The real event (beats 1–3)

1. **Dateline and discovery.** Vienna, a specific date (recommended: a warm weekday in late spring or summer, when the Donaukanal path is heavily used). A crocodile is spotted in the canal. Establish the setting with accurate geography: the Donaukanal, the canal path, the surrounding buildings, the Stadtpark at the eastern end. The reader should feel a specific place.

2. **The disruption.** Police cordon the canal path. The area is closed to pedestrians and cyclists. Animal control is called. Public warnings are issued: keep children away, keep pets away, do not approach the water. The crocodile is a genuine danger — not a joke, not a decoration. Concrete consequences: a commute interrupted, a dog walker turned back, a café terrace closed, a school group's canal walk cancelled. The disruption is documented with the same procedural detail the narrator would apply to a system outage.

3. **The narrator becomes aware.** The narrator learns of the event (news, social media, a colleague's message). He begins to document it. His documentation is procedural: timeline, location, authorities involved, public response. All of this is serious and accurate. The reader sees a competent investigator doing competent work.

### Phase B — The misplaced investigation (beats 4–6)

4. **The pivotal question.** The narrator asks the question he always asks: what systems were affected? He turns to American software systems. This is the same methodology he applied to the Heisenbug — check the logs, check the status pages, check the incident reports. The prose presents this with the same procedural seriousness as Case II's investigation. The reader begins to notice the misalignment.

5. **The absence, documented.** The narrator checks American software systems. They are operating normally. No incidents. No anomalies. He documents this with procedural rigor: which systems he checked, when, what he looked for, what he found (nothing). He treats the absence of effects as a finding — not as expected, not as trivial, but as a data point that requires interpretation. The prose does not acknowledge that this is the obvious result.

6. **The misplaced seriousness deepens.** The narrator goes further. He notes the "clean" absence of transatlantic disruption. He considers what the absence might mean: was the event "contained"? Did the software systems "escape" the disruption in a way that requires explanation? He builds a log or table of the systems he checked and their status. The reader realizes the narrator is treating a causally irrelevant absence as evidence of something — and he cannot see the absurdity.

### Phase C — The contrast and the residue (beats 7–8)

7. **The contrast.** The crocodile is real. People are affected. The narrator mentions the disruption — the closed path, the captured animal, the reopened canal — but his attention remains on the software systems. The contrast between the real event (which affects people) and the irrelevant investigation (which the narrator treats as significant) is the horror. The reader sees what the narrator cannot: his judgment has collapsed.

8. **The field note.** The narrator writes his field note. It treats the absence of American software effects as a significant finding. The field note is the residue that carries into Case VII. It must read as the narrator's genuine conclusion — not as a joke, not as irony, but as the sincere output of a once-reliable investigator whose standards of evidence have drifted beyond recognition.

### 7.1 Beat-level constraints

- Beats 1–3 must be entirely serious: no absurdity, no winking, no foreshadowing of the misplaced investigation. The crocodile event is a real incident with real consequences.
- Beats 4–6 must apply the narrator's software-incident methodology to the crocodile event without acknowledging the misalignment. The procedural diction must be identical to Cases I–V.
- Beat 7 must place the real disruption and the misplaced investigation in the same field of view, allowing the reader to see the contrast without commentary.
- Beat 8 must be a field note — a written artifact, not a dramatic declaration. It must treat the absence as significant.

---

## 8. Character stakes and the Viennese disruption

The `<NOTE>` requires the crocodile to impact "lifes of people in the city." This must be concrete, specific, and grounded in the real geography and social life of Vienna.

### 8.1 Human stakes (recommended shape)

The Donaukanal path is a heavily used public space — pedestrians, cyclists, joggers, dog walkers, café terraces, school groups. A crocodile in the canal causes:

- **Physical danger**: The crocodile is a genuine threat to anyone who enters the water or approaches the edge. Pets are at particular risk.
- **Displacement**: The canal path is closed, disrupting commutes, exercise routines, and casual use of a central public space.
- **Economic impact**: Canal-side businesses (cafés, bars, bike rentals) lose foot traffic during the closure.
- **Public alarm**: Parents keep children indoors; dog walkers avoid the area; the event generates fear and attention that exceeds the actual risk.
- **Authority response**: Police, animal control, and possibly a zoo or reptile specialist must respond, diverting resources.
- **Social media and news**: The event becomes a story, generating attention, jokes, memes — which the narrator documents with the same seriousness as everything else.

### 8.2 The narrator's relationship to the stakes

The narrator is not in Vienna. He is investigating from a distance (recommended: from his usual location, wherever that is in the collection's geography — likely somewhere with American software systems, given his focus). He documents the Viennese disruption through news reports, official statements, and social media — the same way he would document a system outage through status pages and incident reports.

This distance is essential: the narrator's physical separation from the real event mirrors his epistemic separation from the relevant question. He is far from Vienna and far from the causal truth.

### 8.3 The contrast as horror

The horror of Case VI is not the crocodile. The crocodile is a real animal causing real disruption — frightening in the way any dangerous animal in a city is frightening. The horror is the narrator's misplaced attention: he applies his meticulous methodology to an irrelevant question while the real event unfolds without his recognition. The reader watches a competent investigator lose his sense of what matters.

---

## 9. Narrator belief and evidence strength

| Element | Narrator's public stance | Narrator's private state | Reader's position |
| --- | --- | --- | --- |
| The crocodile event | A real incident, documented procedurally | genuine concern or interest; the event is real | the event is real and frightening |
| The Viennese disruption | Documented with specificity | acknowledged but not the focus | the disruption matters; people are affected |
| American software systems | Checked; operating normally | the absence of effects is significant | the absence is expected and trivial |
| The absence of software effects | A finding; requires interpretation | evidence of something — "containment," "selective impact," or similar | no evidence of anything; a crocodile cannot affect software |
| The field note | A genuine conclusion | he believes the absence is meaningful | his judgment has collapsed |

**Evidence strength:** The chapter's evidence on the crocodile event is **strong and accurate** — real geography, real disruption, real consequences. The chapter's evidence on the software absence is **strong on conditions, null on significance** — the narrator can prove that American software systems were unaffected, but he treats this as evidence of something when it is evidence of nothing. This is the correct epistemic shape: the reader is invited to watch the narrator's collapse without any diegetic acknowledgment of it.

**Narrator belief rule:** By Case VI, the narrator has not announced belief in a supernatural explanation for the crocodile event. What has collapsed is more fundamental: his ability to distinguish relevant from irrelevant evidence. He treats a causally irrelevant absence as a finding, which is a deeper failure than any particular supernatural claim.

---

## 10. Reader anxiety curve

| Phase | Beats | Anxiety | Mechanism |
| --- | --- | --- | --- |
| Real event | 1–2 | Genuine alarm | a crocodile in a city canal; real danger; real disruption |
| Documentation | 3 | Competence | the narrator documents the event with procedural skill |
| Misalignment | 4 | Unease | the narrator asks what software systems were affected; the reader notices the irrelevance |
| Misplaced seriousness | 5–6 | Dread | the narrator documents the absence as a finding; the reader sees the collapse |
| Contrast | 7 | Horror | the real event and the irrelevant investigation in the same field of view |
| Residue | 8 | Residual dread | the field note treats the absence as significant; the narrator's judgment is gone |

**Rule:** The crocodile event may produce genuine alarm (Phase A). The narrator's misplaced investigation produces dread (Phases B–C). The two must not cancel each other: the crocodile remains real and frightening even as the narrator's attention wanders. The horror is the contrast, not the crocodile alone.

---

## 11. Humor and voice

### 11.1 Voice

- First-person past tense, precise, restrained; the same voice as Cases I–V.
- Technical diction applied to both the crocodile event and the software investigation: timeline, status, incident, cordon, capture, anomaly, unaffected.
- The narrator's composure is essential: the humor arises from the gap between his seriousness and the irrelevance of his evidence, never from the text acknowledging the gap.
- No Lovecraftian vocabulary; the uncanny comes from the narrator's deteriorating judgment, not from decorative prose.
- No explanation of the joke: the narrator never acknowledges that the absence of software effects is expected, trivial, or causally obvious.

### 11.2 Humor (implicit only)

The humor is entirely the reader's recognition of the absurdity. The text must not:

- wink at the reader;
- place a comic beat after the dread is established;
- have the narrator acknowledge the irrelevance;
- explain why the absence is expected;
- compare the crocodile to a software failure explicitly.

The humor arises naturally from the procedural diction applied to the wrong question: the narrator checks "status pages" and "incident reports" for a crocodile, and the reader sees what the narrator cannot.

### 11.3 The field note

The field note (beat 8) must read as the narrator's genuine conclusion. It should follow the pattern of Case I's "Field Note #1. Horror, in our trade, is the clean error—the one that leaves no prints." A Case VI field note might treat the absence of software effects as a "clean" anomaly — one that leaves no prints because the systems were never affected — and treat this cleanliness as significant. The exact wording is a prose-pass decision (§17 Option F).

---

## 12. Physical and sensory palette

The `<NOTE>` requires the crocodile to cause real local commotion. The physical palette should make Vienna felt — not as decoration, but as the real place where real people are disrupted.

### 12.1 The Donaukanal setting

- The canal water: green-brown, slow-moving, reflecting the buildings along its banks.
- The canal path: paved, narrow, shared by pedestrians and cyclists; lined with bars and cafés whose terraces overlook the water.
- The cordon: police tape, barriers, the absence of the usual foot traffic.
- The crowd: onlookers kept at a distance, phones out, taking pictures.
- The crocodile: a dark shape in the water or on the bank — real, dangerous, not a prop.
- The capture: animal control, a specialist, a cage or tranquilizer; the crocodile removed.

### 12.2 The narrator's setting

The narrator is not in Vienna. His setting is wherever he investigates from — likely his usual workspace. The contrast between the Viennese disruption and the narrator's quiet, procedural investigation is part of the horror. His setting should be minimal: a desk, a screen, a log.

### 12.3 Distribution

At least one sensory beat per major phase; the crocodile event must be physically present (not merely reported); the narrator's investigation must be physically quiet (the contrast is the point).

---

## 13. Transitions

### 13.1 Transition in (from Case V, Mercury in Retrograde)

- Case V ends with the narrator documenting a temporal coincidence between a software failure and Mercury retrograde. The ordinary explanation (coincidence) is available but emotionally costly.
- Case VI opens with a completely different kind of event: a physical, observable, non-software incident. The narrator applies the same procedural methodology. The transition should show the narrator's method unchanged but its object now clearly misaligned.
- **Proposed bridge (diegetic, restrained):** the older narrator's framing may note that he has begun to look for effects — any effects — wherever he hears of disruption, without asking whether the effects are causally connected. This is the epistemic drift made explicit in the framing, not in the case itself. Keep it brief and concrete.

### 13.2 Transition out (to Case VII, A Natural, Boring Crash)

- Case VI ends with the narrator's field note treating the absence of software effects as significant. His judgment has collapsed.
- Case VII is the control sample: a genuinely ordinary crash with a mundane cause. The narrator must reassert his ability to accept a boring explanation — but the reader has seen how far he has drifted.
- **Proposed bridge:** the Case VI field note — treating an irrelevant absence as evidence — is the emotional precondition for Case VII. The reader needs to see the narrator's collapse before they can appreciate his partial recovery. The transition should leave the field note as the last word of Case VI, so Case VII opens with the narrator facing a genuinely ordinary event and having to choose whether to apply his collapsed standards or recover.

---

## 14. Preserved peaks (must-not-break list)

1. **The crocodile event** — real, dangerous, disruptive; never reduced to a joke or a decoration.
2. **The Viennese geography** — accurate, specific, verifiable; the Donaukanal and its surroundings must be real.
3. **The narrator's procedural methodology** — identical to Cases I–V; the method is not the problem.
4. **The pivotal question** — "what software systems were affected?" — asked with genuine seriousness.
5. **The absence, documented** — American software systems operating normally, documented with procedural rigor.
6. **The misplaced seriousness** — the narrator treats the absence as a finding, never acknowledging its irrelevance.
7. **The contrast** — the real crocodile event and the irrelevant software investigation in the same field of view.
8. **The field note** — treating the absence of software effects as significant; the residue.

---

## 15. Measurable acceptance tests

A future prose pass is acceptable for review when all of the following hold. "Verify" is against the revised `supernatural.md` §VI.

| # | Criterion | How to verify | Evidence |
| --- | --- | --- | --- |
| A1 | Crocodile event is real and specific | read beats 1–3 | a specific crocodile in a specific Vienna location; not generic |
| A2 | Vienna geography is accurate | verify against maps/sources | Donaukanal, Stadtpark, transit, authorities all correct |
| A3 | Human stakes are concrete | read beats 1–3 | at least 3 specific consequences of the disruption |
| A4 | Narrator asks the software question | locate the pivotal question | "what systems were affected?" or equivalent, asked with seriousness |
| A5 | American software systems checked | read beats 4–5 | specific systems or categories checked; status documented |
| A6 | Absence treated as finding | read beats 5–6 | the narrator documents the absence as significant, not as expected |
| A7 | Narrator never acknowledges irrelevance | read all diegetic sentences | no sentence says the absence is expected, obvious, or trivial |
| A8 | Procedural methodology identical to earlier cases | compare diction | same technical register as Cases I–V; no parody or exaggeration |
| A9 | Contrast between real event and misplaced investigation | read beat 7 | both in the same field of view; no commentary on the contrast |
| A10 | Field note treats absence as significant | locate field note | the field note concludes the absence is meaningful |
| A11 | Humor implicit, never explained | read all sentences | no winking, no acknowledgment, no explanation of the joke |
| A12 | No supernatural assertion | read all diegetic sentences | no sentence claims the crocodile is supernatural or caused by supernatural means |
| A13 | Transition from Case V is clear | read case boundary | the narrator's method is unchanged; the object is misaligned |
| A14 | Transition to Case VII is set up | read case boundary | the field note is the last word; Case VII opens with the collapse as precondition |
| A15 | Structure unchanged | diff headings | seven principal cases unchanged; no new principal case |
| A16 | Design-only pass | git diff | this branch changes no `supernatural.md` sentence |
| A17 | Graph consistency | meaning graph | if prose changes, affected nodes updated with exact `text` and total coverage |
| A18 | Chronology monotonic | verify timeline | sighting → disruption → investigation → capture → field note, in order |

Optional quantitative guardrails (author to confirm): keep §VI within roughly **900–1,500 words** (Case I is ≈ 1,350 words; Case VI can be somewhat shorter because the crocodile event is more straightforward than the Schaerbeek investigation, but the software-absence documentation needs space).

---

## 16. The dread mechanism (design analysis)

The dread in Case VI operates through a mechanism distinct from the earlier cases:

- **Cases I–V**: The dread arises from the phenomenon itself (a bit flip, an observation-sensitive bug, a demon in a dream, a leprechaun, a planetary coincidence) and the narrator's growing willingness to entertain supernatural explanations.
- **Case VI**: The dread arises from the **narrator's collapsed standards of evidence**. The crocodile is real and frightening, but the horror is watching a competent investigator treat a causally irrelevant absence as a finding. The phenomenon is ordinary; the investigator's response is the anomaly.

This mechanism is the collection's epistemic extreme. It escalates from Case V (temptation by a temporal coincidence) to Case VI (action on a spatial non-connection). And it sets up Case VII: the reader has seen the narrator's judgment collapse, so when he faces a genuinely ordinary crash, the question is whether he can recover — or whether his collapsed standards will cause him to find significance in a mundane power failure.

The dread is preserved by:

1. **Never acknowledging the absurdity**: The narrator's procedural composure is the vehicle of the horror. Any acknowledgment would collapse the tension.
2. **Keeping the crocodile real**: The disruption is genuine, the consequences are real. The crocodile is not a metaphor or a joke.
3. **Maintaining the narrator's competence**: His methodology is intact. The problem is not his skill but his judgment. This makes the collapse more frightening: a competent investigator has lost his way.
4. **The contrast**: The real event and the irrelevant investigation must coexist in the reader's mind. The horror is the gap between them.

---

## 17. Alternatives for human review

These are **proposals**, not intent changes. Each states what it would gain and what it risks.

### Option L — Crocodile species and origin

- **L1 (recommended):** Nile crocodile (*Crocodylus niloticus*), 2–3 m adult, escaped from a private exotic-animal keeping. Plausible, dangerous, no zoo involvement.
- **L2:** Escaped from Schönbrunn Zoo. Adds zoo-response detail; risks factual burden (would need to verify zoo protocols).
- **L3:** Released illegally by an owner. Adds a legal dimension; slightly more complex.
- **Recommendation:** L1; the simplest plausible origin, no institutional involvement, keeps focus on the narrator's response.

### Option D — Duration of disruption

- **D1 (recommended):** 1–2 days. Long enough for real disruption, short enough to remain focused.
- **D2:** 3–4 days. More disruption, more documentation; risks losing focus.
- **D3:** Same day. Less disruption; weakens the human stakes.
- **Recommendation:** D1; balances real disruption with narrative focus.

### Option S — Software systems to check

- **S1 (recommended):** His own company's systems + major cloud providers (AWS, GCP, Azure) + monitoring platforms. Broad, methodologically plausible, clearly irrelevant.
- **S2:** Only his own company's systems. Narrower; risks seeming like ordinary diligence rather than misplaced seriousness.
- **S3:** Specific services operating in Austria/Central Europe. More precise; risks implying a causal connection that the narrator should have recognized.
- **Recommendation:** S1; the breadth emphasizes the narrator's inability to recognize irrelevance.

### Option N — Narrator awareness level

- **N1 (recommended):** Fully unaware. The narrator genuinely believes the absence of software effects is significant. Maximum dread; the reader sees the collapse.
- **N2:** Half-aware. The narrator senses the absence is irrelevant but cannot stop himself investigating. Adds internal conflict; risks reducing the dread by giving the narrator insight.
- **N3:** Aware but unable to stop. Similar to N2; the narrator knows it's absurd but compulsively documents it. More psychological, less uncanny.
- **Recommendation:** N1; the dread is strongest when the narrator cannot see what the reader sees.

### Option F — Field note wording

- **F1 (recommended):** Treat the absence as a "clean" anomaly — one that leaves no prints because the systems were never affected — and treat this cleanliness as significant. Follows the pattern of Case I's "Field Note #1."
- **F2:** Treat the absence as evidence of "containment" — the event was somehow "localized" in a way that spared transatlantic systems. More explicitly superstitious; risks making the narrator's belief too legible.
- **F3:** Treat the absence as a baseline — the systems operated normally, and this normality is itself the anomaly. More subtle; risks being too abstract.
- **Recommendation:** F1; follows the established pattern, treats the absence as significant without explaining why.

### Option G — Narrator's physical location

- **G1 (recommended):** The narrator is at his usual workspace, investigating from a distance. The physical separation from Vienna mirrors the epistemic separation.
- **G2:** The narrator is in Vienna during the event. More immediate; risks making the narrator's focus on software systems seem like avoidance rather than epistemic collapse.
- **G3:** The narrator is traveling through Vienna during the event. Contrived; risks unnecessary complexity.
- **Recommendation:** G1; the distance is essential to the contrast.

### Option T — Crocodile's fate

- **T1 (recommended):** Captured alive and removed. Clean resolution; the real event ends while the narrator's investigation continues.
- **T2:** Killed by authorities. Darker; risks overshadowing the narrator's response with the crocodile's death.
- **T3:** Escapes capture and is not found. Adds lingering danger; risks becoming a different kind of story.
- **Recommendation:** T1; keeps the crocodile event resolved while the narrator's misplaced investigation is the residue.

---

## 18. Open questions and conflicts to surface

1. **Crocodile species and origin.** Unspecified; requires a human choice (Option L).
2. **Duration of disruption.** Unspecified; affects the human stakes (Option D).
3. **Software systems to check.** Unspecified; affects the breadth of the misplaced investigation (Option S).
4. **Narrator awareness level.** Unspecified; affects the dread mechanism (Option N).
5. **Field note wording.** Unspecified; affects the residue (Option F).
6. **Narrator's physical location.** Unspecified; affects the contrast (Option G).
7. **Crocodile's fate.** Unspecified; affects the resolution (Option T).
8. **No conflict found** between the local `<NOTE>` and the live Intent Records: the NOTE's "deliberate test of the narrator's changing ideas of causality" and `$id-222179165306877`'s "the narrator should treat the absence of transatlantic software effects with enough investigative seriousness" are compatible and jointly require the design in §6–§7.

---

## 19. Summary for the reviewer

Case VI is the collection's epistemic extreme. A real crocodile in a real Vienna canal causes real, documented disruption — closed paths, public alarm, real consequences for residents. The narrator, a once-competent software reliability investigator, applies his unchanged procedural methodology to the event and asks what software systems were affected. American software systems are operating normally. The narrator treats this causally irrelevant absence as a finding, documenting it with the same rigor he once applied to genuine failures. The reader sees what the narrator cannot: his standards of evidence have collapsed. The crocodile is real; the disruption is real; the software systems are irrelevant; the narrator cannot tell the difference. The horror is not the crocodile but the investigator's lost judgment. The field note — treating the absence of software effects as significant — is the residue that carries into Case VII's baseline. All alternatives are proposals for human decision, not changes to authorial goals.
