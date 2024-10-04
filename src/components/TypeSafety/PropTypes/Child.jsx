import { add } from "date-fns"
import PropTypes from "prop-types"

export default function Child({ name, age, address, children }) {
    return (
        <>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Age (in 10 years):</strong> {age + 10}</p>
            <p><strong>Address:</strong>{address.street} {address.city}</p>
            {children}
        </>
    )
}

Child.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
    }),
    age: PropTypes.number.isRequired,
    children: PropTypes.node
}