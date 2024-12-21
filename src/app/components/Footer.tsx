import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#043873] h-[400px]  w-screen">
      <div className=" pt-[100px]">
        <div className=" flex  w-screen h-[300px]  text-[16px]  text-white justify-center items-center">
          <div className=" flex flex-col gap-24 ">
            <div className="grid grid-cols-4 gap-20 ">
              <div className="w-[295px] space-y-5">
                <Image
                  className="w-[191px]"
                  src="/Logo.png"
                  width={191}
                  height={500}
                  alt="Picture of the author"
                />
                <p>
                  whitepace was created for the new ways we live and work. We
                  make a better workspace around the world
                </p>
              </div>
              <div className="space-y-1">
                <h1 className="font-bold">Product</h1>
                <ul>Overview</ul>
                <ul>Pricing</ul>
                <ul>Customer stories</ul>
              </div>
              <div className="space-y-1">
                <h1 className="font-bold">Resources</h1>
                <ul>Blog</ul>
                <ul>Guides & Tutorials</ul>
                <ul>Help center</ul>
              </div>
              <div className="space-y-1">
                <h1 className="font-bold">Company</h1>
                <ul>About us</ul>
                <ul>Careers</ul>
                <ul>Media Kit</ul>
              </div>
            </div>
            <div>
              <hr className="bg-gray-800 " />
              <div className=" text-white flex  mt-3 justify-center">
                <p>©2021 Whitepace LLC.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
