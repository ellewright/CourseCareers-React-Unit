import React from "react";

export default class StateInClassComponents extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Ellie",
            age: 24
        }
    }

    render() {

        const handleClick = () => {
            this.setState({ name: "Bettie" })
            this.setState({ age: 2 })
        }

        return (
            <h1 onClick={handleClick}>My name is {this.state.name}, and I am {this.state.age}.</h1>
        )
    }
}

export class CounterClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {

        const handleClick = () => {
            this.setState(currentState => {
                return { count: currentState.count + 1 }
            })
        }

        return (
            <h1 onClick={handleClick}>{this.state.count}</h1>
        )
    }
}