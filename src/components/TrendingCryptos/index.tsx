import { ChartSampleImage, StarGoldenLogo, StarLogo } from "../../assets/svg";

export default function TrendingCryptos() {
  const coinData = [
    {
      name: "ETHEREUM",
      price: "923 USD",
      growth: 0.15,
      logo: <StarGoldenLogo />,
    },
    {
      name: "Bitcoin",
      price: "923 USD",
      growth: -1.15,
      logo: <StarLogo />,
    },
    {
      name: "Doge Coin",
      price: "923 USD",
      growth: 1.5,
      logo: <StarGoldenLogo />,
    },
    {
      name: "Doge Coin",
      price: "923 USD",
      growth: 1.5,
      logo: <StarGoldenLogo />,
    },
    {
      name: "Doge Coin",
      price: "923 USD",
      growth: 1.5,
      logo: <StarGoldenLogo />,
    },
  ];
  return (
    <div>
      <div className="p-20 justify-center gap-20">
        <div className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-96 font-syne text-center ">
          Community Crypto Trending
        </div>

        <div className="pt-10 md:px-20 text-center md:text-lg text-gray-600">
          A bigger market with futuristic approach of AI in market making and
          trading.
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-row gap-5 py-10">
            {coinData.map((data) => (
              <div className="justify-center items-center p-4  bg-white bg-opacity-80 border border-gray-300 rounded-lg">
                <div className="flex flex-row items-center gap-10">
                  <div className="flex flex-row items-center gap-2">
                    {data.logo}
                    <div>
                      <div> XRP</div>
                      <div className="text-gray-400 text-sm">
                        <span> Today upto </span>
                        <span className="text-green-400"> +11%</span>
                      </div>
                    </div>
                  </div>

                  <ChartSampleImage />
                </div>
                <div className="border border-gray-400 my-5 flex"></div>

                <div className="flex flex-row items-center gap-10 justify-between text-gray-400 text-sm">
                  <div className="flex flex-col items-center justify-center gap-4 ">
                    <div>Summary</div>
                    <div className="text-red-500">Strong Sell</div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col items-center justify-center gap-4 ">
                      <div>Sell</div>
                      <div className="text-red-500">1</div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 ">
                      <div>Neutral</div>
                      <div className="text-red-500">2</div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 ">
                      <div>Buy</div>
                      <div className=" text-red-500">3</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
