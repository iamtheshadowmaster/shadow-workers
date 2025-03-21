# Supabase Configuration for Shadow Landing Page

This directory contains the Supabase database migrations and configuration for the Shadow Landing Page project.

## Database Structure

### Tables

#### 1. `waitlist` Table

Stores user emails for the waitlist functionality:

- `id` (UUID, primary key) - Automatically generated unique identifier
- `email` (TEXT, unique) - User's email address
- `created_at` (TIMESTAMP WITH TIME ZONE) - When the record was created

#### 2. `use_cases` Table

Stores use cases displayed on the website:

- `id` (UUID, primary key) - Automatically generated unique identifier
- `title` (TEXT) - Title of the use case
- `subtitle` (TEXT) - Optional subtitle
- `description` (TEXT) - Detailed description
- `icon` (TEXT) - Emoji or icon identifier
- `image_url` (TEXT) - Path to the image asset
- `category` (TEXT) - Category of the use case (e.g., Communication, Productivity)
- `is_featured` (BOOLEAN) - Whether this use case should be featured prominently
- `display_order` (INTEGER) - Order for displaying use cases
- `created_at` (TIMESTAMP WITH TIME ZONE) - When the record was created
- `updated_at` (TIMESTAMP WITH TIME ZONE) - When the record was last updated

## Migrations

### `use_cases.sql`

Initial migration that creates the `use_cases` table and inserts sample data.

### `20240101000000_use_cases_enhanced.sql`

Enhanced migration that:

1. Enables the UUID extension
2. Drops the existing `use_cases` table if it exists
3. Creates an enhanced `use_cases` table with additional fields:
   - `is_featured` - Boolean flag for featured use cases
   - `display_order` - Integer for ordering use cases
4. Creates an index on the `category` column for faster filtering
5. Sets up a trigger to automatically update the `updated_at` timestamp
6. Inserts sample use cases with featured status and display order

## API Endpoints

The following API endpoints interact with Supabase:

### `/api/waitlist.ts`

Handles waitlist sign-ups by adding email addresses to the `waitlist` table.

### `/api/use-cases.ts`

Retrieves use cases from the `use_cases` table to display on the website.

### `/api/apply.ts`

Handles application submissions, storing data in Supabase.

## Setup Instructions

1. Create a new project at [Supabase](https://supabase.com)
2. Create the required tables:
   - Create the `waitlist` table with columns as specified above
   - Run the migrations in this directory to set up the `use_cases` table
3. Copy your Supabase project URL and anon key
4. Add these credentials to your `.env` file:
   ```
   PUBLIC_SUPABASE_URL=your_supabase_url
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Client Configuration

The Supabase client is configured in `/src/lib/supabase.ts` using the environment variables.