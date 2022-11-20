import { useState } from 'react'
import reactLogo from './assets/react.svg'
import vitesvg from './assets/vite.svg'
import './App.css'
import Features from './components/features'
import Hero from './components/hero'
import Footer from './components/footer'
import FAQs from './components/faqs'

function App() {

  return (
    <div className="App">
      <Hero />
      <Features />
      <FAQs/>
      <Footer />
    </div>
  )
}

export default App
