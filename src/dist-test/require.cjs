const {
  randomScrambleStringForEvent,
  startPreInitializationForEvent,
} = require("scrambles");

(async () => {
  startPreInitializationForEvent("333");
  console.log(await randomScrambleStringForEvent("333"));

  startPreInitializationForEvent("444");
  console.log(await randomScrambleStringForEvent("444"));

  process.exit();
})();
