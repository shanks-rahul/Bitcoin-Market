import axios from "axios";

const BASE_URL="https://api.coingecko.com/api/v3";
const axiosInstance=axios.create();
axiosInstance.defaults.baseURL=BASE_URL;
// axiosInstance.defaults.withCredentials=true;

export default axiosInstance;