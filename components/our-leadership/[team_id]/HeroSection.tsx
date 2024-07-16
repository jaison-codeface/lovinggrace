import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

const HeroSection = ({
  heroSectionImage,
  title,
  description,
  position,
}: {
  title: string;
  description: string | JSX.Element;
  position: string;
  heroSectionImage: StaticImageData | string;
}) => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} items-start max-md:flex-col mt-40 md:gap-20 gap-10`}
    >
      <Image
        src={heroSectionImage}
        alt=""
        width={1440}
        height={500}
        priority
        className="md:object-cover object-contain md:w-[50%] w-full h-[-webkit-fill-available] rounded-[10px] overflow-hidden"
      />
      <div className="h-full md:overflow-y-scroll relative md:w-[50%]">
        <div className="flex flex-col md:absolute inset-0">
          <HeadTitle>{title}</HeadTitle>
          <HeadSubtitle className="text-base text-black font-bold ">
            {position}
          </HeadSubtitle>
          <HeadSubtitle className="mt-3">{description}</HeadSubtitle>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
