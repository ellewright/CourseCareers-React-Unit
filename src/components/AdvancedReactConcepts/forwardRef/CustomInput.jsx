import { forwardRef } from "react"

function CustomInput(props, ref) {
    return <input {...props} ref={ref} style={{ border: "2px solid green" }} />
}

export const Input = forwardRef(CustomInput)