import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  // </StrictMode>,
)
