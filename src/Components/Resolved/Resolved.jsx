import React from 'react';

const Resolved = ({resolvedTickets}) => {
    return (
        <div className="pt-10" >
            <h1 className="text-2xl font-semibold text-[#34485A] " >Resolved Task</h1>
            


        {resolvedTickets.length === 0 ? (
  <p className="text-[#627382] pt-4">No resolved tasks yet.</p>
) : (
  resolvedTickets.map(ticket => (
    <div key={ticket.id} className="bg-white p-4 mt-4 shadow-md rounded-sm">
      <h2 className="text-lg font-medium">{ticket.title}</h2>
      <p className="text-[#627382] pt-2">Resolved!</p>
    </div>
  ))
)}



        </div>
    );
};

export default Resolved;