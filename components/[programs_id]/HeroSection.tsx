"use client";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const HeroSection = ({
  heroSectionImage,
  subtitle,
  title,
  statement,
}: {
  title: string;
  subtitle: string;
  heroSectionImage: StaticImageData | string;
  statement?: string;
}) => {
  const pathname = usePathname();

  const kids_of_excellence = pathname.includes("kids-of-excellence");
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={heroSectionImage}
        alt=""
        width={1440}
        height={1000}
        className="object-contain h-auto w-full -z-10"
      />

      <SectionWrapper
        classBottom={main_padding.y}
        classTop={`${kids_of_excellence && "bg-off-white"}`}
      >
        <HeroSectionBottom
          title={title}
          subtitle={statement}
        />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
