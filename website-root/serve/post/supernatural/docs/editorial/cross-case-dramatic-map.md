# Cross-case dramatic map

Editorial companion to `index.html`, produced for Antonina board issue #277.
Date: 2026-10-13 (revised 2026-10-14 on branch
`agent-b6fb41f5ac39/issue277-cross-case-dramatic-map`, recovering the map from
`agent-6b92725178a5/issue277-map-transitions` (a4786e8), which continues the
`agent-1c6cb3aee7ac/cross-case-dramatic-map` lineage (1deb188, 0726dc1); integrated
2026-10-14 on branch `agent-74338cc3344c/issue277-map-integration`; re-organized
2026-10-14 on branch `agent-302fc3be0b46/issue277-cross-case-map-v2`). The 2026-10-14
re-organization adds three things the board's updated direction calls for: an explicit
**dramatic spine** (explanation → presence/emotion/myth/changed-relevance, new section), a
per-case **deterioration ledger** making the narrator's decline observable across every arc
(new table in §7), and an explicit **superseded acceptance-criterion** record (the retired
"skeptic-readable surface" requirement). This revision keeps the two citation fixes from the
earlier lineage — the verification-tic entry for Case I is the clerk's line retold, not the
narrator's own gesture, and Field Note #6 is not the collection's last note (the coda appends a
"Field Note (last)") — and keeps the third correction: Case I's "write[s] down the useful
parts and leave[s] some of the commentary out" is present tense in the manuscript.
Status: **diagnostic, directional, and delivery-aware**. It maps the current master
manuscript, marks the repetitive machinery the issue diagnoses, records the 2026-10-13 human
authorial direction, and (in "Delivery status and superseded directives" below) tracks which
chapter issues have since delivered rewrites on their own review branches. Case bodies remain
owned by chapter issues (#278, #286, #287, #289, #293, #294, #295); local NOTE-block
reconciliation is owned by #296. This map proposes case-local changes in §8 instead of
applying them, and records cross-branch integration conflicts rather than resolving them
unilaterally.

**Superseded acceptance criterion (recorded, not silently rewritten).** Issue #277's
original acceptance required a "skeptic-readable surface" across all cases. The 2026-10-13
human authorial direction (commits 505fd5ea, 5cd4e52a) **supersedes that criterion**: from
Case III onward the supernatural beings are real within the story, and the map no longer
treats mundane alternatives as required. Cases I–II keep their sceptical surface because
that surface is what earns the narrator's rational trust before the shift. The current
authority is the live Intent Records in `docs/intent-records/story.md` and
`docs/intent-records/editing.md`; this map encodes that direction rather than the retired
criterion.

## How to read

Each section (prologue, I–VII, coda) records the seven required fields:

- **(a)** the reader's pressing question at the section's opening;
- **(b)** the character's concrete aim and what it costs;
- **(c)** the evidence tier: firsthand / reconstruction / secondhand / folklore;
- **(d)** the section's unique dramatic engine — the mechanism that makes it a different
  story from its neighbours, not a variation;
- **(e)** the observable change in the narrator's behaviour;
- **(f)** one specific lingering image;
- **(g)** what remains unexplained, and why it must remain so.

"Master" citations quote the current manuscript. Node IDs cite `docs/meaning-graph.md`.

## The dramatic spine: from explanation to presence

The 2026-10-13 human direction does not add supernatural events; it moves the
collection's centre of gravity. The cases are not seven iterations of "anomaly →
reconstruction → qualification"; they are seven stations on a single migration:

- **I–II earn rational trust.** Explanation is still the engine: the world is
  indifferent or responsive, but ordinary causes remain intellectually available and
  the narrator's scepticism is a strength, not a symptom. The reader learns to trust
  his measurements before those measurements stop being neutral.
- **III–IV shift to presence.** The demon and the green man are real beings within the
  fiction. The question is no longer *whether* they exist but *what their existence
  does* — to the developer who dreamed, to the operator who saw, to the fleet whose
  proofs are gone. Emotional force and consequence replace sceptical qualification.
- **V shifts to myth.** Mercury is a living mystical order, not a correlation to be
  tested. The technical fault is only the doorway; the chapter inhabits astrology's
  lore, timing and fate, and the narrator is converted by it.
- **VI shifts to changed relevance judgments.** Nothing supernatural is claimed. The
  horror is entirely internal: a man whose causal attention has been warped by the
  previous cases now reads a clean null result as signal and cannot stop checking.
- **VII is the mundane exception.** The crash is objectively ordinary and fully
  explained — but the narrator no longer finds that sufficient. The comfort is gone
  from ordinary answers.
- **Coda embodies the change.** The transformed man is staged through ritual and
  perception, not announced as a thesis.

This spine is the map's organising principle. Each case below is filed under the stage
it belongs to, and the per-case **(e)** fields double as a deterioration ledger (see
§7).

## Applied transitional revisions (this branch)

Issue #277 owns the cross-case transitions, not the case bodies. Two redundant bridge
openings were revised in `manuscript.md` and their meaning-graph nodes updated in place
(IDs kept, `text` re-matched exactly):

- Case III opening: "I came to it the way I come to most of these cases: after the fact…"
  → "I came to it after the fact…" (drops the dossier-habit formula; keeps the retrospective
  practice statement). Graph node $n14126.
- Case VI opening: "I first heard about it on a Wednesday morning, the way I hear about most
  things now: a message from a colleague…" → "I first heard about it on a Wednesday morning:
  a message from a colleague…" Graph node $n76278.

These remove the repeated "the way I…" bridge cadence flagged in §6 item 6 without erasing
evidence qualifiers or humour. All other §8 items remain proposals for the owning chapter
issues.

**Supersession risk (2026-10-14):** the delivered #287 and #295 rewrites are children of
master and rewrite these same two sentences, re-introducing the bridge formula in both
openings (#287 keeps "I came to it the way I come to most of these cases: after the fact…,
to decide what could be established and what could only be kept"; #295 keeps "…the way I hear
about most things now: a message from a colleague…"). The two edits therefore conflict on
merge, and the merge must consciously choose between this map's removals and the rewrites'
versions rather than let the rewrite silently restore the tic.

Coverage check on this branch (re-run 2026-10-14 on the integration branch): 905 graph nodes,
0 duplicate IDs, 0 missing required fields, and the ordered concatenation of node `text`
fields equals the manuscript's prose exactly (`EXACT MATCH`) — unchanged from `master` except
the two sentences above, whose node IDs are kept. No case body, premise, or Intent Record is
touched.

## Delivery status and superseded directives (2026-10-14 integration)

Per the 2026-10-13 human direction, late-case supernatural ambiguity is no longer wanted:
by III–IV the beings are **real within the story**, V is deep astrological mysticism,
VI reveals subtle paranoia, VII stays objectively mundane but no longer consoles.
Status against live documents and delivered branches:

- Intent Records (`docs/intent-records/story.md`, `docs/intent-records/editing.md`):
  **reconciled on master** (commits 505fd5e, 5cd4e52, 77e288e). No live Intent Record
  demands late supernatural ambiguity; nothing here rewrites them. The 2026-10-13 intents
  ($id-9264982270043622, $id-0861352612251497, $id-1563163086970281, $id-8506027753346938,
  $id-9342987960007338, $id-7062117495708504, $id-2221791653068770, $id-9421142343424984,
  $id-7350745426882596) are the live authority the delivered rewrites satisfy.
- Manuscript `<NOTE>`/`<MUST HAVES>` blocks: **reconciled at
  `origin/reconcile/296-note-directives` @ 91f14b1** (18 NOTE sentences rewritten across the
  preamble and Cases III–VII; meaning graph 905 nodes). The preamble NOTE and the Case III,
  IV, V, VI and VII NOTEs no longer demand late supernatural ambiguity. #296 is the canonical
  reconciliation; the chapter branches below re-apply subsets of it.
- Case bodies: **delivered on independent review branches off master** (see the per-case
  "Delivered" lines and the integration conflicts at the end of this section). Case V remains
  owned and not yet delivered; Cases I–II remain owned by #278.

### Delivered chapter rewrites (all off master 77e288e; none merged yet)

| Case | Issue | Branch (tip) | Map direction |
|---|---|---|---|
| III Maxwell's Demon | #287 | `review/287-case-iii-integration` (296aa30; impl `impl/287-maxwells-demon-real-collision` 618e3de) | satisfied — real demon, full SHA-256 collision, both originals lost; endnote 7 re-cut to the SHAttered/MD5 precedent; bridge re-pointed off the Ed25519 story |
| IV Leprechaun | #289 | `agent-88c99460793c/issue289-case-iv-leprechaun` (cc926f9) | satisfied — real green man, direct encounter; opening now "This one is not a legend"; closing loop-bound habit preserved verbatim |
| V Mercury | #286 | none on origin (research note only) | pending — #286 owns the prose |
| VI Crocodile | #295 | `agent-cc66e713f89e/issue295-crocodile-paranoia` (e302ad3) | satisfied — paranoia shown by disproportionate checks; "I read it a third time"; Field Note #5 breaks the template |
| VII Rack C | #293 | `review/293-case-vii-mundane-crash` (5cc886d) | satisfied — consolation removed; checkpoint replaced by archive/backup recovery; Rack C coordinated with the coda |
| Coda | #294 | `review/294-supernatural-coda` (b5b8fcb) | satisfied — lecture embodied; stale "two machines, one secret" token replaced by "Two things that were not the same, answering to one name"; demon register added |
| NOTE directives | #296 | `reconcile/296-note-directives` (91f14b1) | satisfied — canonical NOTE reconciliation |

### Integration conflicts to reconcile (surfaced, not resolved here)

The chapter branches are parallel children of master and were not built on one another, so
merging them is not mechanical:

- **Case III NOTE**: rewritten differently by #287 and by #296/#289 (which includes #296).
  Both state the same required premise in different words; one version must be chosen.
- **Case VII NOTE**: rewritten differently by #293 and by #296/#289. #293's version is longer
  and case-specific and adds the Rack C / checkpoint-coordination directives.
- **Preamble NOTE**: edited identically by #289 and #296, untouched by #287, #293, #294 and
  #295, so it merges cleanly; #296 is the single source of truth for it.
- **Case VI NOTE**: edited identically by #295 and #296, so it merges cleanly.
- **Coda tokens** (#294): the rewritten list represents Cases II, III, IV, VI and VII; Case V
  is carried by the almanac paragraph ("I know the next retrograde window… I have moved a
  migration around it") rather than a token. This preserves master's five-token design; flag
  it if #286 wants a Mercury token.
- Only #289 contains #296's reconciliation; #287, #293, #294 and #295 each carry their own
  NOTE edit and must be reconciled against #296 on merge.
- **Bridge sentences**: this branch removed the "the way I…" bridge openings in III and VI,
  but the #287 and #295 rewrites (children of master) re-introduce them on the same lines.
  Choose deliberately at merge (see "Applied transitional revisions").

---

## Prologue

- **(a)** Why can't a correctly written specification hold the world — and what does it
  cost this man that it can't?
- **(b)** Aim: keep the failures in a hand he will recognise when he is older, and leave
  margins for what he cannot name. Cost: the incidents stay open; he buys record-keeping
  in place of peace. The telephone has not finished ringing.
- **(c)** Firsthand (the valve) framed as the dossier's own practice.
- **(d)** Engine: the inaugural breach — an uncommanded valve at a quarter to five —
  converts professional habit (reproducibility, postmortems) into a collection. No case
  mechanism: the prologue earns the dossier by making its absence unbearable.
- **(e)** Behaviour change: from engineer who trusted the grammar to a keeper of tokens —
  reading logs twice "as if the second look were the one that counted", the hand that
  "sometimes stops above the key, and I have learned not to ask it why".
- **(f)** Lingering image: "The telephone rang a moment later, and I have not entirely
  stopped hearing it."
- **(g)** Unexplained: why the valve opened with no command in the log. Left open on
  purpose — the prologue is the sane baseline; the dossier exists because this question
  never closes. Graph nodes $n00657 (log-twice) and $n12352 (hand above the key) carry
  the prologue's forward-seeding of the coda rituals (see §7).

## I. The Schaerbeek Bit

- **(a)** Can an election count be trusted when the numbers survive every check — and
  what can anyone *do* about it if it can't?
- **(b)** Aim: find the missing check; keep the result publishable. Cost: public trust
  in the count (the issue's "damaged public trust"), borne by clerks who fear being the
  human explanation — "If human error returned to the list of possibilities, he himself
  was one of the humans available."
- **(c)** Reconstruction: a technician's testimony, retold and straightened by the
  narrator, of a documented 2003 incident (endnotes 2–4).
- **(d)** Engine: elimination procedure that *succeeds procedurally and fails humanly* —
  every mundane candidate crossed off until "very probably" a single-event upset remains,
  which is a cause that cannot be shown to anyone. Distinct from II: the observation is
  neutral here; the world simply declines to leave a trace.
- **(e)** Behaviour change: the young narrator "write[s] down the useful parts and leave[s]
  some of the commentary out" — discriminating, unhurried. He does not write a field note that
  afternoon; years later he files it under the technician's story. First dossier entry:
  the moth photograph, filed in *Proofs I Do Not Argue With*.
- **(f)** Lingering image: "The moth looks unconvinced." (Also strong: the school carpet
  "whose pattern is an argument against democracy".)
- **(g)** Unexplained: the physical mechanism — the experts' report "left the physical
  cause open", and the text says why: if the cause was a particle, "there was no particle
  left to inspect." Must stay unexplained: this is the sane opening case; a supernatural
  answer here would spend the dossier's credibility early (Intent $id-3795396000378572).

## II. The Heisenbug I Failed To Catch

- **(a)** Can the failure be caught without changing it — and what does the attempt cost?
- **(b)** Aim: one ordinary artifact — the final syscall, a queue transition, "a bad
  state we could point to after the fact". Cost: a sleepless night, nothing fixed ("The
  day shift would come in to machines we could not vouch for"), and the knowledge that
  every instrument is also a way of warning the failure.
- **(c)** Firsthand: the narrator chased it himself; fictional composite of a documented
  2019 ProxySQL hang (endnote 5).
- **(d)** Engine: observation alters attempts to establish facts — `strace`, prints,
  `socat`, a slower client each make the hang recede; the experiment table and the blank
  seventh row. Distinct from I: here the *measurement* is the disturbing act.
- **(e)** Behaviour change: "By then I had begun to dislike successful tests." The 04:56
  hesitation — hand on the keyboard, stopping, "For several seconds I did nothing" — is
  the exemplar conversion of suspicion into superstition (preserved; not to be imitated
  elsewhere). Closing note: *The thing hates to be watched*.
- **(f)** Lingering image: "With strace running, it behaved as if repentant." (Runner-up:
  the seventh row, still blank at 04:12.)
- **(g)** Unexplained: the race itself — "We could not point to the race." Correctly open:
  the case must create "genuine doubt, anxiety, and eventually fear" with ordinary
  mechanisms still available (Intent $id-0105305593640677; endnote 5 records the real
  incident's eventual cause).

## III. Maxwell's Demon — **master predates the human direction; delivered (#287)**

Master state (what is on master now) vs. required direction (Intent
$id-8506027753346938; board #287):

- **(a)** Master: *was the dream true, or did hindsight enrich it?* — the forbidden
  question. Required: *the demon is real; what does its warning mean, and what does the
  collision mean now that the proof is gone?*
- **(b)** Master aim: rule out chance, name the mechanism, decide nothing about the dream.
  Required aim: confront the being's presence, agency and the curse's meaning. Cost (both):
  the individuality of every machine; required adds the sharper cost that both original
  files are lost — the only two proofs irrecoverable.
- **(c)** Master: secondhand (one man's dream) + reconstruction (duplicate Ed25519 host
  key; documented substrate in endnote 7). Required: the dream is firsthand *to the
  developer and is not demoted*; the collision event is established while the files
  exist (witnesses, logs, distinctness, identical full SHA-256 digest), then lost.
- **(d)** Master engine: probability arithmetic versus hindsight — "None of that touches
  the dream, because the dream does not have to be true to have been written first."
  Required engine: **presence and meaning of a real being** plus the absurd irony of
  vanished proof; the SHA-256 collision gives the supernatural coincidence "a specific,
  astonishing shape" without turning the chapter into actuarial calculation. Do not make
  III about whether the being exists.
- **(e)** Master behaviour: "I have not decided." He recomputes the probability "on a
  different day, as if I expected a different answer", and notices he says *demon* aloud
  in the tone of *race condition* "and that I did not stop." Required: conviction — the
  narrator's fear and changed stance are the change; uncertainty may remain about what
  the demon wants, not about its existence.
- **(f)** Lingering image (both versions): "The lights went out in a wave from the far end,
  constellation by constellation, and did not come back." — keep whatever else changes.
- **(g)** Master unexplained: the dream's truth — wrongly. Required unexplained: *why the
  files vanished* — "The disappearance need not be procedurally explained away" (Intent
  $id-8506027753346938); the loss compounds fear, lost confidence and vulnerability.

**Coordination:** owner #287 rewrote this case (delivered at
`review/287-case-iii-integration` @ 296aa30). This map does not touch the section. Both
forward notes were actioned: the bridge was re-pointed at the collision-and-loss premise
("two files that agreed with each other far more than they had any right to"), and endnote 7
was re-cut from the Ed25519 story to the SHAttered/MD5 collision precedent. Note the residual
bridge-formula conflict with this branch (see "Applied transitional revisions").

## IV. The Leprechaun of Off-by-One — **master centres the code mystery; delivered (#289)**

- **(a)** Master: *was it the green man, or a tired engineer's uncommitted edit?* —
  forbidden. Required: *the small man in green is real; what does meeting him do to the
  people who encounter him?*
- **(b)** Aim: file the legend without verifying it. Cost (master): the customer's archive
  — "gone, irreversibly, by the job's own logic" — and the operator's identity: "the guy
  who saw the leprechaun — believed by no one who matters, or believed by everyone and
  taken seriously by none". Required: the costs stay; the forensic hunt ("stale builds,
  undeclared edits, missing commits") is removed as the centre (Intent $id-9342987960007338;
  board #289).
- **(c)** Folklore: four non-witnesses and one witness who will not confirm or deny;
  attributes survive every telling while details drift. Required: folklore shapes the
  narration but "must not domesticate the man into a merely debatable rumor" — he is real.
- **(d)** Master engine: legend drift plus compulsory skepticism — "I do not file this
  under human error. I do not file it under anything." Required engine: **the green man's
  presence infects actual operational procedure** — "iterations counted aloud, bounds
  checked in pairs, written down as procedure, because procedure is the only way a
  superstition is allowed to survive in a place like that." Show what his existence means.
- **(e)** Behaviour change: "Since I compiled this file … I read loop bounds twice. I
  check the diff of anything that touches a limit. I do not tell anyone this is why." —
  the first owned superstition; "The habit is small and permanent and it is mine." This is
  progression decision #1 (§7).
- **(f)** Lingering image: "In a third he is simply standing there, which is the version
  that frightens me, though I could not say why." (Keep the smile-as-data line: "A story
  that is told with a smile is still a story that is told".)
- **(g)** Master unexplained: which filing is right — "the gap is where the case lives."
  Required unexplained: not whether he is real, but *what he wants* and why the bounds move
  by one — the folklore's own openness.

**Coordination:** owner #289 rewrote this case (delivered at
`agent-88c99460793c/issue289-case-iv-leprechaun` @ cc926f9). The closing habit paragraph
survived intact ("Since I compiled this file … I read loop bounds twice…") and remains the
load-bearing seed for the coda's token check; the opening now reads "This one is not a
legend, and I have stopped filing it as one."

## V. Mercury in Retrograde — **master runs the statistical engine; pending (#286)**

- **(a)** Master: *is the correlation causation — or a pattern I was looking for?*
  Required: *the reversals are Mercury's; what does it mean that the sky and the ledger
  keep the same dates?*
- **(b)** Aim: test the correlation and survive it. Cost: his own behaviour — "I delayed
  it. I did not say why. I kept a private calendar I would not show anyone." A migration
  postponed on astronomical grounds.
- **(c)** Reconstruction: journal + ephemeris one year later; the operator's private log
  secondhand, "motivated and uncorroborated".
- **(d)** Master engine: selection/correlation temptation — seventeen reversals, every one
  inside a verifiable retrograde window, "The check marks formed a perfect column", with the
  base-rate arithmetic and forty-three clean restarts as the engine. Per Intent
  $id-7062117495708504 and board #286, that tally/base-rate machinery "must no longer be
  the chapter's engine": required engine is **full astrological mysticism** — planetary
  symbolism, stations, omens, correspondences, interpreters, fate — with awe, terror and
  emotional consequence. The technical fault is only the doorway.
- **(e)** Behaviour change: "I noticed that I had begun to treat a planetary position as a
  scheduling input, and that noticing did not stop me." — progression decision #2 (§7).
  "I know the date. I have always known the date." is the case's mystic core and should
  survive any rewrite.
- **(f)** Lingering image: the journal spread across the desk between the ephemeris table
  and the operator's log — "I worked from left to right, from the machine record to the
  human record to the astronomical record, and I did not let them touch." (With the rewrite,
  the not-letting-them-touch should fail.)
- **(g)** Master unexplained: "I have not named a cause." — superseded. Required
  unexplained: what Mercury *wants* with this ledger; the narrator may keep "I do not know
  what to do with any of it" but not compulsory statistical doubt. The selection-risk
  paragraph ("I had gone looking for a pattern…") is the kind of skeptical apology the
  human direction retires for this case; #286 should cut it.

## VI. The Crocodile in Vienna — **delivered (#295)**

- **(a)** Why did *nothing* fail — and why can't he leave that alone?
- **(b)** Aim: do the procedure — establish the blast radius, as always. Cost: none
  material; the cost is that the procedure now runs on him: "I have checked the systems
  four more times."
- **(c)** Secondhand (a forwarded link, one word: *crocodile*) + firsthand monitoring
  (his own status pages). The Vienna disruption is documented local reality (endnote 8).
- **(d)** Engine: the deliberately absurd negative control — a real, contained civic
  failure with a perfectly legible boundary, and an ocean-wide null result he cannot stop
  treating as signal. Distinct from every other case: nothing supernatural is claimed; the
  horror is entirely in his altered relevance judgments (Intent $id-2221791653068770).
- **(e)** Behaviour change: disproportionate checks written down "in a column, with the time
  I checked it: 14:02, 14:05, 14:11, 14:18"; "And I cannot stop thinking about how clean
  that was." Paranoia shown, never announced. Progression decision #3 seeds here (§7).
- **(f)** Lingering image: "the slow green pulse of a system behaving exactly as it should."
  (Also: the woman with her dog, "walks a different way now, but she walks.")
- **(g)** Unexplained: why the boundary was so clean — and the text must *not* explain
  the joke or prove crocodiles ought to reach software. The reader notices the absurdity;
  the unease stays humanly intelligible. Per #295 (delivered at
  `agent-cc66e713f89e/issue295-crocodile-paranoia` @ e302ad3): the "blast radius" framing
  and the clean-boundary repetition are gone; the paranoia is carried by physical unease and
  private repetition ("I read it a third time, which was not the way I read incident
  reports"; "the second column was longer than the first, and I had not decided to make it
  longer").

## VII. The Heat Death of Rack C — **master's closing lines console him; delivered (#293)**

- **(a)** Is a complete, ordinary explanation *enough* — after everything?
- **(b)** Aim: restore the database; close the case. Cost: Ruth's three days of compute
  and a week in the cluster queue, irreversible — "She said it the way you say the
  weather." The irreversible human cost must survive any rewrite (Intent $id-9421142343424984).
- **(c)** Firsthand (the narrator pulled the logs) over a documented cooling-failure
  substrate (endnote 9).
- **(d)** Engine: the mundane exception — "Every link was in the logs. Every link was
  physical." A dead compressor, a warming room, throttling, `thermal_zone0: critical
  temperature reached, shutting down`. The contrast is the point: the explanation is
  complete and it does not help.
- **(e)** Master behaviour: he packs the memory-testing drive "which a dead database has no
  use for" and catches himself "hoping it would be strange" — good, keep. But the closing
  lines console him — "It is a strange thing to be relieved by a broken air conditioner" and
  "Some failures are boring, and I can still accept one." — which contradicts Intent
  $id-9421142343424984: he "finds it emotionally unsatisfying and cannot regain his
  earlier confidence… His altered perception, persistent suspicion and vulnerability
  survive an ordinary result." Required: acceptance without consolation, shown in
  behaviour (see §8, example 1).
- **(f)** Lingering image: "The absence of the fans was louder than their sound had been."
  (Also: Ruth standing in the doorway, still holding her coffee.)
- **(g)** Unexplained: nothing in the chain — that's the design. The residual discomfort
  is the narrator's, not the machine's. Per #293 (delivered at
  `review/293-case-vii-mundane-crash` @ 5cc886d), the checkpoint-recovery implausibility is
  repaired (recovery now rolls forward from the last verified backup through the intact
  transaction-log archive, which stopped at 02:47), and the Rack C details are coordinated
  with the coda (a warm week, a clogged filter, a fan that failed slow and legible).

## Coda — **delivered (#294)**

- **(a)** Has he changed — and can he change back?
- **(b)** Aim: keep the dossier, the rituals, the margin. Cost: permanent altered
  perception; "I have learned to distrust the good ones."
- **(c)** Firsthand, present tense: the room, the tokens, the almanac.
- **(d)** Engine: embodiment — the change is staged as behaviour (tokens checked "and it
  is not one at all"; the pen stopped above the blank margin; a date ringed without cause),
  not stated as thesis. Distinct from VII's ordinary crash: the coda is where VII's
  dissatisfaction becomes permanent practice.
- **(e)** Behaviour change: the token check that "is a check like any other, and it is not
  one at all"; "an almanac my method does not require. One date next month is ringed,
  without cause." The prologue's hand above the key returns as the pen above the margin —
  the frame completes without comment.
- **(f)** Lingering image: the moth taped in beside the last note, "the moth and the margin
  together on the page", the moth "still unconvinced" — echoing Case I's *Proofs I Do Not
  Argue With*.
- **(g)** Unexplained: what the beings want, what happens next — deliberately. The lecture
  problem: master's coda explained its thesis — "The stories do not keep us safe; they
  keep us attentive. We live by the text. We survive by the small, retold stories…" —
  which board #294 assigns: embody, don't lecture. Delivered at
  `review/294-supernatural-coda` @ b5b8fcb: the thesis is replaced by behaviour ("I keep the
  dossier the way I keep the room lit…"; "I have begun to say *demon* in the register I keep
  for the weather, and I no longer hear myself do it"), and the MUST HAVES phrase "…like
  myself—skeptics who have seen just enough to be superstitious" survives organically.

---

## §6 Repetitive machinery register (marked in current master)

1. **The stock shape**: anomaly → procedural reconstruction → qualification of
   explanations → aphoristic Field Note. Visible in I, II, V, VII openings and in every
   case's closing gesture. This is the issue's core diagnosis: "after Case II, a reader
   can predict many endings."
2. **The Field Note template**: Field Notes #1, #5 and #6 all open with the identical
   formula "Horror, in our trade, is the X—…" (clean error / clean failure / margin). Three
   iterations of one cadence. Partly resolved by the delivered rewrites: #295 replaced #5
   with "I keep the times in a column, and the column has no incident to explain it", and
   #287/#289 reworded #2 and #3; #1 and #6 still share the formula, so two iterations remain.
3. **The verification tic**: "I read both again" (I — but this is the clerk's line inside the
   retold testimony, a different evidentiary distance than the narrator's own gestures),
   the experiment table (II), "I read the article twice, the way I read incident reports"
   (VI), "I checked the logs twice" (VII). The narrator's own tic proper runs II–VII;
   currently a motif, and on its later uses it becomes mechanical. Stratify: later cases
   should *act* the compulsion rather than narrate it.
4. **Cold coffee**: Case I's closing ("our coffee had gone cold"), Case II ("My coffee had
   gone cold where it stood"), Case IV ("lights on, coffee going cold"). Three uses — cut or
   vary two.
5. **The skepticism reflex in later cases**: "I do not claim it means anything" (III),
   "I do not adopt it" (IV), "I marked it as his, motivated and uncorroborated" and "I did
   not write a conclusion" (V). Under the 2026-10-13 direction these compulsory
   qualifications retire from III–VII; uncertainty may remain about meaning and intent,
   not existence. Delivered: #287 dropped "I have not decided" and #289 dropped "I do not
   adopt it"; the V qualifications remain pending #286.
6. **Bridge formula**: each later case opens by re-listing how it reached him ("the way I
   hear about most things now…", "the way I come to most of these cases…"). Twice is a
   dossier habit; more becomes tic. This branch removed both; the #287/#295 rewrites restore
   them, so the tic survives unless the merge keeps the removals (see integration conflicts).

## §7 Narrator progression — three specific decisions, causally seeded

Each decision below is something the later narrator does that his earlier self could not,
each seeded by a named earlier event:

1. **The loop-bound double-check (post-IV, Case IV closing).** "Since I compiled this
   file … I read loop bounds twice. I check the diff of anything that touches a limit. I do
   not tell anyone this is why." Earlier self (Case I): "I write down the useful parts and
   leave some of the commentary out" — discriminating, dismissive of ritual. Seed: IV's
   unverifiable legend and the team's paired-bound ritual — "I recognize the ritual. I
   have my own version." The change: ritual stops being other people's and becomes his,
   privately kept, unconfessed.
2. **The retrograde calendar (post-V, Case V).** He delays an ordinary migration and
   keeps a private retrograde calendar — "I noticed that I had begun to treat a planetary
   position as a scheduling input, and that noticing did not stop me." Earlier self
   (Case II): underlined *timing* in the margin — a hypothesis recorded to be falsified.
   Seed: the perfect column of check marks and the operator's log with "the handwriting
   got worse in the later entries". The change: the earlier narrator records tests to
   disconfirm; the later narrator records dates to obey.
3. **The check-that-is-no-check (post-VI, into VII and the coda).** In VII he packs the
   memory-testing drive "which a dead database has no use for" and notices "I was hoping
   it would be strange"; in the coda he performs the token check — "It is a check like any
   other, and it is not one at all" — and rings a date "without cause" in "an almanac my
   method does not require". Earlier self (prologue/Case II): instruments were attached
   as professional course, and the 04:56 hesitation was a stop *before acting* — doubt
   about whether to measure. Seed: VI's clean result ("And I cannot stop thinking about
   how clean that was") and VII's ordinary one that "no longer restores the narrator's
   peace". The change: the hesitation has moved from the instrument to the margin — he no
   longer doubts whether to check; he doubts anything, including checks, could ever be
   enough.

Frame note: the prologue's "hand sometimes stops above the key, and I have learned not to
ask it why" and the coda's pen stopped above the blank margin are the same gesture at
different temperatures — the prologue gesture is incuriosity; the coda gesture is ritual.
No fourth gesture should imitate the 04:56 hesitation (Issue instruction: preserve it as
exemplar).

### Deterioration ledger — observable across the arcs

The three decisions above are the load-bearing turns; the ledger below makes the whole
descent observable case by case, so no two stages read as the same note. Each row is a
behaviour the narrator did *not* have at the stage before.

| Arc | Observable behaviour (this arc) | New since | Seeded by |
|---|---|---|---|
| Prologue | reads a log twice "as if the second look were the one that counted"; the hand stops above the key, unasked | — (baseline) | the uncommanded valve |
| I Schaerbeek | discriminating and unhurried — "write[s] down the useful parts"; no field note that afternoon | baseline competence | (earns the trust the shift spends) |
| II Heisenbug | "begun to dislike successful tests"; the 04:56 hesitation — a stop *before* measuring | suspicion → superstition | observation-sensitive reversals |
| III Demon | says *demon* aloud in the tone of *race condition*, and does not stop | word-ownership | the being's presence |
| IV Leprechaun | reads loop bounds twice; checks any diff touching a limit; "I do not tell anyone this is why" | first owned, unconfessed ritual | the team's paired-bound ritual |
| V Mercury | treats a planetary position as a scheduling input; keeps a private retrograde calendar | records dates to *obey*, not to falsify | the perfect column; the operator's log |
| VI Crocodile | disproportionate checks "in a column, with the time"; "cannot stop thinking about how clean that was" | warps a *null* result into signal | the clean boundary |
| VII Rack C | packs a memory-testing drive a dead database has no use for; hopes it would be strange | dreads the ordinary | VI's clean result |
| Coda | token check that "is not one at all"; a date ringed "without cause"; the pen stopped above the margin | permanent ritual; the frame closes | all of the above |

The ledger is cumulative: each row presupposes the rows above it. The prologue gesture
(incuriosity) and the coda gesture (ritual) are the same hand at different temperatures —
that symmetry is the deterioration made visible.

## §8 Proposed case-local revisions (for owners — not applied by #277)

These are concrete before/after examples demonstrating improvement over the current
master. They are proposals; #277 does not edit independently owned sections.

**Example 1 — Case VII closing (owner #293). Delivered at `review/293-case-vii-mundane-crash`
(5cc886d).** Remove consolation without lecturing:

- Before: "It is a strange thing to be relieved by a broken air conditioner. … Some failures
  are boring, and I can still accept one."
- After (candidate): keep the strangeness, drop the consolation — e.g. end on the margin
  watched closing ("The margin between working and gone is measured in degrees, and I had
  spent the afternoon watching it close") plus one behavioural tell that he cannot look
  away (a second log re-check he does not record). Satisfies Intent $id-9421142343424984:
  acceptance without restoration.

**Example 2 — Field Note template (owners of I–VII). Partly delivered: #295 broke #5.**
Break the triple "Horror, in our trade, is the X" cadence at least once — e.g. Field Note #6
keeps the formula (it is the last of the seven case notes, though the coda appends a "Field
Note (last)" in a different register) while #1 and #5 take different shapes, so the
collection's aphorisms do not rhyme mechanically. #5 is now "I keep the times in a column,
and the column has no incident to explain it"; #1 and #6 still rhyme.

**Example 3 — Coda lecture (owner #294). Delivered at `review/294-supernatural-coda`
(b5b8fcb).** Replace the stated thesis with embodied closure: cut or compress "The stories
do not keep us safe; they keep us attentive. We live by the text. We survive by the small,
retold stories…" into the existing rituals (token check, ringed date, pen stopped), keeping
the MUST HAVES sentence "…like myself—skeptics who have seen just enough to be superstitious"
organic to the final pages. The delivered coda replaces the lecture with "I keep the dossier
the way I keep the room lit…" and keeps the MUST HAVES sentence.

**Example 4 — Case III bridge (owner #287). Delivered at `review/287-case-iii-integration`
(296aa30).** When the case is rebuilt around the real demon and the lost collision: delete
"I do not claim it means anything" and the "I have not decided" verdict (node $n84720); the
adjacency note may stay as record-keeping, not as doubt. The delivered rewrite does exactly
this, replacing the verdict with "I do not know what the being wanted. I know what it said.
I know what was taken."

## §9 Distinct-engine verification

No two cases share a main dramatic mechanism, and each has a distinct closing effect:

| § | Unique dramatic engine | Closing effect |
|---|---|---|
| Prologue | inaugural breach → the dossier is founded | unease; the telephone still ringing |
| I | elimination succeeds procedurally, fails humanly ("very probably") | damaged trust; the unconvinced moth |
| II | observation alters what can be established (blank seventh row) | an unchosen test; *The thing hates to be watched* |
| III | real being + meaning of its warning; proof vanished | conviction and loss, not a verdict |
| IV | folklore infects operational procedure (paired bounds) | a permanently doubled check |
| V | selection/correlation → mystic conviction (perfect column) | a date he has always known |
| VI | absurd negative control; warped causal attention | a clean result he cannot stop checking |
| VII | mundane failure, irreversible human cost | acceptance without consolation |
| Coda | embodiment of permanent change | the stopped pen; the margin left blank |

Cases I and II both involve "no trace left", but their engines differ: I's world is
indifferent (neutral observation, absent trace), II's is responsive (the measurement
disturbs). III and IV both involve real beings, but III is presence-and-warning (a being
that speaks once and is lost with its proof), IV is presence-and-practice (a being that
acts silently and is answered with ritual). V and VI both tempt pattern-thinking, but V
succeeds as mysticism (the correlation holds and converts him) while VI fails as causality
(there is no correlation and he checks anyway). VII is the control: the explanation
completes and the discomfort remains.

Delivery note (2026-10-14): the delivered #287, #289, #293, #294 and #295 branches realize
this table in prose (III, IV, VII, coda, VI respectively); V is still pending #286 and
Cases I–II remain owned by #278. No two delivered cases share a main mechanism, and each
closes on the effect in the right-hand column.
