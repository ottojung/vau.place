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

test('Schaerbeek retains the count dilemma without the late president subplot', () => {
  const caseI = visible.split('<h3 id="case-i">')[1].split('<h3 id="case-ii">')[0];
  assert.ok(caseI.includes('The president asked the technician'));
  assert.doesNotMatch(caseI, /One clerk later admitted|The president was summoned|what became of the president|page I reserve for/);
});

test('Mercury centers the coin, almanac and telephone with a concrete ledger discrepancy', () => {
  const caseV = visible.split('<h3 id="case-v">')[1].split('<h3 id="case-vi">')[0];
  assert.ok(caseV.includes('the settlement log showed a rent payment posted at 01:14'));
  assert.ok(caseV.includes('entry timestamped 01:09'));
  assert.ok(caseV.includes('The coin travelled toward the operator'));
  assert.ok(caseV.includes('After a few turns the dates began to repeat'));
  assert.ok(caseV.includes('I heard myself asking for the operator by name'));
  assert.ok(caseV.includes('a peculiar form of homesickness'));
  assert.doesNotMatch(caseV, /two reflections|Outside, a tram passed|the instructions unwound|square of folded paper/);
  assert.ok(visible.split('<h2 id="coda">')[1].includes('The almanac is in the same drawer'));
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


test('opening explains the dossier without introducing an extra incident', () => {
  const opening = visible.split('<h1 id="a-strange-collection-of-system-failures">')[1].split('<h3 id="case-i">')[0];
  assert.match(opening, /<p>I was not trained for hauntings\./);
  assert.ok(opening.length < 1900, 'The opening should not delay the first story');
  assert.doesNotMatch(visible, /\bvalve\b/i);
  assert.doesNotMatch(manuscript, /promising the very sun/i);
  assert.ok(visible.includes('Collected incidents · Vol. I'));
  assert.ok(opening.includes('a box marked <em>Other</em>'));
  assert.ok(opening.includes('I began keeping a dossier.'));
  assert.ok(opening.includes('more often than a responsible person would'));
});

test('the tracer joke belongs to the early Heisenbug investigation', () => {
  const heisenbug = visible.split('<h3 id="case-ii">')[1].split('<h3 id="case-iii">')[0];
  assert.match(heisenbug, /tracer that had broken better men than me/);
  assert.ok(heisenbug.indexOf('tracer that had broken better men') < heisenbug.indexOf('04:56'));
  assert.equal((visible.match(/I was not trained for hauntings/g) || []).length, 1);
});
