"use client";

import { useAppSelector } from "@/src/common/hooks";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  return <div>{JSON.stringify(cart)}</div>;
}
