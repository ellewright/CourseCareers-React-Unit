import { useContext, useRef, useState } from "react";
import { TodoContext } from "./AdvancedTodoListProject"

export default function NewTodoForm() {
    const nameRef = useRef()
    const { addNewTodo } = useContext(TodoContext)

    function handleSubmit(e) {
        e.preventDefault()
        if (nameRef.current.value === "") return

        addNewTodo(nameRef.current.value)

        nameRef.current.value = ""
    }

    return (
        <form id="new-todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo-input">New Todo</label>
            <input
                autoFocus
                type="text"
                id="todo-input"
                ref={nameRef}
            />
            <button>Add Todo</button>
        </form>
    )
}