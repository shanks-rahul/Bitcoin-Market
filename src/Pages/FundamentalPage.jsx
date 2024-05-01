import { useDispatch, useSelector } from "react-redux";
import { AboutBitcoin } from "../Redux/slices/TrendingcoinSlice";
import { useEffect } from "react";
import { FaInfo } from "react-icons/fa";

function FundamentalPage() {
    const dispatch = useDispatch();
    const { AboutBTC } = useSelector((state) => state?.Trendingcoin);
    let num=AboutBTC.total_volume/AboutBTC.market_cap;
    async function load() {
        await dispatch(AboutBitcoin());
    }
    useEffect(() => {
        load();
    }, [])
    return (
        <div className="">

            <div>
                <div className="flex  flex-col space-y-4 space-x-4 w-[60vw]">
                    <h1 className="text-xl font-bold">Performance</h1>
                    <div className="flex items-center justify-around text-sm font-semibold">
                        <div className="flex flex-col">
                            <p>Today's Low</p>
                            <p>${AboutBTC.low_24h}</p>
                        </div>
                        <div className="h-[3px] w-[35rem] bg-gradient-to-r from-red-500 to-green-500"></div>
                        <div className="text-end">
                            <p>Todays's High</p>
                            <p>${AboutBTC.high_24h}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around text-sm font-semibold">
                        <div className="flex flex-col">
                            <p>52W  Low</p>
                            <p>${AboutBTC.low_24h}</p>
                        </div>
                        <div className="h-[3px] w-[35rem] bg-gradient-to-r text-start from-red-500 to-green-500"></div>
                        <div className="text-end">
                            <p>52W High</p>
                            <p>${AboutBTC.high_24h}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col space-y-4">
                <h1 className="text-xl font-bold flex items-center">Fundamentals <span><FaInfo className=" size-3 text-gray-600 rounded-full ml-2 bg-gray-300" /></span></h1>
                <div className="flex flex-wrap space-x-3 justify-around">
                    <div className="flex flex-col space-y-2 text-sm font-semibold w-[20rem]">
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">Bitcoin Price</p>
                            <p className="w-[40%] text-center">${AboutBTC.current_price}</p>
                        </div>
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">24h Low/24h High</p>
                            <p className="w-[40%] text-center">${AboutBTC.low_24h}/${AboutBTC.high_24h}</p>
                        </div>
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">7D Low/7D High</p>
                            <p className="w-[40%] text-center">${AboutBTC.low_24h}/${AboutBTC.high_24h}</p>
                        </div>
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">Trading Volume</p>
                            <p className="w-[40%] text-center">${AboutBTC.total_volume}</p>
                        </div>
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">Market Cap Rank</p>
                            <p className="w-[40%] text-center">#{AboutBTC.market_cap_rank}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 text-sm font-semibold w-[20rem]">
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">Market Cap</p>
                            <p className="w-[40%] text-center">${AboutBTC.market_cap}</p>
                        </div>
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">Market Cap Dominance</p>
                            <p className="w-[40%] text-center">10000</p>
                        </div>
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">Volume/Market Cap</p>
                            <p className="w-[40%] text-center">{num}</p>
                        </div>
                        <div className="flex border-b py-4 border-gray-400 justify-between">
                            <p className="text-gray-400">All Time High</p>
                            <p className="w-[40%] text-center">${AboutBTC.ath}</p>
                        </div>
                        <div className="flex border-b py-4  border-gray-400 justify-between">
                            <p className="text-gray-400">All Time Low</p>
                            <p className="w-[40%] text-center">${AboutBTC.atl}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FundamentalPage;