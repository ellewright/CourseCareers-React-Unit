import { useState } from "react"
import { createPortal } from "react-dom"

export default function Portals() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div onClick={() => console.log("In div")} style={{ position: "relative", marginTop: "100px" }}>
            <h1>Hidden Message</h1>
            <button onClick={() => setIsOpen(true)}>Show</button>
            <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)}>
                This is a secret!
                <br />
                Click to close.
            </AlertMessage>
        </div>
    )
}

function AlertMessage({ children, onClose, isOpen }) {
    if (!isOpen) return null

    return createPortal(
        <div
            onClick={onClose}
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
        </div>, document.querySelector("#alert-messages")
    )
}