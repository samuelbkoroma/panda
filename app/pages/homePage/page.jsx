"use client";

import Navbar from "@/app/components/Navbar-1";
import Navbars from "@/app/components/Nav-2";
import Hero from "@/app/components/Hero";
import HeadSec from "@/app/components/HeadSec";
import TopProduct from "@/app/components/Product/TopProduct";
import Why from "@/app/components/Why";
import NewArrival from "@/app/components/Product/Newarrivals";
import OurFeatured from "@/app/components/Product/OurFeatured";
import Fresh from "@/app/components/Product/Fresh";
import Blog from "@/app/components/Blog";
import Best from "@/app/components/Best";
import Footer from "@/app/components/Footer";
import ShopNowCards from "@/app/components/Product/shopNowCards";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Navbars />
      <Hero />
      <HeadSec />
      <TopProduct />
      <Why />
      <NewArrival /> <br />
      <ShopNowCards />
      <OurFeatured />
      <Fresh />
      <Blog />
      <Best />
      <Footer />
    </div>
  );
};

export default HomePage;
