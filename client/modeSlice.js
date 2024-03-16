import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleMode: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export const selectMode = state => state.mode.darkMode;

export default modeSlice.reducer;
