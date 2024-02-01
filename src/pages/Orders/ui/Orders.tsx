import React from "react";
import AddModal from "../../../features/Modals/ModalAddOrder";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import OrderTable from "../../../widgets/OrderTable";
import { useAppDispatch, useAppSelector } from "../../../app/store/redux/store";
import {
  closeSnack,
  openModal,
} from "../../../app/store/redux/slices/formSlice/slice";

export const Orders = () => {
  const dispatch = useAppDispatch();
  const { snack } = useAppSelector((state) => state.form);

  const handleSnackClose = () => {
    dispatch(closeSnack());
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <>
      <AddModal />
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={snack.type}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snack.text}
        </Alert>
      </Snackbar>
      <Stack>
        <Button onClick={handleOpenModal}>Добавить заказ</Button>
        <OrderTable />
      </Stack>
    </>
  );
};
