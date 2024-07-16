import main_padding from "@/styles/padding";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionWrapper = ({
  children,
  classTop,
  classBottom,
}: {
  children: React.ReactNode;
  classTop?: string;
  classBottom?: string;
}) => {
  return (
    <section
      className={twMerge(`${main_padding.x} w-full flex flex-1`, classTop)}
    >
      <div
        className={twMerge("max-w-[1650px] mx-auto flex w-full", classBottom)}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
