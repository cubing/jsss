import { randomScrambleString } from "../../";

(async () => {
  console.group("Benchmarking!");
  for (let i = 0; i < 100; i++) {
    console.time();
    console.log(await randomScrambleString("333"));
    console.timeEnd();
  }
  console.groupEnd();
})();
