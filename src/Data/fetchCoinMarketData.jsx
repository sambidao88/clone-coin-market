import axios from "axios";

// Function to fetch coin market data
export async function fetchCoinMarketData() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          per_page: 10,
          page: 1,
        },
      }
    );

    const trendingCrypto = response.data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      currentPrice: coin.current_price,
      image: coin.image,
    }));

    return { trendingCrypto };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
