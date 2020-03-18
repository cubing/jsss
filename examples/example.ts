import { scramble_222 } from "../src/"

console.log(scramble_222);

async function main() {
  // Tell the scrambler to initialize its tables.
  await scramble_222.initialize();

  for (var i = 1; i <= 5; i++) {

    // Generate a random scramble
    var randomScramble = await scramble_222.getRandomScramble();

    // Print it
    document.write("" + i + ". " + randomScramble.scramble_string + "<br>");

    // Create an element and draw the scramble in it.
    var newDiv = document.createElement("div");
    scramble_222.drawScramble(newDiv, randomScramble.state, 100, 80);
    document.body.appendChild(newDiv);
  }
}

main();
