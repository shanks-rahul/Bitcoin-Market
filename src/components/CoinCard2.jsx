import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function SimpleCard2({ data,graph }) {
    return (
        <div className="flex">
            <div className="bg-white rounded-3xl border-[1px] border-black shadow-xl p-8 m-2 w-[10.4rem] h-[10rem]">
                <div className="flex">
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-[50%] text-blue-100 bg-gradient-to-r">
                        <img className="text-xs" src={data.image} alt="" />
                        <span className=" ml-1 font-medium text-xs text-gray-500 flex justify-end">{data.name}</span>
                    </button>
                </div>
                <div className="flex flex-col items-start p-4">
                    <h3 className="font-semibold text-sm mb-2 text-gray-800">${data.current_price}</h3>
                    <img src={graph} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SimpleCard2;