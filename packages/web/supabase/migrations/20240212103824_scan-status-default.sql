-- Start transaction
BEGIN;

-- Alter the scans table to set the default status to 'pending'
ALTER TABLE scans
ALTER COLUMN status SET DEFAULT 'pending';

-- Commit transaction
COMMIT;
