"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import main_padding from "@/styles/padding";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { NormalBtn } from "@/ui/buttons";
import Link from "next/link";
import { HeadTitle } from "@/ui/Typography";

const HeroSection = ({ data }: { data: HomePageType }) => {
  return (
    <section className="flex flex-col justify-end w-full">
      <div
        className={`w-full   overflow-hidden flex items-end justify-center relative z-0 `}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          effect="ease"
          loop
          speed={1700}
          autoplay={{
            delay: 4500,
          }}
          modules={[Autoplay]}
          className="mySwiper  top-0 left-0 inset-0 w-full h-full !-z-10"
        >
          {data.page.acf.heroSection.bannerImages.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="overflow-hidden w-full h-full max-lg:!hidden"
            >
              <Image
                src={item.sourceUrl}
                alt=""
                width={item.mediaDetails.width}
                height={item.mediaDetails.height}
                className="w-full h-auto object-contain object-top"
              />
            </SwiperSlide>
          ))}
          {data.page.acf.heroSection.bannerImagesMobile.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="overflow-hidden w-full h-full lg:!hidden"
            >
              <Image
                src={item.sourceUrl}
                alt=""
                width={item.mediaDetails.width}
                height={item.mediaDetails.height}
                className="w-full h-auto object-contain object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* bottom content */}
        {data.page.acf.heroSection.title && (
          <div className="flex items-center justify-center flex-col md:max-w-[600px] w-full bg-white/30 backdrop-blur-[19px] z-10 py-8 px-10 rounded-lg text-center">
            <h1 className="text-3xl font-black text-secondary">
              {data.page.acf.heroSection.title}
            </h1>
            <p className="text-lg text-black  mt-1">
              {data.page.acf.heroSection.subtitle}
            </p>
            <Link
              href={`${data.page.acf.heroSection.button.link}`}
              shallow
              className="mt-4 max-sm:w-full"
            >
              <NormalBtn
                className="max-sm:w-full border-transparent text-lg"
                mode="day"
              >
                {data.page.acf.heroSection.button.title}
              </NormalBtn>
            </Link>
          </div>
        )}
      </div>

      <SectionWrapper classBottom={main_padding.y}>
        <div className="w-full grid md:grid-cols-2  lg:gap-20 md:gap-14 gap-6 md:py-14 items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex flex-col gap-1"
          >
            <HeadTitle className="lg:text-[5rem] md:text-[4.5rem] text-3xl tracking-tight">
              {data.page.acf.firstSectionWelcome.title}
            </HeadTitle>
            <div className="flex flex-col gap-6 mt-6">
              {(data.page.acf.firstSectionWelcome.buttion1Text ||
                data.page.acf.firstSectionWelcome.button2Text) && (
                <div className="flex items-center justify-start md:gap-6 sm:gap-4 gap-2  max-sm:flex-wrap">
                  {data.page.acf.firstSectionWelcome.buttion1Text && (
                    <Link
                      href={`${data.page.acf.firstSectionWelcome.button1Link}`}
                      shallow
                      className="max-sm:w-full"
                    >
                      <NormalBtn className="max-sm:w-full sm:text-[1rem]">
                        {data.page.acf.firstSectionWelcome.buttion1Text}
                      </NormalBtn>
                    </Link>
                  )}
                  {data.page.acf.firstSectionWelcome.button2Text && (
                    <Link
                      href={`${data.page.acf.firstSectionWelcome.button2Link}`}
                      shallow
                      className="max-sm:w-full"
                    >
                      <NormalBtn
                        mode="day"
                        className="max-sm:w-full sm:text-[1rem]"
                      >
                        {data.page.acf.firstSectionWelcome.button2Text}
                      </NormalBtn>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex flex-col items-center justify-end gap-6 rounded-[20px] overflow-hidden  w-full h-full relative z-0 md:w-[115%]"
          >
            <Image
              src={data.page.acf.firstSectionWelcome.right.image.sourceUrl}
              alt=""
              width={600}
              height={400}
              className=" w-full  h-auto object-cover -z-10"
            />
            <p
              style={{
                backgroundColor:
                  data.page.acf.firstSectionWelcome.right.title.backgroundColor,
              }}
              className=" absolute md:bottom-8 bottom-4 px-8 py-[10px]  text-center rounded-[6px] sm:text-lg text-xs text-white font-bold tracking-wider font-asap"
            >
              {data.page.acf.firstSectionWelcome.right.title.text}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
