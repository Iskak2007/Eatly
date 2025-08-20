import type { ReactNode } from "react";
import { Link, useMatch} from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
};

const CustomLink = ({ to, children }: Props) => {
    const match = useMatch(to);

  return (
    <Link
      to={to}
      className={`hover:text-[#6C5FBC] transition-colors duration-100 border-none ${
        match && "text-[#6C5FBC]"
      }`}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
