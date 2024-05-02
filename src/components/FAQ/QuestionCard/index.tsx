import { CrossIcon, PlusIcon, RightIcon } from "@src/assets/svg";
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
      className=" text-left text-secondary cursor-pointer text-[18px] "
      onClick={updateShow}
    >
      <div className="flex flex-col gap-5">
        <div className=" flex flex-row  justify-between ">
          <div className={show ? "text-primary" : ""}>{props.question}</div>
          {show ? <CrossIcon /> : <PlusIcon />}
        </div>

        <div className={show ? "" : "hidden"}>{props.answer}</div>
      </div>

      <div className="border-b border-purple-100 my-10"></div>
    </div>
  );
}
