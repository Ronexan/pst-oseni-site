import { createFileRoute } from '@tanstack/react-router'
import GalleryColumn from '@/ui/Gallery/GalleryColumn';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Gallery"
      }
    ]
  })
})

function RouteComponent() {
  const smallScreen = useMediaQuery('(min-width: 40rem)');
  const mediumScreen = useMediaQuery('(min-width: 48rem)');
  const [galleryGrid, setGalleryGrid] = useState<React.ReactNode>();
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    let pics = []
    for (let x = 0; x < 11; x++) {
      pics.push(`/gallery/portrait${x+1}.jpg`);
    }
    setImages(pics)
  }, [])

  useEffect(() => {
    if (images.length === 0) return
    
    if (mediumScreen) {
      setGalleryGrid(<div
        className='max-w-[900px] w-full grid gap-[10px]
          grid-cols-[repeat(3,_minmax(200px,_1fr))]'
      >
        <GalleryColumn images={images.slice(0, 4)} />
        <GalleryColumn images={images.slice(4, 8)} />
        <GalleryColumn images={images.slice(8)} />
      </div>);
    }else if (smallScreen) {
      setGalleryGrid(<div
        className='max-w-[900px] w-full grid gap-[10px]
          grid-cols-[repeat(2,_minmax(200px,_1fr))]'
      >
        <GalleryColumn images={images.slice(0, 6)} />
        <GalleryColumn images={images.slice(6)} />
      </div>);
    }else {
      setGalleryGrid(<div
        className='max-w-[900px] w-full grid gap-[10px]
          grid-cols-1'
      >
        <GalleryColumn images={images} />
      </div>);
    }
  }, [images, smallScreen, mediumScreen])

  return (
    <div className='mt-header p-2 mb-10'>
      <h1 className='text-5xl font-bold mt-10 text-center font-great-vibes'>Gallery</h1>

      <div className='mt-20 flex justify-center w-full p-2'>
        {galleryGrid}
      </div>
    </div>
  );
}
