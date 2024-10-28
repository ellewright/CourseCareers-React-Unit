import styles from "./Button.module.css"

export default function Button({ As = "button", size = "md", className = "", ...props }) {
    return (
        <As
            {...props}
            className={`${styles.btn} ${styles[size]} ${className}`}
        />
    )
}