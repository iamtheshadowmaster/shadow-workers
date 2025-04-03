-- Create sample tasks that people commonly want to automate across different job categories

-- Marketing tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate social media posting', 'Create a system that automatically schedules and posts content across multiple social media platforms based on predefined templates and optimal posting times.', 'Marketing', 42, 3, 12, 8, '2025-02-14 08:32:45.123456+00'),
('Generate performance reports', 'Automatically compile weekly/monthly marketing performance metrics from various platforms into a single, easy-to-read report with visualizations.', 'Marketing', 38, 5, 15, 10, '2025-03-23 15:41:09.876543+00'),
('Streamline email campaigns', 'Build a workflow that segments audiences, personalizes content, and schedules email campaigns without manual intervention for each send.', 'Marketing', 31, 2, 18, 7, '2025-03-18 11:27:33.654321+00'),
('Automate competitor analysis', 'Create a system that regularly monitors competitors'' websites, social media, and pricing changes, then compiles the differences into a digestible report.', 'Marketing', 27, 4, 9, 12, '2025-02-28 14:55:22.987654+00');

-- Software Development tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate code reviews', 'Implement a system that automatically checks code against style guides, best practices, and potential bugs before human review.', 'Engineering', 56, 8, 22, 15, '2025-03-11 09:18:27.345678+00'),
('Streamline deployment process', 'Create a fully automated CI/CD pipeline that handles testing, building, and deploying code with minimal human intervention.', 'Engineering', 49, 3, 25, 18, '2025-03-05 16:42:51.234567+00'),
('Automate documentation generation', 'Build a system that automatically generates and updates technical documentation from code comments and structure.', 'Engineering', 44, 7, 19, 11, '2025-01-19 10:37:14.789012+00'),
('Simplify dependency management', 'Create a tool that automatically detects, updates, and tests dependencies across projects to ensure everything stays current and secure.', 'Engineering', 39, 5, 14, 9, '2025-02-27 13:24:36.456789+00');

-- Finance tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate expense reporting', 'Create a system that automatically categorizes, validates, and submits expense reports based on receipt images and company policies.', 'Finance', 47, 2, 20, 13, '2025-03-22 11:53:08.567890+00'),
('Streamline invoice processing', 'Build a workflow that automatically extracts data from invoices, matches them to purchase orders, and routes them for approval.', 'Finance', 43, 4, 17, 10, '2025-02-15 17:29:43.678901+00'),
('Automate financial reporting', 'Implement a system that automatically generates monthly/quarterly financial reports by pulling data from various sources.', 'Finance', 38, 3, 21, 14, '2025-02-28 08:47:19.890123+00'),
('Simplify tax preparation', 'Create a tool that continuously organizes financial data throughout the year to make tax season less stressful and time-consuming.', 'Finance', 35, 6, 16, 11, '2025-01-09 14:36:52.901234+00');

-- Human Resources tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate candidate screening', 'Build a system that automatically screens resumes and applications based on job requirements and company culture fit.', 'HR', 41, 7, 18, 12, '2025-03-31 10:14:37.012345+00'),
('Streamline onboarding process', 'Create a workflow that automatically handles document collection, account setup, and training scheduling for new employees.', 'HR', 38, 3, 22, 15, '2025-02-18 16:23:05.123456+00'),
('Automate time-off management', 'Implement a system that handles time-off requests, approvals, calendar updates, and team notifications without manual processing.', 'HR', 33, 2, 19, 8, '2025-03-07 09:58:41.234567+00'),
('Simplify performance review process', 'Create a tool that automatically collects feedback, generates review documents, and schedules meetings at appropriate intervals.', 'HR', 29, 5, 15, 10, '2025-01-14 13:42:29.345678+00');

