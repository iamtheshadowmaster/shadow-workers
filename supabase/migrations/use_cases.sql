-- Create a table for use cases
CREATE TABLE use_cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some sample use cases
INSERT INTO use_cases (title, subtitle, description, icon, image_url, category) VALUES
('Email Management', 'Automate your inbox', 'Shadow automatically categorizes, summarizes, and prioritizes your emails, saving you hours each week.', '📧', '/images/email-management.svg', 'Communication'),
('Meeting Preparation', 'Never be unprepared again', 'Shadow gathers relevant information, creates agendas, and prepares talking points before your meetings.', '📅', '/images/meeting-prep.svg', 'Productivity'),
('Document Drafting', 'Create content faster', 'Shadow drafts emails, reports, and documents based on your previous writing style and preferences.', '📝', '/images/document-drafting.svg', 'Content'),
('Research Assistant', 'Information at your fingertips', 'Shadow finds, summarizes, and organizes information from various sources to support your decision-making.', '🔍', '/images/research.svg', 'Knowledge'),
('Task Prioritization', 'Focus on what matters', 'Shadow analyzes your workload and suggests the most impactful tasks to tackle first.', '📊', '/images/task-priority.svg', 'Productivity'),
('Customer Support', 'Delight your customers', 'Shadow drafts personalized responses to customer inquiries based on your company's voice and policies.', '🤝', '/images/customer-support.svg', 'Communication'),
('Data Analysis', 'Insights without the work', 'Shadow processes data, identifies trends, and creates visualizations to help you make data-driven decisions.', '📈', '/images/data-analysis.svg', 'Knowledge'),
('Social Media Management', 'Stay consistent online', 'Shadow drafts, schedules, and optimizes your social media posts across multiple platforms.', '📱', '/images/social-media.svg', 'Marketing'),
('Project Management', 'Keep everything on track', 'Shadow tracks project milestones, sends reminders, and identifies potential bottlenecks before they happen.', '📋', '/images/project-management.svg', 'Productivity'),
('Learning Assistant', 'Accelerate your growth', 'Shadow creates personalized learning materials and quizzes based on your learning goals and preferences.', '🎓', '/images/learning.svg', 'Knowledge');