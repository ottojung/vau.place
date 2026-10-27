import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const dir = path.resolve(process.argv[2]);
const novel = fs.readFileSync(path.join(dir, 'supernatural.md'), 'utf8');
const graphFile = path.join(dir, 'docs/meaning-graph.md');
const old = fs.readFileSync(graphFile, 'utf8');
const oldTextId = new Map();
const blocks = old.split(/(?=^\$n\d{5}\s*$)/m);
for (const block of blocks) {
  const id = block.match(/^\$n(\d{5})\s*$/m)?.[1];
  const text = block.match(/^text: (.*)$/m)?.[1];
  if (id && text !== undefined) {
    if (!oldTextId.has(text)) oldTextId.set(text, []);
    oldTextId.get(text).push(id);
  }
}
const rules = {
 preamble: ['State live editorial requirements.', 'Clear non-diegetic instruction.', 'Story contracts and authorial priorities.'],
 prologue: ['Establish genuine confidence in reproducibility, with only a minimal reason to retain a dossier.', 'Plain technically confident first-person narration.', 'The valve, sufficient causes, and the first discrepancy.'],
 schaerbeek: ['Earn skeptical trust through records, human stakes, and a younger engineer meeting an anomalous account.', 'Concrete restrained conversation, everyday detail and subtle humor.', 'Election count, biscuits, newspaper, and the technician.'],
 heisenbug: ['Generate solitary dread through a failure that retreats under observation and damages perceptual confidence.', 'Compressed sleepless first person, increasingly uncanny images.', 'Watching/unwatched runs, reflected monitor, 04:56, crossed-out sentence.'],
 demon: ['Make the demon visitation terrifying and the hash collision a brief inexplicable consequence.', 'Embodied dream logic, measured horror and abrupt ironies.', 'Demon, two small things, full SHA-256 collision and lost files.'],
 leprechaun: ['Respect the embarrassed witness whose perceptions are uncertain, allowing folklore to emerge without certification.', 'Hesitant testimony, small humiliations, ambiguous perception.', 'Tapping, greenish light, changed loop bound, joking colleagues.'],
 mercury: ['Draw the investigator into a compelling occult world of ritual, signs, prophecy and returning messages.', 'Visceral visionary mysticism rather than technical documentation.', 'Mercury, serpents, mirrors, moving coin and impossible telephone.'],
 crocodile: ['Reveal changed causal relevance through excessive checks of unaffected American systems.', 'Dry civic reporting and gently disturbing obsessive repetition.', 'Vienna canal, crocodile, green dashboard, unnecessary column.'],
 crash: ['Show a sufficiently explained ordinary failure that cannot restore emotional peace.', 'Very short, undramatic, quiet procedural aftershock.', 'Rack C, cooling filter, Ruth, the extra watch.'],
 coda: ['Reveal the altered narrator through objects and gestures rather than interpretation.', 'Restrained and concrete, unresolved with a residual unease.', 'Dossier, moth, hash, coin, almanac and Rack C.'],
 sources: ['Keep external historical references distinct from invented story events.', 'Factual reference prose.', 'Documentation, provenance, and fictional composites.']
};
let section='preamble', fenced=false;
const romanToSection = {i:'schaerbeek',ii:'heisenbug',iii:'demon',iv:'leprechaun',v:'mercury',vi:'crocodile',vii:'crash'};
const segmenter=new Intl.Segmenter('en',{granularity:'sentence'});
const nodes=[],used=new Set();
function makeId(text){
 const available=oldTextId.get(text);
 let id=null;
 while(available?.length&&!id){ const c=available.shift();if(!used.has(c))id=c; }
 while(!id){const c=String(crypto.randomInt(10000,100000));if(!used.has(c))id=c;}
 used.add(id);return id;
}
for(const [ix,line] of novel.split('\n').entries()){
 const trimmed=line.trim();
 if(trimmed.startsWith(String.fromCharCode(96).repeat(3))){fenced=!fenced;continue;}
 if(fenced)continue;
 // With an untitled opening section, the prose begins immediately after the H1.
 if(/^# [^#]/.test(trimmed)){section='prologue';continue;}
 if(trimmed.startsWith('## Prologue')){section='prologue';continue;}
 if(trimmed.startsWith('## Coda')){section='coda';continue;}
 if(trimmed.startsWith("## Author's Notes")){section='sources';continue;}
 const roman=trimmed.match(/^### ([IVX]+)\.\s/);
 if(roman){section=romanToSection[roman[1].toLowerCase()];continue;}
 if(!trimmed||/^#{1,6} /.test(trimmed)||/^---+$/.test(trimmed)||/^\|/.test(trimmed)
 ||/^!\[/.test(trimmed)||/^<.*>$/.test(trimmed)||/^\[\d+\]:/.test(trimmed)
 ||/^>\s*\*\*NOTE\*\*/.test(trimmed))continue;
 let t=trimmed.replace(/^>\s?/,'').replace(/^(?:\d+[.)]|[-*+])\s+/,'');
 if(!/[A-Za-z]/.test(t))continue;
 for(const s of segmenter.segment(t)){
  const text=s.segment.trim();
  if(!text||!/[A-Za-z]/.test(text))continue;
  nodes.push({id:makeId(text),text,section,sourceLine:ix+1});
 }
}
const result=['# Meaning graph','',
'Every sentence in the manuscript, including authorial directive sentences, receives exactly one node in narrative order.',
'The analytical fields identify the dramatic work and continuity with adjacent sentences, the case-specific arc and recurring motifs.',''];
for(let i=0;i<nodes.length;i++){
 const n=nodes[i],rule=rules[n.section];
 if(!rule)throw Error('Unmapped '+n.section);
 let role='narrative advance';
 if(/\b(?:felt|frightened|afraid|fear|shaking|alone|ashamed|dread|wanted|hoped|remember|believed|trust|expect)\b/i.test(n.text))role='emotional or perceptual change';
 else if(/\b(?:light|door|hands|face|colour|glass|shadow|coins?|clock|racks?|fan|noise|air|cold|heat|smell|window|river|phone|letter)\b/i.test(n.text))role='sensory evidence';
 else if(/\b(?:said|asked|replied|told|spoke|called|wrote|heard)\b/i.test(n.text))role='testimony or reported dialogue';
 else if(/\b(?:log|test|trace|transaction|server|error|file|hash|method|measure)\b/i.test(n.text))role='procedural evidence or its displacement';
 const prev=i?'$n'+nodes[i-1].id:'opening boundary';
 const next=i+1<nodes.length?'$n'+nodes[i+1].id:'closing boundary';
 result.push('$n'+n.id,'text: '+n.text,
 'intent: '+rule[0]+' Its local function is '+role+'.',
 'style: '+rule[1],
 'continuity: Follows '+prev+'; precedes '+next+'. '+rule[2],'');
}
if(nodes.length!==new Set(nodes.map(x=>x.id)).size)throw Error('IDs collided');
const generated=result.join('\n');
if(process.argv.includes('--check')){
 if(generated!==old)throw new Error('meaning-graph.md is stale; regenerate after manuscript edits');
 console.log('Meaning graph is in sync with the manuscript');
}else fs.writeFileSync(graphFile,generated);
console.log(JSON.stringify({nodes:nodes.length,oldNodes:blocks.length-1,sourceBytes:novel.length,graphBytes:result.join('\n').length,
sections:Object.fromEntries(Object.keys(rules).map(k=>[k,nodes.filter(n=>n.section===k).length]))},null,2));
