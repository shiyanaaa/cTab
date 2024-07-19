import { createSlice } from '@reduxjs/toolkit';


export const setting = createSlice({
  name: 'setting',
  initialState: {
    showApp:true
  },
  reducers: {
    setShowApp(state,action){
      state.showApp=action.payload;
    }
    
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { setShowApp } = setting.actions;

export default setting.reducer;