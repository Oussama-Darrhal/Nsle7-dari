import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; 

// Add global style to remove all underlines
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
  a, a:hover, a:visited, a:active, a:focus {
    text-decoration: none !important;
  }
`;
document.head.appendChild(globalStyle);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
        <App />
      </BrowserRouter>
  </StrictMode>,
)
