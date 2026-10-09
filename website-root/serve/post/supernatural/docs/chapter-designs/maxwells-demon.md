# Chapter Design — Case III: Maxwell's Demon

**Status:** design only, human review required. This document is a blueprint; it does not change chapter prose.
**Branch:** `design/229-maxwells-demon` (non-main).
**Board issue:** #229 — "[Supernatural] Case III: Maxwell's Demon — design and goals".
**Target manuscript:** `website-root/serve/post/supernatural/supernatural.md`, §III (currently lines 313–324, a `<NOTE>`-only stub with no prose).
**Target deliverable of the eventual prose pass:** a new §III that satisfies the live Intent Records, the local `<NOTE>` block, and the acceptance tests below, without changing authorial goals.

---

## 1. Mandate and non-goals

This document specifies **what Case III should do and how a future revision can verify it**. It is explicitly not an edit to `supernatural.md`.

In scope:

- the choice of a **verified or credible extraordinary-but-possible computational coincidence**, with a defensible probability argument;
- the **frightening developer dream** that must precede the event and warn of a curse;
- scene beats;
- the reader's anxiety curve and the **felt fear**;
- believable **human stakes** and **actual operational danger**;
- **witnesses** and their knowledge boundaries;
- **contradictory evidence**;
- the narrator's arc and the case's **evidence strength**;
- voice, lore, chronology, and the case transitions in and out;
- measurable acceptance tests;
- alternatives for the human author.

Out of scope / non-goals:

- rewriting chapter prose;
- changing the seven-case structure, narrator stance, escalation, or any live Intent Record;
- resolving the intended ambiguity (the ordinary and the numinous must both remain live);
- proving a literal demon;
- asserting that the coincidence had a supernatural cause;
- deleting or contradicting the documented technical substrate.

The manuscript's local directive block (§III `<NOTE>`, `supernatural.md` lines 315–324) and the live Intent Records are the governing constraints. Where this design proposes something that would require an intent change, it is flagged in §18 as a **human decision**, not assumed.

---

## 2. Live constraints this case must satisfy

### 2.1 Local `<NOTE>` constraints (`supernatural.md` 315–324)

Verbatim directives:

- "Tell a made up story about a state that is extremely unlikely, though possible, to happen, but did happen."
- "For example, an MD5 hash collision."
- "Then, add a legend that one of the developers saw a large, terrifying demon that appeared to him in a dream, and that demon told him that the server room is cursed."
- "Ideally, find a real world example of something extremely unlikely happening, and use that as the basis for the story."
- "Anchor the highly improbable event in a credible technical substrate and give its consequences tangible human weight before the dream seems prophetic."
- "Make the dream terrifying as an experience while preserving the possibility that its apparent prediction is retrospective pattern making rather than proof of a literal demon."

Two of these are also editorial constraints added on 2026/10/09 (matching `$id-5364595046057851`): the event must be anchored and weighted **before** the dream seems prophetic, and the dream must be terrifying **as an experience** while remaining non-probative.

The `MD5` line is explicitly an **example**, not a mandate. The issue text for #229 strengthens this: the coincidence must have a **justified probability**, not a hand-wavy MD5 claim. §4 and §5 explain why a raw "MD5 collision happened by accident" is the wrong anchor and choose a stronger one.

### 2.2 Relevant Intent Records

| ID | Title | Bearing on Case III |
| --- | --- | --- |
| `$id-8506027753346938` | Maxwell's Demon couples a dream warning to an improbable event | Primary case premise: genuinely extraordinary but technically possible event, ideally grounded in a real-world extreme improbability; dream precedes the event; the event gives the warning retrospective force without proving the demon. |
| `$id-5364595046057851` | The reader must feel the danger and dread | Requires believable human stakes and escalating behavioral/emotional consequences while preserving technical credibility and skeptical ambiguity; no arbitrary monsters or overwrought metaphor. |
| `$id-0964292624358295` | Horror and humor emerge from serious procedure | Horror/uncanniness must arise from meticulous procedure; no announced jokes or generic horror decoration. |
| `$id-0861352612251497` | Skeptical surface for skeptical readers | Narrator presents operational detail, alternatives, qualifications; supernatural conclusion hinted, not declared. |
| `$id-9264982270043622` | Narrator privately leans supernatural | Belief is private, reluctant, not performed for comic effect. |
| `$id-1563163086970281` | Escalating loss of ordinary explanations | Case III is the mid-collection turn: ordinary explanations remain available but the narrator's willingness to entertain others clearly increases. |
| `$id-7350745426882596` | Escalation is epistemic as well as supernatural | Show the narrator spending effort preserving skeptical form while entertaining an unordinary premise. |
| `$id-6418273059462718` | Do not announce the manuscript's epistemic strategy | No narrator-as-author statements advertising that a metaphysical explanation is optional/unnecessary. |
| `$id-9688210860921309` | Human intent outranks autonomous taste | Alternatives in §17 are proposals; they do not silently change intent. |
| `$id-7494998113772687` | Seven-case dossier structure | Case III stays a principal case; no added principal cases. |
| `$id-9342987960007338` | Leprechaun case treats folklore as operational legend | Case III must hand Case IV the *distance* of legend; it may use a legend but must not spend Case IV's folkloric move. |

### 2.3 Meaning-graph nodes that encode current intent

