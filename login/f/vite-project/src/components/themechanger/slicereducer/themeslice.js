import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: true,
};

const themeslice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toggletheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggletheme } = themeslice.actions;
export default themeslice.reducer;
