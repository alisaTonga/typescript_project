import React from 'react'
import { InputButton, InputForm, InputFormContainer, TaskItem, TaskRemoveItem, TasksContainer, Title, TodoListContainer } from './Styles'

export default function TodoList() {
    return (
        <TodoListContainer>
            <Title> To do list</Title>
            <InputFormContainer>
            <InputForm placeholder='input task'></InputForm>
            <InputButton>add task</InputButton>
            </InputFormContainer>
            <TasksContainer>
                <TaskItem></TaskItem>
                <TaskRemoveItem>✖️</TaskRemoveItem>
            </TasksContainer>
        </TodoListContainer>
    )
}
