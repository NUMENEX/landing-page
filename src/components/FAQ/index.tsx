import QuestionCard from "./QuestionCard";

export default function FAQ() {
  const questions = [
    {
      question: "What is numenex",
      answer:
        "  We empower both novice and veteran traders with the tools to make informed decisions and thrive in the dynamic world of crypto.",
    },
    {
      question: "What is numenex",
      answer:
        "  We empower both novice and veteran traders with the tools to make informed decisions and thrive in the dynamic world of crypto.",
    },
    {
      question: "What is numenex",
      answer:
        "  We empower both novice and veteran traders with the tools to make informed decisions and thrive in the dynamic world of crypto.",
    },

    {
      question: "What is numenex",
      answer:
        "  We empower both novice and veteran traders with the tools to make informed decisions and thrive in the dynamic world of crypto.",
    },
    //
  ];
  return (
    <div className="flex flex-col px-5 md:px-20 justify-center gap-20">
      <div className="flex flex-col items-center gap-4">
        <div className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-96 font-syne text-center ">
          Frequently Asked Questions
        </div>
        <p className="text-center md:text-lg text-secondary">
          Everything you need to know about numenex
        </p>
      </div>
      <div className="">
        {questions.map((data, index) => (
          <QuestionCard
            key={index}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </div>
  );
}
