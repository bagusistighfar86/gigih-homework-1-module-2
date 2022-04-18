/* eslint-disable no-param-reassign */
// Libraries
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ItemSong } from '../../apiModel/InterfaceSong';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SearchState {
  selectedSong: ItemSong,
}

const initialState = {
  selectedSong: [],
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSelectedSong: (state, action) => {
      if (action.payload === []) {
        state.selectedSong = [];
      }
      state.selectedSong = action.payload;
    },
  },
});

export const { setSelectedSong } = songSlice.actions;
export const selectedSong = (state: RootState) => state.song.selectedSong;
export default songSlice.reducer;
