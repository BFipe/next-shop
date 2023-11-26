import { configureStore } from "@reduxjs/toolkit";
import saveToLocalStorageMiddleware from "./middlewares/saveToLocalStorageMiddleware";
import cartReducer from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
