import { randomUIntBelowFactory } from "../vendor/random-uint-below";

const pins = ["UR", "DR", "DL", "UL"];
const backMoves = ["U", "R", "D", "L", "ALL"];
const frontMoves = pins.concat(backMoves);

async function randomSuffix(randomUIntBelow: (max: number) => number) {
  const amount = randomUIntBelow(12);
  if (amount <= 6) {
    return `${amount}+`;
  } else {
    return `${12 - amount}-`;
  }
}

const randomUIntBelowPromise = randomUIntBelowFactory();

export async function randomClockScrambleString(): Promise<string> {
  const randomUIntBelow = await randomUIntBelowPromise;
  const moves = [];
  async function side(families: string[]): Promise<void> {
    for (const family of families) {
      moves.push(`${family}${await randomSuffix(randomUIntBelow)}`);
    }
  }
  await side(frontMoves);
  moves.push("y2");
  await side(backMoves);
  for (const pin of pins) {
    if (randomUIntBelow(2) === 0) {
      moves.push(pin);
    }
  }
  return moves.join(" ");
}
