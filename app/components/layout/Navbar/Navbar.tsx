import Link from "next/link";
import AppLogo from "./AppLogo/AppLogo";
import styles from "./Navbar.module.scss";
import CartButton from "./CartButton/CartButton";

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <AppLogo />
      <Link href={"/"} className={styles.navButton}>
        <div className={styles.navButton_Text}>Home</div>
      </Link>
      <Link href={"/shop"} className={styles.navButton}>
        <div className={styles.navButton_Text}>Shop</div>
      </Link>
      <Link href={"/about"} className={styles.navButton}>
        <div className={styles.navButton_Text}>About</div>
      </Link>
      <Link href={"/cart"} className={styles.navButton}>
        <CartButton />
      </Link>
    </nav>
  );
}
