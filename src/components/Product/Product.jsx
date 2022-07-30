import styled from "./Product.module.css";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ burguersList, burguer, cartList, setCartList }) => {
  const priceFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleCart = () => {
    if (cartList.length > 0) {
      const isAddedItem = cartList.find((item) => item.id === burguer.id);

      if (isAddedItem) {
      } else {
        setCartList([burguer, ...cartList]);
      }
    } else {
      setCartList([burguer, ...cartList]);
    }
  };

  return (
    <>
      <figure className={styled.imageBox}>
        <img src={burguer.img} alt={burguer.name} />
      </figure>
      <div className={styled.description}>
        <h3 className={styled.name}>{burguer.name}</h3>
        <p className={styled.category}>{burguer.category}</p>
        <p className={styled.price}>{priceFormated.format(burguer.price)}</p>
        <button
          className={`${styled.addToCart} addButton${burguer.id}`}
          onClick={handleCart}
        >
          <FaCartPlus className={styled.icon} /> Adicionar
        </button>
      </div>
    </>
  );
};

export default Product;
