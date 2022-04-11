// Libraries
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: localStorage.getItem('access_token') ?? '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      localStorage.setItem('access_token', accessToken);
      // eslint-disable-next-line no-param-reassign
      state.accessToken = accessToken;
    },
    setRemoveAccessToken: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.accessToken = '';
      localStorage.removeItem('access_token');
    },
  },
});

export const { setAccessToken, setRemoveAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;
