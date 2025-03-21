-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop the existing table if it exists
DROP TABLE IF EXISTS use_cases;

-- Create an enhanced table for use cases with better constraints and indexes
CREATE TABLE use_cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on category for faster filtering
CREATE INDEX idx_use_cases_category ON use_cases(category);

-- Create a trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON use_cases
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

-- Insert sample use cases
INSERT INTO use_cases (title, subtitle, description, icon, image_url, category, is_featured, display_order) VALUES
('Email Management', 'Automate your inbox', 'Shadow automatically categorizes, summarizes, and prioritizes your emails, saving you hours each week.', '📧', '/images/email-management.svg', 'Communication', true, 1),
('Meeting Preparation', 'Never be unprepared again', 'Shadow gathers relevant information, creates agendas, and prepares talking points before your meetings.', '📅', '/images/meeting-prep.svg', 'Productivity', true, 2),
('Document Drafting', 'Create content faster', 'Shadow drafts emails, reports, and documents based on your previous writing style and preferences.', '📝', '/images/document-drafting.svg', 'Content', false, 3),
('Research Assistant', 'Information at your fingertips', 'Shadow finds, summarizes, and organizes information from various sources to support your decision-making.', '🔍', '/images/research.svg', 'Knowledge', false, 4),
('Task Prioritization', 'Focus on what matters', 'Shadow analyzes your workload and suggests the most impactful tasks to tackle first.', '📊', '/images/task-priority.svg', 'Productivity', true, 5),
('Customer Support', 'Delight your customers', 'Shadow drafts personalized responses to customer inquiries based on your company\'s voice and policies.', '🤝', '/images/customer-support.svg', 'Communication', false, 6),
('Data Analysis', 'Insights without the work', 'Shadow processes data, identifies trends, and creates visualizations to help you make data-driven decisions.', '📈', '/images/data-analysis.svg', 'Knowledge', false, 7),
('Social Media Management', 'Stay consistent online', 'Shadow drafts, schedules, and optimizes your social media posts across multiple platforms.', '📱', '/images/social-media.svg', 'Marketing', false, 8),
('Project Management', 'Keep everything on track', 'Shadow tracks project milestones, sends reminders, and identifies potential bottlenecks before they happen.', '📋', '/images/project-management.svg', 'Productivity', false, 9),
('Learning Assistant', 'Accelerate your growth', 'Shadow creates personalized learning materials and quizzes based on your learning goals and preferences.', '🎓', '/images/learning.svg', 'Knowledge', false, 10);