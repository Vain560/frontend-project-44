// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const questionName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default questionName;
