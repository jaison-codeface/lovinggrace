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
  description,
  statement,
}: {
  title: string;
  subtitle?: string;
  heroSectionImage: StaticImageData | string;
  statement?: string;
  description?: string;
}) => {
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={heroSectionImage}
        alt=""
        width={1440}
        height={1000}
        className="object-contain h-auto w-full -z-10"
      />

      {title && (
        <SectionWrapper classBottom={main_padding.y} classTop={``}>
          <HeroSectionBottom
            title={title}
            subtitle={statement}
            description={description}
          />
        </SectionWrapper>
      )}
    </section>
  );
};

export default HeroSection;
