import { configureStore } from "@reduxjs/toolkit";

import adReducer from "./slices/adSlice";
import productReducer from "./slices/productSlice";

// Combine reducers
const toolkitReducers = {
  ad: adReducer,
  product: productReducer,
};

// Create the store
const store = configureStore({
  reducer: toolkitReducers,
});

// Use store.getState to infer the RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
