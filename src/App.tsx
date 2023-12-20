import React from "react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import AddModal from "./components/AddModal";
import OrderTable from "./components/OrderTable";

function App() {
  const [open, setOpen] = useState(false);
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="App">
      <AddModal {...{ open, setOpen, onSubmit }} />
      <Stack>
        <Button onClick={() => setOpen(true)}>Добавить заказ</Button>
        <OrderTable />
      </Stack>
    </div>
  );
}

export default App;
