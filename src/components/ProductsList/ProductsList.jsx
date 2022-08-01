import Product from "../Product/Product";
import { motion } from "framer-motion";

import styled from "./ProductsList.module.css";

const ProductsList = ({
  burguersListToRender,
  cartList,
  setCartList,
  isSearching,
}) => {
  return burguersListToRender.length > 0 ? (
    <>
      <section className={styled.mainContainer}>
        <motion.ul
          className={styled.productsList}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {burguersListToRender.map((burguer) => {
            return (
              <li
                className={`${styled.productCard} ${burguer.id}`}
                key={burguer.id}
              >
                <Product
                  burguersList={burguersListToRender}
                  burguer={burguer}
                  cartList={cartList}
                  setCartList={setCartList}
                />
              </li>
            );
          })}
        </motion.ul>
      </section>
    </>
  ) : isSearching === false ? (
    <>
      <section className={styled.mainContainer}>
        <h2 className={styled.loadingMessage}>
          Nada encontrado para esta pesquisa :(
        </h2>
      </section>
    </>
  ) : (
    <></>
  );
};

export default ProductsList;
