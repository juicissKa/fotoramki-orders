import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Order } from "../reduxTypes";
import { PassepartoutString } from "../../components/AddModal/FrameMoldingModal";
import { RootState, useAppSelector } from "../store";

const initialState: Order = {
  type: "",
  client_name: "",
  phone_number: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setWidth(state, action: PayloadAction<string>) {
      state.width = parseInt(action.payload);
    },
    setHeight(state, action: PayloadAction<string>) {
      state.height = parseInt(action.payload);
    },
    setBase(state, action: PayloadAction<string>) {
      state.base = parseInt(action.payload);
    },
    setPrice(state, action: PayloadAction<string>) {
      state.price = parseFloat(action.payload);
    },
    setCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setGlassId(state, action: PayloadAction<string>) {
      state.glassId = parseInt(action.payload);
    },
    setBackId(state, action: PayloadAction<string>) {
      state.backId = parseInt(action.payload);
    },
    // Passepartout
    addPassepartout(state) {
      const newPassepartout = {
        horizontalWidth: 0,
        verticalWidth: 0,
        price: 0,
        code: "",
      };
      state.passepartouts = state.passepartouts
        ? [...state.passepartouts, newPassepartout]
        : [newPassepartout];
    },
    deletePassepartout(state, action: PayloadAction<number>) {
      const index = action.payload;
      const updatedPassepartouts = state.passepartouts
        ? [
            ...state.passepartouts.slice(0, index),
            ...state.passepartouts.slice(index + 1),
          ]
        : [];
      state.passepartouts =
        updatedPassepartouts.length > 0 ? updatedPassepartouts : undefined;
    },
    setPassepartoutHorizontalWidth(
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      const { index, value } = action.payload;
      if (state.passepartouts && index < state.passepartouts.length)
        state.passepartouts[index].horizontalWidth = parseInt(value);
    },
    setPassepartoutVerticalWidth(
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      const { index, value } = action.payload;
      if (state.passepartouts && index < state.passepartouts.length)
        state.passepartouts[index].verticalWidth = parseInt(value);
    },
    setPassepartoutPrice(
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      const { index, value } = action.payload;
      if (state.passepartouts && index < state.passepartouts.length)
        state.passepartouts[index].price = parseFloat(value);
    },
    setPassepartoutCode(
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      const { index, value } = action.payload;
      if (state.passepartouts && index < state.passepartouts.length)
        state.passepartouts[index].code = value;
    },
  },
});

export const {
  addPassepartout,
  deletePassepartout,
  setBase,
  setHeight,
  setName,
  setPassepartoutCode,
  setPassepartoutHorizontalWidth,
  setPassepartoutPrice,
  setPassepartoutVerticalWidth,
  setPrice,
  setType,
  setWidth,
  setCode,
  setGlassId,
  setBackId,
} = orderSlice.actions;

export const orderSelector = (state: RootState) => state.order;

export default orderSlice.reducer;
