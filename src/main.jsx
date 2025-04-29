import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AmanahLinktree from "./Links.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmanahLinktree />
  </StrictMode>,
)
