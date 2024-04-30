import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTrendingCoinCard } from "../Redux/slices/TrendindCoinCard";
import { useEffect } from "react";
import SimpleCard from "../components/CoinCard";


function YouMayAlsoLike(){
    const dispatch=useDispatch();
    const {Cards}=useSelector((state)=>state?.TrendingCoinCard);
    const {CoinList}=useSelector((state)=>state?.TrendingCoinCard);
    
    async function load(){
        await dispatch(getTrendingCoinCard());
        await dispatch(getCoinList());
        
    }
    useEffect(()=>{
        load();
        
        
    },[]);
    const price=[];
    CoinList.map((item)=>{
        price.push(item.current_price);
    })

    return(
        <div className="flex flex-no-wrap w-[100vw] overflow-x-auto no-scrollbar items-start">
            {Cards && Cards.map((item)=>{
                return <SimpleCard data={item}></SimpleCard>       
                
            })}
        </div>
    )
}
export default YouMayAlsoLike;