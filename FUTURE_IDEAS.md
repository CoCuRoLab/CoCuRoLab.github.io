# Future landing page ideas

Interactive ideas considered for the homepage but not yet built. (A 3D robot
viewer and toy ergodic search demo were tried and removed in the Oct 2026
redesign; see git history for `demos/`.) These are the remaining candidates,
roughly in order of effort.

## Hover/flip cards for the three research pillars

Instead of static bullet lists under each `feature.html` block, make the
"Current Research Topic Areas" bullets reveal on hover (or flip the card) to
show a one-line "why it matters" and a link to the most relevant recent
paper. CSS-only (`:hover` + `transform`), no new JS dependency. Lowest
effort of the three.

## Client-side filterable research/people grid

The site already ships `mark.js` and a search box (`_includes/search-box.html`,
`_scripts/search.js`) for `/research`. Surface a lightweight version on the
homepage: a text input or tag chips that filter the three pillar cards (and
optionally project cards from `_data/projects.yaml`) live, without a page
navigation. Reuses existing includes/data rather than new tooling.

## Interactive people ↔ research map

Each member's markdown file in `_members/` could carry a `pillars:` tag
(e.g. `[search-exploration, structured-learning]`). On hover over a member's
photo (e.g. on `/members`, or a condensed version embedded on the homepage),
highlight which pillar(s) they work on; clicking jumps to their profile.
Requires adding pillar tags to each `_members/*.md` file and a small JS/CSS
pass to wire up the highlighting.
