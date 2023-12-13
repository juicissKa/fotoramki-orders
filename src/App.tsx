import React from "react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import AddModal from "./components/AddModal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <AddModal {...{ open, setOpen }} />
      <Stack direction="row">
        <Stack>
          <Button onClick={() => setOpen(true)}>Добавить товар</Button>
        </Stack>
        <Stack></Stack>
      </Stack>
    </div>
  );
}

export default App;
