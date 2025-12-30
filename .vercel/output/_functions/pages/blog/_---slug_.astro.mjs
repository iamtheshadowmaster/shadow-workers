/* empty css                                   */
import { c as createComponent, e as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../../chunks/Nav_COGFT-m-.mjs';
import { g as getCollection } from '../../chunks/_astro_content_M0Vf9oTH.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const allPosts = await getCollection("blog");
  const entry = allPosts.find((post) => post.slug === slug);
  if (!entry) {
    return Astro2.redirect("/blog");
  }
  const { Content } = await entry.render();
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main class="min-h-screen bg-black pt-24 pb-16"> <div class="mx-auto max-w-4xl px-6 lg:px-8"> <!-- Breadcrumb --> <nav class="text-sm text-gray-500 mb-8"> <a href="/blog" class="hover:text-white transition-colors">Blog</a> <span class="mx-2">/</span> <span>${entry.data.category}</span> </nav> <!-- Article Header --> <header class="mb-12"> <h1 class="text-5xl font-bold text-white mb-6"> ${entry.data.title} </h1> <div class="flex items-center gap-3 text-gray-400"> <span>${formatDate(entry.data.date)}</span> <span>by</span> <span>${entry.data.author}</span> </div> </header> <!-- Article Content --> <article class="prose prose-invert prose-lg max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </article> <!-- Back to Blog --> <div class="mt-16 pt-8 border-t border-gray-800"> <a href="/blog" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Back to Blog
</a> </div> </div> </main> ` })} `;
}, "/Users/thomasmaitre/website/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
