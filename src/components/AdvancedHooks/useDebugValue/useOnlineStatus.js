import { useState, useEffect, useDebugValue } from "react";

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useDebugValue(isOnline) // can only be used in custom hooks

    useEffect(() => {
        function handler() {
            setIsOnline(navigator.onLine)
        }

        window.addEventListener("online", handler)
        window.addEventListener("offline", handler)

        return () => {
            window.removeEventListener("online", handler)
            window.removeEventListener("offline", handler)
        }
    }, [])

    return isOnline
}