import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './styles/App.css'
import './styles/App_mobile.css'
import Navbar from './components/Navbar'
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
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsApp from './components/Whatsapp'

function App() {
  return (
    <>
      <Navbar />
        <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
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
        <WhatsApp/>
      <Footer/>
    </>
  )
}

export default App
