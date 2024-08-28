import { useState } from "react"

function slowGetter() {
    // slow code...
    return "Ellie"
}

export default function UseStateHook() {
    const [name, setName] = useState(slowGetter) // use hooks at top of component
    const [age, setAge] = useState(24)

    function handleClick() {
        setName("Bettie") // rerenders component with new name value
        setAge(2)
    }

    return (
        <h1 onClick={handleClick}>My name is {name}, and I am {age}.</h1>
    )
}

export function Counter() {

    const [count, setCount] = useState(0)

    function handleCount() {
        setCount(currentCount => currentCount + 1)
    }

    return (
        <h1 onClick={handleCount}>{count}</h1>
    )
}