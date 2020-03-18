import { Transformation } from "cubing/kpuzzle";

export type ScrambleString = string;
export type ScrambleState = Transformation;

export interface ScrambleInfo {
  scramble_string: ScrambleString,
  state: ScrambleState,
}

export interface PuzzleScrambler {
  version: string
  initialize(statusCallback?: (statusString: string) => void): Promise<void>;
  getRandomScramble(): Promise<ScrambleInfo>;
  drawScramble(parentElement: Element, state: ScrambleState, width?: number, height?: number): Promise<void>;
}
