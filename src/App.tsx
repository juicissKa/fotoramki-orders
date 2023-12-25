import React from "react";
import { useState } from "react";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import AddModal from "./components/pages/OrderTablePage/AddModal";
import OrderTable from "./components/pages/OrderTablePage/OrderTable";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { closeSnack, openModal } from "./redux/slices/formSlice/slice";
import { selectSnack } from "./redux/slices/formSlice/selectors";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
