import { ScaleLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-340px)]">
            <ScaleLoader size={100} color="purple"></ScaleLoader>
        </div>
    );
};

export default Loader;