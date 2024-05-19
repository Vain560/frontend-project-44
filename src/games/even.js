import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswer = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAnswer);
