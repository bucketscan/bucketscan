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

.PHONY: build
build:
	scripts/build.sh

.PHONY: run
run:
	cd packages/web; yarn dev

.PHONY: supabase-init
supabase-init:
	npx supabase login
	(cd packages/web; npx supabase link --project-ref ydtwazcntqtdfhorddrm && npx supabase db pull)

.PHONY: supabase-start
	npx supabase start

.PHONY: deploy
deploy:
	echo "TODO: Deploy functions and db migrations to Supabase"

###################################################################
# Combined commands
###################################################################
.PHONY: setup
setup: init install run

.PHONY: teardown
teardown: clean
