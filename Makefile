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
build:
	(cd packages/core; yarn install && yarn build)
	(cd packages/functions; yarn install && yarn build)
	(cd packages/web; yarn install && yarn build)

# Temporarily removing SST from the build as it's not yet working
# (cd sst; yarn install && yarn build)

.PHONY: run
run:
	cd packages/web; yarn dev

###################################################################
# Combined commands
###################################################################
.PHONY: setup
setup: build run

.PHONY: teardown
teardown: clean
