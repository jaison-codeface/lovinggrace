import Image from "next/image";
import Link from "next/link";

const RecentBlogs = ({ data }: { data: BlogsType }) => {
  return (
    <div className="flex flex-col md:max-w-[280px]">
      <h3 className="text-lg text-secondary font-semibold ">Recent Blogs</h3>
      <div className="flex flex-col gap-6 mt-4 ">
        {[...data.blogs.edges].splice(0, 4).map((item, idx) => (
          <Link
            key={idx}
            href={`/blog/${item.node.slug}`}
            shallow
            className=" gap-6 flex items-center"
          >
            <Image
              src={item.node.acf.bannerImage.sourceUrl}
              alt=""
              width={400}
              height={400}
              className="object-cover w-[75px] h-auto rounded-md aspect-square"
            />

            <div className="flex flex-col ">
            
              <h5 className="text-secondary font-bold line-clamp-1">
                {item.node.acf.title}
              </h5>
              <p className="line-clamp-2 text-xs mt-1 font-semibold leading-[120%]">
                {item.node.acf.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
