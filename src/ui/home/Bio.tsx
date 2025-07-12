import { motion } from "motion/react"

export default function Bio() {
  return (
    <motion.div
      className="w-full flex justify-center mt-30 p-2"
      initial={{ opacity: 0, transform: "translateY(150px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <div className="flex w-full max-w-[1000px] flex-col md:flex-row gap-1">
        <div
          className="flex-[0_0_500px] md:flex-1 h-0 md:h-[500px] overflow-hidden rounded-lg"
        >
          <img className="object-cover object-top grayscale-100" src="/gallery/portrait2.jpg" />
        </div>
        <motion.div
          className="flex-[0_0_auto] md:flex-1 mt-4 p-2"
          initial={{ transform: "translateY(150px)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-[3.2rem] font-great-vibes font-bold">
            About Pst. Olatuji Oseni
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna magna, egestas vitae est id,
            vestibulum efficitur magna. Quisque nec varius dui. Vivamus nec bibendum ex, sed efficitur libero.
            Mauris luctus molestie enim quis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Donec ac vehicula tellus, ac dictum elit. Vestibulum viverra mauris
            sed orci efficitur viverra. Cras pulvinar lorem purus, eu scelerisque lorem rhoncus sed. Ut lacus sem,
            suscipit in accumsan ut, malesuada vitae justo. Quisque ac maximus orci. Sed at pulvinar magna.
            Nunc sed ex a tellus porta rutrum in ut neque.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