-- Customer Service tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate ticket routing', 'Build a system that automatically categorizes and routes customer support tickets to the appropriate department or specialist.', 'Customer', 45, 4, 23, 16, '2025-01-25 11:39:18.456789+00'),
('Create intelligent chatbot', 'Implement an AI-powered chatbot that can handle common customer inquiries and problems without human intervention.', 'Customer', 39, 8, 20, 13, '2025-03-19 15:47:32.567890+00'),
('Automate follow-up emails', 'Create a workflow that automatically sends personalized follow-up emails based on the nature and resolution of customer interactions.', 'Customer', 34, 3, 17, 9, '2025-02-03 08:21:54.678901+00'),
('Streamline knowledge base management', 'Build a system that automatically identifies knowledge gaps based on customer inquiries and suggests new support articles.', 'Customer', 31, 5, 14, 11, '2025-03-11 14:36:07.789012+00');

-- Operations tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate inventory management', 'Create a system that automatically tracks inventory levels, predicts needs, and initiates purchase orders without manual monitoring.', 'Operations', 52, 3, 24, 17, '2025-01-28 12:15:43.890123+00'),
('Streamline scheduling process', 'Build a workflow that automatically creates optimal staff schedules based on availability, skills, and business needs.', 'Operations', 46, 5, 21, 14, '2025-02-09 16:54:21.901234+00'),
('Automate quality control checks', 'Implement a system that uses sensors or image recognition to automatically perform quality control checks on products or services.', 'Operations', 41, 7, 18, 12, '2025-03-17 09:32:58.012345+00'),
('Simplify facility maintenance', 'Create a tool that automatically schedules and tracks preventive maintenance tasks based on equipment usage and history.', 'Operations', 37, 4, 16, 10, '2025-03-04 13:47:16.123456+00');

-- Product Manager tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate user feedback collection', 'Create a system that automatically collects, categorizes, and prioritizes user feedback from multiple channels to inform product decisions.', 'Product', 48, 6, 23, 16, '2025-03-19 10:28:37.234567+00'),
('Streamline feature prioritization', 'Build a workflow that automatically scores and ranks feature requests based on user impact, business value, and development effort.', 'Product', 43, 4, 19, 13, '2025-02-22 17:13:45.345678+00'),
('Automate competitive analysis', 'Implement a system that regularly monitors competitors'' product updates and feature releases, then compiles the findings into a digestible report.', 'Product', 39, 5, 17, 11, '2025-03-06 08:59:12.456789+00'),
('Simplify roadmap management', 'Create a tool that automatically updates roadmaps across different stakeholder views when changes are made to the master plan.', 'Product', 35, 3, 21, 14, '2025-01-30 14:41:28.567890+00');

-- Account Manager tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate client reporting', 'Create a system that automatically generates personalized client reports by pulling data from various platforms and formatting it according to client preferences.', 'Account Manager', 51, 4, 24, 17, '2025-01-07 11:52:19.678901+00'),
('Streamline contract renewals', 'Build a workflow that automatically tracks contract expiration dates, prepares renewal documents, and sends timely reminders to both clients and internal teams.', 'Account Manager', 46, 3, 22, 15, '2025-02-14 16:37:43.789012+00'),
('Automate meeting scheduling', 'Implement a system that automatically suggests optimal meeting times based on client preferences and team availability, then handles all the scheduling logistics.', 'Account Manager', 40, 2, 18, 12, '2025-03-28 09:16:25.890123+00'),
('Simplify account health monitoring', 'Create a tool that automatically tracks key account metrics and alerts account managers when intervention is needed to prevent churn.', 'Account Manager', 37, 5, 20, 13, '2025-03-03 13:45:57.901234+00');

-- Account Executive tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate prospect research', 'Create a system that automatically researches potential clients, identifies key decision-makers, and compiles relevant information before sales calls.', 'Account Executive', 49, 6, 23, 16, '2025-03-12 10:39:14.012345+00'),
('Streamline proposal generation', 'Build a workflow that automatically generates tailored sales proposals based on prospect needs, previous interactions, and successful templates.', 'Account Executive', 45, 4, 21, 14, '2025-02-25 17:24:38.123456+00'),
('Automate follow-up sequences', 'Implement a system that automatically sends personalized follow-up messages to prospects based on their engagement and stage in the sales process.', 'Account Executive', 41, 3, 19, 12, '2025-02-18 08:47:52.234567+00'),
('Simplify CRM data entry', 'Create a tool that automatically captures and logs sales activities, conversations, and outcomes in the CRM without manual data entry.', 'Account Executive', 53, 2, 25, 18, '2025-01-31 14:13:06.345678+00');

