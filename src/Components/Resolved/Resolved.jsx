import React from "react";

const Resolved = ({ ticketClicked }) => {
  return (
    <div className="pt-10">
      <h1 className="text-2xl font-semibold text-[#34485A] ">Resolved Task</h1>
        {
            ticketClicked.map(elem =>  
            
                      <div className="bg-white p-4 mt-8 shadow-md rounded-sm">
        <div className="bg-[#F0FCF3] p-2 border border-green-300 rounded-lg">
          <h2 className="text-lg font-medium">{elem.title}</h2>
          <h3 className="pt-1 text-green-600">✅ Completed</h3>
          
        </div>
      </div>
             )
        }
    </div>
  );
};

export default Resolved;
