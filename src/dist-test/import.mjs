import {
  randomScrambleStringForEvent,
  startPreInitializationForEvent,
  // } from "../../dist/esm/index.js";
} from "scrambles";

(async () => {
  await startPreInitializationForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  await startPreInitializationForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));
})();
