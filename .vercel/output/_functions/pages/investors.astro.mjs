/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$PersonaHero, a as $$PersonaStakes, b as $$PersonaFeatures } from '../chunks/PersonaFeatures_DY4R0jhi.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
export { renderers } from '../renderers.mjs';

const $$Investors = createComponent(($$result, $$props, $$slots) => {
  const stakesCopy = `Keep <span class="highlight-word" data-index="0">missing deals buried in spreadsheets</span> while your <span class="highlight-word" data-index="1">portfolio companies struggle without support</span>, watching <span class="highlight-word" data-index="2">partners lose alignment on investment theses</span>, and <span class="highlight-word" data-index="3">leaving opportunities on the table</span> because you can't keep up with deal flow.`;
  const features = [
    {
      title: "Monitor portfolio health in real-time",
      description: "Shadow tracks key metrics, team dynamics, and burn rate across your portfolio. Know which companies need attention before they ask."
    },
    {
      title: "Spot warning signs early",
      description: "Get alerts when momentum stalls, key hires leave, or runway tightens. Shadow helps you support founders before problems become crises."
    },
    {
      title: "Manage deal flow without the chaos",
      description: "Track prospects, research markets, and coordinate with partners. Shadow keeps your pipeline organized so you never miss the next breakout."
    },
    {
      title: "Support founders strategically",
      description: "Understand what's actually happening at each company. Shadow gives you the context to help founders win without sitting in every board meeting."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="bg-black"> ${renderComponent($$result2, "PersonaHero", $$PersonaHero, { "headline": "Track portfolio performance, spot opportunities, never miss a signal", "subheadline": "The AI that helps investors manage deal flow, monitor portfolio health, and stay ahead without drowning in data.", "persona": "Investors", "dotColor": "bg-pink-500" })} ${renderComponent($$result2, "PersonaStakes", $$PersonaStakes, { "stakesCopy": stakesCopy })} ${renderComponent($$result2, "PersonaFeatures", $$PersonaFeatures, { "sectionTitle": "Your daily reality with Shadow", "features": features })} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/investors.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/investors.astro";
const $$url = "/investors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Investors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
