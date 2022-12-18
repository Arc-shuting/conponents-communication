import React from "react"
import { isTemplateExpression } from "typescript";
import { Todo, TodoItemProps } from "../components/Todo"

interface ItemProps {
    todo: TodoItemProps;
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


