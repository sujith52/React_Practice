// Component Imports
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import IdCard from '@/components/ui/id-card'
import { Marquee } from '@/components/ui/marquee'
import GreetingWord from './greeting-word'
import { ArrowRightIcon } from "lucide-react"

import sujith from '../../../../images/sujith.jpg'
// import resumes from '/resume/sujith_resumeSept2026.pdf'

const PROFILE_IMAGE_URL = sujith

const HeroSection = ({
  brandLogos
}) => {
  return (
    <section className='lg:relative bg-[#f8f8f8]'>
      <div className='max-sm:pt-20 sm:py-16 lg:pt-32 lg:pb-24'>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='space-y-6 lg:max-w-lg'>
            <Badge
              variant='outline'
              className='bg-card h-6.5 gap-1 overflow-visible rounded-full text-green-600 dark:text-green-400'
            >
              <span className='relative inline-flex size-1.5'>
                <span className='absolute -inset-0.5 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-green-600/40 opacity-75 dark:bg-green-400/40' />
                <span className='relative inline-flex size-1.5 rounded-full bg-green-600 dark:bg-green-400' />
              </span>
              Available
            </Badge>

            <h1 className='mb-2 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[64px] lg:font-bold'>
              <GreetingWord /> <br />I am Sujith 👋🏻
            </h1>

            <p className='text-muted-foreground text-xl font-medium sm:text-2xl lg:text-3xl'>Design engineer</p>

            <p className='text-muted-foreground mb-8 max-w-2xl text-base'>
              Computer Science graduate passionate about building scalable web applications and intelligent solutions.
               I work with React, Python, FastAPI, and databases to develop seamless user experiences, robust backend systems, 
               and AI-powered applications turning ideas into practical, real-world solutions.
            </p>

            <div className='flex items-center gap-2.5 pt-2'>
              <Button
                variant='default'
                className='h-11 rounded-full px-4 text-base'
                render={<a  href='https://github.com/user-attachments/files/34875453/sujith_resumeSept2026.pdf' download='Sujith_Kumar_Resume.pdf'  />}
                nativeButton={false}
              >
                Download CV
              </Button>

              <Button
                variant='outline'
                className='hover:bg-card bg-card group h-11 gap-2.5 rounded-full pr-4! pl-4! text-base shadow-sm transition-[padding] duration-300 hover:pl-2!'
                render={<a href='https://github.com/sujith52' target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
              >
                <span className='bg-primary relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover:size-6.5'>
                  <ArrowRightIcon className='text-primary-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100' />
                </span>
                Let&apos;s connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      <IdCard
        frontImage={PROFILE_IMAGE_URL}
        className='mx-auto mt-8 aspect-4/5 w-full max-w-80 max-lg:hidden lg:absolute lg:-top-31 lg:right-0 lg:left-0 lg:z-10 lg:mt-0 lg:aspect-auto lg:h-182 lg:max-w-none'
      />

      
      <div className='relative mt-10 mb-10 w-full overflow-hidden'>
        <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-16 bg-linear-to-r to-transparent sm:w-35' />

        <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-16 bg-linear-to-l to-transparent sm:w-35' />

        <div className='w-full overflow-hidden'>
          <Marquee pauseOnHover duration={25} gap={2}>
            {brandLogos.map((logo, logoIndex) => (
              <div
                key={`${logo.image}-${logoIndex}`}
                className='bg-muted flex size-16 shrink-0 items-center justify-center rounded-md'
              >
                <img
                  src={logo.image}
                  alt=''
                  loading='lazy'
                  className='size-10 object-contain grayscale'
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
