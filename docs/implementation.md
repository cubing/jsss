# Implementation

A major feature of `scrambles` is that it uses [web
workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
to make sure that we don't freeze up web pages when generating a scramble. Web
workers are tricky to work with, so this repository has some unique design decisions.

The source code is split into four parts::

- [`implementations`](../src/scrambles/implementations): Scrambler
  implementations for all the puzzles.
- [`api`](../src/scrambles/api): The code that connects all the scramblers into
  a unified API.
- [`worker`](../src/scrambles/worker): Plumbing to instantiate web workers in
  various environments.
- [`entries`](../src/scrambles/entries): The various ways that we publish code,
  where the calling code "enters" the library.

## `implementations`

[`implementations`](../src/scrambles/implementations) contains code specific to
each scrambler.

Some of the code originally came from other projects. Such code is contained in
[`implementations/vendor`](../src/scrambles/implementations/vendor).

In particular, we make sure to use high-quality random numbers to generate
scrambles, and a version of the
[`random-uint-below`](https://github.com/lgarron/random-uint-below.js/) library
is currently vendored.

## `api`

`api` is the heart of the code.

[`api/outside.ts`](../src/scrambles/api/outside.ts) contains the main
implementations of the functions that make up the library. For some simple cases
(e.g. `clock`, `minx`), `outside.ts` directly calls the implementation without
instantiating a web worker. However, `outside.ts` will instantiate a web worker
for any puzzle that takes more than a millisecond to generate scrambles for.

[`api/inside.ts`](../src/scrambles/api/inside.ts) is the central code that runs
inside the web worker. It connects all the complicated scrambler implementations
in one place.

## `worker`

[`worker`](../src/scrambles/worker) contains code to get around [compatibility
problems](https://github.com/lgarron/web-worker-compat-problems/).

We want to support CommonJS and ESM, `node` and browsers, `npm` and flat-file
developers. In a lot of cases, code that is needed for one environment will cause
a crash in another environment, so we have a flexible "strategy" system so that
we can connect the parts we need for a given entry. The most complicated part is
[`worker/strategy/outside.ts`](../src/scrambles/worker/strategy/outside.ts),
which uses a strategy to instantiate a web worker.

## `entries`

`entries` contains various configurations for publishing the library. Each entry
assembles its own strategy, to support different use cases.
[`entries/esm/`](../src/scrambles/entries/esm/) is the main entry,
or use cases that can use modern JavaScript modules.

Each entry contains both a file for the overall library "strategy" as well as
the strategy inside the web worker.
