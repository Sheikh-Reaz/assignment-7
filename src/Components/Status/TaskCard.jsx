import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';

const TaskCard = ({eachTicket,ticketClicked,setTicketClicked,count,setCount}) => {
    const [isVisible, setIsVisible] = useState(true);

    const btnClicked = () =>{
      toast('✅  Completed')
      // console.log(eachTicket);
      setTicketClicked([...ticketClicked,eachTicket])
      setIsVisible(false);
      setCount(count + 1);
    }
    if (!isVisible) return null;
    return (
    <div className="bg-white p-4 mt-8 shadow-md rounded-sm">
      <h2 className="text-lg font-medium">{eachTicket.title} </h2>
      <div className="flex justify-center pt-4">
        <button onClick={()=> btnClicked() } className="cursor-pointer bg-[#02A53B]  w-full py-2 font-semibold rounded-sm text-white">
          Complete
        </button>
      </div>
    </div>
    );
};

export default TaskCard;