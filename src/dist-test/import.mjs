import {
  randomScrambleStringForEvent,
  _preInitializationHintForEvent,
} from "scrambles";

(async () => {
  _preInitializationHintForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  _preInitializationHintForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));

  process.exit();
})();
