"use client";

import Tabs from "./components/Banners/FunTabs";
import Best from "./components/Best";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import HeadSec from "./components/HeadSec";
import Hero from "./components/Hero";
import Navbars from "./components/Nav-2";
import Navbar from "./components/Navbar-1";
import Fresh from "./components/Product/Fresh";
import NewArrival from "./components/Product/Newarrivals";
import OurFeatured from "./components/Product/OurFeatured";
import TopProduct from "./components/Product/TopProduct";
import Why from "./components/Why";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Navbars />
      <Hero />
      <HeadSec />
      <TopProduct />
      <Why />
      <NewArrival /> <br />
      <OurFeatured />
      <Fresh />
      <Blog />
      <Best />
      <Footer />
    </div>
  );
};

export default Page;
