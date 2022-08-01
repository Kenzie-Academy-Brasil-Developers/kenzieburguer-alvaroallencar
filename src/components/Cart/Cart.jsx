import { motion, AnimatePresence } from "framer-motion";

import styled from "./Cart.module.css";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Cart = ({ cartList, setCartList, cartTotal, setCartTotal }) => {
  const priceFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleRemoveFromCart = (idToRemove) => {
    const newCartList = cartList.filter((item) => item.id !== idToRemove);
    setCartList(newCartList);
  };

  return cartList.length === 0 ? (
    <section className={styled.cart}>
      <div className={styled.cartHeader}>
        <h2>
          {" "}
          <FaShoppingCart className={styled.icon} /> Carrinho de produtos
        </h2>
      </div>
      <div className={styled.emptyCartBox}>
        <h2>Seu carrinho está vazio :( </h2>
        <p>Adicione itens</p>
      </div>
    </section>
  ) : (
    <>
      <section className={styled.cart}>
        <div className={styled.cartHeader}>
          <h2>
            {" "}
            <FaShoppingCart className={styled.icon} /> Carrinho de produtos
          </h2>
        </div>
        <motion.ul
          className={styled.cartBox}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          {cartList.map((item) => {
            return (
              <AnimatePresence key={item.img}>
                <motion.li
                  key={item.img}
                  className={styled.itemInCart}
                  // layout
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  // exit={{ x: -100 }}
                  transition={{ duration: 0.1 }}
                >
                  <figure className={styled.imageBox}>
                    <img src={item.img} alt={item.name} />
                  </figure>
                  <div className={styled.description}>
                    <h4 className={styled.productName}>{item.name}</h4>
                    <p className={styled.category}>{item.category}</p>
                    <p className={styled.price}>
                      {priceFormated.format(item.price)}
                    </p>
                  </div>
                  <div className={styled.config}>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      <FaTrash />
                    </button>
                  </div>
                </motion.li>
              </AnimatePresence>
            );
          })}
        </motion.ul>
      </section>
      <AnimatePresence>
        <motion.section
          className={styled.sectionCartTotal}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          layout
          // exit={{ x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styled.totalDiv}>
            <p>Total</p>
            <p>{priceFormated.format(cartTotal)}</p>
          </div>
          <div className={styled.totalValue}>
            <button onClick={() => setCartList([])}>
              <FaTrash /> Remover todos
            </button>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default Cart;
