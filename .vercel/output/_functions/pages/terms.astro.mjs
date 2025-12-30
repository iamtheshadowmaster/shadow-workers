/* empty css                                */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$SimpleContent } from '../chunks/SimpleContent_DYF1ifa_.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SimpleContent", $$SimpleContent, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold my-8">Terms of Service</h1> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">1. Agreement to Terms</h2> <p class="mb-4">By applying to the Shadow Waitlist, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">2. Description of Service</h2> <p class="mb-4">Shadow will soon provide a platform for users to:</p> <ul class="list-disc pl-6 mb-4 space-y-2"> <li>Automate their work</li> <li>Engage with Shadow's product development process</li> </ul> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">3. User Responsibilities</h2> <p class="mb-4">As a user of our service, you agree to:</p> <ul class="list-disc pl-6 mb-4 space-y-2"> <li>Provide accurate and complete information</li> <li>Maintain the confidentiality of your account</li> <li>Not use the service for any illegal or unauthorized purpose</li> <li>Not interfere with or disrupt the service</li> </ul> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">4. AI Features</h2> <p class="mb-4">Our AI features are provided "as is" and:</p> <ul class="list-disc pl-6 mb-4 space-y-2"> <li>May not always generate perfect or appropriate suggestions</li> <li>Should be reviewed and modified by users before submission</li> <li>Are intended to assist, not replace, human judgment</li> </ul> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">5. Intellectual Property</h2> <p class="mb-4">The service and its original content, features, and functionality are owned by Shadow and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">6. Limitation of Liability</h2> <p class="mb-4">Shadow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">7. Changes to Terms</h2> <p class="mb-4">We reserve the right to modify or replace these terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">8. Termination</h2> <p class="mb-4">We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">9. Contact Us</h2> <p class="mb-4">If you have any questions about these Terms, please contact us at:</p> <p class="mb-4">Email: legal@shadow.ai</p> </section> <section class="mb-8"> <p class="text-sm text-gray-400">Last updated: January 16, 2025</p> </section> ` })} ` })}`;
}, "/Users/thomasmaitre/website/src/pages/terms.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
