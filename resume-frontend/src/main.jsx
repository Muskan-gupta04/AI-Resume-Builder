import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './pages/Root.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import GenerateResume from './pages/GenerateResume.jsx'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <Toaster> */}
    <Routes>
      <Route path='/' element={<Root/>}>
       <Route path='/'element={<Home/>}/>
       <Route path='/about'element={<About/>}/>
       <Route path='/login'element={<Login/>}/>
       <Route path='/contact'element={<Contact/>}/>
       <Route path='/generate-resume'element={<GenerateResume/>}/>
      </Route>
    </Routes>
    {/* </Toaster> */}
    </BrowserRouter>
     
  </StrictMode>
)
