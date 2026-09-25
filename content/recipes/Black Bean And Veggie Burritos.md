---
title: "Black Bean And Veggie Burritos"
draft: false
---

<style>

.rgf {
  box-sizing: border-box;
  margin: 0;
  padding: 1.15rem 1.15rem 1.25rem;
  max-width: 100%;
  overflow-x: auto;
  color: var(--rgf-ink);
  background: var(--rgf-ground);
  font-family: var(--rgf-font);
  font-size: 15px;
  line-height: 1.35;
  border-radius: calc(var(--rgf-radius) + 5px);
  box-shadow: var(--rgf-shadow);
  -webkit-text-size-adjust: 100%;
}
.rgf *, .rgf *::before, .rgf *::after { box-sizing: border-box; }

.rgf__head { margin: 0; padding: 0; display: block; }
.rgf__title {
  font-family: var(--rgf-title-font);
  font-size: clamp(1.3rem, 1.05rem + 1vw, 1.65rem);
  font-weight: 700;
  letter-spacing: var(--rgf-title-tracking);
  line-height: 1.15;
  margin: 0;
}
.rgf__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem 0.85rem;
  margin: 0.45rem 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.76rem;
  color: var(--rgf-ink-soft);
}
.rgf__fact { display: inline-flex; align-items: baseline; gap: 0.28rem; }
.rgf__fact b {
  font-family: var(--rgf-mono);
  font-weight: 600;
  font-size: 0.84rem;
  font-variant-numeric: tabular-nums;
  color: var(--rgf-ink);
}
.rgf__fact--hero b { color: var(--rgf-accent); }
.rgf__gear { margin: 0.5rem 0 0; padding: 0; font-size: 0.72rem; }
.rgf__gear-item {
  display: inline-block;
  margin: 0 0.28rem 0.28rem 0;
  padding: 0.08rem 0.5rem;
  border: 1px solid var(--rgf-rule);
  border-radius: 99px;
  color: var(--rgf-ink-soft);
}
.rgf__hr {
  height: 2px;
  margin: 0.75rem 0 0.6rem;
  border: 0;
  background: var(--rgf-accent);
}

/*
 * Cells butt directly against one another — no gaps. An ingredient must stay
 * physically joined to the operation that consumes it, or you lose the one
 * thing this format exists for: glance at a row, see what happens to it.
 * Regions are separated by fills and 1px ground-coloured seams, never by rules.
 */
.rgf__table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  overflow: hidden;
  border-radius: var(--rgf-radius);
}
.rgf__table td {
  border: 0;
  padding: 0.46rem 0.6rem;
  vertical-align: middle;
}

.rgf__setup td {
  background: var(--rgf-tint-0);
  color: var(--rgf-on-0);
  box-shadow: inset 0 -1px 0 var(--rgf-ground);
  font-weight: 600;
  text-align: left;
}
.rgf__setup-mark {
  font-family: var(--rgf-mono);
  font-size: 0.62rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--rgf-accent);
  margin-right: 0.55rem;
}
.rgf__setup-detail {
  font-family: var(--rgf-mono);
  font-size: 0.72rem;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  margin-left: 0.55rem;
  opacity: 0.75;
}
.rgf__setup .rgf__tag { margin: 0 0 0 0.55rem; vertical-align: 1px; }

.rgf__ing {
  background: var(--rgf-surface);
  width: 34%;
  min-width: 11rem;
  text-align: left;
}
.rgf__ing--alt { background: var(--rgf-surface-alt); }
.rgf__qty {
  font-family: var(--rgf-mono);
  font-size: 0.8rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--rgf-qty);
  margin-right: 0.4rem;
  white-space: nowrap;
}

/*
 * Pass-through. This carries the ingredient's own row colour rightward, so the
 * row reads as one unbroken band that terminates in the block consuming it.
 * That band IS the "what happens to this, and when" answer.
 */
