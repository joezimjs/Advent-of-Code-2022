const fs = require('fs');

const strategy = fs.readFileSync('./input.txt', 'UTF-8');
const bags = strategy.split(/\r?\n/);

let sum = 0;

const priorities = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

/**************************
 *        PART 1          *
 **************************/

for (let bag of bags) {
  const compartmentSize = bag.length / 2;

  // Get each compartment's contents
  const compartment1 = bag.slice(0, compartmentSize);
  const compartment2 = bag.slice(-compartmentSize);

  // Check what exists between both compartments
  for (let letter of compartment1) {
    if (compartment2.includes(letter)) {
      sum += priorities.indexOf(letter) + 1;
      break;
    }
  }
}

console.log('PART 1 ANSWER:', sum);

/**************************
 *        PART 2          *
 **************************/

sum = 0;

const numOfBagGroups = bags.length / 3;

for (let i = 0; i < numOfBagGroups; i++) {
  const elf1 = bags.shift();
  const elf2 = bags.shift();
  const elf3 = bags.shift();

  console.log(elf1, elf2, elf3);

  for (let item of elf1) {
    if (elf2.includes(item) && elf3.includes(item)) {
      sum += priorities.indexOf(item) + 1;
      break;
    }
  }
}

console.log('PART 2 ANSWER:', sum);
