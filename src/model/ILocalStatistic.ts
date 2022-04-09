export interface ILocalStatistic {
  date: string;
  allNewWordsCount: number;
  allGamesRight: number;
  allGamesWrong: number;
  wordList: Array<string>;
  games: {
    sprint: {
      bestStreak: number;
      gameNewWordsCount: number;
      rightAnswers: number;
      wrongAnswers: number;
      wordList: Array<string>;
    };
    audiochallenge: {
      bestStreak: number;
      gameNewWordsCount: number;
      rightAnswers: number;
      wrongAnswers: number;
      wordList: Array<string>;
    };
  };
}
