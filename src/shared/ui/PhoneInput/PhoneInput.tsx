import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { Field } from "react-final-form";
import { NumericFormatProps, PatternFormat } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const PatternFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  (props, ref) => {
    const { onChange, ...other } = props;

    return (
      <PatternFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.formattedValue,
            },
          });
        }}
        format={"+7 (###) ### ## ##"}
        allowEmptyFormatting
        mask={"X"}
        pattern="[+]7 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}"
      />
    );
  }
);

const PhoneInput: React.FC<any> = (props) => {
  return (
    <Field {...props}>
      {({ input, meta, ...otherProps }) => (
        <TextField
          {...input}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputComponent: PatternFormatCustom as any,
          }}
          {...otherProps}
        />
      )}
    </Field>
  );
};

export default PhoneInput;
