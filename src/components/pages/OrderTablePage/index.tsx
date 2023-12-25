import React from "react";
import AddModal from "./AddModal";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import OrderTable from "./OrderTable";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { closeSnack, openModal } from "../../../redux/slices/formSlice/slice";

const OrderTablePage = () => {
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

export default OrderTablePage;
