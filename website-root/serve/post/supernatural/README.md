# Supernatural post

The Markdown story and its sentence-level meaning graph remain the
canonical source files: supernatural.md and docs/meaning-graph.md.

The published reader-facing index.html is generated and styled by
supernatural.css. It is not meant to be hand-edited.

Regenerate it after every manuscript change:

    npm ci
    npm run build
    npm run check

The generator preserves NOTE, FIXME, TODO, MUST HAVES, PLACEHOLDER
and quoted NOTE directives in the Markdown source, but converts
them to inert HTML comments in the generated page. They remain
inspectable in page source while never appearing in rendered content.
Generation does not modify the prose or the meaning graph.

The deployment workflow verifies that the HTML matches the
Markdown source before uploading the website.
No client-side JavaScript is needed to read the page.
