import Header from "./Header";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";


const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-3">
                    <h1>News coming soon...</h1>
                </div>
                <RightSideNav></RightSideNav>
            </div>

        </div>
    );
};

export default News;