# Cross-case dramatic map

Editorial companion to `supernatural.md`, produced for Antonina board issue #277.
Date: 2026-10-13. Branch: `agent-1c6cb3aee7ac/cross-case-dramatic-map`.
Status: **diagnostic and directional**. It maps the current master manuscript, marks the
repetitive machinery the issue diagnoses, and records the 2026-10-13 human authorial
direction. Case bodies are concurrently owned by chapter issues (#278, #286, #287, #289,
#293, #294, #295); local NOTE-block reconciliation is owned by #296. This map proposes
case-local changes in §8 instead of applying them.

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

## Superseded directives (reconciled or pending)

Per the 2026-10-13 human direction, late-case supernatural ambiguity is no longer wanted:
by III–IV the beings are **real within the story**, V is deep astrological mysticism,
VI reveals subtle paranoia, VII stays objectively mundane but no longer consoles.
Status against live documents:

- Intent Records (`docs/intent-records/story.md`, `docs/intent-records/editing.md`):
  **already reconciled on master** (commits 505fd5e, 5cd4e52, 77e288e). No live Intent
  Record demands late supernatural ambiguity; nothing here rewrites them.
- Manuscript `<NOTE>`/`<MUST HAVES>` blocks: **not yet reconciled**. The preamble NOTE
  ("Let ordinary causal explanations remain intellectually available…"), the Case III
  NOTE ("For example, an MD5 hash collision… preserving the possibility that its apparent
  prediction is retrospective pattern making"), the Case IV NOTE ("Keep the folkloric
  sighting at the distance of reported operational legend"), the Case V NOTE ("We'll retain
  skeptics… without describing Mercury as a confirmed cause") and the Case VII NOTE
  ("a necessary palate cleanser… shows the narrator can still accept a sufficient ordinary
  explanation") all demand the superseded ambiguity. Owner: **#296**. Flagged, not edited.
- Case bodies III, IV, V, VII and the coda still encode the superseded treatment in prose.
  Owners: **#287, #289, #286, #293, #294** respectively. See §8.

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
- **(e)** Behaviour change: the young narrator "wrote down the useful parts and left some
  of the commentary out" — discriminating, unhurried. He does not write a field note that
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

## III. Maxwell's Demon — **conflict: master predates the human direction**

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

**Coordination:** owner #287 is rewriting this case on its own branch. This map does not
touch the section. Two forward notes for #287: the bridge sentence "a fleet of machines
that turned out to be fewer than they seemed" previews the old Ed25519 story and must be
re-pointed at the collision-and-loss premise; endnote 7 (duplicate SSH host keys) becomes
stale and should be re-cut to the collision substrate.

## IV. The Leprechaun of Off-by-One — **conflict: master centres the code mystery**

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

**Coordination:** owner #289 rewrites this case. The closing habit paragraph (the loop-bound
ritual) is the narrator's first durable superstition and must survive the rewrite intact;
it is the load-bearing seed for the coda's token check.

## V. Mercury in Retrograde — **conflict: master runs the statistical engine**

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

## VI. The Crocodile in Vienna

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
  the unease stays humanly intelligible. Per #295: avoid repeatedly describing the clean
  boundary as a "blast radius"; vary the inspections into physical unease and private
  repetition.

## VII. The Heat Death of Rack C — **conflict: closing lines console him**

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
  is the narrator's, not the machine's. Per #293, also repair the checkpoint-recovery
  plausibility (a checkpoint is not inherently a six-hour rollback) and coordinate the
  Rack C details (compressor vs the coda's clogged filter) with #294.

## Coda

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
  problem: the current coda explains its thesis — "The stories do not keep us safe; they
  keep us attentive. We live by the text. We survive by the small, retold stories…" —
  which board #294 assigns: embody, don't lecture. The MUST HAVES phrase "…like
  myself—skeptics who have seen just enough to be superstitious" must survive, integrated
  organically.

---

## §6 Repetitive machinery register (marked in current master)

1. **The stock shape**: anomaly → procedural reconstruction → qualification of
   explanations → aphoristic Field Note. Visible in I, II, V, VII openings and in every
   case's closing gesture. This is the issue's core diagnosis: "after Case II, a reader
   can predict many endings."
2. **The Field Note template**: Field Notes #1, #5 and #6 all open with the identical
   formula "Horror, in our trade, is the X—…" (clean error / clean failure / margin). Three
   iterations of one cadence. At least one should break the template.
3. **The verification tic**: "I read both again" (I), the experiment table (II), "I read the
   article twice, the way I read incident reports" (VI), "I checked the logs twice" (VII).
   Currently a motif; on its fourth use it becomes mechanical. Stratify: later cases should
   *act* the compulsion rather than narrate it.
4. **Cold coffee**: Case I's closing ("our coffee had gone cold"), Case II ("My coffee had
   gone cold where it stood"), Case IV ("lights on, coffee going cold"). Three uses — cut or
   vary two.
5. **The skepticism reflex in later cases**: "I do not claim it means anything" (III),
   "I do not adopt it" (IV), "I marked it as his, motivated and uncorroborated" and "I did
   not write a conclusion" (V). Under the 2026-10-13 direction these compulsory
   qualifications retire from III–VII; uncertainty may remain about meaning and intent,
   not existence.
6. **Bridge formula**: each later case opens by re-listing how it reached him ("the way I
   hear about most things now…", "the way I come to most of these cases…"). Twice is a
   dossier habit; more becomes tic.

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

## §8 Proposed case-local revisions (for owners — not applied by #277)

These are concrete before/after examples demonstrating improvement over the current
master. They are proposals; #277 does not edit independently owned sections.

**Example 1 — Case VII closing (owner #293).** Remove consolation without lecturing:

- Before: "It is a strange thing to be relieved by a broken air conditioner. … Some failures
  are boring, and I can still accept one."
- After (candidate): keep the strangeness, drop the consolation — e.g. end on the margin
  watched closing ("The margin between working and gone is measured in degrees, and I had
  spent the afternoon watching it close") plus one behavioural tell that he cannot look
  away (a second log re-check he does not record). Satisfies Intent $id-9421142343424984:
  acceptance without restoration.

**Example 2 — Field Note template (owners of I–VII).** Break the triple "Horror, in our
trade, is the X" cadence at least once — e.g. Field Note #6 could keep the formula (it is
the last) while #1 and #5 take different shapes, so the collection's aphorisms do not
rhyme mechanically.

**Example 3 — Coda lecture (owner #294).** Replace the stated thesis with embodied
closure: cut or compress "The stories do not keep us safe; they keep us attentive. We live
by the text. We survive by the small, retold stories…" into the existing rituals (token
check, ringed date, pen stopped), keeping the MUST HAVES sentence "…like myself—skeptics
who have seen just enough to be superstitious" organic to the final pages.

**Example 4 — Case III bridge (owner #287).** When the case is rebuilt around the real
demon and the lost collision: delete "I do not claim it means anything" and the "I have
not decided" verdict (node $n84720); the adjacency note may stay as record-keeping, not as
doubt.

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
