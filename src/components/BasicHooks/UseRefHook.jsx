import { useState, useRef, useEffect } from "react"

export default function UseRefHook() {
    const [name, setName] = useState("")
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <label>
                Name:
                <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            </label>
        </>
    )
}