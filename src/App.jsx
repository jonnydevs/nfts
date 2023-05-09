import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "./assets/logo.png";
import frame from "./assets/frame.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import demon from "./assets/demon.png";
import dog from "./assets/dog.png";
import puppy from "./assets/puppy.png";
import network from "./assets/network.png";
import heart from "./assets/heart.png";
import casual from "./assets/casual.png";
import alex from "./assets/alex.png";
import john from "./assets/john.png";
import lara from "./assets/lara.png";
import space from "./assets/space.png";
import hand from "./assets/hand.png";
import lady from "./assets/lady.png";
import boy from "./assets/boy.png";
import crazy from "./assets/crazy.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";
import image12 from "./assets/image12.png";

function App() {
  return (
    <div className=" bg-slate-950 text-white pb-[50px]">
      <div className="bg-[url('./assets/bg.png')] bg-no-repeat bg-center  text-white p-[40px] lg:px-[100px] w-full">
        <div className=" flex justify-between items-center w-full">
          <div className=" flex align-middle gap-4">
            <img src={logo} alt="" className=" w-8 h-8" />
            <h1>NFTs</h1>
          </div>
          <div className=" hidden lg:flex gap-[130px] items-center">
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
          <h1 className=" font-[700] text-[54px] sm:w-[450px]">
            Discover, Collect and Sell Dope NFTs
          </h1>
          <p className=" mt-8 sm:w-[526px]">
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
            <div className=" w-[116px] h-[53px] bg-gradient-to-r from-[#6578DD] via-[#B35BC7] to-[#DC1DC4] p-1 cursor-pointer">
              <div className="flex w-full h-full bg-slate-900 items-center justify-center">
                <h1 className=" text-base text-white">Create</h1>
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center w-full h-[100px] bg-[rgba(255,255,255,0.1)] px-2 sm:w-[500px] sm:px-12">
            <div>
              <h1 className=" font-[700] text-2xl">80K+</h1>
              <p className=" font-[400] text-base">Active user</p>
            </div>
            <div>
              <div className=" font-[700] text-2xl">27K+</div>
              <p className=" font-[400] text-base">Artworks</p>
            </div>
            <div>
              <h1 className=" font-[700] text-2xl">3.5K+</h1>
              <p className=" font-[400] text-base">Artists</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-[24px] px-6 lg:px-[100px] lg:py-[124px]">
        <img src={frame} alt="" />
      </div>
      <div className=" px-6 lg:px-[100px] lg:flex items-center overflow-hidden lg:pb-[100px]">
        <div>
          <h1 className=" text-2xl font-bold mb-[20px] lg:text-4xl">
            How it Works
          </h1>
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
        <div className=" grid grid-cols-1 mt-8 gap-8 md:grid-cols-2">
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
      <div className=" p-4 lg:px-[100px]">
        <div className="  justify-between items-end mb-9">
          <div>
            <h1 className=" text-2xl font-bold lg:text-4xl">
              Trending Auctions
            </h1>
            <p className=" text-base font-normal my-3">
              Lorem ipsum dolor sit amet, consectetur adipisc elit amet.
              Consectetu at it lrorem ipsum dolor sit amet.
            </p>
          </div>
          <div className=" flex gap-6">
            <div className=" p-[10px] border-[0.5px] border-[rgba(255, 255,255,0.28)] opacity-25">
              <FaChevronLeft />
            </div>
            <div className=" p-[10px] border-[0.5px] border-white">
              <FaChevronRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-between w-full lg:flex-row">
          <div className=" flex flex-col gap-4 p-6 border-2 border-slate-600 h-[492px] w-full">
            <div className=" flex justify-between items-end">
              <h2 className=" font-bold text-lg">VERUALY ART</h2>
              <span className=" text-sm font-normal">@nftsart</span>
            </div>
            <img src={demon} alt="" className=" h-[75%] w-full" />
            <div className=" flex justify-between">
              <div>
                <h2 className=" font-bold text-[16px]">15h : 05m : 26s</h2>
                <p className=" font-normal text-sm">Remaining Time</p>
              </div>
              <div>
                <h2 className=" font-bold text-[16px]">20.25 ETH</h2>
                <p className=" font-normal text-sm">Highest bid</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 p-6 border-[0.5px] border-[rgba(255, 255,255,0.28)] border-opacity-0 h-[492px] w-full">
            <div className=" flex justify-between items-end">
              <h2 className=" font-bold text-lg">VERUALY ART</h2>
              <span className=" text-sm font-normal">@nftsart</span>
            </div>
            <div className=" flex gap-6">
              <img src={puppy} alt="" className=" h-[300px] w-2/3" />
              <div className=" flex flex-col h-full justify-between items-center">
                <img
                  src={casual}
                  alt=""
                  className=" w-10 h-10 sm:w-20 sm:h-20"
                />
                <img src={heart} alt="" className=" w-10 h- sm:w-20 sm:h-20" />
                <img
                  src={network}
                  alt=""
                  className=" w-10 h-10 sm:w-20 sm:h-20"
                />
              </div>
            </div>
            <div className=" flex justify-between">
              <div>
                <h2 className=" font-bold text-[16px]">15h : 05m : 26s</h2>
                <p className=" font-normal text-sm">Remaining Time</p>
              </div>
              <div>
                <h2 className=" font-bold text-[16px]">20.25 ETH</h2>
                <p className=" font-normal text-sm">Highest bid</p>
              </div>
            </div>
            <button className=" w-full h-[45px] bg-white text-black">
              Place a bid
            </button>
          </div>
          <div className=" flex flex-col gap-4 p-6 border-2 border-slate-600 h-[492px] w-full">
            <div className=" flex justify-between items-end">
              <h2 className=" font-bold text-lg">VERUALY ART</h2>
              <span className=" text-sm font-normal">@nftsart</span>
            </div>
            <img src={dog} alt="" className=" h-[75%] w-full" />
            <div className=" flex justify-between">
              <div>
                <h2 className=" font-bold text-[16px]">15h : 05m : 26s</h2>
                <p className=" font-normal text-sm">Remaining Time</p>
              </div>
              <div>
                <h2 className=" font-bold text-[16px]">20.25 ETH</h2>
                <p className=" font-normal text-sm">Highest bid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-[100px] pt-0">
        <div className=" flex justify-between items-end">
          <h1 className=" font-bold text-2xl lg:text-4xl">Top Seller</h1>
          <a href="#" className=" underline">
            View all
          </a>
        </div>
        <div className=" flex flex-col gap-6 mt-[50px] sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <div
            className=" flex items-center justify-center gap-4 bg-gradient-to-r from-[#7073DA] via-[#B15CC8]
            to-[#D828C3] w-full h-[160px]"
          >
            <img src={alex} alt="" />
            <div>
              <h2>Alex Maverick</h2>
              <p>400 Artworks</p>
            </div>
          </div>
          <div
            className=" flex items-center justify-center gap-4 bg-gradient-to-r from-[#846DD6] via-[#AD5FCA]
            to-[#C345C7] w-full h-[160px]"
          >
            <img src={john} alt="" />
            <div>
              <h2>Benjamin John</h2>
              <p>400 Artworks</p>
            </div>
          </div>
          <div
            className=" flex items-center justify-center gap-4 bg-gradient-to-r from-[#876CD5] via-[#AA60CB]
            to-[#CB3AC5] w-full h-[160px]"
          >
            <img src={lara} alt="" />
            <div>
              <h2>Kingston Lara</h2>
              <p>400 Artworks</p>
            </div>
          </div>
          <div
            className=" flex items-center justify-center gap-4 bg-gradient-to-r from-[#7073DA] via-[#B15CC8]
            to-[#D828C3] w-full h-[160px]"
          >
            <img src={alex} alt="" />
            <div>
              <h2>Alex Maverick</h2>
              <p>400 Artworks</p>
            </div>
          </div>
          <div
            className=" flex items-center justify-center gap-4 bg-gradient-to-r from-[#846DD6] via-[#AD5FCA]
            to-[#C345C7] w-full h-[160px]"
          >
            <img src={john} alt="" />
            <div>
              <h2>Benjamin John</h2>
              <p>400 Artworks</p>
            </div>
          </div>
          <div
            className=" flex items-center justify-center gap-4 bg-gradient-to-r from-[#876CD5] via-[#AA60CB]
            to-[#CB3AC5] w-full h-[160px]"
          >
            <img src={lara} alt="" />
            <div>
              <h2>Kingston Lara</h2>
              <p>400 Artworks</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-[100px] mb-[100px]">
        <div className=" flex flex-col lg:flex-row justify-between">
          <div>
            <h1 className=" font-bold text-2xl lg:text-5xl mb-3">
              Hot Collections
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.</p>
          </div>
          <a href="#" className=" underline self-end">
            View all
          </a>
        </div>
        <div className=" flex flex-col items-center gap-4 mt-[68px] sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:place-content-center xl:grid-cols-4">
          <div className=" flex flex-col gap-4 p-6 border-2 border-slate-900 h-[412px] w-[282px]">
            <img src={crazy} alt="" className=" w-full" />
            <div className=" grid grid-cols-3 w-full gap-2">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
            </div>
            <div className=" flex justify-between items-center">
              <p>Art Item</p>
              <a
                href="#"
                className=" bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] py-2 px-6"
              >
                35+ item
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-4 p-6 border-2 border-slate-900 h-[412px] w-[282px]">
            <img src={lady} alt="" />
            <div className="grid grid-cols-3 w-full gap-2">
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
            </div>
            <div className=" flex justify-between items-center">
              <p>Cubic</p>
              <a
                href="#"
                className=" bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] py-2 px-6"
              >
                35+ item
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-4 p-6 border-2 border-slate-900 h-[412px] w-[282px]">
            <img src={hand} alt="" />
            <div className=" grid grid-cols-3 w-full gap-2">
              <img src={image7} alt="" />
              <img src={image8} alt="" />
              <img src={image9} alt="" />
            </div>
            <div className=" flex justify-between items-center">
              <p>Diamond</p>
              <a
                href="#"
                className=" bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] py-2 px-6"
              >
                35+ item
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-4 p-6 border-2 border-slate-900 h-[412px] w-[282px]">
            <img src={boy} alt="" />
            <div className=" grid grid-cols-3 w-full gap-2">
              <img src={image10} alt="" />
              <img src={image11} alt="" />
              <img src={image12} alt="" />
            </div>
            <div className=" flex justify-between items-center">
              <p>Morgan11</p>
              <a
                href="#"
                className=" bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] py-2 px-6"
              >
                35+ item
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-800 mb-[100px] mx-10 lg:mx-[192px] p-2 flex flex-col lg:flex-row lg:p-6">
        <div>
          <h1 className=" font-bold text-[32px]">Subscribe Our Newsletters</h1>
          <p className="font-normal text-base mt-[20px] mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipisc elit amet ipsum
            dolor sit amet, consectetur adipisc elit. Lorem ipsum dolor sit
            amet.
          </p>
          <div className=" flex items-center justify-center h-[36px] w-full mb-9 lg:w-[547px]">
            <input
              type="email"
              placeholder="Enter your email..."
              className=" bg-slate-700 h-full px-2 outline-none border-none lg:w-full lg:px-6 lg:py-3"
            />
            <div
              href="#"
              className=" flex justify-center items-center px-2 bg-gradient-to-r from-[#7273D9] via-[#B35BC7] to-[#D927C3] h-full cursor-pointer"
            >
              Subscribe
            </div>
          </div>
        </div>
        <img src={space} alt="" className="sm:w-1/3 sm:mx-auto" />
      </div>
      <footer className=" flex flex-col justify-between p-4 px-[50px] gap-8 lg:px-[100px] sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between">
        <div className=" flex flex-col gap-3">
          <h2 className=" font-bold text-2xl ">Marketplace</h2>
          <p className=" font-normal text-base">All NFTs</p>
          <p className=" font-normal text-base">Art</p>
          <p className=" font-normal text-base">Music</p>
          <p className=" font-normal text-base">Domain Names</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className=" font-bold text-2xl ">Resources</h2>
          <p className=" font-normal text-base">Home</p>
          <p className=" font-normal text-base">Partners</p>
          <p className=" font-normal text-base">Suggestions</p>
          <p className=" font-normal text-base">Discord</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className=" font-bold text-2xl ">Community</h2>
          <p className=" font-normal text-base">About Us</p>
          <p className=" font-normal text-base">Documentation</p>
          <p className=" font-normal text-base">Brand Assets</p>
          <p className=" font-normal text-base">Blog</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className=" font-bold text-2xl ">Newsletter</h2>
          <p className=" w-[300px] h-[44px] font-normal text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.
          </p>
          <div className=" flex gap-[20px] mt-[20px]">
            <i className=" rounded-md bg-gradient-to-br from-[#7572D9] via-[#B959C6] to-[#D62FC3] p-3">
              <FaInstagram />
            </i>
            <i className="rounded-md bg-gradient-to-br from-[#7572D9] via-[#B959C6] to-[#D62FC3] p-3">
              <FaFacebookF />
            </i>
            <i className="rounded-md bg-gradient-to-br from-[#7572D9] via-[#B959C6] to-[#D62FC3] p-3">
              <FaTwitter />
            </i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
