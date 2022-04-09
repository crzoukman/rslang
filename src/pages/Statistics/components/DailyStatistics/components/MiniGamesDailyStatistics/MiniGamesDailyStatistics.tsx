import { FC } from "react";
import { AUDIOCHALLENGE, SPRINT } from 'shared/utils/constants';
import GameStatisticsCard from './components/GameStatisticsCard';
import { Wrapper } from './MiniGamesDailyStatistics.styles';
import { IMiniGamesStatisticsProps } from './types';

const MiniGamesDailyStatistics: FC<IMiniGamesStatisticsProps> = ({ statistics }) => {
  const { games: { audiochallenge, sprint } } = statistics;
  return (
    <Wrapper>
      <GameStatisticsCard game={SPRINT} key={SPRINT}
        newWordsCount={sprint.gameNewWordsCount} rightAnswersCount={sprint.rightAnswers} wrongAnswersCount={sprint.wrongAnswers} bestStreak={sprint.bestStreak} />
      <GameStatisticsCard game={AUDIOCHALLENGE} key={AUDIOCHALLENGE}
        newWordsCount={audiochallenge.gameNewWordsCount} rightAnswersCount={audiochallenge.rightAnswers} wrongAnswersCount={audiochallenge.wrongAnswers} bestStreak={audiochallenge.bestStreak} />
    </Wrapper>
  );
};

export default MiniGamesDailyStatistics;