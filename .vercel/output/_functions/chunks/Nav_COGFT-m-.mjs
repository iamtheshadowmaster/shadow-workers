import { c as createComponent, s as spreadAttributes, u as unescapeHTML, b as renderTemplate, e as createAstro, i as renderSlot, j as renderHead, r as renderComponent, d as addAttribute, m as maybeRenderHead, a as renderScript } from './astro/server_DAeaCg1L.mjs';
import 'piccolore';
/* empty css                        */
import 'clsx';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const favicon = createSvgComponent({"meta":{"src":"/_astro/favicon.zEw0-RPe.svg","width":100,"height":100,"format":"svg"},"attributes":{"width":"100","height":"100","viewBox":"0 0 100 100","fill":"none"},"children":"\n<g clip-path=\"url(#clip0_8_20)\">\n<path d=\"M26.7837 25.842C32.9044 14.9862 48.5377 14.9862 54.6584 25.842L72.9272 58.2439C78.9408 68.9097 71.2342 82.102 58.9899 82.102H22.4523C10.208 82.102 2.50135 68.9097 8.51495 58.2439L26.7837 25.842Z\" fill=\"#92F2FF\" />\n<path d=\"M36.0627 20.7808C42.1834 9.92497 57.8167 9.92496 63.9374 20.7808L82.2062 53.1827C88.2198 63.8485 80.5131 77.0408 68.2688 77.0408H31.7312C19.4869 77.0408 11.7803 63.8485 17.7939 53.1827L36.0627 20.7808Z\" fill=\"#FF7EF0\" />\n<path d=\"M45.3416 15.7196C51.4623 4.86375 67.0956 4.86374 73.2163 15.7196L91.4851 48.1214C97.4987 58.7873 89.7921 71.9796 77.5477 71.9796H41.0101C28.7658 71.9796 21.0592 58.7873 27.0728 48.1215L45.3416 15.7196Z\" fill=\"black\" />\n</g>\n<defs>\n<clipPath id=\"clip0_8_20\">\n<rect width=\"100\" height=\"100\" fill=\"white\" />\n</clipPath>\n</defs>\n"});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Posthog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init(
      'phc_HK5aIdLHj4wQ2lF5FOuLNLk8v3Bbnl1cNukq4nECB36',
      {
        api_host:'https://eu.i.posthog.com'
      }
    )
  <\/script>`])));
}, "/Users/thomasmaitre/website/src/components/posthog.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><!--<script src="https://kit.fontawesome.com/05150f1c15.js" crossorigin="anonymous"><\/script> --><meta name="generator"', '><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"><title>Shadow - The AI-native workspace for humans and agents</title><meta name="description" content="Shadow is the AI-first Slack alternative that transforms every conversation into organized tasks, searchable notes, and actionable insights. Join the future of team communication.">', "", '</head> <body class="bg-black text-gray-100 min-h-screen antialiased overflow-x-hidden" data-astro-cid-sckkx6r4> ', " </body></html>"])), addAttribute(favicon.src, "href"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "PostHog", $$Posthog, { "data-astro-cid-sckkx6r4": true }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/thomasmaitre/website/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="fixed w-full z-50 bg-transparent border-b border-transparent transition-all duration-300"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="flex h-16 items-center justify-between"> <div class="flex items-center gap-8"> <a href="/" class="flex items-center space-x-2"> <img src="/images/logo.svg" alt="Shadow Logo" class="w-24 h-24"> </a> <!-- Solutions Dropdown --> <div class="relative group hidden md:block"> <button class="text-gray-300 hover:text-white text-sm transition-all duration-200 flex items-center gap-1">
Solutions
<svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div class="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2"> <div class="bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800 py-2"> <a href="/product-managers" class="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
PMs
</a> <a href="/engineers" class="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
Engineers
</a> <a href="/sales" class="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
Sales
</a> <a href="/founders" class="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
Founders
</a> <a href="/investors" class="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
Investors
</a> </div> </div> </div> <a href="/pricing" class="text-gray-300 hover:text-white text-sm transition-all duration-200 hidden md:block">
Pricing
</a> <a href="/blog" class="text-gray-300 hover:text-white text-sm transition-all duration-200 hidden md:block">
Blog
</a> </div> <div class="flex items-center"> <a href="https://app.yourshadowai.com/sign-in" class="text-gray-300 hover:text-white mr-4 text-sm transition-all duration-200">
Log in
</a> <a href="https://app.yourshadowai.com/sign-up" class="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all duration-200">
Early access
</a> </div> </div> </div> </nav> ${renderScript($$result, "/Users/thomasmaitre/website/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomasmaitre/website/src/components/Nav.astro", void 0);

export { $$Layout as $, $$Nav as a };
