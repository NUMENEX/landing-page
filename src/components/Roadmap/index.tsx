import { StarGoldenLogo, StarLogo } from "@src/assets/svg";

export default function Roadmap() {
  const roadMapData = [
    {
      quarter: "Q2 2024",
      milestone: "Launch Whitepaper/ Website",
    },
    {
      quarter: "Q3 2024",
      milestone: "Marketing + Community building",
    },
    {
      quarter: "Q4 2024",
      milestone: "Launch testnet v1.0 Numenex blockchain",
    },
    {
      quarter: "Q4 2024",
      milestone: "Testnet subnet, miner, validators & feeders",
    },
    {
      quarter: "Q1 2025",
      milestone: "Mainnet v1.0 Everest launch",
    },
  ];
  return (
    <div>
      <div className="px-5 md:px-20 justify-center gap-20">
        <div className="text-60px font-semibold leading-60px font-syne text-center">
          Roadmap
        </div>
        <p className="pt-5 md:px-20 text-center md:text-lg text-secondary">
          Office ipsum you must be muted. Gmail up dear corporate feelers savvy
          hammer leverage spaces..
        </p>
      </div>
      <div className=" justify-center py-20  align-center flex">
        {roadMapData.map((data, index) => (
          <div key={index} className="flex flex-row items-center">
            <div key={index} className="flex flex-col items-center">
              <div
                className={`flex flex-row relative ${
                  index % 2 != 0 ? "invisible" : ""
                }`}
              >
                <div
                  className={`w-0 h-[140px] border border-[2px] border-creamy-purple `}
                ></div>
                <div className="absolute left-5  top-0  w-[50px] md:w-[100px] lg:w-[150px] xl:w-[200px]">
                  <div className="flex flex-col font-syne">
                    <div className="text-primary font-syne font-bold">
                      {data.quarter}
                    </div>
                    <div className="font-syne">{data.milestone}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-start p-4 gap-2 w-7 h-7 md:w-12 md:h-12 lg:h-14 lg:w-14 bg-creamy-purple rounded-full justify-center items-center">
                <div className="w-3 h-3 md:h-5 md:w-5 lg:h-6 lg:w-6 bg-primary rounded-full flex-none order-0 flex-grow-0"></div>
              </div>

              <div
                className={`flex flex-row relative ${
                  index % 2 === 0 ? "invisible" : ""
                }`}
              >
                <div
                  className={`w-0 h-[140px] border border-[2px] border-creamy-purple`}
                ></div>
                <div className="absolute left-5  bottom-0 w-[50px] md:w-[150px]">
                  <div className="flex flex-col font-syne ">
                    <div className="text-primary font-syne font-bold ">
                      {data.quarter}
                    </div>
                    <div className="font-syne">{data.milestone}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start relative">
              <div
                className={` w-[50px] lg:w-[150px] xl:w-[200px] md:w-[100px] border border-[2px] border-creamy-purple ${
                  index != roadMapData.length - 1 ? "" : "invisible"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
