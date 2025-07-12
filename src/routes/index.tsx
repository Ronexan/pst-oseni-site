import { createFileRoute } from '@tanstack/react-router'
import LandingBanner from '@/ui/home/LandingBanner'
import Bio from '@/ui/home/Bio'
import Books from '@/ui/home/Books'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <LandingBanner />
      <Bio />
      <Books />
      {/* <div className=''>
        <div className='h-[1500px]'></div>
      </div> */}
    </div>
  )
}
