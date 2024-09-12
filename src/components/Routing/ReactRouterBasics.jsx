import { createBrowserRouter, Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

function Home() {
    return (
        <>
            <Navbar />
            <h1>Home</h1>
        </>
    )
}

function Store() {
    return (
        <>
            <Navbar />
            <h1>Store</h1>
        </>
    )
}

function About() {
    return (
        <>
            <Navbar />
            <h1>About</h1>
        </>
    )
}

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/store", element: <Store /> },
    { path: "/about", element: <About /> },
])