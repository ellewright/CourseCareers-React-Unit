import { useState, useEffect, useDebugValue } from "react"

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key)
        if (localValue == null) {
            if (typeof initialValue === "function") {
                return initialValue()
            } else {
                return initialValue
            }
        } else {
            return JSON.parse(localValue)
        }
    })

    useDebugValue(value, getValue) // useDebugValue should only be used sparingly

    useEffect(() => {
        if (value === undefined) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [value, key])

    return [value, setValue]
}

function getValue(value) {
    const now = performance.now()
    while (now > performance.now() - 100) {
        // do nothing
    }

    return `Computed ${value}.`
}