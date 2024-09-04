export default function JSXBasics() {

    // return React.createElement("h1", { id: "5" }, "Hello World")

    // return (
    //   <h1 id="5">2 + 2 = {2 + 2}</h1>
    // )

    const customLabel = <label htmlFor="inputId">Label</label>

    return (
        <div id="largeDiv" className="large">
            {customLabel}
            <input id="inputId" type="number" defaultValue={3} />
        </div>
    )
}