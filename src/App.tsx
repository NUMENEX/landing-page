import "./App.css";
import CoinBanner from "./components/CoinBanner";
import FeaturesBody from "./components/FeaturesBody";
import Header from "./components/Header";
import IntroductionBody from "./components/IntroductionBody";
import TrendingCryptos from "./components/TrendingCryptos";

export default function App() {
  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(src/assets/svg/elipse.svg)` }}
    >
      <Header />
      <IntroductionBody />

      <img src="src/assets/svg/dashboard.svg" className="px-20 p-20 h-50"></img>

      <FeaturesBody />
      <CoinBanner />
      <TrendingCryptos />
    </div>
  );
}
