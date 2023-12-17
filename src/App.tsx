import React from "react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import AddModal from "./components/AddModal";

function App() {
  const [open, setOpen] = useState(false);
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="App">
      <AddModal {...{ open, setOpen, onSubmit }} />
      <Stack direction="row">
        <Stack>
          <Button onClick={() => setOpen(true)}>Добавить заказ</Button>
        </Stack>
        <Stack></Stack>
      </Stack>
    </div>
  );
}

export default App;
