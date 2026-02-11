export interface Worker {
  id: number;
  name: string;
  category: string;
  description: string;
  tools: string[];
  role: string[];
  kpis: string;
  doesNot: string;
  companyContext: string;
  toolAccess: { tool: string; access: string }[];
  skills: { name: string; detail: string }[];
  communication: string[];
  feedback: string[];
  autonomy: { task: string; mode: string }[];
  escalation: string;
}

export const workers: Worker[] = [
  // SALES
  {
    id: 1,
    name: "Business Development Representative",
    category: "Sales",
    description: "Finds the right people to talk to and writes the first message.",
    tools: ["HubSpot", "Pipedrive", "LinkedIn Sales Nav", "Lemlist", "Apollo", "Clay"],
    role: [
      "Build prospect lists matching your ICP",
      "Find verified emails and LinkedIn profiles",
      "Track buying signals (job changes, funding, hires)",
      "Write personalized email sequences",
      "Schedule campaigns once approved",
      "Report weekly on performance"
    ],
    kpis: "Meetings booked per week · Reply rate · Bounce rate below 3%",
    doesNot: "Send without approval · Make calls · Run demos · Negotiate",
    companyContext: "Needs: ICP definition, value proposition, past campaigns, client list to exclude, competitor landscape",
    toolAccess: [
      { tool: "CRM (HubSpot, Pipedrive)", access: "Read + Write" },
      { tool: "LinkedIn Sales Navigator", access: "Read" },
      { tool: "Email sequencer (Lemlist, Apollo)", access: "Write (draft + schedule)" },
      { tool: "Enrichment (Clay, Dropcontact)", access: "Read" }
    ],
    skills: [
      { name: "ICP Research", detail: "Build lists from criteria" },
      { name: "Signal Tracking", detail: "Monitor job changes, funding, news" },
      { name: "Sequence Writing", detail: "Draft 3-step personalized emails" },
      { name: "Campaign Planning", detail: "Organize by segment and timing" },
      { name: "Weekly Reporting", detail: "Open rates, replies, meetings" }
    ],
    communication: [
      "Weekly pipeline report in Slack",
      "Draft sequences sent for review via Slack DM",
      "Hot lead alerts in real time",
      "All actions logged in CRM"
    ],
    feedback: [
      "Manager edits drafts → AI learns tone preferences",
      "Thumbs up/down on prospect suggestions → sharpens targeting",
      "Monthly messaging review based on reply data"
    ],
    autonomy: [
      { task: "Build prospect lists", mode: "Assist" },
      { task: "Write sequences", mode: "Draft" },
      { task: "Schedule campaigns", mode: "Draft" },
      { task: "Weekly reports", mode: "Auto" },
      { task: "Hot lead alerts", mode: "Auto" }
    ],
    escalation: "Any prospect reply → routed to human immediately."
  },
  {
    id: 2,
    name: "Lead Qualification Specialist",
    category: "Sales",
    description: "Responds to incoming leads fast, qualifies them, and books a meeting with the right salesperson.",
    tools: ["CRM", "Google Calendar", "Calendly", "Intercom", "Drift"],
    role: [
      "Respond to inbound leads within 5 minutes (form, chat, email)",
      "Qualify using a predefined scorecard (budget, need, timing, authority)",
      "Enrich the lead profile with public data",
      "Book meetings directly in the closer's calendar",
      "Report on lead volume and quality by source"
    ],
    kpis: "Average response time · Lead-to-meeting conversion rate · Qualification accuracy",
    doesNot: "Close deals · Customize pricing · Handle objections · Override qualification criteria",
    companyContext: "Needs: Qualification scorecard, sales team calendar, product/pricing overview, lead routing rules",
    toolAccess: [
      { tool: "CRM", access: "Read + Write" },
      { tool: "Calendar (Google, Calendly)", access: "Write (book meetings)" },
      { tool: "Chat tool (Intercom, Drift)", access: "Read + Write" },
      { tool: "Enrichment tools", access: "Read" }
    ],
    skills: [
      { name: "Lead Response", detail: "Reply within 5 min with qualifying questions" },
      { name: "Scoring", detail: "Apply scorecard and tag lead as hot/warm/cold" },
      { name: "Enrichment", detail: "Pull company size, funding, tech stack" },
      { name: "Booking", detail: "Find available slot, send invite, confirm" },
      { name: "Source Reporting", detail: "Weekly breakdown by channel" }
    ],
    communication: [
      "Instant Slack alert when a meeting is booked",
      "Daily summary of leads received and qualified",
      "Flags unqualified leads that don't match ICP"
    ],
    feedback: [
      "Sales team rates meeting quality → AI adjusts scoring weights",
      "Manager updates scorecard → AI applies immediately"
    ],
    autonomy: [
      { task: "Respond to leads", mode: "Auto" },
      { task: "Qualify and score", mode: "Assist" },
      { task: "Book meetings", mode: "Assist" },
      { task: "Weekly reports", mode: "Auto" }
    ],
    escalation: "Leads from enterprise accounts (100+ employees) → flagged to manager before booking."
  },
  {
    id: 3,
    name: "Sales Operations Analyst",
    category: "Sales",
    description: "Keeps the CRM clean, the pipeline accurate, and the forecast reliable.",
    tools: ["CRM", "Enrichment tools", "Google Sheets", "Slack"],
    role: [
      "Clean CRM data daily (duplicates, missing fields, stale contacts)",
      "Enrich company and contact records with fresh data",
      "Update deal stages based on latest activity",
      "Generate weekly pipeline and forecast reports",
      "Alert on deals stuck for too long or missing next steps"
    ],
    kpis: "CRM data completeness (target 95%+) · Forecast accuracy · Number of stale deals flagged",
    doesNot: "Decide to drop deals · Change sales process · Coach reps · Approve discounts",
    companyContext: "Needs: Sales stages definition, deal velocity benchmarks, naming conventions, rep assignments",
    toolAccess: [
      { tool: "CRM", access: "Read + Write" },
      { tool: "Enrichment tools", access: "Read" },
      { tool: "Google Sheets / BI tool", access: "Write (reports)" },
      { tool: "Slack", access: "Write (alerts)" }
    ],
    skills: [
      { name: "Data Hygiene", detail: "Merge duplicates, fill blanks, flag outdated contacts" },
      { name: "Deal Tracking", detail: "Update stages from email/calendar activity" },
      { name: "Forecast Builder", detail: "Weighted pipeline by stage and close date" },
      { name: "Stale Deal Alerts", detail: "Flag deals with no activity in 14+ days" },
      { name: "Weekly Report", detail: "Pipeline snapshot with changes vs last week" }
    ],
    communication: [
      "Monday morning pipeline report in Slack",
      "Real-time alerts on deals going dark",
      "Monthly data quality scorecard"
    ],
    feedback: [
      "Reps correct wrong stage updates → AI learns activity-to-stage mapping",
      "Manager adjusts forecast weights → AI recalibrates"
    ],
    autonomy: [
      { task: "CRM cleanup", mode: "Auto" },
      { task: "Deal stage updates", mode: "Assist" },
      { task: "Forecast reports", mode: "Auto" },
      { task: "Stale deal alerts", mode: "Auto" }
    ],
    escalation: "Deals above a defined value threshold → manager notified before any change."
  },
  {
    id: 4,
    name: "Proposal Coordinator",
    category: "Sales",
    description: "Drafts commercial proposals and quotes from templates, so sales reps spend time selling, not formatting.",
    tools: ["CRM", "Google Docs", "PandaDoc", "DocuSign", "Slack"],
    role: [
      "Generate proposals from templates using deal data in CRM",
      "Customize content sections based on client industry and needs",
      "Track sent proposals (opened, viewed, signed)",
      "Send reminders on unsigned proposals",
      "Report on proposal win rates"
    ],
    kpis: "Time from request to draft ready · Proposal-to-close rate · Reminder-to-signature rate",
    doesNot: "Set pricing · Negotiate terms · Sign contracts · Approve discounts",
    companyContext: "Needs: Proposal templates, pricing grid, case studies by industry, legal terms, brand guidelines",
    toolAccess: [
      { tool: "CRM", access: "Read" },
      { tool: "Google Docs/Drive", access: "Read + Write" },
      { tool: "E-signature (PandaDoc, DocuSign)", access: "Write (send for signature)" },
      { tool: "Slack", access: "Write (notifications)" }
    ],
    skills: [
      { name: "Proposal Generation", detail: "Pull deal info, fill template, adapt content" },
      { name: "Industry Customization", detail: "Select relevant case studies and language" },
      { name: "Tracking", detail: "Monitor opens and views" },
      { name: "Follow-up", detail: "Send reminder at day 3 and day 7" },
      { name: "Win/Loss Report", detail: "Monthly conversion analysis" }
    ],
    communication: [
      "Slack alert when a proposal is viewed or signed",
      "Weekly summary of pending proposals",
      "Flags proposals over 14 days without action"
    ],
    feedback: [
      "Sales rep edits draft → AI learns preferred phrasing",
      "Win/loss data improves content selection over time"
    ],
    autonomy: [
      { task: "Draft proposals", mode: "Draft" },
      { task: "Send for signature", mode: "Draft" },
      { task: "Track opens", mode: "Auto" },
      { task: "Send reminders", mode: "Assist" },
      { task: "Reports", mode: "Auto" }
    ],
    escalation: "Any custom pricing request → routed to manager."
  },

  // PRODUCT
  {
    id: 5,
    name: "Customer Insights Analyst",
    category: "Product",
    description: "Collects what customers say everywhere and turns it into a prioritized list the product team can act on.",
    tools: ["Intercom", "Zendesk", "NPS tools", "CRM", "Notion", "Linear"],
    role: [
      "Collect feedback from all channels (support tickets, NPS, reviews, sales calls, Slack)",
      "Categorize by theme, feature area, and sentiment",
      "Score priority using impact vs frequency",
      "Write a weekly digest for the product team",
      "Maintain a living feedback backlog"
    ],
    kpis: "% of feedback processed and categorized · Digest delivery on time · PM satisfaction with relevance",
    doesNot: "Decide what to build · Write specs · Talk to customers directly · Estimate effort",
    companyContext: "Needs: Product areas and feature taxonomy, customer segments, current roadmap priorities",
    toolAccess: [
      { tool: "Support tool (Intercom, Zendesk)", access: "Read" },
      { tool: "NPS tool (Delighted, Typeform)", access: "Read" },
      { tool: "CRM", access: "Read (call notes)" },
      { tool: "Notion / Linear", access: "Write (feedback backlog)" },
      { tool: "Slack", access: "Write (weekly digest)" }
    ],
    skills: [
      { name: "Collection", detail: "Pull new feedback daily from all sources" },
      { name: "Categorization", detail: "Tag by theme, feature, sentiment, customer tier" },
      { name: "Scoring", detail: "Rank by frequency x impact on retention/revenue" },
      { name: "Digest Writing", detail: "Top 10 insights with quotes and trends" },
      { name: "Backlog Maintenance", detail: "Keep deduplicated, merged, and current" }
    ],
    communication: [
      "Weekly digest posted in Slack #product",
      "Alert when a feature request spikes suddenly",
      "Monthly trends report with quarter-over-quarter comparison"
    ],
    feedback: [
      "PM reclassifies items → AI learns taxonomy preferences",
      "Thumbs up/down on digest items → AI sharpens relevance"
    ],
    autonomy: [
      { task: "Collect and categorize", mode: "Auto" },
      { task: "Score priorities", mode: "Assist" },
      { task: "Weekly digest", mode: "Assist" },
      { task: "Backlog updates", mode: "Auto" }
    ],
    escalation: "Feedback mentioning churn risk or legal issue → instant alert to PM and CS."
  },
  {
    id: 6,
    name: "Product Communications Writer",
    category: "Product",
    description: "Turns changelogs and Jira tickets into clear, customer-facing release notes.",
    tools: ["Jira", "Linear", "GitHub", "CMS", "Notion"],
    role: [
      "Read completed tickets/PRs for each release",
      "Write customer-friendly release notes (no jargon)",
      "Categorize changes (new feature, improvement, bug fix)",
      "Publish to the changelog page or email",
      "Track engagement (views, clicks)"
    ],
    kpis: "Release notes published within 24h of deploy · Readability score · Changelog page views",
    doesNot: "Decide release timing · Write technical documentation · Communicate breaking changes (human does that)",
    companyContext: "Needs: Product naming conventions, audience level (technical vs non-technical), tone guidelines, changelog format",
    toolAccess: [
      { tool: "Jira / Linear", access: "Read" },
      { tool: "GitHub", access: "Read" },
      { tool: "CMS or Notion (changelog)", access: "Write" },
      { tool: "Email tool (for announcements)", access: "Write (draft)" }
    ],
    skills: [
      { name: "Ticket Parsing", detail: "Extract what changed and why it matters" },
      { name: "Rewriting", detail: "Translate technical language into user benefits" },
      { name: "Categorization", detail: "Tag as feature / improvement / fix" },
      { name: "Publishing", detail: "Format and post to changelog" },
      { name: "Engagement Tracking", detail: "Views and clicks per release" }
    ],
    communication: [
      "Draft posted in Slack #product-marketing for review",
      "Published link shared in Slack #general after approval"
    ],
    feedback: [
      "PM edits drafts → AI learns what level of detail to include",
      "Engagement data → AI identifies which formats perform best"
    ],
    autonomy: [
      { task: "Read and summarize tickets", mode: "Auto" },
      { task: "Write release notes", mode: "Draft" },
      { task: "Publish", mode: "Draft" },
      { task: "Track engagement", mode: "Auto" }
    ],
    escalation: "Breaking changes or deprecations → always reviewed by PM before publish."
  },
  {
    id: 7,
    name: "Competitive Intelligence Analyst",
    category: "Product",
    description: "Monitors your competitors daily and tells you what changed before your team reads about it on LinkedIn.",
    tools: ["Google Alerts", "Mention", "LinkedIn", "Notion", "Google Docs", "CRM"],
    role: [
      "Monitor competitors (product updates, pricing, hiring, funding, content)",
      "Deliver a weekly intel digest with key signals",
      "Maintain up-to-date battlecards for the sales team",
      "Send real-time alerts on major events (acquisition, new product, pricing change)"
    ],
    kpis: "Signals detected per week · Battlecard freshness · Sales team usage of battlecards",
    doesNot: "Define competitive strategy · Reposition your product · Decide on pricing responses",
    companyContext: "Needs: Competitor list, product comparison points, current positioning, sales objections",
    toolAccess: [
      { tool: "Web monitoring (Google Alerts, Mention)", access: "Read" },
      { tool: "LinkedIn", access: "Read" },
      { tool: "Notion / Google Docs", access: "Write (battlecards, digests)" },
      { tool: "Slack", access: "Write (alerts and digests)" },
      { tool: "CRM", access: "Read (win/loss data)" }
    ],
    skills: [
      { name: "Daily Monitoring", detail: "Scan competitor channels for changes" },
      { name: "Signal Classification", detail: "Categorize as product, pricing, team, funding, content" },
      { name: "Weekly Digest", detail: "Top 5 signals with implications" },
      { name: "Battlecard Updates", detail: "Refresh when new data contradicts current content" },
      { name: "Real-Time Alerts", detail: "Instant ping on major events" }
    ],
    communication: [
      "Weekly digest in Slack #competitive-intel",
      "Instant alert for major events (funding, launch, acquisition)",
      "Battlecards linked in CRM for sales access"
    ],
    feedback: [
      "Sales team rates battlecard usefulness → AI focuses on what matters",
      "Manager marks irrelevant signals → AI filters better"
    ],
    autonomy: [
      { task: "Daily monitoring", mode: "Auto" },
      { task: "Signal classification", mode: "Auto" },
      { task: "Weekly digest", mode: "Assist" },
      { task: "Battlecard updates", mode: "Draft" },
      { task: "Major event alerts", mode: "Auto" }
    ],
    escalation: "Competitor directly targeting your customers → alert to CEO and Head of Sales."
  },

  // ENGINEERING
  {
    id: 8,
    name: "QA Tester",
    category: "Engineering",
    description: "Tests the product, logs bugs with full context, and tracks what's been fixed.",
    tools: ["Jira", "Linear", "Staging environment", "Slack"],
    role: [
      "Run predefined test scenarios after each deploy",
      "Log bugs with steps to reproduce, screenshots, and severity",
      "Track bug resolution status and flag overdue fixes",
      "Maintain a testing checklist per feature area",
      "Report weekly on product stability"
    ],
    kpis: "Bugs caught before users report them · Average time to log a bug · Test coverage completion rate",
    doesNot: "Fix bugs · Write code · Decide release readiness · Prioritize engineering work",
    companyContext: "Needs: Test scenarios, severity definitions, feature areas, known issues list",
    toolAccess: [
      { tool: "Staging environment", access: "Read (browse and test)" },
      { tool: "Jira / Linear", access: "Write (create bug tickets)" },
      { tool: "Screenshot tool", access: "Write" },
      { tool: "Slack", access: "Write (bug alerts)" }
    ],
    skills: [
      { name: "Test Execution", detail: "Run checklists on staging after deploy" },
      { name: "Bug Logging", detail: "Structured ticket with steps, expected vs actual, severity" },
      { name: "Status Tracking", detail: "Follow up on open bugs weekly" },
      { name: "Regression Check", detail: "Retest fixed bugs to confirm resolution" },
      { name: "Stability Report", detail: "Weekly summary of open/closed/new bugs" }
    ],
    communication: [
      "Critical bugs → instant Slack alert to #engineering",
      "Weekly stability report in Slack",
      "Monthly trends (bug volume, resolution speed)"
    ],
    feedback: [
      "Engineers close bugs as invalid → AI learns what's worth reporting",
      "PM adjusts severity definitions → AI recalibrates"
    ],
    autonomy: [
      { task: "Run test scenarios", mode: "Auto" },
      { task: "Log bugs", mode: "Assist" },
      { task: "Track resolution", mode: "Auto" },
      { task: "Weekly report", mode: "Auto" }
    ],
    escalation: "Critical bugs (data loss, security, downtime) → instant alert to CTO."
  },
  {
    id: 9,
    name: "Technical Writer",
    category: "Engineering",
    description: "Keeps your technical docs, API references, and internal wikis accurate and up to date.",
    tools: ["GitHub", "GitBook", "Notion", "Readme", "Jira", "Linear"],
    role: [
      "Write and update product documentation from PRs and tickets",
      "Maintain API reference docs when endpoints change",
      "Flag outdated docs that don't match current product behavior",
      "Standardize formatting and structure across all docs"
    ],
    kpis: "% of features with up-to-date docs · Docs updated within 48h of release · Support tickets caused by bad docs",
    doesNot: "Make product decisions · Write marketing content · Define information architecture from scratch",
    companyContext: "Needs: Doc style guide, product glossary, existing doc structure, audience (developers vs end users)",
    toolAccess: [
      { tool: "GitHub", access: "Read" },
      { tool: "Docs platform (GitBook, Notion, Readme)", access: "Read + Write" },
      { tool: "Jira / Linear", access: "Read" },
      { tool: "Slack", access: "Write (review requests)" }
    ],
    skills: [
      { name: "Change Detection", detail: "Scan new PRs and tickets for doc-impacting changes" },
      { name: "Doc Writing", detail: "Clear, step-by-step documentation with examples" },
      { name: "Freshness Audit", detail: "Weekly scan for pages that reference old features" },
      { name: "Standardization", detail: "Apply consistent formatting and terminology" }
    ],
    communication: [
      "Draft doc updates posted for engineer review in Slack",
      "Weekly freshness report (pages needing update)"
    ],
    feedback: [
      "Engineers correct inaccuracies → AI learns product nuances",
      "Support tickets from confusion → AI prioritizes those doc areas"
    ],
    autonomy: [
      { task: "Detect changes needing docs", mode: "Auto" },
      { task: "Write/update docs", mode: "Draft" },
      { task: "Freshness audit", mode: "Auto" },
      { task: "Formatting cleanup", mode: "Auto" }
    ],
    escalation: "API breaking changes → doc update reviewed by engineering lead before publish."
  },
  {
    id: 10,
    name: "Code Review Analyst",
    category: "Engineering",
    description: "Reviews pull requests for style, bugs, and best practices before a human engineer looks at them.",
    tools: ["GitHub", "GitHub Actions", "Slack"],
    role: [
      "Review PRs for code style, naming conventions, and linting issues",
      "Flag potential bugs, security risks, and performance concerns",
      "Check for missing tests or incomplete error handling",
      "Leave clear, actionable comments on the PR",
      "Track review turnaround time"
    ],
    kpis: "% of PRs pre-reviewed before human review · Issues caught that humans missed · Average review time",
    doesNot: "Approve or merge PRs · Make architectural decisions · Refactor code · Deploy",
    companyContext: "Needs: Coding standards, tech stack, linting rules, security checklist, testing requirements",
    toolAccess: [
      { tool: "GitHub", access: "Read + Write (comments on PRs)" },
      { tool: "CI/CD (GitHub Actions)", access: "Read" },
      { tool: "Slack", access: "Write (review notifications)" }
    ],
    skills: [
      { name: "Style Check", detail: "Enforce naming, formatting, import order" },
      { name: "Bug Detection", detail: "Flag null checks, race conditions, unhandled errors" },
      { name: "Security Scan", detail: "Identify hardcoded secrets, injection risks, auth gaps" },
      { name: "Test Coverage", detail: "Flag PRs without tests for new logic" },
      { name: "Comment Writing", detail: "Specific, kind, with suggested fix" }
    ],
    communication: [
      "Comments directly on the PR",
      "Slack notification to author when review is ready",
      "Weekly summary of common issues across the team"
    ],
    feedback: [
      "Engineers dismiss comments → AI learns what's noise vs signal",
      "Team updates standards → AI adapts immediately"
    ],
    autonomy: [
      { task: "Style and lint checks", mode: "Auto" },
      { task: "Bug flagging", mode: "Assist" },
      { task: "Security concerns", mode: "Assist" },
      { task: "Test coverage check", mode: "Auto" }
    ],
    escalation: "Security risk detected → alert to CTO and block merge recommendation."
  },

  // CUSTOMER SUCCESS
  {
    id: 11,
    name: "Customer Support Representative",
    category: "Customer Success",
    description: "Answers customer questions fast. Routes complex issues to humans with full context.",
    tools: ["Intercom", "Zendesk", "Knowledge base", "CRM", "Slack"],
    role: [
      "Answer Level 1 tickets (how-to, known bugs, feature questions)",
      "Categorize and prioritize incoming tickets",
      "Escalate complex issues with structured context (what happened, what was tried, what's needed)",
      "Update the knowledge base with new solutions",
      "Monthly report on ticket trends and top pain points"
    ],
    kpis: "First response time (under 5 min) · L1 resolution rate (60%+) · CSAT on resolved tickets",
    doesNot: "Handle billing disputes · Make product promises · Manage angry escalations · Access billing data",
    companyContext: "Needs: Help center articles, known bugs, feature roadmap status, SLA per tier, tone guidelines",
    toolAccess: [
      { tool: "Ticketing (Intercom, Zendesk)", access: "Read + Write" },
      { tool: "Knowledge base", access: "Read + Write" },
      { tool: "CRM", access: "Read only" },
      { tool: "Slack", access: "Write (escalations)" }
    ],
    skills: [
      { name: "Ticket Response", detail: "Match question to KB article, draft reply" },
      { name: "Categorization", detail: "Tag by type, product area, severity" },
      { name: "Escalation Packaging", detail: "Summarize issue with full context for human" },
      { name: "KB Updates", detail: "Create draft article when a new solution is found" },
      { name: "Trend Reporting", detail: "Monthly top 10 issues with volume and sentiment" }
    ],
    communication: [
      "Escalations posted in Slack #support-escalations with full context",
      "Weekly ticket volume summary",
      "Monthly trends report to product and CS teams"
    ],
    feedback: [
      "CS team edits responses → AI improves answer quality",
      "Customers rate responses → AI prioritizes high-CSAT patterns"
    ],
    autonomy: [
      { task: "L1 ticket responses", mode: "Assist" },
      { task: "Categorization", mode: "Auto" },
      { task: "Escalation summaries", mode: "Auto" },
      { task: "KB article drafts", mode: "Draft" },
      { task: "Reports", mode: "Auto" }
    ],
    escalation: "Tickets mentioning churn, legal, or executive complaint → instant alert to CS manager."
  },
  {
    id: 12,
    name: "Client Onboarding Coordinator",
    category: "Customer Success",
    description: "Guides new customers through their first 30 days with the right steps, at the right time.",
    tools: ["CRM", "Customer.io", "Intercom", "Mixpanel", "Amplitude", "Slack"],
    role: [
      "Send the onboarding sequence (welcome email, setup guide, check-in messages)",
      "Track onboarding milestone completion (account setup, first use, integration connected)",
      "Nudge customers who fall behind on key steps",
      "Collect feedback at Day 7, Day 14, Day 30",
      "Flag at-risk accounts that aren't activating"
    ],
    kpis: "Time to first value · Onboarding completion rate · Day-30 activation rate",
    doesNot: "Run training calls · Customize the product · Renegotiate contracts · Handle complaints",
    companyContext: "Needs: Onboarding playbook, milestone definitions, email templates, activation criteria, customer tiers",
    toolAccess: [
      { tool: "CRM", access: "Read + Write" },
      { tool: "Email tool (Customer.io, Intercom)", access: "Write" },
      { tool: "Product analytics (Mixpanel, Amplitude)", access: "Read" },
      { tool: "Slack", access: "Write (alerts)" }
    ],
    skills: [
      { name: "Sequence Management", detail: "Send right message at right milestone" },
      { name: "Progress Tracking", detail: "Check product usage against milestones" },
      { name: "Nudging", detail: "Personalized reminder when a step is missed" },
      { name: "Feedback Collection", detail: "Send survey, compile results" },
      { name: "Risk Flagging", detail: "Identify accounts stuck in onboarding" }
    ],
    communication: [
      "Daily alert on accounts falling behind",
      "Weekly onboarding progress dashboard",
      "Monthly activation report"
    ],
    feedback: [
      "CSM adjusts messaging → AI learns what drives activation",
      "Completion data → AI identifies which steps cause drop-off"
    ],
    autonomy: [
      { task: "Send onboarding emails", mode: "Assist" },
      { task: "Track milestones", mode: "Auto" },
      { task: "Nudge reminders", mode: "Assist" },
      { task: "Feedback surveys", mode: "Auto" },
      { task: "Risk alerts", mode: "Auto" }
    ],
    escalation: "Account with zero usage after Day 14 → alert to CSM for personal outreach."
  },
  {
    id: 13,
    name: "Customer Retention Analyst",
    category: "Customer Success",
    description: "Watches customer behavior and warns you before they leave.",
    tools: ["Product analytics", "CRM", "Support tool", "Stripe", "Chargebee", "Slack"],
    role: [
      "Monitor product usage drops, support ticket spikes, and NPS declines",
      "Score accounts on churn risk (low / medium / high / critical)",
      "Alert the CS team with context on why the risk was triggered",
      "Track save actions and outcomes",
      "Monthly report on churn patterns"
    ],
    kpis: "Churn predicted vs actual · Average warning lead time · Save rate on flagged accounts",
    doesNot: "Contact customers · Offer discounts · Make retention decisions · Cancel accounts",
    companyContext: "Needs: Churn risk indicators, health score model, usage benchmarks, renewal dates",
    toolAccess: [
      { tool: "Product analytics", access: "Read" },
      { tool: "CRM", access: "Read + Write (health score)" },
      { tool: "Support tool", access: "Read" },
      { tool: "Billing (Stripe, Chargebee)", access: "Read" },
      { tool: "Slack", access: "Write (alerts)" }
    ],
    skills: [
      { name: "Signal Monitoring", detail: "Daily scan of usage, tickets, NPS" },
      { name: "Risk Scoring", detail: "Weighted score based on multiple signals" },
      { name: "Alert Generation", detail: "Structured alert with what changed and why" },
      { name: "Save Tracking", detail: "Log CSM actions and track outcomes" },
      { name: "Pattern Reporting", detail: "Monthly churn cohort analysis" }
    ],
    communication: [
      "Instant Slack alert on critical risk accounts",
      "Weekly risk dashboard",
      "Monthly churn analysis report"
    ],
    feedback: [
      "CSM marks false positives → AI recalibrates risk model",
      "Actual churn data → AI improves prediction accuracy"
    ],
    autonomy: [
      { task: "Signal monitoring", mode: "Auto" },
      { task: "Risk scoring", mode: "Auto" },
      { task: "Alerts", mode: "Auto" },
      { task: "Save tracking", mode: "Assist" },
      { task: "Monthly report", mode: "Auto" }
    ],
    escalation: "Critical risk on top-10 revenue account → alert to VP CS and CEO."
  },

  // IT
  {
    id: 14,
    name: "IT Support Technician",
    category: "IT",
    description: "Answers common IT questions, resets passwords, and guides employees through tech issues.",
    tools: ["Jira Service Desk", "Freshservice", "Okta", "Google Admin", "Slack"],
    role: [
      "Answer Level 1 IT requests (password reset, VPN setup, software install guides)",
      "Triage and route complex issues to the right IT person",
      "Maintain an internal IT FAQ",
      "Track ticket volume and resolution time",
      "Onboard new employees with IT setup checklist"
    ],
    kpis: "First response time · L1 resolution rate · Employee satisfaction score",
    doesNot: "Access production servers · Modify security policies · Approve software purchases · Handle data breaches",
    companyContext: "Needs: IT knowledge base, approved software list, VPN/wifi setup guides, org chart for routing",
    toolAccess: [
      { tool: "IT ticketing (Jira Service Desk, Freshservice)", access: "Read + Write" },
      { tool: "Identity provider (Okta, Google Admin)", access: "Read (lookup)" },
      { tool: "IT knowledge base", access: "Read + Write" },
      { tool: "Slack", access: "Read + Write" }
    ],
    skills: [
      { name: "Ticket Response", detail: "Match issue to known solution, reply" },
      { name: "Password/Access", detail: "Guide through self-service reset" },
      { name: "Triage", detail: "Categorize by type (hardware, software, network, access) and route" },
      { name: "IT Onboarding", detail: "Send new hire IT setup checklist" },
      { name: "Reporting", detail: "Weekly ticket volume by category" }
    ],
    communication: [
      "Responds directly in Slack DM or ticketing system",
      "Escalations routed to IT channel with full context",
      "Weekly report on top IT issues"
    ],
    feedback: [
      "IT team marks incorrect solutions → AI updates KB",
      "Repeated questions → AI suggests new FAQ article"
    ],
    autonomy: [
      { task: "L1 answers", mode: "Assist" },
      { task: "Triage and routing", mode: "Auto" },
      { task: "IT onboarding checklist", mode: "Auto" },
      { task: "KB updates", mode: "Draft" },
      { task: "Reports", mode: "Auto" }
    ],
    escalation: "Security incidents or data access issues → immediate alert to IT lead."
  },
  {
    id: 15,
    name: "Software Asset Manager",
    category: "IT",
    description: "Tracks all software subscriptions, flags unused licenses, and alerts before renewals.",
    tools: ["Productiv", "Zylo", "Email", "Google Sheets", "Slack"],
    role: [
      "Maintain inventory of all SaaS tools, licenses, and costs",
      "Track usage per tool and flag unused or underused licenses",
      "Alert before renewal dates (30 days, 7 days)",
      "Recommend license downgrades or cancellations based on usage",
      "Monthly spend report by department"
    ],
    kpis: "Software spend saved · Renewal surprises avoided · License utilization rate",
    doesNot: "Cancel subscriptions · Negotiate contracts · Approve new purchases · Access financial accounts",
    companyContext: "Needs: SaaS inventory, contract dates, license allocations, department budgets",
    toolAccess: [
      { tool: "SaaS management (Productiv, Zylo, or spreadsheet)", access: "Read + Write" },
      { tool: "Email (billing notifications)", access: "Read" },
      { tool: "Google Sheets", access: "Write (reports)" },
      { tool: "Slack", access: "Write (alerts)" }
    ],
    skills: [
      { name: "Inventory Maintenance", detail: "Add/update tools, costs, renewal dates" },
      { name: "Usage Tracking", detail: "Cross-reference licenses with login activity" },
      { name: "Renewal Alerts", detail: "Notify owner 30 and 7 days before renewal" },
      { name: "Savings Detection", detail: "Flag licenses with zero usage in 60+ days" },
      { name: "Monthly Report", detail: "Total spend, by department, changes vs last month" }
    ],
    communication: [
      "Renewal alerts to tool owner via Slack",
      "Monthly spend report to finance and IT",
      "Savings opportunities flagged to manager"
    ],
    feedback: [
      "Manager overrides cancellation recommendation → AI learns exceptions",
      "Actual savings tracked → AI improves recommendations"
    ],
    autonomy: [
      { task: "Inventory updates", mode: "Auto" },
      { task: "Usage tracking", mode: "Auto" },
      { task: "Renewal alerts", mode: "Auto" },
      { task: "Savings recommendations", mode: "Draft" },
      { task: "Monthly report", mode: "Auto" }
    ],
    escalation: "Auto-renewal above a set threshold → alert to finance lead for approval."
  },
  {
    id: 16,
    name: "IT Compliance Auditor",
    category: "IT",
    description: "Checks who has access to what, flags anomalies, and helps with compliance.",
    tools: ["Okta", "Google Admin", "BambooHR", "Personio", "Notion", "Slack"],
    role: [
      "Audit user access across all connected tools quarterly",
      "Flag former employees still with active accounts",
      "Detect over-permissioned users (admin rights they shouldn't have)",
      "Generate compliance-ready access reports",
      "Track access changes over time"
    ],
    kpis: "Orphaned accounts detected · Time to flag access anomaly · Audit completion rate",
    doesNot: "Revoke access · Change permissions · Define access policies · Handle security incidents",
    companyContext: "Needs: Employee directory, role-to-access matrix, offboarding checklist, compliance requirements",
    toolAccess: [
      { tool: "Identity provider (Okta, Google Admin)", access: "Read" },
      { tool: "HR system (BambooHR, Personio)", access: "Read" },
      { tool: "Tool admin panels", access: "Read" },
      { tool: "Notion / Sheets", access: "Write (reports)" },
      { tool: "Slack", access: "Write (alerts)" }
    ],
    skills: [
      { name: "Access Scan", detail: "List all users and permissions per tool" },
      { name: "Orphan Detection", detail: "Cross-reference active accounts with employee directory" },
      { name: "Over-Permission Check", detail: "Compare actual vs expected role permissions" },
      { name: "Report Generation", detail: "Compliance-ready audit doc" },
      { name: "Change Tracking", detail: "Log all access changes weekly" }
    ],
    communication: [
      "Instant alert on orphaned accounts",
      "Quarterly audit report to IT and compliance",
      "Monthly access changes summary"
    ],
    feedback: [
      "IT marks false positives → AI learns legitimate exceptions",
      "Policy updates → AI adjusts expected permissions"
    ],
    autonomy: [
      { task: "Access scans", mode: "Auto" },
      { task: "Orphan detection", mode: "Auto" },
      { task: "Over-permission flags", mode: "Assist" },
      { task: "Audit reports", mode: "Draft" }
    ],
    escalation: "Former employee with active admin access → instant alert to IT lead and HR."
  },

  // HR
  {
    id: 17,
    name: "Recruitment Coordinator",
    category: "HR",
    description: "Reads every application, scores candidates against your criteria, and surfaces the best ones first.",
    tools: ["Lever", "Greenhouse", "Workable", "Email", "Notion", "Slack"],
    role: [
      "Screen incoming applications against job requirements",
      "Score candidates on must-have and nice-to-have criteria",
      "Write a short summary for each shortlisted candidate",
      "Send acknowledgment emails to all applicants",
      "Report on pipeline metrics (applications received, screened, shortlisted)"
    ],
    kpis: "Screening time per role · Shortlist quality (hiring manager satisfaction) · Candidate response time",
    doesNot: "Conduct interviews · Make hiring decisions · Negotiate offers · Reject candidates without review",
    companyContext: "Needs: Job descriptions, scoring criteria, must-have vs nice-to-have, company values, email templates",
    toolAccess: [
      { tool: "ATS (Lever, Greenhouse, Workable)", access: "Read + Write" },
      { tool: "Email", access: "Write (acknowledgments)" },
      { tool: "Google Sheets / Notion", access: "Write (shortlists)" },
      { tool: "Slack", access: "Write (alerts)" }
    ],
    skills: [
      { name: "Application Parsing", detail: "Extract key info (experience, skills, location)" },
      { name: "Scoring", detail: "Rate against criteria, flag must-have gaps" },
      { name: "Summary Writing", detail: "3-sentence candidate snapshot" },
      { name: "Email Sending", detail: "Acknowledgment within 24h" },
      { name: "Pipeline Reporting", detail: "Weekly funnel by role" }
    ],
    communication: [
      "Shortlist posted in Slack with summaries",
      "Daily alert on high-scoring candidates",
      "Weekly pipeline report per open role"
    ],
    feedback: [
      "Hiring manager accepts/rejects shortlist → AI refines scoring",
      "Interview outcomes → AI learns what predicts success"
    ],
    autonomy: [
      { task: "Parse applications", mode: "Auto" },
      { task: "Score candidates", mode: "Assist" },
      { task: "Write summaries", mode: "Assist" },
      { task: "Send acknowledgments", mode: "Auto" },
      { task: "Reports", mode: "Auto" }
    ],
    escalation: "Internal or executive referral candidates → flagged to hiring manager immediately."
  },
  {
    id: 18,
    name: "HR Onboarding Specialist",
    category: "HR",
    description: "Makes sure new hires have everything they need on Day 1 and checks in during their first 90 days.",
    tools: ["BambooHR", "Personio", "Email", "Google Calendar", "Google Drive", "Slack"],
    role: [
      "Send pre-boarding documents (contract, policies, welcome guide)",
      "Create personalized onboarding schedule (meetings, training, buddy intro)",
      "Track task completion (IT setup, doc signing, training modules)",
      "Collect feedback at Day 7, Day 30, Day 90",
      "Alert HR and manager on overdue onboarding steps"
    ],
    kpis: "Onboarding completion rate by Day 30 · New hire satisfaction at Day 30 · Time to full productivity",
    doesNot: "Conduct interviews · Set salary · Handle conflicts · Make probation decisions",
    companyContext: "Needs: Onboarding playbook, document templates, training modules, buddy system, department-specific checklists",
    toolAccess: [
      { tool: "HR system (BambooHR, Personio)", access: "Read + Write" },
      { tool: "Email", access: "Write" },
      { tool: "Calendar", access: "Write (schedule meetings)" },
      { tool: "Google Drive", access: "Read (templates)" },
      { tool: "Slack", access: "Write (reminders, alerts)" }
    ],
    skills: [
      { name: "Pre-boarding", detail: "Send docs and welcome kit 7 days before start" },
      { name: "Schedule Building", detail: "Create Week 1 calendar with key meetings" },
      { name: "Progress Tracking", detail: "Check off completed milestones" },
      { name: "Feedback Collection", detail: "Automated surveys at Day 7/30/90" },
      { name: "Overdue Alerts", detail: "Ping manager and HR on missed steps" }
    ],
    communication: [
      "Daily checklist update to new hire via email",
      "Alerts to manager on overdue steps",
      "Monthly onboarding health report to HR"
    ],
    feedback: [
      "New hires rate onboarding experience → AI adjusts sequence",
      "Manager feedback → AI improves scheduling"
    ],
    autonomy: [
      { task: "Send pre-boarding docs", mode: "Auto" },
      { task: "Create schedule", mode: "Assist" },
      { task: "Track progress", mode: "Auto" },
      { task: "Feedback surveys", mode: "Auto" },
      { task: "Overdue alerts", mode: "Auto" }
    ],
    escalation: "New hire hasn't signed contract by Day -3 → alert to HR lead."
  },
  {
    id: 19,
    name: "Employee Engagement Analyst",
    category: "HR",
    description: "Runs regular pulse surveys, analyzes the results, and flags morale issues early.",
    tools: ["Typeform", "Google Forms", "Lattice", "Slack", "Google Sheets"],
    role: [
      "Send short pulse surveys (5 questions max) weekly or biweekly",
      "Analyze responses by team, tenure, and trend over time",
      "Flag teams with declining scores",
      "Write a summary for HR and leadership",
      "Track participation rate"
    ],
    kpis: "Participation rate (target 80%+) · Early warning lead time · HR satisfaction with insights",
    doesNot: "Counsel employees · Make management decisions · Share individual responses · Run performance reviews",
    companyContext: "Needs: Survey questions, team structure, anonymity rules, benchmark scores",
    toolAccess: [
      { tool: "Survey tool (Typeform, Google Forms, Lattice)", access: "Read + Write" },
      { tool: "HR system", access: "Read (team data)" },
      { tool: "Slack", access: "Write (survey distribution, reports)" },
      { tool: "Google Sheets", access: "Write (analysis)" }
    ],
    skills: [
      { name: "Survey Distribution", detail: "Send at consistent cadence, track completion" },
      { name: "Analysis", detail: "Score by team, compare to previous periods" },
      { name: "Trend Detection", detail: "Flag declining teams or sudden drops" },
      { name: "Summary Writing", detail: "Key takeaways with data, no individual names" },
      { name: "Participation Nudging", detail: "Reminder to non-respondents" }
    ],
    communication: [
      "Survey link sent via Slack or email",
      "Biweekly summary to HR lead",
      "Instant alert on significant score drops"
    ],
    feedback: [
      "HR adjusts questions → AI adapts survey",
      "Low-participation teams → AI tests different send times"
    ],
    autonomy: [
      { task: "Send surveys", mode: "Auto" },
      { task: "Analyze results", mode: "Auto" },
      { task: "Write summaries", mode: "Assist" },
      { task: "Flag declining teams", mode: "Auto" },
      { task: "Participation reminders", mode: "Auto" }
    ],
    escalation: "Team score drops 20%+ in one period → instant alert to HR and team manager."
  },

  // FINANCE
  {
    id: 20,
    name: "Accounts Receivable Clerk",
    category: "Finance",
    description: "Tracks unpaid invoices, sends payment reminders, and keeps cash flow visible.",
    tools: ["Stripe", "Chargebee", "QuickBooks", "Email", "CRM", "Slack"],
    role: [
      "Monitor all outstanding invoices and due dates",
      "Send payment reminders at Day 0, Day 7, Day 14, Day 30",
      "Flag overdue invoices with escalation to the account owner",
      "Maintain an aging report (current, 30 days, 60 days, 90+ days)",
      "Report weekly on cash collection performance"
    ],
    kpis: "Days Sales Outstanding (DSO) · % invoices paid on time · Collection rate",
    doesNot: "Negotiate payment terms · Write off debt · Access bank accounts · Make legal decisions",
    companyContext: "Needs: Payment terms, invoice templates, escalation thresholds, client contact list",
    toolAccess: [
      { tool: "Billing (Stripe, Chargebee, QuickBooks)", access: "Read" },
      { tool: "Email", access: "Write (reminders)" },
      { tool: "CRM", access: "Read (account owner)" },
      { tool: "Google Sheets", access: "Write (aging report)" },
      { tool: "Slack", access: "Write (alerts)" }
    ],
    skills: [
      { name: "Invoice Monitoring", detail: "Daily scan of outstanding invoices" },
      { name: "Reminder Sequence", detail: "Polite escalating emails at set intervals" },
      { name: "Aging Report", detail: "Weekly snapshot by aging bucket" },
      { name: "Overdue Flagging", detail: "Alert account owner at Day 14" },
      { name: "Collection Reporting", detail: "Weekly cash flow update" }
    ],
    communication: [
      "Payment reminders sent to client contacts",
      "Overdue alerts to account owner via Slack",
      "Weekly aging report to finance lead"
    ],
    feedback: [
      "Finance adjusts reminder tone → AI adapts emails",
      "Payment patterns → AI learns which clients need earlier nudges"
    ],
    autonomy: [
      { task: "Invoice monitoring", mode: "Auto" },
      { task: "Payment reminders (Day 0, 7)", mode: "Auto" },
      { task: "Reminders (Day 14+)", mode: "Assist" },
      { task: "Aging report", mode: "Auto" },
      { task: "Overdue alerts", mode: "Auto" }
    ],
    escalation: "Invoice 60+ days overdue above a set amount → alert to CFO."
  },
  {
    id: 21,
    name: "Bookkeeping Assistant",
    category: "Finance",
    description: "Categorizes every transaction, spots anomalies, and prepares clean books for the accountant.",
    tools: ["QuickBooks", "Pennylane", "Xero", "Dext", "Spendesk", "Slack"],
    role: [
      "Categorize bank transactions against the chart of accounts",
      "Match receipts to transactions",
      "Flag anomalies (unusual amounts, duplicate charges, uncategorized items)",
      "Prepare monthly pre-close package for the accountant",
      "Track budget vs actual by category"
    ],
    kpis: "% transactions auto-categorized correctly · Days to pre-close · Anomalies detected before month-end",
    doesNot: "Validate accounting entries · File tax returns · Make financial decisions · Access bank login",
    companyContext: "Needs: Chart of accounts, categorization rules, budget by category, vendor list",
    toolAccess: [
      { tool: "Accounting (QuickBooks, Pennylane, Xero)", access: "Read + Write (categorization)" },
      { tool: "Bank feed", access: "Read" },
      { tool: "Receipt tool (Dext, Spendesk)", access: "Read" },
      { tool: "Google Sheets", access: "Write (reports)" },
      { tool: "Slack", access: "Write (anomaly alerts)" }
    ],
    skills: [
      { name: "Transaction Categorization", detail: "Apply rules, learn from corrections" },
      { name: "Receipt Matching", detail: "Pair receipts with transactions by amount and date" },
      { name: "Anomaly Detection", detail: "Flag duplicates, spikes, uncategorized items" },
      { name: "Pre-Close Package", detail: "Organized file for accountant review" },
      { name: "Budget Tracking", detail: "Actual vs budget by category monthly" }
    ],
    communication: [
      "Daily anomaly alerts in Slack",
      "Monthly pre-close package sent to accountant",
      "Budget variance report to finance lead"
    ],
    feedback: [
      "Accountant corrects categories → AI improves accuracy",
      "New vendors added → AI learns categorization"
    ],
    autonomy: [
      { task: "Transaction categorization", mode: "Assist" },
      { task: "Receipt matching", mode: "Auto" },
      { task: "Anomaly detection", mode: "Auto" },
      { task: "Pre-close package", mode: "Draft" },
      { task: "Budget reports", mode: "Auto" }
    ],
    escalation: "Transaction above a set amount without receipt → alert to finance lead."
  },
  {
    id: 22,
    name: "Financial Reporting Analyst",
    category: "Finance",
    description: "Generates your weekly and monthly financial dashboards so leadership always knows the numbers.",
    tools: ["QuickBooks", "Xero", "Stripe", "Chargebee", "Google Sheets", "Slack"],
    role: [
      "Generate weekly revenue and cash position summary",
      "Build monthly P&L, balance sheet highlights, and burn rate report",
      "Track key metrics (MRR, runway, unit economics) over time",
      "Compare actuals to budget and highlight variances",
      "Distribute reports to the right people on schedule"
    ],
    kpis: "Report delivered on time · Variance detection accuracy · Time saved vs manual reporting",
    doesNot: "Interpret strategy from numbers · Make investment decisions · Forecast beyond data · Present to board",
    companyContext: "Needs: KPI definitions, reporting templates, budget, metric formulas, distribution list",
    toolAccess: [
      { tool: "Accounting software", access: "Read" },
      { tool: "Billing (Stripe, Chargebee)", access: "Read" },
      { tool: "Google Sheets / BI tool", access: "Write" },
      { tool: "Slack / Email", access: "Write (distribution)" }
    ],
    skills: [
      { name: "Weekly Summary", detail: "Revenue, cash, notable transactions" },
      { name: "Monthly Report", detail: "P&L, balance sheet highlights, burn rate" },
      { name: "Metric Tracking", detail: "MRR, churn rate, CAC, LTV, runway" },
      { name: "Variance Analysis", detail: "Flag line items 10%+ off budget" },
      { name: "Distribution", detail: "Send to the right people at the right time" }
    ],
    communication: [
      "Weekly summary every Monday in Slack #finance",
      "Monthly report emailed to leadership by the 5th",
      "Instant alert on cash position below threshold"
    ],
    feedback: [
      "CFO/CEO adjusts which metrics matter → AI reconfigures",
      "Corrections on calculations → AI fixes permanently"
    ],
    autonomy: [
      { task: "Weekly summary", mode: "Auto" },
      { task: "Monthly report", mode: "Draft" },
      { task: "Metric tracking", mode: "Auto" },
      { task: "Variance alerts", mode: "Auto" },
      { task: "Distribution", mode: "Auto" }
    ],
    escalation: "Runway drops below 6 months or cash below threshold → instant alert to CEO and CFO."
  }
];

export const categories = ["All", "Sales", "Product", "Engineering", "Customer Success", "IT", "HR", "Finance"];
