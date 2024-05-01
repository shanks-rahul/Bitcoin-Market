import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TrendingCoin from "../Pages/TrendingCoins";
import TradeChart from "../Pages/TradeChart";
import SimpleCard from "../components/CoinCard";
import YouMayAlsoLike from "../Pages/YouMayAlsoLike";
import TrendingSlide from "../Pages/TrendingSlide";
import AboutSection from "../Pages/AboutSection";
import FundamentalPage from "../Pages/FundamentalPage";
import SentimentsPage from "../Pages/SentimentsPage";
import { FaChevronRight, FaInfo } from "react-icons/fa6";
import TokenomicsPage from "../Pages/TokenomicsPage";
import TeamPage from "../Pages/TeamPage";


function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex text-black items-center hover:text-blue-500 transition-colors">
                    Crypto Taxes
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex text-black items-center hover:text-blue-500 transition-colors">
                    Resource Center
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex text-black items-center hover:text-blue-500 transition-colors">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="text-white px-2 py-3 rounded bg-blue-500 flex items-center hover:bg-blue-600 transition-colors">
                    Get Started
                </a>
            </Typography>
        </ul>
    );
}


function HomeLayout() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <div className="mx-auto px-6 w-[100vw] border-2 border-b-slate-400 ">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4  p-1 cursor-pointer text-black"
                    >
                        <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="" />
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-black mt-[-9px] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </div>

            <div className="bg-slate-100 w-[99.9vw] mb-2">
                <h1 className="p-4 flex items-center">Cryptocurrencies <span className="flex items-center"><FaChevronRight /><FaChevronRight className="ml-[-0.6rem]" /></span> <span className="font-semibold">Bitcoin</span></h1>
                <div className="bg-slate-100 w-[98.9vw]">
                    <div className="flex flex-wrap items-center justify-around">
                        <TradeChart />
                        <TrendingCoin />
                    </div>
                </div>
                <div className="bg-white p-4 flex w-[89vw] items-center m-auto mt-2 overflow-x-auto no-scrollbar">
                    <ul className="flex space-x-8 border-b-2 border-gray-400">
                        <li className=" hover:border-b-[3px] cursor-pointer border-blue-400 hover:text-blue-400">Overview</li>
                        <li className=" hover:border-b-[3px] cursor-pointer border-blue-400 hover:text-blue-400">Fundamentals</li>
                        <li className=" hover:border-b-[3px] cursor-pointer border-blue-400 hover:text-blue-400">News Insights</li>
                        <li className=" hover:border-b-[3px] cursor-pointer border-blue-400 hover:text-blue-400">Team</li>
                        <li className=" hover:border-b-[3px] cursor-pointer border-blue-400 hover:text-blue-400">Technicals</li>
                        <li className=" hover:border-b-[3px] cursor-pointer border-blue-400 hover:text-blue-400">Sentiments</li>
                        <li className=" hover:border-b-[3px] cursor-pointer border-blue-400 hover:text-blue-400">Tokenomics</li>
                    </ul>
                </div>
                <div className="bg-white p-4 flex w-[89vw] items-center mx-auto ">
                    <FundamentalPage />
                </div>
                <div className="bg-white p-4 w-[89vw] flex mx-auto flex-col items-start mt-2">
                    <h1 className="text-xl font-bold mb-3">Sentiment</h1>
                    <h1 className="text-md font-bold flex items-center ">Key Events <span><FaInfo className=" size-3 text-gray-600 rounded-full ml-2 bg-gray-300" /></span></h1>
                </div>
                <div className="bg-white p-4 w-[89vw] flex flex-col items-start mx-auto overflow-x-auto no-scrollbar">

                    <SentimentsPage />
                </div>
                <div className="bg-white p-4 flex w-[89vw] items-center mx-auto ">
                <div className="w-[85vw] p-4 ">
                    <h1 className="text-md font-bold my-3 flex items-center">Analyst Estimates <span><FaInfo className=" size-3 text-gray-600 rounded-full ml-2 bg-gray-300" /></span></h1>
                    <div className="flex items-center space-x-4">
                        <h1 className="text-3xl text-green-500 bg-green-100 h-[8rem] w-[8rem] rounded-[50%] flex items-center justify-center">76%</h1>
                        <div className="flex flex-col text-sm font-semibold text-gray-400">
                            <div className="flex items-center space-x-2">
                                <p>buy</p>
                                <div className="h-[3px] w-[20vw] bg-gradient-to-r text-start from-green-500 to-green-500"></div>
                                <p>76%</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <p>hold</p>
                                <div className="h-[3px] w-[5vw] bg-gradient-to-r text-start from-gray-400 to-gray-400"></div>
                                <p>8%</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <p>sell</p>
                                <div className="h-[3px] w-[8vw] bg-gradient-to-r text-start from-red-500 to-red-500"></div>
                                <p>16%</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                </div>
                

                <div className="bg-white m-auto w-[89vw] flex items-center overflow-x-auto no-scrollbar p-2 mt-[2rem]">

                    <AboutSection />
                </div>
                
                <div className="bg-white m-auto w-[89vw] flex items-center overflow-x-auto no-scrollbar p-2 mt-[2rem]">

                    <TokenomicsPage />
                </div>
                <div className="bg-white p-4 flex w-[89vw] items-center mx-auto mt-2 ">
                    <TeamPage />
                </div>
                <div>

                    <p className="text-xl font-bold p-4 ">You May Also Like</p>
                    <TrendingSlide />
                </div>

                <div>

                    <p className="text-xl font-bold p-4 ">Trending Coins</p>
                    <YouMayAlsoLike />
                </div>

            </div>
        </>
    );
}
export default HomeLayout;