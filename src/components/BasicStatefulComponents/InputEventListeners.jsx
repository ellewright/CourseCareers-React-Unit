import { useState } from "react"

export default function InputEventListeners() {
    const [name, setName] = useState("Ellie")

    return (
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
    )
}