import {
  randomScrambleStringForEvent,
  startPreInitializationForEvent,
} from "scrambles";

(async () => {
  await startPreInitializationForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  await startPreInitializationForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));

  process.exit();
})();
