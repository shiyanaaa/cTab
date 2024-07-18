import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
const store= configureStore({
  reducer: {
    appSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;