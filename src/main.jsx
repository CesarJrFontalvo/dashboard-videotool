import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Dashboard from './dashboard/pages/Dashboard'
import { AppRouter } from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
