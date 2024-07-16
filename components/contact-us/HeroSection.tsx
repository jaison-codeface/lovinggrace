import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import Image from "next/image";
import Link from "next/link";


const HeroSection = ({ data }: { data: ContactUsPageType }) => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col items-center mt-40`}
    >
      <HeadTitle border className="text-center max-w-[900px]">
        {data.page.acf.firstSection.title}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.firstSection.description}
      </HeadSubtitle>
      <div className="grid md:grid-cols-2 sm:w-max w-full max-w-full lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.page.acf.firstSection.boxes.map((item, idx) => (
          <div
            key={idx}
            className="bg-off-white rounded-[10px] overflow-hidden flex flex-col items-center justify-start px-6 py-12"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              src={item.icon.sourceUrl}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              className="text-primary font-bold text-2xl mt-3 px-4 py-1 border border-black rounded-lg"
            >
              {item.title}
            </h2>
            <Link
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              href={`${item.link}`}
              target="_blank"
              className="mt-2 text-base text-center font-medium"
            >
              {item.description}
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
