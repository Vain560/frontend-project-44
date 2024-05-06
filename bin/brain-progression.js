#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const progression = (num1, num2) => {
  const FiveNumbers = [];
  for (let i = 0; i < 5; i += 1) {
    FiveNumbers.push(num1);
    num1 += num2;
  }
  return FiveNumbers;
};

const game = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 101);
    const number2 = Math.floor(Math.random() * 11);
    const secretNumber = Math.floor(Math.random() * 5);
    const FiveNumbers = progression(number1, number2);

    let Question = '';
    for (let v = 0; v < 5; v += 1) {
      if (v === secretNumber) {
        Question += '.. ';
      } else {
        Question += `${FiveNumbers[v]} `;
      }
    }

    const rightAnswer = FiveNumbers[secretNumber];

    console.log(`Question: ${Question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (parseInt(rightAnswer) === parseInt(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

game();
