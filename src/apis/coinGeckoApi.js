import CoinGecko from "coingecko-api/lib/CoinGecko";

const CoinGeckoClient = new CoinGecko();

export const getCryptoListData = async () => {
  const { data } = await CoinGeckoClient.coins.all();
  return data;
};

export const getCryptoCoinData = async (coinName) => {
  const { data } = await CoinGeckoClient.coins.fetch(coinName);
  return data;
};
