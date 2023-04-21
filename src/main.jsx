import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from "../src/components/container/store"
import { Provider } from "react-redux"

import StateContext from "../src/components/container/StateContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContext>
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
  </StateContext>,
)
