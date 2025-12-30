import { c as createComponent, e as createAstro, m as maybeRenderHead, b as renderTemplate, d as addAttribute, i as renderSlot } from './astro/server_DAeaCg1L.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro();
const $$PageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageHero;
  const { title, subtitle, buttonText, buttonUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-black pt-48 pb-32"> <div class="max-w-4xl mx-auto px-6 text-center"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> ${title} </h1> ${subtitle && renderTemplate`<p class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"> ${subtitle} </p>`} ${buttonText && buttonUrl && renderTemplate`<div class="flex justify-center items-center"> <a${addAttribute(buttonUrl, "href")} class="inline-block px-6 py-3 text-base font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-50 shadow-lg transition-colors"> ${buttonText} </a> </div>`} </div> </section>`;
}, "/Users/thomasmaitre/website/src/components/PageHero.astro", void 0);

const $$Astro = createAstro();
const $$FeaturePanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturePanel;
  const { number, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-black border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-purple-500/50 transition-all duration-300"> <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"> <!-- Left: Content --> <div class="flex-1 w-full"> <div class="mb-4"> <span class="text-sm font-medium text-gray-500">${number}/4</span> </div> <h3 class="text-2xl md:text-3xl font-bold text-white mb-4"> ${title} </h3> <p class="text-lg text-gray-400 leading-relaxed"> ${description} </p> </div> <!-- Right: Visual Slot --> ${Astro2.slots.has("visual") && renderTemplate`<div class="flex-1 w-full"> <div class="rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 aspect-[4/3] overflow-hidden"> ${renderSlot($$result, $$slots["visual"])} </div> </div>`} </div> </div>`;
}, "/Users/thomasmaitre/website/src/components/FeaturePanel.astro", void 0);

export { $$PageHero as $, $$FeaturePanel as a };
