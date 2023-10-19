import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../Api/redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </Provider>
)
