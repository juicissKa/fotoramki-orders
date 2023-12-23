import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import React, { useState } from "react";
import { Field } from "react-final-form";

const PhoneInput: React.FC<any> = (input) => {
  return (
    <Field {...input} validate={(e) => matchIsValidTel(e, "RU")}>
      {(props) => (
        <MuiTelInput
          {...props.input}
          disableDropdown={true}
          defaultCountry="RU"
          required
        />
      )}
    </Field>
  );
};

export default PhoneInput;
