import React, { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import main_padding from "@/styles/padding";
import { getPageContent } from "@/libs/contents/wordpress/data";

const bottomLinks = [
  {
    title: "Privacy Policy",
    link: "",
  },
  {
    title: "Terms of Service",
    link: "",
  },
];

const Footer = ({
  data,
}: {
  data: {
    footerLinks: { title: string; link: string }[];
    logo: string;
  };
}) => {
  const [footerLinks, setFooterLinks] = useState<{
    links: { title: string; link: string }[];
    logo: any;
  }>();

  useEffect(() => {
    const ministriesSubLinks = data.footerLinks.map((item) => {
      const d = {
        title: item.title,
        link: `/${item.link}`,
      };
      return d;
    });
    setFooterLinks({
      links: ministriesSubLinks,
      logo: data.logo,
    });
  }, [data.footerLinks, data.logo]);

  if (!footerLinks?.links && !footerLinks?.logo) return;

  const isData = [
    {
      title: "Our Leadership",
      link: "/our-leadership",
    },
    ...footerLinks.links!,
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <SectionWrapper classBottom={`${main_padding.t} flex-col items-center`}>
      <Link href="/" scroll shallow data-aos="fade-up" data-aos-duration="700">
        <Image
          src={footerLinks.logo}
          alt=""
          loading="lazy"
          height={120}
          width={160}
          className=""
        />
      </Link>

      <menu className="flex items-center justify-center gap-6 lg:mt-16 md:mt-14 mt-6 max-sm:flex-wrap ">
        {isData.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.link}
              shallow
              className="font-semibold text-base px-4 py-2 border rounded-lg hover:border-black border-transparent duration-300"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </menu>

      <div
        className={`w-full border-t border-black py-4 mt-16 flex items-center sm:justify-between justify-center lg:gap-20 md:gap-14 gap-6 flex-wrap max-sm:text-center`}
      >
        <p className="text-sm">
          Copyrights © {new Date().getFullYear()}. All Rights Reserved. <br />
          Designed by Codeface.
        </p>

        <div className="flex items-center justify-center gap-4">
          {bottomLinks.map((item, idx) => (
            <Link key={idx} href={item.link} className="text-sm underline ">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
