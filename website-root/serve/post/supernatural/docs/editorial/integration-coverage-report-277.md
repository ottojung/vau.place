# Supernatural #277 integration coverage report

Bounded integration-only front for Antonina board issue #277. This branch
integrates the already-reviewed seven case-rewrite branches and the cross-case
dramatic map onto a single human-review branch. No narrative prose was
rewritten; only integration conflicts, graph-node ordering, and one graph
`text` field were reconciled.

## Branch and base

- Branch: `review/277-supernatural-integration` (pushed to `origin`)
- Base: `91f14b1` (current `master`, "Reconcile local NOTE directives with updated authorial vision")
- Pull request: <https://github.com/ottojung/vau.place/pull/12> (open, to `master`)
- Consolidated contents: `manuscript.md`, `docs/meaning-graph.md`, the new
  `docs/editorial/cross-case-dramatic-map.md`, and this report

## Integrated sources (merge order)

| Order | Issue | Source branch | Source tip |
| --- | --- | --- | --- |
| 1 | #278 Cases I–II | `agent-8075e8215af3/issue278-cases-i-ii-trust-observation` | `f1f480d` |
| 2 | #287 Case III | `review/287-case-iii-integration` | `296aa30` |
| 3 | #289 Case IV | `agent-88c99460793c/issue289-case-iv-leprechaun` | `cc926f9` |
| 4 | #286 Case V | `review/286-case-v-astrological-mysticism` | `83e01ba` |
| 5 | #295 Case VI | `agent-cc66e713f89e/issue295-crocodile-paranoia` | `e302ad3` |
| 6 | #293 Case VII | `review/293-case-vii-mundane-crash` | `5cc886d` |
| 7 | #294 Coda | `review/294-supernatural-coda` | `b5b8fcb` |
| 8 | #277 Map | `agent-302fc3be0b46/issue277-cross-case-map-v2` | `8157f7d` |

`master` already contains the #296 NOTE reconciliation (`91f14b1`), so no
separate #296 merge was required; the case-owner NOTEs in III, IV, V, VI, and
VII were preserved over the earlier collection-wide wording where the two
disagreed.

## Conflict dispositions (no prose rewrite)

- **#293 Case VII NOTE vs master #296 wording.** Took the #293 branch's
  case-specific NOTE (objectively mundane crash; coordination with the coda's
  "warm week, a clogged filter, a fan that failed slow and legible"). The
  manuscript NOTE and its graph nodes came from the same branch.
- **#293 vs #289 in the graph (Case IV region).** git aligned #293's inherited
  pre-#289 Case IV nodes against the integrated Case IV; resolved in favour of
  the integrated (#289) Case IV region. Alignment artifact, not a content
  conflict.
- **#294 coda conflicts.** Took the #294 branch's rewritten coda (tokens,
  `ambient`/re-reading beat, almanac/retrograde beat) and its graph nodes.
- **#277 map branch conflicts.** Took the map branch's new
  `docs/editorial/cross-case-dramatic-map.md`. Its two transitional manuscript
  edits and one graph `text` edit were superseded by the richer case rewrites
  (#287 Case III opening, #295 Case VI opening), so the integrated case prose
  was kept.
- **Graph `text` reconciliation.** The map branch's edit to node `$n76278`
  (Case VI opening) auto-merged over the case branch's sentence. The node
  `text` was restored to the integrated manuscript sentence so ordered
  coverage byte-matches. Node IDs were preserved throughout.

## Validation

Meaning-graph coverage checker (`coverage_check_full.py`), run against the
integrated `manuscript.md` and `docs/meaning-graph.md`:

```
nodes=918  unique_ids=918  duplicate_ids=0  missing_fields=0
node_refs=918  dangling_node_refs=0
intent_refs=4  dangling_intent_refs=0
ORDERED COVERAGE: EXACT MATCH (prose_chars=81660)
RESULT: PASS
```

- One node per manuscript sentence, in order; concatenated `text` fields equal
  the manuscript prose exactly.
- 0 duplicate node IDs, 0 nodes missing any required field, 0 dangling
  `$n#####` references, 0 dangling `$id-…` intent references.
- No `check-research-docs`/format script is present in this repository
  (`git ls-files` finds only `website-root/cgit-readme-formatter.sh` and
  `website-root/get-current-zulu-time.sh`; the Pages workflow deploys static
  content and runs no document validator). The meaning-graph checker is the
  applicable gate.

### Content preservation

Each case region of the integrated manuscript was compared byte-for-byte with
its owner branch and is identical (I, II, III, IV, V, VI, VII, coda). The four
required exact phrases remain present, and the stale coda token "two machines,
one secret" is gone, replaced by the Case III-consistent token.

## Boundary

Per `AGENTS.md` and `docs/skills/itinerary-manuscript.md`, scheduled
orchestrators must not merge to `master`; human review owns promotion. This
branch is pushed for human review only. A `gh` CLI is unavailable, so the PR
must be opened from the branch.
