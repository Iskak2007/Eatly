import Logo from "@/shared/assets/icons/Logo (3).svg";
import { CustomLink } from "@/shared/ui/custom-link";
import { useNavigate } from "react-router-dom";
import Instagram from "@/shared/assets/icons/Group 888.svg";
import IN from '@/shared/assets/icons/Path 7.svg'
import Facebook from '@/shared/assets/icons/Path 13.svg'
import Twitter from '@/shared/assets/icons/Path 6.svg'

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-[#EAEAEA] flex flex-col pt-24 pb-20 mt-[216px] px-[90px]">
            <div className="flex items-center justify-between border-b border-b-[#818181] pb-7">
                <div className="flex items-center">
                    <img src={Logo} alt="logo" className="cursor-pointer" onClick={() => navigate("/")} />
                    <h1 className="font-bold text-[21px] text-[#6C5FBC] pl-3.5 cursor-pointer" onClick={() => navigate("/")}>eatly</h1>

                </div>
                <div className="flex ml-3 items-center font-medium text-lg text-[#999999] gap-x-[70px]">
                    <CustomLink to="/menu">Menu</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    <CustomLink to="/pricing">Pricing</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </div>
            </div>

            <div className="flex items-center justify-between mt-[57px]">
                <div className="flex items-center">
                    <p className="font-medium text-lg text-[#999999]">© 2025 EATLY All Rights Reserved.</p>
                </div>

                <div className="flex gap-x-[52px] items-center">
                    <img src={Instagram} alt="instagram" />
                    <img src={IN} alt="IN" />
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </div>
        </footer>
    )
}

export { Footer }