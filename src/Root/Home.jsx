import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";
import Marquee from "react-fast-marquee";


const Home = () => {
    return (
        <div className="">
            <Header className="text-center"></Header>
            <div className="p-2 flex bg-gray-300 my-3">
                <button className="bg-[#d72050] px-5 py-2 text-white">Latest</button>
                <Marquee pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened           !           
                Match Highlights: Germany vs Spain as...                </Marquee>
            </div>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-3 ">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="col-span-2"><h1 className="text-xl font-semibold">New coming soon...</h1></div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;