import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import Image from "next/image";

const Associated = ({ data }: { data: HomePageType }) => {
  return (
    <div className={`${main_padding.y} w-full flex items-center`}>
      <SectionWrapper
        classTop="bg-off-white"
        classBottom={`sm:py-28 py-16 flex-col items-center  `}
      >
        <HeadTitle border className=" text-center ">
          {data.page.acf.associated.title}
        </HeadTitle>
        <HeadSubtitle className="mt-2 text-center max-w-[900px] ">
          {data.page.acf.associated.subtitle}
        </HeadSubtitle>

        <div className="flex items-center justify-center gap-20 mt-16 flex-wrap">
          {data.page.acf.associated.contents.map((item, idx) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 100}
              key={idx}
              className="flex flex-col items-center"
            >
              <Image
                src={item.icon.sourceUrl}
                alt=""
                width={140}
                height={140}
                loading="lazy"
                className="h-[200px] w-auto object-contain"
              />
              <p className="mt-2 font-bold text-secondary text-lg  text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Associated;
