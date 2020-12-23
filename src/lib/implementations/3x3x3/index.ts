import { parse, Sequence, Unit } from "cubing/alg";
import { KPuzzle, Puzzles, Transformation } from "cubing/kpuzzle";
import { randomChoiceAsync } from "../vendor/random-uint-below";
import { toMin2PhaseState } from "./convert";
import { solveState } from "./min2phase/gwt";
import { sgs3x3x3 } from "./sgs";

// function randomUIntBelow(_x: number): number {
//   return 0;
// }

// async function randomChoice<T>(arr: Array<T>): Promise<T> {
//   return arr[await randomUIntBelow(arr.length)];
// }

async function random333State(): Promise<Transformation> {
  const kpuzzle = new KPuzzle(Puzzles["3x3x3"]);
  for (const piece of sgs3x3x3) {
    kpuzzle.applyAlg(parse(await randomChoiceAsync(piece)));
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

export async function random333OrientedScramble(): Promise<Sequence> {
  const unorientedScramble = await random333Scramble();
  let moves: Unit[] = unorientedScramble.nestedUnits.slice();
  for (const suffix of randomSuffixes) {
    moves = moves.concat(parse(await randomChoice(suffix)));
  }
  return new Sequence(moves);
}
