import { FaInfo } from "react-icons/fa6";
function TokenomicsPage() {
    return (
        <div className="w-[85vw] p-4 space-y-4">
            <h1 className="text-xl font-bold mb-3">Tokenomics</h1>
            <h1 className="text-md font-bold my-3 flex items-center">Initial Distribution <span><FaInfo className=" size-3 text-gray-600 rounded-full ml-2 bg-gray-300" /></span></h1>
            <div className="flex items-center space-x-4">
                <div className="w-32 h-32 rounded-full bg-white relative">
                    <div className="pie-chart absolute top-0 left-0"></div>
                </div>
                <div className="flex flex-col text-sm  text-black">
                    <div className="flex items-center space-x-2">
                        <p className="h-3 w-3 bg-orange-500 rounded-full"></p>
                        <p>Crowdsale Investors:80%</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="h-3 w-3 bg-green-500 rounded-full"></p>
                        <p>Foundation:20%</p>
                    </div>

                </div>

            </div>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ipsam soluta, ipsum asperiores nobis quo nulla cum voluptates deleniti expedita ad ullam quia nesciunt rem incidunt tenetur itaque iure. Assumenda amet ea harum, non vel dolorem esse consectetur sunt recusandae reprehenderit? Repellat recusandae dignissimos sed nesciunt. Deserunt labore itaque necessitatibus recusandae fugit dolore provident sed, molestias, cum nulla quis harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolor?</p>
        </div>
    )
}
export default TokenomicsPage;