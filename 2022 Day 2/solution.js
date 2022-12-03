const fs = require('fs');

const strategy = fs.readFileSync('./input.txt', 'UTF-8');
const rounds = strategy.split(/\r?\n/);

console.log(rounds.length);

const points = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6,
};

let total = 0;

rounds.forEach((round) => {
  const [opp, result] = round.split(' ');

  total += points[result];

  let myChoice = points[opp];

  // If I need to lose
  if (result == 'X') {
    myChoice -= 1;
  }
  // If I need to win
  else if (result == 'Z') {
    myChoice += 1;
  }

  // Wrap values back within limits 1-3
  if (myChoice > 3) {
    myChoice = 1;
  } else if (myChoice < 1) {
    myChoice = 3;
  }

  total += myChoice;
});

console.log(total);
