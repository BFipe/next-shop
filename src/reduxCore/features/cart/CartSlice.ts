import { BaseCartProduct, BaseProduct } from "@/src/_data/dataTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartState = {
  isDataLoaded: boolean;
  data: Array<BaseCartProduct>;
};

const cartInitialState: CartState = {
  isDataLoaded: false,
  data: [],
};

type ChangeCountAction = {
  productId: string;
  count: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    setProducts(_state, action: PayloadAction<Array<any>>) {
      console.log("Trying to set this data", action.payload);
      return {
        isDataLoaded: true,
        data: action.payload,
      };
    },
    addProduct(state, action: PayloadAction<BaseProduct>) {
      const cartProduct: BaseCartProduct = {
        ...action.payload,
        count: 1,
      };

      state.data.push(cartProduct);
    },
    changeCount(state, action: PayloadAction<ChangeCountAction>) {
      const product = state.data.find(
        (item) => item.id == action.payload.productId
      );
      if (product) {
        product.count = Math.max(action.payload.count, 1);
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.data.filter((item) => item.id !== action.payload);
    },
    clearCart() {
      return {
        isDataLoaded: true,
        data: [],
      };
    },
  },
});

export const CartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
