import { CrossIcon, PlusIcon, RightIcon } from "@src/assets/svg";
import { cn } from "@src/utils/cn";
import React from "react";

interface QuestionCardProps {
  question: string;
  answer: string;
}

export default function QuestionCard(props: QuestionCardProps) {
  const [show, setShow] = React.useState(false);

  const updateShow = () => {
    setShow(!show);
  };

  return (
    <div
      className="text-left text-secondary cursor-pointer text-[18px]"
      onClick={updateShow}
    >
      <div
        className={cn(
          "flex flex-col max-h-[40px] overflow-hidden transition-all duration-500",
          {
            "max-h-[100px]": show,
          }
        )}
      >
        <div className=" flex flex-row  justify-between ">
          <p
            className={cn("transition-all duration-500", {
              "text-primary": show,
            })}
          >
            {props.question}
          </p>
          {show ? <CrossIcon /> : <PlusIcon />}
        </div>
        <p>{props.answer}</p>
      </div>
      <div className="border-b border-purple-100 my-10"></div>
    </div>
  );
}
