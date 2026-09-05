<NOTE>
This document is a draft.
It contains placeholders, fixmes, and must-haves that need to be addressed.
When completing the document, ensure that all placeholders are filled, fixmes are resolved, and must-haves are included.
Some must-haves, those surrounded by quotes, are exact phrases that need to be integrated neatly into the text. But others are thematic elements that should be woven into the narrative.


The type of this story is generally horror.
However, it should be written in the style of Lovecraft.
It conveys dread, helplessness.
It is reality-bending in some places.
There is lots of uncanny and the unsettling.
It is grave, meticulous, humor only implicit, investigator fraying at the edges.

</NOTE>

<MUST HAVES>
"I had written prose that described procedures in the future tense, as if promising the very sun, and when the sun obeyed I pretended it was because we had the grammar correct."
"FIELD NOTE #X The closer your model fits the world, the more the world will take issue."
"... like myself—skeptics who have seen just enough to be superstitious."
"... there are systems whose failure modes include poetry."
</MUST HAVES>

# A Strange Collection of System Failures

*From the notebook of an investigator <PLACEHOLDER/>*

---

## Prologue

I was not trained for hauntings. I was trained for reproducibility, for test plans and postmortems, for the clean relief of a failing unit test that fails again in the same way. But the longer I have tended systems—their valves and logs, their hissing racks and their fragile promises—the more I have come to understand that what we write on paper is not what the air will carry.

<PLACEHOLDER/>

I began to keep a dossier. Not a taxonomy—God preserve me from one more axis—but a sheaf of field notes: cases gathered from labs and basements, control rooms and attics <PLACEHOLDER/>. A few I saw myself; others I learned from steadier hands who were there before me 

<PLACEHOLDER/>

<MUST HAVES>
"People ask if I believe in such things."
"Read them so that when the world leans on your specification, you recognize the weight."
</MUST HAVES>

---

## Case Files

### I. The Schaerbeek Bit

**Schaerbeek, Belgium.**

<NOTE>
This meeting belongs to an earlier period in the narrator's life. He has not yet become the investigator who keeps this dossier, and he does not believe in supernatural explanations. He is here for ordinary work and expects ordinary technical information.

The newspaper item about the escaped neutron is fictional. It must never be connected in the prose to the 2003 bit flip. The implication that it somehow travelled backward in time is strictly for the reader.
</NOTE>

I am in a cafeteria in Schaerbeek, just off the tram line, waiting for a man who is late. In unfamiliar rooms I begin, out of habit, by checking how they are arranged.

The windows sit low; from inside, passing traffic moves along the upper edge of the view like a slow mechanical ceiling. The tables keep the same measured distance from the walls, aisles just wide enough for a tray to pass without contact; the chairs face each other in pairs. The queue bends once before the till in an L-shape that keeps the doorway clear.

I take my place in it, moving forward each time the drawer opens with its tired ring. Above the counter, three menus are printed in two tight columns; when my turn comes I trust the digits more than the words and repeat one of the numbers, watching the cashier's hand go straight to the corresponding row as if confirming a mapping I had only guessed at. Tray in hand, I take a table by the wall and open my notebook.

I am in Brussels for a municipal-systems contract. A colleague has given me this man's name because, I am told, he knows the local engineering scene and knows which names on procurement papers correspond to people who can actually fix things. I expect names, numbers, introductions.

After ten minutes I pick up a newspaper left on the next chair. On an inside page, a brief item from Geneva reports that a neutron escaped one of CERN's experimental enclosures that morning and was detected outside the path in which it was expected to remain. The laboratory says no one was at risk. The newspaper uses the word *escaped* three times. I fold it and put it back.

He arrives fourteen minutes late and apologizes before sitting down. His tram, he says, underwent “a spontaneous adjustment to the route.” Then he corrects himself.

“Not spontaneous. Sorry. A signal failed, or somebody changed the route. They just haven't said which.”

We exchange the usual confirmations—my name, his, the fact that we have both found the correct café in the correct district on the correct day. He worked elections—“not politics,” he said quickly, “interfaces.” He keeps straightening small things—the sugar packet, the spoon. When conversation pauses, he has a habit of tapping the table as though confirming liveness.

I ask who actually maintains the municipal systems I am likely to encounter. He gives me names, but rarely just names. One contractor is excellent with cabling but, according to him, “loses confidence around printers.” Another is the person everyone calls after hours even though nobody's paperwork admits this. I write down the useful parts and leave some of the commentary out.

There are two biscuits beside his coffee. He picks one up.

“You can tell a lot about a nation from how its biscuits break.”

I look at him. “How they break?”

“The English ones surrender at the middle. The French fracture elegantly, as if it were part of the design. Belgian biscuits, though—they resist until you lose interest.”