-- Customer Success Manager tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate customer onboarding', 'Create a system that automatically guides new customers through the onboarding process with personalized resources and timely check-ins.', 'Customer Success', 47, 5, 22, 15, '2025-03-26 11:18:43.456789+00'),
('Streamline QBR preparation', 'Build a workflow that automatically gathers relevant data, generates insights, and prepares materials for quarterly business reviews.', 'Customer Success', 43, 4, 20, 13, '2025-02-09 16:52:27.567890+00'),
('Automate usage monitoring', 'Implement a system that automatically tracks product usage patterns and alerts CSMs when customers are at risk of churn or ready for upsell.', 'Customer Success', 39, 3, 18, 11, '2025-03-21 09:34:15.678901+00'),
('Simplify customer health scoring', 'Create a tool that automatically calculates and updates customer health scores based on multiple factors and provides actionable recommendations.', 'Customer Success', 35, 6, 16, 10, '2025-01-17 13:29:48.789012+00');

-- Founder tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate investor updates', 'Create a system that automatically compiles key metrics, milestones, and challenges into professional investor update reports on a regular schedule.', 'Founder', 44, 7, 21, 14, '2025-01-14 10:47:32.890123+00'),
('Streamline hiring process', 'Build a workflow that automatically screens candidates, schedules interviews, and collects feedback to help founders build their team more efficiently.', 'Founder', 50, 5, 23, 16, '2025-01-27 17:19:56.901234+00'),
('Automate financial forecasting', 'Implement a system that automatically updates financial projections based on actual performance and market conditions to support strategic decisions.', 'Founder', 46, 8, 19, 12, '2025-02-08 08:36:21.012345+00'),
('Simplify stakeholder communications', 'Create a tool that automatically keeps different stakeholder groups informed with the right information at the right frequency without manual effort.', 'Founder', 42, 4, 17, 11, '2025-03-15 14:58:43.123456+00');

-- Other tasks
INSERT INTO leaderboard (title, description, category, hate, sweat, please, should, created_at)
VALUES
('Automate data entry', 'Create a system that automatically extracts information from various documents and inputs it into the appropriate systems without manual typing.', 'Other', 55, 3, 26, 19, '2025-02-23 11:34:19.234567+00'),
('Streamline approval workflows', 'Build a workflow that automatically routes requests to the right approvers, sends reminders, and updates all relevant systems once approved.', 'Other', 48, 4, 22, 15, '2025-01-16 16:48:53.345678+00'),
('Automate repetitive tasks', 'Implement a system that identifies and automates routine, repetitive tasks across various tools and platforms used in daily work.', 'Other', 51, 2, 24, 17, '2025-03-29 09:27:41.456789+00'),
('Simplify information gathering', 'Create a tool that automatically collects and organizes information from multiple sources based on specific criteria or questions.', 'Other', 45, 5, 20, 13, '2025-02-08 13:52:17.567890+00');

