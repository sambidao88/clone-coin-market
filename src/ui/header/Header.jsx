import CoinHL from "./CoinHL";
import LoginPage from "./LoginPage";
import MenuDropdown from "./MenuDropdown";
import SearchButton from "./SearchButton";
import { useState } from "react";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isMenu, setIsMenu] = useState(false)

  const handleIsSearch = () => {
    setIsSearch((isSearch) => !isSearch);
  };

  const handleIsLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  const handleIsMenu = () => {
    setIsMenu((isMenu) => !isMenu)
  }
  return (
    <>
      {!isSearch && !isLogin && !isMenu && (
        <header className="flex flex-row align-middle justify-between items-center border-solid border-2 border-gray-100">
          <div className="flex p-4 space-x-2">
            <img
              className="w-8"
              src="https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=029"
              alt="coinLogo"
            />
            <h1 className="text-lg font-bold text-gray-700">Coinmarket</h1>
          </div>
          <div>
            <span className="px-2 text-2xl text-gray-400">
              <button onClick={handleIsSearch}>⌕</button>
            </span>
            <span className="px-2 text-2xl text-gray-400">
              <button onClick={handleIsLogin}>💎</button>
            </span>
            <span className="px-2 text-2xl text-gray-400">
              <button onClick={handleIsMenu}>☰</button>
            </span>
          </div>
        </header>
      )}
      {!isSearch && !isLogin && !isMenu && <CoinHL />}
      {isSearch && <SearchButton onCancel={() => setIsSearch(false)} />}
      {isLogin && <LoginPage onCancel={() => setIsLogin(false)}/>}
      {isMenu && <MenuDropdown onCancel={() => setIsMenu(false)} />}
    </>
  );
}
