import { NormalBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import arrowDown from "@/assets/icons/arrow down.svg";

type Props = {
  links: (
    | {
        title: string;
        link: string;
        subLinks?: undefined;
      }
    | {
        title: string;
        link: string;
        subLinks: {
          title: string;
          link: string;
        }[];
      }
  )[];
  setExpand: React.Dispatch<React.SetStateAction<any>>;
  expand: any;
  liveLink: {
    name: string;
    link: string;
  };
  forwardToAmazon: {
    name: string;
    link: string;
  };
};
const NavMobile = ({
  links,
  expand,
  setExpand,
  liveLink,
  forwardToAmazon,
}: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="lg:hidden flex items-center gap-4">
        <Link  onClick={() => setToggle(false)} href={`${liveLink.link}`} shallow target="_blank">
          <NormalBtn
            mode="day"
           
            className="bg-transparent"
          >
            {liveLink.name}
          </NormalBtn>
        </Link>
        <div className="flex items-center justify-center w-[45px] h-[45px] ">
          <svg
            onClick={() => setToggle(!toggle)}
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1={toggle ? "12.1994" : "13.97"}
              y1={toggle ? "14.916" : "15.03"}
              x2={toggle ? "58.916" : "49.4213"}
              y2={toggle ? "59.8006" : "15.03"}
              stroke="#521575"
              strokeWidth="5.94"
              strokeLinecap="round"
              className="duration-300"
            />
            <line
              x1="13.97"
              y1="36.03"
              x2="49.4213"
              y2="36.03"
              stroke="#521575"
              strokeWidth="5.94"
              strokeLinecap="round"
              className={`${toggle && "opacity-0"} `}
            />
            <line
              x1={toggle ? "14" : "13.97"}
              y1={toggle ? "57.7998" : "59.03"}
              x2={toggle ? "56.7998" : "49.4213"}
              y2={toggle ? "15" : "59.03"}
              stroke="#521575"
              strokeWidth="5.94"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/*  */}

      <div
        className={`flex flex-col right-0 items-end justify-start gap-4 absolute top-20 bg-white/90 backdrop-blur-sm  pr-5 pl-20 py-6 rounded-[10px] shadow-md z-50 w-max lg:hidden duration-300 ${
          toggle ? "translate-x-[0%]" : "translate-x-[200%]"
        }`}
      >
        <menu className="flex flex-col items-end justify-start gap-6 ">
          {links.map((item, idx) => (
            <li
              onClick={() =>
                expand !== idx ? setExpand(idx) : setExpand(null)
              }
              key={idx}
              className="font-semibold text-sm cursor-pointer"
            >
              {item.subLinks ? (
                <div className="relative z-0 flex flex-col items-end justify-center">
                  <span className="flex items-center justify-start gap-1">
                    {item.title}
                    <Image
                      src={arrowDown}
                      alt={""}
                      width={12}
                      height={7}
                      className={`h-[7px] w-auto object-contain duration-300 ${
                        expand === idx && "rotate-180"
                      }`}
                    />
                  </span>
                  {/*  */}
                  {expand === idx && (
                    <div className="flex flex-col items-end pr-4 justify-center gap-4 py-3">
                      {item.subLinks.map((subLink, subLinkIdx) => (
                        <Link
                          key={subLinkIdx}
                          onClick={() => {
                            setExpand(null), setToggle(false);
                          }}
                          href={subLink.link}
                          shallow
                          className="text-center "
                        >
                          {subLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.link} onClick={() => setToggle(false)}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </menu>
        <Link   onClick={() => setToggle(false)} href={`${forwardToAmazon.link}`} shallow>
          <NormalBtn
            mode="day"
          
            className="bg-transparent mt-4 "
          >
            {forwardToAmazon.name}
          </NormalBtn>
        </Link>
      </div>
    </>
  );
};

export default NavMobile;
