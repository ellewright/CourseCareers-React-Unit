import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routing/Loaders/Loaders'
import { ErrorBoundary, ErrorElement } from './components/AdvancedReactConcepts/ErrorBoundaries/ErrorBoundaries.jsx'
// import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorElement />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
