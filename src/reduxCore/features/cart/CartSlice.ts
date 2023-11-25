import { BaseCartProduct, BaseProduct } from "@/src/_data/dataTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let cartInitialState: Array<BaseCartProduct> = [];
try {
  const localStorageCart: Array<BaseCartProduct> = JSON.parse(
    localStorage.getItem("nextShopCart")!
  );

  if (localStorageCart && Array.isArray(localStorageCart)) {
    cartInitialState = localStorageCart;
  }
} catch (_error) {
  console.log(_error);
  //  Ошибка может выдаться во время JSON.parse.
  //  Это будет обозначать то, что
  //  при запросе по ключу nextShopCart
  //  мы получили "битые" данные.
}

type ChangeCountAction = {
  productId: string;
  count: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addProduct(state, action: PayloadAction<BaseProduct>) {
      const cartProduct: BaseCartProduct = {
        ...action.payload,
        count: 1,
      };

      state.push(cartProduct);
    },
    changeCount(state, action: PayloadAction<ChangeCountAction>) {
      const product = state.find((item) => item.id == action.payload.productId);
      if (product) {
        product.count = Math.max(action.payload.count, 1);
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state = cartInitialState;
    },
  },
});

export const CartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
