import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]

export default function ArrayStateProject() {
    const [array, setArray] = useState(INITIAL_VALUE)
    const [value, setValue] = useState("")

    function removeFirstElement() {
        setArray(currentArray => {
            return currentArray.slice(1)
        })
    }

    function removeLastElement() {
        setArray(currentArray => {
            return currentArray.slice(0, currentArray.length - 1)
        })
    }

    function removeSpecificLetter(letter) {
        setArray(currentArray => {
            return currentArray.filter(e => e !== letter)
        })
    }

    function addNewFirstElement(element) {
        setArray(currentArray => {
            return [element, ...currentArray]
        })
    }

    function addNewLastElement(element) {
        setArray(currentArray => {
            return [...currentArray, element]
        })
    }

    function clear() {
        setArray([])
    }

    function reset() {
        setArray(INITIAL_VALUE)
    }

    function updateAs() {
        setArray(currentArray => {
            return currentArray.map(element => {
                if (element === "A") return "Update"
                return element
            })
        })
    }

    function addElementAtIndex(element, index) {
        setArray(currentArray => {
            return [...currentArray.slice(0, index), element, ...currentArray.slice(index)]
        })
    }

    return (
        <div>
            <h1>{array.join(", ")}</h1>
            <button onClick={removeFirstElement}>Remove First Element</button>
            <button onClick={removeLastElement}>Remove Last Element</button>
            <button onClick={() => removeSpecificLetter("B")}>Remove B's</button>
            <br />
            <button onClick={() => addNewFirstElement("New")}>Add New First Element</button>
            <button onClick={() => addNewLastElement("New")}>Add New Last Element</button>
            <button onClick={clear}>Clear</button>
            <br />
            <button onClick={reset}>Reset</button>
            <button onClick={updateAs}>Update A's</button>
            <button onClick={() => addElementAtIndex("Insert", 2)}>Add At Index 2</button>
            <br />
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => addNewFirstElement(value)}>Add Custom Value</button>
        </div>
    )
}