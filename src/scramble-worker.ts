import { expose } from "comlink";
import { Sequence } from "cubing/alg";
import { random333Scramble, random333OrientedScramble } from "./3x3x3";
import { random444Scramble } from "./4x4x4";

export interface ScrambleWorker {
  randomScramble(eventID: string): Promise<Sequence>;
}

export interface ScrambleWorkerConstructor {
  new (): ScrambleWorker;
}

// class ScrambleWorkerImpl implements ScrambleWorker {

// }

// expose(ScrambleWorkerImpl);

// In worker-thread
import { parentPort } from "worker_threads";
import { MessageChannel } from "worker_threads";

import { transferHandlers } from "comlink";
import nodeEndpoint from "./vendor/comlink/dist/esm/node-adapter";

// Override comlink's default proxy handler to use Node endpoints
transferHandlers.set("proxy", {
  // @ts-ignore
  canHandle: (obj) => obj && obj[Comlink.proxyMarker],
  // @ts-ignore
  serialize: (obj) => {
    const { port1, port2 } = new MessageChannel();
    expose(obj, nodeEndpoint(port1));
    return [port2, [port2]];
  },
  deserialize: (port) => {
    port = nodeEndpoint(port);
    // @ts-ignore
    port.start();
    // @ts-ignore
    return Comlink.wrap(port);
  },
});

const api = {
  randomScramble: async (eventID: string): Promise<Sequence> => {
    switch (eventID) {
      case "333":
      case "333oh":
      case "333ft":
        return random333Scramble();
      case "333bf":
        return random333OrientedScramble();
      case "444":
        return random444Scramble();
      default:
        throw new Error(`unsupported event: ${eventID}`);
    }
  },
};

.expose(api, nodeEndpoint(parentPort));
