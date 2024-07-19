import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import setting from './setting';
const store= configureStore({
  reducer: {
    appSlice,
    setting
  },
});
export type RootState = ReturnType<typeof store.getState>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;