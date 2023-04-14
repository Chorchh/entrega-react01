import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload === "") {
        alert("No hay tarea para agregar");
        return;
      }
      if (state.some((task) => task.name === action.payload)) {
        alert("Ya existe esa tarea");
      } else {
        state.push({ name: action.payload, id: Date.now() });
      }
    },

    deleteTask: (state, action) => {
      alert("Queres eliminar la tarea?");
      return state.filter((task) => task.name !== action.payload.name);
    },

    deleteAllTask: (state, action) => {
      if (window.confirm("Queres eliminar las tareas?")) {
        return (state = []);
      } else {
        return;
      }
    },
  },
});

export default taskSlice.reducer;

export const { addTask, deleteTask, deleteAllTask } = taskSlice.actions;
