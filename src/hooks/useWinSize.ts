import { useState, useEffect } from "react";

type WinSize = {
  x: number;
  y: number;
};

export default function useWinSize(): WinSize {
  const [ winSize, setWinSize ] = useState<WinSize>({
    x: window.innerWidth,
    y: window.innerHeight
  });

  useEffect(() => {
    const onResize = () => {
      setWinSize({
        x: window.innerWidth,
        y: window.innerHeight
      });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [winSize]);

  return winSize;
}
