import { configureStore } from '@reduxjs/toolkit';
import storeReducer from "@Store/StoreReducer";

export const store = configureStore({
  reducer: storeReducer,
});

