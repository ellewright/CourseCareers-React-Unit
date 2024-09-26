import { useRef } from "react"
import { Input } from "./Input"

export default function UseImperativeHandle() {
    const inputRef = useRef()

    return (
        <>
            <button
                onClick={() => console.log(inputRef.current.value)}
            >
                Send
            </button>
            <Input type="text" ref={inputRef} />
        </>
    )
}