This sounds ridiculous. I can see no reason to bring Belgium into a broken biscuit, but he is already unwrapping it.

He breaks it. The biscuit splits unevenly, half crumbling onto the napkin. He seems pleased.

“See? The kind of nation that tolerates asymmetry but not waste.”

I let the matter go and ask how he came to work on elections.

He gives me the short version: municipal contracts, equipment support, one assignment becoming another. Then he says, “When people talk about elections, they always mean the result. They don't talk about the day itself.”

I had asked about his work, not the philosophy of elections, but by then I had learned that his answers sometimes arrived with extra material attached.

“I worked one day,” he continued, “that stayed with me more than the result it produced.”

He mentioned a school in Schaerbeek, the 2003 federal election, and a candidate whose preferential votes exceeded the votes available to him through his own party list. I recognized the outline. I had heard it before as one of those programmer stories compressed into a few lines and passed around without much interest in who had actually been there. It took me a moment to adjust to the idea that the man across from me had been inside the room I had known only from retellings.

What followed was his account of that day. He did not tell it in order, but I will.

The polling station was a school. Its walls still carried faded posters about hygiene and primary colours, but the doors had been re-labelled with printed arrows and neutral nouns: Entrance, Exit, Polling Room. There were folding tables, metal chairs, extension leads taped to the floor, stacks of forms, pencils attached to string, cardboard screens, a clock protected by a wire cage, two wastebaskets, a cabinet of children's paintings turned to face the wall, and a carpet whose pattern is an argument against democracy.

He had been sent there as technician, a word expansive enough to cover whatever had not yet been assigned to the others. On his table lay the checklist: confirm serial numbers, confirm counters at zero, confirm seals intact; note every confirmation in ink, sign where indicated. Two party representatives sat near the door. A schoolteacher seconded as a watcher stood where she could see both the machines and the clerks and seemed unsure which of them constituted the real work.

Voting itself went normally. He answered questions, checked displays, and waited for something to require him. After the polls closed, the clerks began verifying the totals.

They reached one candidate whose preference count was larger than the total number of votes recorded for the entire list containing him.

That could not happen. Every preferential vote for that candidate was necessarily part of a vote already counted for the list. The smaller number had somehow become the larger one.

<NOTE>
Nobody initially calls this an “error”. Everyone understands that using that word would start another bureaucratic procedure—forms, witnesses, preserving media, freezing work already half done. Keep this motive unspoken in the prose. Show it only through the way they talk around the result and through what they begin checking.
</NOTE>

One clerk read the candidate total. Another read the list total. She asked for the first number again. He repeated it. Then they read the list total again.

“Check this one,” somebody said.

They checked it. Then they checked the other one. They checked the machine identifier, the register, and the media from which the totals had been read. Nobody used the word *error*.

The numbers did not change.

There is the certainty, never admitted aloud, that somewhere a check is missing and that this is sane; that checks go missing the way buttons go missing from coats. So they looked for the missing check.

Subtracting the list total from the candidate total left 4 096. The clerk wrote the difference in the margin.

It was one power of two too proud.

They stared at the sum as though it might amend itself out of shame.

The rule was simple: a candidate's preferential votes are contained inside the party-list total, and the party-list total is contained inside the district total.

**Invariant 1. (violated)**

$$
\boxed{\text{candidate preferences } \leq \text{ party list total } \leq \text{ district total}}
$$

The list's ceiling is the candidate's sky, and yet there it was: sky lower than the bird.

The air in the school had become very dry. Paper rasped when the clerks separated sheets, and once a wool sleeve snapped against the back of a plastic chair.

The technician checked the machine and the media again. The schoolteacher tried to be helpful by pointing out each time the computer made a small sound, as if identifying birds.

The woman with the adding tape asked if lightning could do it. “Not tonight,” the technician said. “Tonight is dry.”

They made a ledger of what would be convenient to blame and crossed each item off.

- ~~a transposed digit~~
- ~~a repeated line~~
- ~~a wrong candidate mapping~~
- ~~a duplicate import~~
- ~~a machine identifier copied from the next station~~
- ~~a power interruption~~
- ~~lightning~~

Each explanation had some trace it ought to have left. None of the expected traces was there.

Someone telephoned someone else, who telephoned a woman the technician knew from university. A physicist friend—pressed into service because her apartment was nearby, and because she is the sort of person one calls about the moon—arrived with a bicycle helmet.

She listened to the numbers and wrote:

\[
4096 = 2^{12}.
\]

If a stored count had a zero in the binary position worth 4,096, she explained, and that zero became a one, the count would increase by exactly 4,096. Not approximately. Not by a random-looking amount. By that number.

There was no smoking gun—only a single flip where a zero had become a one at the thirteenth bit, a neat, round power-of-two crime.

