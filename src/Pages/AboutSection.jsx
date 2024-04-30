import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AboutBitcoin } from "../Redux/slices/TrendingcoinSlice";

import { FaArrowRight } from "react-icons/fa";
function AboutSection() {
    const dispatch = useDispatch();
    const { AboutBTC } = useSelector((state) => state?.Trendingcoin);
    async function load() {
        await dispatch(AboutBitcoin());
    }
    useEffect(() => {
        load();
        
    }, [])
    return (
        <div className="flex flex-col text-start space-y-2 p-4 ">
            <h1 className="text-start font-bold text-xl">About Bitcoin</h1>
            <div className="mt-4 border-b-2">
                <h1 className="font-bold text-md mt-2">What is Bitcoin?</h1>
                <p className="border-b-0 py-3">Bitcoin's Price today is ${AboutBTC.current_price} with a 24h trading volume of {AboutBTC.total_volume / 1000000000}B BTC is +0.36% in last 24 hrs.It is currently -7.70% from its 7 day all time high of $1848944 and its 7 day all time low of $184647.BTC has circulating supply of {AboutBTC.circulating_supply/1000000}M BTC and max Supply of {AboutBTC.max_supply/1000000}M BTC.</p>
            </div>
            <div className="mt-4 border-b-2">
                <h1 className="font-bold text-md mt-2">Lorem ipsum dolor sit.</h1>
                <p className="border-b-0 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint recusandae numquam distinctio consectetur voluptate, deleniti mollitia reiciendis, quidem, tenetur aut? Distinctio nostrum, id perferendis maiores reiciendis at tenetur voluptatum maxime voluptatem officia consectetur amet accusantium, ea inventore sint sequi eligendi possimus eum. Numquam quibusdam.</p>
                <p className="border-b-0 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint recusandae numquam distinctio consectetur voluptate, deleniti mollitia reiciendis, quidem, tenetur aut? Distinctio nostrum, id perferendis maiores reiciendis at tenetur voluptatum maxime voluptatem officia consectetur amet accusantium, ea inventore sint sequi eligendi possimus eum. Numquam quibusdam.</p>
                <p className="border-b-0 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint recusandae numquam distinctio consectetur voluptate, deleniti mollitia reiciendis, quidem, tenetur aut? Distinctio nostrum, id perferem.</p>
            </div>
            <h1 className="text-start font-bold text-xl">Already having Bitcoin</h1>
            <div className="mt-4 border-b-2">
                {/* card start*/}

                <div className="flex flex-wrap space-x-2 justify-center">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 flex rounded-3xl shadow-xl p-8 w-[22rem] h-[11rem]">
                        <img className="rounded-md w-[10rem] h-[7rem]" src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600" alt="thubmnail" />
                        <div className="flex flex-col items-start p-4">
                            <h3 className="font-bold text-lg mb-2 text-white">Calculate your profits</h3>
                            <button className="bg-white text-sm font-semibold text-black px-4 py-2 rounded-lg flex justify-center items-center">Check Now <span className="ml-2"><FaArrowRight /></span></button>
                        </div>

                    </div>
                    <div className=" bg-gradient-to-r from-orange-400 to-orange-500 flex rounded-3xl shadow-xl p-8 w-[22rem] h-[11rem] ">
                        <img className="rounded-md w-[10rem] h-[7rem]" src="https://images.pexels.com/photos/6801869/pexels-photo-6801869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="thubmnail" />
                        <div className="flex flex-col items-start p-4">
                            <h3 className="font-bold text-lg bg- mb-2 text-white">Calculate your Tax Liability</h3>
                            <div>
                                <button className="bg-white text-sm font-semibold text-black px-4 py-2 rounded-lg flex justify-center items-center">Check Now <span className="ml-2"><FaArrowRight /></span></button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* card end */}
                <p className="border-b-0 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus quibusdam fuga eos voluptates iusto eum dicta quod. Neque nesciunt eveniet magnam quae nulla exercitationem voluptate maxime quam sint aspernatur. Exercitationem quo tenetur aperiam, culpa, minus, alias fuga iusto odit impedit expedita distinctio dicta nihil commodi cupiditate unde temporibus ipsum aut neque eveniet! Dolore tenetur neque, assumenda dolores ipsa quis.</p>
            </div>

        </div>
    )

}
export default AboutSection;