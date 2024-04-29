import "./App.css";
import { Dashboard } from "./assets/svg";
import CoinBanner from "./components/CoinBanner";
import FeaturesBody from "./components/FeaturesBody";
import Header from "./components/Header";
import IntroductionBody from "./components/IntroductionBody";
import TrendingCryptos from "./components/TrendingCryptos";

export default function App() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-fixed">
      <Header />
      <IntroductionBody />
      <Dashboard
        src="src/assets/svg/dashboard.svg"
        className="p-20 h-50 justify-center "
      />

      <FeaturesBody />
      <CoinBanner />
      <TrendingCryptos />
    </div>
  );
}
