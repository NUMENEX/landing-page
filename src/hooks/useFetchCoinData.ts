import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function useFetchCoinData() {
  const config = {
    method: "get",
    url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,USDT,ADA&tsyms=USD",
  };
  // const config = {
  //   method: "get",
  //   url: "https://data-api.cryptocompare.com/asset/v1/data/by/symbol",
  //   params: {
  //     asset_symbol: "ETH",
  //   },
  // };

  const getCoinData = async () => {
    return await axios.request(config);
  };

  const { data: coinsData } = useQuery({
    queryKey: ["coin-data"],
    queryFn: getCoinData,
  });

  return { coinsData };
}
