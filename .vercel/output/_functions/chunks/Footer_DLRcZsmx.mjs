import { c as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_DAeaCg1L.mjs';
import 'piccolore';
import 'clsx';

const backgroundImage = new Proxy({"src":"/_astro/Background-3.DogP56ve.png","width":1280,"height":832,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/thomasmaitre/website/src/assets/Background-3.png";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { name: "Slack", href: "/slack" },
    { name: "Support", href: "/support" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative overflow-hidden bg-transparent bg-cover bg-center bg-no-repeat bg-fixed"${addAttribute(`background-image: url(${backgroundImage.src});`, "style")}> <div class="relative mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"> <div class="flex justify-center space-x-6 md:order-2"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-shadow-blue transition-colors"> ${link.name} </a>`)} </div> <div class="mt-8 md:order-1 md:mt-0"> <p class="text-center text-xs leading-5 text-gray-400">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Shadow. All rights reserved baby.
</p> </div> </div> </footer>`;
}, "/Users/thomasmaitre/website/src/components/Footer.astro", void 0);

export { $$Footer as $, backgroundImage as b };
