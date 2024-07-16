import SectionWrapper from "@/components/SectionWrapper";
import { getPageContent } from "@/libs/contents/wordpress/data";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import { NormalBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const data: BuyNowPageType = await getPageContent("buy-now");
  return (
    <SectionWrapper
      classBottom={`${main_padding.b} flex-col items-center mt-40`}
    >
      <div className="flex items-start justify-center flex-wrap  w-full lg:gap-10 gap-6">
        {data.page.acf.products.map((item, idx) => (
          <div
            key={idx}
            data-aos-duration="700"
            data-aos-delay={idx * 300}
            className="bg-off-white rounded-[10px] overflow-hidden flex flex-col items-start justify-start p-4 sm:w-[280px] w-full "
          >
            <Image
              data-aos="fade-up"
              src={item.image.sourceUrl}
              alt=""
              width={240}
              height={240}
              loading="lazy"
              className="w-full h-auto object-contain rounded-md overflow-hidden"
            />
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              className="text-primary font-bold text-base mt-3 line-clamp-1 "
            >
              {item.title}
            </h2>
            {item.subtitle && (
              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="text-black/90 text-xs mt-1 line-clamp-2"
              >
                {item.subtitle}
              </p>
            )}
            <Link href={`${item.link}`} target="_blank" className="mt-3">
              <NormalBtn className="border-none">
                {data.page.acf.productButtonName}
              </NormalBtn>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default page;


