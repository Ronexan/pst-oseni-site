import { motion } from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function GalleryColumn({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col w-full gap-3">
      {images.map(image => <Item image={image} />)}
    </div>
  );
}

function Item({ image }: { image: string }) {
  const minSize = 370;
  const randomValue = Math.floor(Math.random() * 500);
  const randomHeight = randomValue < minSize ? minSize : randomValue;

  const smallScreen = useMediaQuery('(max-width: 640px)');

  return (
    <motion.div
      className={`rounded-lg group duration-300 ease-out overflow-hidden`}
      style={{
        flex: `0 0 ${smallScreen ? minSize : randomHeight}px`,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <img src={image} className="w-full h-full object-cover transition duration-300 ease-out hover:scale-110" />
    </motion.div>
  );
}