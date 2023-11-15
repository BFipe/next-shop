import styles from "./CartButton.module.scss";
import CartIcon from "./CartIcon/CartIcon";
import CartItemCounter from "./CartItemCounter/CartItemCounter";

export default function CartButton() {
  return (
    <div className={styles.cartButton}>
      <CartIcon /> <CartItemCounter />
    </div>
  );
}
