import Logo from "@/shared/assets/icons/Logo (3).svg";
import { CustomLink } from "@/shared/ui/custom-link";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between mx-24 mt-12 border-b-1 pb-8">
            <div className="flex items-center gap-x-2">
                <img src={Logo} alt="logo" className="cursor-pointer" onClick={() => navigate("/")} />
                <h1 className="font-bold text-[21px] text-[#6C5FBC] cursor-pointer" onClick={() => navigate("/")}>eatly</h1>
                <div className="flex ml-3 items-center font-medium text-lg text-[#606060] gap-x-[40px]">
                    <CustomLink to="/menu">Menu</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    <CustomLink to="/pricing">Pricing</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </div>
            </div>

            <div className="flex items-center gap-x-9">
                <p className="text-lg font-bold text-[#606060] cursor-pointer">Login</p>
                <button className="py-[17px] px-[26px] text-lg font-bold bg-[#6C5FBC] rounded-2xl text-white cursor-pointer">
                    Sign up
                </button>
            </div>
        </header>
    )
}

export { Header }