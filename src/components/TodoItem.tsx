import React, {useContext} from "react"
import { TodoProps, MyContext } from "./Provider";

interface ItemProps {
    todo: TodoProps;
}

export const TodoItem = ({todo}: ItemProps) => { 
    const { changeTodo } = useContext(MyContext);
    const changeHandler =() => {
        changeTodo(todo.id);
    } 

    return (
        <div>
            <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}/>
            <span>{todo.content}</span>
        </div>
    )
}


