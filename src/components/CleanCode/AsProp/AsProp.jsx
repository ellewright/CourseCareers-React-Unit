import Button from "./Button"

export default function AsProp() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    alignItems: "flex-start"
                }}
            >
                <Button size="sm">One</Button>
                <Button>Two</Button>
                <Button size="lg" As="a" href="">Three</Button>
            </div>
        </>
    )
}