SHELL := /bin/bash

###################################################################
# Modular commands
###################################################################
.PHONY: clean
clean:
	rm -rf node_modules/ \
		**/node_modules/ \
		packages/web/{.next,.open-next,next-env.d.ts}/ \
		**/*.env*

.PHONY: init
init:
	scripts/init.sh

.PHONY: install
install:
	scripts/install.sh

.PHONY: check
check:
	cd packages/web; yarn typecheck

.PHONY: build
build:
	scripts/build.sh

.PHONY: start-backend
start-backend:
	npx supabase start

.PHONY: stop-backend
stop-backend:
	npx supabase stop

.PHONY: start-webapp
start-webapp:
	cd packages/web; yarn dev

###################################################################
# Combined commands
###################################################################
.PHONY: setup
setup: init install

.PHONY: teardown
teardown: stop-backend clean
