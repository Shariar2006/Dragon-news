import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="  p-2">
                <h1 className=" text-xl font-semibold">Login With</h1>
                <button className="btn btn-outline my-2 w-full text-[#2d67cb]">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline my-2 w-full ">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className=" p-2">
                <h1 className=" text-xl font-semibold mb-2">Find Us On</h1>
                
                <a className='flex items-center border-2 rounded-t-lg text-lg gap-2 p-2' href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className='flex items-center border-x-2 text-lg gap-2 p-2' href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className='flex items-center border-2 rounded-b-lg text-lg gap-2 p-2' href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
                
            </div>
            <div className='bg-gray-200 mt-2'>
                <h1 className=' text-xl font-semibold  p-3'>Q-Zone</h1>
                <img className='mx-auto' src={qZone1} alt="" />
                <img className='mx-auto' src={qZone2} alt="" />
                <img className='mx-auto' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;