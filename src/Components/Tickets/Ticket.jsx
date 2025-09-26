import React from 'react';
import TicketCard from './TicketCard';

const Ticket = ({ticketsData,setTicketSelected,ticketSelected,setTicketData}) => {



    return (
              <div   className=" grid grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-3  gap-8  "  >
        {ticketsData.map(ticket => (
            // console.log(ticket)
            <TicketCard setTicketData={setTicketData} 
            ticketSelected={ticketSelected} 
            setTicketSelected={setTicketSelected} 
            key={ticket.id} 
            ticket={ticket} ></TicketCard>
            
        ))}
      </div>
    );
};

export default Ticket;