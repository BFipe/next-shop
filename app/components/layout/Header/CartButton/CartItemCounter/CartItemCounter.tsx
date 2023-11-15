"use client";
import styles from "./CartItemCounter.module.scss";
//Информация о колличестве товаров берется с redux

export default function CartItemCounter() {
  return <div className={styles.counter}>0</div>;
}
