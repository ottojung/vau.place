import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const dir = path.dirname(fileURLToPath(import.meta.url));
const sourceFile = path.join(dir, 'supernatural.md');
const outputFile = path.join(dir, 'index.html');

const escapeHtml = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const commentSafe = text => text.replaceAll('--', '—').replace(/-$/, '–');

export function hideEditorial(source) {
  const lines = source.replaceAll('\r\n', '\n').split('\n');
  const output = [];
  const annotations = [];
  let index = 0;
  for (let i = 0; i < lines.length; i++) {
    const open = lines[i].match(/^\s*<(NOTE|FIXME|TODO|MUST HAVES)>\s*$/);
    if (open) {
      const tag = open[1], body = [];
      const start = i + 1;
      i++;
      while (i < lines.length && !new RegExp('^\\s*</' + tag + '>\\s*$').test(lines[i])) {
        body.push(lines[i++]);
      }
      if (i === lines.length) throw new Error('Unclosed editorial <' + tag + '> at line ' + start);
      annotations.push(tag);
      output.push('', '<!-- editorial ' + (index++) + ': ' + tag + '\n' + commentSafe(body.join('\n')) + '\n-->', '');
      continue;
    }
    if (/^\s*<PLACEHOLDER\s*\/>\s*$/.test(lines[i])) {
      annotations.push('PLACEHOLDER');
      output.push('', '<!-- editorial ' + (index++) + ': PLACEHOLDER -->', '');
      continue;
    }
    if (/^>\s*\*\*NOTE\*\*/.test(lines[i])) {
      const body = [lines[i]];
      while (i + 1 < lines.length && /^>/.test(lines[i + 1])) body.push(lines[++i]);
      annotations.push('QUOTED NOTE');
      output.push('', '<!-- editorial ' + (index++) + ': QUOTED NOTE\n' + commentSafe(body.join('\n')) + '\n-->', '');
      continue;
    }
    output.push(lines[i]);
  }
  return { markdown: output.join('\n'), annotations };
}

const slugFor = title => {
  const roman = title.match(/^([IVX]+)\.\s/);
  if (roman) return 'case-' + roman[1].toLowerCase();
  return title.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
};
const markdown = new MarkdownIt({ html: true, linkify: false, typographer: false, breaks: false });
const headingIds = [];
markdown.renderer.rules.heading_open = (tokens, i, options, env, self) => {
  const title = tokens[i + 1].content;
  const slug = slugFor(title);
  const count = headingIds.filter(x => x.id === slug).length;
  const id = count ? slug + '-' + (count + 1) : slug;
  headingIds.push({ id, title, level: Number(tokens[i].tag.slice(1)) });
  tokens[i].attrSet('id', id);
  return self.renderToken(tokens, i, options);
};
const labels = {
  'case-i': 'I · The Schaerbeek Bit',
  'case-ii': 'II · The Heisenbug',
  'case-iii': 'III · Maxwell’s Demon',
  'case-iv': 'IV · The Visitor',
  'case-v': 'V · Mercury in Retrograde',
  'case-vi': 'VI · The Crocodile',
  'case-vii': 'VII · The Heat Death of Rack C',
  'coda': 'Coda',
  'authors-notes-and-sources': 'Author’s notes & sources'
};

export function renderPage(source) {
  headingIds.length = 0;
  const { markdown: publicMarkdown, annotations } = hideEditorial(source);
  const rendered = markdown.render(publicMarkdown);
  const title = headingIds.find(x => x.level === 1)?.title || 'A Strange Collection of System Failures';
  const chapters = headingIds.filter(x => labels[x.id] !== undefined);
  const links = chapters.map(x => '<a href="#' + x.id + '">' + escapeHtml(labels[x.id]) + '</a>').join('\n');
  const nav = '<nav aria-label="Case files">' + links + '</nav>';
  if (chapters.filter(x => x.id.startsWith('case-')).length !== 7)
    throw new Error('Expected exactly seven case headings');
  if (annotations.length < 5) throw new Error('Editorial notes were not found');

  return [
    '<!doctype html>',
    '<html lang="en">',
    '<head>',
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    '  <meta name="color-scheme" content="light">',
    '  <meta name="description" content="Seven accounts of technical failures, unsettling encounters, and the people left to explain them.">',
    '  <meta property="og:type" content="article">',
    '  <meta property="og:site_name" content="Vau’s place">',
    '  <meta property="og:title" content="' + escapeHtml(title) + '">',
    '  <meta property="og:description" content="Seven cases of unexplained failures and the people who investigated them.">',
    '  <link rel="canonical" href="https://vau.place/post/supernatural/">',
    '  <link rel="stylesheet" href="./supernatural.css">',
    '  <title>' + escapeHtml(title) + ' — Vau’s place</title>',
    '</head>',
    '<body>',
    '  <a class="skip-link" href="#article">Skip to the story</a>',
    '  <div class="top-rule" aria-hidden="true"></div>',
    '  <header class="masthead">',
    '    <a class="site-home" href="../../index.html">Vau’s place</a>',
    '    <span class="masthead-label">Collected incidents · Vol. I</span>',
    '  </header>',
    '  <div class="page">',
    '    <aside class="sidebar" aria-label="Table of contents">',
    '      <div class="sidebar-inner">',
    nav,
    '      </div>',
    '    </aside>',
    '    <main id="article" class="manuscript">',
    '      <details class="mobile-contents">',
    '        <summary>Contents <span aria-hidden="true">↘</span></summary>',
    nav,
    '      </details>',
    '      <article class="story">',
    rendered,
    '      </article>',
    '      <footer class="article-foot">',
    '        <a href="../../index.html">← Back to Vau’s place</a>',
    '      </footer>',
    '    </main>',
    '  </div>',
    '</body>',
    '</html>',
    ''
  ].join('\n');
}

const check = process.argv.includes('--check');
const invoked = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invoked) {
  const output = renderPage(fs.readFileSync(sourceFile, 'utf8'));
  if (check) {
    if (!fs.existsSync(outputFile) || fs.readFileSync(outputFile, 'utf8') !== output) {
      console.error('index.html is out of date. Run npm run build and commit the result.');
      process.exitCode = 1;
    } else console.log('Supernatural HTML is up to date.');
  } else {
    fs.writeFileSync(outputFile, output, 'utf8');
    console.log('Wrote ' + outputFile);
  }
}
