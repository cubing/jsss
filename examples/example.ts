import { scramble_clock } from "../src/"

console.log(scramble_clock);

async function main() {
  // Tell the scrambler to initialize its tables.
  await scramble_clock.initialize();

  for (var i = 1; i <= 5; i++) {

    // Generate a random scramble
    var randomScramble = await scramble_clock.getRandomScramble();

    // Print it
    document.write("" + i + ". " + randomScramble.scramble_string + "<br>");

    // Create an element and draw the scramble in it.
    var newDiv = document.createElement("div");
    scramble_clock.drawScramble(newDiv, randomScramble.state, 100, 80);
    document.body.appendChild(newDiv);
  }
}

main();
