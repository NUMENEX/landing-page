import React, { Component } from "react";
import { RightIcon, StarLogo } from "../../assets/svg";
interface FeatureCardProps {
  title: string;
  description: string;
  logo: React.ReactNode;
}
export default function FeatureCard(props: FeatureCardProps) {
  const [show, setShow] = React.useState(false);

  const updateShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-80 items-start p-4 bg-white rounded-lg border border-border h-fit">
      <div className="flex flex-row justify-center items-center p-3 gap-2 w-12 h-12 bg-creamy-purple rounded-full">
        {props.logo}
      </div>
      <div className="font-syne font-semibold text-base leading-6 pt-5 flex items-center capitalize text-chinese-black">
        {props.title}
      </div>
      <p
        className={`text-gray_card text-sm pt-2 ${show ? "" : "line-clamp-2"}`}
      >
        {props.description}
      </p>
      <div
        className="flex flex-row group  gap-2 items-center pt-10 cursor-pointer"
        onClick={updateShow}
      >
        <div className="text-primary font-medium text-base ">
          {show ? "Show Less" : "Read More"}
        </div>
        <RightIcon className="group-hover:translate-x-1" />
      </div>
    </div>
  );
}
