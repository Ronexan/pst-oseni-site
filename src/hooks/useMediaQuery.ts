import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
  const [queryMatches, setQueryMatches] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setQueryMatches(mediaQuery.matches);
    
    const queryChange = () => {
      if (mediaQuery.matches) setQueryMatches(true);
      else setQueryMatches(false);
    };

    mediaQuery.addEventListener("change", queryChange);

    return () => mediaQuery.removeEventListener("change", queryChange);
  }, [queryMatches])

  return queryMatches;
}