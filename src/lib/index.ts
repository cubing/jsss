/** @ts-ignore */
import { newWorkerInstance } from "./worker/_worker-wrapper.js";
import { algToString } from "cubing/alg";
// import { algToString, Sequence } from "cubing/alg";

// TODO
interface WorkerAPI {
  randomScrambleStringForEvent: (eventID: string) => Promise<string>;
}

// TODO
let codeType = "esm";
let cachedWorkerInstance: WorkerAPI | null = null;

export function setCodeType(newCodeType: "esm" | "cjs") {
  if (cachedWorkerInstance) {
    throw new Error(
      "Worker has already been constructed. Cannot set code type"
    );
  }
  codeType = newCodeType;
}

function getCachedWorkerInstance(): Promise<WorkerAPI> {
  return (
    cachedWorkerInstance ??
    (cachedWorkerInstance ??= newWorkerInstance(codeType))
  );
}

export async function randomScrambleStringForEvent(
  eventID: string
): Promise<string> {
  console.log(
    "workerInstance",
    await (await getCachedWorkerInstance()).randomScrambleStringForEvent(
      eventID
    )
  );
  return "fsdfsdf";
}

// async function randomScramble(eventID: string): Promise<Sequence> {
//   console.log("randomScramble index");
//   switch (eventID) {
//     case "333":
//     case "333oh":
//     case "333ft":
//       return (await workerInstance).random333Scramble();
//     case "333bf":
//       return (await workerInstance).random333OrientedScramble();
//     case "444":
//       return (await workerInstance).random444Scramble();
//     default:
//       throw new Error(`unsupported event: ${eventID}`);
//   }
// }

// export async function randomScrambleStringForEvent(
//   eventID: string
// ): Promise<string> {
//   return algToString(await randomScramble(eventID));
// }

// import { api } from "../lib/targets/esm/index-esm.js";

// // import { randomScrambleString } from "../../";

// (async () => {
//   console.group("Benchmarking!");
//   console.log(await (await api).increment());
//   // for (let i = 0; i < 100; i++) {
//   //   console.time();
//   //   console.log(await randomScrambleString("333"));
//   //   console.timeEnd();
//   // }
//   console.groupEnd();
// })();

// // import { expose } from "comlink";
// import { Sequence } from "cubing/alg";
// import {
//   random333Scramble,
//   random333OrientedScramble,
// } from "../lib/implementations/3x3x3";
// import { random444Scramble } from "../lib/implementations/4x4x4";

// export interface ScrambleWorker {
//   randomScramble(eventID: string): Promise<Sequence>;
// }

// export interface ScrambleWorkerConstructor {
//   new (): ScrambleWorker;
// }

// export class ScrambleWorkerImpl implements ScrambleWorker {
//   async randomScramble(eventID: string): Promise<Sequence> {
//     console.log("randomScramble");
//     switch (eventID) {
//       case "333":
//       case "333oh":
//       case "333ft":
//         return random333Scramble();
//       case "333bf":
//         return random333OrientedScramble();
//       case "444":
//         return random444Scramble();
//       default:
//         throw new Error(`unsupported event: ${eventID}`);
//     }
//   }
// }
