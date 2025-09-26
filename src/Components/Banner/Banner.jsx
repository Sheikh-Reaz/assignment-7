import React from "react";
import background from '../../assets/background.png';
import backgroundR from '../../assets/background-r.png';

const Banner = ({ticketSelected,resolvedTickets}) => {
  return (
    <div className="bg-[#F5F5F5] p-2 " >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] my-[50px] max-w-[1440px] mx-auto">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="rounded-md bg-cover bg-center  text-white h-[250px] flex flex-col items-center justify-center"
      >
        <h2 className="font-bold text-[35px]">In-Progress</h2>
        <p className="font-bold text-[40px]"> {ticketSelected.length} </p>
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundR})` }}
        className="rounded-md bg-cover bg-center  text-white h-[250px] flex flex-col items-center justify-center"
      >
        <h2 className="font-bold text-[35px]">Resolved</h2>
        <p className="font-bold text-[40px]">{resolvedTickets.length}</p>
      </div>

    </div>
    </div>

  );
};

export default Banner;
