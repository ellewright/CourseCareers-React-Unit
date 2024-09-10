

export default function EnvironmentVariables() {
    return (
        <>{import.meta.env.VITE_URL}</>
    )
}

// Vite only exposes .env variables which begin with "VITE_"
// Uses .env.development.local during dev
// Uses .env.production.local for production