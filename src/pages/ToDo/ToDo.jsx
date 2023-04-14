import React, { useEffect, useState } from 'react'
import { Container, Form, InputBtnContainer, ItemTask, ToDoBtn, ToDoInput, ToDoTasks, BtnContainer } from './ToDoStyles'
import {FaTrashAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteAllTask, deleteTask } from '../../features/task/TaskSlice'


const ToDo = () => {
  const [inputTask, setInputTask] = useState("")

  const iconStyle = {
    cursor: "pointer"
  }

  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const renderTask = () => {
    
    return task.map((tarea) => {
      console.log(tarea)
      return (<ItemTask key={tarea.id}>{tarea.name} <FaTrashAlt style={iconStyle} onClick={() => dispatch(deleteTask(tarea))}/></ItemTask>)
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputTask));
    setInputTask("");
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task]);

  return (
    <>
    <Container>
      <h1>Tareas a realizar</h1>
      <Form onSubmit={handleSubmit}>
        <InputBtnContainer>
          <ToDoInput placeholder='Agrega la tarea' type="text" value={inputTask} onChange={(e) => setInputTask(e.target.value)}/>

          <ToDoTasks>
      {renderTask()}  
      </ToDoTasks>

          <BtnContainer>
          <ToDoBtn>Agregar</ToDoBtn>
          <ToDoBtn onClick={() => dispatch(deleteAllTask(task))}>Borrar tareas</ToDoBtn>
          </BtnContainer>
        </InputBtnContainer>
      </Form>
    </Container>
    </>
  )
}

export default ToDo