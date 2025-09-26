import React from 'react';
import TicketCard from './TicketCard';

const Ticket = ({ticketData,setTicketSelected,ticketSelected}) => {



    return (
              <div   className=" grid grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-3  gap-8  "  >
        {ticketData.map((ticket) => (
            // console.log(ticket)
            <TicketCard ticketSelected={ticketSelected} setTicketSelected={setTicketSelected} key={ticket.id} ticket={ticket} ></TicketCard>
            
        ))}
      </div>
    );
};

export default Ticket;