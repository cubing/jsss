import { KPuzzleDefinition, Transformation } from "./definition_types";
import { KPuzzle } from "./kpuzzle";
export declare class SVG {
    kPuzzleDefinition: KPuzzleDefinition;
    element: HTMLElement;
    gradientDefs: SVGDefsElement;
    private originalColors;
    private gradients;
    private svgID;
    constructor(kPuzzleDefinition: KPuzzleDefinition);
    drawKPuzzle(kpuzzle: KPuzzle, nextState?: Transformation, fraction?: number): void;
    draw(definition: KPuzzleDefinition, state: Transformation, nextState?: Transformation, fraction?: number): void;
    private newGradient;
    private elementID;
    private elementByID;
}
//# sourceMappingURL=svg.d.ts.map