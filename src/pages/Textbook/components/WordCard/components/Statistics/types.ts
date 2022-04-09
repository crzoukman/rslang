export interface IStatisticsProps {
  sprintStat: {
    rightCounter: number;
    wrongCounter: number;
  } | undefined;
  audiochallengeStat: {
    rightCounter: number;
    wrongCounter: number;
  } | undefined;
}