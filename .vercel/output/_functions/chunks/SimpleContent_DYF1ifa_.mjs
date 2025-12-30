import { c as createComponent, r as renderComponent, m as maybeRenderHead, i as renderSlot, b as renderTemplate } from './astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { a as $$Nav } from './Nav_COGFT-m-.mjs';
import { $ as $$Footer } from './Footer_DLRcZsmx.mjs';

const $$SimpleContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Nav", $$Nav, {})} ${maybeRenderHead()}<main class="relative isolate"> <div class="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8"> <div class="text-base leading-7"> ${renderSlot($$result, $$slots["default"])} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "/Users/thomasmaitre/website/src/components/SimpleContent.astro", void 0);

export { $$SimpleContent as $ };
