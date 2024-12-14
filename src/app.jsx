import React from 'react'
import Layout from './layout/Layout'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <Layout>
      <Hero/>
      <About/>
    </Layout>
  )
}

export default App