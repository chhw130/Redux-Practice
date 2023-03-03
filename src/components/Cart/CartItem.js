import { useDispatch } from "react-redux";
import { itemActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const plusBtnHandler = (e) => {
    e.preventDefault();
    dispatch(
      itemActions.addItem({
        id,
        price,
        title,
      })
    );
  };

  const minusBtnHandler = (e) => {
    e.preventDefault();
    dispatch(itemActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusBtnHandler}>-</button>
          <button onClick={plusBtnHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
