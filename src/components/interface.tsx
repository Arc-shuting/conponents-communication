interface TodoItem {
    id: number;
    content: string;
    isFinished: boolean;
}

interface InputProps {
    addTodo: (item: TodoItem) => void;
}

interface TodoListProps {
    todoList: TodoItem[];
    changeTodo: (id: number) => void
}

interface TodoItemProps {
    todo: TodoItem;
    changeTodo: (id: number) => void 
}