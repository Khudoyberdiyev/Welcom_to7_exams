// @ts-nocheck
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselImage from "../../../assets/Images/intro_image.png";

export default function Carousel() {
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
          <div className="flex items-center justify-between bg-gradient-to-r rgba(245, 245, 245, 0.5) -23.457% rgba(245, 245, 245, 0.5) 107.508%]">
            <div className="max-w-[590px]">
              <p className="text-sm font-medium text-[#3d3d3d] tracking-[3px] uppercase mb-[7px]">
                Welcome to GreenShop
              </p>
              <h2 className="text-[24px] md:text-[48px] leading-normal lg:text-[70px] font-black text-[#3D3D3D] uppercase mb-[5px]">
                Let’s Make a Better{" "}
                <span className="text-[#46A358]">planet</span>
              </h2>
              <article className="text-sm md:text-base mb-[44px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </article>
              <button className="w-[140px] h-10 grid place-content-center bg-[#46a358] rounded-md text-white">
                Shop now
              </button>
            </div>
            <img
              className="hidden sm:flex sm:w-[213px] sm:h-[213px] md:w-[420px] md:h-[420px] lg:w-auto lg:h-auto"
              src={CarouselImage}
              alt="Carousel image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-between bg-gradient-to-r rgba(245, 245, 245, 0.5) -23.457% rgba(245, 245, 245, 0.5) 107.508%]">
            <div className="max-w-[590px]">
              <p className="text-sm font-medium text-[#3d3d3d] tracking-[3px] uppercase mb-[7px]">
                Welcome to GreenShop
              </p>
              <h2 className="text-[24px] md:text-[48px] leading-normal lg:text-[70px] font-black text-[#3D3D3D] uppercase mb-[5px]">
                Let’s Make a Better{" "}
                <span className="text-[#46A358]">planet</span>
              </h2>
              <article className="text-sm md:text-base mb-[44px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </article>
              <button className="w-[140px] h-10 grid place-content-center bg-[#46a358] rounded-md text-white">
                Shop now
              </button>
            </div>
            <img
              className="hidden sm:flex sm:w-[213px] sm:h-[213px] md:w-[420px] md:h-[420px] lg:w-auto lg:h-auto"
              src={CarouselImage}
              alt="Carousel image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-between bg-gradient-to-r rgba(245, 245, 245, 0.5) -23.457% rgba(245, 245, 245, 0.5) 107.508%]">
            <div className="max-w-[590px]">
              <p className="text-sm font-medium text-[#3d3d3d] tracking-[3px] uppercase mb-[7px]">
                Welcome to GreenShop
              </p>
              <h2 className="text-[24px] md:text-[48px] leading-normal lg:text-[70px] font-black text-[#3D3D3D] uppercase mb-[5px]">
                Let’s Make a Better{" "}
                <span className="text-[#46A358]">planet</span>
              </h2>
              <article className="text-sm md:text-base mb-[44px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </article>
              <button className="w-[140px] h-10 grid place-content-center bg-[#46a358] rounded-md text-white">
                Shop now
              </button>
            </div>
            <img
              className="hidden sm:flex sm:w-[213px] sm:h-[213px] md:w-[420px] md:h-[420px] lg:w-auto lg:h-auto"
              src={CarouselImage}
              alt="Carousel image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
