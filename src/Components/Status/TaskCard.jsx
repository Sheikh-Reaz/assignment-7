import React from 'react';

const TaskCard = ({eachTicket}) => {
    // console.log(eachTicket);
    
    return (
    <div className="bg-white p-4 mt-8 shadow-md rounded-sm">
      <h2 className="text-lg font-medium">{eachTicket.title} </h2>
      <div className="flex justify-center pt-4">
        <button className="bg-[#02A53B]  w-full py-2 font-semibold rounded-sm text-white">
          Complete
        </button>
      </div>
    </div>
    );
};

export default TaskCard;