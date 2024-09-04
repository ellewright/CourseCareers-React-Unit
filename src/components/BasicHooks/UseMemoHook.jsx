import { useState, useMemo } from "react"

const LIST = Array(1_000_000)
    .fill()
    .map((_, i) => i + 1)

export default function UseMemoHook() {
    const [query, setQuery] = useState("")
    const [isDarkMode, setIsDarkMode] = useState(false)

    const filteredList = useMemo(() => {
        console.log("In memo")
        return LIST.filter(n => n.toString().includes(query))
    }, [query]) // prevents list from having to recalc on rerender
    // when query remains the same

    console.log(filteredList.length)

    return (
        <div
            style={{
                background: isDarkMode ? "#333" : "white",
                color: isDarkMode ? "white" : "#333"
            }}
        >
            <label>
                Query:
                <input value={query} onChange={e => setQuery(e.target.value)} />
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    onChange={e => setIsDarkMode(e.target.checked)}
                    checked={isDarkMode}
                />
                Dark Mode
            </label>
        </div>
    )
}