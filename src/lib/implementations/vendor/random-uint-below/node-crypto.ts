export async function nodeCrypto(): Promise<any> {
  // return {
  //   randomBytes: () => {
  //     console.log("DFSDf");
  //   },
  // };
  return import("crypto");
}
