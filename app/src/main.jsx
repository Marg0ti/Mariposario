
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Layoutlet from './Components/Layoutlet/Layoutlet.jsx'

import Home from './pages/Home/Home.jsx'
import Park from './pages/Park/Park.jsx'
import Done from './pages/Done/Done.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Tickets from './pages/Tickets/Tickets.jsx'
import Gallery from './pages/Gallery/Galery.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layoutlet/>}>
        <Route index element={<Home/>} />
        <Route path="el-parque" element={<Park/>} />
        <Route path="que-hacemos" element={<Done/>} />
        <Route path="galeria" element={<Gallery/>} />
        <Route path="entradas" element={<Tickets/>} />
        <Route path="contacto" element={<Contact/>} />
      
      </Route>
    </Routes>
  </BrowserRouter>
  
)
