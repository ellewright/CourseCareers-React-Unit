import React from "react";

export function ErrorElement() {
    return (
        <>
            <h1>Something went wrong!</h1>
        </>
    )
}

export class ErrorBoundary extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error) {
        console.log(error.message)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }

        return this.props.children
    }
}