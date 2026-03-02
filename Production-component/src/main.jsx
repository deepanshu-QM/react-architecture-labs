import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




/* 
StrictMode = It help to find : a) Side effect Inside Render b)Improper useEffect CleanUp 
c)Depracted APis (Work Only in Development Mode ) d) Unexpected state mutations

## It is a development warning tool for specific React anti-patterns.
*/ 

/*
import { createRoot } from 'react-dom/client' -->
This enables:
Concurrent rendering
Better performance
New React features
*/