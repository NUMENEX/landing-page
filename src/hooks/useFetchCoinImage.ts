import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function useFetchCoinImage({ symbol }: { symbol: string }) {
  const config = {
    method: "get",
    url: "https://data-api.cryptocompare.com/asset/v1/data/by/symbol",
    params: {
      asset_symbol: symbol,
    },
  };

  const getCoinImage = async () => {
    return await axios.request(config);
  };

  const { data: coinsImage } = useQuery({
    queryKey: ["coin-asset", symbol],
    queryFn: getCoinImage,
  });

  return { coinsImage: coinsImage?.data.Data.LOGO_URL };
}
