import React, { use } from "react";
import Ticket from "./Ticket";
import Task_Status from "../Status/Task_Status";
import Resolved from "../Resolved/Resolved";




const Tickets = ({ ticketPromise,setTicketSelected,ticketData,setTicketData,ticketSelected,resolvedTickets,setResolvedTickets }) => {
  const ticketsData = use(ticketPromise);
//   console.log(ticketData);

  return (
    <div className="bg-[#F5F5F5]">
      <h1 className="max-w-[1440px] mx-auto font-semibold text-2xl pb-4 p-2.5 ">
        Customer Tickets
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto p-2.5  ">
        {/* Ticket */}
        <Ticket ticketsData={ticketsData} 
                 ticketData={ticketData}
                 setTicketData={setTicketData} 
                 ticketSelected={ticketSelected} 
                setTicketSelected={setTicketSelected}
   ></Ticket>

        <div className="grid col-span-1">
          <div>
            <Task_Status 
            
            ticketSelected={ticketSelected} 
             setTicketSelected={setTicketSelected}
            resolvedTickets={resolvedTickets} 
            setResolvedTickets={setResolvedTickets} 
            
            
            />
            <Resolved resolvedTickets={resolvedTickets}
              ticketSelected={ticketSelected}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
