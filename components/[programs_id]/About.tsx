"use client";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { NormalBtn } from "@/ui/buttons";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const About = ({
  description,
  logo,
  button,
}: {
  description: string | JSX.Element;
  logo: StaticImageData | string;
  button: {
    title: string;
    link: string;
  };
}) => {
  const router = useRouter();
  return (
    <SectionWrapper classTop="bg-off-white" classBottom={`${main_padding.y} `}>
      <div className="lg:gap-16 md:gap-12 gap-6 flex max-md:flex-col w-full  items-center max-w-[1440px] ">
        <Image
          data-aos="fade-up"
          data-aos-duration="700"
          src={logo}
          alt=""
          loading="lazy"
          width={600}
          height={600}
          className="aspect-square max-h-[400px] object-contain md:w-[40%] w-full"
        />
        <div data-aos="fade-up" data-aos-duration="700">
          <p className="leading-[190%] text-lg">{description}</p>
          <NormalBtn
          href={button.link}
       
            className="mt-6 max-sm:w-full "
          >
            {button.title}
          </NormalBtn>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
