/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$PageHero, a as $$FeaturePanel } from '../chunks/FeaturePanel_BWZ_onX3.mjs';
import { $ as $$OKRControlVisual, a as $$GroupChatsVisual, b as $$ContextGatheringVisual, c as $$NativeFeaturesVisual } from '../chunks/NativeFeaturesVisual_CS67SnTh.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
export { renderers } from '../renderers.mjs';

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="bg-black"> <!-- Hero Section --> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "From scattered effort to synchronized execution", "subtitle": "Align your team around shared objectives and context. Shadow ensures everyone's AI assistant speaks the same strategic language.", "buttonText": "Get early access", "buttonUrl": "https://app.yourshadowai.com/sign-up" })} <!-- Feature Panels Section --> <section class="py-20 px-6"> <div class="max-w-7xl mx-auto space-y-8"> <!-- Feature 1: Control team alignment --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 1, "title": "Control team alignment", "description": "Set system prompts at team and individual levels. Shadow ensures everyone's AI assistant understands the same priorities and speaks the same strategic language." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "OKRControlVisual", $$OKRControlVisual, { "slot": "visual" })}` })} <!-- Feature 2: Organize in projects --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 2, "title": "Organize in projects", "description": "Create dedicated projects for different initiatives. Attach specific intructions and context to the project so Shadow can help everyone stay aligned on project goals and deliverables." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "GroupChatsVisual", $$GroupChatsVisual, { "slot": "visual" })}` })} <!-- Feature 3: Import your context --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 3, "title": "Import your context", "description": "Connect Slack, Notion, GitHub, Google Drive, and more. Shadow syncs your existing conversations, docs, and workflows to build comprehensive team context." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "ContextGatheringVisual", $$ContextGatheringVisual, { "slot": "visual" })}` })} <!-- Feature 4: Use native features --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 4, "title": "Use native features", "description": "Leverage Shadow's built-in chat, calls, notes, and tasks for enhanced AI performance. Native features provide 3x better context retrieval and team coordination." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "NativeFeaturesVisual", $$NativeFeaturesVisual, { "slot": "visual" })}` })} </div> </section> <!-- Final CTA --> ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/team.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/team.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
