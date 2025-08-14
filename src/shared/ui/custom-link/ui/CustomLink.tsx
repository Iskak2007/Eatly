import type { ReactNode } from "react";
import { Link} from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
};

const CustomLink = ({ to, children }: Props) => {

  return (
    <Link
      to={to}
      className={``}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
