import HeroSection from "@/components/Home/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/layout";
import main_padding from "@/styles/padding";
import LeftContentRightImg from "@/ui/LeftContentRightImg";
import OurPrograms from "@/components/Home/OurPrograms";
import Slider from "@/components/Home/Slider";
import VisionAndMission from "@/components/Home/VisionAndMission";
import JoinUs from "@/components/Home/JoinUs";
import Ministering from "@/components/Home/Ministering";

import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import Loading from "./loading";
import Associated from "@/components/Home/Associated";

export default async function Home() {
  const [data, teams]: [HomePageType, TeamsType] = await Promise.all([
    getPageContent("home"),
    getPageContent("teams"),
  ]);

  // const data: HomePageType = await getPageContent("home");

  if (!data && !teams) return <Loading />;

  return (
    <>
      <HeroSection data={data} />
      <SectionWrapper classBottom={main_padding.y}>
        <LeftContentRightImg
          border={true}
          title={data.page.acf.secondSectionChurch.title}
          subtitle={data.page.acf.secondSectionChurch.description}
          btn1={{
            title: data.page.acf.secondSectionChurch.button1Text,
            link: data.page.acf.secondSectionChurch.button1Link,
          }}
          btn2={{
            title: data.page.acf.secondSectionChurch.button2Text,
            link: data.page.acf.secondSectionChurch.button2Link,
          }}
          image={data.page.acf.secondSectionChurch.sectionImage.sourceUrl}
          playBtn={true}
          videoLink={data.page.acf.secondSectionChurch.videoLink}
          direction="opposite"
        />
      </SectionWrapper>

      <OurPrograms data={data} />

      <Slider data={data} />

      <VisionAndMission data={data} />
      <JoinUs data={data} />
      <Ministering data={data} teams={teams} />
      <Associated data={data} />
    </>
  );
}
