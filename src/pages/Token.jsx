import bg3 from "../assets/bg3.jpg";
import Chart from "../assets/Chart.png";
import Sale from "../assets/Sale.png";
import wallet from "../assets/wallet.png";
import Footer from "../Components/footer";

function Token() {
  return (
    <div
      className="bg-[#000000]"
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center xl:h-screen">
        <div className="font-teko p-6 rounded-lg max shadow-lg max-w-[1200px]	 ">
          <div className="text-white text-center xl:text-[160px] font-bold special:text-9xl uppercase ">
            $BUNDL
          </div>

          <div className="text-white text-center xl:text-[160px] font-bold special:text-9xl uppercase">
            T*ken
          </div>

          
          

          {/* new */}
          <div className="flex justify-center gap-2 items-stretch ">

              {/* left */}
                <div className="w-1/2 flex items-center justify-center flex-col gap-2 h-full"> 

                  <div className="flex w-full p-3 backdrop-blur-sm bg-white/15 rounded-2xl mx-36">

                    <img src={wallet} className="w-12 h-12  my-3" />
                    <div className="pl-5 pr-12 py-2 ">
                      <div className="text-white  xl:text-2xl text-md font-light  ">
                        // Tax
                      </div>
                      <div className=" text-white xl:text-sm text-md font-semibold py-3">
                        Buy 5% / Sell 5%
                      </div>
                    </div>
                  
                  </div>


                  <div className="flex w-full p-3 backdrop-blur-sm bg-white/15 rounded-2xl ">

                    <img src={Chart} className="w-12 h-12  my-3" />
                    <div className="pl-5 pr-12 py-2 ">
                      <div className="text-white  xl:text-2xl text-md font-light  ">
                      // Revenue Share
                      </div>
                      <div className=" text-white xl:text-sm text-md font-semibold py-3">
                      Service fees for each token launched on Ethereum through the Bundl platform include a flat rate of 0.2 ETH and 0.5 of the token's total supply.
                      </div>
                    </div>
                  
                  </div>

                </div>

                {/* right */}
                <div className="w-1/2 p-3 backdrop-blur-sm bg-white/15 rounded-2xl h-full">
                <img src={Sale} className="w-12 h-12  my-3" />
                    <div className="pl-5 pr-12 py-2 ">
                      <div className="text-white  xl:text-2xl text-md font-light  ">
                        // Service Fees
                      </div>
                      <div className=" text-white xl:text-sm text-md font-semibold py-3">
                      75% of the ETH collected from our service fees are
                      allocated to a revenue-sharing pool for Bundl holders. The
                      0.5% of token supply from Bundl launches is dedicated to
                      supporting airdrop campaigns and marketing activities,
                      benefiting both Bundl and the individual token launched on
                      the platform.
                      </div>
                    </div>                  
                
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Token