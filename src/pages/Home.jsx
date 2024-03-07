import React from 'react'
import Header from '../Components/Header';
import bg1 from "../assets/bg1.jpg";
import midLogo from "../assets/midLogo.png";
import flowlogo from "../assets/flowlogo.png";
import time from "../assets/time.gif";

function Home() {
    return (
      <div
        className="bg-[#000000]"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <div className="flex justify-center items-center h-screen ">
          <div className="p-6 rounded-lg max shadow-lg max-w-3xl	">
            <div className="text-white justify-start flex items-start text-md font-light special:text-5xl text-center md:text-start xl:text-2xl"
  >
              {" "}
              // Revolutionizing
            </div>
            <img
              src={time}
              className="absolute  xl:left-[700px] xl:top-[270px] left-[100px] top-[310px]  "
              alt="Mid Logo"
            />
            <div className=" text-white  xl:text-9xl text-6xl  font-bold special:text-9xl relative">
              <div className="text-center xl:text-start">Project</div>
              <div className="text-center">Development</div>
              {/* Project Development */}
              <img
                src={midLogo}
                className="absolute xl:top-3/4  top-[10px] transform -translate-y-1/2 right-0 xl:w-24 w-12 h-auto"
                alt="Mid Logo"
              />
            </div>
            <div className="flex">
              <div>
                <img
                  src={flowlogo}
                  alt="Mid Logo"
                  className=" xl:w-60 xl:my-3 w-80  my-10"
                />
              </div>

              <div className=" text-gray-500 xl:text-md py-5 px-2  special:text-xl">
                Bundl is providing the first ever ecosystem that streamlines
                your project deployment with a user-friendly interface and
                versatile tools, featuring Advanced Smart Contract Creation,
                Bundling, Spot Auctioning and Spot Lottery.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home 