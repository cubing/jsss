import "../../dist/esm-bundle-global/scrambles.js";

(async () => {
  globalThis.scrambles._preInitializationHintForEvent("333");
  console.log(await globalThis.scrambles.randomScrambleStringForEvent("333"));

  globalThis.scrambles._preInitializationHintForEvent("444");
  console.log(await globalThis.scrambles.randomScrambleStringForEvent("444"));

  process.exit();
})();
