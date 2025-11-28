import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Contact"
      }
    ]
  })
})

function RouteComponent() {
  return (
    <div className='mt-header relative w-full h-[calc(100vh_-_var(--spacing-header))] flex'>
      <div
        className='flex-[0_0_350px] sticky top-0 h-full hidden md:block rounded-r-md'
        style={{
          background: "url('/gallery/portrait1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className='flex-1 h-full flex flex-col justify-center items-center p-2'>
        <h1 className='text-5xl font-bold mt-10 text-center font-great-vibes'>Get In Touch</h1>

        <div className='mt-4 text-center'>
          <h2 className='font-bold text-lg'>Email</h2>
          <a className='text-blue-500 hover:underline block' target='_blank' href='mailto:email-pastoroseni@yahoo.com'>
            email-pastoroseni@yahoo.com
          </a>
          <a className='text-blue-500 hover:underline' target='_blank' href='mailto:ovceinitiative@gmail.com'>
            ovceinitiative@gmail.com (NGO)
          </a>
        </div>
      </div>
    </div>
  );
}
