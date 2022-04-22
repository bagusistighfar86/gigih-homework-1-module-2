/* eslint-disable no-param-reassign */
// Libraries
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ItemSong } from '../../typeInterface/InterfaceSong';
import { RootObject } from '../../typeInterface/InterfaceLikedSong';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SearchState {
  selectedSong: ItemSong[],
  likedSong: RootObject[],
}

const initialState: SearchState = {
  selectedSong: [],
  likedSong: [],
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
    setLikedSong: (state, action) => {
      if (action.payload === []) {
        localStorage.removeItem('likedSong');
        state.likedSong = [];
      }
      state.likedSong = action.payload;
      localStorage.setItem('likedSong', JSON.stringify(state.likedSong));
    },
    getLikedSong: (state) => {
      const prevLikedSong = localStorage.getItem('likedSong');
      if (prevLikedSong) {
        const prevSelected = prevLikedSong !== null && JSON.parse(prevLikedSong);
        state.likedSong = prevSelected;
      }
    },
  },
});

export const {
  setSelectedSong, setLikedSong, getLikedSong,
} = songSlice.actions;
export const selectedSong = (state: RootState) => state.song.selectedSong;
export const likedSong = (state: RootState) => state.song.likedSong;
export default songSlice.reducer;