- `$n70953` — Case II's closing note, *"The thing hates to be watched"*: the immediate predecessor and emotional precondition.
- `$n23590` — "Tell a made up story about a state that is extremely unlikely, though possible, to happen, but did happen."
- `$n33904` — "For example, an MD5 hash collision."
- `$n91416` — the demon-dream legend directive.
- `$n27948` — "Ideally, find a real world example…"
- `$n32131` — "Anchor the highly improbable event in a credible technical substrate and give its consequences tangible human weight before the dream seems prophetic."
- `$n50435` — "Make the dream terrifying as an experience while preserving the possibility that its apparent prediction is retrospective pattern making rather than proof of a literal demon."
- `$n35689` — Case IV's opening sentence, the successor.

A future prose pass must update these nodes in the same change; this design pass changes no manuscript sentence, so no graph node changes are required here.

---

## 3. Case function in the collection arc

- Case I (Schaerbeek) is the sane case: a real anomaly with a conventional explanation, ending on a taped specimen (the Mark II moth).
- Case II (Heisenbug) is the case whose central object **refuses to be a specimen**: watching suppresses it, and the narrator ends with a private animistic note.
- Case III (Maxwell's Demon) is the **first case with a witness to something that should not exist and cannot be verified**. It couples a *documented* impossibility (a coincidence whose probability is effectively zero) with an *undocumented* legend (a dream of a demon). Its job is to make the reader feel that the world may have an intention without ever proving one.
- Case IV (Leprechaun) will make a folkloric sighting into operational legend. Case III must therefore be the case that establishes **how a legend is weighed** — strong evidence next to weak testimony, with no verdict.

Case III is the hinge from "ordinary explanation, available but no longer soothing" (Case II) to "the world itself seems to act" (Cases IV–VI).

---

## 4. Choice of coincidence: what not to use, and why

The `<NOTE>` offers MD5 as an example. The #229 issue explicitly rejects a hand-wavy MD5 claim. The reason is technical and should be stated in the design so the eventual prose is honest:

- **Practical MD5 collisions are not accidental; they are constructed.** Wang et al. (2004) and the chosen-prefix work (Stevens et al.) generate collisions deliberately. By 2014 a chosen-prefix MD5 collision cost about **$0.65 and 10 hours on one cloud GPU instance** (Nathaniel McHugh), and the Flame malware (2012) used one to forge a Microsoft code-signing certificate. An "MD5 collision that just happened" is therefore either false or, if it truly occurred, evidence of a hidden deterministic cause — which is a different and better story.
- **A true accidental cryptographic collision does not happen.** SHA-1's first collision (SHAttered, 2017) required years and Google-scale compute and was still deliberately constructed; it has not been observed accidentally. So the honest anchor is not a hash collision at all.
- **The right anchor is an entropy collapse that produces an impossible-looking sameness.** Real, verified cases exist where two or more machines that should each hold a unique secret turn out to hold **the same secret**, and the probability of that by chance is not merely small but absurd. This is exactly "a state that is extremely unlikely, though possible, to happen, but did happen," and it has a documented, mundane, yet uncanny cause.

### 4.1 Recommended anchor: the shared host key (duplicate cryptographic identity)

A fleet of servers is provisioned from a machine image. At some later point, two (or more) of them are found to have **byte-identical SSH host keys** — the same public key, hence the same fingerprint, hence (if the private half was also baked in) the same private identity.

This is the **recommended** anchor because it is:

- **Real and verified** (Hetzner's duplicate Ed25519 host keys, 2015; Juniper routers with duplicate host keys; cloned-VM key reuse; LightNode's precomputed host keys, 2025; the RSA shared-prime surveys, 2012; the Debian OpenSSL collapse, 2008 — see §5.3 and §14);
- **Extraordinary** (a 256-bit secret matching by chance);
- **Technically possible** (it did happen, and the mechanism is understood);
- **Operationally dangerous** (impersonation, man-in-the-middle, cascade compromise);
- **Thematically exact**: a hidden process has produced *order* (sameness) where *disorder* (uniqueness) was expected. That is Maxwell's demon.

The case can call the anomaly by its nickname: a hidden sorter that appears to make the unlikely certain. The narrator need not accept the nickname as metaphysics; he can note that the engineers gave the bug a name, the way Case I's operators gave the moth a name.

### 4.2 Rejected or secondary anchors (for review; see §17)

- **A raw MD5/SHA-1 collision as the central event.** Rejected: not accidental, and the cost is now trivial, so it cannot carry "extremely unlikely." It may appear as a *foil* the narrator explicitly declines (a colleague proposes "maybe it's a hash collision"; the narrator shows why that is the wrong shape of improbability).
- **RSA shared-prime factorisation as the central event.** Strong and real, but it is a population statistic rather than a single dramatic, witnessed event. Recommended as **documented escalation** (§5.3) rather than the in-chapter core.
- **A duplicate random UUID / nonce.** Real in principle, but verified wild cases are usually the same entropy story; the host key is more legible and more dangerous.
- **A pure mathematical coincidence (π digits, an almost-integer).** On-theme for "extreme probability" but lacks operational danger and human stakes.
- **A cosmic-ray / single-event-upset bit flip.** Forbidden by continuity: Case I already owns that substrate; Case III must not repeat it.

---

## 5. Probability: the justified argument (not hand-wavy)

The case's spine is a **computation the narrator can actually do**. This is what distinguishes it from the `MD5` example and satisfies the #229 "justified probability" requirement. Numbers below are the design's targets; the prose should present them as the narrator's back-of-the-envelope, not as a lecture.

### 5.1 The coincidence is impossible by chance

An Ed25519 public key is 32 bytes = 256 bits. If each host key is drawn independently and uniformly from that space:

- Probability that a **specific second** server reproduces the first's key: `2^-256 ≈ 8.6 × 10^-78`.
- Probability that **any pair** in a fleet of `N` servers collides (birthday bound): `≈ N(N−1)/2 · 2^-256`.
  - `N = 10`: `≈ 1.2 × 10^-76`.
  - `N = 100`: `≈ 4.9 × 10^-74`.
  - `N = 10,000`: `≈ 4.9 × 10^-70`.

For scale: the observable universe has roughly `10^80` atoms; the age of the universe is about `4 × 10^17` seconds. A `10^-74` event is not "unlikely"; it is **outside the reach of chance** by dozens of orders of magnitude. The narrator's conclusion is not "wow, a coincidence" but "chance is not the explanation."

### 5.2 The hidden cause is an entropy collapse

The mundane explanation is that the key was **never drawn from a 2^256 space**. Either it was baked into the image (effective entropy ≈ 0 bits) or the first boot drew from a **frozen/starved entropy pool** (the Linux boot-time entropy hole; headless and virtualised machines with no hardware RNG and no disk activity). The "coincidence" is a mirage: two servers did not independently draw the same random secret; a hidden process made their draws identical by removing the randomness.

This is the Maxwell's-demon reading, stated without metaphysics:

- The demon of the thought experiment sorts molecules to create order, apparently for free.
- Here, a hidden sorter created order (identical keys) where disorder was expected.
- The information-theoretic resolution of Maxwell's demon is that the sorting/erasure has a **cost** (Landauer). In this case the cost is hidden too: it is the loss of every machine's individuality, paid silently at provisioning.

The narrator may use the name "Maxwell's demon" as the engineers' nickname for the anomaly, and may note the physical analogy once, dryly — but he must not turn the case into a physics lecture (see §15, voice).

### 5.3 The phenomenon is documented and widespread (escalation, not decoration)

The real-world evidence is strong and should appear in the case's endnotes and in one escalating in-chapter survey beat:

- **Hetzner (2015):** a provisioning-script bug caused an **identical Ed25519 SSH host key** to be reused across installations of the same OS image for months (April–December 2015); the fingerprint `7f:0e:75:35:5b:fe:bd:a6:df:97:7b:fd:0f:b7:65:7b` appeared on unrelated servers. Hetzner notified affected customers and called it a man-in-the-middle risk.
- **Juniper JUNOS:** identically configured routers could generate the **same SSH private key** because of limited entropy, especially on systems without ATA disks or CompactFlash.
- **Cloned VMs / templates:** deploying multiple machines from a template that already contains `/etc/ssh/ssh_host_*` yields identical host keys.
- **LightNode (2025):** an Internet-wide scan found only **478 distinct `ssh-rsa` host keys across ~29,776 listeners**; one key was served by more than 10,000 addresses. Roughly one in three of the provider's systems shared a single host key.
- **Lenstra et al., "Ron was wrong, Whit is right" (2012)** and **Heninger et al., "Mining Your Ps and Qs" (2012):** among millions of RSA keys, about **0.2–0.5%** were factorable because two moduli shared a prime — a probability of roughly `2^-512` or smaller under true randomness. Heninger et al. computed private keys for ~0.50% of scanned TLS hosts and ~0.03% of SSH hosts.
- **Debian OpenSSL (2008, CVE-2008-0166):** a one-line change reduced the RNG to about **32,768 possible states**, so keys collided across unrelated systems worldwide.

The design's escalation: the case begins with **one** impossible duplicate, then reveals that the same hidden sorter has been at work **everywhere**. This is the "tangible human weight before the dream seems prophetic" the `<NOTE>` demands, and it gives the demon's curse a plausible domain: not one cursed room, but a curse that travels in images and boot sequences.

### 5.4 What the probability does and does not prove

- It **rules out chance** as the explanation of the duplicate.
- It **does not rule out** a mundane cause (entropy collapse); on the contrary, it points to one.
- It **does not prove** intention, a demon, or a curse.
- Its narrative function is to make the reader's mind reach for a cause that is *agent-like* — while the prose keeps the mechanical cause available. That gap is the case's horror.

---

## 6. The dream / legend (must precede the event)

### 6.1 Placement and precedence

The dream must occur **before** the duplicate is discovered. To keep the precedence documentary rather than merely remembered:

- The dream is **recorded at the time** — a message in a team chat, a note in a shift log, a drawing on a whiteboard, an entry in a personal notebook. The record is timestamped before the discovery.
- The dream is told in the case as a **legend** ("one of the developers…"), consistent with `$id-9342987960007338`'s separation of legend from verification. The narrator is reporting a story, not certifying a vision.
- The dreamer is **not** the person who later discovers the duplicate (recommended; see §17, Option D). This prevents the narrator from having to accuse a witness of motivated invention.

### 6.2 Making the dream terrifying as an experience

The `<NOTE>` says the dream must be terrifying **as an experience**. The design rules:

- Render it through **concrete physical detail and altered perception**, not adjectives. The dream borrows the server room's real sensory palette (heat, fan cycling, the smell of hot dust and ozone, the cold aisle, the door's draught, the LED constellations, the hum) and then bends one or two properties without announcing the bend.
- The demon is **large** and **present** — felt as pressure, scale, occlusion, a voice with a location — not described as a catalogue of horns. Its terror is that the room is **its** room, and the narrator/ dreamer is the intruder.
- The demon **tells** the dreamer that the server room is cursed. The line is flat, declarative, and not elaborated. The curse must remain a sentence, not an explanation.
- The dream ends with the dreamer **waking in or near the room** (or believing he never slept), and doing one small procedural act — checking a door, a log, a key — that shows the fear persists into waking without anyone saying "I was afraid."
- No Lovecraftian vocabulary; the uncanniness comes from the dreamer's perception of ordinary infrastructure (`$id-0964292624358295`).

