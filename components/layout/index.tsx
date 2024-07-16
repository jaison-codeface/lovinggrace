"use client";
import React, { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Curser from "./Curser";
import Loading from "@/app/loading";


const Layout = ({
  children,
  headerTransparent,
  data,
}: {
  children: ReactNode;
  headerTransparent?: boolean;
  data: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        once: true,
        // disable: true,
      });
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(true);
    }, 1200);

    return () => clearTimeout(t);
  }, []);

  if (!isLoading) return <Loading />;
  return (
    <>
      <main className="flex flex-col w-full flex-1 items-center justify-center text-black relative z-10 overflow-hidden ">
        <Header headerTransparent={headerTransparent} data={data} />
        {children}
        <Footer data={data} />
      </main>
      <Curser />
    </>
  );
};

export default Layout;
