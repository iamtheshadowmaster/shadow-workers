/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DAeaCg1L.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_COGFT-m-.mjs';
import { $ as $$Footer } from '../chunks/Footer_DLRcZsmx.mjs';
import { s as supabase } from '../chunks/supabase_C9Z4iwAl.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Leaderboard = createComponent(async ($$result, $$props, $$slots) => {
  const { data: categories, error: categoriesError } = await supabase.from("leaderboard").select("category").not("category", "is", null).order("category");
  const uniqueCategories = categories ? [...new Set(categories.map((item) => item.category))].filter(Boolean) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Leaderboard - Shadow" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main class="min-h-screen bg-black pt-24"> <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12"> <div class="mx-auto max-w-2xl"> <div class="flex justify-between items-center mb-8"> <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
Leaderboard
</h1> <button id="openSubmitPanel" class="rounded-full bg-shadow-blue px-3.5 py-2 text-md font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shadow-blue">
Submit task
</button> </div> <p class="text-lg text-gray-300 mb-8">
Check what fellow workers want to automate, and submit your ideas.
</p> <!-- Filters --> <div class="mb-8 flex flex-wrap gap-4 items-center justify-between"> <!-- Search Bar --> <div class="w-full mb-4"> <div class="relative"> <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> </div> <input type="search" id="searchInput" class="block w-full p-3 pl-10 text-sm rounded-lg bg-gray-800 border-gray-700 placeholder-gray-400 text-white focus:ring-shadow-blue focus:border-shadow-blue" placeholder="Search tasks..."> </div> </div> <div class="flex flex-wrap gap-3"> <button class="filter-chip active px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium transition-all hover:bg-gray-700" data-sort="newest">
Recents
</button> <button class="filter-chip px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium transition-all hover:bg-gray-700" data-sort="mostUpvotes">
Hated
</button> <button class="filter-chip px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium transition-all hover:bg-gray-700" data-sort="mostDownvotes">
Sweaters
</button> <button class="filter-chip px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium transition-all hover:bg-gray-700" data-sort="mostPlease">
Fix it
</button> <button class="filter-chip px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium transition-all hover:bg-gray-700" data-sort="mostShould">
Should do
</button> <!-- Category filter dropdown --> <div class="relative inline-block"> <button id="categoryFilterButton" class="category-dropdown-toggle px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium transition-all hover:bg-gray-700 flex items-center gap-2 cursor-pointer"> <span id="selectedCategory">All jobs</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div id="categoryDropdown" class="hidden absolute z-10 mt-2 w-48 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="categoryFilterButton"> <button class="category-option block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700 active" data-category="">All jobs</button> ${uniqueCategories.map((category) => renderTemplate`<button class="category-option block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700"${addAttribute(category, "data-category")}>${category}</button>`)} </div> </div> </div> </div> </div> <!-- Task List --> <div id="taskList" class="space-y-6"> <!-- Tasks will be dynamically inserted here --> </div> </div> </div> <!-- Task Detail Modal --> <div id="taskModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden"> <div class="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"> <button id="closeTaskModal" class="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full p-1" aria-label="Close modal"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div id="taskModalContent" class="space-y-6"> <!-- Task details will be inserted here --> </div> <!-- Comments Section --> <div class="mt-8 pt-6 border-t border-gray-700"> <h3 class="text-xl font-semibold text-white mb-4">Comments</h3> <!-- Comments List --> <div id="commentsList" class="space-y-4 mb-6"> <!-- Comments will be inserted here --> </div> <!-- Comment Form --> <form id="commentForm" class="space-y-4"> <input type="hidden" id="commentTaskId" name="taskId" value=""> <div> <label for="commentContent" class="block text-sm font-medium text-white mb-1">Comment</label> <textarea id="commentContent" name="content" rows="3" class="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6" required></textarea> </div> <div class="flex justify-end"> <button type="submit" class="rounded-full bg-shadow-blue px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shadow-blue">
Post Comment
</button> </div> </form> </div> </div> </div> <!-- Side Panel for Task Submission --> <div id="submitPanel" class="fixed inset-y-0 right-0 w-96 bg-gray-900 p-8 transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto shadow-lg z-50 h-full"> <button id="closeSubmitPanel" class="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full p-1" aria-label="Close panel"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <h2 class="text-2xl font-bold text-white mb-6">Submit a Task</h2> <form id="taskForm" class="space-y-6"> <div> <label for="title" class="block text-sm font-medium leading-6 text-white">
Title
</label> <div class="mt-2"> <input type="text" name="title" id="title" required placeholder="Enter a clear title for your task" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"> </div> </div> <div> <label for="description" class="block text-sm font-medium leading-6 text-white">
Description
</label> <div class="mt-2"> <textarea id="description" name="description" rows="4" required placeholder="Describe the task you'd like to automate" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"></textarea> </div> </div> <div> <label for="category" class="block text-sm font-medium leading-6 text-white">
Job
</label> <div class="mt-2"> <select id="category" name="category" required class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"> <option value="">Select a category</option> ${uniqueCategories.map((category) => renderTemplate`<option${addAttribute(category, "value")}>${category}</option>`)} </select> </div> </div> <div class="flex justify-end"> <button type="submit" class="rounded-full bg-shadow-blue px-3.5 py-2 text-md font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shadow-blue">
Submit
</button> </div> </form> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}  ${renderScript($$result, "/Users/thomasmaitre/website/src/pages/leaderboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomasmaitre/website/src/pages/leaderboard.astro", void 0);

const $$file = "/Users/thomasmaitre/website/src/pages/leaderboard.astro";
const $$url = "/leaderboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Leaderboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
