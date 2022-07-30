import Product from "../Product/Product";

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
        <ul className={styled.productsList}>
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
        </ul>
      </section>
    </>
  ) : (
    <>
      <section className={styled.mainContainer}>
        <h2 className={styled.loadingMessage}>Nada encontrado para esta pesquisa :(</h2>
      </section>
    </>
  );
};

export default ProductsList;
