import NavigationBtns from "@/components/blog/[blog_id]/NavigationBtns";
import Layout from "@/components/layout";
import HeroSection from "@/components/our-leadership/[team_id]/HeroSection";
import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";

import React from "react";



const page = async ({ params }: any) => {
  const teams: TeamsType = await getPageContent("teams");
  const data = teams.teams.edges.filter(
    (item) => item.node.slug === params.team_id
  )[0];

  const index = teams.teams.edges.findIndex(
    (item) => item.node.slug === params.team_id

  );

  const buttons = [
    {
      title: "Prev",
      link:
        index === 0
          ? ""
          : `/our-leadership/${teams.teams.edges[index - 1].node.slug}`,
    },
    {
      title: "Next",
      link:
        index === teams.teams.edges.length - 1
          ? ""
          : `/our-leadership/${teams.teams.edges[index + 1].node.slug}`,
    },
  ];
  return (
    <>
      <HeroSection
        heroSectionImage={data.node.acf.teamMemberDetails.image.sourceUrl}
        title={data.node.acf.teamMemberDetails.name}
        description={descriptionExtractor(
          data.node.acf.teamMemberDetails.description
        )}
        position={data.node.acf.teamMemberDetails.designation}
      />

      <NavigationBtns buttons={buttons} />
    </>
  );
};

export default page;
