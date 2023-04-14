import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #131415;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: orange;
`

export const Form = styled.form`
    padding: 20px;
`

export const InputBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const ToDoInput = styled.input`
    width: 200px;
    height: 30px;
    display: flex;
    border-radius: 10px;
    font-family: sans-serif;
    padding: 10px;
`

export const ToDoBtn = styled.button`
    width: 120px;
    height: 40px;
    background: orange;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
`

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const ToDoTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    padding: 30px;
`

export const ItemTask = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    border: 2px solid orange;
    padding: 10px 30px;
    border-radius: 10px;
`