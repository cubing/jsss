import { parse, algToString, BareBlockMove, BlockMove, Sequence } from "cubing/alg";
import { Puzzles, SVG, KPuzzle, Transformation } from "cubing/kpuzzle";
import { PuzzleScrambler, ScrambleInfo } from "./puzzle-scrambler";
import {randomUIntBelow} from "random-uint-below"

const def = Puzzles["clock"];
const version = "March 17, 2020";

async function initialize(statusCallback?: (statusString: string) => void): Promise<void> {

}

function randomMove(family: string): BlockMove {
  if (family === "FLIP") {
    return BareBlockMove(family);
  }
  return BareBlockMove(family, randomUIntBelow(12));
}

async function getRandomScramble(): Promise<ScrambleInfo> {
  const moves = ["UR", "DR", "DL", "UL", "U", "R", "D", "L", "ALL", "FLIP", "UR", "DR", "DL", "UL"].map(randomMove);
  const nonEmptyMoves = moves.filter((m) => m.amount !== 0)
  const scramble = new Sequence(nonEmptyMoves);
  const puzzle = new KPuzzle(def);
  puzzle.applyAlg(scramble);
  return {
    scramble_string: algToString(scramble),
    state: puzzle.state
  };
}

// TODO: width/height?
async function drawScramble(parentElement: Element, state: Transformation, width: number, height: number): Promise<void> {
  const svg = new SVG(def);
  console.log(state);
  svg.draw(def, state);
  if (typeof width !== "undefined") {
    (svg.element.style.width = width.toString())
  };
  if (typeof height !== "undefined") {
    (svg.element.style.height = height.toString())
  };
  parentElement.appendChild(svg.element);
}


export const scramble_clock: PuzzleScrambler = {
  version,
  initialize,
  getRandomScramble,
  drawScramble,
}