Then she explained how such a thing could happen without broken software. Energetic particles can pass through semiconductor material and deposit enough charge to change the state held by a memory cell. There need not be a broken wire or a scorched board. The particle can be gone before anyone knows anything happened.

The bit toggled to one, and in so toggling, wove its one-ness into every arithmetic that followed.

The technician objected that bits did not change for no reason. The physicist agreed. A particle crossing a memory cell was a reason; the difficulty was that the reason would already be gone.

They could inspect software, recount totals, and ask clerks what they had done. If the cause had been a particle, there was no particle left to inspect.

One clerk later admitted that he would have preferred a boring human mistake. A human mistake belonged somewhere: to a hand, a tired eye, a copied line. It could be found and corrected. He did not say this during the investigation. If human error returned to the list of possibilities, he himself was one of the humans available.

The machine was tested, the software examined, and the result reconstructed. No software defect was found that explained the discrepancy. The experts' report concluded that it could *very probably* be attributed to a spontaneous and random inversion of a binary position in the computer's working memory.

Later retellings supplied the familiar physical suspect: a single-event upset caused by ionizing radiation. A particle passes through memory, one bit changes, and nothing remains to photograph afterward.

A cosmic flea bite, the newspapers preferred.

The word I kept was *probably*.

The explanation usually ends there under the heading *computer error*. The phrase is correct in the way that shipwrecks are wet.

The technician then told me a smaller story from the following week. A man associated with the candidate whose total had briefly prospered came into the municipal building carrying a cigar he did not light. He asked, very politely, whether the numbers could be verified one more time.

“They were verified,” the technician told him.

“Of course,” the man said. “I only mean verified in the sense that they remain verified.”

The technician said he remembered that line better than anything the physicist had said.

There is comfort in cosmic rays. They do not negotiate.

By then our coffee was cold.

The waiter left the bill between us and moved on without a word. The technician looked at it.

“You know what cafés should do? Add a line for conversation quality. Like a service rating, but mandatory. You'd tip more if you'd actually learned something.”

“They can't verify that,” I said.

“Why would they need to?”

“Because you're putting a number on the bill.”

“They put a number on the soup.”

“That is the price.”

He considered this distinction, but not for long.

“They'd need categories,” he said. “Depth, originality, politeness. Maybe a subtotal for wit.”

I could see that another objection would only produce another category.

“No,” I said.

He looked at me, then at the bill, and let the subject end there.

When the waiter returned, I left the money neatly folded inside the bill. He added a coin, uncalled for.

Outside, before we parted, I asked him what he thought the lesson was.

“You don't fight weather,” he said. “You prepare for the day it becomes weather.”

At the time I reduced this to an engineering note. *Design for environmental faults. Add independent checks.* I thought I had extracted the useful part.

The practical answer is a cathedral of checks where each arch braces another—triplicate logic, parity with scrubbing, watchdogs to guard the watchdogs, and the prophylactic act of voting in paper because paper fails like a person fails, slow and legible.

The purpose of such checks is not to make the world obedient. It is to make disobedience leave evidence.

**Field Note #1. Horror, in our trade, is the clean error—the one that leaves no prints.**

The account above is a reconstruction. The anomaly beneath it is not. During Belgium's federal election on 18 May 2003, a candidate in the canton of Schaerbeek was credited with 4,096 excess preferential votes. The impossibility was detectable because the candidate's preference total exceeded the total for the list. The official experts' report says that, after no explanatory software error was found, the discrepancy could *very probably* be attributed to a spontaneous and random inversion of a binary position in RAM. The value 4,096 corresponds exactly to \(2^{12}\). Later technical retellings commonly describe the event as a single-event upset, plausibly caused by ionizing radiation. The report is archived at [poureva.be][2].

There is an older photograph I keep in a folder called *Proofs I Do Not Argue With*. In it, a moth lies taped to a page of an engineering log.

