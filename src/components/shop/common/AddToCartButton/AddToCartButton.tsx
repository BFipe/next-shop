"use client";

import { BaseProduct } from "@/src/_data/dataTypes";
import { useAppDispatch, useAppSelector } from "@/src/common/hooks";
import { CartActions } from "@/src/reduxCore/features/cart/CartSlice";
import styles from "./AddToCartButton.module.scss";

type AddToCartButtonProps = {
  product: BaseProduct;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(CartActions.addProduct(product));
  }

  const isInCart = cart.some((item) => item.id == product.id);

  return isInCart ? (
    <button className={styles.button} disabled>
      Already in the cart
    </button>
  ) : (
    <button className={styles.button} onClick={handleAddToCart}>
      Add to cart
    </button>
  );
}
