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
        localStorage.removeItem('selectedSong');
      }
      state.selectedSong = action.payload;
      localStorage.setItem('selectedSong', JSON.stringify(state.selectedSong));
    },
    getSelectedSong: (state) => {
      const prevSelectedSong = localStorage.getItem('selectedSong');
      if (prevSelectedSong) {
        const prevSelected = prevSelectedSong !== null && JSON.parse(prevSelectedSong);
        state.selectedSong = prevSelected;
      }
    },
  },
});

export const { setSelectedSong, getSelectedSong } = songSlice.actions;
export const selectedSong = (state: RootState) => state.song.selectedSong;
export default songSlice.reducer;
