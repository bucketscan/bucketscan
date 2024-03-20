SHELL := /bin/bash

###################################################################
# Modular commands
###################################################################
.PHONY: clean
clean:
	rm -rf node_modules/ \
		**/node_modules/ \
		./webapp/{.next,.open-next,next-env.d.ts}/ \
		**/*.env*

.PHONY: init
init:
	scripts/init.sh

.PHONY: install
install:
	scripts/install.sh

.PHONY: check
check:
	cd webapp; yarn typecheck

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
	cd webapp; yarn dev

###################################################################
# Combined commands
###################################################################
.PHONY: setup
setup: init install

.PHONY: teardown
teardown: stop-backend clean

###################################################################
# Deployment
###################################################################

.PHONY: deploy
deploy:
	cd virus-api/terraform; terragrunt apply --auto-approve --terragrunt-non-interactive
