import { parse, Sequence, Unit } from "cubing/alg";
import { KPuzzle, Puzzles, Transformation } from "cubing/kpuzzle";
import { randomUIntBelow } from "random-uint-below";
import { toMin2PhaseState } from "./convert";
import { solveState } from "./min2phase/gwt";
import { sgs3x3x3 } from "./sgs";

function randomChoice<T>(arr: Array<T>): T {
  return arr[randomUIntBelow(arr.length)];
}

function random333State(): Transformation {
  const kpuzzle = new KPuzzle(Puzzles["3x3x3"]);
  for (const piece of sgs3x3x3) {
    kpuzzle.applyAlg(parse(randomChoice(piece)));
  }
  return kpuzzle.state;
}

async function solve333(s: Transformation): Promise<Sequence> {
  return parse(solveState(toMin2PhaseState(s)));
}

export async function random333Scramble(): Promise<Sequence> {
  return solve333(random333State());
}

const randomSuffixes = [
  ["", "Rw", "Rw2", "Rw'", "Fw", "Fw'"],
  ["", "Dw", "Rw2", "Dw'"],
];

export async function random333OrientedScramble(): Promise<Sequence> {
  const unorientedScramble = await random333Scramble();
  let moves: Unit[] = unorientedScramble.nestedUnits.slice();
  for (const suffix of randomSuffixes) {
    moves = moves.concat(parse(randomChoice(suffix)));
  }
  return new Sequence(moves);
}
