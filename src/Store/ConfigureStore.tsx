import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storeReducer from "@Store/StoreReducer";

export const store = configureStore({
  reducer: storeReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

