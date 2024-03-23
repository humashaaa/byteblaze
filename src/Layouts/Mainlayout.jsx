import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Mainlayout = () => {
    return (
        <div>
            <div className="h-16"><Nav></Nav></div>
            {/* packet */}
            <div >
            <Outlet></Outlet>

            </div>
            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;