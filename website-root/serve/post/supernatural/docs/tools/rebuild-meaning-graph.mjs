import fs from 'node:fs';
import path from 'node:path';
const dir = path.resolve(process.argv[2] || '.');
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const graph = fs.readFileSync(path.join(dir, 'docs/meaning-graph.md'), 'utf8');
const start = html.indexOf('<article class="story">');
const end = html.indexOf('</details>', html.indexOf('<details class="meta-disclosure"', start));
if (start < 0 || end < 0) throw new Error('Missing story or Meta section');
const source = html.slice(start, end).replace(/<!-- editorial \d+: [A-Z ]+\s*\n/g, ' ').replace(/-->/g, ' ');
const normalize = s => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/\[([^\]]+)\]\[\d+\]/g, '$1').replace(/<[^>]*>/g, ' ')
  .replace(/&(?:amp|quot|lt|gt|nbsp|#39);/g, ' ')
  .replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ').toLowerCase();
const normalized = normalize(source);
const blocks = graph.split(/(?=^\$n\d{5}\s*$)/m).slice(1);
if (!blocks.length) throw new Error('Graph is empty');
const used = new Set();
let position = 0;
for (const block of blocks) {
  const id = block.match(/^\$n\d{5}\s*$/m)?.[0];
  const text = block.match(/^text: (.*)$/m)?.[1];
  if (!id || !text || !/^intent: /m.test(block) || !/^style: /m.test(block) || !/^continuity: /m.test(block))
    throw new Error('Incomplete node: ' + block.slice(0, 40));
  if (used.has(id)) throw new Error('Duplicate ID: ' + id);
  used.add(id);
  const part = normalize(text);
  const found = normalized.indexOf(part, position);
  if (found < 0) throw new Error('Unmatched or out-of-order node ' + id + ': ' + text);
  position = found + part.length;
}
console.log('Verified ' + blocks.length + ' ordered nodes in HTML manuscript.');
