// @ts-nocheck
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardCarusel from "../../../assets/Images/image3.png";
import CardCarusel1 from "../../../assets/Images/smileCarusel1.png";
import CardCarusel2 from "../../../assets/Images/smileCarusel2.png";
import CardCarusel3 from "../../../assets/Images/smileCarusel3.png";
import CardCarusel4 from "../../../assets/Images/smileCarusel4.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function CardCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" py-12 grid grid-cols-5 ">
            <div className="w-[239px] h-[300px] flex flex-col pt-2  bg-[#FBFBFB]">
              <img src={CardCarusel} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel1} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel2} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel3} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel4} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" py-12 grid grid-cols-5 ">
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel4} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel3} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel2} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel1} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" py-12 grid grid-cols-5 ">
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel3} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel2} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel1} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel4} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" py-12 grid grid-cols-5 ">
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel4} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel3} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel2} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel1} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" py-12 grid grid-cols-5 ">
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel4} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel3} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel2} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[239px] h-[300px] flex flex-col  bg-[#FBFBFB]">
              <img src={CardCarusel1} alt="" className="w-[219px] pl-4" />
              <div className="p-2">
                <p className="text-[#3D3D3D] font-sans font-normal text-lg">
                  Beach Spider Lily <br />
                  <span className=" font-sans text-md font-bold text-[#53cf5c]">
                    $129.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
