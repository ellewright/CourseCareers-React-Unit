import React, { useState } from "react"

export default function CounterWithNameProject() {
    // console.log("Render child.")

    const [name, setName] = useState("Ellie")
    const [age, setAge] = useState(24)

    function handleMinus() {
        return setAge((currentAge) => currentAge - 1)
    }

    function handlePlus() {
        return setAge((currentAge) => currentAge + 1)
    }

    return (
        <div>
            <h1>My name is {name}, and I am {age} years old.</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleMinus}>-</button>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

export class CounterWithNameClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Ellie",
            age: 24
        }
    }

    changeName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleMinus = (e) => {
        this.setState((prevState) => ({ age: prevState.age - 1 }))
    }

    handlePlus = (e) => {
        this.setState((prevState) => ({ age: prevState.age + 1 }))
    }

    render() {
        return (
            <div>
                <h1>My name is {this.state.name}, and I am {this.state.age} years old.</h1>
                <input type="text" value={this.state.name} onChange={this.changeName} />
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}