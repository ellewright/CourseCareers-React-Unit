import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routing/Loaders/Loaders'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode mounts, unmounts, then remounts immediately */}
    <App />
  </StrictMode>
)
