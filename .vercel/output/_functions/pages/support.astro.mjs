/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Support = createComponent(async ($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "What is Shadow?",
      answer: "Shadow is an AI-powered productivity platform designed for modern achievers. We help top performers get more done by turning conversations into trackable tasks, organizing knowledge automatically, and streamlining workflows across your favorite tools."
    },
    {
      question: "How do I get started with Shadow?",
      answer: "To get started, join our waitlist by visiting the <a href='/apply' class='text-shadow-blue hover:underline'>application page</a>. Once you're accepted, you'll receive an email with instructions on how to set up your account and connect your tools."
    },
    {
      question: "What tools does Shadow integrate with?",
      answer: "Shadow integrates with popular productivity and communication tools including Slack, Notion, Asana, Trello, Salesforce, HubSpot, Google Workspace, Microsoft Teams, and many more. We're constantly adding new integrations based on user feedback."
    },
    {
      question: "Is my data secure with Shadow?",
      answer: "Absolutely. We take data security very seriously. All data is encrypted in transit and at rest, and we follow industry best practices for data protection. We never share your data with third parties, and you maintain full control over your information. Learn more in our <a href='/privacy' class='text-shadow-blue hover:underline'>privacy policy</a>."
    },
    {
      question: "What pricing plans do you offer?",
      answer: "We're currently in our early access phase and working with select customers to refine our offering. Pricing will be announced once we launch publicly. If you're on our waitlist, you'll be among the first to know about our pricing plans and any special early adopter offers."
    },
    {
      question: "Can I use Shadow for team collaboration?",
      answer: "Yes! Shadow is designed to work seamlessly for both individual productivity and team collaboration. You can share tasks, notes, and insights with your team members, and Shadow will help keep everyone aligned and on track."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Support - Shadow", "data-astro-cid-bonii7em": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-bonii7em": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" data-astro-cid-bonii7em> <div class="mx-auto max-w-4xl px-6 py-24 lg:py-32" data-astro-cid-bonii7em> <!-- Header --> <div class="text-center mb-20" data-astro-cid-bonii7em> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-astro-cid-bonii7em>
Support
</h1> <p class="text-lg md:text-xl text-gray-400" data-astro-cid-bonii7em>
Get help and answers to common questions
</p> </div> <!-- FAQ Section --> <div class="mb-32" data-astro-cid-bonii7em> <h2 class="text-2xl md:text-3xl font-bold text-white mb-10 text-center" data-astro-cid-bonii7em>
Frequently Asked Questions
</h2> <div class="space-y-4" data-astro-cid-bonii7em> ${faqs.map((faq) => renderTemplate`<div class="faq-item bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-200 cursor-pointer" data-astro-cid-bonii7em> <button class="faq-question w-full text-left px-6 md:px-8 py-6 flex justify-between items-start gap-6 cursor-pointer" data-astro-cid-bonii7em> <span class="text-base md:text-lg font-medium text-white flex-1" data-astro-cid-bonii7em>${faq.question}</span> <svg class="faq-icon w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bonii7em> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-bonii7em></path> </svg> </button> <div class="faq-answer overflow-hidden transition-all duration-200 max-h-0" data-astro-cid-bonii7em> <div class="px-6 md:px-8 pb-6 pt-2" data-astro-cid-bonii7em> <p class="text-gray-300 text-sm md:text-base leading-relaxed" data-astro-cid-bonii7em>${unescapeHTML(faq.answer)}</p> </div> </div> </div>`)} </div> </div> <!-- Contact Form Section --> <div class="mb-20" data-astro-cid-bonii7em> <div class="text-center mb-12" data-astro-cid-bonii7em> <h2 class="text-2xl md:text-3xl font-bold text-white mb-4" data-astro-cid-bonii7em>
Still need help?
</h2> <p class="text-gray-400" data-astro-cid-bonii7em>
Send us a message and we'll get back to you within 24 hours
</p> </div> <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 md:p-10" data-astro-cid-bonii7em> <form id="supportForm" class="space-y-6" data-astro-cid-bonii7em> <!-- Name & Email Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-bonii7em> <div data-astro-cid-bonii7em> <label for="name" class="block text-sm font-medium text-gray-300 mb-2" data-astro-cid-bonii7em>
Name
</label> <input type="text" name="name" id="name" required placeholder="Your name" class="block w-full rounded-lg border-0 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-white/20 transition-all sm:text-sm" data-astro-cid-bonii7em> </div> <div data-astro-cid-bonii7em> <label for="email" class="block text-sm font-medium text-gray-300 mb-2" data-astro-cid-bonii7em>
Email
</label> <input type="email" name="email" id="email" required placeholder="you@company.com" class="block w-full rounded-lg border-0 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-white/20 transition-all sm:text-sm" data-astro-cid-bonii7em> </div> </div> <!-- Subject --> <div data-astro-cid-bonii7em> <label for="subject" class="block text-sm font-medium text-gray-300 mb-2" data-astro-cid-bonii7em>
Subject
</label> <select id="subject" name="subject" required class="block w-full rounded-lg border-0 bg-black/50 px-4 py-3 text-white focus:ring-2 focus:ring-white/20 transition-all sm:text-sm" data-astro-cid-bonii7em> <option value="" class="bg-gray-900" data-astro-cid-bonii7em>Select a topic</option> <option value="General Inquiry" class="bg-gray-900" data-astro-cid-bonii7em>General Inquiry</option> <option value="Technical Support" class="bg-gray-900" data-astro-cid-bonii7em>Technical Support</option> <option value="Billing Question" class="bg-gray-900" data-astro-cid-bonii7em>Billing Question</option> <option value="Feature Request" class="bg-gray-900" data-astro-cid-bonii7em>Feature Request</option> <option value="Bug Report" class="bg-gray-900" data-astro-cid-bonii7em>Bug Report</option> <option value="Partnership Opportunity" class="bg-gray-900" data-astro-cid-bonii7em>Partnership Opportunity</option> <option value="Other" class="bg-gray-900" data-astro-cid-bonii7em>Other</option> </select> </div> <!-- Message --> <div data-astro-cid-bonii7em> <label for="message" class="block text-sm font-medium text-gray-300 mb-2" data-astro-cid-bonii7em>
Message
</label> <textarea id="message" name="message" rows="6" required placeholder="Tell us how we can help..." class="block w-full rounded-lg border-0 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-white/20 transition-all sm:text-sm resize-none" data-astro-cid-bonii7em></textarea> </div> <!-- Urgent Checkbox --> <div class="flex items-center gap-3" data-astro-cid-bonii7em> <input id="urgent" name="urgent" type="checkbox" class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-white focus:ring-white/20 focus:ring-offset-0 cursor-pointer" data-astro-cid-bonii7em> <label for="urgent" class="text-sm text-gray-300 cursor-pointer" data-astro-cid-bonii7em>
This is urgent
</label> </div> <!-- Submit Button --> <div class="pt-4" data-astro-cid-bonii7em> <button type="submit" id="submitButton" class="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 cursor-pointer" data-astro-cid-bonii7em>
Send Message
</button> </div> <!-- Form Message --> <div id="formMessage" class="text-center text-sm min-h-[20px]" data-astro-cid-bonii7em></div> </form> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-bonii7em": true })} ` })}  ${renderScript($$result, "/Users/thomasmaitre/website/src/pages/support.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomasmaitre/website/src/pages/support.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/support.astro";
const $$url = "/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Support,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
