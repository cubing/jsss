// import { Worker } from "worker_threads";
// import Worker from "web-worker";
import { wrap } from "comlink";

// TODO: https://github.com/andywer/threads.js

export async function newWorkerInstance(codeType) {
  let endpoint;
  if (typeof Worker !== "undefined") {
    if (codeType === "cjs") {
      endpoint = new Worker("./scramble-worker.js");
    } else {
      endpoint = new Worker(new URL("./scramble-worker.js", import.meta.url), {
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
