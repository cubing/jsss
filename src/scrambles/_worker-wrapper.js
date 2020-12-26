// import { Worker } from "worker_threads";
// import Worker from "web-worker";
import { wrap } from "comlink";
import { relativeWorkerPath, esmTrampoline } from "./_trampoline.js";

// TODO: https://github.com/andywer/threads.js

export async function newWorkerInstance(codeType) {
  let endpoint;
  if (typeof Worker !== "undefined") {
    if (codeType === "cjs") {
      endpoint = new Worker(relativeWorkerPath());
    } else {
      endpoint = new Worker(esmTrampoline(), {
        type: "module",
      });
    }
  } else {
    endpoint = await (
      await import("./_worker-node-endpoint.js")
    ).nodeWrapperEndpoint(codeType);
  }

  return wrap(endpoint);
}