.rgf__flow {
  background: var(--rgf-surface);
  padding: 0;
  min-width: 1.5rem;
}
.rgf__flow--alt { background: var(--rgf-surface-alt); }
/* Row whose material is claimed only by a setup step: nothing to point at. */
.rgf__flow--none { background: var(--rgf-surface); }
.rgf__flow--none.rgf__flow--alt { background: var(--rgf-surface-alt); }

.rgf__op {
  text-align: center;
  padding: 0.5rem 0.6rem;
  min-width: 3.4rem;
  max-width: 12rem;
  background: var(--rgf-tint-1);
  color: var(--rgf-on-1);
  /* Seams, not rules — they only separate two filled regions of like colour. */
  box-shadow:
    inset 1px 0 0 var(--rgf-ground),
    inset 0 1px 0 var(--rgf-ground);
}
.rgf__op--d0 { background: var(--rgf-tint-0); color: var(--rgf-on-0); }
.rgf__op--d1 { background: var(--rgf-tint-1); color: var(--rgf-on-1); }
.rgf__op--d2 { background: var(--rgf-tint-2); color: var(--rgf-on-2); }
.rgf__op--d3 { background: var(--rgf-tint-3); color: var(--rgf-on-3); }
.rgf__op--d4 { background: var(--rgf-tint-4); color: var(--rgf-on-4); }

/* Hands-off time: hatched, so free stretches pop out of the cascade. */
.rgf__op--passive {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(128, 128, 128, 0) 0 5px,
    rgba(128, 128, 128, 0.16) 5px 10px
  );
}

.rgf__verb {
  display: block;
  font-weight: 700;
  font-size: 0.97rem;
  line-height: 1.2;
  text-transform: var(--rgf-verb-case);
  font-variant: var(--rgf-verb-variant);
  letter-spacing: var(--rgf-verb-tracking);
}
.rgf__detail {
  display: block;
  margin-top: 0.22rem;
  font-family: var(--rgf-mono);
  font-size: 0.71rem;
  font-variant-numeric: tabular-nums;
  line-height: 1.25;
  opacity: 0.82;
}
.rgf__cue {
  display: block;
  margin: 0.22rem auto 0;
  max-width: 11rem;
  font-size: 0.71rem;
  font-style: italic;
  line-height: 1.25;
  opacity: 0.72;
}
.rgf__tag {
  display: inline-block;
  margin-top: 0.3rem;
  padding: 0.02rem 0.38rem;
  border: 1px solid currentColor;
  border-radius: 99px;
  font-family: var(--rgf-mono);
  font-size: 0.58rem;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  opacity: 0.6;
}

.rgf__credit {
  margin: 0.85rem 0 0;
  font-size: 0.68rem;
  line-height: 1.4;
  color: var(--rgf-ink-soft);
  opacity: 0.85;
}
.rgf__credit a { color: var(--rgf-accent); text-decoration: none; }
.rgf__credit a:hover { text-decoration: underline; }

.rgf__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Card fallback: same tokens, stacked. */
.rgf__card-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--rgf-gap);
}
.rgf__card-item {
  background: var(--rgf-surface);
  border-radius: var(--rgf-radius);
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--rgf-tint-3);
}
.rgf__card-item--passive { border-left-style: dashed; }
.rgf__card-label { font-weight: 700; margin: 0 0 0.15rem; }
.rgf__card-kind {
  display: inline-block;
  margin-left: 0.4rem;
  font-family: var(--rgf-mono);
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  color: var(--rgf-accent);
}
.rgf__card-detail {
  font-family: var(--rgf-mono);
  font-size: 0.73rem;
  font-variant-numeric: tabular-nums;
  color: var(--rgf-ink-soft);
  margin: 0.2rem 0 0;
}
.rgf__card-inputs {
  margin: 0.3rem 0 0;
  padding-left: 1.05rem;
  font-size: 0.85rem;
  color: var(--rgf-ink-soft);
}
.rgf__fallback-note {
  margin: 0 0 0.6rem;
  font-size: 0.78rem;
  font-style: italic;
  color: var(--rgf-ink-soft);
}

