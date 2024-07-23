import { createSlice } from '@reduxjs/toolkit';
import type { pageType } from '../tools/app';
import { setData } from '../tools/tools';
export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    appList: [] as pageType[],
    currentId: 0,
    currentIndex: 0
  },
  reducers: {
    setAppList: (state, action) => {
      state.appList = action.payload as pageType[];
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload as number;
      state.currentIndex = state.appList.findIndex(item => item.id === state.currentId)
    },
    setCurrentIdByIndex: (state, action) => {
      state.currentIndex = action.payload;
      state.currentId = state.appList[action.payload].id;
    },
    changeItemSize(state, action) {
      state.appList[state.currentIndex].list[action.payload.index].height = action.payload.height;
      state.appList[state.currentIndex].list[action.payload.index].width = action.payload.width;
      setData(state.appList)
    },
    updateAppItem(state, action) {
      console.log(action.payload)
      state.appList[state.currentIndex].list[action.payload.index] = action.payload.data;
      setData(state.appList)
    },
    addAppItem(state, action) {
      state.appList[state.currentIndex].list.push({
        ...action.payload.data,
        width: 1,
        height: 1,
        type:"link"
      });
      setData(state.appList)
    },
    deleteAppItem(state, action) {
      state.appList[state.currentIndex].list.splice(action.payload, 1);
      setData(state.appList)
    }

  },
});

// 为每个 case reducer 函数生成 Action creators
export const { setAppList, setCurrentId, setCurrentIdByIndex, changeItemSize, updateAppItem, deleteAppItem, addAppItem } = appSlice.actions;

export default appSlice.reducer;