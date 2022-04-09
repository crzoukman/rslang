import { ArrowRight } from '@mui/icons-material';
import { FC } from "react";
import { AUDIOCHALLENGE } from 'shared/utils/constants';
import { StyledGameStatisticsCard } from './GameStatisticsCard.styles';
import { IGameStatisticsCardProps } from './types';

const GameStatisticsCard: FC<IGameStatisticsCardProps> = ({ game, newWordsCount, rightAnswersCount, wrongAnswersCount, bestStreak }) => {
  const gameName = game === AUDIOCHALLENGE ? 'Аудиовызов' : 'Спринт';
  const rightWordsPercent = (rightAnswersCount + wrongAnswersCount) > 0 ? Math.round((rightAnswersCount /
    (rightAnswersCount + wrongAnswersCount)) * 100) : 0;
  return (
    <StyledGameStatisticsCard>
      <h3>{gameName}</h3>
      <p><ArrowRight /> <span>{`Изучено ${newWordsCount} слов`}</span></p>
      <p><ArrowRight /> <span>{`Правильных ответов: ${rightWordsPercent}%`}</span></p>
      <p><ArrowRight /> <span>{`Самая длинная серия правильных ответов: ${bestStreak}`}</span></p>
    </StyledGameStatisticsCard>
  );
};

export default GameStatisticsCard;