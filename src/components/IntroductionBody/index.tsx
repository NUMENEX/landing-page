import { StarGoldenLogo } from "../../assets/svg";

export default function IntroductionBody() {
  return (
    <div className="flex flex-col py-[20px]">
      <div className="px-5 md:px-20 xl:px-40 py-5 gap-20 text-center">
        <div className="flex justify-center mb-5">
          <div className="flex flex-row p-1 bg-purple-100  text-primary rounded-md gap-2 justify-center items-center">
            <StarGoldenLogo className="w-5 h-5" />
            <p className="text-base font-normal self-center">
              First AI powered market making and trading platform
            </p>
          </div>
        </div>
        <div className="flex flex-col font-semibold font-syne text-80px leading-80px text-chinese-black">
          <h1>Incentivizing All Crypto Activities with </h1>
          <h1>
            <span className="text-primary">{`   AI-Powered Layer 1 Blockchain`}</span>
          </h1>
        </div>

        <div className="pt-5 text-center lg:text-lg text-arsenic-gray">
          An AI-powered centralized exchange (CEX) offering advanced trading
          features and insights. Our algorithms optimize efficiency, strategies,
          and provide personalized recommendations for all traders.
        </div>
      </div>

      <div className="flex flex-row 2xl:pt-[20px] gap-5 justify-center">
        <button className="primaryButton">Start trading with AI now</button>
        <button className="secondaryButton ">See Whitepaper</button>
      </div>
    </div>
  );
}
