install:
	yarn install

build:
	npm run tsc

run: build
	node dist/index.js