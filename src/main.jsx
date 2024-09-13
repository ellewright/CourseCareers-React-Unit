import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routing/DynamicRoutes/DynamicRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode mounts, unmounts, then remounts immediately */}
    <RouterProvider router={router} /> {/* Only in dev: it is good at detecting bugs this way */}
  </StrictMode>
)
