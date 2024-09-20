import { useRef } from "react"
import { Input } from "./CustomInput"

export default function ForwardRef() {
    const inputRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        console.log(inputRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    )
}