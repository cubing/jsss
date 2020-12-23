// import { Worker } from "worker_threads";
// import Worker from "web-worker";
import { wrap } from "comlink";

// TODO: https://github.com/andywer/threads.js

export async function newWorkerInstance(codeType) {
  console.log("initting");
  console.log("w", typeof Worker);
  let endpoint;
  if (typeof Worker !== "undefined") {
    console.log("browsey");
    if (codeType === "cjs") {
      endpoint = new Worker("./_worker-entry.js");
    } else {
      endpoint = new Worker("./_worker-entry.js", {
        type: "module",
      });
    }
  } else {
    console.log("nodey");
    endpoint = await (
      await import("./_worker-node-endpoint.js")
    ).nodeWrapperEndpoint(codeType);
  }

  const api = wrap(endpoint);
  // // console.log({ api: await api() });
  // console.log(await api.increment());
  // console.log(await api.increment());

  return api;
}
