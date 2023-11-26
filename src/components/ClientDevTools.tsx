"use client";

import { useAppDispatch } from "../common/hooks";
import { CartActions } from "../reduxCore/features/cart/CartSlice";

export default function ClientDevTools() {
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(CartActions.clearCart())}>
        <p style={{ fontWeight: "500", margin: "10px" }}>Clear cart</p>
      </button>
    </>
  );
}
