import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";


const Home = () => {
    return (
        <div className="">
            <Header className="text-center"></Header>
            <Navbar></Navbar>
            <h1 className=" font-bold text-2xl">This is home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center ">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="col-span-2"><h1 className="text-xl font-semibold">New coming soon...</h1></div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;