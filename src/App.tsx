import React from "react";
import { useState } from "react";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import AddModal from "./components/AddModal";
import OrderTable from "./components/OrderTable";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { closeSnack, openModal } from "./redux/slices/formSlice/slice";
import { selectSnack } from "./redux/slices/formSlice/selectors";

function App() {
  const dispatch = useAppDispatch();
  const { snack } = useAppSelector((state) => state.form);

  const handleSnackClose = () => {
    dispatch(closeSnack());
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
