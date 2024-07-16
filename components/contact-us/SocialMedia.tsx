import main_padding from "@/styles/padding";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = ({ data }: { data: ContactUsPageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.b} flex-col items-center`}>
      <HeadTitle border className="text-center max-w-[900px]">
        {data.page.acf.socialMedia.title}
      </HeadTitle>
      {data.page.acf.socialMedia.subtitle && (
        <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
          {data.page.acf.socialMedia.subtitle}
        </HeadSubtitle>
      )}
      <div className="flex sm:w-max w-full flex-wrap items-center justify-center max-w-full lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.page.acf.socialMedia.links.map((item, idx) => (
          <Link
            href={`${item.link}`}
            target="_blank"
            key={idx}
            className="bg-off-white rounded-[10px] overflow-hidden flex flex-col items-center justify-start p-6 aspect-square"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              src={item.icon.sourceUrl}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SocialMedia;
