import { useState, useEffect } from "react"

export default function HookRules() {
    const [count, setCount] = useState(0) // top of component

    useEffect(() => { // hooks can't be called conditionally
        document.title = count
    }, [count])

    return (
        <>
            <button onClick={() => setCount(c => c - 1)}>-</button>
            {count}
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </>
    )
}