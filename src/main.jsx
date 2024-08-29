import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode mounts, unmounts, then remounts immediately */}
    <App /> {/* Only in dev: it is good at detecting bugs this way */}
  </StrictMode>
)
