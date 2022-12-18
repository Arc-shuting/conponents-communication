import React, { useState } from "react";
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export interface TodoProps {
    id: number;
    content: string;
    isFinished: boolean;
}

export const Todo = () => {
    const [todoList, setTodoList] = useState<TodoProps[]>([]);

    const addTodo = (todo: TodoProps) => {
        setTodoList([...todoList, todo]);
    }

    const  changeTodo = (id: number) => {
        const newTodoList = todoList.map(item => {
            if(item.id === id) {
                return Object.assign({}, item, {
                    isFinished: !item.isFinished
                });
            }
            return item;
        })
        setTodoList(newTodoList);
    }

    return (
        <>
        <TodoInput addTodo={addTodo} />
        <TodoList todoList={todoList} changeTodo={changeTodo}/>
        </>
    )
}

