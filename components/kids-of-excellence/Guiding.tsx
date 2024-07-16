"use client";

import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import React, { useRef } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import arrow from "@/assets/icons/swiper arrow btn.svg";

const Guiding = ({ data }: { data: KidsOfExcellenceType }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <HeadTitle border className="text-center max-w-[800px]">
        {data.page.acf.firstSection.title}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.firstSection.description}
      </HeadSubtitle>
      <div className=" lg:mt-16 md:mt-14 mt-6 w-full  sm:py-10">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          data-aos="fade-up"
          data-aos-duration="700"
          pagination={{
            clickable: true,
            el: "#paginationSwiper",
          }}
          loop
          autoplay={{
            delay: 2500,
          }}
          navigation={{
            enabled: true,
            // prevEl: navigationPrevRef.current,
            // nextEl: navigationNextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.page.acf.firstSection.gallery.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[80%] rounded-[10px] overflow-hidden bg-primary max-md:aspect-square"
            >
              <Image
                src={item.sourceUrl}
                alt=""
                width={item.mediaDetails.width}
                height={item.mediaDetails.height}
                className="w-full h-full object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-between gap-3 mt-3">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            id="paginationSwiper"
            className=""
          />
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex  items-center justify-center gap-2 "
          >
            <button ref={navigationPrevRef}>
              <Image
                src={arrow}
                alt=""
                className="w-auto h-10 object-contain aspect-square rotate-180"
              />
            </button>
            <button ref={navigationNextRef}>
              <Image
                src={arrow}
                alt=""
                className="w-auto h-10 object-contain aspect-square "
              />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Guiding;
