import Link from "next/link";
import AppLogo from "./AppLogo/AppLogo";
import styles from "./Header.module.scss";
import CartButton from "./CartButton/CartButton";
import NavDivider from "./NavDivider/NavDivider";

export default function Header() {
  return (
    <header className={styles.navigation}>
      <AppLogo />
      <Link href={"/"} className={styles.navButton}>
        <div className={styles.navButton_Text}>Home</div>
      </Link>
      <NavDivider />
      <Link href={"/shop"} className={styles.navButton}>
        <div className={styles.navButton_Text}>Shop</div>
      </Link>
      <NavDivider />
      <Link href={"/about"} className={styles.navButton}>
        <div className={styles.navButton_Text}>About</div>
      </Link>
      <Link href={"/cart"} className={styles.cartButton}>
        <CartButton />
      </Link>
    </header>
  );
}
