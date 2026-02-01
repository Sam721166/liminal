import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import axios from "axios"

import { store, persistor } from "./redux/store";

// In dev: no baseURL so requests go to same origin → Vite proxy → local backend (cookies work).
// In prod: set VITE_API_URL in Vercel so requests go to your deployed API.
if (import.meta.env.PROD && import.meta.env.VITE_API_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
}
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
