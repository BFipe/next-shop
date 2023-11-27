"use client";

import { BaseCartProduct } from "@/src/_data/dataTypes";
import { useAppDispatch } from "@/src/common/hooks";
import { CartActions } from "@/src/reduxCore/features/cart/CartSlice";
import { useEffect } from "react";

export default function ApplyClientSideActions() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let localStorageImportedData: Array<BaseCartProduct> = [];

    try {
      const localStorageCart: Array<BaseCartProduct> = JSON.parse(
        localStorage.getItem("nextShopCart")!
      );

      if (localStorageCart && Array.isArray(localStorageCart)) {
        localStorageImportedData = localStorageCart;
      }
    } catch (_error) {
      console.log(_error);
    } finally {
      dispatch(CartActions.setProducts(localStorageImportedData));
    }
  }, []);

  return <></>;
}
