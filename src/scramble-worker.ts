import { expose } from "comlink";
import { Sequence } from "cubing/alg";
import { random333Scramble, random333OrientedScramble } from "./3x3x3";
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
      case "333oh":
      case "333ft":
        return random333Scramble();
      case "333bf":
        return random333OrientedScramble();
      case "444":
        return random444Scramble();
      default:
        throw new Error(`unsupported event: ${eventID}`);
    }
  }
}

expose(ScrambleWorkerImpl);
