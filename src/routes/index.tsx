import { createFileRoute, Link } from '@tanstack/react-router'
import LandingBanner from '@/ui/LandingBanner/LandingBanner'
import Quote from '@/ui/Quote/Quote'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <div>
      <LandingBanner />
      <Quote />
      <div className=''>
        <div className='h-[1500px]'></div>
      </div>
    </div>
  )
}
