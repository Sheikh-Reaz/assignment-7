import React from 'react';

const TaskCard = ({eachTicket,setTicketSelected,setResolvedTickets}) => {
    // console.log(eachTicket);
    const handleComplete = () => {
  // Remove from Task_Status
  setTicketSelected(prev => prev.filter(t => t.id !== eachTicket.id));

  // Add to Resolved
  setResolvedTickets(prev => [...prev, eachTicket]);
};
    
    return (
    <div className="bg-white p-4 mt-8 shadow-md rounded-sm">
      <h2 className="text-lg font-medium">{eachTicket.title} </h2>
      <div className="flex justify-center pt-4">
        <button onClick={handleComplete} className="bg-[#02A53B]  w-full py-2 font-semibold rounded-sm text-white">
          Complete
        </button>
      </div>
    </div>
    );
};

export default TaskCard;