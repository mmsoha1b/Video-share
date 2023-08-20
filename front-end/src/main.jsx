import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {WindowSizeContextProvider} from './contexts/windowSizeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowSizeContextProvider>
      <App />
    </WindowSizeContextProvider>
  </React.StrictMode>,
)
