import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/tokenSlice';
import searchReducer from './slices/searchSlice';
import songReducer from './slices/songSlice';

export default configureStore({
  reducer: {
    token: tokenReducer,
    search: searchReducer,
    song: songReducer,
  },
});
