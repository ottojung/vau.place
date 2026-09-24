# Supernatural story refinement itinerary

## Scope

This is the **sole entry point** for recurring or scheduled agentic work that refines the supernatural story collection.

Target repository:

<https://github.com/ottojung/vau.place>

Primary manuscript:

`website-root/serve/post/supernatural/supernatural.md`

Before acting, study and obey:

- `website-root/serve/post/supernatural/AGENTS.md`
- every live record under `website-root/serve/post/supernatural/docs/intent-records/`
- the current manuscript
- `website-root/serve/post/supernatural/docs/meaning-graph.md`, when it exists

This itinerary owns the recurring refinement loop. It is not a checklist that must manufacture a change on every pass. The purpose is to make the manuscript better while preserving what already works.

## Human-review branch boundary

Scheduled orchestrators must never commit or merge their writing changes directly into `main`.

All changes produced by a scheduled orchestrator must live on a non-`main` branch for later human review:

- Start from current `main` when no active supernatural-refinement review branch exists.
- Create or reuse one branch representing the current human-review batch of supernatural-story refinements.
- Commit manuscript, meaning-graph, and related documentation changes only to that branch.
- Keep an open pull request from that branch to `main` as the human review surface when practical.
- Subsequent scheduled invocations may continue refining the same open review branch, after first reconciling it with current `main` as needed.
- The scheduled orchestrator must **not** merge that pull request, fast-forward `main`, force-update `main`, or otherwise promote its own changes into `main`.
- Human review and promotion into `main` are outside the scheduled orchestrator's authority.
- Once the human-review branch has been merged or otherwise retired by a human, the next scheduled invocation starts a fresh review branch from current `main`.

This boundary applies even to apparently harmless changes such as meaning-graph updates, intent-adjacent documentation, typo fixes, or tiny prose edits. If a scheduled invocation changes the repository, those changes remain reviewable off `main` until a human accepts them.

## First-pass graph bootstrap

The meaning graph is required analytical state.

If `docs/meaning-graph.md` does not yet exist, create it before substantial prose revision. Build it from the current manuscript and complete it before materially revising prose. Coverage is an invariant, not a long-term target: every source sentence must have exactly one node in the format required by `AGENTS.md`, and the graph must not be left partially covered between refinement passes.

Use the required `continuity` field to record important cross-sentence and cross-section relationships such as setup, payoff, causality, motifs, contradiction, implication, and narrator knowledge.

Do not treat graph construction as the end product. Its purpose is to make better prose decisions.

## Refinement loop

For each refinement cycle:

1. **Read before editing.** Read enough of the current manuscript to understand the passage in its larger narrative role. For structural work, read the whole current manuscript.
2. **Check intent.** Identify the live Intent Records relevant to the passage. Do not infer a new project goal merely because a rewrite seems attractive.
3. **Inspect the graph.** Read the affected meaning-graph nodes and their relevant `intent`, `style`, and `continuity` fields. Repair stale analysis before relying on it.
4. **Diagnose before rewriting.** State the concrete defect. Prefer evidence in the manuscript over generic craft advice.
5. **Choose high-leverage work.** Prefer one important defect or a small cluster whose fixes belong together. Do not spend the invocation producing an exhaustive review while leaving the text unchanged.
6. **Revise narrowly.** Change the smallest span that can actually solve the diagnosed problem. Larger rewrites are appropriate only when the defect is genuinely structural.
7. **Generate alternatives when useful.** If the solution is not obvious, develop materially different candidate revisions independently rather than repeatedly mutating the first idea.
8. **Compare against the incumbent.** Ask what each candidate improves and what semantic, inferential, structural, rhythmic, humorous, or uncanny work it loses. A candidate wins only by an argued improvement under the live intents, not by sounding generically polished.
9. **Keep or revert.** Keep the revision when improvement is reasonably clear. Otherwise preserve the incumbent.
10. **Update the graph.** After an accepted manuscript change, update the affected nodes and preserve exhaustive one-node-per-sentence coverage so every `text` field again matches the manuscript exactly.
11. **Continue.** Repeat with the next highest-leverage defect while useful, confident improvements remain.

## Audit lenses

Do not apply every lens mechanically to every paragraph. Use them to discover important defects at the appropriate scale.

Periodically inspect for:

- contradiction with live Intent Records;
- stale, missing, or contradictory meaning-graph claims;
- continuity errors;
- chronology errors;
- impossible or unexplained character knowledge;
- broken causality or unearned conclusions;
- setup that never pays off;
- payoff without sufficient setup;
- motifs that disappear, repeat accidentally, or become too explicit;
- pacing problems and badly placed narrative weight;
- voice drift in the investigator-narrator;
- places where the narrator's skeptical surface and private supernatural leaning collapse into one another;
- escalation that arrives too early, stalls, or becomes mechanically predictable;
- unresolved promises introduced by the prose;
- exposition that explains an implication the reader already understands;
- transitions that create unnecessary rhetorical resets;
- jokes that are explained rather than allowed to remain implicit;
- generic horror decoration replacing procedural specificity;
- sentence and paragraph rhythm problems;
- repeated words, images, sentence shapes, or rhetorical moves;
- real-world claims whose sourcing or factual framing has become unreliable.

The audit should feed concrete manuscript changes. Do not create a large issue inventory merely because one can be created.

## Scale changes

Prefer local work when the defect is local.

Before making a chapter-, case-, or collection-scale change, inspect the relevant graph neighborhood and explain why local repair is insufficient. Recheck the entire affected case after a structural change, and recheck collection-level escalation and narrator development after moving, adding, or substantially rewriting a principal case.

Do not add or remove principal case files unless human intent changes.

## Real incidents and invention

When a case uses a documented real-world incident, verify materially changed factual claims against reliable sources.

Preserve the distinction among:

- documented event;
- documented or plausible technical explanation;
- fictional reconstruction;
- narrator inference;
- supernatural implication.

The story may deliberately blur how those categories *feel*, but the underlying drafting process should know which is which.

## Completion of an invocation

A refinement invocation is useful when it leaves the repository in a better state: stronger prose, more accurate semantic analysis, or both.

Before finishing:

- reread every changed passage in context;
- inspect the diff for accidental losses;
- confirm the changed prose still satisfies the relevant Intent Records and local manuscript directives;
- confirm the meaning graph matches accepted prose changes;
- avoid leaving speculative rewrites half-integrated.

If no candidate change is a clear improvement, do not rewrite for activity's sake. Preserve the stronger incumbent and leave the graph or diagnosis in a state that helps the next cycle.

The recurring task itself remains open-ended: future invocations reread the latest manuscript and continue refining from the current state.
