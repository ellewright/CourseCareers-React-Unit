import { useEffect } from "react";

export function useMutationLogger() {
    useEffect(() => {
        const observer = new MutationObserver(() => {
            console.log("DOM changed.")
        })

        observer.observe(document.documentElement, {
            childList: true,
            characterData: true,
            subtree: true,
            attributes: true
        })

        return () => {
            observer.disconnect()
        }
    }, [])
}