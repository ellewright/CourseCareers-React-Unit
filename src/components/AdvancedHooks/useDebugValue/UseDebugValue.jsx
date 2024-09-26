import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { useOnlineStatus } from "./useOnlineStatus"

export default function UseDebugValue() {
    const isOnline = useOnlineStatus()

    const [name, setName] = useLocalStorage("Name", "")
    const [age, setAge] = useState(0)

    return (
        <>
            <h3>{isOnline ? "Online" : "Offline"}</h3>
            <input value={name} onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <input value={age} onChange={e => setAge(e.target.value)} type="number" />
        </>
    )
}