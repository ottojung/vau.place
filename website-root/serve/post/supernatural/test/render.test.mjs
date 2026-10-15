import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hideEditorial, renderPage } from '../render.mjs';

const dir = path.dirname(fileURLToPath(import.meta.url));
const manuscript = fs.readFileSync(path.join(dir, '..', 'supernatural.md'), 'utf8');
const html = fs.readFileSync(path.join(dir, '..', 'index.html'), 'utf8');
const visible = html.replace(/<!--[\s\S]*?-->/g, '');

test('editorial notes, directives, and placeholders are hidden from rendered content', () => {
  const { markdown, annotations } = hideEditorial(manuscript);
  assert.ok(annotations.length >= 10, 'Expected editorial annotations');
  assert.doesNotMatch(markdown, /<NOTE>|<FIXME>|<MUST HAVES>|<PLACEHOLDER\s*\/>/);
  assert.doesNotMatch(visible, /<NOTE>|<FIXME>|<MUST HAVES>|<PLACEHOLDER\s*\/>/);
  assert.doesNotMatch(visible, /This document is a draft/);
  assert.doesNotMatch(visible, /Change the title to something more evocative/);
  assert.doesNotMatch(visible, /The escaped neutron must never be connected/);
  assert.ok(html.includes('<!-- editorial'));
});

test('public page retains seven cases, real ending and source links', () => {
  assert.equal((html.match(/<h3 id="case-(?:i|ii|iii|iv|v|vi|vii)">/g) || []).length, 7);
  assert.ok(html.includes('<h2 id="coda">Coda</h2>'));
  assert.ok(html.includes('SHAttered'));
  assert.ok(html.includes('SHA-256'));
  assert.ok(html.includes('ids.si.edu/ids/deliveryService'));
  assert.ok(html.includes('<img '));
  assert.ok(html.includes('<a href="https://shattered.io"'));
  assert.ok(html.includes('href="#case-iii"'));
  assert.ok(html.includes('href="./supernatural.css"'));
});

test('page is reproducibly generated from the unchanged Markdown source', () => {
  assert.equal(renderPage(manuscript), html);
});

test('page has meaningful semantics and mobile navigation', () => {
  assert.ok(html.includes('<main id="article"'));
  assert.ok(html.includes('class="mobile-contents"'));
  assert.ok(html.includes('aria-label="Case files"'));
  assert.ok(html.includes('<meta name="viewport"'));
  assert.ok(html.includes('rel="canonical"'));
});

test('the witness is not labelled by the case title before the joke', () => {
  assert.ok(html.includes('<h3 id="case-iv">IV. The Visitor in the Cold Aisle</h3>'));
  assert.ok(html.includes("IV · The Visitor"));
  assert.doesNotMatch(visible, /<h3 id="case-iv">[^<]*Leprechaun/);
});

test('Mercury retains overt magic while using messenger-specific imagery', () => {
  assert.ok(visible.includes('The coin travelled toward the operator'));
  assert.ok(visible.includes('I heard myself asking for the operator by name'));
  assert.ok(visible.includes('Wooden pigeonholes climbed to the ceiling'));
  assert.ok(visible.includes('A timetable'));
});

test('source apparatus identifies itself as authorial and cites fictional cases', () => {
  assert.ok(html.includes('<h2 id="authors-notes-and-sources">'));
  assert.ok(visible.includes("These notes are outside the narrator"));
  assert.ok(visible.includes('The visitor in the cold aisle.'));
  assert.ok(visible.includes('Mercury in Retrograde.'));
  assert.ok(html.includes('www.gutenberg.org/ebooks/33887'));
  assert.ok(html.includes('openlibrary.org/books/OL18675930M'));
  assert.doesNotMatch(visible, /Use as a pointer|mock citations/);
});
