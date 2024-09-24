import { useState } from "react"
import { createPortal } from "react-dom"

export default function CaptureEventListeners() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div onClickCapture={() => console.log("Outer div")}>
            <h1 onClickCapture={() => console.log("Header")}>App Content</h1>
            <button onClick={() => setIsOpen(true)}>Show</button>
            <br />
            <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Secret Message
                <br />
                Close Message
            </AlertMessage>
        </div>
    )
}

function AlertMessage({ children, isOpen, onClose }) {
    if (!isOpen) return null

    return createPortal(
        <div
            onClickCapture={() => {
                console.log("Modal")
                onClose()
            }
            }
            style={{
                cursor: "pointer",
                position: "absolute",
                top: "0.5rem",
                left: "50%",
                translate: "-50%",
                background: "#777",
                color: "white",
                borderRadius: "0.5rem",
                padding: "0.5rem"
            }}
        >
            {children}
        </div>, document.querySelector("#modal-container")
    )
}