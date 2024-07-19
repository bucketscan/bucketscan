BEGIN;

CREATE TYPE scan_result AS ENUM ('pending', 'complete_clean', 'complete_infected', 'failed');

CREATE TABLE scans (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  accountId           UUID          NOT NULL,
  fileReference       UUID          NOT NULL,
  result              scan_result   NOT NULL,
  createdOn           DATE          NOT NULL DEFAULT CURRENT_DATE
);

ALTER TABLE scans
ADD CONSTRAINT fk_scans_accountId
FOREIGN KEY (accountId)
  REFERENCES basejump.accounts(id);

COMMIT;
