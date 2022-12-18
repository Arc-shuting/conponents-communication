export const TodoItem = ({ todo, changeTodo }: TodoItemProps) => {
    const changeHandler = () => {
        changeTodo(todo.id)
    }

    return (
        <>
        <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}/>
        <span>{todo.content}</span>
        </>
    )
} 