import "babel-polyfill"

import { wrap } from "comlink";
import { ScrambleWorker, ScrambleWorkerConstructor } from "./scramble-worker";
import { Sequence, algToString } from "cubing/alg";
import { getClockScrambleString } from "./clock";

function newWorker(): ScrambleWorker {
  const constructorInstance = wrap(
    new Worker("./scramble-worker.ts")
  ) as unknown as ScrambleWorkerConstructor;
  return new constructorInstance();
}

class LazyWorker {
  private worker: ScrambleWorker | null = null;
  getWorker() {
    if (this.worker === null) {
      this.worker = newWorker();
    }
    return this.worker
  }
}

const instanceMain: LazyWorker = new LazyWorker();
const instance444: LazyWorker = new LazyWorker();

// Balances instances.
// Currently shards by event, but may get clever and track availability of workers in the future.
async function getInstanceForNewScramble(eventID: string): Promise<ScrambleWorker> {
  switch (eventID) {
    case "444":
    case "444bf":
      // 4x4x4 is the only "slow" scrambler, so we put it on its own thread.
      return instance444.getWorker();
    default:
      return instanceMain.getWorker();
  }
}

async function randomScramble(eventID: string): Promise<Sequence> {
  const instance = await getInstanceForNewScramble(eventID);
  return instance.randomScramble(eventID)
}

export async function randomScrambleString(eventID: string): Promise<string> {
  switch (eventID) {
    case "clock":
      return getClockScrambleString(); // Same thread for now.
  }
  return algToString(await randomScramble(eventID));
}
