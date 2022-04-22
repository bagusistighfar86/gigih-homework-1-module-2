// Libraries
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface tokenState {
  accessToken: string,
}

// Define the initial state using that type
const initialState: tokenState = {
  accessToken: localStorage.getItem('access_token') ?? '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken: (state: tokenState, action) => {
      const { accessToken } = action.payload;
      localStorage.setItem('access_token', accessToken);
      // eslint-disable-next-line no-param-reassign
      state.accessToken = accessToken;
    },
    setRemoveAccessToken: (state: tokenState) => {
      // eslint-disable-next-line no-param-reassign
      state.accessToken = '';
      localStorage.removeItem('access_token');
      localStorage.removeItem('userData');
      localStorage.removeItem('selectedSong');
    },
  },
});

export const { setAccessToken, setRemoveAccessToken } = tokenSlice.actions;
export const accessToken = (state: RootState) => state.token.accessToken;

export default tokenSlice.reducer;
