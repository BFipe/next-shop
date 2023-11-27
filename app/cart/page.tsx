import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";

const CartComponent = dynamic(
  () => import("@/src/components/cart/CartComponent/CartComponent"),
  { ssr: false, loading: () => <Loading /> }
);

export default function Cart() {
  return <CartComponent />;
}
