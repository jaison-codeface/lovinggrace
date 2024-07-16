import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

const data = {
  title: "A Life Rich in Service and Love",
  content:
    "Before embarking on her journey to the UAE, Dr. Loretta served with dedication at Hood Memorial AME Zion Church, embracing roles that shaped her spiritual and leadership journey. From Sunday School teacher to Evangelism Assistant, each role prepared her for her destined pastoral duties in a new land.",
};

const FaithAndTransformation = ({ data }: { data: OurChurchType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <span className="max-w-[820px]">
        <HeadTitle border className="text-center">
         {data.page.acf.faithAndTransformation.title}
        </HeadTitle>
      </span>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
      {data.page.acf.faithAndTransformation.description}
      </HeadSubtitle>
      <div className=" lg:mt-16 md:mt-14 mt-6 w-full grid md:grid-cols-2 md:gap-10 gap-6">
        {data.page.acf.faithAndTransformation.contents.map((item, idx) => (
          <div
            key={idx}
            className="bg-off-white  md:px-10 px-6 md:py-14 py-8 rounded-2xl h-full flex flex-col text-center items-center"
          >
            <h2 className="font-black text-secondary md:text-3xl text-2xl">
              {item.title}
            </h2>
            <p className="text-lg mt-4 leading-[190%]">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FaithAndTransformation;
