import {
  BitcoinConvertIcon,
  ConvertShapeIcon,
  DocumentCodeIcon,
  GridEditIcon,
  StarLogo,
} from "../../assets/svg";
import FeatureCard from "../FeatureCard";

export default function FeaturesBody() {
  const featureData = [
    {
      title: "AI driven exchange for your personalized crypto portfolio.",
      description:
        "Personalize your portfolio with our top-performing AI models. Customize strategies to meet your goals hassle-free.",
      logo: <GridEditIcon className="w-6 h-6" />,
    },
    {
      title: "AI driven exchange for your token listing.",
      description:
        "Access our no-cost MM AI model. Lowest integration fee, unmatched market prices. Customize MM AI for targeted trading.",
      logo: <DocumentCodeIcon className="w-6 h-6" />,
    },
    {
      title: "AI driven exchange with Trading Digital Twin.",
      description:
        "Train your trading behavior to create AI Trading Digital Twin. Control your funds securely with non-custodial addresses.",
      logo: <ConvertShapeIcon className="w-6 h-6" />,
    },
    {
      title: "An overall market making and trading platform.",
      description:
        "Train your trading behavior to create AI Trading Digital Twin. Control your funds securely with non-custodial addresses.",
      logo: <BitcoinConvertIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div className="px-5 py-20 md:p-20 justify-center gap-20">
      <div className="text-60px font-semibold leading-60px font-manrope text-center text-smoky-black">
        <h1>AI Empowers Trading, Redefining</h1>
        <h1> Cryptocurrency Landscape</h1>
      </div>
      <div className="pt-5 md:px-20 text-center md:text-lg text-secondary">
        With cutting-edge AI technology, we empower traders to trade with
        confidence, optimize strategies, and stay ahead of the curve in the
        ever-evolving world of cryptocurrency.
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-8">
          {featureData.map((data, index) => (
            <FeatureCard
              key={index}
              title={data.title}
              description={data.description}
              logo={data.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
