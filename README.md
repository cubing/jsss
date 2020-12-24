# `scrambles`

Puzzle scrambles with the following features:

- Markov random-state (MRSS) using high-quality randomness, matching WCA standards.
- Simple and consistent API.
- Automatic web workers to avoid slowing down web apps.
- Compatibility with browsers and `node` (CommonJS or ESM/modules).

## API

```typescript
// Get a random scramble.
randomScrambleStringForEvent(eventID: string): Promise<Sequence>;

// Optional: send a hint to pre-initialize a the scramble for an event.
//
// This function is only a hint to give the scrambler a head start. (If you don't call this, the scrambler for an event is initialized the first time you ask for a scramble.)
preInitializationHintForEvent(eventID: string): void;
```

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

- `333`
- `444`
