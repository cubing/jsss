import { initialize333, random333Scramble } from "./implementations/3x3x3";
import { initialize444, random444Scramble } from "./implementations/4x4x4";

const DEBUG_MEASURE_PERF = true;

function now() {
  return (typeof performance === "undefined" ? Date : performance).now();
}

async function measurePerf(name, f) {
  if (!DEBUG_MEASURE_PERF) {
    return f();
  }

  const start = now();
  const result = f();
  if (result?.then) {
    await result;
  }
  const end = now();
  console.warn(`${name}: ${Math.round(end - start)}ms`);
  return result;
}

export const api = {
  initialize: async (eventID) => {
    switch (eventID) {
      case "333":
      case "333oh":
      case "333ft":
        return measurePerf("initialize333", initialize333);
      case "444":
        return measurePerf("initialize444", initialize444);
      default:
        throw new Error(`unsupported event: ${eventID}`);
    }
  },

  randomScramble: async (eventID) => {
    switch (eventID) {
      case "333":
      case "333oh":
      case "333ft":
        return measurePerf("random333Scramble", random333Scramble);
      // case "333bf":
      //   return algToString(random333OrientedScramble());
      case "444":
        return measurePerf("random444Scramble", random444Scramble);
      default:
        throw new Error(`unsupported event: ${eventID}`);
    }
  },
};
