// import HeroSection from "@/components/[programs_id]/HeroSection";
// import Layout from "@/components/layout";
// import React from "react";
// import Events from "@/components/kids-of-excellence/Events";
// import Guiding from "@/components/kids-of-excellence/Guiding";
// import { getPageContent } from "@/libs/contents/wordpress/data";
// import Loading from "@/app/loading";

// const page = async () => {
//   const data: KidsOfExcellenceType = await getPageContent("kids-of-excellence");

//   if (!data) return <Loading />;;
//   return (
//     <>
//       <HeroSection
//         heroSectionImage={data.page.acf.bannerImage.sourceUrl}
//         title="Kids Of Excellence"
//         subtitle=""
//       />
//       <Guiding data={data} />
//       <Events  data={data}/>
//     </>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
