import React from 'react'
import Layout from './layout/Layout'
import Hero from './components/Hero'
import About from './components/About'
import LogosCarousel from './components/LogosCarousel'

const App = () => {
  return (
    <Layout>
      <Hero/>
      <About/>
      <LogosCarousel/>
    </Layout>
  )
}

export default App