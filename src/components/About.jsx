import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section className='py-24 px-4 relative' id='about'>
      <div className='max-w-4xl mx-auto container'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            
            About <span className='text-primary'>Me</span>

        </h2>

        <div className=' grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

            <div className=' space-y-6'>
                <h3 className='text-xl font-semibold'>My Journey</h3>
                <p className='text-muted-foreground'>
                    I'm a passionate frontend developer with a love for creating beautiful, responsive websites. My journey began with a curiosity about how things work on the web, and it has evolved into a career where I get to build interfaces that users love.
                </p>

                <p className='text-muted-foreground'>
                    I'm a passionate frontend developer with a love for creating beautiful, responsive websites. My journey began with a curiosity about how things work on the web, and it has evolved into a career where I get to build interfaces that users love.
                </p>

                <div className=' flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a href="#contact" className='button'>
                        Contact Me
                    </a>
                    <a href="#contact" className='button'>
                        Downlode Resume
                    </a>

                </div>
            </div>

            <div className=' grid grid-cols-1 gap-6'>
                <div className=' gradient-border p-6 card-hover'>
                    <div className=' flex items-center gap-4'>
                        <div className=' p-3 rounded-full bg-primary/10'>
                            <Code className='h-6 w-6 text-primary' size={24}/>
                        </div>

                        <div className='text-left'>
                            <h4 className=' font-semibold'>Frontend Development</h4>
                            <p className=' text-muted-foreground'>Building responsive and interactive user interfaces using modern web technologies.</p>
                        </div>
                    </div>
                </div>


                <div className=' gradient-border p-6 card-hover'>
                    <div className=' flex items-center gap-4'>
                        <div className=' p-3 rounded-full bg-primary/10'>
                            <User className='h-6 w-6 text-primary' size={24}/>
                        </div>

                        <div className='text-left'>
                            <h4 className=' font-semibold'>UI/UX Design</h4>
                            <p className=' text-muted-foreground'>Designing user-friendly interfaces with a focus on usability and aesthetics.</p>
                            </div>
                    </div>
                </div>


                <div className=' gradient-border p-6 card-hover'>
                    <div className=' flex items-center gap-4'>
                        <div className=' p-3 rounded-full bg-primary/10'>
                            <Briefcase className='h-6 w-6 text-primary' size={24}/>
                        </div>

                        <div className='text-left'>
                            <h4 className=' font-semibold'>Project Management</h4>
                            <p className=' text-muted-foreground'>Coordinating projects to ensure timely delivery and quality outcomes.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </section>
  )
}

export default About