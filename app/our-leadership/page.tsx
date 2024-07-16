import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import { NormalBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loading from "../loading";

const Page = async () => {
  // const teams: TeamsType = await getPageContent("teams");

  const [data, teams]: [TeamPageType, TeamsType] = await Promise.all([
    getPageContent("team-page"),
    getPageContent("teams"),
  ]);

  if (!data && !teams) return <Loading />;

  return (
    <>
      <SectionWrapper
        classBottom={`${main_padding.y} flex-col items-center mt-20`}
      >
        <HeadTitle border className="text-center max-w-[900px]">
          {data.page.acf.title}
        </HeadTitle>
        <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
          {data.page.acf.description}
        </HeadSubtitle>
        <section className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-10 lg:mt-16 md:mt-14 mt-6">
          {teams.teams.edges
            .sort(() => -1)
            .map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="w-full flex flex-col border border-black h-full rounded-xl "
              >
                <Image
                  src={item.node.acf.teamMemberDetails.image.sourceUrl}
                  alt=""
                  loading="lazy"
                  width={
                    item.node.acf.teamMemberDetails.image.mediaDetails.width
                  }
                  height={
                    item.node.acf.teamMemberDetails.image.mediaDetails.height
                  }
                  className=" rounded-[10px] overflow-hidden  aspect-[16/17] shrink-0 max-h-[900px] object-cover object-top"
                />
                <div className="flex flex-col h-full md:py-6 py-3 md:px-10 px-3">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay={idx * 300}
                    className=" font-bold text-black text-sm"
                  >
                    {item.node.acf.teamMemberDetails.designation}
                  </p>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay={idx * 300}
                    className="mt-1 lg:text-3xl text-2xl font-bold text-primary"
                  >
                    {item.node.acf.teamMemberDetails.name}
                  </h2>
                  <HeadSubtitle className="mt-2">
                    {descriptionExtractor(
                      item.node.acf.teamMemberDetails.details
                    )}
                  </HeadSubtitle>

                  <div className="flex flex-col mt-auto">
                    {item.node.acf.teamMemberDetails.buttons && (
                      <div className="flex flex-col w-full mt-8">
                        <h3
                          data-aos="fade-up"
                          data-aos-duration="700"
                          data-aos-delay={idx * 300}
                          className="md:text-2xl text-xl font-bold "
                        >
                          {item.node.acf.teamMemberDetails.buttonsTitle}
                        </h3>
                        <div
                          data-aos="fade-up"
                          data-aos-duration="700"
                          data-aos-delay={idx * 300}
                          className="mt-4 flex items-center justify-start gap-4"
                        >
                          {item.node.acf.teamMemberDetails.buttons.map(
                            (btn, btnIdx) => (
                              <NormalBtn
                                key={btnIdx}
                                href={btn.link}
                                mode={btnIdx === 0 ? "night" : "day"}
                              >
                                {btn.title}
                              </NormalBtn>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    <div className="mt-8 flex items-center justify-between gap-10">
                      <div className="flex items-center gap-4">
                        {item.node.acf.teamMemberDetails.socialMedia?.map(
                          (socialMedia, socialMediaIdx) => (
                            <Link
                              key={socialMediaIdx}
                              href={`${socialMedia.link}`}
                              shallow
                              data-aos="fade-up"
                              data-aos-duration="700"
                              data-aos-delay={idx * 300}
                              target="_blank"
                              className="w-8 h-8 flex items-center justify-center border border-black rounded-md"
                            >
                              <Image
                                src={socialMedia.icon.sourceUrl}
                                alt=""
                                loading="lazy"
                                width={20}
                                height={20}
                                className="h-[14px] w-auto object-contain"
                              />
                            </Link>
                          )
                        )}
                      </div>

                      <Link href={`/our-leadership/${item.node.slug}`} shallow>
                        <NormalBtn
                          data-aos="fade-up"
                          data-aos-duration="700"
                          data-aos-delay={idx * 300}
                          className="sm:text-[1rem]"
                        >
                          Read More
                        </NormalBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </SectionWrapper>
    </>
  );
};

export default Page;
