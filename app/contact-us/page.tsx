import HeroSection from "@/components/contact-us/HeroSection";
import OurMinistries from "@/components/contact-us/OurMinistries";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import React from "react";
import Loading from "../loading";
import ConnectToForm from "@/components/contact-us/ConnectToForm";
import SocialMedia from "@/components/contact-us/SocialMedia";

const page = async () => {
  const data: ContactUsPageType = await getPageContent("contact-us");
  if (!data) return <Loading />;

  return (
    <>
      <>
        <HeroSection data={data} />
        <SocialMedia data={data} />
        <ConnectToForm data={data} />
        <OurMinistries data={data} />
      </>
    </>
  );
};

export default page;
