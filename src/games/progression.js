import runGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateQuestionAnswer = () => {
  const progressionLength = 10;
  const startNumber = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNumber + step * i);
  }

  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAnswer);