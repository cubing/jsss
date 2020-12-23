import { BlockMove, Sequence } from "../alg";
import { KPuzzleDefinition } from "../kpuzzle";
import { AnimModel } from "./anim";
import { Cursor } from "./cursor";
import { Puzzle } from "./puzzle";
import { Player, PlayerConfig } from "./widget";
export declare class TwistyParams {
    alg?: Sequence;
    puzzle?: KPuzzleDefinition;
    playerConfig?: PlayerConfig;
}
export declare class Twisty {
    #private;
    element: Element;
    private alg;
    private puzzleDef;
    private coalesceModFunc;
    constructor(element: Element, config?: TwistyParams);
    setCoalesceModFunc(f: (mv: BlockMove) => number): void;
    experimentalSetAlg(alg: Sequence, allowAnimation?: boolean): void;
    experimentalSetAlgAnimateBlockMove(alg: Sequence, move: BlockMove): void;
    experimentalAddMove(move: BlockMove): void;
    experimentalGetAnim(): AnimModel;
    experimentalGetPlayer(): Player;
    experimentalGetCursor(): Cursor<Puzzle>;
}
//# sourceMappingURL=twisty.d.ts.map