SHELL := /bin/bash

###################################################################
# Modular commands
###################################################################
.PHONY: clean
clean:
	rm -rf .sst/ \
		node_modules/ \
		**/node_modules/

.PHONY: install
install:
	npx pnpm install -r

.PHONY: build
build:
	npx pnpm build

.PHONY: run
run:
	npx pnpm dev

.PHONY: web
web:
	npx pnpm --filter web run dev:local

.PHONY: supabase-init
supabase-init:
	npx supabase login
	(cd packages/web; npx supabase link --project-ref ydtwazcntqtdfhorddrm && npx supabase db pull)

.PHONY: supabase-start
	npx supabase start

.PHONY: destroy
destroy:
	npx pnpm remove

###################################################################
# Combined commands
###################################################################
.PHONY: setup
setup: install build run

.PHONY: teardown
teardown: destroy clean
