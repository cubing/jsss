export async function nodeWrapperEndpoint(code_type) {
  const worker_threads = import("worker_threads");
  let nodeEndpoint;
  let worker;
  if (code_type === "cjs") {
    nodeEndpoint = import("comlink/dist/umd/node-adapter.js");
    worker = new (await worker_threads).Worker(
      require("path").join(__dirname, "_worker-entry.js")
    );
  } else {
    nodeEndpoint = import("comlink/dist/esm/node-adapter.mjs");
    worker = new (await worker_threads).Worker(
      new URL("./_worker-entry.js", import.meta.url),
      {
        type: "module",
      }
    );
  }
  return (await nodeEndpoint).default(worker);
}
