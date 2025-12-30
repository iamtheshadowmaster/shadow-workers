/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$PersonaHero, a as $$PersonaStakes, b as $$PersonaFeatures } from '../chunks/PersonaFeatures_DY4R0jhi.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
export { renderers } from '../renderers.mjs';

const $$Sales = createComponent(($$result, $$props, $$slots) => {
  const stakesCopy = `Keep <span class="highlight-word" data-index="0">missing quota while working 70-hour weeks</span>, watching your <span class="highlight-word" data-index="1">top performers leave</span> because they don't trust your direction, and <span class="highlight-word" data-index="2">seeing your team chase the wrong deals</span> while leadership questions whether you can actually lead.`;
  const features = [
    {
      title: "Focus on deals that will close",
      description: "Shadow analyzes pipeline health, buyer signals, and historical patterns to show you which deals deserve your time and which are stalling."
    },
    {
      title: "Stop chasing dead leads",
      description: "Get real-time alerts when deals go cold or competitors enter the picture. Shadow helps you course-correct before it's too late."
    },
    {
      title: "Coach reps with real data",
      description: "See exactly where deals are stuck and why. Shadow gives you the context to help your team win without sitting in every call."
    },
    {
      title: "Hit quota without the burnout",
      description: "Align your team on the right accounts, the right approach, and the right next steps. Shadow keeps everyone focused on revenue that matters."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="bg-black"> ${renderComponent($$result2, "PersonaHero", $$PersonaHero, { "headline": "Hit quota without burning out your team", "subheadline": "The AI that helps sales leaders focus on the deals that close, align their team on what matters, and consistently over-deliver.", "persona": "Sales Managers", "dotColor": "bg-orange-500" })} ${renderComponent($$result2, "PersonaStakes", $$PersonaStakes, { "stakesCopy": stakesCopy })} ${renderComponent($$result2, "PersonaFeatures", $$PersonaFeatures, { "sectionTitle": "Your daily reality with Shadow", "features": features })} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/sales.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/sales.astro";
const $$url = "/sales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
