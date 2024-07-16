import Loading from "@/app/loading";
import About from "@/components/[programs_id]/About";
import HeroSection from "@/components/[programs_id]/HeroSection";
import Layout from "@/components/layout";

import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import React from "react";

const page = async ({ params }: any) => {
  const data: MinistriesType = await getPageContent(
    "ministries-by-slug",
    params.programs_id
  );

  const isData = data.pages.nodes[0];

  if (!isData) return <Loading />;
  return (
    <>
      <HeroSection
        heroSectionImage={isData?.acf.bannerSection.bannerImage.sourceUrl}
        subtitle={isData?.acf.bannerSection.subtitle}
        title={isData?.acf.bannerSection.title}
        statement={isData?.acf.bannerSection.subtitle}
      />

      <About
        logo={isData?.acf.firstSection.icon.sourceUrl}
        description={descriptionExtractor(isData?.acf.firstSection.content)}
        button={{
          title: isData?.acf.firstSection.buttonText,
          link: isData?.acf.firstSection.buttonLink,
        }}
      />
    </>
  );
};

export default page;
