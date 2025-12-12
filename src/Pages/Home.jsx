import React from 'react'
import ThemeToggol from '../components/ThemeToggol'
import StarBg from '../components/StarBg'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'> 
    <ThemeToggol/>
    <StarBg/>
    </div>
  )
}

export default Home