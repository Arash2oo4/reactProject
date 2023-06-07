import React from "react";

const Card = ({title , description , addres , order}) => {
  return (
      <div className="flex justify-between items-center flex-wrap lg:gap-0 gap-10">
        <div className={`flex flex-col items-center justify-center lg:w-1/2 w-full 
        lg:order-${order}`}>
          <h1 className="lg:text-4xl text-gray-900 font-bold text-2xl ">{title}</h1>
          <p className="mt-4 text-xl md:px-20 text-gray-600">{description}</p>
        </div>
        <img className="lg:w-1/2 w-full" src={addres} alt="" />
      </div>
  );
};

export default Card;
