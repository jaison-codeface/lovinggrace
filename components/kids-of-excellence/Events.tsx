import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import React from "react";
import LeftContentRightImg from "@/ui/LeftContentRightImg";



const Events = ({ data }: { data: KidsOfExcellenceType }) => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col items-center gap-20`}
    >
      {data.page.acf.secondSection.programmes.map((item, idx) => (
        <LeftContentRightImg
          key={idx}
          image={item.image.sourceUrl}
          title={item.title}
          subtitle={item.description}
          direction={idx % 2 === 0 ? "opposite" : "normal"}
        />
      ))}
    </SectionWrapper>
  );
};

export default Events;
