import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helpers/axiosInstance"

const initialState={
    TrendingCoins:[],
    AboutBTC:{},
}

export const getTrendingCoins=createAsyncThunk("/get/TrendingCoins",async()=>{
    try {
        const res=axiosInstance.get(`/search/trending?x_cg_demo_api_key=CG-PYacyvALmmAihBGmVhgN9G9d`);
        return (await res).data;
        
    } catch (error) {
        toast.error(error?.res?.data?.message);
    }
});
export const AboutBitcoin=createAsyncThunk("/get/About",async()=>{
    try {
        const res=axiosInstance.get("/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=CG-PYacyvALmmAihBGmVhgN9G9d");
        return(await res).data;
    } catch (error) {
        toast.error(error?.res?.data?.message);
    }
})

const TrendingcoinSlice=createSlice({
    name:"Trendingcoin",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getTrendingCoins.fulfilled,(state,action)=>{
           
            state.TrendingCoins=action.payload.coins.splice(0,3);
        })
        .addCase(AboutBitcoin.fulfilled,(state,action)=>{
           
            state.AboutBTC=action.payload[0];
        })
    }
})
export default TrendingcoinSlice.reducer;