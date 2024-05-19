import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (gameDescription, generateQuestionAnswer) => {
  const userName = greetUser();
  console.log(gameDescription);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
