import { useEffect, useRef, useState, useLayoutEffect } from "react"
import { useMutationLogger } from "./useMutationLogger.js"

export default function UseLayoutEffect() {
    useMutationLogger()
    const [isOpen, setIsOpen] = useState(false)
    const [popUpTop, setPopUpTop] = useState(0)
    const buttonRef = useRef(null)

    useLayoutEffect(() => { // runs inline with component
        if (buttonRef.current == null || !isOpen) return setPopUpTop(0)
        const { bottom } = buttonRef.current.getBoundingClientRect()
        setPopUpTop(bottom + 25)
    }, [isOpen])

    // const now = performance.now()
    // while (now > performance.now() - 100) {
    //     // do nothing
    // }

    return (
        <>
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(t => !t)}
            >
                Show
            </button>
            {isOpen &&
                <div
                    style={{
                        position: "absolute",
                        top: `${popUpTop}px`,
                        border: "1px solid black"
                    }}
                >
                    Tooltip
                </div>
            }
        </>
    )
}