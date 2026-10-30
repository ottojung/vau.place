# Supernatural post

The only manuscript is `index.html`. Edit HTML directly; no Markdown
manuscript or page generator exists. `supernatural.css` styles the story
and the collapsed, native `<details>` Meta section, which contains all
background material and references.

Editorial constraints remain as HTML comments. `docs/meaning-graph.md`
tracks sentences in the story, comments and Meta section. Keep it up to
date as you edit.

Run `npm ci --ignore-scripts` and `npm run check` to validate the page,
meaning graph and literary invariants.
