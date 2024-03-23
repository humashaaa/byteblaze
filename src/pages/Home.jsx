import Hero from "../components/Hero";
import Wave from "../assets/wave.svg"

const Home = () => {
    return (
        <div className=" relative p-4 text-center min-h-[calc(100vh-260px)]">
            <Hero></Hero>
            <img className="absolute bottom-0 w-full right-0 left-0" src={Wave} alt="" />
        </div>
    );
};

export default Home;