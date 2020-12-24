import {
  cubeKeyMapping
} from "./chunk.NSRFVJAK.js";

// src/cubing/alg/keyboard.ts
function keyToMove(e) {
  if (e.altKey || e.ctrlKey) {
    return null;
  }
  return cubeKeyMapping[e.keyCode] || null;
}

export {
  keyToMove
};
//# sourceMappingURL=chunk.HXI7FYLG.js.map
