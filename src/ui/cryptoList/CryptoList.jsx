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
            <li className="list_header font-semibold flex w-full justify-between py-2 px-5 border-[1px] border-gray-100">
                <div>#</div>
                <div className="w-40">Name</div>
                <div>Price</div>
                <div>1h %</div>
                <div>24h %</div>
                <div>7d %</div>
            </li>

          {coinData.map((coin) => (
            <li key={coin.id} className="list_header font-semibold flex w-full justify-between py-2 px-5 border-[1px] border-gray-100">
              <div>{coin.market_cap_rank}</div>
                <div className="w-40">{coin.name}</div>
                <div>{coin.current_price}</div>
                <div>{coin.price_change_percentage_24h}</div>
                <div>{coin.market_cap_change_percentage_24h}</div>
                <div>{coin.ath_change_percentage}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading coin market data...</p>
      )}
    </div>
  );
}
