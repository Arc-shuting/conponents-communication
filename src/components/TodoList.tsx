import React, { useContext } from "react"
import { MyContext } from "./Provider"
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    const { todoList } =useContext(MyContext);
    const todoDom = todoList.map(
        item => <TodoItem key={item.id} todo={item} />
    )
    return (
        <>
        { todoDom }
        </>
    )
}

export default TodoList