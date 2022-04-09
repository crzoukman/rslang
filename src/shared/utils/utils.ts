import { ILocalStatistic } from 'model/ILocalStatistic';
import { TDifficulty } from 'model/IUserWord';
import { IWord } from 'model/IWord';
import { AUDIOCHALLENGE, SPRINT } from './constants';
import { TGetWordsByGroup } from './types';

export const shuffleArray = <T>(arr: Array<T>): Array<T> => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const getRandomValueFromArray = <T>(arr: Array<T>): T => {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};

export const getWordsByGroup: TGetWordsByGroup = (words, group) => {
  return words.filter((word) => word.group === group);
};

export const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().slice(0, 10);
};

export const getNewWordsFromArray = (
  newDailyWords: Array<string>,
  allLearnedWords: Array<string>
) => {
  let result: Array<string> = [];
  [...newDailyWords].forEach((el) => {
    if (!allLearnedWords.includes(el)) result.push(el);
  });
  return result;
};

const setInitialLocalStatistic = (
  rightAnswersIds: Array<string>,
  wrongAnswersIds: Array<string>,
  game: string,
  currentStreak: number
) => {
  const allWordsList = [...rightAnswersIds, ...wrongAnswersIds];
  const audiochallengeStat =
    game === AUDIOCHALLENGE
      ? {
          bestStreak: currentStreak,
          gameNewWordsCount: allWordsList.length,
          rightAnswers: rightAnswersIds.length,
          wrongAnswers: wrongAnswersIds.length,
          wordList: allWordsList,
        }
      : {
          bestStreak: 0,
          gameNewWordsCount: 0,
          rightAnswers: 0,
          wrongAnswers: 0,
          wordList: [],
        };
  const sprintStat =
    game === SPRINT
      ? {
          bestStreak: currentStreak,
          gameNewWordsCount: allWordsList.length,
          rightAnswers: rightAnswersIds.length,
          wrongAnswers: wrongAnswersIds.length,
          wordList: allWordsList,
        }
      : {
          bestStreak: 0,
          gameNewWordsCount: 0,
          rightAnswers: 0,
          wrongAnswers: 0,
          wordList: [],
        };
  const newData: ILocalStatistic = {
    date: getCurrentDate(),
    allNewWordsCount: rightAnswersIds.length + wrongAnswersIds.length,
    allGamesRight: rightAnswersIds.length,
    allGamesWrong: wrongAnswersIds.length,
    wordList: allWordsList,
    games: {
      audiochallenge: audiochallengeStat,
      sprint: sprintStat,
    },
  };
  return newData;
};

