-- Start transaction
BEGIN;

-- Alter Files table: Rename teamId to accountId and set foreign key to basejump schema's accounts table
ALTER TABLE Files RENAME COLUMN teamId TO accountId;
ALTER TABLE Files ADD CONSTRAINT fk_files_accountId FOREIGN KEY (accountId) REFERENCES basejump.accounts(id);

-- Alter Scans table: Remove ON DELETE CASCADE, rename teamId to accountId, and set foreign key to basejump schema's accounts table
ALTER TABLE scans DROP CONSTRAINT IF EXISTS scans_fileid_fkey; -- Adjust the constraint name as needed
ALTER TABLE scans RENAME COLUMN teamId TO accountId;
ALTER TABLE scans ADD CONSTRAINT fk_scans_accountId FOREIGN KEY (accountId) REFERENCES basejump.accounts(id);
ALTER TABLE scans ADD CONSTRAINT fk_scans_fileId FOREIGN KEY (fileId) REFERENCES Files(id); -- Re-add without ON DELETE CASCADE

-- Commit transaction
COMMIT;
