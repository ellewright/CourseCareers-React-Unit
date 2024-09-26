import { useId, useState } from "react"

export default function EmailForm({ children }) {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const id = useId()

    return (
        <>
            <div>
                <label htmlFor={`${id}-email`}>Email</label>
                <input id={`${id}-email`} type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor={`${id}-name`}>First Name</label>
                <input id={`${id}-name`} type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
        </>
    )
}