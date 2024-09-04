import { useState, useEffect } from "react"

const URLS = {
    USERS: "https://jsonplaceholder.typicode.com/users",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    COMMENTS: "https://jsonplaceholder.typicode.com/comments",
}

// // BONUS:
// const OPTIONS = {
//     method: "POST",
//     body: JSON.stringify({ name: "Kyle" }),
//     headers: {
//         "Content-type": "application/json",
//     },
// }

export default function UseFetchProject() {
    const [url, setUrl] = useState(URLS.USERS)

    const { data, isLoading, isError } = useFetch(url)
    // const { data, isLoading, isError } = useFetch(url, OPTIONS)

    return (
        <>
            <div>
                <label>
                    <input
                        type="radio"
                        checked={url === URLS.USERS}
                        onChange={() => setUrl(URLS.USERS)}
                    />
                    Users
                </label>
                <label>
                    <input
                        type="radio"
                        checked={url === URLS.POSTS}
                        onChange={() => setUrl(URLS.POSTS)}
                    />
                    Posts
                </label>
                <label>
                    <input
                        type="radio"
                        checked={url === URLS.COMMENTS}
                        onChange={() => setUrl(URLS.COMMENTS)}
                    />
                    Comments
                </label>
            </div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : isError ? (
                <h1>Error</h1>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </>
    )
}

function useFetch(url, options = {}) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setData(undefined)
        setIsLoading(true)
        setIsError(false)

        const controller = new AbortController()

        fetch(url, { signal: controller.signal, ...options })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res)
                }
            })
            .then(setData)
            .catch((e) => {
                if (e?.name === "AbortError") return
                setIsError(true)
            })
            .finally(() => {
                if (controller.signal.aborted) return
                setIsLoading(false)
            })

        return () => {
            controller.abort()
        }
    }, [url])

    return {
        data,
        isLoading,
        isError
    }
}