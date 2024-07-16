"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Image from "next/image";
import { NormalBtn } from "@/ui/buttons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Ministering = ({
  data,
  teams,
}: {
  data: HomePageType;
  teams: TeamsType;
}) => {
  const isTeam = teams.teams.edges.filter((item) => item.node.acf.ministering);
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle border className="text-center max-w-[900px]">
        {data.page.acf.eighthSection.title}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.eighthSection.description}
      </HeadSubtitle>
      <div className="lg:mt-16 md:mt-14 mt-6  lg:gap-16 md:gap-14 gap-6 grid md:grid-cols-2 max-w-[1440px] ">
        {isTeam
          .sort(() => -1)
          .map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              className="border border-black flex flex-col rounded-[10px] overflow-hidden"
            >
              <Image
                src={item.node.acf.teamMemberDetails.image.sourceUrl}
                alt=""
                loading="lazy"
                width={item.node.acf.teamMemberDetails.image.mediaDetails.width}
                height={
                  item.node.acf.teamMemberDetails.image.mediaDetails.height
                }
                className="aspect-square object-top object-cover"
              />
              <div className="flex flex-col px-6 py-6">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={idx * 300}
                  className="font-bold lg:text-3xl md:text-2xl text-xl"
                >
                  {item.node.acf.teamMemberDetails.name}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={idx * 300}
                  className="md:mt-2 mt-1 text-lg font-bold leading-[150%]"
                >
                  {item.node.acf.teamMemberDetails.designation}
                </p>
                <Link href={`/our-leadership/${item.node.slug}`} shallow>
                  <NormalBtn className="mt-4 sm:w-max max-w-full">
                    Read More
                  </NormalBtn>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Ministering;
