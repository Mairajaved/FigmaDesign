import React from 'react'
 import { Routes, Route } from'react-router-dom'
 import Home from './pages/Home'
 import About from './pages/About'
 import Services from './pages/Services'
 import Blog from './pages/Blog'
 import Prices from './pages/Prices'
 import Contact from './pages/Contact'
import Navigation from './components/Navigation'

export default function App() {
  return (
  <>
  <Navigation />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/pricing" element={<Prices />} />
    <Route path="/contact" element={<Contact />} />

  </Routes>
  </>  )
}
