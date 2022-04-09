import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWord } from 'model/IWord';
import { deleteUserWord, fetchWords, getUserWords } from 'redux/thunks';
import { ITextbookState } from './types';
import { buildUserWord, combineWords } from './utils';

const initialState: ITextbookState = {
  words: [],
  difficultWords: [],
  status: null,
  error: null,
  groupNumber: 0,
  pageNumber: 0,
  mode: 'textbook',
  isWordDeleted: false,
};

const textBookSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    changeGroupNumber(state, action) {
      state.groupNumber = action.payload.groupNumber;
      state.pageNumber = 1;
      state.mode = 'textbook';
      localStorage.setItem('pageNumber-nsv', '1');
    },
    changePageNumber(state, action) {
      state.pageNumber = action.payload.pageNumber;
    },
    makeWordDifficult(state, action) {
      const idx = state.words.findIndex((w) => w.id === action.payload.id);
      state.words[idx].userWord = buildUserWord(
        action.payload.id,
        state.words,
        'difficult'
      );
    },
    makeWordLearned(state, action) {
      const idx = state.words.findIndex((w) => w.id === action.payload.id);
      if (
        state.words[idx].userWord &&
        state.words[idx].userWord?.difficulty === 'difficult'
      ) {
        state.words[idx].userWord = buildUserWord(
          action.payload.id,
          state.words,
          'difficult'
        );
      } else {
        state.words[idx].userWord = buildUserWord(
          action.payload.id,
          state.words,
          'easy'
        );
      }
    },
    showDifficultWordsPage(state) {
      // Отфильтруем только слова с difficulty = 'difficult'
      const onlyDifficultWordsArray = state.difficultWords.filter(
        (w) => w.userWord?.difficulty === 'difficult'
      );
      state.words = onlyDifficultWordsArray;
      state.mode = 'dictionary';
    },
    combineAllWords(state) {
      state.words = combineWords(state.words, state.difficultWords);
    },
  },
  extraReducers: {
    [fetchWords.pending.type]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchWords.fulfilled.type]: (state, action: PayloadAction<IWord[]>) => {
      state.status = 'resolved';
      state.words = action.payload;
      state.error = null;
    },
    [fetchWords.rejected.type]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [getUserWords.pending.type]: (state) => {},
    [getUserWords.fulfilled.type]: (state, action) => {
      state.difficultWords = action.payload;

      if (state.mode === 'textbook') {
        state.words = combineWords(state.words, action.payload);
      }

      if (state.mode === 'dictionary') {
        // Вызываем при удалении слова со страницы сложных слов, т.к. отрисовка завязана на массиве words
        state.words = action.payload.filter(
          (w: IWord) => w.userWord?.difficulty === 'difficult'
        );
      }

      state.isWordDeleted = false;
    },
    [getUserWords.rejected.type]: (state, action) => {},
    [deleteUserWord.pending.type]: (state, action) => {},
    [deleteUserWord.fulfilled.type]: (state) => {
      state.isWordDeleted = true;
    },
    [deleteUserWord.rejected.type]: (state, action) => {},
  },
});

export const {
  changeGroupNumber,
  changePageNumber,
  combineAllWords,
  makeWordDifficult,
  makeWordLearned,
  showDifficultWordsPage,
} = textBookSlice.actions;

export default textBookSlice.reducer;
