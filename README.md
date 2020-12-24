# `scrambles`

Puzzle scrambles with the following features:

- Markov random-state (MRSS) using high-quality randomness, matching WCA standards.
- Simple and consistent API.
- Automatic web workers to avoid slowing down web apps.
- Compatibility with browsers and `node` (CommonJS or ESM/modules).

## Usage

Use as a Promise:

```js
// Using `then`
randomScrambleStringForEvent("333").then((scrambleString) => {
  // Use the result.
});

// Using `await` (in an `async` context)
const scrambleString = await randomScrambleStringForEvent("333");
```

## Full Example

```js
// index.html
<script src="index.js" type="module" defer></script>

<select id="eventID">
  <option value="333" selected>3x3x3</option>
  <option value="444">4x4x4</option>
</select>
<button id="new-scramble">New scramble</button><br>

<div id="scramble-string"></div>

```

```js
// index.js
import { randomScrambleStringForEvent } from "scrambles";

const eventSelect = document.querySelector("#eventID");
const scrambleStringElem = document.querySelector("#scramble-string");

async function newScramble() {
  scrambleStringElem.textContent += " ⏳";
  const scrambleString = await randomScrambleStringForEvent(eventSelect.value);
  scrambleStringElem.textContent = scrambleString;
}

document.querySelector("#eventID").addEventListener("change", newScramble);
document.querySelector("#new-scramble").addEventListener("click", newScramble);
newScramble(); // Initial scramble
```

## Currently supported events

| Event | Supported | Scramble Filtering |
| ----- | --------- | ------------------ |
| `333` | ✅        | ✅                 |
| `444` | ✅        | 🚧                 |

## Acknowledgments

This projects includes code from

- [`min2phase`](https://github.com/cs0x7f/min2phase) by Chen Shuang (GPL licensed)
- [`cstimer`](https://github.com/cs0x7f/cstimer) by Chen Shuang (GPL licensed)
