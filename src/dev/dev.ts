import {
  randomScrambleStringForEvent,
  startPreInitializationForEvent,
} from "../lib/worker/index-common";

// import { randomScrambleString } from "../../";

(async () => {
  await startPreInitializationForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  await startPreInitializationForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));
  // for (let i = 0; i < 100; i++) {
  //   console.time();
  //   console.log(await randomScrambleString("333"));
  //   console.timeEnd();
  // }
})();
