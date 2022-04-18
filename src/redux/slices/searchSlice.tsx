/* eslint-disable no-param-reassign */
// Libraries
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ItemSong } from '../../apiModel/InterfaceSong';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SearchState {
  search: string,
  dataSearch: ItemSong,
}

// Define the initial state using that type
const initialState = {
  search: '',
  dataSearch: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDataSearch: (state, action) => {
      console.log('dataSearchSlice', action.payload);
      state.dataSearch = action.payload;
    },
    setSearch: (state, action) => {
      if (action.payload === '') {
        state.dataSearch = [];
      }
      state.search = action.payload;
    },
  },
});

export const { setDataSearch, setSearch } = searchSlice.actions;

export const search = (state: RootState) => state.search.search;
export const dataSearch = (state: RootState) => state.search.dataSearch;
export default searchSlice.reducer;
