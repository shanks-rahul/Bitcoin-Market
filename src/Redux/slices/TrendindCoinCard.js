import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helpers/axiosInstance"

const initialState={
    Cards:[],
    CoinList:[]
}

export const getTrendingCoinCard=createAsyncThunk("/get/TrendingCoinCard",async()=>{
    try {
        const res=axiosInstance.get(`/search/trending?x_cg_demo_api_key=CG-PYacyvALmmAihBGmVhgN9G9d`);
        return (await res).data;
    } catch (error) {
        toast.error(error?.res?.data?.message);
    }
});

export const getCoinList=createAsyncThunk("/get/CoinList",async()=>{
    try {
        const res=axiosInstance.get("/coins/markets?vs_currency=usd&sparkline=true&x_cg_demo_api_key=CG-PYacyvALmmAihBGmVhgN9G9d");
        return (await res).data;
    } catch (error) {
        toast.error(error?.res?.data?.message);
    }
})

const TrendingCoinCardSlice=createSlice({
    name:"TrendingCoinCard",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getTrendingCoinCard.fulfilled,(state,action)=>{
            state.Cards=action?.payload?.coins;
        })
        .addCase(getCoinList.fulfilled,(state,action)=>{
            state.CoinList=action?.payload.splice(0,15);
        })
    }
})
export default TrendingCoinCardSlice.reducer;