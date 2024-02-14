const numDice = process.argv[2];

// Function to roll a six-sided die and return the result
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
};
const rollDice = (numDice) => {
  let result = "Rolled " + numDice + " dice: ";
  for (let i = 0; i < numDice; i++) {
    if (i > 0) {
      result += ", ";
    }
    result += rollDie();
  }
  return result;
};

console.log(rollDice(numDice));