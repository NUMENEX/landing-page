import { AnalyticsImage, Dashboard } from "@src/assets/svg";
import ArchitectureFeatures from "@src/components/ArchitectureFeatures";
import CoinBanner from "@src/components/CoinBanner";
import FAQ from "@src/components/FAQ";
import FeaturesBody from "@src/components/FeaturesBody";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import IntroductionBody from "@src/components/IntroductionBody";
import Roadmap from "@src/components/Roadmap";
import TrendingCryptos from "@src/components/TrendingCryptos";
import React from "react";

export default function Home() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-fixed">
      <Header />
      <IntroductionBody />

      <div className="max-w-screen px-5 md:px-20 xl:px-40 pt-10">
        <AnalyticsImage
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>

      <CoinBanner />
      <FeaturesBody />
      <TrendingCryptos />
      <ArchitectureFeatures />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}