-- Now add sample comments for some of the tasks
INSERT INTO comments (task_id, content, created_at)
VALUES
((SELECT id FROM leaderboard WHERE title = 'Automate social media posting'), 'OMG this would literally save my life! I spend half my day copying and pasting the same stuff into different platforms. 😩', '2025-01-15 09:23:45.123456+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate social media posting'), 'We tried something like this last quarter and it was a GAME CHANGER. 10/10 would recommend.', '2025-02-03 14:17:32.456789+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate code reviews'), 'As someone who reviews PRs all day... PLEASE MAKE THIS HAPPEN. My eyes are bleeding from staring at badly formatted code.', '2025-01-28 11:42:19.789012+00'),
((SELECT id FROM leaderboard WHERE title = 'Streamline deployment process'), 'Our team has been talking about this forever but nobody wants to set it up. Classic "not my job" situation lol', '2025-03-12 16:35:27.345678+00'),
((SELECT id FROM leaderboard WHERE title = 'Streamline invoice processing'), 'Finance dept here - we''re DROWNING in invoices. This would free up like 30% of our time no joke.', '2025-02-19 10:08:53.901234+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate financial reporting'), 'My boss keeps asking for the same reports with slightly different parameters and I''m about to lose it 🙃', '2025-03-05 15:21:46.234567+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate candidate screening'), 'Recruiter here! Implemented something similar and our time-to-hire dropped by 40%. Worth every penny.', '2025-01-22 08:47:31.567890+00'),
((SELECT id FROM leaderboard WHERE title = 'Streamline onboarding process'), 'Hot take: 90% of onboarding is just filling out the same info in 20 different systems. FIX THIS PLEASE.', '2025-02-28 13:19:24.678901+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate ticket routing'), 'Support agent drowning in tickets that should have gone to engineering. Send help. Or better yet, send this automation.', '2025-03-17 09:36:52.789012+00'),
((SELECT id FROM leaderboard WHERE title = 'Create intelligent chatbot'), 'Our chatbot handles 45% of inquiries now. The other 55% are people asking to speak to a human because they hate chatbots. Ironic.', '2025-01-09 17:28:15.890123+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate inventory management'), 'As someone who once ordered 1000 units instead of 100 by accident... yeah, we need this yesterday.', '2025-02-11 12:53:41.012345+00'),
((SELECT id FROM leaderboard WHERE title = 'Streamline scheduling process'), 'I spend my entire weekend making next week''s schedule only for everyone to request changes on Monday morning. Make it stop! 😭', '2025-03-24 08:15:37.123456+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate user feedback collection'), 'Product Manager here. I''m spending 10+ hours a week just organizing feedback from Slack, email, and our support tool. This would be a dream come true.', '2025-01-18 14:42:29.234567+00'),
((SELECT id FROM leaderboard WHERE title = 'Streamline feature prioritization'), 'We built an internal tool for this and suddenly everyone stopped arguing in prioritization meetings. Magic! ✨', '2025-02-25 11:07:53.345678+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate client reporting'), 'Account Manager confession: I''ve stayed up until 2am every month for the past year making these reports look perfect. PLEASE AUTOMATE THIS.', '2025-03-09 16:31:18.456789+00'),
((SELECT id FROM leaderboard WHERE title = 'Simplify CRM data entry'), 'Sales rep here. I''m literally choosing between updating Salesforce and hitting my quota because there aren''t enough hours in the day. Help!', '2025-01-27 09:54:32.567890+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate customer onboarding'), 'CSM team of one here - I''m onboarding 20+ customers a month manually and it''s BREAKING ME. Would pay serious money for this.', '2025-02-16 15:23:47.678901+00'),
((SELECT id FROM leaderboard WHERE title = 'Streamline QBR preparation'), 'I spend a full week preparing for QBRs each quarter. That''s 25% of my time just PREPARING to talk to customers. Make it stop.', '2025-03-21 10:49:13.789012+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate investor updates'), 'Founder here. I''ve missed sending updates twice because I was too busy putting out fires. My investors were NOT happy. Need this badly.', '2025-01-13 17:36:28.890123+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate financial forecasting'), 'Built a janky version of this in Excel and it saved my startup from running out of cash. Imagine what a proper solution could do!', '2025-02-07 12:14:51.901234+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate data entry'), 'I''ve calculated that my team spends 30% of their time on data entry. THIRTY PERCENT! That''s insane in 2024.', '2025-03-14 08:37:22.012345+00'),
((SELECT id FROM leaderboard WHERE title = 'Automate repetitive tasks'), 'Started automating small tasks one by one and now I leave work 2 hours earlier than everyone else. Don''t tell my boss. 🤫', '2025-01-23 13:58:46.123456+00');