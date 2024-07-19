BEGIN;

ALTER TABLE scans
ALTER COLUMN fileReference TYPE varchar(256);

ALTER TABLE scans
RENAME COLUMN fileReference TO file_reference;

ALTER TABLE scans
RENAME COLUMN accountId TO account_id;

ALTER TABLE scans
RENAME COLUMN createdOn TO created_on;

COMMIT;
