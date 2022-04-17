/* eslint-disable no-param-reassign */
// Libraries
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSong: [],
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSelectedSong: (state, action) => {
      if (action.payload === '') {
        state.selectedSong = [];
      }
      state.selectedSong = action.payload;
    },
  },
});

export const { setSelectedSong } = songSlice.actions;

export default songSlice.reducer;