### 6.3 Making the dream non-probative

The `<NOTE>` requires preserving the possibility that the apparent prediction is **retrospective pattern-making**. The design preserves it by four independent mechanisms:

1. **Vagueness.** The demon names no key, no collision, no machine. "The server room is cursed" is compatible with any later failure. Specificity is supplied by hindsight.
2. **Reconstructive memory.** The narrator notes that the dream was *written down* the night it happened but *interpreted* only after the duplicate was found; dreams are notoriously re-edited on retelling. The written record is short and ambiguous; the later telling is richer. The narrator can show the discrepancy (the chat log says "bad dream about the racks"; the later legend has a speaking demon and a curse).
3. **A sufficient mundane cause.** The entropy collapse explains the duplicate without any dream. The reader who prefers the mechanical story loses nothing.
4. **No diegetic confirmation.** No character connects the dream to the event as fact. The connection is assembled by the reader, or offered by the narrator as a temptation he declines to resolve.

### 6.4 Retrospective force (the target effect)

The dream gains force because **the probability makes chance implausible**. Once the narrator shows that the duplicate cannot be chance, the reader's mind has a hole where "coincidence" used to be, and the dream rushes into it — even though the entropy explanation fills the hole just as well. The case must let both fillings stand. That is the whole design: the reader *can* choose the demon, and *cannot* prove it.

