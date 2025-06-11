import { useState, useEffect } from "react";

export default function useTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    const queryChange = () => {
      if (mediaQuery.matches) setDarkTheme(true);
      else setDarkTheme(false);
    };

    mediaQuery.addEventListener("change", queryChange);

    return () => mediaQuery.removeEventListener("change", queryChange);
  }, [darkTheme])

  return darkTheme ? "dark" : "light";
}