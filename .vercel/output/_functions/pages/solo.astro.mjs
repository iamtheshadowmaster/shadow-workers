/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$PageHero, a as $$FeaturePanel } from '../chunks/FeaturePanel_BWZ_onX3.mjs';
import { $ as $$ChatVisual, a as $$SystemPromptVisual, b as $$SlackNotificationVisual, c as $$IntegrationsVisual } from '../chunks/IntegrationsVisual_2JSGjoY-.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
export { renderers } from '../renderers.mjs';

const $$Solo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="bg-black"> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Zero setup. Instant value. Daily progress.", "subtitle": "Your personal AI sidekick that understands your goals and helps you make progress every day.", "buttonText": "Get early access", "buttonUrl": "https://app.yourshadowai.com/sign-up" })} <!-- Feature Panels Section --> <section class="py-20 px-6"> <div class="max-w-7xl mx-auto space-y-8"> <!-- Feature 1: Instant onboarding --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 1, "title": "Instant onboarding", "description": "Give Shadow your role, company URL and current biggest goal. Shadow starts gathering a comprehensive context, better than you ever would." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "ChatVisual", $$ChatVisual, { "slot": "visual" })}` })} <!-- Feature 2: Personal roadmap --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 2, "title": "Personal roadmap", "description": "Shadow creates your personal system prompt\u2014capturing your role, company context, and objectives into a strategic blueprint that persists across every conversation." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "SystemPromptVisual", $$SystemPromptVisual, { "slot": "visual" })}` })} <!-- Feature 3: Daily reality check --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 3, "title": "Daily reality check", "description": "Every morning, Shadow asks one targeted question about your goals. It's like having your smartest colleague tap you on the shoulder." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "SlackNotificationVisual", $$SlackNotificationVisual, { "slot": "visual" })}` })} <!-- Feature 4: Connect your tools --> ${renderComponent($$result2, "FeaturePanel", $$FeaturePanel, { "number": 4, "title": "Connect your tools", "description": "Connect Slack, Calendar, Gmail, Google Drive, Notion, GitHub, Salesforce, Linear and more so Shadow can read your patterns and help you work better." }, { "visual": ($$result3) => renderTemplate`${renderComponent($$result3, "IntegrationsVisual", $$IntegrationsVisual, { "slot": "visual" })}` })} </div> </section> <!-- Final CTA --> ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/solo.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/solo.astro";
const $$url = "/solo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
