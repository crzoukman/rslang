import { FC, useEffect } from 'react';
import { AnswerProps } from './types';
import correctSound from 'assets/sounds/correct_answer.wav';
import wrongSound from 'assets/sounds/wrong_answer.wav';

import { StyledAnswer } from './Answer.styles';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { selectAnswer } from 'redux/features/challengeSlice';

const Answer: FC<AnswerProps> = ({ value, answerText, currentAnswer, correctAnswer, onSelectAnswer }) => {
  const isCorrect = Boolean(currentAnswer && answerText === correctAnswer);
  const isWrong = Boolean(currentAnswer === answerText && currentAnswer !== correctAnswer);
  const isButtonsBlocked = useTypedSelector(state => state.challenge.isButtonsBlocked);
  const dispatch = useTypedDispatch();

  const correctAudio = new Audio(correctSound);
  const wrongAudio = new Audio(wrongSound);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (Number(e.key) === value && !isButtonsBlocked) {
        if (correctAnswer === answerText) correctAudio.play();
        if (correctAnswer != answerText) wrongAudio.play();
        dispatch(selectAnswer(answerText));
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [answerText, isButtonsBlocked]);

  return (
    <StyledAnswer
      isCorrectAnswer={isCorrect}
      isWrongAnswer={isWrong}
      isDisabled={isButtonsBlocked}
      onClick={() => onSelectAnswer(answerText)}
    >
      {`${value}. ${answerText}`}
    </StyledAnswer>
  );
}

export default Answer;