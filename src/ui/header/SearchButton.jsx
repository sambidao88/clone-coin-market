import { useEffect, useState } from "react";
import { fetchCoinMarketData } from "../../Data/fetchCoinMarketData";

export default function SearchButton({ onCancel }) {
  const [trendingCrypto, setTrendingCrypto] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCoinMarketData();
        setTrendingCrypto(data.trendingCrypto);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="searchButton px-4 py-3">
      <div className="searchTop flex flex-row justify-between items-center space-x-4 border-b-2 border-gray-100 p-3 shadow-sm">
        <div className="text-gray-400 text-xl">⌕</div>
        <div className="grow">
          <input
            className="w-80"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
        <div>
          <button
            onClick={onCancel}
            className="bg-blue-500 px-4 py-2 text-sm font-semibold rounded-md text-white">
            Cancel
          </button>
        </div>
      </div>
      <div className="trendingCrypto text-gray-500 text-sm p-2">
        <p>Trending Crypto Assets 🔥</p>
        <ul>
          {trendingCrypto ? (
            <li>Loading...</li>
          ) : (
            trendingCrypto.map((crypto) => (
              <li key={crypto.id}>{crypto.name}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