/*
 * Phone sizing. The table is a diagram, so it degrades by getting tighter
 * rather than by reflowing — a reflow would break the left-to-right reading
 * that carries the meaning. Trim the paddings and the tertiary cue tier so a
 * genuinely multi-step recipe still fits a 375px screen without scrolling.
 */
@media (max-width: 560px) {
  .rgf { font-size: 14px; padding: 0.9rem 0.75rem 1rem; }
  .rgf__cue { display: none; }
  .rgf__table td { padding: 0.42rem 0.38rem; }
  .rgf__ing { min-width: 7.5rem; width: 40%; }
  .rgf__op { min-width: 2.5rem; padding: 0.45rem 0.3rem; }
  .rgf__verb { font-size: 0.88rem; }
  .rgf__detail { font-size: 0.66rem; }
  .rgf__gear-item { font-size: 0.68rem; }
}
@media print {
  .rgf { box-shadow: none; }
}


.rgf.rgf--ink {
  --rgf-ground: #ffffff;
  --rgf-surface: #ffffff;
  --rgf-surface-alt: #f5f5f5;
  --rgf-ink: #0a0a0a;
  --rgf-ink-soft: #565656;
  --rgf-rule: #d8d8d8;
  --rgf-accent: #e0301e;
  --rgf-qty: #e0301e;
  --rgf-tint-0: #f2f2f2;
  --rgf-on-0: #0a0a0a;
  --rgf-tint-1: #e2e2e2;
  --rgf-on-1: #0a0a0a;
  --rgf-tint-2: #c9c9c9;
  --rgf-on-2: #0a0a0a;
  --rgf-tint-3: #8a8a8a;
  --rgf-on-3: #0a0a0a;
  --rgf-tint-4: #111111;
  --rgf-on-4: #ffffff;
  --rgf-font: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --rgf-title-font: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --rgf-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --rgf-radius: 0;
  --rgf-gap: 2px;
  --rgf-shadow: none;
  --rgf-title-tracking: -0.03em;
  --rgf-verb-case: uppercase;
  --rgf-verb-variant: normal;
  --rgf-verb-tracking: 0.06em;
}

</style>
<figure class="rgf rgf--ink rgf--table" data-rgf-version="0-draft">
  <figcaption class="rgf__head">
    <h3 class="rgf__title">Black Bean And Veggie Burritos</h3>
    <ul class="rgf__facts"><li class="rgf__fact rgf__fact--hero"><b>23 min+</b> <span>total</span></li><li class="rgf__fact"><b>18 min</b> <span>hands-on</span></li><li class="rgf__fact"><b>14</b> <span>ingredients</span></li><li class="rgf__fact"><b>7</b> <span>steps</span></li></ul>
    <p class="rgf__gear"><span class="rgf__gear-item">large pan</span><span class="rgf__gear-item">pan</span><span class="rgf__gear-item">parchment paper or foil</span><span class="rgf__gear-item">ziplock bag</span></p>
  </figcaption>
  <hr class="rgf__hr"/>
  <p class="rgf__sr-only">Steps: heat pan; Add your chopped zucchini, bell pepper and onion into the pan, and cook over a medium low flame until the veggies begin to soften, medium low flame · 7-8 minutes, until the veggies begin to soften; Add in your black beans, hot sauce and spices. Toss together to coat evenly, and continue to cook over a medium flame., medium flame · 5-7 minutes; Remove from heat and let the veggies cool before assembling your burrito., 5 minutes; Lay a wrap flat onto your working surface, spread some cheese over the center, and pour about ⅓ cup of the filling into the center. Fold the sides of the burrito over, then begin rolling tightly from the bottom.; Wipe down the pan you cooked your veggies in, and grill each side of the burrito on medium heat, starting with the opening side down., medium heat · 2 minute; Wrap each burrito individually in parchment paper or foil, and store in a reusable or ziplock bag.</p>
  <table class="rgf__table">
    <tbody>
