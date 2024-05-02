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
    <div className="pt-20 ">
      <div className=" w-80 items-start p-5 gap-5  bg-white shadow-xl rounded-lg">
        <div className="flex flex-row justify-center items-center p-4 gap-2 w-14 h-14 bg-purple-100 rounded-full">
          {props.logo}
        </div>

        <div className="font-syne ffont-semibold text-lg leading-6 py-5 flex items-center capitalize text-black">
          {props.title}
        </div>
        <div className={`text-gray_card ${show ? "" : "line-clamp-2"}`}>
          {props.description}
        </div>
        <div
          className="flex flex-row  gap-2 items-center pt-10 cursor-pointer "
          onClick={updateShow}
        >
          <div className="text-primary font-medium text-base ">
            {show ? "Show Less" : "Read More"}
          </div>
          <RightIcon />
        </div>
      </div>
    </div>
  );
}
