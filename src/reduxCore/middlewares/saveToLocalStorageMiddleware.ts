import { Middleware } from "@reduxjs/toolkit";

type Action = {
  type: string;
  payload?: any;
};

const saveToLocalStorageMiddleware: Middleware =
  (store) => (next) => (action: Action) => {
    console.log("I do", action);
    const result = next(action);

    if (action.type.match(/^cart\/.*/)) {
      localStorage.setItem(
        "nextShopCart",
        JSON.stringify(store.getState().cart.data)
      );
    }

    console.log("Now my current state is", store.getState().cart);

    return result;
  };

export default saveToLocalStorageMiddleware;
