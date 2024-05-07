import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layout/header/Header'
import Hero from './components/hero/Hero'
import Watches from './components/watches/Watches'
import Products from './components/products/Products'
import About from './components/about/About'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/layout/footer/Footer'


function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Watches />
        <Products />
        <About />
        <Subscribe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
