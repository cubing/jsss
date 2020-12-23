import { KPuzzleDefinition } from "../../src/kpuzzle";
import { StickerDat } from "../../src/puzzle-geometry";
import { PuzzleName } from "../../src/puzzle-geometry/Puzzles";
declare class DisplayableKPuzzle {
    private kpuzzleName;
    type: "kpuzzle";
    constructor(kpuzzleName: string);
    displayName(): string;
    puzzleName(): string;
    kpuzzleDefinition(): KPuzzleDefinition;
}
declare class DisplayablePG3D {
    private displayNameStr;
    private name;
    private desc;
    polarVantages: boolean;
    type: "pg3d";
    constructor(displayNameStr: string, name: PuzzleName, desc: string, polarVantages: boolean);
    displayName(): string;
    puzzleName(): string;
    kpuzzleDefinition(): KPuzzleDefinition;
    stickerDat(): StickerDat;
}
export declare type DisplayablePuzzle = DisplayableKPuzzle | DisplayablePG3D;
declare const puzzles: {
    [s: string]: DisplayablePuzzle;
};
export { puzzles };
//# sourceMappingURL=puzzles.d.ts.map