import { StarGoldenLogo } from "../../assets/svg";

export default function IntroductionBody() {
  return (
    <div>
      <div className="px-5 md:px-20 xl:px-40 py-5 gap-20 text-center">
        <div className="flex justify-center mb-5">
          <div className=" flex flex-row p-1 bg-purple-100  text-primary rounded-md gap-2 justify-center items-center">
            <StarGoldenLogo />
            <div className="text-md md:text-lg">
              First AI powered market making and trading platform
            </div>
          </div>
        </div>

        <div className="text-3xl md:text-4xl lg:text-7xl font-semibold leading-96 font-syne  ">
          <div>
            <span>Revolutionizing Crypto Trading with </span>
            <span className="text-primary">AI-Powered Market Making</span>
          </div>
        </div>

        <div className="pt-10 text-center lg:text-lg text-secondary">
          An AI-powered centralized exchange (CEX) offering advanced trading
          features and insights. Our algorithms optimize efficiency, strategies,
          and provide personalized recommendations for all traders.
        </div>
      </div>

      <div className="flex flex-row  gap-5 justify-center  ">
        <div className="primaryButton p-10">Start trading with AI now</div>
        <div className="secondaryButton ">See Whitepaper</div>
      </div>
    </div>
  );
}
