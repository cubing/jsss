# This Makefile is a wrapper around the scripts from `package.json`.
# https://github.com/lgarron/Makefile-scripts

# Note: the first command becomes the default `make` target.
NPM_COMMANDS = build build-esm build-esm-browser build-esm-bundle-global build-cjs build-types vendor-cubing test-node test-node-require test-node-import test-node-bundle-global dev clean prepack

.PHONY: $(NPM_COMMANDS)
$(NPM_COMMANDS):
	npm run $@

# We write the npm commands to the top of the file above to make shell autocompletion work in more places.
DYNAMIC_NPM_COMMANDS = $(shell cat package.json | npx jq --raw-output ".scripts | keys_unsorted | join(\" \")")
.PHONY: update-Makefile
update-Makefile:
	sed -i "" "s/^NPM_COMMANDS = .*$$/NPM_COMMANDS = ${DYNAMIC_NPM_COMMANDS}/" Makefile

.PHONY: publish
publish:
	npm publish

NODE_EXTERNALS=\
--external:worker_threads \
--external:crypto \
--external:path \
--external:comlink/dist/umd/node-adapter.js

LIB_EXTERNALS=\
--external:comlink \
--external:comlink/dist/esm/comlink.js \
--external:comlink/dist/esm/comlink.mjs \
--external:cubing \
--external:cubing/alg \

.PHONY: _build-esm
_build-esm:
	npx esbuild --format=esm --target=es2020 \
		--bundle --splitting $(NODE_EXTERNALS) $(LIB_EXTERNALS) \
		--outdir=dist/esm \
		src/scrambles/entries/esm/scrambles.ts \
		src/scrambles/entries/esm/scrambles-worker.js

.PHONY: _build-esm-browser
_build-esm-browser:
		npx esbuild --format=esm --target=es2020 \
		--bundle --splitting $(NODE_EXTERNALS) $(LIB_EXTERNALS) \
		--outdir=dist/esm-browser \
		src/scrambles/entries/esm-browser/scrambles.ts \
		src/scrambles/entries/esm-browser/scrambles-worker.js

.PHONY: _build-esm-browser-bundle-global
_build-esm-browser-bundle-global:
		npx esbuild --format=esm --target=es2020 \
		--bundle --splitting $(NODE_EXTERNALS) \
		--outdir=dist/esm-browser-bundle-global \
		src/scrambles/entries/esm-browser-bundle-global/scrambles.ts \
		src/scrambles/entries/esm-browser-bundle-global/scrambles-worker.js

.PHONY: _build-cjs
_build-cjs:
		npx esbuild --format=cjs --target=es2020 \
		--outdir=dist/cjs \
		src/scrambles/entries/cjs/scrambles.ts \
		src/scrambles/entries/cjs/scrambles-worker.js
	cp -R src/dist-static/cjs/package.json dist/cjs/
 