import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
   
    const [categories, setcategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setcategories(data))
    },[])


    return (
        <div className="space-y-4">
            <h1 className="text-xl font-semibold mb-2">All Caterogy</h1>
            {
                categories.map(categories => <Link to={`/categories/${categories.name}`} className="block text-gray-500 font-medium" key={categories.id}>{categories.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;