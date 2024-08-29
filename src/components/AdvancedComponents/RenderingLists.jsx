import { useState } from "react"

export default function RenderingLists() {
    const [items, setItems] = useState([
        { id: crypto.randomUUID(), name: "Item 1" },
        { id: crypto.randomUUID(), name: "Item 2" }
    ])

    function addItem() {
        setItems(currentItems => {
            return [{ id: crypto.randomUUID(), name: "New item" }, ...currentItems]
        })
    }

    return (
        <div>
            <button onClick={addItem}>Add item</button>
            <pre>{items.map(item => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <input type="text" />
                    </div>
                )
            })}
            </pre>
        </div>
    )
}