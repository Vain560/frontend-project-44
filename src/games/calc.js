import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateQuestionAnswer = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let question;
  let correctAnswer;

  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = (num1 + num2).toString();
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = (num1 - num2).toString();
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = (num1 * num2).toString();
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  return [question, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAnswer);
