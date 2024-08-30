import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Contenido from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Contenido />
    <Footer />
  </StrictMode>,
)
