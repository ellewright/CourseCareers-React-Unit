import { useState } from "react"
import CounterWithNameProject from "../BasicStatefulComponents/CounterWithNameProject"

export default function VirtualDom() {
    const [appCount, setAppCount] = useState(0)

    console.log("Render app.")
    return (
        <div>
            <button
                style={{ display: "block", marginBottom: "1rem" }}
                onClick={() => setAppCount(c => c + 1)}>{appCount}</button>
            <CounterWithNameProject />
        </div>
    )
}

// Virtual DOM: DOM stored in memory. When rerendered, new DOM compared to old DOM and only new parts are changed. This is much quicker than rerendering the entire DOM from scratch