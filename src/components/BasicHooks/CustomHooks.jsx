import { useState } from "react"

export default function CustomHooks() {
    const nameInput = useInputValue("")
    const [isDarkMode, toggleDarkMode] = useToggle(false)
    // const [isDarkMode, setIsDarkMode] = useState(false)


    return (
        <div
            style={{
                background: isDarkMode ? "#333" : "white",
                color: isDarkMode ? "white" : "#333"
            }}
        >
            <label>
                Name:
                <input {...nameInput} />
            </label>
            <br />
            <button onClick={toggleDarkMode}>Dark Mode</button>
        </div>
    )
}

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    function toggle() {
        setValue(currentValue => !currentValue)
    }

    return [value, toggle]
}

function useInputValue(initialValue) {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        onChange: (e) => setValue(e.target.value)
    }
}