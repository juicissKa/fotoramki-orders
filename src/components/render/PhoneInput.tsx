import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import React from "react";
import { Field } from "react-final-form";

const PhoneInput: React.FC<any> = (input) => {
  const handlePhoneChange = (phone: string) => {
    matchIsValidTel(phone);
  };

  return (
    <Field {...input}>
      {(props) => (
        <MuiTelInput
          {...props.input}
          onlyCountries={["RU"]}
          defaultCountry="RU"
          onChange={handlePhoneChange}
          required
        />
      )}
    </Field>
  );
};

export default PhoneInput;
