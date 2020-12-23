import { randomUIntBelowAsync } from "./random-int";

// Inspired by https://reference.wolfram.com/language/ref/RandomChoice.html
// This library itself should be kept small, but a wrapper library may want to implement selecting multiple element without replacement as with replacement:
// https://reference.wolfram.com/language/ref/RandomSample.html
export async function randomChoiceAsync<T>(arr: Array<T>): Promise<T> {
  return arr[await randomUIntBelowAsync(arr.length)];
}
