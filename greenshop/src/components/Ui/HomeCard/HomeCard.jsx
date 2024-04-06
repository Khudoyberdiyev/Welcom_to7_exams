import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ props }) => {
  return (
    <Link to={`/shop/${props.slug}`}>
      <div className="min-w-full border shadow-sm hover:shadow-lg rounded-md p-1 duration-200">
        <div className="w-full h-[300px] mb-3">
          <img
            src={props.image_url}
            alt="Plant image"
            className=" object-cover w-full h-full"
          />
        </div>
        <div className="px-4 pb-1">
          <h5 className="text-md text-[#3D3D3D]">{props.common_name}</h5>
          <p className="text-lg text-[#46A358] font-bold">{props.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;