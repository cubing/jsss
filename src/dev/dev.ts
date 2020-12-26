import {
  randomScrambleStringForEvent,
  _preInitializationHintForEvent,
} from "../scrambles/entries/esm/scrambles";

// import { randomScrambleString } from "../../";

(async () => {
  await _preInitializationHintForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));
  console.log(await randomScrambleStringForEvent("333"));

  await _preInitializationHintForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));
  console.log(await randomScrambleStringForEvent("444"));
  // for (let i = 0; i < 100; i++) {
  //   console.time();
  //   console.log(await randomScrambleString("333"));
  //   console.timeEnd();
  // }
})();
