import { motion } from "motion/react"
import { Link } from "@tanstack/react-router";
import { GoArrowRight } from "react-icons/go";

export default function Books() {
  return (
    <motion.div
      className="m-auto mt-30 mb-40 max-w-[900px] w-full text-center"
      initial={{ opacity: 0, transform: "translateY(150px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-5xl font-bold font-great-vibes">
        Books
      </h2>
      <p className="text-lg">
        Pastor Oseni has poured years of wisdom, scripture, and real-life experiences into these books
        — written to guide, inspire, and strengthen your walk with God. Whether you're facing trials,
        seeking direction, or simply longing for more of Him, there&apos;s a message waiting for you in every chapter.
      </p>

      <motion.div
        className="flex gap-3 flex-wrap items-center mt-5 justify-center"
        initial={{ transform: "translateY(150px)" }}
        whileInView={{ transform: "translateY(0px)" }}
        transition={{ duration: 2 }}
      >
        <BookPreview image="/books/covenant-winning.jpg" text="Covenant Winning" />
        <BookPreview image="/books/secrets-of-excellence.jpg" text="Secrets Of Excellence" />
        <Link
          className="flex-[0_0_auto] flex justify-center items-center gap-2 mt-5 w-max p-[0.5rem_1rem] border-[1.5px]
            rounded-xl border-black dark:border-white hover:text-white hover:dark:text-black
            hover:bg-black hover:dark:bg-white transition-colors duration-300 ease-out"
          to="/books"
        >
          <span className="font-medium text-[1rem] text-center">
            Browse Books
          </span>
          <GoArrowRight size={30} />
        </Link>
      </motion.div>
    </motion.div>
  )
}

function BookPreview({ image, text }: { image: string, text: string }) {
  return (
    <div
      className={`relative flex-[0_1_300px] h-[300px] rounded-sm overflow-hidden group`}
    >
      <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-all
        duration-300 ease-out" />
      <div
        className="absolute flex justify-center items-center bg-black/50 p-2 text-white inset-0 opacity-0
          group-hover:opacity-100 transition-all duration-300 ease-out"
      >
        <p className="text-2xl font-bold text-center">{text}</p>
      </div>
    </div>
  )
}