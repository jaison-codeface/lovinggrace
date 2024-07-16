import useMousePosition from "@/libs/hooks/useMousePosition";
import { motion } from "framer-motion";
import React from "react";

const Curser = () => {
  const { x, y } = useMousePosition();
  const size = 684;
  return (
    <main className="h-full w-full inset-0 fixed top-0 left-0 -z-10 bg-white max-md:hidden pointer-events-none opacity-30">
      <motion.div
        style={{
          width: size + "px",
          height: size + "px",
        }}
        className=" flex items-center justify-center"
        animate={{
          x: `${x - size / 2}px`,
          y: `${y - size / 2}px`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 2, delay: 0.5 }}
      >
        <svg
          width="1256"
          height="1349"
          viewBox="0 0 1256 1349"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          style={{
            animationDuration: "20s",
          }}
        >
          <g filter="url(#filter0_f_48_87)">
            <path
              d="M784.579 702.076C779.156 643.968 414.625 318.369 392.544 299C345.605 438.007 264.396 737.561 315.066 823.715C378.404 931.409 392.544 906.422 508.372 972.666C624.201 1038.91 640.859 978.283 721.048 906.422C801.237 834.562 790.002 760.184 784.579 702.076Z"
              fill="#4A165F"
            />
          </g>
          <g filter="url(#filter1_f_48_87)">
            <path
              d="M507.211 1017.08C549.671 1048.17 933.472 1049.83 956.476 1049.73C881.056 944.406 709.826 727.743 628.259 703.658C526.302 673.553 537.369 695.429 441.095 716.608C344.821 737.788 379.379 781.752 393.952 865.079C408.526 948.407 464.75 985.988 507.211 1017.08Z"
              fill="#DD3333"
              fillOpacity="0.34"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_48_87"
              x="0"
              y="0"
              width="1087.4"
              height="1300.15"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="149.5"
                result="effect1_foregroundBlur_48_87"
              />
            </filter>
            <filter
              id="filter1_f_48_87"
              x="76.8184"
              y="389.892"
              width="1178.66"
              height="958.84"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="149.5"
                result="effect1_foregroundBlur_48_87"
              />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </main>
  );
};

export default Curser;
