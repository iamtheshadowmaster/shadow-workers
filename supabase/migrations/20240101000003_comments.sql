create table comments (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  task_id uuid not null references leaderboard(id) on delete cascade,
  content text not null,
  author_id text -- Optional, could be used for user identification in the future
);

-- Enable Row Level Security
alter table comments enable row level security;

-- Create policy to allow anonymous users to view comments
create policy "Allow anonymous users to view comments"
  on comments for select
  to anon
  using (true);

-- Create policy to allow anonymous users to create comments
create policy "Allow anonymous users to create comments"
  on comments for insert
  to anon
  with check (true);