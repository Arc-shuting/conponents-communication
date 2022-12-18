import React, { useState } from "react";
import { TodoItemProps } from "./Todo";

interface InputProps {
    addTodo: (item: TodoItemProps) => void;
}

export const TodoInput = ({addTodo}: InputProps) => {
    const [text, setText] = useState("");

    const addItemHandler = () => {
        addTodo({
            id: new Date().getTime(),
            content: text,
            isFinished: false,
        });
        
        setText("");
    }

    const changeTextHandler = (e: React.ChangeEvent) => {
        setText((e.target as HTMLInputElement).value);
    }
    return (
        <>
            <input 
            type="text" 
            placeholder="please input you item!" 
            onChange={changeTextHandler} 
            value={text}
            />
            <button onClick= {addItemHandler}> add </button>
        </>
    )
}

export default TodoInput;


