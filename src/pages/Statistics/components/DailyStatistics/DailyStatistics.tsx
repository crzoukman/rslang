import { Alert } from '@mui/material';
import { FC } from "react";
import AggregatedDailyStatistics from './components/AggregatedDailyStatistics';
import MiniGamesDailyStatistics from './components/MiniGamesDailyStatistics';
import { StyledAlert, StyledDailyStatistics } from './DailyStatistics.styles';

const DailyStatistics: FC = () => {
  const user = localStorage.getItem('authUserData-zm');
  let statKey: string = '';
  if (user) {
    statKey = `statistic-${(JSON.parse(user)).userId}-zm`;
  } else if (!user) {
    statKey = 'statistic-guest-zm';
  }
  const statistics = JSON.parse(localStorage.getItem(statKey)!);
  const isNoData = !Boolean(statistics);
  return (
    <StyledDailyStatistics>
      <h2>Статистика за сегодня</h2>
      {isNoData && <StyledAlert severity="info">Недостаточно данных. Сыграйте в мини-игру!</StyledAlert>}
      <AggregatedDailyStatistics />
      {!isNoData && <MiniGamesDailyStatistics statistics={statistics} />}
    </StyledDailyStatistics>
  );
};

export default DailyStatistics;