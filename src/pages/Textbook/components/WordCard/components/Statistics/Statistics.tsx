import { StyledStatistics } from './Statistics.styles';
import Tooltip from '@mui/material/Tooltip';
import StatisticsItem from '../StatisticsItem';
import { FC } from 'react';
import { IStatisticsProps } from './types';

const Statistics: FC<IStatisticsProps> = ({ sprintStat, audiochallengeStat }) => {
  return (
    <Tooltip title='Статистика'>
      <StyledStatistics>
        <StatisticsItem statistics={sprintStat}>Спринт</StatisticsItem>
        <StatisticsItem statistics={audiochallengeStat}>Аудиовызов</StatisticsItem>
      </StyledStatistics>
    </Tooltip>

  );
};

export default Statistics;