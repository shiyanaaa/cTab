import { createSlice } from '@reduxjs/toolkit';
import { MenuType } from '../tools/types';

export const setting = createSlice({
  name: 'setting',
  initialState: {
    position:{
      left:0,
      top:0,
      show:false,
      index:-1
    },
    content:[] as MenuType[]
  },
  reducers: {
    setPosition(state,action){
      state.position=action.payload;
    },
    setContent(state,action){
      state.content=action.payload;
    },
    close(state){
      state.position.show=false;
    }
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { setPosition,setContent,close } = setting.actions;

export default setting.reducer;