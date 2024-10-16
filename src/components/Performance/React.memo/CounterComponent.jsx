import { useState, memo } from "react"

function CounterComponent({ initialCount, otherProp }) {
    const [value, setValue] = useState(initialCount)

    return (
        <>
            {otherProp}
            <button onClick={() => setValue(v => v - 1)}>-</button>
            {value}
            <button onClick={() => setValue(v => v + 1)}>+</button>
        </>
    )
}

export const Counter = memo(CounterComponent)