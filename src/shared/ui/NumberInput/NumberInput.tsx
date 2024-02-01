import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { Field } from "react-final-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  suffix: string;
}

const PatternFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  (props, ref) => {
    const { onChange, suffix, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        suffix={suffix ? " " + suffix : undefined}
        thousandSeparator=" "
        allowNegative={false}
      />
    );
  }
);

const NumberInput: React.FC<any> = (props) => {
  return (
    <Field {...props}>
      {({ input, meta, suffix, ...otherProps }) => (
        <TextField
          {...input}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputComponent: PatternFormatCustom as any,
          }}
          inputProps={{
            suffix: suffix,
          }}
          {...otherProps}
          placeholder={"0 " + suffix}
        />
      )}
    </Field>
  );
};

export default NumberInput;
