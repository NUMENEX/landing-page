import { StarLogo } from "@src/assets/svg";

export default function ArchitectureFeatureCard() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-start items-center gap-5 ">
        <div className="flex flex-row justify-center items-center p-4 gap-2 w-14 h-14 bg-purple-100 rounded-full">
          <StarLogo />
        </div>
        <div className="font-syne font-semibold text-[20px] leading-33 flex items-center capitalize ">
          High Performance Matching Engine
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-5 ">
        <div className="flex flex-row justify-center items-center p-4 gap-2 w-14 h-14  rounded-full"></div>
        <div className="text-secondary xl:pr-60 ">
          Facilitates efficient order execution and rapid trade confirmation.
        </div>
      </div>
    </div>
  );
}
