import Image, { StaticImageData } from "next/image";
import React from "react";
import { HeadSubtitle, HeadTitle } from "./Typography";
import { NormalBtn } from "./buttons";
import Link from "next/link";
import PlayBtnIcon from "@/assets/icons/PlayBtnIcon";

type Props = {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  btn1?: { title?: string; link?: string };
  btn2?: { title?: string; link?: string };
  direction?: "opposite" | "normal";
  image: StaticImageData | string;
  videoLink?: string;
  playBtn?: boolean;
  border?: boolean;
};

const LeftContentRightImg = ({
  btn1,
  btn2,
  subtitle,
  title,
  direction = "normal",
  image,
  playBtn,
  videoLink,
  border,
}: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:gap-20 md:gap-14 gap-6 items-center">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className={`flex flex-col justify-start ${
          direction === "opposite" && "md:order-1"
        } `}
      >
        <HeadTitle border={border}>{title}</HeadTitle>
        <HeadSubtitle className="sm:mt-10 mt-2">{subtitle}</HeadSubtitle>
        <div>
          {(btn1?.title || btn2?.title) && (
            <div className="flex items-center justify-start md:gap-6 gap-3 md:mt-14 mt-3">
              {btn1?.title && (
                <Link href={`${btn1?.link}`} shallow className="max-md:w-full">
                  <NormalBtn className="max-md:w-full sm:text-[1rem]">{btn1?.title}</NormalBtn>
                </Link>
              )}
              {btn2?.title && (
                <Link href={`${btn2?.link}`} shallow className="max-md:w-full">
                  <NormalBtn
                    mode="day"
                 
                    className="max-md:w-full sm:text-[1rem]"
                  >
                    {btn2?.title}
                  </NormalBtn>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {videoLink ? (
        <Link
          href={videoLink}
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-red-400 aspect-square rounded-[10px] overflow-hidden flex items-center justify-center relative z-0"
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover -z-10 "
            placeholder="empty"
            loading="lazy"
          />
          <PlayBtnIcon className="" />
        </Link>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-red-400 aspect-square rounded-[10px] overflow-hidden flex items-center justify-center relative z-0"
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover -z-10 "
            placeholder="empty"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default LeftContentRightImg;
