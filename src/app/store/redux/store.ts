import { configureStore } from "@reduxjs/toolkit";
import form from "./slices/formSlice/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { orderApi } from "./slices/orderApi";

export const store = configureStore({
  reducer: { form, [orderApi.reducerPath]: orderApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
