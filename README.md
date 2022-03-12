# ⛔️ Javascript Solver/Scrambler Suite ⛔️

⛔️ Do not use this project. It consists of unlicensed code with many authors, so it falls into a legal gray area at best.

In addition, it has significant issues, such as:

- Blocking the entire page while generating scrambles: no scrolling, no other calculations at the same time.
- Incorrect and unfiltered scrambles for some events.

# ✅ Use [`cubing.js`](https://js.cubing.net/cubing/scramble/) instead ✅

```html
<script type="module">
  import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";

  const scramble = await randomScrambleForEvent("333");
  scramble.log();
</script>
```
