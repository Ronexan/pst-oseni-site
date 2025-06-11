import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='mt-header p-2'>
      <h1 className='text-5xl font-bold mt-10 text-center font-great-vibes'>Gallery</h1>

      <div></div>
    </div>
  );
}
