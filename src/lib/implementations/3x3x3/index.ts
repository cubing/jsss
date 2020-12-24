// @ts-ignore
import { parse, Sequence, Unit } from "../vendor/cubing/esm/alg/index.js";
// @ts-ignore
import { KPuzzle, Transformation } from "../vendor/cubing/esm/kpuzzle/index.js";
// @ts-ignore
import { puzzles } from "../vendor/cubing/esm/puzzles/index.js";
import { randomChoiceFactory } from "../vendor/random-uint-below";
import { toMin2PhaseState } from "./convert";
import { passesFilter } from "./filter";
import { initialize, solveState } from "./min2phase/gwt";
import { sgs3x3x3 } from "./sgs";

async function random333State(): Promise<Transformation> {
  const def = await puzzles["3x3x3"].def();
  const kpuzzle = new KPuzzle(def);
  for (const piece of sgs3x3x3) {
    kpuzzle.applyAlg(parse((await randomChoiceFactory())(piece)));
  }
  if (!passesFilter(def, kpuzzle.state)) {
    return random333State();
  }
  return kpuzzle.state;
}

async function solve333(s: Transformation): Promise<Sequence> {
  return parse(solveState(toMin2PhaseState(s)));
}

export async function random333Scramble(): Promise<Sequence> {
  return solve333(await random333State());
}

const randomSuffixes = [
  ["", "Rw", "Rw2", "Rw'", "Fw", "Fw'"],
  ["", "Dw", "Rw2", "Dw'"],
];

export async function initialize333(): Promise<Sequence> {
  initialize();
}

export async function random333OrientedScramble(): Promise<Sequence> {
  const unorientedScramble = await random333Scramble();
  let moves: Unit[] = unorientedScramble.nestedUnits.slice();
  for (const suffix of randomSuffixes) {
    moves = moves.concat(parse((await randomChoiceFactory())(suffix)));
  }
  return new Sequence(moves);
}
