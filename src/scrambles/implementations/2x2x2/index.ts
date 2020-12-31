import { algToString, parseAlg, Sequence } from "cubing/alg";
import { KPuzzle, Transformation } from "cubing/kpuzzle";
import { puzzles } from "cubing/puzzles";
import { SGSCachedData } from "../vendor/sgs/src/sgs";
import { TrembleSolver } from "../vendor/sgs/src/tremble";


let cachedTrembleSolver: Promise<TrembleSolver> | null = null;
async function getCachedTrembleSolver(): Promise<TrembleSolver> {
  return cachedTrembleSolver || (
    cachedTrembleSolver = (async (): Promise<TrembleSolver>  => {
      // TODO: fix assignment bug that prevents extensions.
      const nonExtensibleDef = await puzzles["2x2x2"].def();
      const def = Object.assign({}, nonExtensibleDef);
      // TODO: reduce size of JSON.
      const json: SGSCachedData = (await import("../vendor/sgs/src/test/puzzles/2x2x2.sgs.json")).cachedData222;
      // console.log(json)
      return new TrembleSolver(def, json);
    })()
  )
}

export async function preInitialize222(): Promise<void> {
  await getCachedTrembleSolver();
}

export async function solve222State(state: Transformation): Promise<Sequence> {
  const trembleSolver = await getCachedTrembleSolver();
  return trembleSolver.solve(state);
}

(async () => {
  // TODO: fix assignment bug that prevents extensions.
  const nonExtensibleDef = await puzzles["2x2x2"].def();
  const def = Object.assign({}, nonExtensibleDef);
  const kpuzzle = new KPuzzle(def);
  kpuzzle.applyAlg(parseAlg("R U R'"));
  console.log(await solve222State(kpuzzle.state));
})();

export async function random222Scramble(): Promise<Sequence> {
  const nonExtensibleDef = await puzzles["2x2x2"].def();
  const def = Object.assign({}, nonExtensibleDef);
  const kpuzzle = new KPuzzle(def);
  kpuzzle.applyAlg(parseAlg("R U R'"));
  const seq = await solve222State(kpuzzle.state);
  console.log(seq.nestedUnits.length, algToString(seq));
  return seq;
}
