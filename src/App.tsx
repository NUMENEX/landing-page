import "./App.css";
import { CommuneIcon, NorthEastArrowIcon, NumenexIcon } from "./assets";
import Footer from "./components/Footer";
import { cn } from "./utils/cn";

export default function App() {
  return (
    <div className="bg-main-bg bg-no-repeat bg-center bg-cover w-full h-[calc(100vh-84px)] flex flex-col gap-[52px] items-center justify-center">
      <div className="flex items-center gap-8">
        <NumenexIcon />
        <div className="w-px h-[62px] bg-[linear-gradient(0deg,#FFFFFF_0.13%,#E7C9FF_100%)]" />
        <CommuneIcon />
      </div>
      <div className="flex gap-5 flex-col">
        <h1 className="text-center font-extrabold text-[80px] leading-[90px] font-manrope bg-[linear-gradient(0deg,#FFFFFF_0.13%,#E7C9FF_100%)] bg-clip-text text-transparent">
          Human Sentiment{" "}
          <span className="text-[#130033]">
            that
            <br /> Drives
          </span>{" "}
          Market Predictions
        </h1>
        <p className="font-normal text-[20px] font-roboto text-center leading-[32px] bg-[linear-gradient(0deg,#FFFFFF_0.13%,#E7C9FF_100%)] bg-clip-text text-transparent">
          A platform that combines human sentiment with crypto and blockchain
          technology to predict market <br /> trends. We're in the data
          collection phase and invite you to help shape the future of market
          forecasting. <br />
          Stay tuned for updates as we prepare to launch.
        </p>
      </div>
      <button
        className={cn(
          "relative bg-[#13003366] rounded-[100px] h-[64px] px-10 flex gap-2 items-center font-poppins text-xl font-normal text-white",
          "testradial",
          "before:content-[''] before:absolute before:inset-0 before:rounded-[100px] before:p-[2px]  before:bg-[linear-gradient(270deg,rgba(25,0,41,0)_0.06%,rgba(85,130,237,0.48)_25.9%,rgba(251,248,255,0.8)_52.19%,_rgba(85,130,237,0.48)_78.48%,rgba(25,0,41,0)_100.06%)] "
        )}
        onClick={() =>
          window.open("https://discord.gg/communeai", "_blank", "noopener")
        }
      >
        Join Us Now <NorthEastArrowIcon />
      </button>
      <Footer />
    </div>
  );
}
