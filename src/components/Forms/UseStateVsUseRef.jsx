import { useState, useRef, useEffect } from "react"

export default function UseStateVsUseRef() {
    // const [name, setName] = useState("")
    const nameRef = useRef() // prevents rerender until form is submitted

    useEffect(() => {
        console.log("Render.")
    })

    function handleSubmit(e) {
        e.preventDefault()
        const name = nameRef.current.value
        if (name === "") return
        alert(`Name: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
                type="text"
                id="name"
                ref={nameRef}
            />
            {/* <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> */}
            <br />
            <br />
            <button>Alert Name</button>
        </form>
    )
}