export const updateLocalStatistic = (
  rightAnswersIds: Array<string>,
  wrongAnswersIds: Array<string>,
  game: string,
  currentStreak: number,
  userId?: string
) => {
  const userKey = `statistic-${userId}-zm`;
  const guestKey = `statistic-guest-zm`;
  const userStatistic = userId ? localStorage.getItem(userKey) : undefined;
  const guestStatistic = localStorage.getItem(guestKey);
  const prevStatistic = userStatistic
    ? userStatistic
    : !userId && guestStatistic
    ? guestStatistic
    : null;
  const currentDate = getCurrentDate();
  let newData: ILocalStatistic;
  if (prevStatistic) {
    const prevData = JSON.parse(prevStatistic);
    let dailyGameNewWords: string[] = [];
    if (game === SPRINT) {
      dailyGameNewWords = getNewWordsFromArray(
        [...rightAnswersIds, ...wrongAnswersIds],
        prevData.games.sprint.wordList
      );
    }
    if (game === AUDIOCHALLENGE) {
      dailyGameNewWords = getNewWordsFromArray(
        [...rightAnswersIds, ...wrongAnswersIds],
        prevData.games.audiochallenge.wordList
      );
    }
    const dailyAllNewWords = getNewWordsFromArray(
      [...rightAnswersIds, ...wrongAnswersIds],
      prevData.wordList
    );

    if (currentDate === prevData.date) {
      const audiochallengeStat =
        game === AUDIOCHALLENGE
          ? {
              bestStreak:
                currentStreak > prevData.games.audiochallenge.bestStreak
                  ? currentStreak
                  : prevData.games.audiochallenge.bestStreak,
              gameNewWordsCount:
                prevData.games.audiochallenge.gameNewWordsCount +
                dailyGameNewWords.length,
              rightAnswers:
                prevData.games.audiochallenge.rightAnswers +
                rightAnswersIds.length,
              wrongAnswers:
                prevData.games.audiochallenge.wrongAnswers +
                wrongAnswersIds.length,
              wordList: [
                ...prevData.games.audiochallenge.wordList,
                ...dailyGameNewWords,
              ],
            }
          : { ...prevData.games.audiochallenge };

      const sprintStat =
        game === SPRINT
          ? {
              bestStreak:
                currentStreak > prevData.games.sprint.bestStreak
                  ? currentStreak
                  : prevData.games.sprint.bestStreak,
              gameNewWordsCount:
                prevData.games.sprint.gameNewWordsCount +
                dailyGameNewWords.length,
              rightAnswers:
                prevData.games.sprint.rightAnswers + rightAnswersIds.length,
              wrongAnswers:
                prevData.games.sprint.wrongAnswers + wrongAnswersIds.length,
              wordList: [
                ...prevData.games.sprint.wordList,
                ...dailyGameNewWords,
              ],
            }
          : { ...prevData.games.sprint };
      newData = {
        games: {
          audiochallenge: audiochallengeStat,
          sprint: sprintStat,
        },
        date: currentDate,
        allNewWordsCount: prevData.allNewWordsCount + dailyAllNewWords.length,
        allGamesRight:
          audiochallengeStat.rightAnswers + sprintStat.rightAnswers,
        allGamesWrong:
          audiochallengeStat.wrongAnswers + sprintStat.wrongAnswers,
        wordList: [...prevData.wordList, ...dailyAllNewWords],
      };
      userId
        ? localStorage.setItem(userKey, JSON.stringify(newData))
        : localStorage.setItem(guestKey, JSON.stringify(newData));
    } else if (currentDate !== prevData.date) {
      const audiochallengeStat =
        game === AUDIOCHALLENGE
          ? {
              bestStreak: currentStreak,
              gameNewWordsCount: dailyGameNewWords.length,
              rightAnswers: rightAnswersIds.length,
              wrongAnswers: wrongAnswersIds.length,
              wordList: [
                ...prevData.games.audiochallenge.wordList,
                ...dailyGameNewWords,
              ],
            }
          : {
              ...prevData.games.audiochallenge,
              bestStreak: 0,
              gameWordsCount: 0,
              rightAnswers: 0,
              wrongAnswers: 0,
            };
      const sprintStat =
        game === SPRINT
          ? {
              bestStreak: currentStreak,
              gameNewWordsCount: dailyGameNewWords.length,
              rightAnswers: rightAnswersIds.length,
              wrongAnswers: wrongAnswersIds.length,
              wordList: [
                ...prevData.games.sprint.wordList,
                ...dailyGameNewWords,
              ],
            }
          : {
              ...prevData.games.sprint,
              bestStreak: 0,
              gameWordsCount: 0,
              rightAnswers: 0,
              wrongAnswers: 0,
            };
      newData = {
        games: {
          audiochallenge: audiochallengeStat,
          sprint: sprintStat,
        },
        date: currentDate,
        allNewWordsCount: dailyAllNewWords.length,
        allGamesRight: rightAnswersIds.length,
        allGamesWrong: wrongAnswersIds.length,
        wordList: [...prevData.wordList, ...dailyAllNewWords],
      };
      userId
        ? localStorage.setItem(userKey, JSON.stringify(newData))
        : localStorage.setItem(guestKey, JSON.stringify(newData));
    }
  } else {
    newData = setInitialLocalStatistic(
      rightAnswersIds,
      wrongAnswersIds,
      game,
      currentStreak
    );
    userId
      ? localStorage.setItem(userKey, JSON.stringify(newData))
      : localStorage.setItem(guestKey, JSON.stringify(newData));
  }
};

