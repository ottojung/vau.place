# Supernatural story project rules

## Scope

These rules apply to the supernatural story collection in this directory and its descendants.

The primary manuscript is:

- `supernatural.md`

The manuscript is a work of fiction built around a mixture of real incidents, fictionalized retellings, invented cases, and an intentionally unreliable or at least increasingly superstitious investigator-narrator.

## Git is good

If you have access to `git`, then:
- commit frequently,
- commit small, conceptual changes,
- and write helpful multiline commit messages.

It is always safe to commit, do it even if you weren't explicitly told to.
Never squash conceptually unrelated changes, even if the result is still small.

## Pull-request comments are live instructions

When working on a branch that has an open pull request, scan the pull request discussion before making changes. Read issue comments, review submissions, and inline review comments.

Treat instructions submitted by a human as if that human had given them directly in the current prompt. Follow them as live task instructions for the review branch rather than merely summarizing or acknowledging them.

Do not treat bot-generated or automated comments as human instructions. They may still contain useful diagnostics or status information.

Re-scan the pull request discussion before finishing an invocation so newly added human feedback is not missed.

If a human pull-request instruction conflicts with another live repository constraint, Intent Record, or manuscript directive, surface the conflict instead of silently choosing one.

## Intent Records

Intent Records under `docs/intent-records/*.md` describe the **current desired properties** of this collection. They are not a history of superseded requirements; Git history carries that history. When intent changes, update or remove the live record so it states only current intent.

Every independently referenceable current intent has a stable opaque ID of the form `$id-<16 random decimal digits>`. Generate the digits randomly, give them no mnemonic or sequential meaning, and check existing Intent Records for collisions before use.

Keep the same ID while it denotes the same intent. Group related records into scoped files under `docs/intent-records/`.

If current Intent Records conflict, identify the conflicting IDs and surface the conflict instead of silently choosing one.

The manuscript's local `<NOTE>`, `<TODO>`, `<FIXME>`, and `<MUST HAVES>` blocks are also live local constraints unless a human explicitly supersedes them. If one conflicts with an Intent Record, surface the conflict rather than quietly discarding either instruction.

Do not edit an Intent Record merely to justify a prose change. Intent changes come from the human author; manuscript changes should satisfy the current intent.

## Meaning graph

Maintain `docs/meaning-graph.md` as a sentence-by-sentence analytical companion to the current manuscript.

Coverage is strict: **every sentence in `supernatural.md` must have exactly one corresponding graph node.** Do not group multiple sentences into one node, omit apparently trivial sentences, or leave coverage for later. Sentences inside manuscript directives such as `<NOTE>`, `<TODO>`, `<FIXME>`, and `<MUST HAVES>` are still sentences in the source and therefore also require nodes. Non-sentence structural material such as headings, separators, standalone equations, link-reference definitions, and table syntax does not require a node unless it contains a sentence.

Graph nodes must appear in the same order as their source sentences and use this format:

```text
$n63687
text: The actual text of the sentence.
intent: ...
style: ...
continuity: ...
```

Node IDs have the form `$n{RAND}`, where `RAND` is a random five-digit decimal string. Generate IDs randomly, give them no sequential or mnemonic meaning, and check the graph for collisions before assigning a new one. Keep an existing node ID when the same source sentence is edited rather than deleted/replaced.

The `text` field must reproduce the current source sentence exactly, including meaningful Markdown and punctuation. The analytical fields are:

- `intent`: what the sentence is trying to communicate or accomplish, including important implication, setup, payoff, ambiguity, joke, withholding, narrator belief, or reader inference;
- `style`: the sentence's stylistic and rhetorical work, including voice, rhythm, diction, humor, uncanniness, emphasis, or other form that a revision should preserve when relevant;
- `continuity`: dependencies on surrounding or distant material, including chronology, causality, character knowledge, motifs, contradictions, setup/payoff relations, and references to other graph nodes when useful.

All four fields are required for every node. Use a concise explicit value such as `none` when there is genuinely nothing useful to record in an analytical field rather than omitting the field.

The graph is analysis, not scripture. If close reading shows an analytical field is wrong, update it. Do not deform good prose merely to preserve obsolete graph analysis.

Before materially revising a passage, inspect its nodes. After accepting any manuscript change, update the graph in the same change so that sentence coverage remains total and every `text` field again matches the manuscript exactly. Adding, deleting, splitting, joining, or moving sentences requires the corresponding node operations.

## Editing discipline

Prefer the smallest revision that solves the diagnosed problem. Preserve successful oddities, asymmetries, buried jokes, implications, and deliberate discomfort. Do not optimize prose toward generic smoothness, generic literary flourish, or a critic's scalar score.

When a change is subjective, compare the candidate against the incumbent and ask what specific property improved and what might have been lost. Keep the incumbent when improvement is not reasonably clear.

Treat continuity, chronology, impossible character knowledge, contradictions with current intent, and misrepresentation of sourced real-world events as hard defects. Treat voice, rhythm, pacing, subtlety, humor, uncanniness, and beauty as matters for argued comparison rather than mechanical scoring.

Real-world factual claims and references should be verified from reliable sources when they are materially changed. Keep documented fact, plausible interpretation, fictional embellishment, and narrator speculation distinguishable enough that the work does not accidentally present invention as documentary fact.
