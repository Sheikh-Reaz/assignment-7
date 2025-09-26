import React from 'react';

const TicketCard = ({ticket,ticketSelected,setTicketSelected}) => {

    
 const handleClicked = () =>{
    setTicketSelected([...ticketSelected,ticket]);

    

    
 }
    return (
<div onClick={ ()=> handleClicked() } >
              <div className=" p-5  rounded-sm shadow-md bg-white ">
            <div className="flex justify-between pb-2 ">
              <h1 className="text-2xl font-medium text-[#001931] ">
                {ticket.title}
              </h1>
              <span
                className={`rounded-2xl px-2 py-1  ${
                  ticket.status === "Open"
                    ? "bg-[#B9F8CF] text-[#02A53B] "
                    : ticket.status === "In Progress"
                    ? "bg-[#F8F3B9] text-yellow-500"
                    : ""
                }    `}
              >
                <i class="fa-solid fa-circle"></i> {ticket.status}
              </span>
            </div>
            <div>
              <p className=" text-[#627382] ">{ticket.description}</p>
            </div>
            <div className="flex justify-between pt-2 ">
              <div className="flex justify-between gap-2 ">
                <p># {ticket.id}</p>
                <p className={`${ticket.priority === 'High'? "text-red-500" : ticket.priority == 'Medium'? "text-[#F3BF0C]" : "text-green-600" }`} > {ticket.priority} </p>
              </div>
              <div className="flex justify-between gap-2 ">
                <p>{ticket.customer}</p>
                <p>
                  <i class="fa-regular fa-calendar-days"></i>
                  {ticket.createdAt}
                </p>
              </div>
            </div>
          </div>
</div>
    );
};

export default TicketCard;