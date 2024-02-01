import { RootState } from "../../store";

export const selectForm = (state: RootState) => state.form;
export const selectSnack = (state: RootState) => state.form.snack;
