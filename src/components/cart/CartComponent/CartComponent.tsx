"use client";

import { useAppDispatch, useAppSelector } from "@/src/common/hooks";
import { CartActions } from "@/src/reduxCore/features/cart/CartSlice";
import Link from "next/link";
import GarbageIcon from "./Icons/GarbageIcon";

export default function CartComponent() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (cart.data.length === 0) {
    return (
      <div>
        <h2>No items in the cart yet!</h2>
        <p>
          Visit <Link href={"/shop"}>our shop</Link> to get products!
        </p>
      </div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product image</th>
            <th>Product name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.data.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img src={item.imageUrl} alt={item.name} width={100} />
                </td>
                <td>{item.name}</td>
                <td>
                  <button
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
                  <p>{item.count} шт</p>
                  <button
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
                </td>
                <td>{item.price} р.</td>
                <td>{Math.floor(item.count * item.price * 100) / 100} р.</td>
                <td>
                  <button
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
          <tr>
            <td>
              <button onClick={() => dispatch(CartActions.clearCart())}>
                Clear cart
              </button>
            </td>
            <td colSpan={2}></td>
            <td>Total:</td>
            <td>
              {Math.floor(
                cart.data.reduce((acc, item) => {
                  acc += item.price * item.count;
                  return acc;
                }, 0) * 100
              ) / 100}
              р.
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <button>Purchase</button>
    </div>
  );
}
