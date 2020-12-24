import {
  x3x3_kpuzzle_default
} from "./chunk.PZKL5GMP.js";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (result) => {
      return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/cubing/puzzles/async/async-pg3d.ts
function asyncGetPuzzleGeometry(puzzleName) {
  return __async(this, null, function* () {
    const puzzleGeometry = yield import("./puzzle-geometry/index.js");
    return puzzleGeometry.getPuzzleGeometryByName(puzzleName, [
      "allmoves",
      "true",
      "orientcenters",
      "true"
    ]);
  });
}
function asyncGetDef(puzzleName) {
  return __async(this, null, function* () {
    return (yield asyncGetPuzzleGeometry(puzzleName)).writekpuzzle(false);
  });
}

// src/cubing/puzzles/implementations/2x2x2/index.ts
var cube2x2x2 = {
  id: "2x2x2",
  fullName: "2x2x2 Cube",
  def: () => __async(void 0, null, function* () {
    return yield import("./puzzles/implementations/2x2x2/2x2x2.kpuzzle.js");
  }),
  svg: () => __async(void 0, null, function* () {
    return (yield import("./puzzles/implementations/2x2x2/2x2x2.kpuzzle.svg.js")).default;
  }),
  pg: () => __async(void 0, null, function* () {
    return asyncGetPuzzleGeometry("2x2x2");
  })
};

// src/cubing/puzzles/implementations/3x3x3/index.ts
var cube3x3x3 = {
  id: "3x3x3",
  fullName: "3x3x3 Cube",
  inventedBy: ["Ern\u0151 Rubik"],
  inventionYear: 1974,
  def: () => __async(void 0, null, function* () {
    return x3x3_kpuzzle_default;
  }),
  svg: () => __async(void 0, null, function* () {
    return (yield import("./puzzles/implementations/3x3x3/3x3x3.kpuzzle.svg.js")).default;
  }),
  llSVG: () => __async(void 0, null, function* () {
    return (yield import("./puzzles/implementations/3x3x3/3x3x3-ll.kpuzzle.svg.js")).default;
  }),
  pg: () => __async(void 0, null, function* () {
    return asyncGetPuzzleGeometry("3x3x3");
  })
};

// src/cubing/puzzles/implementations/5x5x5/index.ts
var cube5x5x5 = {
  id: "5x5x5",
  fullName: "5x5x5",
  def: () => __async(void 0, null, function* () {
    return asyncGetDef("5x5x5");
  }),
  svg: () => __async(void 0, null, function* () {
    throw "Unimplemented!";
  }),
  pg: () => __async(void 0, null, function* () {
    return asyncGetPuzzleGeometry("5x5x5");
  })
};

// src/cubing/puzzles/implementations/clock/index.ts
var clock = {
  id: "clock",
  fullName: "Clock",
  inventedBy: ["Christopher C. Wiggs", "Christopher J. Taylor"],
  inventionYear: 1988,
  def: () => __async(void 0, null, function* () {
    return yield import("./puzzles/implementations/clock/clock.kpuzzle.js");
  }),
  svg: () => __async(void 0, null, function* () {
    return (yield import("./puzzles/implementations/clock/clock.kpuzzle.svg.js")).default;
  })
};

// src/cubing/puzzles/implementations/fto/index.ts
var fto = {
  id: "fto",
  fullName: "Face-Turning Octahedron",
  inventedBy: ["Karl Rohrbach", "David Pitcher"],
  inventionYear: 1983,
  def: () => __async(void 0, null, function* () {
    return asyncGetDef("FTO");
  }),
  svg: () => __async(void 0, null, function* () {
    throw "Unimplemented!";
  }),
  pg: () => __async(void 0, null, function* () {
    return asyncGetPuzzleGeometry("FTO");
  })
};

// src/cubing/puzzles/implementations/megaminx/index.ts
var megaminx = {
  id: "megaminx",
  fullName: "Megaminx",
  inventionYear: 1981,
  def: () => __async(void 0, null, function* () {
    return asyncGetDef("megaminx");
  }),
  svg: () => __async(void 0, null, function* () {
    throw "Unimplemented!";
  }),
  pg: () => __async(void 0, null, function* () {
    return asyncGetPuzzleGeometry("megaminx");
  })
};

// src/cubing/puzzles/implementations/pyraminx/index.ts
var pyraminx = {
  id: "pyraminx",
  fullName: "Pyraminx",
  inventedBy: ["Uwe Meffert"],
  inventionYear: 1970,
  def: () => __async(void 0, null, function* () {
    return yield import("./puzzles/implementations/pyraminx/pyraminx.kpuzzle.js");
  }),
  svg: () => __async(void 0, null, function* () {
    return (yield import("./puzzles/implementations/pyraminx/pyraminx.kpuzzle.svg.js")).default;
  })
};

// src/cubing/puzzles/implementations/skewb/index.ts
var skewb = {
  id: "skewb",
  fullName: "Skewb",
  inventedBy: ["Tony Durham"],
  def: () => __async(void 0, null, function* () {
    return asyncGetDef("skewb");
  }),
  svg: () => __async(void 0, null, function* () {
    throw "Unimplemented!";
  }),
  pg: () => __async(void 0, null, function* () {
    return asyncGetPuzzleGeometry("skewb");
  })
};

// src/cubing/puzzles/implementations/square1/index.ts
var square1 = {
  id: "square1",
  fullName: "Square-1",
  inventedBy: ["Karel Hrsel", "Vojtech Kopsky"],
  inventionYear: 1990,
  def: () => __async(void 0, null, function* () {
    return yield import("./puzzles/implementations/square1/sq1-hyperorbit.kpuzzle.js");
  }),
  svg: () => __async(void 0, null, function* () {
    return (yield import("./puzzles/implementations/square1/sq1-hyperorbit.kpuzzle.svg.js")).default;
  })
};

// src/cubing/puzzles/index.ts
var puzzles = {
  "3x3x3": cube3x3x3,
  "2x2x2": cube2x2x2,
  "5x5x5": cube5x5x5,
  clock,
  megaminx,
  pyraminx,
  skewb,
  square1,
  fto
};

export {
  puzzles,
  __async
};
//# sourceMappingURL=chunk.7SOO73MX.js.map
