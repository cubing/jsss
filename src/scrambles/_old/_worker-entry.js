import { expose } from "comlink";
import { api } from "../worker-contents.js";

// `typeof Worker` is "undefined" in Safari, so we use `typeof WorkerNavigator`.
if (typeof WorkerNavigator !== "undefined") {
  (async () => {
    expose(api);
