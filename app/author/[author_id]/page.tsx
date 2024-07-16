import Loading from "@/app/loading";
import SectionWrapper from "@/components/SectionWrapper";
import HeroSection from "@/components/blog/[blog_id]/HeroSection";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import main_padding from "@/styles/padding";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// export async function generateStaticParams() {
//   const data: UsersType = await getPageContent("users");

//   return data.users.nodes.map((post) => ({
//     author_id: post.slug,
//   }));
// }

const page = async ({ params }: any) => {
  const data: BlogsBySlugType = await getPageContent(
    "blogs-by-slug",
    params.author_id
  );

  if (!data) return <Loading />;

  return (
    <>
      <HeroSection
        heroSectionImage={data.users.edges[0].node.avatar.url}
        author={""}
        title={data.users.edges[0].node.name}
        imageContain={true}
      />
      <SectionWrapper
        classBottom={`${main_padding.b} grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6`}
      >
        {data.users.edges[0].node.blogs.edges.map((item, idx) => (
          <Link
            href={`/blog/${item.node.slug}`}
            key={idx}
            shallow
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={idx * 300}
            className="bg-off-white rounded-[10px] overflow-hidden"
          >
            <Image
              src={item.node.acf.bannerImage.sourceUrl}
              alt=""
              width={500}
              height={500}
              loading="lazy"
              className="w-full aspect-[16/12] h-auto object-cover rounded-b-[10px]"
            />
            <div className="px-6 py-8">
              <h2
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="text-lg font-semibold text-primary leading-[150%]"
              >
                {item.node.acf.title}
              </h2>

              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="mt-2 text-sm leading-[150%] line-clamp-3"
              >
                {item.node.acf.content}
              </p>
            </div>
          </Link>
        ))}
      </SectionWrapper>
    </>
  );
};

export default page;
