import { Link } from "@tanstack/react-router"
import { IconContext } from "react-icons"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-2 flex gap-2 justify-between items-center flex-wra
      bg-gray-200 dark:bg-gray-500/15"
    >
      <p className="text-sm">
        &copy; Copyright, {(new Date()).getFullYear()}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <IconContext.Provider value={{size: "22"}}>
          <SocialLink to="https://instagram.com">
            <FaInstagram />
          </SocialLink>
          <SocialLink to="https://facebook.com">
            <FaFacebook />
          </SocialLink>
          <SocialLink to="https://x.com">
            <FaXTwitter />
          </SocialLink>
          <SocialLink to="https://youtube.com">
            <FaYoutube />
          </SocialLink>
        </IconContext.Provider>
      </div>
    </footer>
  )
}

function SocialLink({ children, to }: { children: React.ReactNode, to: string }) {
  return (
    <Link to={to} target="_blank" className="opacity-50 hover:opacity-100 transition-opacity duration-300 ease-out">
      {children}
    </Link>
  )
}