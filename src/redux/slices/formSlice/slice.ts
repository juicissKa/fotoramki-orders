import { AlertColor } from "@mui/material";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type formStateType = {
  modalOpen: boolean;
  snack: Snack;
};

type Snack = {
  open: boolean;
  text: string;
  type: AlertColor;
};

const initialState: formStateType = {
  modalOpen: false,
  snack: {
    open: false,
    text: "",
    type: "success",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    closeSnack(state, action: PayloadAction) {
      state.snack.open = false;
    },
    openSnack(state, action: PayloadAction<Omit<Snack, "open">>) {
      state.snack.text = action.payload.text;
      state.snack.type = action.payload.type;
      state.snack.open = true;
    },
    closeModal(state, action: PayloadAction) {
      state.modalOpen = false;
    },
    openModal(state, action: PayloadAction) {
      state.modalOpen = true;
    },
  },
});

export const { closeSnack, openSnack, closeModal, openModal } =
  formSlice.actions;

export default formSlice.reducer;
