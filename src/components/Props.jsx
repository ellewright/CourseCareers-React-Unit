import React from "react"

export default function Props({ name, age = 21, isProgrammer }) {

    console.log("Is Programmer: " + isProgrammer)

    return (
        <div>{name} {age}</div>
    )
}

export function RenderChildFunc({ children }) {
    return (
        <div>{children}</div>
    )
}

export function ToDoListItemComponent({ children, isComplete }) {
    return (
        <label>
            <input type="checkbox" defaultChecked={isComplete} />
            {children}
        </label>
    )
}

export class NameClass extends React.Component {
    render() {
        <h1>{this.props.children}</h1>
    }
}

export class ToDoListItemClass extends React.Component {
    render() {
        <label>
            <input type="checkbox" defaultChecked={this.props.isComplete} />
            {this.props.children}
        </label>
    }
}