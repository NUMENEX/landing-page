import useFetchCoinData from "@src/hooks/useFetchCoinData";
import useFetchCoinImage from "@src/hooks/useFetchCoinImage";
import Marquee from "react-fast-marquee";

export default function CoinBanner() {
  const coinData = [
    {
      name: "ETHEREUM",
      price: "923 USD",
      growth: 0.15,
      logo: "star-golden-logo.svg",
    },
    {
      name: "Bitcoin",
      price: "923 USD",
      growth: -1.15,
      logo: "star-golden-logo.svg",
    },
    {
      name: "Doge Coin",
      price: "923 USD",
      growth: 1.5,
      logo: "star-golden-logo.svg",
    },
    {
      name: "Tether ",
      price: "923 USD",
      growth: -0.25,
      logo: "star-golden-logo.svg",
    },
  ];

  const { coinsData } = useFetchCoinData();
  const { coinsImage: coinsImageBTC } = useFetchCoinImage({ symbol: "BTC" });
  const { coinsImage: coinsImageETH } = useFetchCoinImage({ symbol: "ETH" });
  const { coinsImage: coinsImageDOGE } = useFetchCoinImage({ symbol: "DOGE" });
  const { coinsImage: coinsImageUSDT } = useFetchCoinImage({ symbol: "USDT" });
  const { coinsImage: coinsImageADA } = useFetchCoinImage({ symbol: "ADA" });

  const filteredData =
    (coinsData && Object.values(coinsData?.data?.["RAW"])) || [];

  const getIcon = (symbol: string) => {
    switch (symbol) {
      case "BTC":
        return coinsImageBTC;
      case "ETH":
        return coinsImageETH;
      case "DOGE":
        return coinsImageDOGE;
      case "USDT":
        return coinsImageUSDT;
      case "ADA":
        return coinsImageADA;

      default:
        return "";
    }
  };
  const formattedCoinsData = filteredData?.map((data: any) => {
    return {
      price: data["USD"].PRICE,
      growth: data["USD"].CHANGEHOUR,
      symbol: data["USD"].FROMSYMBOL,
      logo: getIcon(data["USD"].FROMSYMBOL),
    };
  });

  return (
    <div>
      <Marquee autoFill>
        <div className="flex flex-row justify-between items-center px-10 py-4 gap-14  w-full h-18 left-0 bottom-0 bg-primary text-white text-sm">
          {formattedCoinsData?.map((data: any) => (
            <div className="flex flex-row gap-2 items-center">
              <img src={data.logo} width={24} height={24}></img>
              <div> {data.name}</div>
              <div> {Number(data.price).toFixed(2) + " USD"}</div>
              <div
                className={`${
                  data.growth > 0 ? "text-green-400" : "text-red-600"
                }`}
              >
                {Number(data.growth).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
