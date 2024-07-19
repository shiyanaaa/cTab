import { createSlice } from '@reduxjs/toolkit';
import type { pageType } from '../tools/app';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    appList : [] as pageType[],
    currentId:0,
    currentIndex:0
  },
  reducers: {
    setAppList: (state,action) => {
      state.appList=action.payload as pageType[];
    },
    setCurrentId: (state,action) => {
      state.currentId=action.payload as number;
      state.currentIndex=state.appList.findIndex(item=>item.id===state.currentId)
    },
    setCurrentIdByIndex:(state,action) => {
      state.currentIndex=action.payload;
      state.currentId=state.appList[action.payload].id;
    },
    
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { setAppList,setCurrentId,setCurrentIdByIndex } = appSlice.actions;

export default appSlice.reducer;