![Moth](https://ids.si.edu/ids/deliveryService?id=NMAH-NMAH2000-03035)

The page belongs to the Harvard Mark II. On 9 September 1947, its operators recorded a moth found in Relay #70, Panel F, and taped the insect beside the words “First actual case of bug being found.” The term *bug* was already old; the joke worked because the metaphor had unexpectedly acquired a body. ([National Museum of American History][1])

The log itself is terse. In the version engineers tell later, the machine misbehaves, the operators trace the fault through the relays, and eventually they find the moth caught between contacts. Remove moth; restore logic.

In Schaerbeek there was nothing to tape to the report. That may be why I keep the two stories together. Engineers prefer failures that can be pointed to: find the thing, name the thing, remove the thing, return the machine to service.

I have stood before the display and seen my own face in the glass, a later child of their superstition: that if we name it, we can banish it.

The moth looks unconvinced.

---

### II. The Heisenbug I Failed to Catch

<FIXME>
Change the title to something more evocative.
</FIXME>

<NOTE>
It would be nice to link to an actual report of someone who noticed an interesting or unique Heisenbug and how they diagnosed it. The story should then just be a retelling of that, with some embellishment. The story should not end with fixing the bug - it should portray the bug as something **real**, some kind of metaphysical phenomena that makes the system misbehave when it is not being observed.
</NOTE>

**Somewhere between midnight and the first ferry.**



<MUST HAVES>
"With strace running, it behaved as if repentant"
"I introduced print statements as if soothing a friend — *tell me what you are thinking when you do this*."
"We laid snares: printf incantations, timeouts shaved to angel-hair, a tracer that has broken better men than me."
"In the morning, I wrote my note: *This thing hates to be watched*."
</MUST HAVES>

---

### III. Maxwell’s Demon

<NOTE>
Tell a made up story about a state that is extremely unlikely, though possible, to happen, but did happen. 
For example, an MD5 hash collision.

Then, add a legend that one of the developers saw a large, terrifying demon that appeared to him in a dream, and that demon told him that the server room is cursed.

Ideally, find a real world example of something extremely unlikely happening, and use that as the basis for the story.
 </NOTE>

---

### IV. The Leprechaun of Off-by-One

<NOTE>
Tell a made up story of how actual Leprechaun from Irish folklore broke into the server room at night and "moved the loop bounds" (loop as in "a for-loop") by one.

This should be a story told to us by as a legend. In that legend, somebody allegedly, saw an actual small man in green clothes with a red beard in the server room.
</NOTE>

---

### V. Mercury in Retrograde

<NOTE>
Tell a made up story of how a bug coincided with Mercury being in retrograde.
The bug must be unique and interesting.
Do not talk about solutions.
The implication should be that the bug was a real thing, actually caused by Mercury being in retrograde.
We'll retain skeptics by documenting the operational timeline with enough specificity that the causal inference feels like a temptation, not a writer’s decree.
</NOTE>

---

### VI. The Crocodile in Vienna

<NOTE>
Tell a made up story of how a crocodile was spotted in Vienna, causing a stir among the locals and drawing attention from the authorities and impacting lifes of people in the city.
However, the crocodile had no impact on American software systems, which continued to operate as normal (different continent, get it?).

Some reference: https://chatgpt.com/share/68f3eeb1-c1c0-800e-b09b-e2ee25ddbf47
</NOTE>

---

### VII. A Natural, Boring Crash

<FIXME>
Change the title to something more evocative.
</FIXME>

<NOTE>
Tell a made up story of how a server crashed due to environmental reasons, such as overheating or power failure.
The story should emphasize that this is not a supernatural event, but rather a mundane one.
This is a necessary palate cleanser, it shores up our credibility by reminding readers that not all anomalies are numinous.
</NOTE>

---

## Coda

<PLACEHOLDER/>

<MUST HAVES>
Something with the same moral as "We live by the text; we survive by the small, retold stories that help us decide which part of the text applies when the world grows strange. If you keep a dossier of your own, write in a hand you will recognize when you are older. Tape in what must be taped. Leave space in the margins for the things we still do not know how to name."
</MUST HAVES>

---

## Endnotes & Sources

1. **Mark II moth, the “first actual case of bug being found.”** Smithsonian National Museum of American History object page for the original logbook with the taped insect. ([National Museum of American History][1])

2. **Schaerbeek e-voting anomaly (4096 extra votes).** Civic archive that digitized the official experts’ report: *Rapport concernant les élections du 18 mai 2003* (Collège d’experts, Belgium). ([poureva.be][2])

3. **Background summary of the 2003 incident and Belgian e-voting context.** “Electronic voting in Belgium,” overview with references to the Schaerbeek case. (Use as a pointer; prefer primary reports where available.) ([Wikipedia][3])

4. **Additional context from advocacy and oversight materials.** *eVoting in Belgium: State of the Union* (PourEVA), summarizing known incidents including the 4096-vote anomaly. ([vooreva.be][4])

*(Selected entries above anchor the real incidents used in this dossier. Other vignettes are composites or field recollections and are labeled with mock citations where appropriate.)*

[1]: https://americanhistory.si.edu/collections/object/nmah_334663 "Log Book With Computer Bug"
[2]: https://www.poureva.be/spip.php?article32= "Rapport concernant les élections du 18 mai 2003"
[3]: https://en.wikipedia.org/wiki/Electronic_voting_in_Belgium "Electronic voting in Belgium"
[4]: https://www.vooreva.be/IMG/pdf/eVoting_State_of_the_union.pdf "eVoting in Belgium “State of the Union”"

---