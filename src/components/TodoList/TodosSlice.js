import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Learn Js",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn React",
      completed: true,
      priority: "Low",
    },
    {
      id: 3,
      name: "Learn Redux",
      completed: false,
      priority: "High",
    },
  ],
  reducers : {
    addTodo : (state, action) => {
      state.push(action.payload);
    },
    //action creators
    toggleStatusTodo : (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    }
  }
});
