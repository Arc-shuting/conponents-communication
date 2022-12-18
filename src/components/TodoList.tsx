import { TodoItem } from "../components/TodoItem"
import { TodoProps } from "../components/Todo"


interface ListProps {
    todoList: TodoProps[];
    changeTodo: (id: number) => void
}

const TodoList = ({ todoList, changeTodo }: ListProps) => {
    const todoDom = todoList.map(
        item => <TodoItem key={item.id} todo={item} ChangeTodo={changeTodo}/>
    )
    return (
        <>
        { todoDom }
        </>
    )
}

export default TodoList