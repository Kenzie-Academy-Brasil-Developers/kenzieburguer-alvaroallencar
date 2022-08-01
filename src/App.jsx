import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import apiRequests from "./services/apiRequests";
import { useState, useEffect } from "react";
import { VscLoading } from "react-icons/vsc";
import { motion } from "framer-motion";

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
  const [cartTotal, setCartTotal] = useState(0);

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
    setIsSearching(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredBurguersList]);

  // useEffect para calcular o total do carrinho:

  useEffect(() => {
    const total = cartList.reduce(
      (acc, currentValue) => acc + currentValue.price,
      0
    );
    setCartTotal(total);
    console.log(cartTotal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartList]);

  return (
    <motion.div
      className={styled.kenzieBurguerPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
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
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            />
            <motion.aside
              className={styled.cart}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Cart
                cartList={cartList}
                setCartList={setCartList}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              />
            </motion.aside>
          </main>
        </>
      ) : (
        <h2 className={styled.loadingMessage}>
          <VscLoading />{" "}
        </h2>
      )}
    </motion.div>
  );
}

export default App;
