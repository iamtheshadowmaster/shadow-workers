/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
import { $ as $$FinalCTA } from '../chunks/FinalCTA_13jzCwPN.mjs';
export { renderers } from '../renderers.mjs';

const $$Slack = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900"> ${renderComponent($$result2, "Nav", $$Nav, {})} <main class="flex-1 px-6 py-32 sm:py-40 flex flex-col items-center justify-center"> <section class="max-w-5xl mx-auto text-center space-y-6"> <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">Turn Slack chaos into <br>tasks, answers and notes</h1> <p class="text-gray-300 text-lg max-w-3xl mx-auto">Shadow for Slack captures tasks directly from chat and answers questions for you automatically, using rules you control.</p> <div class="flex justify-center mt-6"> <a href="https://slack.com/oauth/v2/authorize?client_id=8731098477523.10064085777316&scope=channels:history,channels:read,chat:write,groups:history,groups:read,im:history,im:read,chat:write.customize&user_scope=channels:history,channels:read,groups:history,im:history,chat:write,im:read,mpim:history"> <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"> </a> </div> <p class="text-gray-400 text-sm">Trusted, rule-based automations that respect your channels and permissions.</p> </section> <section class="max-w-4xl mx-auto mt-12 text-center text-sm text-gray-400">
Shadow only reads the channels you allow, follows your rules for when to answer, and can be revoked any time.
</section> </main> ${renderComponent($$result2, "CTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/thomasmaitre/website/src/pages/slack.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/slack.astro";
const $$url = "/slack";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Slack,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
