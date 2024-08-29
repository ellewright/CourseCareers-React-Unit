import CounterWithNameProject from "../BasicStatefulComponents/CounterWithNameProject"

export default function ConditionalRendering() {

    const favoriteNumber = 6

    return (
        <div>
            {favoriteNumber === 6 && <CounterWithNameProject />} {/* true */}
            {favoriteNumber === 7 && <h1>This won't render!</h1>} {/* false */}
            {favoriteNumber > 24
                ? <h1>My favorite number is greater than 24!</h1>
                : <h1>My favorite number is less than 24!</h1>
            }
        </div>
    )
}