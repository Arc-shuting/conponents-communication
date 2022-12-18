import { TodoItem } from "../TodoItem"
import { TodoItemProps } from "../components/Todo"


interface TodoListProps {
    todoList: TodoItemProps[];
    changeTodo: (id: number) => void
}

const TodoList = ({ todoList, changeTodo }: TodoListProps) => {
    const todoDom = todoList.map(
        item => <TodoItem key={item.id} todo={item} changeTodo={changeTodo} id={undefined}/>
    )
    return (
        <>
        { todoDom }
        </>
    )
}

export default TodoList