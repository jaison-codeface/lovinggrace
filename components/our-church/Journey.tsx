import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import Image from "next/image";

const Journey = ({ data }: { data: OurChurchType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle border className="text-center max-w-[900px]">
        {data.page.acf.journey.title}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.journey.description}
      </HeadSubtitle>
      <div className="lg:mt-16 md:mt-14 mt-6 flex flex-col w-full justify-center items-center sm:gap-24 gap-16">
        {data.page.acf.journey.posts.map((item, idx) => (
          <div
            key={idx}
            className={`w-full flex md:gap-20 gap-6 ${
              idx % 2 === 0
                ? "md:flex-row flex-col"
                : "md:flex-row-reverse flex-col"
            }`}
          >
            <Image
              src={item.image.sourceUrl}
              alt=""
              data-aos="fade-up"
              data-aos-duration="700"
              width={item.image.mediaDetails.width}
              height={item.image.mediaDetails.height}
              className="object-cover rounded-[10px] overflow-hidden md:w-[60%] w-full shrink-0"
            />
            <div className="flex flex-col justify-center">
              <h2
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-2xl leading-[140%] font-black text-secondary"
              >
                {item.title}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-lg leading-[190%] mt-4"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Journey;
