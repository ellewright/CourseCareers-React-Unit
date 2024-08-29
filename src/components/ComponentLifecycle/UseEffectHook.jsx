import { useState, useEffect } from "react"

export default function UseEffectHook() {
    const [name, setName] = useState("Ellie")
    const [age, setAge] = useState(24)

    // useEffect(() => {
    //     console.log("Name was changed.") // runs at mount & every name change
    // }, [name])

    // useEffect(() => {
    //     console.log("Age was changed:", age)
    // }, [age])

    useEffect(() => {
        const handler = () => {
            console.log(name)
        }
        document.addEventListener("click", handler)

        return () => {
            document.removeEventListener("click", handler) // cleanup function
        }
    })

    function handleMinus() {
        return setAge((currentAge) => currentAge - 1)
    }

    function handlePlus() {
        return setAge((currentAge) => currentAge + 1)
    }

    return (
        <div>
            <h1>My name is {name}, and I am {age} years old.</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleMinus}>-</button>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

export function UseEffectExercise() {
    const [show, setShow] = useState(true)

    const childComponent = show ? <Child /> : null

    return (
        <div>
            <button onClick={() => setShow(currentShow => !currentShow)}>
                Show/Hide
            </button>
            {childComponent}
        </div>
    )
}

function Child() {
    const [age, setAge] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("Mount.")

        return () => {
            console.log("Unmount.")
        }
    }, [])

    // useEffect(() => {
    //     console.log("Render.")
    // })

    // useEffect(() => {
    //     console.log(`My name is ${name}, and I am ${age} years old.`)
    // }, [name, age])

    // useEffect(() => {
    //     document.title = name
    // }, [name])

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         console.log(`My name is ${name}.`)
    //     }, 1000)

    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [name])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <button onClick={() => setAge(a => a - 1)}>-</button>
            {age}
            <button onClick={() => setAge(a => a + 1)}>+</button>
            <br />
            <br />
            My name is {name} and I am {age} years old.
        </div>
    )
}