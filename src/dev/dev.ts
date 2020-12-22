import { randomScrambleStringForEvent } from "../lib";

// import { randomScrambleString } from "../../";

(async () => {
  console.group("Benchmarking!");
  console.log(await randomScrambleStringForEvent("333"));
  // for (let i = 0; i < 100; i++) {
  //   console.time();
  //   console.log(await randomScrambleString("333"));
  //   console.timeEnd();
  // }
  console.groupEnd();
})();
