import TextField from "@material-ui/core/TextField";
import React from "react";
import messageResource from "../../constants";

export const StandardInput = ({ name, value, valueSetter, ...rest }) => {
  const handleInputChange = ({ target }) => {
    const _value = { ...value };
    _value[name] = target.value;
    valueSetter(_value);
  };

  return (
    <TextField
      margin="normal"
      id={name}
      label={messageResource[name]}
      value={valueSetter[name]}
      onChange={handleInputChange}
      {...rest}
    />
  );
};
