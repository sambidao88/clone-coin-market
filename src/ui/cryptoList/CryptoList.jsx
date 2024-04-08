import { useEffect, useState } from "react";
import { fetchCoinMarketData } from "../../Data/fetchCoinMarketData";

export default function CryptoList() {
  const [coinData, setCoinData] = useState([]); // Initialize coin data state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoinMarketData();
        setCoinData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching coin market data:", error);
        // Handle errors gracefully (e.g., display an error message to the user)
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array: runs only on initial render

  return (
    <div>
      {coinData.length > 0 ? (
        <ul>
          {coinData.map((coin) => (
            <li key={coin.id}>
              {/* Display coin data here (e.g., name, symbol, price) */}
              {coin.name} ({coin.symbol}) - ${coin.current_price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading coin market data...</p>
      )}
    </div>
  );
}
