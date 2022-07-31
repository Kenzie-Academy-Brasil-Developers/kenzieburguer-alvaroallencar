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
        <ul className={styled.cartBox}>
          {cartList.map((item) => {
            return (
              <li key={item.id} className={styled.itemInCart}>
                <figure className={styled.imageBox}>
                  <img src={item.img} alt={item.name} />
                </figure>
                <div className={styled.description}>
                  <h4 className={styled.productName}>{item.name}</h4>
                  <p className={styled.category}>{item.category}</p>
                  <p className={styled.price}>{priceFormated.format(item.price)}</p>
                </div>
                <div className={styled.config}>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styled.sectionCartTotal}>
        <div className={styled.totalDiv}>
          <p>Total</p>
          <p>{priceFormated.format(cartTotal)}</p>
        </div>
        <div className={styled.totalValue}>
          <button onClick={() => setCartList([])}>
            <FaTrash /> Remover todos
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
