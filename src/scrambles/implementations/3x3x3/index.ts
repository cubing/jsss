import { Unit, Sequence, parseAlg, algToString, invert } from "cubing/alg";
// @ts-ignore
import { parse } from "cubing/alg";
// @ts-ignore
import { Combine, Invert, KPuzzle, Transformation } from "cubing/kpuzzle";
// @ts-ignore
import { puzzles } from "cubing/puzzles";
import { randomChoiceFactory } from "../vendor/random-uint-below";
import { toMin2PhaseState } from "./convert";
import { passesFilter } from "./filter";
import { initialize, solveState } from "./min2phase/gwt";
import { sgs3x3x3 } from "./sgs";

async function random333State(): Promise<Transformation> {
  const def = await puzzles["3x3x3"].def();
  const kpuzzle = new KPuzzle(def);
  for (const piece of sgs3x3x3) {
    kpuzzle.applyAlg(parse(((await randomChoiceFactory()) as any)(piece)));
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

export async function initialize333(): Promise<void> {
  initialize();
}

export async function random333OrientedScramble(): Promise<Sequence> {
  const unorientedScramble = await random333Scramble();
  let moves: Unit[] = unorientedScramble.nestedUnits.slice();
  for (const suffix of randomSuffixes) {
    moves = moves.concat(parse(((await randomChoiceFactory()) as any)(suffix)));
  }
  return new Sequence(moves);
}

function puzzleOrientationIdx(state: Transformation): [number, number] {
  const idxU = state["CENTERS"].permutation[0];
  const idxD = state["CENTERS"].permutation[5];
  const unadjustedIdxL = state["CENTERS"].permutation[1];
  let idxL = unadjustedIdxL;
  if (idxU < unadjustedIdxL) {
    idxL--;
  }
  if (idxD < unadjustedIdxL) {
    idxL--;
  }
  return [idxU, idxL];
}


(async () => {
  const def = await puzzles["3x3x3"].def();

  const puzzleOrientationCache: [string, Transformation][][] = new Array(6)
  .fill(0)
  .map(() => {
    return new Array(6);
  });

  // We use a new block to avoid keeping a reference to temporary vars.
  {

    const orientationKpuzzle = new KPuzzle(def);
    const uAlgs: Sequence[] = ["", "z", "x", "z'", "x'", "x2"].map((s) =>
    // const uAlgs: Sequence[] = ["", "S", "M'", "S'", "M", "M2"].map((s) =>
    parseAlg(s),
    );
    const yAlg = parseAlg("y");
    // const yAlg = parseAlg("E");
    for (const uAlg of uAlgs) {
      orientationKpuzzle.reset();
      orientationKpuzzle.applyAlg(uAlg);
      for (let i = 0; i < 4; i++) {
        orientationKpuzzle.applyAlg(yAlg);
        const [idxU, idxL] = puzzleOrientationIdx(orientationKpuzzle.state);
        puzzleOrientationCache[idxU][idxL] = [
          algToString(uAlg) + " " + algToString(yAlg) + (i + 1 % 4),
          Invert(
          def,
          orientationKpuzzle.state,
        )
        ]
      }
    }
  }

  function normalizePuzzleOrientation(s: Transformation): [string , Transformation] {
    const [idxU, idxL] = puzzleOrientationIdx(s);
    const [str, orientationTransformation] = puzzleOrientationCache[idxU][idxL];
    return [str, Combine(def, s, orientationTransformation)];
  }

  const algs = [
    [
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2     R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 x' D' E'",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 L  E2",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2 x' D2 E2",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    S2 U2 S2 U2 L F' r' F  E",
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  S2 U2 S2 U2   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 r' U' D E'",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 r' U' D' ",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R'   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' r' U' D E'",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  (R2 U R U R' U' R' U' R' U R')2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 r' U' D' E2",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    r' U'  E2"
    ],
    [
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    (R2 U R U R' U' R' U' R' U R')2 R' U'  E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R'  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  (R2 U R U R' U' R' U' R' U R')2 f L f'  E2",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 R' U'  E2",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  S2 U2 S2 U2 B r' B' L' D L  E2",
      "     (R2 U R U R' U' R' U' R' U R')2     R2 U R U R' U' R' U' R' U R' r' U D' ",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 r' U D2 ",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 r' U D' ",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    (R2 U R U R' U' R' U' R' U R')2 r' U D E'",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    R2 U R U R' U' R' U' R' U R' r' U D2 E'"
    ],
    [
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 x' D ",
      "    [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' L D E",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 x' D' E'",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   S2 U2 S2 U2 R' U F L F' D2 E'",
      "    [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 R' U D2 E",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 R' U D' E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]     [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 R' U D' E'",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 R' U D' E2",
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 R' U  E2"
    ],
    [
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R'    [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' R' U'  E2",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 f L f' D' ",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   R2 U R U R' U' R' U' R' U R' [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   R' U' D' E2",
      "     (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 R' U' D E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R' U' D2 E",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  S2 U2 S2 U2 R' U' D' E",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  (R2 U R U R' U' R' U' R' U R')2 R' U' D ",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   R2 U R U R' U' R' U' R' U R' R' U' D E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 R' U' D' E'"
    ],
    [
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' r' U' D' E'",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  S2 U2 S2 U2 r' U' D2 E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]       S2 U2 S2 U2 r' U' D E2",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]     S2 U2 S2 U2 r' U' D2 E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R'  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 r' U' D2 ",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  r' U' D E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 r' U'  ",
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 r' U' D' ",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' r' U' D' E"
    ],
    [
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   S2 U2 S2 U2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 r' U D' E",
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  S2 U2 S2 U2 r' U D ",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]    r' U D ",
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  (R2 U R U R' U' R' U' R' U R')2 r' U D' ",
      "   [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 r' U  E'",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R'  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' r' U D2 E2",
      " [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]   [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] (R2 U R U R' U' R' U' R' U R')2 S2 U2 S2 U2 r' U D2 ",
      "  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 [U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  r' U D E'",
      "     (R2 U R U R' U' R' U' R' U R')2  [x U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R] [z2 U': R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R]  R2 U R U R' U' R' U' R' U R' S2 U2 S2 U2 r' U  "
    ]
  ]

  async function gen(s: string): Promise<string> {
    const kpuzzle = new KPuzzle(def);
    kpuzzle.applyAlg(parseAlg(s));
    const [str, normalized] = normalizePuzzleOrientation(kpuzzle.state);
    const genned = algToString(parseAlg(algToString(invert(await solve333(normalized))) + " " + str));
    console.log(genned);
    return genned;
  }

  const genned: string[][] = [];
  for (let i = 0; i < algs.length; i++) {
    const gennedRow: string[] = [];
    genned.push(gennedRow);
    for (let j = 0; j < algs[0].length; j++) {
      gennedRow.push(await gen(algs[i][j]));
    }
  }

  console.log(JSON.stringify(genned))
})();
