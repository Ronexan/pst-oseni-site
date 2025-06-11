import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IoIosClose } from "react-icons/io";
import type { BookData } from "@/types";

type BookProps = {
  data: BookData;
  visible: { get: boolean; set: React.Dispatch<React.SetStateAction<boolean>> };
};

export default function BookViewer({ data, visible }: BookProps) {
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    if (visible.get) {
      document.body.style.overflow = "hidden";
    }else {
      document.body.style.overflow = "auto";
    }
  }, [visible])

  return (
    <motion.div
      onClick={() => !mouseOver && visible.set(false)}
      className="hidden fixed z-1000 left-0 top-0 w-full h-screen backdrop-blur-md justify-center
        items-center bg-black/75 dark:bg-[transparent] p-2"
      animate={
        visible.get ? {
          display: "flex",
          opacity: 1
        } : {
          display: "none",
          opacity: 0
        }
      }
    >
      <div
        className="w-[600px] max-h-[520px] h-full rounded-lg bg-white dark:bg-[#0a0a0a] p-4 overflow-y-auto nice-scrollbar"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <button className="float-right mb-2 cursor-pointer text-black dark:text-white" onClick={() => visible.set(false)}>
          <IoIosClose size={50} />
        </button>
        <div className="w-full h-[270px] rounded-md overflow-hidden">
          <img className="w-full h-full object-contain object-center rounded-md" src={data.image} />
        </div>
        <p className="text-3xl font-bold mt-4 mb-2">{data.title}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit posuere tempor. Integer vehicula, quam id molestie faucibus, ipsum augue ultricies mauris, in accumsan lorem tellus nec felis. Aenean placerat augue mi, id elementum erat porttitor eget. Nullam tristique luctus lacus, sit amet ornare mi elementum eu. Vivamus vulputate erat nec elementum laoreet. Donec placerat nunc felis, et imperdiet nulla egestas eget. Quisque vitae auctor mauris. Mauris purus mi, dignissim a eros id, varius tristique sem.
        </p>
      </div>
    </motion.div>
  );
}