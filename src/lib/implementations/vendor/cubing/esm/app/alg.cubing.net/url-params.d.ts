import { Sequence } from "../../src/alg";
interface URLParamValues {
    alg: Sequence;
    puzzle: string;
    "debug-js": boolean;
}
declare const paramDefaults: URLParamValues;
export declare type ParamName = keyof typeof paramDefaults;
export declare function getURLParam<K extends ParamName>(paramName: K): URLParamValues[K];
export declare function setURLParams(newParams: Partial<URLParamValues>): void;
export {};
//# sourceMappingURL=url-params.d.ts.map