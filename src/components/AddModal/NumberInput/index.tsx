import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { handleNumberChange } from "../../../utils/handleNumberChange";

type NumberInput = {
  label?: string;
  adornment?: string;
  inputRef?: React.MutableRefObject<undefined>;
};

const NumberInput: React.FC<NumberInput> = ({ label, adornment, inputRef }) => {
  const [value, setValue] = useState("");

  return (
    <TextField
      label={label}
      variant="outlined"
      onChange={(e) => {
        handleNumberChange(e, setValue);
      }}
      value={value}
      InputProps={
        adornment
          ? {
              endAdornment: (
                <InputAdornment position="end">{adornment}</InputAdornment>
              ),
            }
          : undefined
      }
      inputRef={inputRef ? inputRef : undefined}
      required
    />
  );
};

export default NumberInput;
