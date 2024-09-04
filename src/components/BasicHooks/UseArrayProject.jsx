import { useState, useCallback } from "react"

// const INITIAL_ARRAY = [1, 2, 3]
const INITIAL_ARRAY = () => [1, 2, 3]

export default function UseArrayProject() {
    const { array, set, push, replace, filter, remove, clear, reset } = useArray(INITIAL_ARRAY)

    return (
        <>
            <div>{array.join(", ")}</div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                    alignItems: "flex-start",
                    marginTop: "1rem",
                }}
            >
                <button onClick={() => set([4, 5, 6])}>Set to [4, 5, 6]</button>
                <button onClick={() => push(4)}>Push 4</button>
                <button onClick={() => replace(1, 9)}>
                    Replace the second element with 9
                </button>
                <button onClick={() => filter(n => n < 3)}>
                    Keep numbers less than 3
                </button>
                <button onClick={() => remove(1)}>Remove second element</button>
                <button onClick={clear}>Clear</button>
                <button onClick={reset}>Reset</button>
            </div></>
    )
}

function useArray(initialArray) {
    const [array, setArray] = useState(initialArray)

    const push = useCallback((element) => {
        setArray(array => [...array, element])
    }, [])

    const replace = useCallback((index, element) => {
        setArray(array => {
            return [...array.slice(0, index), element, ...array.slice(index + 1)]
        })
    }, [])

    const filter = useCallback((callback) => {
        setArray(array => {
            return array.filter(callback)
        })
    }, [])

    const remove = useCallback((index) => {
        setArray(array => {
            return [...array.slice(0, index), array.slice(index + 1)]
        })
    }, [])

    const clear = useCallback(() => setArray([]), [])

    const reset = useCallback(() => setArray(initialArray), [initialArray])

    return { array, set: setArray, push, replace, filter, remove, clear, reset }
}