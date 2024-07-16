import type { Metadata } from "next";
import { Asap, Manrope } from "next/font/google";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";

const manrope = Manrope({ subsets: ["latin"], variable: "--font--manrope" });
const asap = Asap({ subsets: ["latin"], variable: "--font--asap" });

export const metadata: Metadata = {
  title: "Loving Grace Assembly",
  description: "",
  manifest: "site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [blog, utilities, contactUs]: [
    BlogsType,
    UtilitiesType,
    ContactUsPageType,
  ] = await Promise.all([
    getPageContent("blogs"),
    getPageContent("utilities"),
    getPageContent("contact-us"),
  ]);

  const data: {
    blogs: any[];
    ministries: {
      title: string;
      link: string;
    }[];
    liveLink: {
      name: string;
      link: string;
    };
    logo: any;
    forwardToAmazon: {
      name: string;
      link: string;
    };
    footerLinks: {
      title: string;
      link: string;
    }[];
    socialMedia: {
      icon: {
        sourceUrl: string;
        mediaDetails: {
          height: number;
          width: number;
        };
      };
      link: string;
    }[];
  } = {
    blogs: blog.blogs.edges,
    logo: utilities.utility.acf.logo.sourceUrl,
    ministries: utilities.utility.acf.ministriesMenuLinks,
    footerLinks: utilities.utility.acf.footerLinks,
    liveLink: utilities.utility.acf.liveLink,
    forwardToAmazon: utilities.utility.acf.forwardToAmazon,
    socialMedia: contactUs.page.acf.socialMedia.links,
  };
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className={`${manrope.className} ${manrope.variable} ${asap.variable}`}
      >
        <Layout data={data}>{children}</Layout>
      </body>
    </html>
  );
}
