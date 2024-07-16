import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import Image from "next/image";
import React from "react";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";

const HeroSection = ({ data }: { data: ManOfValourType }) => {
  const words = data.page.acf.firstSection.content.split(" ");
  const midIndex = Math.ceil(words.length / 2);

  const description = [
    words.slice(0, midIndex).join(" "),
    words.slice(midIndex).join(" "),
  ];
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={data.page.acf.bannerImage.sourceUrl}
        alt=""
        width={data.page.acf.bannerImage.mediaDetails.width}
        height={data.page.acf.bannerImage.mediaDetails.height}
        className="object-contain h-auto w-full -z-10  object-top "
      />

      <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
        <HeadTitle border className="text-center max-w-[800px]">
          {data.page.acf.firstSection.title}
        </HeadTitle>
        <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
          {data.page.acf.firstSection.description}
        </HeadSubtitle>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className={`grid md:grid-cols-2 md:gap-10 gap-2 lg:mt-16 md:mt-14 mt-6 w-full sm:bg-off-white sm:px-8 sm:py-10 rounded-[10px] sm:text-lg text-sm sm:leading-[190%] leading-[170%]`}
        >
          {description.map((item, idx) => (
            <p key={idx} className="md:block hidden ">
              {descriptionExtractor(item)}
            </p>
          ))}
          <p className="block md:hidden ">
            {descriptionExtractor(data.page.acf.firstSection.content)}
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
