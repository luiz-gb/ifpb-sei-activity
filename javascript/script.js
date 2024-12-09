// Leia os valores de entrada (em ambiente Node.js)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];
rl.on("line", (line) => {
  inputs.push(parseInt(line.trim()));
  if (inputs.length === 2) {
    const [a, b] = inputs;
    const x = a + b;
    console.log(`X = ${x}`);
    rl.close();
  }
});
