export default function RoutingWithoutALibrary() {
    const pathname = window.location.pathname
    let component

    switch (pathname) {
        case "/":
            component = <Home />
            break
        case "/about":
            component = <About />
            break
        case "/store":
            component = <Store />
            break
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/store">Store</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
            {component}
        </>
    )
}

function Home() {
    return (
        <h1>Home</h1>
    )
}

function Store() {
    return (
        <h1>Store</h1>
    )
}

function About() {
    return (
        <h1>About</h1>
    )
}