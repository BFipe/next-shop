"use client";
import styles from "./CartItemCounter.module.scss";
import { useAppSelector } from "@/src/common/hooks";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function CartItemCounter() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className={styles.counter}>
      {cart.isDataLoaded ? (
        cart.data.length
      ) : (
        <Spin
          className={styles.spin}
          indicator={<LoadingOutlined style={{ fontSize: 14 }} spin />}
        />
      )}
    </div>
  );
}
