import Image from "next/image";
import logo from "@/assets/icons/logo.webp";

const Loading = () => {
  return (
    <div className="w-screen h-svh bg-off-white flex items-center justify-center ">
      <div
        role="status"
        className="flex items-center justify-center sm:h-40 h-20 max-w-sm  rounded-lg animate-pulse"
      >
        <Image
          src={logo}
          alt=""
          placeholder="empty"
          priority
          className="h-full w-full object-contain"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
