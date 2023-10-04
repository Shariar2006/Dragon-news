/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news
    return (
        <div>
            <div className=" bg-base-100 shadow-xl mb-5">
                <h2 className="card-title p-2">{title}</h2>
                <figure><img src={image_url} /></figure>
                <div className="card-body">
                    {
                        details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id} ` } className="text-[#403F3F] font-semibold">Read More...</Link></p> :
                        <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;