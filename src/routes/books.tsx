import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import Book from '@/ui/Book/Book';
import BookViewer from '@/ui/Book/BookViewer';
import books from "@/lib/books.json";
import type { BookData } from "@/types";

export const Route = createFileRoute('/books')({
  component: RouteComponent,
})

function RouteComponent() {
  const [viewerVisible, setViewerVisible] = useState(false);
  const [bookViewed, setBookViewed] = useState<BookData | undefined>();

  let array = [];
  let i = 0;

  for (let x = 0; x < 50; x++) {
    array.push({
      title: books[i].title,
      image: books[i].image,
      summary: books[i].summary
    });
    i === 0 ? i = 1 : i = 0;
  }

  return (
    <div className='mt-header p-2'>
      <h1 className='text-5xl font-bold mt-10 text-center font-great-vibes'>Books</h1>

      <div className='w-full flex justify-center mt-10 mb-10'>
        <div
          className='max-w-[1000px] w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]
            place-items-center gap-[60px_10px]'
        >
          {books.map((book, index) => (
            <Book
              key={index}
              data={book}
              onClick={() => {
                setViewerVisible(true);
                setBookViewed(book);
              }}
            />
          ))}
        </div>
      </div>

      {bookViewed && <BookViewer data={bookViewed} visible={{ get: viewerVisible, set: setViewerVisible}} />}
    </div>
  );
}
