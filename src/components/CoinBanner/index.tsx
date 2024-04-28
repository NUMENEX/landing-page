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

    //
  ];
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-10 py-4 gap-14 fixed w-full h-18 left-0 bottom-0 bg-purple-900 text-white text-sm">
        {coinData.map((data) => (
          <div className="flex flex-row gap-2 items-center">
            <img src={"src/assets/svg/" + data.logo}></img>
            <div> {data.name}</div>
            <div> {data.price}</div>
            <div
              className={`${
                data.growth > 0 ? "text-green-400" : "text-red-600"
              }`}
            >
              {data.growth}
              {"%"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
