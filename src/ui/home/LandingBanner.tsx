import { motion } from "motion/react"

export default function LandingBanner() {
  const duration = 1.5

  const greetingText = (
    <>
      <h1 className="font-great-vibes text-6xl font-bold mb-4 after:block
        after:w-[45%] after:h-[2px] after:bg-black dark:after:bg-white"
      >
        Welcome
      </h1>
      <motion.h2
        className="text-2xl font-light hidden md:block"
        initial={{ transform: "translateX(-100%)" }}
        animate={{ transform: "translateX(0%)" }}
        transition={{ duration: 1.6 }}
      >
        To the official website of Pastor Olatunji Oseni
      </motion.h2>
      <h2 className="text-2xl font-light block md:hidden">
        To the official website of Pastor Olatunji Oseni
      </h2>
    </>
  );

  return (
    <div className="relative w-full h-[100vh] flex overflow-hidden">
      <motion.div
        className="hidden md:flex flex-[0.7] dark:text-white flex-col justify-center
          items-center text-center p-2"
        initial={{ opacity: 0, transform: "translateX(-50%)" }}
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        transition={{ duration: 1 }}
      >
        {greetingText}
      </motion.div>
      <motion.div
        className="flex-1 h-full md:rounded-bl-2xl"
        style={{
          backgroundImage: 'url(/gallery/portrait3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{ opacity: 0, transform: "translateX(50%)" }}
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        transition={{ duration }}
      >
        <div className="flex md:hidden w-full h-full flex-col justify-center items-center text-center p-2 bg-black/50">
          {greetingText}
        </div>
      </motion.div>
    </div>
  );
}
