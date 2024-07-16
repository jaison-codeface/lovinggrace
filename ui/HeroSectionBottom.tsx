"use client";
import React from "react";
import { HeadSubtitle, HeadTitle } from "./Typography";
import { NormalBtn } from "./buttons";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string | JSX.Element;
  description?: string;
  btn1?: { title?: string; link?: string };
  btn2?: { title?: string; link?: string };
  border?: boolean;
};
const HeroSectionBottom = ({
  btn1,
  btn2,
  description,
  subtitle,
  title,
  border,
}: Props) => {
  const pathname = usePathname();

  
  return (
    <div className="w-full grid md:grid-cols-2 lg:gap-20 md:gap-14 sm:gap-6 gap-4">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col gap-1"
      >
        {subtitle && (
          <HeadSubtitle className="md:text-xl text-lg text-secondary font-bold md:hidden">
            {subtitle}
          </HeadSubtitle>
        )}
        {title && (
          <HeadTitle
            border={border}
            className={
              pathname === "/"
                ? "lg:text-[5rem] md:text-[4.5rem] text-3xl tracking-tight"
                : ""
            }
          >
            {title}
          </HeadTitle>
        )}
        {subtitle && (
          <HeadSubtitle className="text-xl text-black font-bold max-md:hidden italic">
            {subtitle}
          </HeadSubtitle>
        )}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col gap-6"
      >
        {description && <HeadSubtitle>{description}</HeadSubtitle>}
        {(btn1?.title?.length! > 1 || btn2?.title?.length! > 1) && (
          <div className="flex items-center justify-start md:gap-6 sm:gap-4 gap-2  max-sm:flex-wrap">
            {btn1?.title?.length! > 1 && (
              <Link href={`${btn1?.link}`} shallow className="max-sm:w-full">
                <NormalBtn className="max-sm:w-full">{btn1?.title}</NormalBtn>
              </Link>
            )}
            {btn2?.title?.length! > 1 && (
              <Link href={`${btn2?.link}`} shallow className="max-sm:w-full">
                <NormalBtn mode="day" className="max-sm:w-full">
                  {btn2?.title}
                </NormalBtn>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSectionBottom;
