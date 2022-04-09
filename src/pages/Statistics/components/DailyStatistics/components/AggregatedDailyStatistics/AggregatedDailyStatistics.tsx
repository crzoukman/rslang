import { FC } from "react";
import { Wrapper } from './AggregatedDailyStatistics.styles';
import AggregatedDailyCard from './components/AggregatedDailyCard';

const AggregatedDailyStatistics: FC = () => {
  const user = localStorage.getItem('authUserData-zm');
  let wordsLearned = 0;
  let rightAnswersPercent = 0;
  if (user) {
    const statKey = `statistic-${(JSON.parse(user)).userId}-zm`;
    const statistics = JSON.parse(localStorage.getItem(statKey)!);
    wordsLearned = statistics ? statistics.allNewWordsCount : 0;
    rightAnswersPercent = statistics ? Math.round(statistics.allGamesRight / (statistics.allGamesRight + statistics.allGamesWrong) * 100) : 0;
  } else if (!user) {
    const statKey = 'statistic-guest-zm';
    const statistics = JSON.parse(localStorage.getItem(statKey)!);
    wordsLearned = statistics ? statistics.allNewWordsCount : 0;
    rightAnswersPercent = statistics ? Math.round(statistics.allGamesRight / (statistics.allGamesRight + statistics.allGamesWrong) * 100) : 0;
  }
  return (
    <Wrapper>
      <AggregatedDailyCard value={wordsLearned.toString()} text={' слов изучено'} />
      <AggregatedDailyCard value={`${rightAnswersPercent.toString()}%`} text={' правильных ответов'} />
    </Wrapper>
  );
};

export default AggregatedDailyStatistics;