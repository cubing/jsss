import { expose } from "comlink";
import { api } from "./worker-contents.js";

if (typeof Worker !== "undefined") {
  (async () => {
    console.log("inside worker browser");
    expose(api);
  })();
} else {
  (async () => {
    console.log("inside worker node");
    const { parentPort } = await import("worker_threads");
    const nodeEndpoint = await import("comlink/dist/umd/node-adapter.js");
    expose(api, nodeEndpoint.default(parentPort));
  })();
}
