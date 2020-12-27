import { getNodeAdapterCJS } from "../../worker/getNodeAdapter/cjs";
import { workerConstructorBrowser } from "../../worker/getWorkerConstructor/browser";
import { workerConstructorNode } from "../../worker/getWorkerConstructor/node";
import { outsideStrategy } from "../../worker/strategy/outside";
import { trampolineBrowser } from "../../worker/trampoline/browser";
import { workerInstantiatorCJS } from "../../worker/workerInstantiator/cjs";

outsideStrategy.url.cjs = new URL("scrambles-worker.js", __dirname); // not portable 🤷‍♀️
outsideStrategy.getNodeAdapter.cjs = getNodeAdapterCJS;

console.log(outsideStrategy.url.cjs);

outsideStrategy.getWorkerConstructor.browser = workerConstructorBrowser;
console.log({ workerConstructorBrowser });
outsideStrategy.getWorkerConstructor.node = workerConstructorNode;

outsideStrategy.workerInstantiator.cjs = workerInstantiatorCJS;
outsideStrategy.trampoline.browser = trampolineBrowser;

export * from "../../index";
