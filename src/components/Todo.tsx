import React from "react";
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { MyProvider } from "./Provider"



export const Todo = () => {
    
    return (
        <MyProvider>
            <TodoInput />
            <TodoList />
        </MyProvider>
    )
}

