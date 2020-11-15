import { Worker } from "worker_threads";
// import WebWorker from "web-worker";
import { wrap } from "comlink";
import { Sequence, algToString } from "cubing/alg";
import { getClockScrambleString } from "./clock.js";
import { nodeEndpoint } from "./node-adapter.js";

function newWorker() {
  const url = new URL("./proxy-moxie.js", import.meta.url);
  console.log("url", url.href);
  const constructorInstance = wrap(
    nodeEndpoint(new Worker(url, { type: "module" }))
  );
  console.log("instancy");
  return new constructorInstance();
}

class LazyWorker {
  worker = null;
  getWorker() {
    if (this.worker === null) {
      
      console.log("instancingey"
      );
      this.worker = newWorker();
      console.log("instancified");
    }
    return this.worker;
  }
}

const instanceMain = new LazyWorker();
const instance444 = new LazyWorker();

// Balances instances.
// Currently shards by event, but may get clever and track availability of workers in the future.
async function getInstanceForNewScramble(eventID) {
  switch (eventID) {
    case "444":
    case "444bf":
      // 4x4x4 is the only "slow" scrambler, so we put it on its own thread.
      return instance444.getWorker();
    default:
      console.log("getInstanceForNewScramble getting");
      const worker = instanceMain.getWorker();
      console.log("workererererer", { worker });
      return worker;
  }
}

async function randomScramble(eventID) {
  console.log("randomScramblelelelele");
  const instance = await getInstanceForNewScramble(eventID);
  console.log("'stance'", { instance });
  return instance.randomScramble(eventID);
}

export async function randomScrambleString(eventID) {
  switch (eventID) {
    case "clock":
      return getClockScrambleString(); // Same thread for now.
  }
  console.log("randomScrambleStringolololol");
  return algToString(await randomScramble(eventID));
}
