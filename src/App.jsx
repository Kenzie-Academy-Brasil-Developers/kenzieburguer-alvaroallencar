import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import apiRequests from "./services/apiRequests";
import { useState, useEffect } from "react";

import BurguerKenzie from "../src/assets/img/BurguerKenzie.svg";

import GlobalStyle from "./styles/globalStyle";
import BaseStyle from "./styles/baseStyle";
import styled from "./App.module.css";

function App() {
  // useState:

  const [burguersList, setBurguersList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [filteredBurguersList, setFilteredBurguersList] =
    useState(burguersList);
  const [burguersListToRender, setBurguersListToRender] =
    useState(burguersList);
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // função normalize para remover os acentos:

  const normalize = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  // useEffect para buscar dados da API:

  useEffect(() => {
    apiRequests
      .get("products")
      .then((response) => {
        setBurguersList(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect para setar o a lista de produtos a renderizar:

  useEffect(() => {
    setBurguersListToRender(filteredBurguersList);
    setIsSearching(!isSearching);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredBurguersList]);

  return (
    <div className={styled.kenzieBurguerPage}>
      <BaseStyle />
      <GlobalStyle />
      {burguersList.length > 0 ? (
        <>
          <Header
            BurguerKenzie={BurguerKenzie}
            burguersList={burguersList}
            setFilteredBurguersList={setFilteredBurguersList}
            normalize={normalize}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <main className={styled.container}>
            <ProductsList
              burguersListToRender={burguersListToRender}
              cartList={cartList}
              setCartList={setCartList}
              isSearching={isSearching}
              searchInput={searchInput}
            />
            <aside className={styled.Cart}>
              <Cart cartList={cartList} setCartList={setCartList} />
            </aside>
          </main>
        </>
      ) : (
        <h2 className={styled.loadingMessage}>Carregando...</h2>
      )}
    </div>
  );
}

export default App;
