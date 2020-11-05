import { wrap } from "comlink";
import { Sequence, algToString } from "cubing/alg";
import { getClockScrambleString } from "./clock";

function newWorker() {
  const constructorInstance = wrap(
    new Worker("../generated/scrambles.worker-module.js")
  );
  return new constructorInstance();
}

class LazyWorker {
  worker = null;
  getWorker() {
    if (this.worker === null) {
      this.worker = newWorker();
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
      return instanceMain.getWorker();
  }
}

async function randomScramble(eventID) {
  const instance = await getInstanceForNewScramble(eventID);
  return instance.randomScramble(eventID);
}

export async function randomScrambleString(eventID) {
  switch (eventID) {
    case "clock":
      return getClockScrambleString(); // Same thread for now.
  }
  return algToString(await randomScramble(eventID));
}
