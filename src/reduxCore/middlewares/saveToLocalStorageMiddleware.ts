import { Middleware } from "@reduxjs/toolkit";

type Action = {
  type: string;
  payload?: any;
};

const saveToLocalStorageMiddleware: Middleware =
  (store) => (next) => (action: Action) => {
    const result = next(action);

    if (action.type.match(/^cart\/.*/)) {
      localStorage.setItem(
        "nextShopCart",
        JSON.stringify(store.getState().cart.data)
      );
    }

    return result;
  };

export default saveToLocalStorageMiddleware;
