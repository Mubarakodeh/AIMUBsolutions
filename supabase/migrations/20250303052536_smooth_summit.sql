/*
  # Add columns to form_submissions table

  1. Changes
    - Add `source_page` column to track where submissions came from
    - Add `submission_date` column to track when submissions were made
  2. Security
    - No changes to existing security policies
*/

-- Add source_page column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'form_submissions' AND column_name = 'source_page'
  ) THEN
    ALTER TABLE form_submissions ADD COLUMN source_page text;
  END IF;
END $$;

-- Add submission_date column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'form_submissions' AND column_name = 'submission_date'
  ) THEN
    ALTER TABLE form_submissions ADD COLUMN submission_date timestamptz;
  END IF;
END $$;