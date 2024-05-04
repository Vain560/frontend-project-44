#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const getGCD = (num1, num2) => {
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
};

const game = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 101);
    const number2 = Math.floor(Math.random() * 101);
    const correctAnswer = getGCD(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

game();
