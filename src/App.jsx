import { useState } from 'react'
import reactLogo from './assets/react.svg'
import vitesvg from './assets/vite.svg'
import './App.css'
import Features from './components/features'
import Hero from './components/hero'

function App() {

  return (
    <div className="App">
      <Hero />
      <Features />
    </div>
  )
}

export default App
