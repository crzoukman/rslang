import { IWord } from 'model/IWord';

export const combineWords = (clearWords: IWord[], userWords: IWord[]) => {
  return clearWords.map((cw): IWord => {
    const word = userWords.find((uw) => cw.id === uw._id);

    if (word) {
      return {
        ...cw,
        userWord: {
          ...word.userWord,
          difficulty: word!.userWord!.difficulty,
          optional: { ...word!.userWord!.optional, wordId: word._id as string },
        },
      };
    }

    return { ...cw };
  });
};

export const buildUserWord = (id: string, words: IWord[], wordType: 'difficult' | 'easy') => {
  const idx = words.findIndex((w) => w.id === id);

  return {
    ...words[idx].userWord,
    difficulty: wordType,
    optional: {
      ...words[idx].userWord?.optional!,
      counter: wordType === 'difficult' ? 0 : 3,
      wordId: id,
      sprint: words[idx].userWord?.optional.sprint!
        ? { ...words[idx].userWord?.optional.sprint! }
        : { rightCounter: 0, wrongCounter: 0 },
      audiochallenge: words[idx].userWord?.optional.audiochallenge!
        ? { ...words[idx].userWord?.optional.audiochallenge! }
        : { rightCounter: 0, wrongCounter: 0 },
    },
  };
};
