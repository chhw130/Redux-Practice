import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
// import { uiActions } from ".";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.item.totalQuantity);

  const btnHandler = (e) => {
    e.preventDefault();
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={btnHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
