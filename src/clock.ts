import { randomUIntBelow } from "random-uint-below";


const preflipPrefixes = [
  "DR", "UR", "DL", "UL",
  "U", "R", "D", "L",
  "ALL",
];

const postflipPrefixes = [
  "DR", "UR", "DL", "UL",
  "ALL",
]

const pins = [
  "UR",
  "DR",
  "DL",
  "UL",
]

function movesForSide(prefixes: string[]): string[] {
  const moves: string[]  = [];
  for (const prefix of prefixes) {
    const amount = randomUIntBelow(12) - 5;
    if (amount === 0) {
      continue;
    }
    moves.push(prefix + Math.abs(amount) + (amount > 0 ? "+" : "-"));
  }
  return moves;
}

export function getClockScrambleString() {
  let moves: string[]  = [];

  moves = moves.concat(movesForSide(preflipPrefixes));
  moves.push("y2");
  moves = moves.concat(movesForSide(postflipPrefixes));

  for (const pin of pins) {
    if (randomUIntBelow(2) === 0) {
      moves.push(pin);
    }
  }

  return moves.join(" ");
}
