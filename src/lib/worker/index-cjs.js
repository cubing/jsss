import { setCodeType } from "./worker-manager";

setCodeType("cjs");

export {
  _preInitializationHintForEvent,
  _randomScrambleForEvent,
  randomScrambleStringForEvent,
} from "./index";
