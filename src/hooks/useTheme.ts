import { useMedia } from "react-use"

export default function useTheme() {
  const isDarkTheme = useMedia('(prefers-color-scheme: dark)');
  return isDarkTheme ? "dark" : "light";
}
