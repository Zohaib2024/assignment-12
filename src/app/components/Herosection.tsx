import React from "react";

const Herosection = () => {
  return (
    <div className="bg-[#043873] w-screen h-[600px]  flex justify-center items-center">
      <div className="text-white grid grid-cols-2 ">
        <div className="flex flex-col items-start w-[550px] space-y-5 justify-center">
          <div>
            <h1 className="font-bold text-5xl">Get More Done with whitepace</h1>
          </div>
          <div>
            <p>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <button className="bg-[#4F9CF9] p-3">Try Whitespace free -</button>
        </div>
        <div className="bg-[#C4DEFD] w-[600px] h-[400px]">
          <h1 className="text-[#C4DEFD]">hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
