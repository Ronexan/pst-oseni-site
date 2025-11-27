import { Link } from "@tanstack/react-router";
import { useMatch } from "@tanstack/react-router";
import classNames from "classnames";

type Props = {
  to: any;
  children: React.ReactNode;
  onIndexTop?: boolean;
};

export default function NavLink({ to, children, onIndexTop }: Props) {
  const match = useMatch({ from: to, shouldThrow: false });
  const className = classNames(
    'after:block after:h-[1px] after:bg-black dark:after:bg-white after:transition-all after:duration-300',
    match ? 'after:w-full' : 'after:w-0 hover:after:w-full',
    onIndexTop ? 'after:bg-white' : 'after:bg-[inherit]'
  );

  return (
    <Link
      to={to}
      className={className}
    >
      {children}
    </Link>
  );
}
