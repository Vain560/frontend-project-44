import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAnswer = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAnswer);
