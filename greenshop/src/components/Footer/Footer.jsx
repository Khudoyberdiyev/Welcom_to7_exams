// @ts-nocheck
import React from "react";
import footerIcon from "../../assets/Images/Frame.svg";
import footerIcon2 from "../../assets/Images/Frame2.svg";
import footerIcon3 from "../../assets/Images/Frame3.svg";
import footerLogo from "../../assets/Images/Logo.svg";
import footerIcon4 from "../../assets/Images/Calling.svg";
import footerIcon5 from "../../assets/Images/Location.svg";
import footerIcon6 from "../../assets/Images/Message.svg";
import Facebook from "../../assets/Images/Facebook.svg";
import Instagram from "../../assets/Images/Instagram.svg";
import Twiter from "../../assets/Images/Twitter.svg";
import Union from "../../assets/Images/Union.svg";
import Paypal from "../../assets/Images/image 16.svg";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="pl-14 bg-[#FBFBFB]">
        <div className="flex justify-between py-11 ">
          <div className="flex items-center space-x-16">
            <div className=" w-[204px] h-[201px] ">
              <div className=" px-7 pt-8 pb-2 pr-6">
                <img src={footerIcon} alt="" />
              </div>
              <h6 className=" font-sans font-medium text-md pb-2 text-[#3D3D3D]">
                Garden Care
              </h6>
              <p className=" font-sans font-normal text-md text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className=" w-[204px] h-[201px] ">
              <div className=" px-7 pt-8 pb-2">
                <img src={footerIcon2} alt="" />
              </div>
              <h6 className=" font-sans font-medium text-md pb-2 text-[#3D3D3D]">
                Garden Care
              </h6>
              <p className=" font-sans font-normal text-md text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className=" w-[204px] h-[201px] ">
              <div className=" px-7 pt-8 pb-4">
                <img src={footerIcon3} alt="" />
              </div>
              <h6 className=" font-sans font-medium text-md pb-2 text-[#3D3D3D]">
                Garden Care
              </h6>
              <p className=" font-sans font-normal text-md text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className=" w-[354px] h-[201px]">
            <h5 className=" font-sans font-medium text-md pb-6 text-[#3D3D3D]">
              Would you like to join newsletters?
            </h5>
            <div className="flex items-center pb-5">
              <input
                type="email"
                placeholder="enter your email address..."
                className="w-[334px] py-2 px-3 rounded-md border-[2px] border-gray-200 outline-none"
              />
              <button className=" bg-green-600 relative right-[70px] py-2 rounded-r-md px-5 text-white font-sans font-medium text-md">
                Join
              </button>
            </div>
            <p className=" font-sans font-normal text-sm text-[#727272]">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[88px] bg-[#cdd9cf] flex items-center px-7 space-x-20">
        <img src={footerLogo} alt="#" />
        <ul className="flex items-center space-x-9">
          <li className="flex items-center space-x-2">
            <img src={footerIcon5} alt="#" />

            <a href="">70 West Buckingham Ave. Farmingdale, NY 11735</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src={footerIcon6} alt="#" />

            <a href="">contact@greenshop.com</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src={footerIcon4} alt="#" />

            <a href="">+88 01911 717 490</a>
          </li>
        </ul>
      </div>
      <div className="p-8 bg-[#FBFBFB]">
        <div className=" flex justify-between">
          <div className="">
            <h1 className=" font-sans font-medium text-lg text-[#3D3D3D]">
              My Account
            </h1>
            <ul className="h-[150px] leading-[28px]">
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Our stores
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Specials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=" font-sans font-medium text-lg text-[#3D3D3D]">
              Help & Guide
            </h1>
            <ul className="h-[150px] leading-[28px]">
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  How to Buy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Product Policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  How to Return
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=" font-sans font-medium text-lg text-[#3D3D3D]">
              Categories
            </h1>
            <ul className="h-[150px] leading-[28px]">
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  House Plants
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Potter Plants
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Seeds
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Small Plants
                </a>
              </li>
              <li>
                <a
                  href=""
                  className=" font-sans font-normal text-md text-[#3D3D3D]"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=" font-sans font-medium text-lg text-[#3D3D3D] pb-2">
              Social Media
            </h1>
            <div className=" flex items-center space-x-2 pb-5 ">
              <img
                src={Facebook}
                alt=""
                className="py-3 px-4 border border-gray-300 rounded-md"
              />
              <img
                src={Instagram}
                alt=""
                className="py-3 px-3 border border-gray-300 rounded-md"
              />
              <img
                src={Twiter}
                alt=""
                className="py-3 px-3 border border-gray-300 rounded-md"
              />
              <img
                src={Union}
                alt=""
                className="py-3 px-3 border border-gray-300 rounded-md"
              />
            </div>
            <h1 className=" font-sans font-medium text-lg text-[#3D3D3D] pb-2">
              We accept
            </h1>
            <img src={Paypal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
