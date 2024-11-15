import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import SimpleSolutions from './components/SimpleSolutions'
import OurAgency from './components/OurAgency'
import Client from './components/Client'

const App = () => {
  return (
    <div className='px-20'>
      <NavBar />
      <Hero />
      <Services />
      <SimpleSolutions />
      <OurAgency />
      <Client/>
    </div>
  )
}

export default App