import { useState, useEffect, useReducer, createContext, useContext } from "react"
import NewTodoForm from "./NewTodoForm"
import "./styles.css"
import TodoList from "./TodoList"
import TodoFilterForm from "./TodoFilterForm"

const LOCAL_STORAGE_KEY = "TODOS"
const ACTIONS = {
    ADD: "ADD",
    TOGGLE: "TOGGLE",
    UPDATE: "UPDATE",
    DELETE: "DELETE"
}

export const TodoContext = createContext()

function reducer(todos, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD:
            return [
                ...todos,
                { name: payload.name, completed: false, id: crypto.randomUUID() },
            ]
        case ACTIONS.TOGGLE:
            return todos.map(todo => {
                if (todo.id === payload.id) return { ...todo, completed: payload.completed }
                return todo
            })
        case ACTIONS.UPDATE:
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return { ...todo, name: payload.name }
                }
                return todo
            })
        case ACTIONS.DELETE:
            return todos.filter(todo => todo.id !== payload.id)
        default:
            throw new Error(`No action found for type ${type}.`)
    }
}

export default function AdvancedTodoListProject() {
    const [filterName, setFilterName] = useState("")
    const [hideCompletedFilter, setHideCompletedFilter] = useState(false)
    const [todos, dispatch] = useReducer(reducer, [], initialValue => {
        const value = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (value == null) return initialValue
        return JSON.parse(value)
    })

    const filteredTodos = todos.filter((todo) => {
        if (hideCompletedFilter && todo.completed) return false
        return todo.name.includes(filterName)
    })

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function addNewTodo(name) {
        dispatch({ type: ACTIONS.ADD, payload: { name } })
    }

    function toggleTodo(todoId, completed) {
        dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } })
    }

    function updateTodoName(todoId, name) {
        dispatch({ type: ACTIONS.UPDATE, payload: { id: todoId, name } })
    }

    function deleteTodo(todoId) {
        dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } })
    }

    return (
        <TodoContext.Provider value={{
            todos: filteredTodos,
            addNewTodo,
            toggleTodo,
            deleteTodo,
            updateTodoName
        }}>
            <TodoFilterForm name={filterName} setFilterName={setFilterName} hideCompletedFilter={hideCompletedFilter} setHideCompletedFilter={setHideCompletedFilter} />
            <TodoList />
            <NewTodoForm />
        </TodoContext.Provider>
    )
}