import "./App.css";
import FeaturesBody from "./components/FeaturesBody";
import Header from "./components/Header";
import IntroductionBody from "./components/IntroductionBody";

export default function App() {
  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(src/assets/svg/elipse.svg)` }}
    >
      <Header />
      <IntroductionBody />
      <img src="src/assets/svg/dashboard.svg" className="px-20 p-20"></img>

      <FeaturesBody />
    </div>
  );
}
