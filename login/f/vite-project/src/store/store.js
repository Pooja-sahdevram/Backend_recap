import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slicereducers/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});
