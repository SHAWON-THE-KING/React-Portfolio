import React from 'react'


const projects = [  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A brief description of Project One.',
    ImageURL: '/projects/E-commarce.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    demoURl: 'https://e-commerce-ten-orpin-22.vercel.app/',
    githubURL: 'https://github.com/SHAWON-THE-KING/E-commerce?tab=readme-ov-file',
  },
  {
    id: 2,
    title: 'Tech and furniture in harmony',
    description: 'A brief description of Project One.',
    ImageURL: '/projects/furniture.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    demoURl: 'https://e-commerce-web-5492.netlify.app/',
    githubURL: 'https://github.com/SHAWON-THE-KING/-E-commerce-website-with-react.?tab=readme-ov-file',
  },
  {
    id: 3,
    title: 'Anime list mockup website',
    description: 'A brief description of Project One.',
    ImageURL: '/projects/AnimeList.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    demoURl: 'https://anime-768255.netlify.app/',
    githubURL: 'https://github.com/SHAWON-THE-KING/Anime-list-web',
  },
  {
    id: 4,
    title: 'Building your dream website setup',
    description: 'A brief description of Project One.',
    ImageURL: '/projects/websitesetup.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    demoURl: 'https://newreactproject01.netlify.app/',
    githubURL: 'https://github.com/SHAWON-THE-KING/New-React-Project',
  },
  {
    id: 5,
    title: 'sushi restaurant website.',
    description: 'A brief description of Project One.',
    ImageURL: '/projects/sushi-restaurant-website.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    demoURl: 'https://02ndreactproject.netlify.app/',
    githubURL: 'https://github.com/SHAWON-THE-KING/React-and-Tailwind-project-?tab=readme-ov-file',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl font-bold mb-4
            md:text-4xl text-center'>

                Featured  
                {" "}
                <span className=' text-primary'>
                       Projects
                </span>
            </h2>


            <p className=' text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of the projects I've worked on recently. Click on any project to learn more about it. Each project showcases my skills in web development and design.
            </p>



            <div className=' grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {projects.map((project, key) => (
                    <div key={key} className=' group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img 
                            src={project.ImageURL} 
                            alt={project.title}
                            className=' w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
                            />
                        </div>
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                            <p className='text-muted-foreground mb-4'>{project.description}</p>
                            <div className='mb-4'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='inline-block bg-primary/10 text-xs px-2 py-1 rounded mr-2 mb-2'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className='flex space-x-4'>
                                <a 
                                href={project.demoURl} 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary hover:underline'
                                >
                                   Live Demo
                                </a>
                                <a 
                                href={project.githubURL}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary hover:underline'
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects