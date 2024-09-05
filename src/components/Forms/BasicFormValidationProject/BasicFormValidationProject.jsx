import { useState, useRef, useMemo } from "react"
import "./styles.css"

const EMAIL_PREFIX = "@webdevsimplified.com"
const PASSWORD_MIN_LENGTH = 10

export default function BasicFormValidationProject() {
    return (
        <StateForm />
    )
}

function StateForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

    const emailErrorMessages = useMemo(() => {
        return isAfterFirstSubmit ? checkEmail(email) : []
    }, [isAfterFirstSubmit, email, checkEmail])
    const passwordErrorMessages = useMemo(() => {
        return isAfterFirstSubmit ? checkPassword(password) : []
    }, [isAfterFirstSubmit, password, checkPassword])

    function handleSubmit(e) {
        e.preventDefault()
        setIsAfterFirstSubmit(true)

        const emailErrors = checkEmail(email)
        const passwordErrors = checkPassword(password)

        if (emailErrors.length === 0 && passwordErrors.length === 0) alert("Success")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className={`form-group ${emailErrorMessages.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="email">Email</label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailErrorMessages.length > 0 && (
                    <div className="msg">{emailErrorMessages.join(" ")}</div>
                )}
            </div>
            <div className={`form-group ${passwordErrorMessages.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="password">Password</label>
                <input
                    className="input"
                    type="password"
                    id="password"
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordErrorMessages.length > 0 && (
                    <div className="msg">{passwordErrorMessages.join(" ")}</div>
                )}
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
}

function RefForm() {
    const [emailErrors, setEmailErrors] = useState([])
    const [passwordErrors, setPasswordErrors] = useState([])
    const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        setIsAfterFirstSubmit(true)

        const email = emailRef.current.value
        const password = passwordRef.current.value

        const emailErrors = checkEmail(email)
        const passwordErrors = checkPassword(password)

        setEmailErrors(emailErrors)
        setPasswordErrors(passwordErrors)

        if (emailErrors.length === 0 && passwordErrors.length === 0) alert("Success")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="email">Email</label>
                <input
                    onChange={
                        isAfterFirstSubmit
                            ? e => setEmailErrors(checkEmail(e.target.value))
                            : undefined
                    }
                    className="input"
                    type="email"
                    id="email"
                    ref={emailRef}
                />
                {emailErrors.length > 0 && (
                    <div className="msg">{emailErrors.join(" ")}</div>
                )}
            </div>
            <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="password">Password</label>
                <input
                    onChange={
                        isAfterFirstSubmit
                            ? e => setPasswordErrors(checkPassword(e.target.value))
                            : undefined
                    }
                    className="input"
                    type="password"
                    id="password"
                    ref={passwordRef}
                />
                {passwordErrors.length > 0 && (
                    <div className="msg">{passwordErrors.join(" ")}</div>
                )}
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
}

function checkEmail(email) {
    const errors = []

    if (email.length === 0) {
        errors.push("Required.")
    }

    if (!email.endsWith(EMAIL_PREFIX)) {
        errors.push("Must end with @webdevsimplified.com.")
    }

    return errors
}

function checkPassword(password) {
    const errors = []

    if (password.length < 10) {
        errors.push(`Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`)
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase character.")
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase character.")
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.")
    }

    return errors
}