import { IWord } from 'model/IWord';
import { getRandomValueFromArray, shuffleArray } from 'shared/utils';
import { NUM_OF_ANSWER_OPTIONS } from './challengeSlice';

export const getAnswers = (
  arr: Array<IWord>,
  currentAnswer: string
): Array<string> => {
  let answers = [currentAnswer];
  while (answers.length < NUM_OF_ANSWER_OPTIONS) {
    let randomAnswer = getRandomValueFromArray(
      [...arr].map((el) => el.wordTranslate)
    );
    if (!answers.includes(randomAnswer)) {
      answers.push(randomAnswer);
    }
  }
  return shuffleArray(answers);
};
