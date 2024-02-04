SHELL := /bin/bash

.PHONY: build
build:
	(cd packages/core; yarn install && yarn build)
	(cd packages/functions; yarn install && yarn build)
	(cd packages/web; yarn install && yarn build)
