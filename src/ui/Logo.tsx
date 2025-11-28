import LogoImage from "/logo.png";
import LogoImageDark from "/logo-dark.png";
import useTheme from "@/hooks/useTheme";

export default function Logo({ size = 1 }: { size?: number }) {
  const theme = useTheme();

  if (theme === "light") return (
    <img src={LogoImage} width={size*100} />
  );

  return (
    <img src={LogoImageDark} width={size*100} />
  );
}