/** @ts-ignore */
import { newWorkerInstance } from "./_worker-wrapper.js";
import { algToString, Sequence } from "cubing/alg";

// TODO
interface WorkerAPI {
  initialize: (eventID: string) => Promise<void>;
  randomScramble: (eventID: string) => Promise<Sequence>;
}

// TODO
let codeType = "esm";
let cachedWorkerInstance: Promise<WorkerAPI> | null = null;

export function setCodeType(newCodeType: "esm" | "cjs") {
  if (cachedWorkerInstance) {
    throw new Error(
      "Worker has already been constructed. Cannot set code type"
    );
  }
  codeType = newCodeType;
}

function getCachedWorkerInstance(): Promise<WorkerAPI> {
  // We'd use `??=`, but that's not compatible with some older node versions.
  return (cachedWorkerInstance =
    cachedWorkerInstance ?? (newWorkerInstance(codeType) as any));
}

// Pre-initialize the scrambler for the given event. (Otherwise, an event is
// initialized the first time you ask for a scramble for that event.)
//
// Note that initialization is not always slow. For 4x4x4, pre-initialization
// saves very little time (with the current implementation).
//
// Some typical numbers for a fast computer:
// - 3x3x3 initialization: 200ms
// - Each 3x3x3 scramble: 50ms
// - 4x4x4 initialization: 25ms
// - Each 4x4x4 scramble: 3000ms (3 seconds)
//
// This function intentionally uses a callback instead of a Promise, despite
// working the same way.
//
// This is because callers are encouraged to call this function ahead of time
// and *not* wait the result. It is safe to immediately call for a scramble
// any time after starting pre-initialization, or to call for them without
// pre-initializing. Pre-initializing essentially gives the scramble worker a
// head start in case a scramble doesn't get requested immediately.
//
// Note that events cannot be pre-initialized in parallel. Attempting to
// pre-initialize multiple events will initialize them consecutively. Scrambles
// for a given event cannot be computed while another event is being initialized.
// TODO: Should we shard events across workers to minimize the chance of this?
//
// The optional callback is for the (discouraged) use case
// where the caller wants to know when the scrambler is initialized.
// TODO: Is initialization cheap enough to remove this method?
export function startPreInitializationForEvent(
  eventID: string,
  callback?: () => void
): void {
  (async () => {
    await (await getCachedWorkerInstance()).initialize(eventID);
    if (callback) {
      callback();
    }
  })();
}

export async function experimentalRandomScrambleForEvent(
  eventID: string
): Promise<Sequence> {
  return (await getCachedWorkerInstance()).randomScramble(eventID);
}

export async function randomScrambleStringForEvent(
  eventID: string
): Promise<string> {
  return algToString(await experimentalRandomScrambleForEvent(eventID));
}
