import React from 'react'



const skills = [
    // Frontend Skills
    { name: 'HTML', level: 90, category: 'Frontend' },
    { name: 'CSS', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Bootstrap', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'React Router', level: 85, category: 'Frontend' },
    { name: 'Context API', level: 75, category: 'Frontend' },
    { name: 'API Integration', level: 75, category: 'Frontend' },
    { name: 'JavaScript', level: 75, category: 'Frontend' },


    //   Tools 
    { name: 'Git/GitHub', level: 95, category: 'Tools' },
    { name: 'VS Code', level: 95, category: 'Tools' },
    { name: 'Figma', level: 90, category: 'Tools' },
    { name: 'Chrome DevTools', level: 90, category: 'Tools' },

]

const Skills = () => {
    return (
        <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>

                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skills.map((skill, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <h3 className='text-xl font-semibold mb-2'>{skill.name}</h3>


                            <div className='w-full bg-gray-300 rounded-full h-4 mb-4'>
                                <div
                                    className='bg-primary h-4 rounded-full transition-all duration-300'
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className='text-sm'>{skill.level}% Proficient</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills