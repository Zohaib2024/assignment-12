import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" text-white  bg-[#043873] w-screen">
      <div className="grid grid-cols-2 px-5 py-2 items-center  lg:ml-20 lg:mr-20 ">
        <div>
          <Image
            className="w-[191px]"
            src="/Logo.png"
            width={191}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="flex justify-between gap-2  lg:gap-6 items-center ">
          <div className="list-none flex justify-around gap-2 text-[18px] lg:gap-10 flex-row">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </div>
          <div className="bg-[#FFE492] rounded-xl ">
            <button className="h-[60px] w-[126px] text-black text-[18px] ">
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