---

## 7. Scene beats

Beat numbers are design units, not paragraph counts. The case should open after Case II's note, with a dateline or a clear time/place reset.

**Move A — The night and the dream (before the discovery).**

1. **Dateline and ordinary work.** A small infrastructure team; a deployment or a migration; ordinary competence and ordinary fatigue. Establish the server room as a known, legible place (heat, fans, cold aisle, cable runs, a door that doesn't latch).
2. **The long shift.** The dreamer stays late; the room at night has a different sound. Plant the sensory palette that the dream will deform.
3. **The dream.** The large demon; the cursed room; the flat sentence. Render as experience (§6.2). End with the dreamer waking/ believing he never slept, and one procedural tic (checking the door, the log).
4. **The record.** The dreamer writes it down (chat, notebook). Keep it terse and ambiguous — this is the documentary seed that will later look prophetic.

**Move B — The discovery (the coincidence).**

5. **The trigger.** The duplicate is found by an ordinary procedure: an auditor diffing `known_hosts`, a monitoring system flagging an unexpected host-key change, a new machine refusing to connect because its fingerprint "already exists," or a colleague comparing fingerprints on two servers. The discovery must be incidental, not sought.
6. **The match.** Two machines, different racks, different order dates, **identical fingerprint**. The room goes quiet in the way Case I's polling station went dry. Nobody says the word yet.
7. **The check.** They re-read the fingerprints, compare the key bytes, check the timestamps, try a third machine. The duplicate survives every obvious check.
8. **The human weight.** Before the narrator invokes probability or the demon: make the danger concrete. What does it mean that two machines share a secret? Someone can be impersonated without a warning. The fleet's trust is one key. A customer or an audit is exposed. (See §9.)

**Move C — The investigation and the probability.**

9. **The narrator's computation.** The back-of-the-envelope: 2^256; the birthday bound; the comparison to atoms and seconds. Chance is ruled out. This is the intellectual peak and must be exact, not florid.
10. **The mundane cause.** Entropy collapse: baked-in image keys, the boot-time entropy hole, headless/virtualised machines, `/dev/urandom` before it is seeded. The mechanism is understood and documented.
11. **Contradictory evidence.** The other key types are unique; the timestamps disagree with the story; the two machines were never clones of each other. The neat explanation is not quite clean. (See §10.)
12. **The escalation survey.** The same phenomenon, verified, is everywhere: Hetzner, Juniper, cloned VMs, LightNode, the RSA shared-prime surveys, Debian OpenSSL. One cursed room becomes a worldwide condition.

**Move D — The legend and the residue.**

13. **The dream resurfaces.** Someone (not necessarily the dreamer) mentions the old note; the legend is retold, now with the curse and the demon. The narrator juxtaposes the terse original record with the expanded telling.
14. **The narrator's refusal.** He does not decide. He notes that the dream was recorded before, that the probability is impossible, and that the mechanism is sufficient. He leaves the reader with both.
15. **The field note.** A single private line that carries the case's residue — the narrator's lean toward the numinous, written in the dossier's private register. (See §12.)

**Optional Move E — the manifest danger beat (human decision, §17).**

16. **An incident.** An accepted connection, an impersonation attempt, or a log line that shows the shared key was used. If included, it must be ambiguous (it could be a test, a misconfiguration, or an attacker) and must not prove the curse.

---

## 8. Felt fear and the reader anxiety curve

The distinctive fear of Case III is **not** Case I's "clean error" and **not** Case II's "it watches back." It is the fear of **hidden sameness and hidden intention**:

- that two things you believe are distinct are secretly the same;
- that a secret you hold is also held by an unknown other;
- that your fleet, your identity, your "unique" machine was never unique;
- that a hidden process is making the impossible happen *on purpose* (or as if on purpose);
- that a dream you dismissed knew the shape of the room before the room failed.

| Phase | Beats | Anxiety | Mechanism |
| --- | --- | --- | --- |
| Baseline | 1–2 | Low | competent team, legible room, ordinary night |
| Dream | 3 | High, then sealed off | dream terror; dismissed as a dream |
| Quiet | 4 | Residual unease | the terse written record |
| Discovery | 5–6 | Rising | the incidental, unsought match |
| Check | 7 | Dread | the duplicate survives every obvious check |
| Weight | 8 | Human fear | impersonation, cascade compromise, exposure |
| Vertigo | 9 | Intellectual vertigo | the probability computation rules out chance |
| Relief / re-hollowing | 10 | Partial relief | the entropy cause is mundane and sufficient |
| Contradiction | 11 | Re-hollowed | the neat cause doesn't fit cleanly |
| Scale | 12 | Cosmic dread | the phenomenon is worldwide and documented |
| Legend | 13 | Uncanny | the dream returns, now expanded |
| Refusal | 14 | Unresolved | no verdict; both explanations stand |
| Residue | 15 | Lasting fear | the private field note |

**Rule:** no comic detour may discharge dread after the discovery (beat 5). Humor before that is permitted and should be procedural (the room's absurdities, the team's shorthand). Humor after must be grim and technical.

**Rule:** the fear must be carried by behavior, concrete surroundings, small changes in confidence, and withheld certainty — never by declared emotion. No "I was afraid." The dreamer's tic, the auditor's repeated fingerprint comparison, the narrator's exact computation, the refusal to decide — these carry it.

---

## 9. Human stakes and actual operational danger

The `<NOTE>` requires "tangible human weight" **before** the dream seems prophetic. The design therefore puts the stakes at beat 8, immediately after the discovery and before the probability/demon material.

### 9.1 What is actually at risk

- **Impersonation / man-in-the-middle.** An SSH host key is how a client knows which server it is talking to. If two servers share the private key, an attacker who holds it can impersonate either without triggering a host-key-change warning. Clients keep connecting; nothing looks wrong.
- **Cascade compromise.** If one machine is compromised, the shared private key lets the attacker impersonate every machine that shares it. "Unique" becomes "all or nothing."
- **Escalation to signing identity.** If the shared key is a TLS key, a code-signing key, or a CA key, the danger grows from impersonation to intercepting customer traffic or shipping trusted-but-malicious updates (the Flame precedent used a forged signing certificate).
- **Silent, retroactive exposure.** Because nothing broke, the exposure may have existed for months. The danger is discovered late and cannot be bounded: no one can prove the key was never used by someone else.
- **Unrecoverable cause.** The entropy state at first boot is gone. Like Case I's particle and Case II's syscall, the cause leaves no artifact. The team can rotate keys, but cannot know what already happened.

### 9.2 The human faces (recommended shapes; see §17)

- **The dreamer:** a competent engineer who is embarrassed by the dream and does not want to be the person who "predicted" the outage. His stake is his standing and his own belief about what he saw.
- **The discoverer:** the security/ops person who found the duplicate by accident and must now decide whether to raise an incident that will freeze work and implicate the team. Echoes Case I's clerk who would have preferred a boring human mistake.
- **The customer or auditor:** an external party whose trust is the actual asset. The team's fear is not downtime but the loss of the assumption that its machines are who they say they are.
- **The attacker (implied):** the unseen other who may hold the shared secret. The case never needs to confirm an attacker to make the danger felt; the *possibility* is the fear.

### 9.3 Behavioral escalation (show, don't announce)

- Early: the team jokes about the "haunted" key and the dream.
- Middle: the jokes stop; the auditor keeps re-reading fingerprints; someone checks the other machines' keys and finds the pattern.
- Late: the dreamer avoids the room or the topic; the narrator computes the probability more than once; the field note is written privately.

**Constraint:** the stakes must arise from procedure and consequence, never from declared emotion.

---

## 10. Contradictory evidence (the case must not be too clean)

A horror case that resolves cleanly is not Case III. The design deliberately leaves the mundane explanation slightly incomplete, so the reader cannot fully close the door.

1. **Only one key type is duplicated.** The RSA, ECDSA, and DSA host keys on the same machines are unique. A wholesale image clone would have duplicated all of them. The duplicate is *specific* — which makes it stranger and complicates the simple clone story.
2. **The timestamps disagree.** The duplicated key's file time suggests it was generated at install, but a deeper check (package build time, image history) suggests it predates the machine. The "generated now" belief is wrong.
3. **The machines were never clones.** Different racks, different order dates, different roles — yet the same secret. The team's mental model ("each machine is its own") is falsified.
4. **The probability itself is contradictory.** The math says the event cannot be chance; the machine says it happened. The narrator must hold both.
5. **The dream is ambiguous and only partly recorded.** The original note is vague; the later legend is richer. The narrator shows the gap and declines to choose which is "real."
6. **No manifest harm (at first).** Nothing has visibly broken, so there is no confirming incident — only the latent possibility. This is the inverse of Case I (where the contradiction was visible in the numbers). Here the contradiction is invisible until someone looks.
7. **A competing mundane explanation that also fits.** If a colleague proposes "maybe it's a hash collision" (the NOTE's example), the narrator can show why that is the wrong shape of improbability (hash collisions are constructed, not accidental) — which both honors the NOTE and removes the easy answer.

**Design rule:** the contradictory evidence must be concrete and checkable, not atmospheric. It must never be resolved by the narrator. Each item is a fact that the *reader* must weigh.

---

## 11. Witnesses and knowledge boundaries

The case's evidentiary interest comes from **who can know what**. The design recommends a small cast with non-overlapping knowledge (see §17 for alternatives).

| Witness | Knows firsthand | Knows secondhand | Does not know |
| --- | --- | --- | --- |
| The dreamer | the dream; the room that night; his own waking tic | that a duplicate was later found (if told) | the probability math; the entropy mechanism |
| The discoverer (auditor/ops) | the fingerprint match; the re-checks; the timestamps; the other key types | the team's provisioning habits | the dream (until later) |
| The provisioning owner | the image/pipeline; how keys were (not) regenerated | — | that anything is wrong until told |
| The security researcher (optional, for §5.3) | the documented surveys and precedents | — | this specific fleet |
| The attacker (implied) | whether the key was used | — | never confirmed |
| The narrator | the dossier's reconstruction; the probability; the legend as reported | the team's accounts | whether the demon was real |

**Believability rules:**

- The dreamer may narrate only the dream and his own night. He may not narrate the discovery or the math.
- The discoverer may narrate only what a check can show: fingerprints, bytes, timestamps, other key types. He may not narrate the dream as fact.
- The narrator may compute the probability and report the legend, but may not certify either the mundane cause's exact moment or the demon.
- No witness may connect the dream to the duplicate as established fact. The connection is the narrator's temptation and the reader's inference.

---

## 12. Narrator arc and evidence strength

### 12.1 Where the narrator is in his arc

By Case III the narrator has (a) seen a clean error (Case I) and (b) written a private animistic note (Case II). Case III is where he begins to treat a **legend** as data. His method is intact — he computes, qualifies, and distinguishes — but his private register admits the possibility that the world has an intention.

- **Public stance:** skeptical and procedural. He rules out chance, names the entropy mechanism, cites the surveys, and refuses to conclude the demon is real.
- **Private state:** he keeps the terse original dream note beside the expanded legend; he computes the probability more than once; he writes a field note he would not say aloud.
- **Reader's position:** both explanations remain live; the reader is invited toward the demon by the very rigor that rules out chance.

This satisfies `$id-9264982270043622` and `$id-0861352612251497` and advances `$id-7350745426882596`.

### 12.2 Evidence strength

| Element | Status | Weight |
| --- | --- | --- |
| The duplicate host key | documented (real phenomenon) / fictional instance | **Strong**: byte-level, checkable, independently reproducible |
| The probability computation | mathematical | **Strong**: rules out chance |
| The entropy mechanism | documented technical cause | **Strong**, but the exact moment is unrecoverable |
| The wider surveys (Hetzner, Lenstra, Heninger, Debian) | documented | **Strong** (escalation) |
| The dream | secondhand legend, partly recorded | **Weak**: vague, reconstructable, one witness |
| The curse / demon as cause | supernatural implication | **Unproven**: never asserted |

The case's shape is therefore the inverse of Case II's: Case II had strong conditions and no cause; Case III has a strong *documented cause* for an event that nonetheless looks impossible, plus a weak legend that seems to explain it. The reader must weigh a strong mundane explanation against a weak numinous one and find the numinous one emotionally hard to dismiss.

### 12.3 The field note

The case should end with one private field-note line in the dossier's register, parallel to Case I's "clean error" and Case II's "The thing hates to be watched." Candidate directions (implementation chooses; see §17):

- about **sameness**: that the machines were never as many as they seemed;
- about **the cost of order**: that something paid for the coincidence where no one could see;
- about **the record**: that he wrote the dream down before he understood it, and cannot now tell which version he remembers.

The note must be private, short, and unqualified. It is the case's closest approach to belief and must not announce belief.

---

## 13. Voice and lore

### 13.1 Voice

- First-person past, precise, restrained; short declaratives for beats; layered sentences for mechanism and the probability.
- Technical diction exact and load-bearing: host key, fingerprint, Ed25519, `/etc/ssh/ssh_host_*`, entropy, `/dev/urandom`, boot-time entropy hole, GCD, known_hosts, man-in-the-middle, rotation.
- Italics for private thought and field-note register.
- **The dream is the one place diction may become uncanny**, but it must arise from the narrator's perception of the real room, not from generic horror vocabulary. No horns-and-brimstone catalogue; the demon's terror is scale, presence, and ownership of the room.
- No Lovecraftian vocabulary; no narrator-as-author statements about the epistemic strategy (`$id-6418273059462718`).

### 13.2 Lore

The case may draw on three lore layers, kept distinguishable:

1. **Technical lore (documented):** entropy, the boot-time entropy hole, key generation, shared-prime factorisation, the Debian OpenSSL collapse, the real duplicate-key incidents. These are cited, not invented.
2. **Collection lore (fictional frame):** the dossier, the field notes, the evidentiary categories (firsthand, reconstruction, secondhand, folklore), the recurring motifs (the room, the watching, the record, the specimen). Case III's new motif is **the record made before understanding** — the terse note that later looks prophetic.
3. **The demon lore (legend):** the demon is a *reported* figure, like Case IV's leprechaun will be. Case III should establish that a legend can be terrifying and still be weighed as weak evidence. The Maxwell's-demon name itself can be the engineers' nickname for the anomaly — a diegetic pun the narrator notes without explaining.

**Rule:** do not let the demon lore become a supernatural rulebook. The demon says one sentence and is never seen again by anyone who reports it. Its power is the reader's uncertainty, not a mythology.

---

## 14. Chronology

The case must be internally consistent and must keep the dream **before** the discovery. Recommended timeline (anchors to be preserved):

| When | Event | Function | Evidence status |
| --- | --- | --- | --- |
| T0, night | Deployment / migration; the dreamer sleeps; the dream; the terse written record | The dream precedes the event; the record is timestamped | Legend / private record |
| T1, provisioning | Machines built from the image; host keys "generated" | The hidden entropy collapse occurs (unseen) | Documented mechanism (reconstructed) |
| T2, weeks later | The duplicate is found incidentally (audit / monitoring / a refused connection) | The coincidence surfaces | Firsthand report |
| T3 | Re-checks: fingerprints, bytes, timestamps, other key types | The duplicate survives; contradictions appear | Firsthand report |
| T4 | The narrator's probability computation | Chance is ruled out | Mathematical |
| T5 | The entropy mechanism identified | The mundane cause | Documented technical cause |
| T6 | The wider survey (Hetzner, Juniper, LightNode, Lenstra, Heninger, Debian) | Escalation: the condition is worldwide | Documented |
| T7 | The dream resurfaces and is retold as a legend | Retrospective force | Secondhand legend |
| T8 | The field note | Residue | Dossier inference |

**Rules:**

- The original dream record must be datable before T2; the prose may show the timestamp or the team's later awareness that it was before.
- The expanded legend must be shown as a *later* retelling, so the reader can see the gap between the terse record and the rich story.
- The exact moment of the entropy collapse is **unrecoverable** — this is deliberate and echoes the collection's "no trace" theme.
- Real incidents (Hetzner 2015, LightNode 2025, Lenstra/Heninger 2012, Debian 2008) must be cited accurately in the endnotes and must not be misrepresented; the fictional fleet is a composite.

---

## 15. Transitions

### 15.1 Transition in (from Case II)

- Case II ends with an unresolved failure and the private note *"The thing hates to be watched."*
- Case III begins with a dream and a hidden sameness. The bridge is a **state of mind**, not a causal claim: a person who has just learned that a failure can behave as if watched is a person prepared to take a dream seriously.
- **Proposed bridge (diegetic, restrained):** the older narrator may note, in one sentence, that the previous case's note was still in the margin when the dream was written down — keeping the connection concrete (the notebook, the margin) and non-causal.
- **Do not** claim Case II caused the dream or the coincidence.

### 15.2 Transition out (to Case IV, Leprechaun of Off-by-One)

- Case III ends with a documented coincidence, a weak legend, and no verdict.
- Case IV escalates to folklore-as-operational-legend: an actual folkloric figure allegedly seen in the server room, with loop bounds "moved by one."
- **Proposed bridge:** Case III establishes the **evidentiary distance** of legend — a reported figure, a terse record, a rich retelling, a refusal to certify. Case IV spends that distance fully. The handoff is a method of weighing, not a plot thread.
- **Do not** let Case III's demon be confirmed, or Case IV loses the "legend at a distance" effect (`$id-9342987960007338`).

---

## 16. Preserved peaks and must-not-break list

1. **The dream precedes the discovery** and is terrifying as an experience.
2. **The probability computation** rules out chance with exact numbers.
3. **The documented cause** (entropy collapse) remains available and sufficient.
4. **The contradictory evidence** is concrete and unresolved.
5. **The legend is shown as a later, richer retelling** of a terse original record.
6. **No diegetic confirmation** of the demon or the curse.
7. **The human stakes** are concrete and arrive before the dream seems prophetic.
8. **The field note** is private, short, and unqualified.
9. **The seven-case structure and escalation** are unchanged.

---

## 17. Alternatives for human review

These are **proposals**, not intent changes. Each states what it would gain and what it risks.

### Option A — Anchor choice

- **A1 (recommended):** duplicate SSH host key from an entropy collapse, with the wider documented surveys as escalation.
- **A2:** RSA shared-prime factorisation as the central event. *Gain:* huge real data; *risk:* a statistic, not a witnessed event.
- **A3:** a constructed hash collision reframed as a "coincidence." *Gain:* matches the NOTE's example; *risk:* dishonest, and the issue forbids a hand-wavy MD5 claim.
- **A4:** a duplicate nonce / ECDSA key reuse (PS3/Android/Bitcoin). *Gain:* real and dangerous; *risk:* overlaps the entropy story with a more technical barrier.
- **Recommendation:** A1, with A2 as the escalation survey and A3 explicitly declined in the prose.

### Option B — Dream framing

- **B1 (recommended):** a legend told by the team, with a terse timestamped original record and a richer later retelling.
- **B2:** the dream narrated directly by the dreamer as firsthand. *Gain:* immediacy; *risk:* raises the dream's evidentiary weight and undercuts retrospective-force ambiguity.
- **B3:** the dream reported by the narrator as a rumor he cannot verify. *Gain:* maximal distance; *risk:* weakens the "terrifying as an experience" requirement.
- **Recommendation:** B1.

### Option C — Relationship between dreamer and discoverer

- **C1 (recommended):** different people; the dreamer is not the discoverer.
- **C2:** the same person dreams and discovers. *Gain:* personal dread; *risk:* tempts motivated invention and weakens the legend's independence.
- **Recommendation:** C1.

### Option D — Ending

- **D1 (recommended):** no verdict; the field note leans private belief without asserting it.
- **D2:** a restrained older-narrator line that the entropy cause was confirmed and the keys rotated. *Gain:* closure; *risk:* discharges dread and may read as debunking.
- **D3:** a manifest incident (an impersonation in the logs). *Gain:* concrete danger; *risk:* tips the case toward a crime story and may over-resolve.
- **Recommendation:** D1; D3 only as an optional, ambiguous beat (§7 Move E).

### Option E — Setting and team size

- **E1 (recommended):** a small, unnamed infrastructure team; a composite fleet; no real employer named.
- **E2:** a named real provider (Hetzner/LightNode) as the setting. *Gain:* verifiability; *risk:* misrepresents a real company and invites sourcing disputes.
- **Recommendation:** E1; cite the real incidents in the endnotes, keep the in-chapter fleet fictional.

### Option F — The demon's line

- **F1 (recommended):** exactly one flat sentence — the server room is cursed — with no elaboration.
- **F2:** a longer, riddling speech. *Gain:* atmosphere; *risk:* generic horror, and it makes the dream harder to treat as vague/retrospective.
- **Recommendation:** F1.

### Option G — Where the probability computation sits

- **G1 (recommended):** one focused passage in Move C, exact but concise.
- **G2:** threaded through the case as margin notes. *Gain:* voice; *risk:* dilutes the intellectual peak.
- **Recommendation:** G1.

---

## 18. Open questions and conflicts to surface

1. **Anchor.** Confirm A1 (duplicate host key) as the central coincidence, with the real surveys as escalation and a constructed hash collision explicitly declined. This is the main human decision.
2. **Fictional company.** Confirm E1 (unnamed composite) rather than naming a real provider.
3. **The manifest-danger beat.** Confirm whether Option D3 (an ambiguous incident in the logs) is wanted; it affects how "actual operational danger" is dramatised versus implied.
4. **Dream record medium.** Chat log, shift notebook, or whiteboard? Affects how documentary the precedence feels.
5. **Field-note wording.** Left to the prose pass; this design specifies only its register and function.
6. **No conflict found** between the local `<NOTE>` and the live Intent Records. The NOTE's "MD5" example and the issue's "justified probability" requirement are reconciled by treating MD5 as a foil (§4) and using the entropy/duplicate-key anchor, which satisfies `$id-8506027753346938`'s "real-world example of extreme improbability."
7. **Continuity caution.** Case III must not re-use Case I's SEU/bit-flip substrate or Case II's observation motif as its engine. Its distinctive engine is hidden sameness + hidden intention + a weak legend.

---

## 19. Measurable acceptance tests

A future prose pass is acceptable for review when all of the following hold. "Verify" is against the revised `supernatural.md` §III and its endnotes.

| # | Criterion | How to verify | Evidence |
| --- | --- | --- | --- |
| A1 | A verified/credible coincidence with a justified probability | read Move C | an entropy-collapse duplicate key; exact `2^-256`-class computation; no reliance on a "just happened" MD5 claim |
| A2 | The coincidence actually happened (documented) | read endnotes | Hetzner 2015 / LightNode 2025 / Juniper / Lenstra / Heninger / Debian cited accurately |
| A3 | A frightening developer dream precedes the event | locate timestamps | the dream record predates the discovery; the dream is rendered as experience |
| A4 | The dream warns of a curse | read dream beat | the demon says the server room is cursed, in one flat sentence |
| A5 | The dream is non-probative | read the legend + narrator | vague content, terse original record vs. rich retelling, sufficient mundane cause, no diegetic confirmation |
| A6 | Human stakes before the dream seems prophetic | order of beats | concrete impersonation/cascade/exposure stakes at beat 8, before §5.3 escalation and beat 13 |
| A7 | Actual operational danger | read stakes | impersonation, MITM, cascade compromise, unrecoverable exposure named concretely |
| A8 | Witnesses with bounded knowledge | map cast | dreamer / discoverer / provisioning owner / narrator do not exceed their knowledge (§11) |
| A9 | Contradictory evidence present and unresolved | locate items | at least four of §10's items appear and none is resolved |
| A10 | Narrator arc advances | read public vs. private register | skeptical surface intact; private field note leans without asserting |
| A11 | No supernatural assertion | read all diegetic sentences | no sentence claims the demon is real or caused the event |
| A12 | No epistemic-strategy announcement | read narrator sentences | no author-as-narrator line advertising the ambiguity as a strategy (`$id-6418273059462718`) |
| A13 | Voice consistent with the collection | read register | precise, restrained, procedural; no Lovecraftian vocabulary; uncanny diction only via perception |
| A14 | Humor implicit, not discharged | read beat 5 onward | no explanatory punchline after the discovery |
| A15 | Chronology monotonic and dream-before-event | check anchors | T0 < T2; documented events dated correctly |
| A16 | Transitions connect | read case boundaries | in: Case II's note as a state of mind; out: legend distance handed to Case IV |
| A17 | Structure unchanged | diff headings | seven principal cases unchanged; no new principal case |
| A18 | Design-only pass | git diff | this branch changes no `supernatural.md` sentence |
| A19 | Graph consistency | meaning graph | if prose changes, affected nodes updated with exact `text` and total coverage |

Optional quantitative guardrails (author to confirm): keep §III within roughly **1,400–2,200 words** (Case II is ≈ 950 words; Case III carries more evidentiary and probability material, so growth is justified, but the probability passage should stay focused).

---

## 20. Summary for the reviewer

Case III's engine is a **documented impossibility plus an unprovable legend**. A fleet of machines that should each hold a unique secret is found to hold the same secret, and the narrator can show with exact arithmetic that the match cannot be chance (`2^-256`-class, birthday-bounded). The mundane cause — an entropy collapse that made the "random" keys identical — is real, verified (Hetzner 2015, LightNode 2025, Juniper, the RSA shared-prime surveys, Debian OpenSSL), and sufficient. Before the discovery, one developer dreams of a large demon that says the server room is cursed; the dream is terrifying as an experience but vague, partly recorded, and only interpretable in hindsight. The case's distinctive fear is hidden sameness and hidden intention; its narrator rules out chance, names the mechanism, keeps the demon unproven, and writes one private note. The `MD5` example in the `<NOTE>` is honored as a foil and explicitly declined, because constructed collisions are not accidents. All alternatives are proposals for human decision, not changes to authorial goals.
