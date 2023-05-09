import logo from "./assets/logo.png";
import frame from "./assets/frame.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className=" bg-slate-950 text-white pb-[100px]">
      <div className="bg-[url('./assets/bg.png')] bg-no-repeat bg-center bg-fill h-[100vh] text-white p-[40px] px-[100px] w-full">
        <div className=" flex justify-between w-full">
          <div className=" flex align-middle gap-4">
            <img src={logo} alt="" className=" w-8 h-8" />
            <h1>NFTs</h1>
          </div>
          <div className=" flex gap-[130px] items-center">
            <div className=" flex gap-12">
              <a href="#">Home</a>
              <a href="#">Market</a>
              <a href="#">Artists</a>
              <a href="#">Community</a>
              <a href="#">Wallet</a>
            </div>
            <div className=" flex gap-6 items-center">
              <a href="#">Login</a>
              <a
                href="#"
                className=" bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] py-3 px-6"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className=" mt-[30px]">
          <h1 className=" w-[450px] h-[240px] font-[700] text-[54px]">
            Discover, Collect and Sell Dope NFTs
          </h1>
          <p className=" mt-8 w-[526px]">
            Lorem ipsum dolor sit amet, consectetur adipisc elit amet.
            Consectetu at it lrorem ipsum dolor sit amet.
          </p>
          <div className=" mt-[40px] flex gap-5 mb-4">
            <a
              href="#"
              className=" bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] py-3 px-6"
            >
              Explore
            </a>
            <div class=" w-[116px] h-[53px] bg-gradient-to-r from-[#6578DD] via-[#B35BC7] to-[#DC1DC4] p-1 cursor-pointer">
              <div class="flex w-full h-full bg-slate-900 items-center justify-center">
                <h1 class=" text-base text-white">Create</h1>
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center w-[500px] h-[100px] bg-[rgba(255,255,255,0.1)] px-12">
            <div>
              <h1 className=" font-[700] text-4xl">80K+</h1>
              <p className=" font-[400] text-base">Active user</p>
            </div>
            <div>
              <div className=" font-[700] text-4xl">27K+</div>
              <p className=" font-[400] text-base">Artworks</p>
            </div>
            <div>
              <h1 className=" font-[700] text-4xl">3.5K+</h1>
              <p className=" font-[400] text-base">Artists</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-[124px] px-[100px]">
        <img src={frame} alt="" />
      </div>
      <div className=" px-[100px] flex items-center">
        <div>
          <h1 className=" text-5xl font-bold mb-[20px]">How it Works</h1>
          <p className=" w-[386px] text-base font-normal mb-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet. Lorem
            ipsum dolor sit amet, consecte adipiscing elit ipsum.
          </p>
          <a
            href="#"
            className=" bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] py-3 px-6"
          >
            Learn More
          </a>
        </div>
        <div className=" grid grid-cols-2 gap-8">
          <div className=" bg-gradient-to-r from-[#7472D9] via-[#A560CB] to-slate-950 p-1 h-full w-full">
            <div className=" h-full w-full bg-slate-950 p-8">
              <div className=" bg-[rgba(255,255,255,0.12)] w-[60px] h-[60px] flex justify-center items-center rounded mb-[38px]">
                <img src={icon1} alt="" />
              </div>
              <h1 className=" font-bold text-2xl">Set up Your Wallet</h1>
              <p className=" text-[14px] mt-4">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-[#7472D9] via-[#A560CB] to-slate-950 p-1 h-full w-full">
            <div className=" h-full w-full bg-slate-950 p-8">
              <div className=" bg-[rgba(255,255,255,0.12)] w-[60px] h-[60px] flex justify-center items-center rounded mb-[38px]">
                <img src={icon2} alt="" />
              </div>
              <h1 className=" font-bold text-2xl">Buy Your Collections</h1>
              <p className=" text-[14px] mt-4">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-[#7472D9] via-[#A560CB] to-slate-950 p-1 h-full w-full">
            <div className=" h-full w-full bg-slate-950 p-8">
              <div className=" bg-[rgba(255,255,255,0.12)] w-[60px] h-[60px] flex justify-center items-center rounded mb-[38px]">
                <img src={icon3} alt="" />
              </div>
              <h1 className=" font-bold text-2xl">Sell Your NFTs</h1>
              <p className=" text-[14px] mt-4">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-[#7472D9] via-[#A560CB] to-slate-950 p-1 h-full w-full">
            <div className=" h-full w-full bg-slate-950 p-8">
              <div className=" bg-[rgba(255,255,255,0.12)] w-[60px] h-[60px] flex justify-center items-center rounded mb-[38px]">
                <img src={icon4} alt="" />
              </div>
              <h1 className=" font-bold text-2xl">Add Your NFTs</h1>
              <p className=" text-[14px] mt-4">
                Lorem ipsum dolor sit amet, consectetur at adipiscing elit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
