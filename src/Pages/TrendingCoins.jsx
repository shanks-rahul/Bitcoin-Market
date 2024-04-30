import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingCoins } from "../Redux/slices/TrendingcoinSlice";
import { FaArrowRight } from "react-icons/fa";

function TrendingCoin() {
    const dispatch = useDispatch();
    const TrendingCoins = useSelector((state) => state?.Trendingcoin?.TrendingCoins);
    async function load() {
        await dispatch(getTrendingCoins());
    }
    useEffect(() => {
        load();
        //console.log(TrendingCoins);
    }, [])
    return (
        <div className="flex flex-col space-y-2 w-[22rem]">
            <div className="flex flex-col items-center mt-4 bg-blue-600 rounded-md py-6 px-8">
                <p className="text-xl text-white font-bold ">Get Started with KOINX For</p>
                <p className="text-center text-xl text-white font-bold  ">FREE</p>
                <p className="px-10 text-sm mt-2 text-white font-semibold">with our range of features which you can equip for free,KoinX allow you to be more educated and aware of your tax reports</p>
                <img className="mt-2 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6T80zQEW54er2OW_YyCajLFPK-AtYWlzFMUgCW4TyAtIJ5e41H-ydo1YBV-CHNt3Yuc&usqp=CAU" alt="image" srcset="" />
                <button className="mt-2 rounded-md font-semibold bg-white flex items-center flex-nowrap justify-between text-black text-center px-3 py-2">Get Started for FREE <FaArrowRight className="ml-2" /></button>
            </div>
            <div className="flex flex-col justify-start space-y-2  rounded-md bg-white p-2">
                <div className="text-black font-bold text-xl">
                    Trending Coins (24h)
                </div>
                <div className="flex flex-col justify-start">
                    {TrendingCoins && TrendingCoins.map((item, idx) => {
                        return (
                            <li className="list-none space-x-2 mt-2 py-2 flex items-center" key={idx}>
                                <img className="h-[20px] w-[20px] rounded-[50%]" src={item.item.thumb} alt="thumbnail"></img>
                                <div className="flex justify-between items-center w-[13rem] flex-grow">
                                    <p className="font-semibold text-sm">{item.item.name}</p>
                                    <p className="bg-green-100 px-2 text-green-400 text-xs font-semibold">8.3%</p>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default TrendingCoin;

