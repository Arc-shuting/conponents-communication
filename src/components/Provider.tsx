import React, { createContext, useState } from "react";

export const MyContext = createContext({} as ContextProps);

export interface TodoProps {
    id: number;
    content: string;
    isFinished: boolean;
}

export interface ContextProps {
    todoList: TodoProps[];
    addTodo: (todo: TodoProps) => void;
    changeTodo: (id: number) => void;
}

export const MyProvider = (props:React.PropsWithChildren) => {
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
        <MyContext.Provider value={{
            todoList,
            changeTodo,
            addTodo
            }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider;