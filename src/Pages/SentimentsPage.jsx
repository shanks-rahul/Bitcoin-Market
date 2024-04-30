import { FaChartSimple,FaInfo } from "react-icons/fa6";

const Card = () => {
    return (
        <div className="flex space-x-4 p-4 border-2 rounded-lg bg-green-400">
            <FaChartSimple className="w-12 h-12" />
            <div>
                <h1 className="text-lg font-bold text-white">Lorem ipsum consectetur adipisicing elit. Facere, culpa.</h1>
                <p className="mt-2 w-64 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea

                </p>
            </div>
        </div>
    );
};

const SentimentsPage = () => {
    return (
        <>
            <div className="flex flex-col">

                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <Card key={index} />
                    ))}
                </div>
            </div>
            
            
        </>
    );
};

export default SentimentsPage;