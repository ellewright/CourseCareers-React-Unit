import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import "./styles.css"

export default function Modal() {
    const [customIsOpen, setCustomIsOpen] = useState(false)
    const [dialogIsOpen, setDialogIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setCustomIsOpen(true)}>Show Custom Modal</button>
            <br />
            <button onClick={() => setDialogIsOpen(true)}>Show Dialog Modal</button>
            <CustomModal
                isOpen={customIsOpen}
                onClose={() => setCustomIsOpen(false)}
            >
                <div className="modal">
                    <p>This is a <strong>CUSTOM</strong> modal</p>
                    <button onClick={() => setCustomIsOpen(false)}>Close</button>
                </div>
            </CustomModal>
            <DialogModal
                isOpen={dialogIsOpen}
                onClose={() => setDialogIsOpen(false)}
            >
                <p>This is a <strong>DIALOG</strong> modal</p>
                <button>Close</button>
            </DialogModal>
        </div>
    )
}

function CustomModal({ isOpen, onClose, children }) {

    useEffect(() => {
        function handler(e) {
            if (e.key === "Escape") onClose()
        }

        document.addEventListener("keydown", handler)

        return () => {
            document.removeEventListener("keydown", handler)
        }
    }, [onClose])

    return createPortal(
        <>
            <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
                {children}
            </div>
        </>, document.querySelector("#modal-container")
    )
}

function DialogModal({ isOpen, onClose, children }) {
    const dialogRef = useRef(null)
    useEffect(() => {
        const dialog = dialogRef.current
        if (dialog == null) return

        if (isOpen) {
            dialog.showModal()
        } else {
            dialog.close()
        }
    }, [isOpen])

    useEffect(() => {
        const dialog = dialogRef.current
        if (dialog == null) return

        dialog.addEventListener("close", onClose)

        return () => {
            dialog.removeEventListener("close", onClose)
        }

    }, [onClose])

    return createPortal(
        <>
            <dialog ref={dialogRef}>
                {children}
            </dialog>
        </>, document.querySelector("#modal-container")
    )
}