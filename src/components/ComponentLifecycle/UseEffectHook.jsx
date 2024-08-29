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