import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "model/IWord";
import { fetchWords } from "redux/thunks";
import { ITextbookState } from "./types";

const initialState: ITextbookState = {
  words: [],
  status: null,
  error: null,
}

const textBookSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
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
  }
});

export default textBookSlice.reducer;
