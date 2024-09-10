import React, { useState, useEffect, createContext, useContext } from "react"

const ThemeContext = createContext()

export default function UseContextHook() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    function toggleTheme() {
        setIsDarkMode(t => !t)
    }

    useEffect(() => {
        document.body.style.background = isDarkMode ? "#333" : "white"
        document.body.style.color = isDarkMode ? "white" : "#333"
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{
            isDarkMode,
            toggleTheme
        }}>
            <Child /> {/* nested */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem tempore, consectetur accusamus earum facere minus aspernatur hic eius voluptatem.</p>
        </ThemeContext.Provider>
    )
}

function Child() {
    return <GrandChild />
}

function GrandChild() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <button
                style={{
                    background: isDarkMode ? "white" : "#333",
                    color: isDarkMode ? "#333" : "white",
                    border: "none",
                    padding: "0.5em",
                    borderRadius: "0.25em",
                    cursor: "pointer"
                }}
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </>
    )
}

class GrandChildClass extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ isDarkMode, toggleTheme }) => (
                    <button
                        style={{
                            background: isDarkMode ? "white" : "#333",
                            color: isDarkMode ? "#333" : "white",
                            border: "none",
                            padding: "0.5em",
                            borderRadius: "0.25em",
                            cursor: "pointer"
                        }}
                        onClick={toggleTheme}
                    >
                        Toggle Theme
                    </button>
                )}
            </ThemeContext.Consumer>
        )
    }
}