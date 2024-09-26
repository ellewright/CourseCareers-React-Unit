import { useCallback, useEffect, useRef, useState } from "react"

export default function UseCallbackAsRef() {
    const [show, setShow] = useState(false)
    const inputRef = useCallback((input) => {
        if (input == null) return
        input.focus()
    }, [])

    console.log(inputRef.current?.value)

    return (
        <>
            <button
                onClick={() => setShow(t => !t)}
            >
                Show
            </button>
            {show &&
                <input type="text" ref={inputRef} />
            }
        </>
    )
}