// @ts-nocheck
import React from "react";
import Carousel from "../../components/Ui/Carousel/Carousel";
import PaginationAntd from "../../components/Ui/Pagination/Pagination";
import SuperSale from "../../assets/Images/Super Sale.svg";
import Flower from "../../assets/Images/image 12.svg";
import CardCarousel from "../../components/Ui/Carousel/CardCarousel";
import { Slider } from "antd";

function valuetext(value) {
  return `${value}`;
}

const Home = () => {


  return (
    <>
      <section className="pt-[85px] pb-5">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </section>
      <section>
        <div className="container mx-auto flex items-start">
          <div className="">
            <div className="w-[340px] h-[774px] bg-[#FBFBFB] mt-12 pb-4">
              <div className=" px-8 py-4">
                <h6 className="text-[#3D3D3D] font-sans font-medium text-xl ">
                  Catagories
                </h6>
                <div className="flex items-center justify-between w-[268px] h-[383px] p-4">
                  <div>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      House Plants
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Potter Plants{" "}
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Seeds
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Small Plants
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Big Plants
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Succulents
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Trerrariums
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Gardening
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                      Accessories
                    </p>
                  </div>
                  <div>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (33)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (12)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (65)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (39)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (23)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (17)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (19)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (13)
                    </p>
                    <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg">
                      (18)
                    </p>
                  </div>
                </div>
                <div>
                  <h6 className="text-[#3D3D3D] font-sans font-medium text-lg">
                    Price Range
                  </h6>
                  <div className="p-4">
                    <Slider
                      range={{ draggableTrack: true }}
                      defaultValue={[34, 1256]}
                    />
                    <p className="text-[#3D3D3D] font-sans font-normal text-lg mb-6">
                      Price: <span className="text-[#2e783d]">$34 - $1256</span>
                    </p>
                    <button className=" bg-[#2e783d] w-20 py-1 border rounded-xl text-white font-sans font-medium">
                      Filter
                    </button>
                  </div>
                </div>
                <div className="w-[268px] h-[143px]">
                  <h6 className="text-[#3D3D3D] font-sans font-medium text-lg">
                    Size
                  </h6>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                        Large
                      </p>
                      <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                        Medium
                      </p>
                      <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                        Small
                      </p>
                    </div>
                    <div>
                      <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                        (123)
                      </p>
                      <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                        (67)
                      </p>
                      <p className="leading-10 text-[#3D3D3D] font-sans font-normal text-lg hover:text-[#2e783d]">
                        (34)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[340px] h-[400px] bg-gray-100 border-t-2 flex flex-col items-center border-b-2">
              <img src={SuperSale} alt="#" />
              <h5 className="text-[#3D3D3D] font-sans font-medium text-xl ">
                UP TO 75% OFF
              </h5>
              <img src={Flower} alt="#" className="" />
            </div>
          </div>
          <div className="w-full flex flex-col min-h px-12">
            <div className="mt-12 mb-8 flex items-center justify-between">
              <ul className="flex space-x-9">
                <li className=" font-sans font-normal text-[#3D3D3D] hover:text-[#46A358]">
                  <a href="">All Plants</a>
                </li>
                <li className=" font-sans font-normal text-[#3D3D3D] hover:text-[#46A358]">
                  <a href="">New Arrivals</a>
                </li>
                <li className=" font-sans font-normal text-[#3D3D3D] hover:text-[#46A358]">
                  <a href="">Sale</a>
                </li>
              </ul>
              <div className="flex items-center space-x-1">
                <p className=" font-sans font-normal text-[#3D3D3D]">
                  Short by:
                </p>
                <select className=" w-32 py-1 px-2 border-none font-sans font-normal text-[#3D3D3D]  bg-white rounded-md shadow-sm outline-none">
                  <option value="">Default sort</option>
                  <option value="option1">Variant 1</option>
                  <option value="option2">Variant 2</option>
                  <option value="option3">Variant 3</option>
                </select>
              </div>
            </div>
            <div className="h-full flex-1">
              <PaginationAntd />
            </div>
          </div>
        </div>
        <div className="pt-32 container mx-auto">
          <h1 className="text-[#3D3D3D] font-sans font-medium text-5xl text-center leading-[82px]">
            Our Blog Posts
          </h1>
          <p className=" text-[#727272] font-sans font-normal text-md text-center items-center ">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <div className="">
            <CardCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
