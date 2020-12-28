const {
  randomScrambleStringForEvent,
  _preInitializationHintForEvent,
} = require("scrambles");

(async () => {
  _preInitializationHintForEvent("clock");
  console.log(await randomScrambleStringForEvent("clock"));

  _preInitializationHintForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  _preInitializationHintForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));

  process.exit();
})();
