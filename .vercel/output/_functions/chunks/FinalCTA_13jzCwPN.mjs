import { c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_DAeaCg1L.mjs';
import 'piccolore';
import 'clsx';
import { b as backgroundImage } from './Footer_DLRcZsmx.mjs';

const $$FinalCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Final CTA with Glass -->${maybeRenderHead()}<section class="relative py-40 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"${addAttribute(`background-image: url(${backgroundImage.src});`, "style")}> <div class="relative max-w-5xl mx-auto px-6 text-center"> <!-- Large headline --> <h2 class="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05]">
Stay aligned<br> <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
Stay ahead
</span> </h2> <!-- CTA Button --> <div class="flex justify-center items-center mt-12"> <a href="https://app.yourshadowai.com/sign-up" class="inline-block px-6 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-50 shadow-2xl">
Get early access
</a> </div> </div> </section>`;
}, "/Users/thomasmaitre/website/src/components/FinalCTA.astro", void 0);

export { $$FinalCTA as $ };
