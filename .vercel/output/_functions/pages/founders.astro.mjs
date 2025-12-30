/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$PersonaHero, a as $$PersonaStakes, b as $$PersonaFeatures } from '../chunks/PersonaFeatures_DY4R0jhi.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
export { renderers } from '../renderers.mjs';

const $$Founders = createComponent(($$result, $$props, $$slots) => {
  const stakesCopy = `Keep <span class="highlight-word" data-index="0">drowning in reactive work</span> while your team <span class="highlight-word" data-index="1">loses faith in your direction</span>, watching <span class="highlight-word" data-index="2">quarters slip by at 15% completion</span> with investors getting nervous, and <span class="highlight-word" data-index="3">seeing everyone pull in different directions</span> because you're too buried to lead.`;
  const features = [
    {
      title: "Know what's actually happening",
      description: "Shadow gives you a real-time view of team progress, blockers, and momentum across every function. No more surprise misses at the end of quarter."
    },
    {
      title: "Align the whole company",
      description: "Everyone knows the top 3 priorities and why they matter. Shadow keeps your team pulling in the same direction without constant check-ins."
    },
    {
      title: "Stop firefighting, start building",
      description: "Cut reactive work in half. Shadow handles the chaos so you can focus on strategy, hiring, and what actually builds the company."
    },
    {
      title: "Hit goals without losing your mind",
      description: "Track OKRs that matter and spot risks early. Shadow helps you lead with confidence instead of Sunday night anxiety."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="bg-black"> ${renderComponent($$result2, "PersonaHero", $$PersonaHero, { "headline": "Lead strategically, not reactively", "subheadline": "The AI that helps founders focus on what builds the company, align their entire team, and hit quarterly goals without losing their minds.", "persona": "Founders", "dotColor": "bg-purple-500" })} ${renderComponent($$result2, "PersonaStakes", $$PersonaStakes, { "stakesCopy": stakesCopy })} ${renderComponent($$result2, "PersonaFeatures", $$PersonaFeatures, { "sectionTitle": "Your daily reality with Shadow", "features": features })} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/founders.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/founders.astro";
const $$url = "/founders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Founders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
