const {
  randomScrambleStringForEvent,
  _preInitializationHintForEvent,
} = require("scrambles");

(async () => {
  _preInitializationHintForEvent("222");
  console.log(await randomScrambleStringForEvent("222"));

  _preInitializationHintForEvent("clock");
  console.log(await randomScrambleStringForEvent("clock"));

  _preInitializationHintForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  _preInitializationHintForEvent("333oh");
  console.log(await randomScrambleStringForEvent("333oh"));

  _preInitializationHintForEvent("minx");
  console.log(await randomScrambleStringForEvent("minx"));

  _preInitializationHintForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));

  setTimeout(() => {
    process.exit();
  }, 100)
})();
