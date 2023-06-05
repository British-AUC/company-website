import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Events from './pages/Events'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='/terms-conditions' element={<Terms/>} />
        <Route path='/privacy-policy' element={<Privacy/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
