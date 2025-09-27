import React from "react";
import TaskCard from "./TaskCard";


const Task_Status = ({ticketSelected,ticketClicked,setTicketClicked,count,setCount }) => {

    //  console.log(ticketSelected);
     
  return (
    
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-[#34485A] ">Task Status</h1>
        <p className="text-[#627382] pt-4">
          Select a ticket to add to Task Status
        </p>
      </div>

<div>
    {
       ticketSelected.map((eachTicket) => <TaskCard 
                 count={count}
        setCount={setCount}
         ticketClicked={ticketClicked}
        setTicketClicked={setTicketClicked}
       eachTicket={eachTicket} ></TaskCard> )
    }
</div>
    </div>
  );
};

export default Task_Status;
