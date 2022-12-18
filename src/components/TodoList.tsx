import { TodoItem } from "../TodoItem"

const TodoList = ({ todoList, changeTodo }: TodoListProps) => {
    const todoDom = todoList.map(item => <TodoItem key={item.id} todo={item} changeTodo={changeTodo}/>)
    return (
        <>
        { todoDom }
        </>
    )
}

export default TodoList