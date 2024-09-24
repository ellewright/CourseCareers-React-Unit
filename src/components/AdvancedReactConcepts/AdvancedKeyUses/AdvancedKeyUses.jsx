import { useState } from "react"

export default function AdvancedKeyUses() {
    const [changeDogs, setChangeDogs] = useState(false)

    return (
        <>
            {changeDogs ? (
                <>
                    <span># of Dogs:</span> {/* <Counter key="dogs" /> */}
                </>
            ) : (
                <>
                    <span># of Cats:</span> {/* <Counter key="cats" /> */}
                </>
            )}
            <br />
            <input type="number" key={changeDogs ? "dogs" : "cats"} />
            <br />
            <button onClick={() => setChangeDogs(d => !d)}>Switch</button>
        </>
    )
}

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(c => c - 1)}>-</button>
            {count}
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </>
    )
}