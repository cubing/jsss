import {
  randomScrambleStringForEvent,
  startPreInitializationForEvent,
} from "scrambles";

(async () => {
  startPreInitializationForEvent("333");
  console.log(randomScrambleStringForEvent("333"));

  startPreInitializationForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));

  process.exit();
})();
