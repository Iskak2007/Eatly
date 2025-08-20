import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-[50px] ">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
