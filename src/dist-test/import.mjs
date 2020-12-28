import {
  randomScrambleStringForEvent,
  _preInitializationHintForEvent,
} from "scrambles";

(async () => {
  _preInitializationHintForEvent("clock");
  console.log(await randomScrambleStringForEvent("clock"));

  _preInitializationHintForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  _preInitializationHintForEvent("333oh");
  console.log(await randomScrambleStringForEvent("333oh"));

  _preInitializationHintForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));

  process.exit();
})();
