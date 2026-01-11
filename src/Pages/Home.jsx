import React from 'react'
import ThemeToggol from '../components/ThemeToggol'
import StarBg from '../components/StarBg'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'> 
    <ThemeToggol/>
    <StarBg/>
    <Navbar/>

    <main>
      {/* Hero Section */}
      <Hero/>
      {/* About Section */}
      <About/>
    </main>

    {/* Projects Section */}
    </div>
  )
}

export default Home