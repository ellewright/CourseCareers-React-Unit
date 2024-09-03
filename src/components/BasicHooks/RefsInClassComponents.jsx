import React from "react"

export default class RefsInClassComponents extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {

        return (
            <>
                <label>
                    Name:
                    <input ref={this.inputRef} value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                </label>
            </>
        )
    }
}