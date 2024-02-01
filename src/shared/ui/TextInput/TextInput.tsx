import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Field } from "react-final-form";

const TextInput: React.FC<any> = (props) => {
  return (
    <Field {...props}>
      {({ input, meta, ...otherProps }) => (
        <TextField
          InputLabelProps={{ shrink: true }}
          {...otherProps}
          {...input}
        />
      )}
    </Field>
  );
};

export default TextInput;
