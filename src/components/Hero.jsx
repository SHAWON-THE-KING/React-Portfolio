import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className=' relative min-h-screen flex flex-col justify-center items-center px-4'>

            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className=' space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className=' opacity-0 animate-fade-in '> Hi, </span>
                        <span className='  opacity-0 animate-fade-in-delay-1'>I'm </span>
                        <span className='text-primary text-glow  ml-2 opacity-0 animate-fade-in-delay-2'> Shawon Islam </span>
                    </h1>

                    <p className=' text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        Let’s be honest: the web is full of broken layouts and boring interfaces. I’m here to fix that. I am a Frontend Developer who speaks fluent JavaScript, dreams in CSS, and creates user experiences that are smoother than a fresh jar of peanut butter. I build pixel-perfect websites that your users will love (and your backend developers won't hate).
                    </p>

                    <div className=' pt-4 opacity-0 animate-fade-in-delay-4 '>
                        <a href='#projects' className='button'>
                            View My Projects
                        </a>
                    </div>
                </div>
            </div>


            <div className=' absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center'>
                <span className=' text-muted-foreground mb-2'>Scroll</span>
                <svg className=' w-6 h-6 text-muted-foreground text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7'></path>
                </svg>

            </div>

        </section>
    )
}

export default Hero