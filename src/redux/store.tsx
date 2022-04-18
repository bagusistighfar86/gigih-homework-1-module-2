import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/tokenSlice';
import searchReducer from './slices/searchSlice';
import songReducer from './slices/songSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    search: searchReducer,
    song: songReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
