import Child from "./Child";

export default function PropTypes() {

    const address = {
        street: "123 Main Street",
        city: "New York City"
    }

    return (
        <>
            <Child name="Ellie" age={24} address={address}>
                Hi, I am Ellie.
            </Child>
        </>
    )
}