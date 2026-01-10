import React from 'react'
import ThemeToggol from '../components/ThemeToggol'
import StarBg from '../components/StarBg'
import Navbar from '../components/NavBar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'> 
    <ThemeToggol/>
    <StarBg/>
    <Navbar/>
    </div>
  )
}

export default Home