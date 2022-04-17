/* eslint-disable no-param-reassign */
// Libraries
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  dataSearch: {},
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
        state.dataSearch = {};
      }
      state.search = action.payload;
    },
  },
});

export const { setDataSearch, setSearch } = searchSlice.actions;

export default searchSlice.reducer;
