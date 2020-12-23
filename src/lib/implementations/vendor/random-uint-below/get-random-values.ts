export async function getRandomValuesAsync(arr: Uint32Array): Promise<void> {
  const hasWebCrypto =
    typeof crypto !== "undefined" &&
    typeof crypto.getRandomValues !== "undefined";

  if (hasWebCrypto) {
    crypto.getRandomValues(arr);
  } else {
    await (async () => {
      if (!(arr instanceof Uint32Array)) {
        throw new Error(
          "The getRandomValues() shim only takes unsigned 32-bit int arrays"
        );
      }
      // @ts-ignore
      var bytes = (await import("crypto")).randomBytes(arr.length * 4);
      var uint32_list = [];
      for (var i = 0; i < arr.length; i++) {
        uint32_list.push(
          (bytes[i * 4 + 0] << 24) +
            (bytes[i * 4 + 1] << 16) +
            (bytes[i * 4 + 2] << 8) +
            (bytes[i * 4 + 3] << 0)
        );
      }
      arr.set(uint32_list);
    })();
  }
}
