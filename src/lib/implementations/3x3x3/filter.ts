import type {
  KPuzzleDefinition,
  Transformation,
} from "cubing/dist/types/kpuzzle";

export function isEquivalentTranformationIgnoringCENTERS(
  def: KPuzzleDefinition,
  t1: Transformation,
  t2: Transformation
): boolean {
  for (const orbitName in def.orbits) {
    if (
      !EquivalentOrbitTransformations(def, orbitName, t1, t2, {
        ignoreOrientation: orbitName === "CENTERS",
      })
    ) {
      return false;
    }
  }
  return true;
}

export function filter() {}
