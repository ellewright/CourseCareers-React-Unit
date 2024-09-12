import { createBrowserRouter, Link, Outlet, useOutlet, useOutletContext, NavLink } from "react-router-dom"
import './styles.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/store">Store</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/team" end>Team</NavLink>
                </li>
            </ul>
        </nav>
    )
}

function TeamNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="ellie">Ellie</NavLink>
                </li>
                <li>
                    <NavLink to="ken">Ken</NavLink>
                </li>
                <li>
                    <NavLink to="..">Back to Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}

function Home() {
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

function Store() {
    return (
        <>
            <h1>Store</h1>
        </>
    )
}

function About() {
    return (
        <>
            <h1>About</h1>
        </>
    )
}

function Team() {
    const value = useOutletContext()

    return (
        <>
            <h1>{value}</h1>
        </>
    )
}

function TeamMember({ name }) {
    const value = useOutletContext()
    return (
        <>
            <h1>{value}: {name}</h1>
            <Link to="..">Back to Team Page</Link>
        </>
    )
}

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        errorElement: <h1>Error</h1>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/store", element: <Store /> },
            { path: "/about", element: <About /> },
            {
                path: "/team",
                element: <TeamNavLayout />,
                children: [
                    { index: true, element: <Team /> },
                    { path: "ellie", element: <TeamMember name="Ellie" /> },
                    { path: "ken", element: <TeamMember name="Ken" /> }
                ]
            }

        ]
    },
])

function NavLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

function TeamNavLayout() {
    return (
        <>
            <TeamNav />
            <Outlet context="Team" />
        </>
    )
}