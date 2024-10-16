import { useState } from "react"
import { Counter } from "./CounterComponent"

export default function ReactMemo() {
    const [name, setName] = useState("")
    const [initialCount, setInitialCount] = useState(0)

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setInitialCount(c => c + 1)}>+</button>
            <br />
            <Counter initialCount={initialCount} otherProp={name} />
        </>
    )
}