/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
import { g as getCollection } from '../chunks/_astro_content_D57QS5V9.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const categories = ["All Posts", ...Array.from(new Set(allPosts.map((post) => post.data.category)))];
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ijnerlr2": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-ijnerlr2": true })} ${maybeRenderHead()}<main class="min-h-screen bg-black pt-24 pb-16" data-astro-cid-ijnerlr2> <div class="mx-auto max-w-7xl px-6 lg:px-8" data-astro-cid-ijnerlr2> <div class="flex flex-col lg:flex-row gap-12" data-astro-cid-ijnerlr2> <!-- Sidebar --> <aside class="lg:w-64 flex-shrink-0" data-astro-cid-ijnerlr2> <h1 class="text-5xl font-bold text-white mb-12" data-astro-cid-ijnerlr2>Blog</h1> <nav class="space-y-2" data-astro-cid-ijnerlr2> ${categories.map((category) => renderTemplate`<button class="category-filter w-full text-left px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"${addAttribute(category, "data-category")} data-astro-cid-ijnerlr2> ${category} </button>`)} </nav> </aside> <!-- Blog Posts Grid --> <div class="flex-1" data-astro-cid-ijnerlr2> <div class="grid gap-6" data-astro-cid-ijnerlr2> ${sortedPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="blog-post group block p-6 rounded-xl border border-gray-800 hover:border-gray-700 bg-black/40 hover:bg-white/5 transition-all duration-200"${addAttribute(post.data.category, "data-category")} data-astro-cid-ijnerlr2> <h2 class="text-2xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors" data-astro-cid-ijnerlr2> ${post.data.title} </h2> <p class="text-gray-400 mb-4 line-clamp-2" data-astro-cid-ijnerlr2> ${post.data.description} </p> <div class="flex items-center gap-2 text-sm text-gray-500" data-astro-cid-ijnerlr2> <span data-astro-cid-ijnerlr2>${post.data.category}</span> <span data-astro-cid-ijnerlr2>·</span> <span data-astro-cid-ijnerlr2>${formatDate(post.data.date)}</span> </div> </a>`)} </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ijnerlr2": true })} ` })} ${renderScript($$result, "/Users/thomasmaitre/website/src/pages/blog.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/thomasmaitre/website/src/pages/blog.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
