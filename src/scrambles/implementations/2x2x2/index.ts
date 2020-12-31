import { algToString, parseAlg, Sequence } from "cubing/alg";
import { KPuzzle, KPuzzleDefinition, Transformation } from "cubing/kpuzzle";
import { puzzles } from "cubing/puzzles";
import { randomPermute, randomUIntBelowFactory } from "../vendor/random-uint-below";
import { SGSCachedData } from "../vendor/sgs/src/sgs";
import { TrembleSolver } from "../vendor/sgs/src/tremble";


let cachedTrembleSolver: Promise<TrembleSolver> | null = null;
async function getCachedTrembleSolver(): Promise<TrembleSolver> {
  return cachedTrembleSolver || (
    cachedTrembleSolver = (async (): Promise<TrembleSolver>  => {
      // TODO: fix assignment bug that prevents extensions.
      const nonExtensibleDef = await puzzles["2x2x2"].def();
      const def = Object.assign({}, nonExtensibleDef);
      // TODO: Allow reducing moves.
      delete def.moves.x;
      delete def.moves.y;
      delete def.moves.z;
      // TODO: reduce size of JSON.
      // TODO: this technically doesn't use the same definition as cubing.js 2x2x2.
      const json: SGSCachedData = (await import("../vendor/sgs/src/test/puzzles/2x2x2.sgs.json")).cachedData222;
      // console.log(json)
      return new TrembleSolver(def, json);
    })()
  )
}

export async function preInitialize222(): Promise<void> {
  await getCachedTrembleSolver();
}

// TODO: fix def consistency.
export async function solve222State(state: Transformation): Promise<Sequence> {
  const trembleSolver = await getCachedTrembleSolver();
  return trembleSolver.solve(state, 3);
}

// TODO: factor out and test.
async function randomizeOrbit(def: KPuzzleDefinition, orbitName: string, state: Transformation, options?: {orientationSum?: number}): Promise<void> {
  const randomUIntBelow = await randomUIntBelowFactory();
  await randomPermute(state[orbitName].permutation);

  const orbitDef = def.orbits[orbitName];
  const ori = state[orbitName].orientation;

  let sum = 0;
  for (let i = 0; i < orbitDef.numPieces; i++) {
    const o = await randomUIntBelow(orbitDef.orientations)
    ori[i] = o;
    sum += o;
  }

  // console.log("aaaa", options && "orientationSum" in options);
  if (options && "orientationSum" in options) {
    // console.log("sfdsf", options!.orientationSum), 
    ori[0] = ((ori[0] + options!.orientationSum! - sum) % orbitDef.orientations + orbitDef.orientations) % orbitDef.orientations
  }
}

export async function random222State(): Promise<Transformation> {
  const nonExtensibleDef = await puzzles["2x2x2"].def();
  const def = Object.assign({}, nonExtensibleDef);
  const kpuzzle = new KPuzzle(def);
  await randomizeOrbit(def, "CORNERS", kpuzzle.state, {orientationSum: 0});
  return kpuzzle.state;
}

export async function random222Scramble(): Promise<Sequence> {
  const state = await random222State();
  // console.log("loggo", state);
  const seq = await solve222State(state);
  // console.log(seq.nestedUnits.length);
  // console.log(algToString(seq));
  return seq;
}
