import { PlaceholderImage } from "@src/assets/svg";
import ArchitectureFeatureCard from "./ArchitectureFeatureCard";

export default function ArchitectureFeatures() {
  return (
    <div className=" p-5 lg:p-20  justify-center gap-20">
      <div className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-96 font-syne text-center ">
        Secure and Scalable Architecture
      </div>

      <div className="pt-10 md:px-20 text-center md:text-lg text-gray_card">
        NumenEx utilizes a robust and secure architecture to ensure optimal
        performance and user data protection.
      </div>

      <div className="flex flex-row items-start justify-between  p-10">
        <div className="flex flex-col gap-5  flex-grow ">
          {[...Array(4)].map((_, index) => (
            <ArchitectureFeatureCard key={index} />
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
