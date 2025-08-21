import Logo from "@/shared/assets/icons/Logo (3).svg";
import { CustomLink } from "@/shared/ui/custom-link";
import { useNavigate } from "react-router-dom";
import Instagram from "@/shared/assets/icons/Group 888.svg";
import IN from '@/shared/assets/icons/Path 7.svg';
import Facebook from '@/shared/assets/icons/Path 13.svg';
import Twitter from '@/shared/assets/icons/Path 6.svg';
import Star from '@/shared/assets/icons/Vector (17).svg';
import Rating from '@/shared/assets/icons/star.svg';
import Food from '@/shared/assets/images/Hero (1).svg';
import BG from '@/shared/assets/images/BG (1).svg';
import Mobile from '@/shared/assets/images/Mobile.svg';
import Arrow from '@/shared/assets/images/Arrow (1).svg';
import Spiral from '@/shared/assets/images/Vector 14.svg';
import { ReastaurantCard } from "@/widgets/ReastaurantCard";
import { ProductCard } from "@/widgets/ProductCard";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center">
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

      <div className="flex px-24 py-[119px] gap-x-[37px]">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <span className="border border-[#201F1F] w-5 h-px"></span>
            <p className="font-semibold text-[15px] text-[#201F1F33]">OVER 1000 USERS</p>
          </div>

          <div className="flex flex-col pt-4">
            <h1 className="text-[75px] w-[567px] font-semibold">Enjoy Foods All Over The <span className="text-[#5C4EAE]">World</span></h1>
            <p className="w-[420px] text-lg font-medium text-[#676767]">EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a<span className="font-normal text-lg text-[#6155AE] pl-1">$20 bonus</span></p>
          </div>

          <div className="flex items-center mt-[53px]">
            <button className="py-[17px] px-[26px] text-lg font-medium bg-[#6C5FBC] rounded-2xl text-white cursor-pointer">
              Get Started
            </button>
            <button className="py-[17px] px-[30px] text-lg font-medium bg-white rounded-2xl border-[#6C5FBC] border-1 text-[#6C5FBC] ml-[18px] cursor-pointer">
              Go pro
            </button>
          </div>

          <div className="flex items-center mt-[33px]">
            <img src={Star} alt="star" />
            <p className="font-bold text-lg ml-[2px]">Trustpilot</p>
            <img src={Rating} alt="rating" className="ml-5 mr-2.5" />
            <p className="font-medium text-[16px] text-[#334155]">4900+</p>
          </div>
        </div>

        <div>
          <img src={Food} alt="food" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-[85px] mb-[150px]">
        <img className="w-full absolute" src={BG} alt="bg" />

        <div className="relative text-white flex justify-center items-center gap-x-[132px]">
          <div className="flex flex-col border-r-[1px] border-r-[#C5C5C5] pr-[65px]">
            <h1 className="font-bold text-[42px] text-center">10K+</h1>
            <p className="text-[#C5BFED] text-sm font-medium flex-wrap text-center">Satisfied Costumers</p>
            <p className="text-[#C5BFED] text-sm font-medium flex-wrap">All Great Over The World</p>
          </div>
          <div className="flex flex-col border-r-[1px] border-r-[#C5C5C5] pr-[65px]">
            <h1 className="font-bold text-[42px] text-center">4M</h1>
            <p className="text-[#CBD5E1] text-sm font-medium flex-wrap text-center">Satisfied Costumers</p>
            <p className="text-[#CBD5E1] text-sm font-medium flex-wrap">All Great Over The World</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[42px] text-center">99.99%</h1>
            <p className="text-[#CBD5E1] text-sm font-medium flex-wrap text-center">Satisfied Costumers</p>
            <p className="text-[#CBD5E1] text-sm font-medium flex-wrap">All Great Over The World</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center gap-x-[219px] ml-24 mr-20 border-b-[1px] border-b-gray-900 pb-[120px]">
        <img src={Mobile} alt="mobile" />

        <div className="flex flex-col">
          <div>
            <h1 className="text-bold text-[75px] w-[559px]">Premium <span className="text-[#6C5FBC]">Quality</span> For Your Health</h1>
          </div>

          <div className="flex items-start mb-7 mt-16">
            <span className="mt-3 w-2 h-2 mr-3 rounded-full bg-gray-800"></span>
            <p className="text-[20px] w-[470px] font-normal text-[#676767]"> Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
          </div>
          <div className="flex items-start">
            <span className="mt-3 w-2 h-2 mr-3 rounded-full bg-gray-800"></span>
            <p className="text-[20px] w-[500px] font-normal text-[#676767]">These foods promote overall wellness by support healthy digestion and boosting immunity</p>
          </div>
          <div className="flex mt-[66px]">
            <button className="px-[26px] flex gap-x-3.5 text-lg font-medium cursor-pointer py-5 text-center text-white bg-[#6C5FBC] rounded-2xl">
              <p>Download</p>
              <img src={Arrow} alt="arrow" />
            </button>
          </div>
          <div className="ml-[150px]">
            <img src={Spiral} alt="spiralArrow" />
          </div>
        </div>
      </div>

      <div className="flex justify-center ml-24 mr-20 flex-col mt-[100px] border-b-[1px] border-b-gray-900 pb-[120px]">
        <h1 className="text-[45px] font-semibold mb-[85px] text-center">Our Top <span className="text-[#6C5FBC]">Restaurants</span></h1>
        <div className="flex gap-x-[30px]">
          <ReastaurantCard />
          <ReastaurantCard />
          <ReastaurantCard />
        </div>
        <div className="text-end pt-[65px] pr-[200px] text-[20px] font-medium text-[#ACADB9]">
          <p className="inline cursor-pointer">View All</p>
        </div>
      </div>

      <div className="flex justify-center ml-24 mr-20 flex-col mt-[100px] border-b-[1px] border-b-gray-900 pb-[120px]">
        <h1 className="text-[45px] font-semibold mb-[85px] text-center">Our Top <span className="text-[#6C5FBC]">Dishes</span></h1>
        <div className="flex gap-x-[30px]">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        <div className="text-end pt-[65px] pr-[200px] text-[20px] font-medium text-[#ACADB9]">
          <p className="inline cursor-pointer">View All</p>
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>

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
            <img src={Instagram} alt="instagram" className="cursor-pointer" />
            <img src={IN} alt="IN" className="cursor-pointer" />
            <img src={Facebook} alt="facebook" className="cursor-pointer" />
            <img src={Twitter} alt="twitter" className="cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export { Main }