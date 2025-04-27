import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root1=document.querySelector(`#root1`);

const rootForroot1= createRoot(root1);
 
rootForroot1.render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>
 
)



// createRoot(root1).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