export const checkIsLearnedWord = (word: IWord) => {
  return (
    word.userWord &&
    word.userWord.optional &&
    word.userWord.optional.counter &&
    ((word.userWord.difficulty === 'easy' &&
      word.userWord.optional.counter > 2) ||
      (word.userWord.difficulty === 'difficult' &&
        word.userWord.optional.counter > 4))
  );
};

export const getNotLearnedWords = (words: Array<IWord>) => {
  return [...words].filter((el) => {
    return !checkIsLearnedWord(el);
  });
};

export const isObjectEmpty = (obj: object) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

export const createNewUserWord = (
  //для создания 'пустого' объекта userWord
  wordId: string,
  isRight: boolean,
  gameName?: string,
  difficulty?: TDifficulty
) => {
  const counter = isRight ? 1 : 0;
  return {
    difficulty: difficulty ? difficulty : 'easy',
    optional: {
      wordId,
      counter,
      sprint: {
        rightCounter: Number(gameName && gameName === SPRINT && isRight) || 0,
        wrongCounter: Number(gameName && gameName === SPRINT && !isRight) || 0,
      },
      audiochallenge: {
        rightCounter:
          Number(gameName && gameName === AUDIOCHALLENGE && isRight) || 0,
        wrongCounter:
          Number(gameName && gameName === AUDIOCHALLENGE && !isRight) || 0,
      },
    },
  };
};

export const updateUserWordData = (
  //создание обновленного объекта UserWord после игры
  word: IWord,
  isRight: boolean,
  gameName: string
) => {
  if (!word.hasOwnProperty('userWord')) {
    const updatedUserWord = createNewUserWord(word._id!, isRight, gameName);
    return updatedUserWord;
  } else if (word.userWord) {
    const { difficulty, optional } = word.userWord!;
    const { wordId } = optional;
    const updatedUserWord = {
      difficulty: difficulty ? difficulty : 'easy',
      optional: {
        wordId,
        counter: isRight ? optional.counter + 1 : 0,
        sprint: {
          rightCounter:
            gameName && gameName === SPRINT && isRight
              ? optional.sprint.rightCounter + 1
              : optional.sprint.rightCounter,
          wrongCounter:
            gameName && gameName === SPRINT && !isRight
              ? optional.sprint.wrongCounter + 1
              : optional.sprint.wrongCounter,
        },
        audiochallenge: {
          rightCounter:
            gameName && gameName === AUDIOCHALLENGE && isRight
              ? optional.audiochallenge.rightCounter + 1
              : optional.audiochallenge.rightCounter,
          wrongCounter:
            gameName && gameName === AUDIOCHALLENGE && !isRight
              ? optional.audiochallenge.wrongCounter + 1
              : optional.audiochallenge.wrongCounter,
        },
      },
    };
    return updatedUserWord;
  }
};

export const getWordsFromTextbookForUser = (
  // для авторизованного пользователя
  allWords: Array<IWord>,
  group: number,
  page: number,
  quantity: number
) => {
  const currentWords = allWords.filter(
    (el) =>
      ((el.group === group && el.page <= page) || el.group < group) &&
      !checkIsLearnedWord(el)
  );
  if (currentWords.length <= quantity) {
    return currentWords;
  } else return currentWords.slice(-quantity);
};

export const getWordsByPageAndGroup = (
  allWords: Array<IWord>,
  group: number,
  page: number
) => {
  return [...allWords].filter((el) => el.group === group && el.page === page);
};
