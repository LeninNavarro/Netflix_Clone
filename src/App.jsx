import { useState } from 'react'
import reactLogo from './assets/react.svg'
import vitesvg from './assets/vite.svg'
import './App.css'
import Features from './components/features'
import Nav from './components/navbar'
import Footer from './components/footer'
import FAQs from './components/faqs'
import Main from './components/main'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Main />
      <Features />
      <FAQs/>
      <Footer />
    </div>
  )
}

export default App
