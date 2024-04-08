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

    // Correction: Use response.data instead of response.JSON()
    const cryptoListData = response.data;

    return cryptoListData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for proper handling
  }
}
