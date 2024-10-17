import { CounterClassComponent } from "./CounterClassComponent"
import { useState } from "react"

export default function PureComponent() {
    const [name, setName] = useState("")

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <CounterClassComponent initialCount={0} />
        </>
    )
}