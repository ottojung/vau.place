# Supernatural story project rules

## Scope

These rules apply to the supernatural story collection in this directory and its descendants.

The primary manuscript is:

- `supernatural.md`

The manuscript is a work of fiction built around a mixture of real incidents, fictionalized retellings, invented cases, and an intentionally unreliable or at least increasingly superstitious investigator-narrator.

## Intent Records

Intent Records under `docs/intent-records/*.md` describe the **current desired properties** of this collection. They are not a history of superseded requirements; Git history carries that history. When intent changes, update or remove the live record so it states only current intent.

Every independently referenceable current intent has a stable opaque ID of the form `$id-<16 random decimal digits>`. Generate the digits randomly, give them no mnemonic or sequential meaning, and check existing Intent Records for collisions before use.

Keep the same ID while it denotes the same intent. Group related records into scoped files under `docs/intent-records/`.

If current Intent Records conflict, identify the conflicting IDs and surface the conflict instead of silently choosing one.

The manuscript's local `<NOTE>`, `<TODO>`, `<FIXME>`, and `<MUST HAVES>` blocks are also live local constraints unless a human explicitly supersedes them. If one conflicts with an Intent Record, surface the conflict rather than quietly discarding either instruction.

Do not edit an Intent Record merely to justify a prose change. Intent changes come from the human author; manuscript changes should satisfy the current intent.

## Meaning graph

Maintain `docs/meaning-graph.md` as a living analytical representation of the current manuscript.

The graph exists to make revisions reason about what the prose is doing, rather than merely making sentences smoother. It is intentionally ad hoc and may evolve as the manuscript evolves. Precision matters more than schema stability.

Represent the manuscript at sentence level by default. A graph node should identify the sentence or tightly inseparable sentence group and record, where relevant:

- what it literally says;
- what it is trying to communicate;
- why that information appears here;
- what the reader should infer beyond the literal statement;
- what the narrator appears to believe or commit to;
- its rhetorical or stylistic job;
- any joke, ambiguity, misdirection, or withheld conclusion that must survive revision;
- motifs or earlier material it echoes;
- later material it sets up or promises;
- dependencies on surrounding claims, chronology, causality, or character knowledge.

Use explicit edges when useful, such as `explains`, `implies`, `contrasts-with`, `sets-up`, `pays-off`, `causally-depends-on`, `echoes`, and `must-precede`. Add other edge types when the text needs them.

The graph is analysis, not scripture. If close reading shows the graph is wrong, update the graph. Do not deform good prose merely to preserve an obsolete graph description.

Before materially revising a passage, inspect its graph nodes and relevant incoming/outgoing edges. After accepting a revision, update the affected graph so it again describes the manuscript accurately. Do not leave stale semantic nodes behind.

If the graph does not yet cover a passage, establish adequate coverage before substantially rewriting that passage. It is acceptable to build the graph incrementally, but the long-term target is meaningful coverage of every sentence.

## Editing discipline

Prefer the smallest revision that solves the diagnosed problem. Preserve successful oddities, asymmetries, buried jokes, implications, and deliberate discomfort. Do not optimize prose toward generic smoothness, generic literary flourish, or a critic's scalar score.

When a change is subjective, compare the candidate against the incumbent and ask what specific property improved and what might have been lost. Keep the incumbent when improvement is not reasonably clear.

Treat continuity, chronology, impossible character knowledge, contradictions with current intent, and misrepresentation of sourced real-world events as hard defects. Treat voice, rhythm, pacing, subtlety, humor, uncanniness, and beauty as matters for argued comparison rather than mechanical scoring.

Real-world factual claims and references should be verified from reliable sources when they are materially changed. Keep documented fact, plausible interpretation, fictional embellishment, and narrator speculation distinguishable enough that the work does not accidentally present invention as documentary fact.
