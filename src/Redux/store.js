import { configureStore } from "@reduxjs/toolkit";
import TrendingCoinSliceReducer from "./slices/TrendingcoinSlice";
import TrendingCoinCardSliceReducer from "./slices/TrendindCoinCard";

const store=configureStore({
    reducer:{
        Trendingcoin:TrendingCoinSliceReducer,
        TrendingCoinCard:TrendingCoinCardSliceReducer,

    },
    devTools:true,
});
export default store;