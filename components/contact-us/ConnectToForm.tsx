import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import Link from "next/link";
import { NormalBtn } from "@/ui/buttons";

const ConnectToForm = ({ data }: { data: ContactUsPageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <HeadTitle border className="text-center max-w-[800px]">
        {data.page.acf.connectToForm.title}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.connectToForm.subtitle}
      </HeadSubtitle>
      <Link
        data-aos="fade-up"
        data-aos-duration="700"
        href={`${data.page.acf.connectToForm.button.link}`}
        target="_blank"
        className="mt-6"
      >
        <NormalBtn>{data.page.acf.connectToForm.button.title}</NormalBtn>
      </Link>
    </SectionWrapper>
  );
};

export default ConnectToForm;
