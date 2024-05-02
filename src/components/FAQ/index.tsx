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
    <div className="px-5 md:px-20 justify-center gap-20">
      <div className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-96 font-syne text-center ">
        Frequently Asked Questions
      </div>

      <div className="pt-10 md:px-20 text-center md:text-lg text-secondary">
        Everything you need to know about numenex
      </div>
      <div className="p-20">
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
