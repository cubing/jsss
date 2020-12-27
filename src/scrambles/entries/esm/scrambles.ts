// import { getNodeAdapterESM } from "../../worker/getNodeAdapter/esm";
// import { workerConstructorBrowser } from "../../worker/getWorkerConstructor/browser";
// import { workerConstructorNode } from "../../worker/getWorkerConstructor/node";
// import { outsideStrategy } from "../../worker/strategy/outside";
// import { trampolineBrowser } from "../../worker/trampoline/browser";
// import { workerInstantiatorESM } from "../../worker/workerInstantiator/esm";

import { wrap } from "comlink";
import { WorkerInsideAPI } from "../../worker/strategy/types";

export function getNewWorker(): WorkerInsideAPI {
  return wrap(new Worker("./scrambles-worker.js"));
}

// outsideStrategy.url.esm = new URL("./scrambles-worker.js", import.meta.url);
// outsideStrategy.getNodeAdapter.esm = getNodeAdapterESM;

// outsideStrategy.getWorkerConstructor.browser = workerConstructorBrowser;
// console.log({ workerConstructorBrowser });
// outsideStrategy.getWorkerConstructor.node = workerConstructorNode;

// outsideStrategy.workerInstantiator.esm = workerInstantiatorESM;
// outsideStrategy.trampoline.browser = trampolineBrowser;

export * from "../../index";
