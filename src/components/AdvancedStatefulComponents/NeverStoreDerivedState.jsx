import { useState, useMemo } from "react"

export default function NeverStoreDerivedState() {
    const [items, setItems] = useState([1, 2, 3, 4, 5])
    const [inputValue, setInputValue] = useState("")

    const filteredItems = useMemo(() => {
        return inputValue === "" ? items : items.filter(item => item < inputValue)
    }, [items, inputValue])

    return (
        <>
            <label htmlFor="lessThan">Show Less Than</label>
            <input type="number" id="lessThan" onChange={e => setInputValue(e.target.valueAsNumber)} value={inputValue} />
            <br />
            <br />
            <div>{filteredItems.join(", ")}</div>
            <br />
            <button onClick={() => setItems(i => [...i, 2.5])}>
                Add 2.5 to list
            </button>
        </>
    )
}