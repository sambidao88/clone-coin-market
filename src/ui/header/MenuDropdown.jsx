import { useState } from "react";

export default function MenuDropdown({onCancel}) {
  const menuData = {
    Cryptocurrencies: [
      "🏆 Ranking",
      "📜 Categories",
      "📈 Global Charts",
      "↻  History Snapshots",
      "🚀 Nứng Nứng"
    ],
  };

  const [isDropDown, setIsDropDown] = useState(true);

  const handleDropDown = () => {
    setIsDropDown((isDropDown) => !isDropDown);
  };

  return (
    <div className="MenuDropDown">
      <div className="header_title flex justify-between w-full items-center border-b-[1px] shadow-gray-100 shadow-md">
        <div className="flex p-4 space-x-2">
          <img
            className="w-8"
            src="https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=029"
            alt="coinLogo"
          />
          <h1 className="text-lg font-bold text-gray-700">Coinmarket</h1>
        </div>
        <button onClick={onCancel} className="text-lg text-right pr-4">X</button>
      </div>
      <div className="list_menu_button">
        <button onClick={handleDropDown} className="w-full text-xl text-left font-semibold p-4 border-b-[1px] border-gray-100" ><span>{isDropDown? '+' : '-'}</span> Cryptocurrencies</button>
        {!isDropDown && (
          <ul className="p-4">
            <li className="text-lg font-semibold text-gray-400 pt-2 pb-6">Cryptocurrencies</li>
            {menuData.Cryptocurrencies.map((link) => (
              <li key={link} className="text-xl text-lg font-semibold text-gray-900 py-2 w-full hover:bg-gray-100">{link}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
