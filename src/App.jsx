import { useState } from 'react'
import reactLogo from './assets/react.svg'
import vitesvg from './assets/vite.svg'
import './App.css'
import Features from './components/features'
import Hero from './components/hero'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <Hero />
      <Features />
        <Features />
        <Footer />
    </div>
  )
}

export default App
