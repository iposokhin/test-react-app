import React from "react";
import { TextField } from "@material-ui/core";
import MaskedInput from "react-text-mask";
import emailMask from "text-mask-addons/dist/emailMask";

const EmailMaskedInput = props => {
  const { inputRef, ...rest } = props;

  return (
    <MaskedInput
      {...rest}
      ref={ref => inputRef(ref ? ref.inputElement : null)}
      mask={emailMask}
      showMask
    />
  );
};

const EmailInput = props => {
  return (
    <TextField
      variant="outlined"
      label="Email"
      placeholder="vasya@mail.ru"
      fullWidth
      InputProps={{
        inputComponent: EmailMaskedInput
      }}
      {...props}
    />
  );
};

export { EmailInput };
