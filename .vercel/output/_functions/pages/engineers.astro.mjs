/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$PersonaHero, a as $$PersonaStakes, b as $$PersonaFeatures } from '../chunks/PersonaFeatures_DY4R0jhi.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
export { renderers } from '../renderers.mjs';

const $$Engineers = createComponent(($$result, $$props, $$slots) => {
  const stakesCopy = `Watch your <span class="highlight-word" data-index="0">best engineers burn out and quit</span> while <span class="highlight-word" data-index="1">velocity plummets</span> and product blames you, <span class="highlight-word" data-index="2">becoming the bottleneck</span> instead of the enabler, and <span class="highlight-word" data-index="3">losing your team's trust</span> because they can't tell what's actually critical.`;
  const features = [
    {
      title: "Unblock PRs that move the needle",
      description: "Shadow identifies which pull requests are blocking critical work and which can wait. Your team ships faster without the chaos."
    },
    {
      title: "Protect deep work time",
      description: "Cut context switching in half. Shadow handles status updates, answers questions, and keeps stakeholders informed so your team can focus."
    },
    {
      title: "Spot burnout before it happens",
      description: "Track workload patterns, meeting overload, and delivery pressure. Shadow alerts you when someone's heading for the edge."
    },
    {
      title: "Lead with clarity, not micromanagement",
      description: "Your team knows what's critical and why. Shadow keeps priorities clear and helps engineers self-organize around what matters most."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="bg-black"> ${renderComponent($$result2, "PersonaHero", $$PersonaHero, { "headline": "Protect your team's focus, ship faster, lead with clarity", "subheadline": "The AI that helps engineering managers cut context switching, unblock the right work, and give their team the focus time they deserve.", "persona": "Engineering Managers", "dotColor": "bg-green-500" })} ${renderComponent($$result2, "PersonaStakes", $$PersonaStakes, { "stakesCopy": stakesCopy })} ${renderComponent($$result2, "PersonaFeatures", $$PersonaFeatures, { "sectionTitle": "Your daily reality with Shadow", "features": features })} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/engineers.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/engineers.astro";
const $$url = "/engineers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Engineers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
