import AmountBtns from "../components/amountBtns";
import { formatPrice } from "../utils/helpers";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = (props) => {
  const { toggleAmount, removeItem } = useCartContext();
  const { item } = props;
  const id = item.id;

  const increase = () => {
    toggleAmount(id, "inc");
  };

  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <article className='product-container'>
      <div className='main-info' style={{ marginRight: "9rem" }}>
        <div className='img-container'>
          <img
            src={item.img}
            alt=''
            style={{
              borderRadius: "var(--radius)",

              width: "100%",
              display: "block",
            }}
          />
        </div>

        <div className='title-color'>
          <h5 className='title'>{item.name}</h5>
          <span
            className='color'
            style={{
              background: item.color,
              width: "0.5rem",
              height: "0.5rem",

              display: "block",
            }}
          ></span>
          <h4 className='mini-price'>{formatPrice(item.price)}</h4>
        </div>
      </div>
      <h4 className='price'>{formatPrice(item.price)}</h4>

      <div className='amount-btns'>
        <AmountBtns
          amountIndex={item.amount}
          increase={increase}
          decrease={decrease}
        />
      </div>
      <h4 className='subTotal'>{formatPrice(item.price * item.amount)}</h4>
      <div className='icon-container'>
        <FaTrash className='trash-btn' onClick={() => removeItem(id)} />
      </div>
    </article>
  );
};
//all styled controled from cartPage
export default CartItem;
