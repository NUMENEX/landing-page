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
          <p className={show ? "text-primary self-center" : ""}>
            {props.question}
          </p>
          {show ? <CrossIcon /> : <PlusIcon />}
        </div>
        <p className={show ? "" : "hidden"}>{props.answer}</p>
      </div>
      <div className="border-b border-purple-100 my-10"></div>
    </div>
  );
}
