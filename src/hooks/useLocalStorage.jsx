import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(initialValue)

    function save(val) {
        localStorage.setItem(key, JSON.stringify(val));
        setValue(val)
    }

    return [value, save]
}