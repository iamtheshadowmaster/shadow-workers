import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, u as unescapeHTML, a as renderScript } from './astro/server_DAeaCg1L.mjs';
import 'piccolore';
import 'clsx';
import { b as backgroundImage } from './Background-2_BU3c8HXy.mjs';
/* empty css                             */

const $$Astro$2 = createAstro();
const $$PersonaHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PersonaHero;
  const { headline, subheadline, persona, dotColor = "bg-blue-500" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden"> <!-- Background image --> <div class="absolute inset-0"> <img${addAttribute(backgroundImage.src, "src")} alt="" class="w-full h-full object-cover"> </div> <!-- Hero Content --> <div class="relative z-10 max-w-6xl mx-auto px-6 text-center"> <!-- Persona Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-8"> <div${addAttribute(`w-2 h-2 rounded-full ${dotColor}`, "class")}></div> <span class="text-sm font-medium text-black uppercase tracking-wider">${persona}</span> </div> <!-- Main Headline --> <h1 class="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight tracking-tight max-w-5xl mx-auto"> ${headline} </h1> <!-- Subheadline --> <p class="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-normal leading-relaxed"> ${subheadline} </p> <!-- CTA Button --> <div class="flex items-center justify-center"> <a href="https://app.yourshadowai.com/sign-up" class="px-6 py-2.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
Get early access
</a> </div> </div> </section>`;
}, "/Users/thomasmaitre/website/src/components/PersonaHero.astro", void 0);

const $$Astro$1 = createAstro();
const $$PersonaStakes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PersonaStakes;
  const { stakesCopy } = Astro2.props;
  return renderTemplate`<!-- Scroll container that creates the scroll distance -->${maybeRenderHead()}<div id="persona-stakes-section" class="relative bg-black" style="height: 200vh;" data-astro-cid-rybcligs> <!-- Fixed/sticky content --> <div id="persona-stakes-sticky" class="sticky top-0 h-screen flex items-center justify-center" data-astro-cid-rybcligs> <div class="max-w-5xl mx-auto px-6" data-astro-cid-rybcligs> <!-- Headline --> <h2 class="text-xl md:text-2xl lg:text-3xl font-medium text-white/60 text-center mb-16 leading-relaxed" data-astro-cid-rybcligs>
Or just keep going like this
</h2> <!-- Scrolling Content with highlighted words --> <div id="persona-stakes-content" class="text-2xl md:text-3xl lg:text-4xl font-normal text-white/40 text-center leading-relaxed max-w-4xl mx-auto" data-astro-cid-rybcligs>${unescapeHTML(stakesCopy)}</div> </div> </div> </div> ${renderScript($$result, "/Users/thomasmaitre/website/src/components/PersonaStakes.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/thomasmaitre/website/src/components/PersonaStakes.astro", void 0);

const $$Astro = createAstro();
const $$PersonaFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PersonaFeatures;
  const { sectionTitle, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-black py-32"> <div class="max-w-7xl mx-auto px-6"> <!-- Section Title --> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 leading-tight"> ${sectionTitle} </h2> </div> <!-- Bento Grid - Desktop: One row layout --> <div class="grid grid-cols-1 md:grid-cols-4 md:auto-rows-fr gap-4"> ${features.map((feature, index) => renderTemplate`<div${addAttribute(`
            group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10
            hover:bg-white/10 hover:border-white/20 transition-all duration-300
            ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            ${index === 1 || index === 2 ? "md:col-span-1 md:row-span-1" : ""}
            ${index === 3 ? "md:col-span-2 md:row-span-1" : ""}
          `, "class")}> <h3 class="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight"> ${feature.title} </h3> <p class="text-lg text-gray-400 leading-relaxed"> ${feature.description} </p> </div>`)} </div> </div> </section>`;
}, "/Users/thomasmaitre/website/src/components/PersonaFeatures.astro", void 0);

export { $$PersonaHero as $, $$PersonaStakes as a, $$PersonaFeatures as b };
