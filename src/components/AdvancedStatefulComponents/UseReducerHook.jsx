import { useState, useEffect, useReducer } from "react"

const INITIAL_COUNT = 0
const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
    PLUS_FIVE: "PLUS_FIVE"
}

const URLS = {
    USERS: "https://jsonplaceholder.typicode.com/users",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    COMMENTS: "https://jsonplaceholder.typicode.com/comments",
}
const FETCH_ACTIONS = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR"
}

function reducer(count, action) {
    switch (action.type) {
        case ACTIONS.DECREMENT:
            return count - 1
        case ACTIONS.INCREMENT:
            return count + 1
        case ACTIONS.RESET:
            return INITIAL_COUNT
        case ACTIONS.PLUS_FIVE:
            return count + action.payload.value
        default:
            return count
    }
}

function fetchReducer(state, { type, payload }) {
    switch (type) {
        case FETCH_ACTIONS.FETCH_START:
            return {
                isError: false,
                isLoading: true
            }
        case FETCH_ACTIONS.FETCH_SUCCESS:
            return {
                // ...state,
                isLoading: false,
                isError: false,
                data: payload.data
            }
        case FETCH_ACTIONS.FETCH_ERROR:
            return {
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default function UseReducerHook({ initialCount = INITIAL_COUNT }) {
    const [count, dispatch] = useReducer(reducer, initialCount)

    return (
        <>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            {count}
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
            <br />
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
            <br />
            <button onClick={() => dispatch({ type: ACTIONS.PLUS_FIVE, payload: { value: 5 } })}>+5</button>
        </>
    )
}

export function UseFetchWithReducer() {
    const [url, setUrl] = useState(URLS.USERS)
    const { data, isLoading, isError } = useFetch(url)

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
    const [state, dispatch] = useReducer(fetchReducer, {
        isError: false,
        isLoading: true
    })

    useEffect(() => {
        dispatch({ type: FETCH_ACTIONS.FETCH_START })
        const controller = new AbortController()

        fetch(url, { signal: controller.signal, ...options })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res)
                }
            })
            .then((data) => {
                dispatch({ type: FETCH_ACTIONS.FETCH_SUCCESS, payload: { data } })
            })
            .catch((e) => {
                if (e?.name === "AbortError") return
                dispatch({ type: FETCH_ACTIONS.FETCH_ERROR })
            })

        return () => {
            controller.abort()
        }
    }, [url])

    return state
}