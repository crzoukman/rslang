import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWord } from 'model/IWord';
import { fetchWords, getUserWords } from 'redux/thunks';
import { ITextbookState } from './types';

const initialState: ITextbookState = {
  words: [],
  status: null,
  error: null,
  groupNumber: 0,
  pageNumber: 0,
  mode: 'textbook',
}

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
      state.words[idx].userField = {
        difficulty: 'difficult',
      };
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
      state.words = action.payload;
      state.mode = 'dictionary';
    },
    [getUserWords.rejected.type]: (state, action) => {},
  }
});

export const { makeWordDifficult, changeGroupNumber, changePageNumber } = textBookSlice.actions;

export default textBookSlice.reducer;
