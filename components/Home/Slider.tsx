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
import Image from "next/image";

import arrow from "@/assets/icons/swiper arrow btn.svg";

const Guiding = ({ data }: { data: HomePageType }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SectionWrapper classBottom={` flex-col items-center`}>
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
            delay: 3500,
          }}
          speed={1200}
          navigation={{
            // enabled: true,
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
          {data.page.acf.slider.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[80%] rounded-[18px] h-full overflow-hidden bg-primary aspect-square md:aspect-[16/10] relative"
            >
              <Image
                src={item.sourceUrl}
                alt=""
                // width={item.mediaDetails.width}
                // height={item.mediaDetails.height}
                fill
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
