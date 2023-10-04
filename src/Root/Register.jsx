/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        console.log(from)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-200 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center p-5">Register your account</h1>
            <hr />
            <div className=" ">

            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="font-semibold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-semibold">Photo URl</span>
                    </label>
                    <input type="text" name="photourl" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    
                </div>
                <div className="form-control mt-6">
                    <button className="text-xl font-medium bg-[#403F3F] text-white rounded-lg p-3">Register</button>
                </div>
            <p className="text-center mt-3">Don't Have An Account ? <Link to='/login' className="text-blue-500 underline">Login</Link></p>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Register;