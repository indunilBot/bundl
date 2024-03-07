import React from 'react'
import Header from "../Components/Header";
import bg2 from "../assets/bg2.jpg";
import midLogo from "../assets/midLogo.png";
function manage() {
  return (
    <div
      className="bg-[#000000] "
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center h-screen ">
        <div className="p-6 rounded-lg max shadow-lg max-w-[1200px] 	">
          <img
            src={midLogo}
            className="absolute  transform -translate-y-1/2 xl:right-160 xl:left-20  xl:w-24 w-12 h-auto "
            alt="Mid Logo"
          />
          <div className="font-teko text-white text-center xl:text-9xl xl:text-[170px] font-bold special:text-9xl uppercase">
            manage your
          </div>
          <div className="font-teko text-white text-center xl:text-9xl xl:text-[170px] font-bold special:text-9xl uppercase">
            project launch
          </div>

          <div className=" text-gray-500 text-center xl:text-md py-5 px-2 text-xs special:text-xl">
            Utilize our revolutionary tools like Spot Auction and Lottery tools
            to enhance your launch, improve fairness and increase supply
            distribution. Let Bundl help you ensure early blocks of your launch
            go to eager investors rather than malicious snipers.
          </div>
          <div className=" hidden md:flex  justify-center space-x-4 ">
            <button className=" bg-slate-800 hover:bg-[#6EFF8D] text-xs hover:text-black  text-white font-semibold py-3 px-12 rounded-full">
              Launch Bot
            </button>
            <button className="bg-[#6EFF8D] hover:bg-white text-xs  hover:text-black  text-black font-semibold py-3 px-12 rounded-full">
              How to Use
            </button>
            <button className=" bg-slate-800 hover:bg-[#6EFF8D] text-xs hover:text-black  text-white font-semibold py-3 px-20 rounded-full">
              App
            </button>
          </div>
          <div className="flex  flex-col justify-center space-y-4 visible xl:hidden ">
            <button className=" bg-slate-800 hover:bg-white text-xs hover:text-black  text-white font-semibold py-3 px-4 rounded-full">
              Launch Bot
            </button>
            <button className="bg-[#6EFF8D] hover:bg-white text-xs  hover:text-black  text-white font-semibold py-3 px-4 rounded-full">
              How to Use
            </button>
            <button className=" bg-slate-800 hover:bg-white text-xs hover:text-black  text-white font-semibold py-3 px-4 rounded-full">
              App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default manage