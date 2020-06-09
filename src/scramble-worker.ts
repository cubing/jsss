import { expose } from "comlink";
import { Sequence } from "cubing/alg";
import "regenerator-runtime/runtime";
import { random333Scramble } from "./3x3x3";
import { random444Scramble } from "./4x4x4";

export interface ScrambleWorker {
  randomScramble(eventID: string): Promise<Sequence>;
}

export interface ScrambleWorkerConstructor {
  new (): ScrambleWorker;
}

class ScrambleWorkerImpl implements ScrambleWorker {
  async randomScramble(eventID: string): Promise<Sequence> {
    switch (eventID) {
      case "333":
        return random333Scramble();
      case "444":
        return random444Scramble();
      default:
        throw new Error(`unsupported event: ${eventID}`);
    }
  }
}

expose(ScrambleWorkerImpl);
