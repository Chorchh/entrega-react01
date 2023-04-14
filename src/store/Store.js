import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../features/task/TaskSlice";

const store = configureStore({
  reducer: {
    task: TaskSlice,
  },
});

export default store;
