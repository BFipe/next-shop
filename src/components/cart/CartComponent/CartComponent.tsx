"use client";

import { useAppDispatch, useAppSelector } from "@/src/common/hooks";
import { CartActions } from "@/src/reduxCore/features/cart/CartSlice";
import Link from "next/link";
import GarbageIcon from "./Icons/GarbageIcon";
import styles from "./CartComponent.module.scss";
import CartPurchaseModal from "../Modals/CartPurchaseModal/CartPurchaseModal";
import { useState } from "react";
import ConfirmClearCartModal from "../Modals/ConfirmClearCartModal/ConfirmClearCartModal";

export default function CartComponent() {
  const cart = useAppSelector((state) => state.cart);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showClearCartModal, setShowClearCartModal] = useState(false);
  const dispatch = useAppDispatch();

  function handlePurchase() {
    setShowPurchaseModal(false);
    dispatch(CartActions.clearCart());
  }

  if (cart.data.length === 0) {
    return (
      <div className={styles.noItems}>
        <h2 className={styles.noItems__header}>No items in the cart yet!</h2>
        <p className={styles.noItems__info}>
          Visit{" "}
          <Link className={styles.noItems__link} href={"/shop"}>
            our shop
          </Link>{" "}
          to get products!
        </p>
      </div>
    );
  }

  const totalAmount =
    Math.floor(
      cart.data.reduce((acc, item) => {
        acc += item.price * item.count;
        return acc;
      }, 0) * 100
    ) / 100;

  return (
    <div className={styles.cart}>
      <table className={styles.table}>
        <tbody>
          {cart.data.map((item) => {
            return (
              <tr key={item.id} className={styles.row}>
                <td className={styles.image}>
                  <div className={styles.imageWrapper}>
                    <img src={item.imageUrl} alt={item.name} width={100} />
                  </div>
                </td>
                <td className={styles.name}>{item.name}</td>
                <td className={styles.count}>
                  <div className={styles.countActions}>
                    <button
                      className={styles.cartButton + " " + styles.decrease}
                      onClick={() =>
                        dispatch(
                          CartActions.changeCount({
                            productId: item.id,
                            count: item.count - 1,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <p className={styles.countValue}>{item.count} шт</p>
                    <button
                      className={styles.cartButton + " " + styles.increase}
                      onClick={() =>
                        dispatch(
                          CartActions.changeCount({
                            productId: item.id,
                            count: item.count + 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className={styles.price}>{item.price} р. / шт</td>
                <td className={styles.total}>
                  {Math.floor(item.count * item.price * 100) / 100} р.
                </td>
                <td className={styles.deleteButton}>
                  <button
                    className={styles.cartButton + " " + styles.delete}
                    onClick={() => {
                      dispatch(CartActions.removeProduct(item.id));
                    }}
                  >
                    <GarbageIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className={styles.tableFooter}>
            <td className={styles.clear}>
              <button
                className={styles.cartButton + " " + styles.clearButton}
                onClick={() => setShowClearCartModal(true)}
              >
                Clear cart
              </button>
              <ConfirmClearCartModal
                showModal={showClearCartModal}
                onOk={() => {
                  setShowClearCartModal(false);
                  dispatch(CartActions.clearCart());
                }}
                onCancel={() => {
                  setShowClearCartModal(false);
                }}
              />
            </td>
            <td colSpan={2}></td>
            <td className={styles.totalText}>Total:</td>
            <td className={styles.totalValue} colSpan={2}>
              {totalAmount}
              р.
            </td>
          </tr>
        </tfoot>
      </table>

      <button
        className={styles.cartButton + " " + styles.purchaseButton}
        onClick={() => setShowPurchaseModal(true)}
      >
        Purchase
      </button>

      <CartPurchaseModal
        showModal={showPurchaseModal}
        onOk={handlePurchase}
        onCancel={handlePurchase}
        totalAmount={totalAmount}
      ></CartPurchaseModal>
    </div>
  );
}
