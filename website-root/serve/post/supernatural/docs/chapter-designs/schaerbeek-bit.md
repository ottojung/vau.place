# Chapter design: I. The Schaerbeek Bit

**Status:** Design only. No manuscript prose is changed by this document or the branch that carries it.
**Issue:** #225 — "[Supernatural] Case I: Schaerbeek Bit — design and goals".
**Branch:** `docs/schaerbeek-bit-design` (from `master`; never merged by the orchestrator).
**Manuscript:** `../supernatural.md` (Case I occupies the header at line 64 through the Mark II moth coda ending at line 225).
**Companion analysis:** `../docs/meaning-graph.md` (Case I nodes `$n23032`–`$n10406`).

This document is a reviewable blueprint. It records the live constraints, the verified historical substrate, a beat plan, and — where the author's notes ask for tightening — concrete alternatives with trade-offs. It does not rewrite the chapter, and it does not ask for authorial goals to be changed. Every proposal below is an alternative for human review, not a decision already taken.

---

## 1. Live constraints this design must satisfy

These are quoted or closely paraphrased from the manuscript's Case I `<NOTE>` blocks (supernatural.md lines 68–87) and the live Intent Records. They are the review criteria.

**From the Case I directive NOTE (lines 68–74):**

- The meeting belongs to an earlier period in the narrator's life. He has not yet become the investigator who keeps this dossier, and he does not believe in supernatural explanations. He is here for ordinary work and expects ordinary technical information.
- The newspaper items are fictional. **The escaped neutron must never be connected in the prose to the 2003 bit flip. The implication that it somehow travelled backward in time is strictly for the reader.**
- The worldview mismatch between the narrator and the technician should remain implicit. Show it through what each treats as evidence, useful information, or a reasonable explanation; do not explain the contrast as a theme.

**From the Case I editorial NOTE (lines 76–87):**

- Keep the opening café's spatial and procedural observations because they reveal the younger narrator's habits of thought without supplying biography.
- Tighten the long chain of preliminaries so that the biscuit exchange leads organically into the election story and the technician's peculiar perspective accumulates rather than resets.
- Preserve the subtle contrast between the narrator's useful facts and the technician's stories; neither character should become a mouthpiece for the collection's philosophy.
- Keep the escaped-neutron newspaper item an unspoken clue for the reader alone, but establish enough credible chronology and recurrence of imagery for the impossible temporal suggestion to be discoverable.
- Check that the fictional CERN report sounds plausible as journalism, especially the unusual claim that a single neutron escaped an enclosure.
- Treat the real election's multiday investigation carefully when compressing events into a firsthand reconstruction; the May 2003 chronology and the extent of the technician's knowledge must remain believable.
- Intensify the emotional stakes of an untraceable alteration to an election result through the clerks' fear of responsibility, loss of trust in the count, and uncertainty over what corrective action is possible.
- Let physical and bureaucratic details make the contradictory totals threatening instead of leaning on poetic descriptions of a bit flip or personifying the numerical anomaly.
- Preserve the younger narrator's skepticism and the later narrator's retrospectively unsettled memory while avoiding an explicit claim that a particle or a supernatural force caused the anomaly.
- **Do not restore the removed conversation-quality billing digression; its separate joke interrupts the accumulated unease after the election account.**

**From the Intent Records (docs/intent-records/story.md):**

- `$id-3795396000378572` — Schaerbeek is the least insane principal case; it begins from a real, documented anomaly with a conventional technical explanation and must remain credible to an ordinary skeptical reader. The case must not require a supernatural event to make sense.
- `$id-0861352612251497` / `$id-9264982270043622` — the narrator presents with the habits and vocabulary of a skeptic; the mature narrator privately leans supernatural, but the young narrator in this case does not.
- `$id-5364595046057851` — the collection must produce real fear, anxious uneasiness, and dread, including apprehension that the unexplained incidents could have harmful consequences; believable human stakes and escalating behavioral or emotional consequences.
- `$id-0964292624358295` — horror and humor emerge from meticulous procedural seriousness; never announce jokes or explain absurdity after the reader can see it.

**From AGENTS.md:** smallest revision that solves the diagnosed problem; preserve successful oddities; continuity, chronology, impossible character knowledge, and misrepresentation of sourced real-world events are hard defects; keep documented fact, plausible interpretation, fictional embellishment, and narrator speculation distinguishable.

---

## 2. Verified historical substrate (real 2003 incident)

Verified against the sources already cited in the manuscript's endnotes (supernatural.md lines 401–405) and independent references gathered during this design pass. This is the documented floor the reconstruction must not fall below.

