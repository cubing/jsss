import { algToString, parse } from "cubing/alg";
import { KPuzzle, Puzzles, SVG, Transformation } from "cubing/kpuzzle";
// import { defaultOnThread } from "min2phase";
import { PuzzleScrambler, ScrambleInfo } from "./puzzle-scrambler";

const def = Puzzles["2x2x2"];
const version = "March 17, 2020";

async function initialize(statusCallback?: (statusString: string) => void): Promise<void> {

}

async function getRandomScramble(): Promise<ScrambleInfo> {
  // console.log(defaultOnThread);
  const scramble = parse("R2 F2 U2 R2");
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


export const scramble_333: PuzzleScrambler = {
  version,
  initialize,
  getRandomScramble,
  drawScramble,
}
