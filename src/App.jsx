import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About' // Will create these
import Services from './components/Services'
import Impact from './components/Impact'
import Stations from './components/Stations'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Impact />
        <Stations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
