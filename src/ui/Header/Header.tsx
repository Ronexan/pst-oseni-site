import { useState, useEffect } from 'react';
import { Link, useMatch } from '@tanstack/react-router';
import { motion } from 'motion/react';
import useWinSize from '@/hooks/useWinSize';
import useTheme from '@/hooks/useTheme';
import NavLink from './NavLink';
import classNames from 'classnames';
import Logo from "@/ui/Logo";

export default function Header() {
  const [onTop, setOnTop] = useState(true);
  const [onIndex, setOnIndex] = useState(true);
  const match = useMatch({ from: "/", shouldThrow: false });
  const winSize = useWinSize();
  const theme = useTheme();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/books', label: 'Books' },
    { to: '/contact', label: 'Contact' },
    { to: '/gallery', label: 'Gallery' },
  ];
  const classname = classNames(
    "fixed top-0 left-0 w-full z-50 flex items-center justify-center h-[50px]\
      p-4 bg-white dark:bg-black text-black dark:text-white",
    (theme === "light" && onTop && match) ? "text-white --name: orange;" : "text-black dark:text-white"
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setOnTop(scrollTop === 0);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onTop]);

  useEffect(() => {
    setOnIndex(match ? true : false);
  }, [match]);

  // Desktop Version
  if (winSize.x >= 772) return (
    <motion.header
      className={classname}
      initial={{ height: '50px' }}
      animate={
        (onTop && onIndex) ? {
          height: '120px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        } : {}
      }
    >
      <motion.div
        className="w-full md:w-[50%] flex justify-between items-center"
        initial={{ width: '50%' }}
        animate={{ width: (onTop && onIndex) ? '60%' : '50%' }}
      >
        <motion.span
          animate={{ scale: (onTop && onIndex) ? 1.8 : 1 }}
        >
          <Link to="/">
            <Logo size={0.6} />
          </Link>
        </motion.span>
        <motion.nav
          className="flex gap-4 text-[0.8rem]"
          initial={{ fontSize: '0.8rem' }}
          animate={{ fontSize: (onTop && onIndex) ? '1rem' : '0.8rem' }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onIndexTop={theme === "light" && onTop && match !== undefined}
            >
              {link.label}
            </NavLink>
          ))}
        </motion.nav>
      </motion.div>
    </motion.header>
  );

  // Mobile Version
  return (
    <header
      className="fixed top-0 left-0 w-full z-50
        flex items-center justify-center h-[50px] p-4 bg-white dark:bg-black text-black dark:text-white"
    >
      <div
        className="w-full md:w-[50%] flex justify-between items-center"
      >
        <span>
          <Link to="/">
            <Logo size={0.6} />
          </Link>
        </span>
        <nav
          className="flex gap-4 text-[0.8rem]"
        >
           {navLinks.map((link) => (
            <NavLink to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
