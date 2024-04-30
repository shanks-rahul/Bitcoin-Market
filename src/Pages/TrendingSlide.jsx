import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTrendingCoinCard } from "../Redux/slices/TrendindCoinCard";
import { useEffect } from "react";
import SimpleCard from "../components/CoinCard";
import { getTrendingCoins } from "../Redux/slices/TrendingcoinSlice";
import { useLocation } from "react-router-dom";
import SimpleCard2 from "../components/CoinCard2";

function TrendingSlide(){
    const dispatch=useDispatch();
    const {Cards}=useSelector((state)=>state?.TrendingCoinCard);
    const {CoinList}=useSelector((state)=>state?.TrendingCoinCard);
    
    async function load(){
        await dispatch(getTrendingCoinCard());
        await dispatch(getCoinList());
        
    }
    useEffect(()=>{
        load();
        // console.log(Cards);
        // console.log(CoinList);
        
    },[]);
    const SparkLine=[];
    Cards.forEach((item)=>{
        SparkLine.push(item.item.data.sparkline);
    })

    return(
        <div className="flex flex-no-wrap w-[100vw] overflow-x-scroll no-scrollbar items-start">
            {CoinList && CoinList.map((item,idx)=>{
                if(idx<15){
                    return <SimpleCard2  graph={SparkLine[idx]} data={item}></SimpleCard2>  
                }     
                
            })}
        </div>
    )
}
export default TrendingSlide;