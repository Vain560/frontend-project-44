#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const progression = (num1, num2) => {
  const FiveNumbers = [];
  let currentNum = num1;
  for (let i = 0; i < 5; i += 1) {
    FiveNumbers.push(currentNum);
    currentNum += num2;
  }
  return FiveNumbers;
};

const generateRandomNumber = (max) => Math.floor(Math.random() * max);

const game = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = generateRandomNumber(101);
    const number2 = generateRandomNumber(11);
    const secretNumber = generateRandomNumber(5);
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
    if (parseInt(rightAnswer, 10) === parseInt(userAnswer, 10)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

game();
