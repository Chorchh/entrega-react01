import React, { useEffect, useState } from 'react'
import { Container, Form, InputBtnContainer, ItemTask, ToDoBtn, ToDoInput, ToDoTasks, BtnContainer } from './ToDoStyles'




const ToDo = () => {
  const [inputTask, setInputTask] = useState("")
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  const ExistingTask = (setTask) => {
    return setTask.find((task) => task === inputTask)
  }

  const AddTask = (e) => {
    e.preventDefault();
    if(ExistingTask(task)){
      alert("Ya existe esa tarea");
      setInputTask("")
      return;
    } else{
    setInputTask();
    setTask([...task, inputTask]);
    setInputTask("")
  }
  }


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task]);


  const DeleteAllTask = (e) => {
    if (window.confirm("Queres eliminar las tareas?")){
    setTask([])
    } else {
      return;
    }
  }

  return (
    <>
    <Container>
      <h1>Tareas a realizar</h1>
      <Form>
        <InputBtnContainer>
          <ToDoInput placeholder='Agrega la tarea' type="text" value={inputTask} onChange={(e) => setInputTask(e.target.value)}/>
          <BtnContainer>
          <ToDoBtn onClick={AddTask}>Agregar</ToDoBtn>
          <ToDoBtn onClick={DeleteAllTask}>Borrar tareas</ToDoBtn>
          </BtnContainer>
        </InputBtnContainer>
      </Form>

      <ToDoTasks>
      {task.map((tarea) => {
        return <ItemTask key={tarea}>{tarea}</ItemTask>

      })
      }  
      </ToDoTasks>

    </Container>
    </>
  )
}

export default ToDo