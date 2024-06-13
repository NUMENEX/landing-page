import {
  CPUIcon,
  PlaceholderImage,
  ScanningIcon,
  ShapesIcon,
  ThreeLayerscon,
} from "@src/assets/svg";
import ArchitectureFeatureCard from "./ArchitectureFeatureCard";

export default function ArchitectureFeatures() {
  const archFeatures = [
    {
      title: "Layer 1 Blockchain with Subnets, Miners, Validators & Feeders.",
      description:
        "Facilitates efficient order execution and rapid trade confirmation.",
      icon: <CPUIcon />,
    },
    {
      title: "Output Models Into Digital Twin Traders",
      description:
        "Enables secure and decentralized AI model training, fostering collaboration and innovation.",
      icon: <ThreeLayerscon />,
    },
    {
      title: "Decentralized Futures Trading DEX.",
      description:
        "Facilitates efficient order execution and rapid trade confirmation.",
      icon: <ScanningIcon />,
    },
    {
      title: "Analytics, Scores, Market Positioning For Tokens",
      description:
        "Designed for users of all experience levels, making the platform accessible and user-friendly.",
      icon: <ShapesIcon />,
    },
  ];
  return (
    <div className="p-5 lg:p-20  justify-center gap-20">
      <div className="text-60px font-semibold leading-60px font-syne text-center ">
        Secure and Scalable Architecture
      </div>

      <p className="pt-5 md:px-20 text-center md:text-lg text-secondary">
        NumenEx utilizes a robust and secure architecture to ensure optimal
        performance and user data protection.
      </p>
      <div className="flex flex-row items-start justify-between p-10">
        <div className="flex flex-col gap-5  flex-grow ">
          {archFeatures.map((feature) => (
            <ArchitectureFeatureCard
              key={feature.title}
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        <div className="flex">
          <div className="flex flex-col justify-between">
            <PlaceholderImage
              className="hidden xl:block"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
