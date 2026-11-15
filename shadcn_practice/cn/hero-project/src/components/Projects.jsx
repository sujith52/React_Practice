import { useEffect, useRef } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'AI-Powered Recommendation System',
    category: 'Full Stack · AI/ML',
    description:
      'Built a recommendation system using FastAPI and machine learning, with dedicated endpoints for user data processing and model inference. Integrated a React frontend with PostgreSQL for dynamic content delivery.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'Machine Learning',
    ],
    github: '',
    live: '',
  },
  {
    number: '02',
    title: 'Insurance Fraud Detection System',
    category: 'Machine Learning · Data Science',
    description:
      'Developed an end-to-end machine learning system to identify fraudulent financial transactions. Applied feature engineering, data preprocessing and SMOTE to handle class imbalance, and compared multiple models using F1-score.',
    technologies: [
      'Python',
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'Pandas',
      'SMOTE',
    ],
    github: '',
    live: '',
  },
]

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger

    if (!gsap || !ScrollTrigger) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.projects-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all', // Clears inline styles after animation completes
        scrollTrigger: {
          trigger: '.projects-heading',
          start: 'top 85%',
        },
      })

      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        clearProps: 'all', // Clears inline styles so hover and interactions work normally
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id='projects'
      className='bg-[#f8f8f8] py-16 sm:py-20 lg:py-24'
    >
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>

        {/* Heading */}
        <div className='projects-heading mb-10 sm:mb-14'>
          <Badge variant='outline' className='mb-4 rounded-full'>
            My Work
          </Badge>

          <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
            Featured Projects<span className='text-muted-foreground'>.</span>
          </h2>

          <p className='text-muted-foreground mt-4 max-w-xl text-base sm:text-lg'>
            A collection of projects where I explore web development,
            backend engineering, and machine learning.
          </p>
        </div>

        {/* Project Cards */}
        <div className='projects-grid grid gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <div
              key={project.number}
              className='project-card group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
            >
              {/* Project Preview */}
              <div className='relative flex h-48 items-center justify-center overflow-hidden bg-[#f1f1f1] sm:h-56'>
                <span className='text-[100px] font-bold tracking-tighter text-black/[0.04] transition-transform duration-500 group-hover:scale-110'>
                  {project.number}
                </span>

                <div className='absolute left-5 top-5'>
                  <Badge variant='secondary' className='rounded-full'>
                    {project.category}
                  </Badge>
                </div>

                <div className='absolute bottom-5 right-5'>
                  <span className='text-sm font-semibold text-black/40'>
                    PROJECT / {project.number}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className='flex flex-1 flex-col p-5 sm:p-6'>
                <h3 className='text-xl font-semibold tracking-tight sm:text-2xl'>
                  {project.title}
                </h3>

                <p className='text-muted-foreground mt-3 text-sm leading-7'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='mt-5 flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant='outline'
                      className='rounded-full px-3 py-1 text-xs'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className='mt-auto flex items-center gap-3 pt-7'>
                  {project.github && (
                    <Button
                      variant='outline'
                      className='rounded-full'
                      render={
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                        />
                      }
                      nativeButton={false}
                    >
                      <span>GitHub</span>
                    </Button>
                  )}

                  {project.live && (
                    <Button
                      className='rounded-full'
                      render={
                        <a
                          href={project.live}
                          target='_blank'
                          rel='noopener noreferrer'
                        />
                      }
                      nativeButton={false}
                    >
                      Live Demo
                      <ArrowUpRight className='size-4' />
                    </Button>
                  )}
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