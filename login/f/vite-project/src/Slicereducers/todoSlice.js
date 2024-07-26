import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, msg: "message" },
    { id: 2, msg: "message" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const todo = {
        id: nanoid,
        msg: actions.payload,
      };
      state.todos.push(todo);
    },
    removetodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    updatechnage: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, msg: action.payload.data };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removetodo, updatechnage } = todoSlice.actions;
export default todoSlice.reducer;
