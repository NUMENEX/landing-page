import { StarLogo } from "@src/assets/svg";

interface IArchitectureFeatureCard {
  icon: JSX.Element;
  title: string;
  description: string;
}
export default function ArchitectureFeatureCard({
  description,
  title,
  icon,
}: IArchitectureFeatureCard) {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-start items-center gap-5 ">
        <div className="flex flex-row justify-center items-center p-4 gap-2 w-14 h-14 bg-purple-100 rounded-full">
          {icon}
        </div>
        <div className="font-manrope font-semibold text-[20px] leading-33 flex items-center capitalize ">
          {title}
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-5 ">
        <div className="flex flex-row justify-center items-center p-4 gap-2 w-14 h-14  rounded-full"></div>
        <div className="text-secondary xl:pr-60 ">{description}</div>
      </div>
    </div>
  );
}
