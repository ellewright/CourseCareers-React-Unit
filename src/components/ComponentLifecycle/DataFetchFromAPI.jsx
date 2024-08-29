import React, { useState, useEffect } from "react"

export default function DataFetchFromAPI() {
    const URL = "https://jsonplaceholder.typicode.com/users"

    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)
        setError(undefined)

        const controller = new AbortController()
        fetch(URL, { signal: controller.signal })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res)
                }
            })
            .then(data => {
                setUsers(data)
            })
            .catch(e => {
                if (e?.name === "AbortError") return
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })

        return () => {
            controller.abort() // prevents double-logging
        }
    }, [])

    let jsx
    if (loading) {
        jsx = <h2>Loading...</h2>
    } else if (error != null) {
        jsx = <h2>Error loading data.</h2>
    } else {
        jsx = JSON.stringify(users)
    }

    return (
        <div>
            <h1>Users</h1>
            {jsx}
        </div>
    )
}