| Fact | Status | Source |
| --- | --- | --- |
| Belgian federal election held **18 May 2003** (Chamber of Representatives and Senate). | Documented | Endnote 3; IPU archive |
| Municipality of **Schaerbeek** (Brussels) used electronic voting; Brussels municipalities all used e-voting. | Documented | Endnote 3–4 |
| Candidate **Maria Vindevoghel** (MARIA party) recorded **4,610 preferential votes where ~514 were expected — exactly 4,096 extra**. | Documented | Endnote 2; SEU literature |
| 4,096 = 2^12; a single bit at position 13 flipped from 0 to 1. | Documented arithmetic | Endnote 2 |
| The anomaly was detected because the candidate had **more preferential votes than her own list total**, which is impossible under the Belgian system (preferential votes ≤ list total). | Documented | Endnote 3 |
| Official experts' report (*Rapport concernant les élections du 18 mai 2003*, Collège d'experts) concluded the result could **"very probably"** be attributed to a **spontaneous and random inversion of a binary position in the computer's working memory**; the physical cause was left open. | Documented | Endnote 2 |
| The parliamentary committee's report is "less romantic" but permits the word **"likely"**. | Documented | Endnote 2–4 |
| A **single-event upset (SEU)** — an energetic particle depositing charge in a memory cell — is the leading technical explanation (Bhuva, AAAS 2017; subsequent literature). | Documented technical explanation | SEU literature; endnote 4 |
| Belgian 2003 e-voting (Jites / Digivote systems) was **indirect-recording**: the machine marks a cardboard magnetic-stripe ballot card; cards are read by the ballot box; cards can be re-counted by machine in case of controversy. No voter-verified paper trail in that canton. | Documented | Endnote 3; e-voting overviews |
| The investigation ran over **multiple days** after election night (experts' report, then committee report). | Documented | Endnote 2 |

**Fictional (invented) material in the case:** the cafeteria frame and the technician character; the biscuit exchange; the "spontaneous adjustment" tram joke; the newspaper items (waffle competition and the CERN neutron escape); the schoolteacher "identifying birds" and the woman with the adding tape; the physicist "pressed into service because she happened to live nearby"; the clerk's later admission; the compression of the multiday investigation into one firsthand evening plus summary.

**Not established anywhere (must not be invented):** that a specific particle caused the flip; that the CERN neutron escape is real or related to the election; any mechanism by which a neutron could travel backward in time. The backward-time implication exists only as a reader-side pattern, per the directive NOTE.

---

## 3. Source/fiction boundary map

The drafting process must know which category every sentence belongs to, even though the prose may blur how the categories *feel* (AGENTS.md; `$id-70250`).

| Category | Instances in Case I | Handling |
| --- | --- | --- |
| Documented fact | 18 May 2003 election; Schaerbeek; 4,096 = 2^12; preferential votes > list total is impossible; "very probably" bit inversion; SEU as leading explanation; Jites/Digivote magnetic-card architecture | May be stated plainly; chronology is a hard constraint. |
| Plausible technical explanation | Single-event upset; charge deposition in a memory cell; absence of a trace after the fact | Presented as what the investigation concluded, not as narrator certainty. |
| Fictional reconstruction | The technician's firsthand account of the room, the checklist, the clerks, the dry air, the physicist, the ledger of blame | Must stay inside what a technician present that night could know and report (§7). |
| Narrator inference | "He meant, I think…"; "At the time I heard an engineer's argument about preparation, nothing more." | Marked as inference; the young narrator draws no supernatural conclusion. |
| Supernatural implication | The escaped-neutron clue and its backward-time echo; the "clean error" field note; the moth as named proof | Never asserted by any character; assembled only by the reader; never explained. |

---

## 4. Case architecture

The case keeps the manuscript's four-move frame (confirmed by the meaning-graph continuity fields: "café meeting → reconstructed 2003 investigation → return to café → years-later dossier note"):

1. **Café frame, present of the meeting** (young narrator, pre-dossier). Spatial/procedural habits; the fictional newspaper (waffle competition; CERN neutron item); the technician's arrival and tram joke; the names-with-commentary beat; the biscuit exchange. *Anxiety target: unease by contrast — everything is legible except the two moments the narrator cannot file.*
2. **The technician's 2003 account, compressed.** Firsthand: the school, the checklist, the invariant violation, the missing check, the word *error*, the ledger, 4,096 = 2^12. Summarized as report/reconstruction: the physicist, the SEU hypothesis, the absent cause, the experts' "very probably," the committee's "likely." *Anxiety target: dread of the clean error — a contradiction that survives every check and leaves no cause to find.*
3. **Return to the cafeteria.** Coffee cold; the technician's "world intends this sort of interruption" gloss; the narrator's contemporaneous reading ("an engineer's argument about preparation, nothing more"); the cathedral-of-checks close. *Anxiety target: the gap between what the narrator said then and what the reader now suspects he felt.*
4. **Years-later dossier note and moth coda.** "I did not write a field note that afternoon." Field Note #1 ("the clean error — the one that leaves no prints"); the Mark II moth as the counterexample of a failure that *left* a body. *Anxiety target: retroactive — the reader re-reads the café meeting knowing what the narrator did not yet know.*

---

## 5. Beat plan

Node IDs refer to the current meaning-graph sentences; "purpose" names the work the beat does under the live constraints. Beats marked ◎ are where the NOTE's tightening asks for alternatives (§9–§11).

**Move 1 — Café frame.**

| # | Beat (current location) | Purpose | Evidence status | Narrator belief (young) |
| --- | --- | --- | --- | --- |
| 1.1 | Cafeteria, tram line, waiting man ($n52144, $n59635, $n10445, $n63211, $n87792) | Younger narrator's procedural habits; no biography | Frame fact | Skeptic; expects ordinary technical information |
| 1.2 | Queue, menu digits, mapping confirmed ($n60495, $n14149) | Legibility of ordinary systems | Frame fact | Skeptic |
| 1.3 | Colleague's referral: names that map to people who fix things ($n61361, $n68128) | Establishes "useful facts" as the narrator's currency | Frame fact | Skeptic |
| 1.4 | Newspaper: waffle competition ($n14695, $n43717, $n51879) | Fictional item; normalizes the paper before the clue | Fictional | Unregistering |
| 1.5 | ◎ Newspaper: CERN neutron escape "that morning"; "escaped" three times ($n54948, $n10179, $n18462, $n82725) | The reader-only clue; must read as plausible journalism | Fictional (§8) | Files it away; folds the paper back ($n23591) |
| 1.6 | Technician arrives; tram "spontaneous adjustment" → "Not spontaneous. Sorry." ($n88413–$n49472) | First worldview tell: he self-corrects toward the procedural | Frame fact | Skeptic; amused |
| 1.7 | Confirmations; elections — "not politics, interfaces"; straightening, table-tapping ($n98371, $n96957, $n31451, $n73973) | Characterizes the technician's liveness-checking habit | Frame fact | Skeptic |
| 1.8 | Names with commentary; "I write down the useful parts and leave some of the commentary out" ($n39292–$n55258) | Contrast mechanism: narrator filters, technician layers | Frame fact | Skeptic |
| 1.9 | ◎ Biscuit exchange: national character of fracture; Belgian biscuit "reconsiders" ($n39196–$n19500) | Comic set-piece that must *lead into* the election story, not reset before it | Frame fact | Skeptic: "That seems ridiculous." ($n84584) |
| 1.10 | ◎ Transition: "I say nothing about the biscuit and ask how he came to work on elections." ($n46925–$n53474) | The diagnosed reset point — see §9 | Frame fact | Skeptic, changing the subject |
| 1.11 | The hook: "I worked one day… that stayed with me more than the result it produced." Schaerbeek, 2003, impossible number ($n83449–$n53802) | Recognition: the programmer story he had heard compressed, told by someone who was inside the room | Reconstructed testimony | Skeptic, but listening differently |

**Move 2 — The 2003 account.**

| # | Beat | Purpose | Evidence status | Narrator belief |
| --- | --- | --- | --- | --- |
| 2.1 | School polling station; room inventory ($n41571–$n13109) | Bureaucratic physicality; "a carpet whose pattern is an argument against democracy" | Fictional reconstruction | Hears it as testimony |
| 2.2 | The checklist: serial numbers, counters at zero, seals; ink; signature ($n35989, $n68009) | Procedure as the only defense; what a technician knows | Reconstruction within role | — |
| 2.3 | Party representatives; schoolteacher watcher unsure which is "the real work" ($n99437, $n91521) | Institutional doubt made visible | Fictional | — |
| 2.4 | Voting went normally ($n33677, $n13062) | Baseline before the anomaly | Reconstruction | — |
| 2.5 | Polls close; clerks check totals; one stops halfway ($n39633–$n65554) | The invariant violation staged as procedure, not poetry | Reconstructed detection | — |
| 2.6 | Re-reads; "Check this one"; machine identifier, register, media ($n78449, $n54658) | Missing-check certainty: "checks go missing the way buttons go missing from coats" ($n95615) | Sanest possible response | — |
| 2.7 | Dry air; paper rasps; wool sleeve ($n57610, $n16059) | ◎ Physical detail carrying the threat (§10) | Fictional | — |
| 2.8 | "For a while nobody called it an *error*." The word would start another procedure ($n76305–$n20962) | ◎ Human stakes: the word *error* is a bureaucratic event (§10) | Fictional | — |
| 2.9 | Invariant 1 written plainly; "sky lower than the bird" ($n14125–$n91363) | The contradiction stated exactly once, physically | Documented | — |
| 2.10 | *Error* used; formal investigation begins ($n53971) | Procedure wins | Documented sequence | — |
| 2.11 | Investigation sub-heading: technician re-checks; schoolteacher's bird sounds; lightning question ($n91901–$n46903) | ◎ Humor stays procedural; contrasts helpfulness vs. useful evidence (§11) | Fictional | — |
| 2.12 | Ledger of convenient blame, crossed off ($n88506–$n10495) | Each explanation had a trace it ought to have left; none was there | Documented outcome pattern | — |
| 2.13 | 4,096 written in the margin; 2^12; bit flip "an obvious suspect" ($n22932–$n67448) | The power-of-two reveal — exact, not florid | Documented | — |
| 2.14 | Physicist by bicycle; memory disturbance; charge deposition ($n67448–$n12882) | The technically ordinary explanation | Documented technical explanation | — |
| 2.15 | SEU hypothesis; "no smoking gun"; "a neat, round power-of-two crime" ($n45529–$n50752) | Hypothesis stated without personifying the anomaly | Documented explanation | — |
| 2.16 | "The technician objected that bits did not change for no reason." The physicist agreed ($n56427–$n17234) | ◎ The technician's credulity shown, not told; cause already gone | Fictional dialogue; documented epistemic point | — |
| 2.17 | Machine tested, software examined, result reconstructed; no defect; "very probably"; cause left open; "likely" ($n47968–$n94242) | The documented conclusion, attributed correctly | Documented | — |
| 2.18 | Retellings supply ionizing radiation; "cosmic flea bite"; "computer error"; "shipwrecks are wet"; *very probably* stays ($n83246–$n37749) | ◎ Later-narrator frame: how the story degraded into a programmer legend | Framing inference | Retrospectively unsettled, still non-supernatural |
| 2.19 | Clerk's later admission: "a boring human mistake" belonged somewhere; he did not say it during the investigation ($n63280–$n42626) | ◎ Human stakes in full (§10) | Fictional | — |

**Move 3 — Return to the cafeteria.**

| # | Beat | Purpose | Evidence status | Narrator belief |
| --- | --- | --- | --- | --- |
| 3.1 | Cafeteria thinned; coffee cold ($n62144) | Time has passed; the story is over | Frame fact | — |
| 3.2 | "He meant, I think… the world does not intend otherwise" ($n24689) | The technician's gloss, marked as narrator inference | Frame fact | Skeptic |
| 3.3 | "At the time I heard an engineer's argument about preparation, nothing more." ($n34715–$n78293) | The young narrator's contemporaneous verdict — must stand | Frame fact | Skeptic, explicitly |
| 3.4 | "We do not fight the weather…" cathedral of checks; "paper fails like a person fails, slow and legible" ($n18816, $n78293) | The case's thematic close without mouthpiecing | Frame fact | — |

**Move 4 — Dossier note and moth coda.**

| # | Beat | Purpose | Evidence status |
| --- | --- | --- | --- |
| 4.1 | "I did not write a field note that afternoon." ($n63199) | The conversion point, deferred | Frame fact |
| 4.2 | Field Note #1: "Horror, in our trade, is the clean error—the one that leaves no prints." ($n54255–$n91668) | The case's title idea, earned by the absent cause | Dossier inference |
| 4.3 | Mark II moth, 9 September 1947, Relay #70; "Proofs I Do Not Argue With"; "The moth looks unconvinced." ($n33563–$n10406) | Material counterexample: a failure that left a body; understated bridge toward superstition | Documented (Smithsonian) |

---

## 6. Reader anxiety curve

The case must produce dread without a supernatural event (`$id-5364595046057851`, `$id-3795396000378572`). The designed curve:

1. **Legibility (low anxiety).** The café is a systems diagram: queue, mapping, digits. The reader settles into the narrator's competence.
2. **First hairline crack.** The tram "spontaneous adjustment" — immediately corrected, so the unease attaches to the *correction*, not the joke. The worldview mismatch registers as style, not content.
3. **The clue the narrator drops.** The neutron item is folded away without a reaction ($n23591). Anxiety here is reader-only: the item is *too* neatly placed, and the narrator's indifference is the tell that he has not seen it.
4. **Comic plateau — deliberately.** The biscuit exchange is the last fully legible humor. It must not feel like a detour (§9); its "impossible fracture" motif prefigures the election so the reader feels continuity, not interruption.
5. **The hook.** "A candidate with an impossible number of votes" — recognition beats curiosity: the reader knows the legend before the narrator does.
6. **Procedural dread (sustained).** The invariant violation is staged entirely inside clerical procedure: re-reads, exchanged places, checked identifiers, crossed-off ledger items. The threat is bureaucratic and physical (dry air, rasping paper), never poetic (§10).
7. **The absence.** "None of the expected traces was there." The anxiety peak is not the number but the *missing cause* — every check the narrator and reader trust comes back clean, and the cleanliness is the horror.
8. **The explanation that explains nothing.** "Very probably" — the documented conclusion is itself an absence dressed as a conclusion. The reader feels the gap between procedure and knowledge.
9. **Human stakes.** The clerk who would have preferred a boring mistake: the fear that the cause, if found, might be *them*.
10. **Retroactive unease.** The return to the café and the field note re-color everything: the neutron item, the "spontaneous" tram, the biscuit that broke the rules. The reader leaves with the pattern assembled and unacknowledged — dread without discharge. Nothing after the election account may introduce a separate joke (billing-joke directive).

---

## 7. Character stakes

**Young narrator (frame present).** Stake: he came for useful technical information (maintainers' names) and received a story instead. His competence is his identity — the menu-mapping beat proves it — so the case threatens him by showing a system his methods cannot file. He must remain a skeptic throughout; his stake is *epistemic*, not emotional, which is what makes the later dossier note land.

**Technician.** Stake: he treats the day as the most meaningful thing he has done. His credibility is bounded — he was present, but as "a word expansive enough to cover whatever had not yet been assigned." He is not a mouthpiece ($n44011 directive): his worldview shows in what he treats as evidence (fracture patterns, liveness taps, the objection that bits do not change for no reason), never in speeches.

**The clerks.** Stake: responsibility. An untraceable alteration means any of them might be the cause; the word *error* would freeze the work and put names to the procedure. Their fear must be shown behaviorally — the dry air, the re-reads, the talking-around-it — not declared.

**The candidate.** Stake: an impossible number attached to her name; the correction is a report's "very probably," not a recount. She never appears; she is the human face of the clean error.

**The reader.** Stake: invited to assemble the neutron clue and the backward-time implication — and to feel the dread of a pattern the prose will never confirm.

---

## 8. The CERN neutron clue

**Rule (directive NOTE, absolute):** the escaped neutron must never be connected in the prose to the 2003 bit flip; the backward-time implication is strictly for the reader. No character may notice the clue; no sentence may contain both the neutron and the election anomaly in any causal or comparative construction.

**What the clue is.** A fictional wire-service-style brief, read in the cafeteria before the technician arrives: a neutron escaped one of CERN's experimental enclosures *that morning* and was detected beyond the shielding where it was expected to stop; the laboratory says no one was at risk; the newspaper uses the word *escaped* three times.

**Discoverability design.** The reader can assemble the impossible suggestion only if three things are legible:

1. **Chronology of the item.** The brief is dated the morning of the café meeting (the frame present), which is years after 2003. The narrator reads it "that morning" — the same phrasing the 2003 account uses for election day. The two mornings must feel like the same morning to a careless reader, and different mornings to a careful one.
2. **Chronology of the anomaly.** The 2003 date and the SEU explanation must remain explicit in Move 2, so the reader knows the flip was attributed to a particle.
3. **Recurrence of imagery.** The word *escaped* (and the semantic field of escape/escapee) recurs across the case, each instance diegetically justified: the neutron escapes shielding; the tram route escapes its schedule ("a signal failed, or somebody changed the route"); the bit escapes its zero; the error escapes every check. No instance comments on another. A reader who later re-reads will find the pattern; a first-time reader will feel it as rhythm.

**Placement alternatives (for review):**

- **Alternative A — keep the item where it is (current, $n54948–$n23591).** Pros: the narrator's indifference is maximal before the story; the clue sits in the reader's memory untouched by the election account; "folded it and put it back" is a physical act of non-connection that performs the rule. Cons: the item competes with the waffle item and the arrival; risk of reading as set-dressing.
- **Alternative B — move the item to immediately after the hook ($n83449).** Pros: the reader meets the clue seconds before "an impossible number of votes," maximizing pattern pressure. Cons: too clever; starts to *stage* the implication, which the directive forbids; weakens the "folded away" beat.
- **Alternative C — keep placement, add one controlled echo.** Keep A, and allow the single word *escaped* to reappear once in Move 3 — e.g., the technician's gloss that the world "intends this sort of interruption," where an interruption is what escaped the plan — without any neutron reference. Pros: deepens the rhythm without connection. Cons: each additional echo raises the risk of the pattern feeling authored; must be re-checked against the never-connect rule.

**Recommendation:** Alternative A, with C's single echo only if review finds the clue too faint. A is the only option in which the prose's non-connection is enacted by a character's behavior rather than by omission.

**Journalism-plausibility check.** The brief must read like a real short item: dateline (Geneva), neutral attribution ("the laboratory says"), the unusual claim stated flatly ("a neutron escaped one of CERN's experimental enclosures," "detected beyond the shielding where it was expected to stop"), and the standard reassurance. The single-neutron claim is the risk: it is unusual but physically coherent (neutron leakage outside shielding is a documented operational concern at accelerator facilities). The item must not use the word "escaped" in a foreshadowing register — the narrator's observation that the paper uses it three times is what keeps it diegetic: he notices the paper's word choice, not his own premonition.

---

## 9. Transition plan: biscuit → election (the diagnosed reset)

**Diagnosed defect.** The biscuit exchange ($n39196–$n19500) is a self-contained comic set-piece ending in "See?" The next beat abandons it — "I say nothing about the biscuit and ask how he came to work on elections" ($n46925) — and the election story begins from a fresh question. The technician's worldview (meaning read into fracture patterns) resets at the transition instead of accumulating, and the "long chain of preliminaries" makes the café move over-extended relative to the election account.

**Alternatives (for review; not chosen here):**

- **Alternative A — organic lead-in via the impossible fracture.** Keep the exchange almost intact, but let the biscuit's rule-breaking (one crack, reconsider, a third invented) prefigure the election's rule-breaking (a count above its own ceiling). The narrator changes the subject *because* he wants verifiable facts; the technician answers with a story about a number that broke its own rules. The link is never stated: the narrator treats the biscuit as noise, the technician treats it as signal — the worldview mismatch shown, not told ($n61375–$n87974 directives). *Trade-off:* requires the transition sentence to do double duty (changing subject + mirroring motif); the best "smallest revision" if review accepts one rewritten bridge beat.
- **Alternative B — the note-taking hinge.** Make the narrator's habit the hinge: he asks about elections to extract useful facts; the technician gives him a story; the narrator must do with the story what he did with the names — separate useful from commentary — and cannot, because the story's usefulness is the uncanny part. *Trade-off:* strengthens the contrast mechanism but risks making the narrator's filtering explicit in a way that tells the theme.
- **Alternative C — compress the preliminaries (pacing enabler).** Merge the menu-digit beat into the queue beat; tighten the names list; move the newspaper item adjacent to the arrival. Shortens the chain so the biscuit exchange arrives sooner and the election story occupies more of the case. *Trade-off:* pure pacing; does not by itself fix the transition; best combined with A.

**Recommendation:** A as the transition design, C as the pacing enabler, B only if review finds A's mirror too subtle. Under all alternatives the café's spatial/procedural observations stay (they reveal the narrator's habits; no biography), and no beat may turn either character into a mouthpiece.

---

## 10. Human stakes when the invariant fails

The NOTE requires intensifying: clerks' fear of responsibility, loss of trust in the count, and uncertainty over what corrective action is possible — through physical and bureaucratic detail, not poetic description or personification of the number.

**Existing material to build on (do not lose):**

- The dry air, the rasping paper, the wool sleeve ($n57610, $n16059) — the room itself becoming unreliable.
- "For a while nobody called it an *error*." The word would start another procedure: forms, witnesses, preserved media, work frozen where it stood ($n76305, $n24195). *This is already the key bureaucratic-stakes beat: naming the thing is itself an event with human costs.*
- Talking around it: *This one. These two figures. Check it again.* ($n17809–$n20962)
- The clerk's later admission ($n63280–$n42626): he would have preferred a boring human mistake; a human mistake belonged somewhere; if human error returned to the list, he himself was one of the humans available. He did not say this during the investigation.

**Proposed intensification (as alternatives, shown behaviorally):**

- **Fear of responsibility:** the clerks' procedural care *is* the fear — ink signatures, exchanged places at the display, re-reading. Optionally, one small added beat: a clerk's hand pausing over the certification form. (Behavior, not declaration.)
- **Loss of trust in the count:** after the invariant violation, every number in the room is suspect — including the totals the clerks themselves produced. The ledger of crossed-off explanations ($n88506) already enacts this; the design keeps it and forbids any narrator statement like "they no longer trusted the machine."
- **Uncertainty over corrective action:** the contradiction cannot be re-run (the moment is gone), cannot be recounted (the media is the machine), and cannot be attributed (no trace). The only available "correction" is the report's *very probably* — the investigation ends not with a fix but with a qualification. The manuscript already lands this ($n36362, $n94242); the design protects it from being overwritten by any temptation to add a resolution.

**Forbidden intensification:** poetic description of the bit flip ("an ion that fell through the evening and made a number grow teeth" — removed in commit 10aea6f), personification of the numerical anomaly, any statement that the anomaly "wanted" or "intended" anything. The technician's "bits did not change for no reason" stays because it is a character's voiced hypothesis in dialogue, marked as his.

---

## 11. Humor and voice

**Allowed humor (arising from character or procedure, implicit, `$id-0964292624358295`):**

- The tram "spontaneous adjustment" and its self-correction ($n90697–$n49472) — the technician's tell.
- "Loses confidence around printers" ($n86622) — the narrator's dry file-note voice.
- The biscuit nationalism ($n77497–$n70756) — comic only until it becomes the transition motif (§9).
- The schoolteacher "identifying birds" ($n79217) and the adding-tape woman's lightning question ($n60861) — procedural humor that also characterizes helpfulness versus useful evidence.
- "The moth looks unconvinced." ($n10406) — the collection's lightest beat, placed after the heaviest.
- "The phrase is correct in the way that shipwrecks are wet." ($n15273) — the narrator's skepticism about labels.

**Forbidden (hard rules):**

- The removed conversation-quality billing digression (§13) — never restore; its separate joke interrupts the accumulated unease after the election account.
- The two removed florid metaphors (§13) — never restore.
- Any comic detour after the election account (Move 3 carries no jokes; the nearest allowed humor is the moth, which is gravity, not comedy).
- Explaining any joke, and any narrator sentence whose function is to advertise the epistemic strategy ($id-6418273059462718).

**Voice invariants:** short beats for pressure; layered sentences with internal turns; concrete procedural diction; uncanny implications arising from facts, not decoration. The young narrator's voice is identical in register to the mature narrator's — the difference is only what each is willing to entertain.

---

## 12. Chronology plan

**Frame chronology (the meeting).** Undated by the narrator but legible as years after 2003: the dossier frame ("Years later, when I began the dossier…"). The CERN item is dated the morning of the meeting. Constraint: no character may compute the time gap; the gap is reader-side.

**2003 reconstruction chronology (the technician's knowledge boundary).**

| When | What happens | Who can know it | Manuscript handling |
| --- | --- | --- | --- |
| Sunday 18 May 2003, election day | Voting; polls close; clerks check totals; invariant violated; re-reads; "Check this one" | Technician present (firsthand) | Move 2 beats 2.1–2.10 |
| Sunday night into the following days | Word *error* used; formal investigation begins; technician re-checks machine and media; schoolteacher and adding-tape woman present; physicist consulted; machine tested; software examined; result reconstructed | Technician present for the parts he was asked to do; the rest he knows as report | Move 2 beats 2.11–2.17, with "Later, the machine was tested…" ($n47968) as the compression marker |
| After the investigation | Experts' report ("very probably"; cause left open); committee report ("likely"); retellings supply ionizing radiation and "cosmic flea bite" | Public record; narrator hears it later | Beats 2.17–2.18, framed as "Later retellings…" |
| Years later | The clerk's admission | Retold to the narrator | Beat 2.19, framed as "One clerk later admitted…" |

**Believability rules:**

- The technician's firsthand account may include only what a technician present that night could perceive: the room, the checklist, the clerks, the sounds, the questions asked of him, the machine and media he was asked to re-check. He may not narrate the experts' internal deliberations, the physicist's private reasoning, or the committee's discussions — those enter only as report, reconstruction, or later retelling.
- The compression of a multiday investigation into one evening plus "Later…" markers is acceptable and already present; the design keeps the markers visible so the reader never mistakes summary for firsthand.
- The May 2003 date and the federal-election framing stay explicit; the preferential-votes-over-list-total detection mechanism stays explicit (it is the documented reason the anomaly was caught at all).

---

## 13. Guardrails: alternatives considered and rejected

| Proposal | Status | Reason |
| --- | --- | --- |
| Restore the conversation-quality billing digression | **Forbidden** (manuscript directive) | Its separate joke interrupts the accumulated unease after the election account (commit 10aea6f removed it; NOTE forbids restoration). |
| Restore the florid metaphors ("wove its one-ness into every arithmetic…"; "an ion that fell… made a number grow teeth") | **Forbidden** (commit 10aea6f; NOTE: no poetic descriptions of a bit flip, no personification) | Overwrote procedural detail with decoration; the threat must come from physical/bureaucratic detail. |
| Connect the escaped neutron to the bit flip in the prose | **Forbidden** (directive NOTE) | The implication is strictly for the reader; any connection destroys the case. |
| Let the young narrator suspect a supernatural cause | **Forbidden** (NOTE; `$id-0861352612251497`) | He heard "an engineer's argument about preparation, nothing more" — that verdict must stand. |
| Resolve the anomaly (recount, fix, cause found) | **Rejected** | Destroys the clean-error horror and misrepresents the documented outcome ("very probably," cause left open). |
| Make the technician or narrator a mouthpiece for the collection's philosophy | **Forbidden** (NOTE `$n44011` directive) | Contrast stays implicit, shown through what each treats as evidence. |
| Move or restage the CERN item (Alternative B, §8) | **Rejected as primary** | Stages the implication; the prose's non-connection must be enacted by the narrator's indifference, not by placement cleverness. |
| Add any new principal case or change case count | **Out of scope** | `$id-7494998113772687` fixes seven principal cases; design work may not add or remove. |

---

## 14. Acceptance tests (measurable)

A proposed prose revision passes only if all of the following hold:

1. **Never-connect rule.** No sentence in Case I contains the neutron item and the 2003 anomaly in any causal, comparative, or explanatory construction; no character notices the clue. (Checkable by close reading of every sentence containing "neutron," "escaped," "CERN," or "Geneva.")
2. **Clue discoverability.** The CERN item is datable to the morning of the café meeting; the 2003 date and SEU attribution remain explicit; the word *escaped* recurs at least three times in the case, each instance diegetic. (Countable.)
3. **Young narrator skepticism.** The frame present contains no supernatural belief or suspicion; the contemporaneous verdict "an engineer's argument about preparation, nothing more" stands unchanged in substance. (Checkable against `$n34715`.)
4. **Chronology.** The 2003 reconstruction preserves: 18 May 2003 federal election; detection via preferential votes > list total; multiday investigation compressed behind visible "Later…" markers; the technician's knowledge bounded to firsthand plus report. (Checkable against §12 table and endnotes 2–4.)
5. **Transition.** The biscuit exchange leads into the election story through a stated or enacted motif link (Alternative A), and the technician's perspective accumulates across the transition rather than resetting. (Reviewable against §9.)
6. **Cafeteria pacing.** The preliminaries chain is shorter than the current draft (Alternative C at least partially applied) while retaining the spatial/procedural observations and all contrast beats. (Comparable beat count before the hook: current 11 frame beats; target ≤ 9 without losing 1.1, 1.2, 1.3, 1.4+1.5, 1.6, 1.8, 1.9.)
7. **Human stakes.** At least one behavioral beat each for: clerks' fear of responsibility, loss of trust in the count, and uncertainty over corrective action — with no narrator declaration and no personification of the anomaly. (Checkable against §10.)
8. **No forbidden material.** Absent: the billing digression, both removed florid metaphors, any restored removed sentence from commit 10aea6f. (Diffable against 10aea6f.)
9. **Humor discipline.** All humor arises from character or procedure; nothing after the election account introduces a separate joke; no joke is explained. (Checkable against §11.)
10. **Sane-case invariant.** The case requires no supernatural event to make sense; the conventional explanation (SEU, "very probably") remains live and sufficient. (Checkable against `$id-3795396000378572`.)
11. **Graph sync.** Any accepted prose change updates the meaning graph in the same change, preserving one-node-per-sentence coverage and exact `text` fields. (AGENTS.md invariant.)
12. **Journalism plausibility.** The CERN brief reads as a neutral wire-service item on review; the single-neutron claim is stated flatly with laboratory attribution. (Checkable against §8.)

---

## 15. Coordination protocol with other chapter designs

This design coordinates with the other chapter designs (Heisenbug, Maxwell's Demon, Leprechaun, Mercury, Crocodile, natural crash, prologue, coda) only through shared conventions, never through concurrent edits:

- **Shared manuscript, no concurrent conflicting edits.** This branch changes exactly one file: `docs/chapter-designs/schaerbeek-bit.md`. The manuscript (`supernatural.md`) and meaning graph (`docs/meaning-graph.md`) are untouched here, so no other chapter design can conflict with this branch. Prose changes happen only after human review of this design, on a separate refinement branch, with meaning-graph updates in the same change (AGENTS.md).
- **Shared conventions this design assumes:** the dossier frame and "Field Note" numbering; the seven-case structure (`$id-7494998113772687`); the escalation from sane to extravagant with Case I as the sane opening (`$id-3795396000378572`, `$id-7350745426882596`); the evidentiary categories of §3; the source/fiction boundary discipline of the itinerary (`docs/skills/itinerary-supernatural.md`, "Real incidents and invention").
- **Hand-off:** if another chapter design proposes a change to the prologue or coda that touches Case I's frame sentences, the two designs reconcile through the meaning-graph continuity fields, not through manuscript edits.

---

## 16. Terminal verdict

**Verdict: DESIGN COMPLETE — READY FOR HUMAN REVIEW.**

- The blueprint is written at `docs/chapter-designs/schaerbeek-bit.md` on branch `docs/schaerbeek-bit-design` (from `master`; not merged, not deletable by the orchestrator).
- **No manuscript prose was changed.** The diff of this branch against `master` contains exactly one new file.
- Every live constraint from the Case I NOTE blocks, the Intent Records, and AGENTS.md is accounted for in §1 and testable in §14.
- The three diagnosed defects (cafeteria pacing, biscuit-to-election reset, technician/narrator contrast flattening) have concrete alternatives (§9), the 2003 reconstruction has a credibility table (§12), the human-stakes intensification is specified behaviorally (§10), and the CERN clue has a discoverability design that enforces the never-connect rule (§8).
- All removed material (billing digression, two florid metaphors) is explicitly fenced off (§13).
- Authorial intent is preserved: this document proposes alternatives for human decision; it rewrites no goals and no prose.
- Historical chronology and source/fiction boundaries are grounded in the manuscript's own endnotes plus verified references (§2).
