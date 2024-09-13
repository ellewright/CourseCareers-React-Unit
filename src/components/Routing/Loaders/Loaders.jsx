import { createBrowserRouter, Link, Outlet, useOutlet, useOutletContext, NavLink, useParams, Navigate, useNavigate, useLoaderData, redirect, useNavigation } from "react-router-dom"
import './styles.css'
import { useEffect } from "react"

const MEMBERS_URL = "https://jsonplaceholder.typicode.com/users"

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
    const teamMembers = useLoaderData()
    return (
        <nav>
            <ul>
                {teamMembers.map(member => (
                    <li key={member.id}>
                        <NavLink to={member.id.toString()}>Team: {member.name}</NavLink>
                    </li>
                ))}
                <li>
                    <NavLink to="new">New Member</NavLink>
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

    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/")
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    })

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

function TeamMember() {
    const member = useLoaderData()
    const value = useOutletContext()
    return (
        <>
            <h1>{value}: {member.name}</h1>
            <Link to="..">Back to Team Page</Link>
        </>
    )
}

function NewTeamMember() {
    return (
        <h1>New Team Member</h1>
    )
}

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        errorElement: <h1>Error</h1>,
        children: [
            { path: "*", element: <Navigate to="/" /> },
            { path: "/", element: <Home /> },
            { path: "/test/*", element: <h1>Test</h1> },
            { path: "/store", element: <Store /> },
            { path: "/about", element: <About /> },
            {
                path: "/team",
                element: <TeamNavLayout />,
                loader: ({ request: { signal } }) => {
                    return fetch(
                        MEMBERS_URL,
                        { signal }
                    )
                },
                children: [
                    { index: true, element: <Team /> },
                    {
                        path: ":memberId", loader: ({ params, request: { signal } }) => {
                            return fetch(MEMBERS_URL + `/${params.memberId}`, { signal })
                                .then(res => {
                                    if (res.status === 200) return res.json()
                                    throw redirect("/team")
                                })
                        }, element: <TeamMember />
                    },
                    { path: "new", element: <NewTeamMember /> }
                ]
            }

        ]
    },
])

function NavLayout() {
    const { state } = useNavigation()

    return (
        <>
            <Navbar />
            {state === "loading" ? <h1>Loading...</h1> : <Outlet />}
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