-- Start transaction
BEGIN;

-- Create ENUM for Files status
CREATE TYPE file_status AS ENUM ('clean', 'infected', 'error');

-- Create ENUM for Scans status and result
CREATE TYPE scan_status AS ENUM ('pending', 'in_progress', 'complete', 'error');

-- Create Files table
CREATE TABLE files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Defaults to a new UUID
    name TEXT NOT NULL,
    fileSize INT NOT NULL,
    teamId UUID NOT NULL,
    createdOn DATE NOT NULL DEFAULT CURRENT_DATE, -- Defaults to the current date
    status file_status NOT NULL
);

-- Create Scans table
CREATE TABLE scans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Defaults to a new UUID
    teamId UUID NOT NULL,
    fileId UUID NOT NULL,
    createdOn DATE NOT NULL DEFAULT CURRENT_DATE, -- Defaults to the current date
    status scan_status NOT NULL,
    result scan_status NOT NULL,
    FOREIGN KEY (fileId) REFERENCES Files(id) ON DELETE CASCADE
);

-- Commit transaction
COMMIT;
