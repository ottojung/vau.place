import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(dir, '..', 'index.html'), 'utf8');
const visible = html.replace(/<!--[\s\S]*?-->/g, '');

test('HTML retains hidden editorial instructions', () => {
 assert.ok((html.match(/<!-- editorial/g) || []).length >= 10);
 assert.ok(html.includes('<!-- editorial'));
 assert.doesNotMatch(visible, /<NOTE>|<FIXME>|<MUST HAVES>|<PLACEHOLDER\s*\/>/);
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

test('HTML is the only manuscript', () => {
 assert.ok(fs.existsSync(path.join(dir, '..', 'index.html')));
 assert.ok(!fs.existsSync(path.join(dir, '..', 'manuscript.md')));
 assert.ok(!fs.existsSync(path.join(dir, '..', 'render.mjs')));
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

test('Schaerbeek preserves the original analytical voice and quiet jokes', () => {
  const caseI = visible.split('<h3 id="case-i">')[1].split('<h3 id="case-ii">')[0];
  assert.ok(caseI.includes('In unfamiliar rooms I begin, out of habit, by checking how they are arranged.'));
  assert.ok(caseI.includes('The queue bends once before the till in an L-shape'));
  assert.ok(caseI.includes('“Not spontaneous. Sorry.'));
  assert.ok(caseI.includes('The English ones wait for tea and then break where you expect.'));
  assert.ok(caseI.includes('The French fracture elegantly, usually along the line that leaves the prettier half.'));
  assert.ok(caseI.includes('a carpet whose pattern is an argument against democracy.'));
  assert.doesNotMatch(caseI, /English biscuits soften in tea before they break/);
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

test('collapsed Meta has rationale, process, and all source notes', () => {
 assert.ok(html.includes('<details class="meta-disclosure" id="meta">'));
 assert.doesNotMatch(html, /<details class="meta-disclosure" id="meta" open/);
 assert.ok(html.includes('<summary>Meta '));
 const story = html.split('</article>')[0];
 assert.doesNotMatch(story, /The Mark II moth|The Schaerbeek election\.<\/strong>/);
 const meta = html.split('<details class="meta-disclosure" id="meta">')[1].split('</details>')[0];
 assert.ok(meta.includes('id="meta-sources"'));
 assert.ok(meta.includes('These notes are outside the narrator'));
 assert.ok(meta.includes('The visitor in the cold aisle.'));
 assert.ok(meta.includes('Mercury in Retrograde.'));
 assert.ok(meta.includes('www.gutenberg.org/ebooks/33887'));
 assert.ok(meta.includes('openlibrary.org/books/OL18675930M'));
 assert.ok(meta.includes('Scheduler Theory'));
 assert.ok(meta.includes('How it was written'));
 assert.ok(meta.includes('a model describes what we choose to make explicit'.replace('a model', 'A model')));
 assert.ok(meta.includes('a cryptographic hash collision'.replace('a cryptographic', 'A cryptographic')));
 assert.ok(meta.includes('work of a demon'));
 assert.ok(meta.includes('A crocodile in Vienna'));
 assert.ok(meta.includes('A server failure can have completely ordinary'));
 assert.ok(meta.includes('happy set'));
 assert.ok(meta.includes('docs/specs/scheduler-theory.md#conformance'));
 assert.ok(meta.includes('docs/specs/scheduler-theory.md#happy-set'));
 assert.doesNotMatch(meta, /outright impossible events|An impossible event is not a predicted/);
 assert.doesNotMatch(meta, /This HTML file is now the manuscript itself|The narrator begins with confidence|a tour of ways systems can go wrong/);
 assert.doesNotMatch(html, /class="meta-hint"/);
});


test('opening explains the dossier without introducing an extra incident', () => {
  const opening = visible.split('<h1 id="a-strange-collection-of-system-failures">')[1].split('<h3 id="case-i">')[0];
  assert.match(opening, /<p>I was not trained for hauntings\./);
  assert.ok(opening.length < 1900, 'The opening should not delay the first story');
  assert.doesNotMatch(visible, /\bvalve\b/i);
  assert.doesNotMatch(visible, /promising the very sun/i);
  assert.ok(visible.includes('Collected incidents · Vol. I'));
  assert.ok(opening.includes('marked <em>Other</em>'));
  assert.ok(opening.includes('I was trained for timelines, for root causes and postmortems'));
  assert.ok(opening.includes('Engineers make excellent witnesses.'));
  assert.ok(opening.includes('they retract anything they cannot support before you have finished writing it down'));
  assert.ok(opening.includes('The same witness who would not let you write down a guess will find room in one of those fields for nearly anything.'));
  assert.ok(opening.includes('how much belonged in that box'));
  assert.doesNotMatch(opening, /relief of a test/);
  assert.ok(opening.includes('I began keeping a dossier.'));
  assert.doesNotMatch(opening, /more often than a responsible person would/);
});

test('the tracer joke belongs to the early Heisenbug investigation', () => {
  const heisenbug = visible.split('<h3 id="case-ii">')[1].split('<h3 id="case-iii">')[0];
  assert.match(heisenbug, /tracer that had broken better men than me/);
  assert.ok(heisenbug.indexOf('tracer that had broken better men') < heisenbug.indexOf('04:56'));
  assert.equal((visible.match(/I was not trained for hauntings/g) || []).length, 1);
});

test('the Schaerbeek invariant renders as MathML, not raw LaTeX', () => {
  const caseI = visible.split('<h3 id="case-i">')[1].split('<h3 id="case-ii">')[0];
  assert.match(caseI, /<div class="invariant"><math display="block">/);
  assert.doesNotMatch(visible, /\$\$|\\boxed|\\text\{|\\leq|\^\{/);
});
