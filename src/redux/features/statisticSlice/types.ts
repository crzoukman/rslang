import { IDailyResult, IStatistic } from 'model/IStatistic';
import { IWord } from 'model/IWord';

export interface IStatisticState {
  statisticData: IStatistic | {};
  isLoadingStatistic: boolean;
  statisticLoaded: boolean;
  statisticError: string | null;
}

export type TLearnedWordsIds = {
  [prop: string]: number;
};

export type TDailyResults = {
  [prop: string]: IDailyResult;
};
