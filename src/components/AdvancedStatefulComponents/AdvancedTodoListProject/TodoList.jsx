import { useContext } from "react"
import NewTodoForm from "./NewTodoForm"
import { TodoContext } from "./AdvancedTodoListProject"
import TodoItem from "./TodoItem"

export default function TodoList() {

    const { todos } = useContext(TodoContext)

    return (
        <ul id="list">
            {todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                )
            })}
        </ul>
    )
}