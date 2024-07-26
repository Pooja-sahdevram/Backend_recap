import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./../slicereducer/themeslice";
export const store = configureStore({
  reducer: themeReducer,
});
