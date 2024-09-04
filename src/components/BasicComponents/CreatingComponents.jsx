import React from "react"

export default function CreatingComponents() {
    return (
        <div>
            <ToDoListHeaderClass />
            <ToDoListClass />
        </div>
    )
}

{ /* function ToDoListHeader() {
    return <h1>To-Do List</h1>
} */ }

{ /* function ToDoList() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
} */ }

class ToDoListClass extends React.Component {
    render() {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        )
    }
}

class ToDoListHeaderClass extends React.Component {
    render() {
        return (
            <h1>To-Do List</h1>
        )
    }
}