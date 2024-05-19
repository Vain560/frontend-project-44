import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateQuestionAnswer = () => {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const example = `${num1} ${operator} ${num2}`;
  const correctAnswer = `${calculate(num1, operator, num2)}`;
  return [example, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAnswer);
