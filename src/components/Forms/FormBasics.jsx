import { useState } from "react"

export default function FormBasics() {
    const [newTodoName, setNewTodoName] = useState("")
    const [todos, setTodos] = useState([])

    function addNewTodo(e) {
        e.preventDefault()
        if (newTodoName === "") return

        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { name: newTodoName, completed: false, id: crypto.randomUUID() },
            ]
        })
        setNewTodoName("")
    }

    function toggleTodo(todoId, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === todoId) return { ...todo, completed }

                return todo
            })
        })
    }

    function deleteTodo(todoId) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== todoId)
        })
    }

    return (
        <>
            <ul id="list">
                {todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>

            <form onSubmit={addNewTodo} id="new-todo-form">
                <label htmlFor="todo-input">New Todo</label>
                <input
                    type="text"
                    id="todo-input"
                    value={newTodoName}
                    onChange={e => setNewTodoName(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </>
    )
}

function TodoItem({ id, name, completed, toggleTodo, deleteTodo }) {
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <span data-list-item-text>{name}</span>
            </label>
            <button onClick={() => deleteTodo(id)} data-button-delete>
                Delete
            </button>
        </li>
    )
}