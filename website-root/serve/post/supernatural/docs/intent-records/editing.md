$id-8533398047057411
title: Maintain a sentence-level meaning graph
date: 2026/09/23
source: @ottojung
kind: requirement

Agents working on the manuscript maintain `docs/meaning-graph.md` as a current graph representation of what the prose is doing. Coverage is exhaustive and one-to-one: every sentence in `supernatural.md`, including sentences inside local directive blocks, has exactly one graph node. Sentences are never grouped into a shared node and coverage is not allowed to remain partial. The graph must be useful for reasoning about revisions, not merely a paraphrase of the text.

$id-9187217062069867
title: Meaning graph records communicative purpose
date: 2026/09/23
source: @ottojung
kind: requirement

Every graph node uses the required `$n{RAND}` / `text` / `intent` / `style` / `continuity` format. The `text` field reproduces the source sentence exactly. The analytical fields record enough information to preserve what the sentence is trying to communicate, what the reader should infer, what the narrator appears to believe, its rhetorical and stylistic work, and the chronology, causality, motifs, setup, payoff, ambiguity, jokes, withholding, and other dependencies that matter to revision.

$id-4034180152671277
title: Meaning graph is precise but deliberately ad hoc
date: 2026/09/23
source: @ottojung
kind: requirement

The meaning graph has a fixed node schema: `text`, `intent`, `style`, and `continuity`, under a random five-digit `$nNNNNN` ID. Do not replace those fields with ad hoc node shapes or separate edge inventories. Precision belongs inside the required analytical fields, especially `continuity`, which may reference other node IDs when useful. The graph should be as precise as needed to expose semantic, causal, rhetorical, structural, and stylistic relationships that prose-only reading might otherwise blur.

$id-2642614869480108
title: Revisions preserve semantic and inferential work
date: 2026/09/23
source: @ottojung
kind: requirement

A revision is not an improvement merely because its sentences are smoother. Before accepting a material rewrite, compare it with the incumbent through the meaning graph and check what literal claims, implications, reader inferences, narrator commitments, jokes, ambiguities, motifs, setup, and payoff are gained or lost. Accidental loss of useful work is a defect even when the replacement sounds more polished.

$id-6039315211561510
title: Refinement loop seeks high-leverage defects
date: 2026/09/23
source: @ottojung
kind: requirement

Recurring writing work should repeatedly read the current manuscript, diagnose the most important current defect or small set of tightly related defects, make a targeted revision, compare it against the incumbent, keep it only when it is a reasonably clear improvement under the live intents, update the meaning graph, and continue. The loop should improve the actual manuscript rather than merely generate reviews, scores, plans, or inventories of possible work.

$id-0577078138009141
title: Holistic audits accompany local editing
date: 2026/09/23
source: @ottojung
kind: requirement

The refinement loop periodically audits the manuscript at larger scale for contradictions with intent, meaning-graph inconsistencies, continuity errors, causal gaps, weak or dropped motifs, pacing problems, voice drift, unresolved promises, accidental repetition, over-explanation, under-motivated transitions, and factual or sourcing problems. Local line editing must not substitute for these larger checks.

$id-9763436880715349
title: Do not optimize toward generic prose
date: 2026/09/23
source: @ottojung
kind: requirement

The loop must not keep rewriting merely because a model can propose another version. Preserve distinctive phrasing, oddness, restraint, asymmetry, implicit humor, and productive discomfort when they are doing useful work. When candidate and incumbent differ mainly by taste and the improvement is unclear, retain the incumbent rather than sanding the manuscript toward generic literary smoothness.

$id-9688210860921309
title: Human intent outranks autonomous taste
date: 2026/09/23
source: @ottojung
kind: requirement

Agents may autonomously diagnose and revise prose, but they must not silently change the collection's intended beliefs, case premises, narrator stance, escalation, or other live Intent Records in order to make a revision easier. When a promising revision appears to require a change in intent, surface that as a human decision instead of treating the agent's literary preference as authority.
