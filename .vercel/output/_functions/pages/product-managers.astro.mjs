/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$PersonaHero, a as $$PersonaStakes, b as $$PersonaFeatures } from '../chunks/PersonaFeatures_DY4R0jhi.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
export { renderers } from '../renderers.mjs';

const $$ProductManagers = createComponent(($$result, $$props, $$slots) => {
  const stakesCopy = `Keep <span class="highlight-word" data-index="0">shipping features nobody uses</span> while engineering <span class="highlight-word" data-index="1">loses trust in your roadmap</span>, <span class="highlight-word" data-index="2">watching launches slip another quarter</span> as leadership questions your ability to deliver, and <span class="highlight-word" data-index="3">seeing your team drift apart</span> because nobody knows what done actually means.`;
  const features = [
    {
      title: "Prioritize features by actual impact",
      description: "Stop guessing. Shadow analyzes user data, engineering capacity, and business goals to rank your backlog by what will actually move metrics."
    },
    {
      title: "Keep specs current without the friction",
      description: "Shadow updates docs as decisions change, surfaces blockers before standups, and answers engineering questions instantly."
    },
    {
      title: "Align engineering without endless meetings",
      description: "Your team knows what's critical and why. Shadow keeps everyone synchronized on priorities, context, and tradeoffs."
    },
    {
      title: "Ship on time, prove the impact",
      description: "Track metrics that matter. Shadow connects launches to business outcomes automatically so you can show what's working."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="bg-black"> ${renderComponent($$result2, "PersonaHero", $$PersonaHero, { "headline": "Ship features that move metrics, not just backlogs", "subheadline": "The AI that helps product teams align on what matters, deliver on time, and prove impact with data\u2014not guesswork.", "persona": "Product Managers", "dotColor": "bg-blue-500" })} ${renderComponent($$result2, "PersonaStakes", $$PersonaStakes, { "stakesCopy": stakesCopy })} ${renderComponent($$result2, "PersonaFeatures", $$PersonaFeatures, { "sectionTitle": "Your daily reality with Shadow", "features": features })} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/product-managers.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/product-managers.astro";
const $$url = "/product-managers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProductManagers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
