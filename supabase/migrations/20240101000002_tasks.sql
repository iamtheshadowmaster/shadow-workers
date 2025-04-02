create table tasks (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text not null,
  category text not null,
  upvotes integer default 0,
  downvotes integer default 0
);

-- Enable Row Level Security
alter table tasks enable row level security;

-- Create policy to allow anonymous users to view tasks
create policy "Allow anonymous users to view tasks"
  on tasks for select
  to anon
  using (true);

-- Create policy to allow anonymous users to create tasks
create policy "Allow anonymous users to create tasks"
  on tasks for insert
  to anon
  with check (true);

-- Create policy to allow anonymous users to update vote counts
create policy "Allow anonymous users to update vote counts"
  on tasks for update
  to anon
  using (true)
  with check (true);