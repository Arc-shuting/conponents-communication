import React, { useState,useContext } from "react";
import { MyContext } from "./Provider";

export const TodoInput = () => {
    const { addTodo } = useContext(MyContext);
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


