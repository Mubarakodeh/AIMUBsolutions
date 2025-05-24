/*
  # Create form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `email` (text, not null)
      - `service` (text, not null)
      - `company_name` (text, not null)
      - `problem_description` (text, not null)
      - `additional_info` (text)
      - `created_at` (timestamptz, default now())
  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for authenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  company_name text NOT NULL,
  problem_description text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert data (for public form submissions)
CREATE POLICY "Allow anonymous form submissions"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated users to read submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);