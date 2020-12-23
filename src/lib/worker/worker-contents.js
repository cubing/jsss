import { expose } from "comlink";
import {
  random333Scramble,
  // random333OrientedScramble,
} from "../implementations/3x3x3";
import { random444Scramble } from "../implementations/4x4x4";

// import type { Sequence } from "cubing/alg";

// type Sequence = any; // TODO

// export interface ScrambleWorker {
//   randomScramble(eventID);
// }

// export interface ScrambleWorkerConstructor {
//   new(): ScrambleWorker;
// }

// export class ScrambleWorkerImpl implements ScrambleWorker {
//   async randomScramble(eventID) {
//     console.log("randomScramble worker impl");
//     return { type: "sequence", nestedUnits: [] };
//     // switch (eventID) {
//     //   case "333":
//     //   case "333oh":
//     //   case "333ft":
//     //     return random333Scramble();
//     //   case "333bf":
//     //     return random333OrientedScramble();
//     //   case "444":
//     //     return random444Scramble();
//     //   default:
//     //     throw new Error(`unsupported event: ${eventID}`);
//     // }
//   }

//   async randomScrambleString(eventID) {
//     console.log("randomScrambleString worker impl");
//     return "R D F'";
//   }
// }

export const api = {
  randomScramble: async (eventID) => {
    console.log("api randomScramble");
    // console.log("randomScrambleString worker impl");
    // return "R D F'"; randomScramble(eventID) {
    // console.log("randomScramble worker impl");
    // return { type: "sequence", nestedUnits: [] };
    switch (eventID) {
      case "333":
      case "333oh":
      case "333ft":
        return random333Scramble();
      // case "333bf":
      //   return algToString(random333OrientedScramble());
      case "444":
        return algToString(random444Scramble());
      default:
        return "R U R' F2";
        throw new Error(`unsupported event: ${eventID}`);
    }
  },
};
