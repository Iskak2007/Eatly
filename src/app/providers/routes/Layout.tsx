import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-[50px] ">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
