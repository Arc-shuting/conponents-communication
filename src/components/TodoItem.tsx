import React from "react"
import { TodoProps } from "../components/Todo"

interface ItemProps {
    todo: TodoProps;
    ChangeTodo: (id: number) => void;
}

export const TodoItem = ({todo, ChangeTodo}: ItemProps) => { 
    const changeHandler =() => {
        ChangeTodo(todo.id);
    } 

    return (
        <div>
            <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}/>
            <span>{todo.content}</span>
        </div>
    )
}