<tr class="rgf__setup"><td colspan="7"><span class="rgf__setup-mark">prep</span>heat pan<span class="rgf__setup-detail">medium heat · 1 minute</span></td></tr>
<tr><td class="rgf__ing"><span class="rgf__qty">2 tbsp</span>olive oil</td><td class="rgf__op rgf__op--d1" rowspan="4"><span class="rgf__verb">cook vegetables</span><span class="rgf__detail">medium low flame · 7-8 minutes</span><span class="rgf__cue">until the veggies begin to soften</span></td><td class="rgf__op rgf__op--d2" rowspan="12"><span class="rgf__verb">cook with beans and spices</span><span class="rgf__detail">medium flame · 5-7 minutes</span></td><td class="rgf__op rgf__op--d3 rgf__op--passive" rowspan="12"><span class="rgf__verb">cool</span><span class="rgf__detail">5 minutes</span><span class="rgf__tag">hands-off</span></td><td class="rgf__op rgf__op--d4" rowspan="14"><span class="rgf__verb">assemble</span></td><td class="rgf__op rgf__op--d4" rowspan="14"><span class="rgf__verb">grill</span><span class="rgf__detail">medium heat · 2 minute</span></td><td class="rgf__op rgf__op--d4" rowspan="14"><span class="rgf__verb">freeze</span></td></tr>
<tr><td class="rgf__ing rgf__ing--alt"><span class="rgf__qty">1</span>zucchini, chopped</td></tr>
<tr><td class="rgf__ing"><span class="rgf__qty">1</span>red bell pepper, chopped</td></tr>
<tr><td class="rgf__ing rgf__ing--alt"><span class="rgf__qty">⅓ cup</span>red onion, diced (about ⅓ of a large onion)</td></tr>
<tr><td class="rgf__ing"><span class="rgf__qty">1 can</span>of black beans, rinsed (15 oz)</td><td class="rgf__flow"></td></tr>
<tr><td class="rgf__ing rgf__ing--alt"><span class="rgf__qty">1 tbsp</span>hot sauce (optional)</td><td class="rgf__flow rgf__flow--alt"></td></tr>
<tr><td class="rgf__ing"><span class="rgf__qty">1 tsp</span>chili powder</td><td class="rgf__flow"></td></tr>
<tr><td class="rgf__ing rgf__ing--alt"><span class="rgf__qty">1 tsp</span>cumin</td><td class="rgf__flow rgf__flow--alt"></td></tr>
<tr><td class="rgf__ing"><span class="rgf__qty">½ tsp</span>garlic powder</td><td class="rgf__flow"></td></tr>
<tr><td class="rgf__ing rgf__ing--alt"><span class="rgf__qty">¼ tsp</span>salt</td><td class="rgf__flow rgf__flow--alt"></td></tr>
<tr><td class="rgf__ing"><span class="rgf__qty">¼ tsp</span>black pepper</td><td class="rgf__flow"></td></tr>
<tr><td class="rgf__ing rgf__ing--alt"><span class="rgf__qty">¼ tsp</span>smoked paprika</td><td class="rgf__flow rgf__flow--alt"></td></tr>
<tr><td class="rgf__ing"><span class="rgf__qty">5 large</span>wraps</td><td class="rgf__flow"></td><td class="rgf__flow"></td><td class="rgf__flow"></td></tr>
<tr><td class="rgf__ing rgf__ing--alt"><span class="rgf__qty">½ cup</span>shredded cheese of choice, like cheddar or mozzarella</td><td class="rgf__flow rgf__flow--alt"></td><td class="rgf__flow rgf__flow--alt"></td><td class="rgf__flow rgf__flow--alt"></td></tr>
    </tbody>
  </table>
  <p class="rgf__credit"><a href="https://tabularrecipe.com/" rel="noopener">Made with Tabular Recipe</a></p>
</figure>