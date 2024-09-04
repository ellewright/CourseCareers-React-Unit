import { useState, useEffect, useCallback } from "react"

export default function UseCallbackHook() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    const printName = useCallback(() => {
        console.log(`Name: ${name}`)
    }, [name]) // useMemo but for functions

    // function printName() {
    //     console.log(`Name: ${name}`)
    // } this, memoized

    useEffect(() => {
        console.log("In effect.")
        printName()
    }, [printName])

    return (
        <>
            <label>
                Name:
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Age:
                <input
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
            </label>
        </>
    )
}