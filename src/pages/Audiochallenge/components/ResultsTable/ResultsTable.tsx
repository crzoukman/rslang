import { IStatistic } from 'model/IStatistic';
import { IUserWord } from 'model/IUserWord';
import { IWord } from 'model/IWord';
import { FC, useEffect } from 'react';
import { saveDailyResults, setInitialChallengeState } from 'redux/features/challengeSlice';
import { prepareNewStatistic } from 'redux/features/statisticSlice/utils';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { postUserWord, sendStatistic, updateUserWord } from 'redux/thunks';
import { updateUserWordData } from 'shared/utils';
import { AUDIOCHALLENGE } from 'shared/utils/constants';
import ResultsItem from '../ResultsItem';

import { StyledButton, StyledResultsTable, StyledRightAnswers, StyledWrongAnswers } from './ResultsTable.styles';

const ResultsTable: FC = () => {
  const { rightAnswers, wrongAnswers, bestGameStreak } = useTypedSelector(state => state.challenge);
  const rightAnswersPercent = (rightAnswers.length + wrongAnswers.length) > 0
    ? Math.round((rightAnswers.length / (rightAnswers.length + wrongAnswers.length)) * 100) : 0;
  const prevStatistic = useTypedSelector(state => state.statistic.statisticData);
  const allWords = useTypedSelector(state => state.words.allWords);
  const rightWords: Array<IWord> = [];
  const wrongWords: Array<IWord> = [];

  rightAnswers.forEach(el => {
    rightWords.push(allWords.find(item => item._id === el)!);
  });
  wrongAnswers.forEach(el => {
    wrongWords.push(allWords.find(item => item._id === el)!);
  });

  const user = localStorage.getItem('authUserData-zm');
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (user) {
      const userData = JSON.parse(user);
      const userId = userData.userId;
      dispatch(saveDailyResults(userId));
      const newStatistic = prepareNewStatistic(prevStatistic, [...rightAnswers, ...wrongAnswers]) as IStatistic;
      dispatch(sendStatistic({ userData, newStatistic }));
      rightWords.forEach((el) => {
        const newUserWord = updateUserWordData(el, true, AUDIOCHALLENGE) as IUserWord;
        !(el.hasOwnProperty('userWord'))
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));
      });
      wrongWords.forEach((el) => {
        const newUserWord = updateUserWordData(el, false, AUDIOCHALLENGE) as IUserWord;
        !(el.hasOwnProperty('userWord'))
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));
      });
    } else dispatch(saveDailyResults());
  }, [dispatch]);

  const handleNextGameClick = () => {
    dispatch(setInitialChallengeState());
  }

  return (
    <StyledResultsTable>
      <p>{`Вы ответили правильно на ${rightAnswersPercent}%`}</p>
      {bestGameStreak > 0 && <p>{`Лучшая серия ответов - ${bestGameStreak}`}</p>}
      <StyledWrongAnswers>Ошибок - <span>{wrongAnswers.length}</span></StyledWrongAnswers>
      {wrongAnswers.map(el => <ResultsItem key={el} index={el} />)}
      <StyledRightAnswers>Знаю - <span>{rightAnswers.length}</span></StyledRightAnswers>
      {rightAnswers.map(el => <ResultsItem key={el} index={el} />)}
      <StyledButton onClick={(() => handleNextGameClick())}>Сыграть снова</StyledButton>
    </StyledResultsTable>
  )
}

export default ResultsTable;