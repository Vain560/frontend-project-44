import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const generateQuestionAnswer = () => {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
  const correctAnswer = `${getGCD(number1, number2)}`;
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAnswer);
