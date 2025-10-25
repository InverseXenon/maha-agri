import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Imports our main component
import './index.css' // Imports the Tailwind-generated CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
