SHELL := /bin/bash

###################################################################
# Modular commands
###################################################################
.PHONY: clean
clean:
	rm -rf .sst/ \
		node_modules/ \
		**/node_modules/

.PHONY: build
build: npx pnpm install -r && npx pnpm build

# Temporarily removing SST from the build as it's not yet working
# (cd sst; yarn install && yarn build)

.PHONY: run
run:
	npx pnpm dev

.PHONY: web
web:
	npx pnpm --filter web run dev:local


###################################################################
# Combined commands
###################################################################
.PHONY: setup
setup: build run

.PHONY: teardown
teardown: clean
