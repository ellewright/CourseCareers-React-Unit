import React, { useState } from "react"

export default function ClassComponentLifecycleMethods() {
    const [show, setShow] = useState(true)

    const childComponent = show ? <Child /> : null

    return (
        <div>
            <button onClick={() => setShow(currentShow => !currentShow)}>
                Show/Hide
            </button>
            {childComponent}
        </div>
    )
}

export class Child extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            age: 0
        }
    }

    componentDidMount() {
        console.log("Hi.")
        console.log("Render.")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Render.")

        // if (prevState.name !== this.state.name || prevState.age !== this.state.age) {
        //     console.log(`My name is ${this.state.name}, and I am ${this.state.age} years old.`)
        // }

        if (prevState.name !== this.state.name) {
            document.title = this.state.name

            if (this.nameTimeout != null) clearTimeout(this.nameTimeout)

            this.nameTimeout = setTimeout(() => {
                console.log(`My name is ${this.state.name}.`)
            }, 1000)
        }
    }

    componentWillUnmount() {
        if (this.nameTimeout != null) clearTimeout(this.nameTimeout)
        console.log("Bye.")
    }

    // UNSAFE_componentWillMount() {
    //     console.log("Should throw error in StrictMode.")
    // }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <br />
                <br />
                <button onClick={() => this.setState(currentState => {
                    return {
                        age: currentState.age - 1
                    }
                })}>-</button>
                {this.state.age}
                <button onClick={() => this.setState(currentState => {
                    return {
                        age: currentState.age + 1
                    }
                })}>+</button>
                <br />
                <br />
                My name is {this.state.name}, and I am {this.state.age} years old.
            </div>
        )
    }
}