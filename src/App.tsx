import "./App.css";
import { Dashboard, PlaceholderImage, StarLogo } from "./assets/svg";
import ArchitectureFeatures from "./components/ArchitectureFeatures";
import ArchitectureFeatureCard from "./components/ArchitectureFeatures/ArchitectureFeatureCard";
import CoinBanner from "./components/CoinBanner";
import FAQ from "./components/FAQ";
import FeaturesBody from "./components/FeaturesBody";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroductionBody from "./components/IntroductionBody";
import TrendingCryptos from "./components/TrendingCryptos";

export default function App() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-fixed">
      <Header />
      <IntroductionBody />

      <div className="max-w-screen p-20">
        <Dashboard
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>

      <CoinBanner />
      <FeaturesBody />
      <TrendingCryptos />
      <ArchitectureFeatures />
      <FAQ />
      <Footer />
    </div>
  );
}
