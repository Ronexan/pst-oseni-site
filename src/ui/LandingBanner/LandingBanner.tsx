export default function LandingBanner() {
  const greetingText = (
    <>
      <h1 className="font-great-vibes text-6xl font-bold mb-4 after:block
        after:w-[45%] after:h-[2px] after:bg-black dark:after:bg-white"
      >
        Welcome
      </h1>
      <h2 className="text-2xl font-light">
        To the official website of Pastor Olatunji Oseni
      </h2>
    </>
  );

  return (
    <div className="w-full h-[100vh] flex">
      <div className="hidden md:flex flex-[0.7] dark:text-white flex-col justify-center items-center text-center p-2">
        {greetingText}
      </div>
      <div
        className="flex-1 h-full md:rounded-bl-2xl"
        style={{
          backgroundImage: 'url(/gallery/portrait3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex md:hidden w-full h-full flex-col justify-center items-center text-center p-2 bg-black/50">
          {greetingText}
        </div>
      </div>
    </div>
  );
}
