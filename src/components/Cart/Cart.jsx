import styled from "./Cart.module.css";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Cart = ({ cartList, setCartList }) => {
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
                <p>{item.category}</p>
                <p>{priceFormated.format(item.price)}</p>
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
  );
};

export default Cart;
