import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  logo: string;
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
          <img src={"src/assets/svg/" + props.logo}></img>
        </div>
        <div className="font-syne font-semibold text-lg leading-6 py-5 flex items-center capitalize text-black">
          {props.title}
        </div>
        <div className={`text-gray-700 ${show ? "" : "line-clamp-2"}`}>
          {props.description}
        </div>
        <div
          className="flex flex-row  gap-2 items-center pt-10 cursor-pointer "
          onClick={updateShow}
        >
          <div className="text-purple-800 font-medium text-base ">
            {show ? "Show Less" : "Read More"}
          </div>
          <img src="src/assets/svg/rightIcon.svg"></img>
        </div>
      </div>
    </div>
  );
}
