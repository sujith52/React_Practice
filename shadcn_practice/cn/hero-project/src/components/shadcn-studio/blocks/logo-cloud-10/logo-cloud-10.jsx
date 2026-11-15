import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

const CONTRIBUTION_LEVEL_STYLES = [
  'bg-primary/10 dark:bg-primary',
  'bg-primary/30 dark:bg-primary/70',
  'bg-primary/50 dark:bg-primary/50',
  'bg-primary/70 dark:bg-primary/30',
  'bg-primary dark:bg-primary/10'
]

const CONTRIBUTION_LEVEL_COUNTS = [0, 1, 3, 5, 8]

const CONTRIBUTION_ROWS = 6
const CONTRIBUTION_COLUMNS = 39
const TOTAL_CONTRIBUTION_CELLS = CONTRIBUTION_ROWS * CONTRIBUTION_COLUMNS



const LogoCloud = ({
  brandLogos
}) => {
  const [contributionGrid, setContributionGrid] = useState([])
  const [totalContributions, setTotalContributions] = useState(0)

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          'https://github-contributions-api.jogruber.de/v4/sujith52?y=last',
          {
            headers: {
              'Cache-Control': 'no-cache'
            }
          }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub contributions')
        }

        const data = await response.json()

        const contributions = [...(data.contributions || [])]
          .sort((a, b) => a.date.localeCompare(b.date))

        setTotalContributions(
          data.total?.lastYear ??
          contributions.reduce((total, day) => total + day.count, 0)
        )

        // Get the latest 39 weeks (273 days)
        

        // Convert API data into 6 rows and 39 columns
        const grid = Array.from({ length: 6 }, (_, rowIndex) =>
          Array.from({ length: 39 }, (_, columnIndex) => {
            const index = columnIndex * 7 + rowIndex
            const day = contributions[index]

            if (!day) {
              return {
                count: 0,
                level: 0,
                date: null
              }
            }

            return {
              count: day.count,
              level: day.level,
              date: new Date(day.date + 'T00:00:00')
            }
          })
        )

        setContributionGrid(grid)
      } catch (error) {
        console.error('GitHub contribution error:', error)
      }
    }

    fetchContributions()
  }, [])

  const half = Math.ceil(brandLogos.length / 2)
  const logoRows = [brandLogos.slice(0, half), brandLogos.slice(half)]

  return (
    <section className='py-8 sm:py-16 lg:py-24 '>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <Card className='ring-foreground/10 gap-6 rounded-3xl p-6 shadow-lg ring-1'>
          <CardContent className='gap-0 space-y-4 p-0'>
            <div>
              <p className='text-sm font-semibold'>@sujith_52</p>
              <p className='text-muted-foreground text-xs opacity-75'>{totalContributions} contributions in the template timeline</p>
            </div>

            <div className='overflow-x-auto max-md:pr-6'>
              <div className='space-y-1'>
                {contributionGrid.map((row, rowIndex) => (
                  <div key={rowIndex} className='flex gap-1'>
                    {row.map((cell, columnIndex) => {
                      const dateLabel = cell.date
                        ? cell.date.toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })
                        : 'No data'

                      return (
                        <Tooltip key={columnIndex}>
                          <TooltipTrigger
                            render={
                              <span
                                className={cn(
                                  'size-3.5 rounded-xs transition-transform duration-150 hover:scale-125 max-lg:shrink-0 sm:size-5',
                                  CONTRIBUTION_LEVEL_STYLES[cell.level]
                                )}
                              />
                            }
                          />
                          <TooltipContent className='dark:text-primary bg-black font-medium [&>*:last-child]:hidden'>
                            <span className='font-semibold'>
                              {cell.count} contribution{cell.count === 1 ? '' : 's'}
                            </span>{' '}
                            on {dateLabel}
                          </TooltipContent>
                        </Tooltip>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>

          <div className='border-border -mx-6 border-t' />

          <div className='min-w-0 space-y-8'>
            {logoRows.map((row, rowIndex) => (
              <Marquee
                key={rowIndex}
                pauseOnHover
                duration={25}
                gap={2}
                reverse={rowIndex === 1}
                className='mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] p-0'
              >
                {row.map((logo, logoIndex) => (
                  <div
                    key={`${logo.image}-${logoIndex}`}
                    className='bg-muted flex size-16 shrink-0 items-center justify-center rounded-md'
                  >
                    <img src={logo.image} alt={logo.name} loading='lazy' className='size-10 grayscale' />
                  </div>
                ))}
              </Marquee>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default LogoCloud
