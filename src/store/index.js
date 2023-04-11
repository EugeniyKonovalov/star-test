import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";
import { appApi } from "./app.api";

const store = configureStore({
  reducer: { app: appSlice.reducer, [appApi.reducerPath]: appApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(appApi.middleware),
});

export default store;
